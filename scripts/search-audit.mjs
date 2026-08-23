/**
 * Search architecture qualification over the built static output.
 *
 * This is deliberately evidence-contract driven rather than keyword driven.
 * It fails the build when indexability, sitemap, canonical, prerendering or
 * migration behaviour drifts away from Search 02 decisions.
 */
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { extname, join, relative, sep } from 'node:path';
import { knowledgeResources } from '../src/content/knowledge.js';
import { recordContent } from '../src/content/the-record.js';
import {
  evidenceSearchForPath,
  getIndexableEvidencePaths,
  getIndexableKnowledgePaths,
  knowledgeSearchPolicy,
  searchPolicy,
  validateSearchPolicy,
} from '../src/content/search-policy.js';

const SITE = 'https://glennhammond.com';
const DIST = 'dist';
const fails = [];
const fail = (message) => fails.push(message);
const toPosix = (value) => value.split(sep).join('/');

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const file = join(dir, entry);
    if (statSync(file).isDirectory()) walk(file, out);
    else out.push(file);
  }
  return out;
};

const routeToFile = (route) =>
  route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`;

const fileToRoute = (file) => {
  const normal = toPosix(file);
  if (normal === 'index.html') return '/';
  if (!normal.endsWith('.html')) return null;
  return `/${normal.slice(0, -5)}`;
};

const tags = (html, tagName) =>
  [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi'))].map((match) => match[0]);

const attribute = (tag, name) =>
  new RegExp(`\\b${name}=["']([^"']*)["']`, 'i').exec(tag)?.[1] ?? null;

const uniqueMetaContent = (html, selectorName, selectorValue) => {
  const matches = tags(html, 'meta').filter(
    (tag) => attribute(tag, selectorName)?.toLowerCase() === selectorValue.toLowerCase(),
  );
  return matches.length === 1 ? attribute(matches[0], 'content') : null;
};

const uniqueLinkHref = (html, rel) => {
  const matches = tags(html, 'link').filter(
    (tag) => attribute(tag, 'rel')?.toLowerCase() === rel.toLowerCase(),
  );
  return matches.length === 1 ? attribute(matches[0], 'href') : null;
};

const titleText = (html) => {
  const matches = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  return matches.length === 1 ? matches[0][1] : null;
};

const robotsValues = (html) =>
  tags(html, 'meta')
    .filter((tag) => attribute(tag, 'name')?.toLowerCase() === 'robots')
    .map((tag) => attribute(tag, 'content'))
    .filter(Boolean);

const textContent = (html) => html
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:nbsp|amp|quot|#39);/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

if (!existsSync(DIST)) {
  console.error('dist/ not found — run the production build first.');
  process.exit(1);
}

validateSearchPolicy(recordContent);

// The client-safe search policy contains only metadata. Here, on the build
// side, prove that retained knowledge body content and policy still cover one
// another exactly so neither can drift silently.
const knowledgeIds = new Set(knowledgeResources.map((resource) => resource.id));
const knowledgePolicyIds = new Set(Object.keys(knowledgeSearchPolicy));
if (knowledgeIds.size !== knowledgePolicyIds.size) {
  fail(`retained knowledge policy/content count mismatch: ${knowledgePolicyIds.size} policy entries for ${knowledgeIds.size} resources`);
}
for (const resource of knowledgeResources) {
  const policy = knowledgeSearchPolicy[resource.id];
  if (!policy) {
    fail(`retained knowledge ${resource.id} has no search policy`);
    continue;
  }
  if (policy.canonical !== resource.path) {
    fail(`retained knowledge ${resource.id} canonical ${policy.canonical} does not match content path ${resource.path}`);
  }
}
for (const id of knowledgePolicyIds) {
  if (!knowledgeIds.has(id)) fail(`retained knowledge search policy contains unknown id ${id}`);
}

const corePaths = ['/', '/work', '/practice', '/about', '/contact'];
const evidencePaths = getIndexableEvidencePaths(recordContent);
const knowledgePaths = getIndexableKnowledgePaths();
const expectedPaths = [...new Set([...corePaths, ...evidencePaths, ...knowledgePaths])];

const sitemapFile = join(DIST, 'sitemap.xml');
if (!existsSync(sitemapFile)) {
  fail('sitemap.xml is missing');
} else {
  const sitemap = readFileSync(sitemapFile, 'utf8');
  const sitemapPaths = [...sitemap.matchAll(/<loc>https:\/\/glennhammond\.com(\/[^<]*)<\/loc>/g)]
    .map((match) => match[1] || '/');
  const actual = new Set(sitemapPaths);
  const expected = new Set(expectedPaths);

  for (const path of expected) {
    if (!actual.has(path)) fail(`sitemap missing intentional canonical ${path}`);
  }
  for (const path of actual) {
    if (!expected.has(path)) fail(`sitemap advertises unapproved route ${path}`);
  }
  if (sitemapPaths.length !== actual.size) fail('sitemap contains duplicate URLs');
}

const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const redirects = vercel.redirects ?? [];
const unconditionalRedirects = redirects.filter((redirect) => !(redirect.has?.length));
const redirectSources = new Set(unconditionalRedirects.map((redirect) => redirect.source));

for (const redirect of redirects) {
  if (!redirect.permanent) fail(`redirect ${redirect.source} is not permanent`);
  if (redirect.source.includes(':') || redirect.source.includes('*')) {
    fail(`redirect ${redirect.source} is a wildcard/pattern; migration redirects must be ledger-specific`);
  }

  // Conditional WordPress query redirects use source '/'. They do not replace
  // the homepage and therefore must not be treated as a canonical-source
  // collision or as part of the unconditional redirect-chain graph.
  if (redirect.has?.length) {
    for (const condition of redirect.has) {
      if (condition.type !== 'query' || !condition.key || !condition.value) {
        fail(`conditional redirect ${redirect.source} contains an unsupported/incomplete condition`);
      }
    }
    continue;
  }

  if (redirectSources.has(redirect.destination)) {
    fail(`redirect chain: ${redirect.source} → ${redirect.destination} → another redirect`);
  }
  if (expectedPaths.includes(redirect.source)) {
    fail(`redirect source ${redirect.source} is advertised as canonical/indexable`);
  }
}

const htmlPages = walk(DIST)
  .filter((file) => extname(file) === '.html')
  .map((file) => [toPosix(relative(DIST, file)), readFileSync(file, 'utf8')]);

const titleOwners = new Map();

for (const route of expectedPaths) {
  const file = routeToFile(route);
  const html = htmlPages.find(([name]) => name === file)?.[1];
  if (!html) {
    fail(`${route}: sitemap/indexable route is not statically rendered (${file} missing)`);
    continue;
  }

  const title = titleText(html);
  const description = uniqueMetaContent(html, 'name', 'description');
  const canonical = uniqueLinkHref(html, 'canonical');
  const ogUrl = uniqueMetaContent(html, 'property', 'og:url');
  const robots = robotsValues(html);
  const h1s = [...html.matchAll(/<h1\b[^>]*>/gi)];
  const mainLandmarks = [...html.matchAll(/<main\b[^>]*>/gi)];
  const expectedCanonical = `${SITE}${route === '/' ? '' : route}`;

  if (!title?.trim()) fail(`${route}: missing or duplicate title`);
  else if (titleOwners.has(title.trim())) {
    fail(`${route}: duplicate title also used by ${titleOwners.get(title.trim())}`);
  } else {
    titleOwners.set(title.trim(), route);
  }

  if (!description || description.trim().length < 50) {
    fail(`${route}: missing, duplicate or insubstantial meta description`);
  }
  if (h1s.length !== 1) fail(`${route}: expected exactly one h1, found ${h1s.length}`);
  if (mainLandmarks.length !== 1) fail(`${route}: expected exactly one main landmark, found ${mainLandmarks.length}`);
  if (canonical !== expectedCanonical) {
    fail(`${route}: canonical ${canonical ?? 'missing/duplicate'} does not self-reference ${expectedCanonical}`);
  }
  if (ogUrl !== expectedCanonical) {
    fail(`${route}: og:url ${ogUrl ?? 'missing/duplicate'} does not match canonical ${expectedCanonical}`);
  }
  if (robots.some((value) => /noindex/i.test(value))) {
    fail(`${route}: indexable page carries noindex`);
  }

  const visibleText = textContent(html);
  if (visibleText.length < 300) {
    fail(`${route}: built HTML contains too little primary text (${visibleText.length} characters)`);
  }

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1].split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (redirectSources.has(href)) {
      fail(`${route}: internal link points to redirect source ${href} instead of its final canonical destination`);
    }
  }
}

// Every explicitly noindexed evidence route must stay live, self-canonical and
// absent from the sitemap. This makes indexability an editorial policy rather
// than a route-deletion side effect.
for (const [id, policy] of Object.entries(searchPolicy.artefacts)) {
  if (policy.index) continue;
  const file = routeToFile(policy.canonical);
  const html = htmlPages.find(([name]) => name === file)?.[1];
  if (!html) {
    fail(`noindex artefact ${id} is not statically rendered at ${policy.canonical}`);
    continue;
  }
  if (!robotsValues(html).some((value) => value.toLowerCase() === 'noindex, follow')) {
    fail(`noindex artefact ${id} lacks robots noindex, follow`);
  }
  const canonical = uniqueLinkHref(html, 'canonical');
  if (canonical !== `${SITE}${policy.canonical}`) {
    fail(`noindex artefact ${id} does not self-canonicalise`);
  }
}

// Quarantine still-rendered migration-only Work and specialist-service routes.
for (const [file, html] of htmlPages) {
  const route = fileToRoute(file);
  if (!route || route === '/404') continue;
  const evidencePolicy = evidenceSearchForPath(route);
  const migrationOnlyWork = route.startsWith('/work/') && !evidencePolicy;
  const legacyService = route.startsWith('/services/');
  if ((migrationOnlyWork || legacyService) && !robotsValues(html).some((value) => value.toLowerCase() === 'noindex, follow')) {
    fail(`${route}: migration-only route is addressable but not quarantined with noindex, follow`);
  }
}

if (fails.length) {
  console.error('\nSEARCH ARCHITECTURE AUDIT — FAIL');
  for (const message of fails) console.error(`  ✗ ${message}`);
  console.error(`\n${fails.length} search architecture failure(s).\n`);
  process.exit(1);
}

console.log(
  `search-audit: PASS — ${expectedPaths.length} indexable canonicals, ` +
  `${Object.values(searchPolicy.artefacts).filter((item) => !item.index).length} noindex artefact(s), ` +
  `${redirects.length} ledger-approved permanent redirects`,
);
