/** Post-build sitemap + robots for intentionally indexable canonical surfaces. */
import { writeFileSync } from 'node:fs';
import { recordContent } from '../src/content/public-record.js';
import {
  getIndexableEvidencePaths,
  getIndexableKnowledgePaths,
} from '../src/content/search-policy.js';

const SITE = 'https://glennhammond.com';

const evidencePaths = getIndexableEvidencePaths(recordContent);
const knowledgePaths = getIndexableKnowledgePaths();

const paths = [
  '/',
  '/work',
  ...evidencePaths,
  '/practice',
  ...knowledgePaths,
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
console.log(`postbuild: sitemap.xml (${uniquePaths.length} intentional canonical URLs), robots.txt`);
