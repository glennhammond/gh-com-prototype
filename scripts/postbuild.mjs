/**
 * Post-build sitemap + robots.
 *
 * The route table still renders the legacy estate during migration, but the
 * sitemap expresses the canonical product only. Keeping a route addressable is
 * not the same as declaring it canonical or asking search engines to discover it.
 * Redirects and destructive retirement remain a separate Go-Live Gate.
 */
import { writeFileSync } from 'node:fs';
import { recordContent } from '../src/content/the-record.js';

const SITE = 'https://glennhammond.com';

const evidencePaths = [
  ...recordContent.projects.map((project) => project.path),
  ...recordContent.records.map((record) => record.path),
  ...recordContent.artefacts.map((artefact) => artefact.path),
];

const paths = [
  '/',
  '/work',
  ...evidencePaths,
  '/practice',
  '/about',
  '/contact',
];

const uniquePaths = [...new Set(paths)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniquePaths
  .map((path) => `  <url>\n    <loc>${SITE}${path === '/' ? '/' : path}</loc>\n  </url>`)
  .join('\n')}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;

writeFileSync('dist/sitemap.xml', sitemap);
writeFileSync('dist/robots.txt', robots);
console.log(`postbuild: sitemap.xml (${uniquePaths.length} canonical URLs), robots.txt`);
