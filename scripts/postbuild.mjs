/**
 * Post-build sitemap + robots.
 *
 * Historical routes remain listed during production implementation because
 * destructive migration decisions are a Go-Live Gate concern. THE RECORD's
 * new Record and Artefact routes are added as canonical live URLs. Genuine
 * lastmod dates remain omitted rather than fabricated.
 */
import { writeFileSync } from 'node:fs';
import { projects } from '../src/content/projects.js';
import { recordRoutePaths } from '../src/content/the-record.js';

const SITE = 'https://glennhammond.com';

const paths = [
  '/',
  '/work',
  ...projects.map((project) => project.path),
  ...recordRoutePaths,
  '/practice',
  '/services/rise-design-systems',
  '/services/storyline-development',
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
console.log(`postbuild: sitemap.xml (${uniquePaths.length} URLs), robots.txt`);
