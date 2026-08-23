import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  liveSitemapCapture,
  liveSitemapMigration,
  migrationDependencies,
  validateMigrationPolicy,
} from '../src/content/migration-policy.js';

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

const sitemapPath = join(DIST, 'sitemap.xml');
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const redirects = vercel.redirects ?? [];
const redirectBySource = new Map(redirects.map((item) => [item.source, item]));

const routeFileExists = (path) => {
  const file = path === '/' ? 'index.html' : `${path.replace(/^\//, '')}.html`;
  return existsSync(join(DIST, file));
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
    const configured = redirectBySource.get(entry.path);
    if (!configured) {
      fail(`${entry.path}: launch-ready redirect is missing from vercel.json`);
    } else {
      if (!configured.permanent) fail(`${entry.path}: redirect is not permanent`);
      if (configured.destination !== entry.destination) {
        fail(`${entry.path}: redirect points to ${configured.destination}, expected ${entry.destination}`);
      }
    }
  }
}

const unresolved = liveSitemapMigration.filter((entry) => !entry.launchReady);
const unresolvedByAction = unresolved.reduce((acc, entry) => {
  acc[entry.action] = (acc[entry.action] ?? 0) + 1;
  return acc;
}, {});

note(
  `Live-estate snapshot: ${liveSitemapCapture.urlCount} sitemap URLs captured from ${liveSitemapCapture.sourceProject} on ${liveSitemapCapture.capturedAt}`,
);
note(`${liveSitemapMigration.length - unresolved.length} live URLs are launch-ready; ${unresolved.length} still require disposition/implementation`);
note(`Unresolved by action: ${Object.entries(unresolvedByAction).map(([action, count]) => `${action} ${count}`).join(', ')}`);

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
