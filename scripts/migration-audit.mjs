import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  liveSitemapCapture,
  liveSitemapMigration,
  migrationDependencies,
  validateMigrationPolicy,
} from '../src/content/migration-policy.js';
import {
  inheritedArticleRedirects,
  inheritedPortfolioRedirects,
  inheritedRedirectCapture,
  validateInheritedRedirectPolicy,
} from '../src/content/inherited-redirect-policy.js';

const DIST = 'dist';
const SITE = 'https://glennhammond.com';
const PUBLISHING = process.env.PUBLISH === '1';
const failures = [];
const warnings = [];
const notes = [];
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);
const note = (message) => notes.push(message);

if (!existsSync(DIST)) {
  console.error('dist/ not found — run the production build first.');
  process.exit(1);
}

validateMigrationPolicy();
validateInheritedRedirectPolicy();

const sitemapPath = join(DIST, 'sitemap.xml');
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const redirects = vercel.redirects ?? [];

const unconditionalRedirects = redirects.filter((item) => !(item.has?.length));
const redirectBySource = new Map(unconditionalRedirects.map((item) => [item.source, item]));

const routeFileExists = (path) => {
  const file = path === '/' ? 'index.html' : `${path.replace(/^\//, '')}.html`;
  return existsSync(join(DIST, file));
};

const assertRedirect = (source, destination, label = source) => {
  const configured = redirectBySource.get(source);
  if (!configured) {
    fail(`${label}: launch-ready redirect is missing from vercel.json`);
    return;
  }
  if (!configured.permanent) fail(`${label}: redirect is not permanent`);
  if (configured.destination !== destination) {
    fail(`${label}: redirect points to ${configured.destination}, expected ${destination}`);
  }
};

for (const entry of liveSitemapMigration) {
  if (!entry.launchReady) continue;

  if (entry.action === 'retain') {
    const destination = entry.destination ?? entry.path;
    if (!routeFileExists(destination)) {
      fail(`${entry.path}: retained destination ${destination} is not statically rendered`);
    }
    const loc = `${SITE}${destination === '/' ? '/' : destination}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) {
      fail(`${entry.path}: retained destination ${destination} is not in the canonical sitemap`);
    }
  }

  if (entry.action === 'redirect') {
    assertRedirect(entry.path, entry.destination, entry.path);
  }
}

// Historical portfolio rules are separate from today's sitemap because they
// can still carry external equity. Only exact, semantically proven mappings
// may become launch-ready.
for (const entry of inheritedPortfolioRedirects) {
  if (!entry.launchReady) continue;
  if (entry.action === 'redirect') {
    assertRedirect(entry.source, entry.destination, entry.source);
  }
}

// A preserved WordPress identity has two historical source forms: its old
// pretty permalink and /?p=<id>. Both must bypass any intermediate legacy page
// and resolve directly to the same final canonical destination.
for (const entry of inheritedArticleRedirects) {
  if (!entry.launchReady) continue;
  if (!routeFileExists(entry.destination)) {
    fail(`${entry.slug}: preserved destination ${entry.destination} is not statically rendered`);
  }
  if (!sitemap.includes(`<loc>${SITE}${entry.destination}</loc>`)) {
    fail(`${entry.slug}: preserved destination ${entry.destination} is not in the canonical sitemap`);
  }

  assertRedirect(`/${entry.slug}`, entry.destination, `/${entry.slug}`);

  const queryRedirect = redirects.find((redirect) =>
    redirect.source === '/' &&
    redirect.permanent &&
    redirect.destination === entry.destination &&
    redirect.has?.some((condition) =>
      condition.type === 'query' && condition.key === 'p' && condition.value === entry.wpId,
    ),
  );
  if (!queryRedirect) {
    fail(`/?p=${entry.wpId}: preserved WordPress query redirect to ${entry.destination} is missing`);
  }
}

const unresolved = liveSitemapMigration.filter((entry) => !entry.launchReady);
const unresolvedByAction = unresolved.reduce((acc, entry) => {
  acc[entry.action] = (acc[entry.action] ?? 0) + 1;
  return acc;
}, {});

const unresolvedInheritedArticles = inheritedArticleRedirects.filter((entry) => !entry.launchReady);
const inheritedByAction = unresolvedInheritedArticles.reduce((acc, entry) => {
  acc[entry.action] = (acc[entry.action] ?? 0) + 1;
  return acc;
}, {});
const unresolvedPortfolio = inheritedPortfolioRedirects.filter((entry) => !entry.launchReady);

note(
  `Live-estate snapshot: ${liveSitemapCapture.urlCount} sitemap URLs captured from ${liveSitemapCapture.sourceProject} on ${liveSitemapCapture.capturedAt}`,
);
note(`${liveSitemapMigration.length - unresolved.length} live URLs are launch-ready; ${unresolved.length} still require disposition/implementation`);
note(`Live unresolved by action: ${Object.entries(unresolvedByAction).map(([action, count]) => `${action} ${count}`).join(', ')}`);
note(
  `Inherited WordPress estate: ${inheritedRedirectCapture.articleCount} article identities / ${inheritedRedirectCapture.articleSourceForms} historical source forms captured from ${inheritedRedirectCapture.sourceProject}`,
);
note(`${inheritedArticleRedirects.length - unresolvedInheritedArticles.length} inherited articles are launch-ready; ${unresolvedInheritedArticles.length} remain unresolved`);
note(`Inherited unresolved by action: ${Object.entries(inheritedByAction).map(([action, count]) => `${action} ${count}`).join(', ')}`);
note(`${inheritedPortfolioRedirects.length - unresolvedPortfolio.length} inherited portfolio rule(s) are launch-ready; ${unresolvedPortfolio.length} remain unresolved`);

const dependencyGaps = Object.entries(migrationDependencies)
  .filter(([, ready]) => !ready)
  .map(([name]) => name);

if (dependencyGaps.length) {
  note(`Migration dependencies still open: ${dependencyGaps.join(', ')}`);
}

if (unresolved.length) {
  const message = `${unresolved.length} currently live sitemap URLs are not cutover-ready`;
  if (PUBLISHING) fail(message);
  else warn(`${message}; review builds remain allowed`);
}

if (unresolvedInheritedArticles.length || unresolvedPortfolio.length) {
  const message = `${unresolvedInheritedArticles.length} inherited article identities and ${unresolvedPortfolio.length} inherited portfolio rules are not cutover-ready`;
  if (PUBLISHING) fail(message);
  else warn(`${message}; inherited authority remains protected from cutover`);
}

if (dependencyGaps.length) {
  const message = `${dependencyGaps.length} cutover dependency gate(s) remain open`;
  if (PUBLISHING) fail(message);
  else warn(`${message}; PUBLISH=1 will fail until they are closed`);
}

// A broad portfolio/design-system redirect can hide unresolved semantic debt.
// Review builds fail immediately if a new wildcard is introduced; this is not
// deferred to PUBLISH because it would undermine the migration ledger itself.
for (const redirect of redirects) {
  if ((redirect.source.includes('*') || redirect.source.includes(':')) && /portfolio|design-system|work/.test(redirect.source)) {
    fail(`Broad migration redirect is prohibited: ${redirect.source} → ${redirect.destination}`);
  }
}

const line = '-'.repeat(64);
console.log(`\n${line}\nMIGRATION CUTOVER AUDIT\n${line}`);
for (const item of notes) console.log(`  · ${item}`);
if (warnings.length) {
  console.log('\nWarnings');
  for (const item of warnings) console.log(`  ! ${item}`);
}
if (failures.length) {
  console.log('\nFailures');
  for (const item of failures) console.log(`  ✗ ${item}`);
  console.log(`\n${line}\n${failures.length} migration failure(s).\n`);
  process.exit(1);
}
console.log(`\n${line}\nMigration review gate passed.\n`);
