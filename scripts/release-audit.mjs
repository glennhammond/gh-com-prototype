import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Release qualification is intentionally narrower than the whole-estate
 * editorial review performed by verify.mjs.
 *
 * The static build still contains legacy Work/service pages so they can be
 * inspected during migration, but those routes are quarantined with noindex.
 * They must not make a canonical launch fail merely because their editorial
 * review placeholders remain visible. Conversely, no intentionally indexable
 * canonical surface may ship with a visible editorial placeholder.
 *
 * sitemap.xml is the generated source of truth for indexable launch surfaces.
 * Privacy is also public at launch even though it is deliberately absent from
 * the sitemap, so it is qualified explicitly here.
 */

const DIST = 'dist';
const SITEMAP = join(DIST, 'sitemap.xml');
const failures = [];
const notes = [];

if (!existsSync(SITEMAP)) {
  console.error('release-audit: FAIL — dist/sitemap.xml is missing');
  process.exit(1);
}

const sitemap = readFileSync(SITEMAP, 'utf8');
const siteUrl = 'https://glennhammond.com';
const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const value = match[1];
  if (!value.startsWith(siteUrl)) return null;
  const path = value.slice(siteUrl.length) || '/';
  return path === '' ? '/' : path;
}).filter(Boolean);

const releasePaths = [...new Set([...sitemapPaths, '/privacy'])];

function routeToFile(path) {
  if (path === '/') return join(DIST, 'index.html');
  return join(DIST, `${path.replace(/^\//, '')}.html`);
}

function countMatches(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

for (const path of releasePaths) {
  const file = routeToFile(path);
  if (!existsSync(file)) {
    failures.push(`${path}: expected launch file is missing (${file})`);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const inline = countMatches(html, /class="[^"]*\bph-mark\b[^"]*"/g);
  const image = countMatches(html, /class="[^"]*\bphplate\b[^"]*"/g);
  const gapPanel = countMatches(html, /class="[^"]*\bgpanel\b[^"]*"/g);
  const total = inline + image + gapPanel;

  if (total > 0) {
    failures.push(`${path}: ${total} visible editorial placeholder(s) remain (${inline} inline, ${image} image, ${gapPanel} gap panel)`);
  }

  if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) {
    failures.push(`${path}: launch surface renders a noindex meta tag`);
  }
}

notes.push(`${sitemapPaths.length} intentionally indexable canonical surface(s) qualified from sitemap.xml`);
notes.push('Privacy qualified as a public non-sitemap launch surface');
notes.push('Legacy noindex/review routes remain subject to the whole-estate editorial report in verify.mjs, but are not release blockers');

console.log('\n----------------------------------------------------------------');
console.log('RELEASE QUALIFICATION AUDIT');
console.log('----------------------------------------------------------------');
for (const note of notes) console.log(`  · ${note}`);

if (failures.length) {
  console.log('\nFailures');
  for (const failure of failures) console.log(`  ✗ ${failure}`);
  console.log('\n----------------------------------------------------------------');
  console.log(`${failures.length} release qualification failure(s).`);
  process.exit(1);
}

console.log('----------------------------------------------------------------');
console.log('Release qualification gate passed.');
