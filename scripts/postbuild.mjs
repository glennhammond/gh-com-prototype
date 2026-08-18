/**
 * Post-build: sitemap.xml and robots.txt, generated from the route table so
 * they cannot drift from what was actually rendered.
 *
 * SEO migration Phase A (18 Aug 2026, docs/SEO-MIGRATION.md §27):
 *   - /practice is canonical; /services is not listed (it 301s at the edge).
 *   - /privacy is excluded — it is noindex while its legal copy is unfinished
 *     (see Seo.jsx `noindex` and DECISIONS.md #19).
 *   - `lastmod` is omitted entirely rather than fabricated per-build. The
 *     migration doc requires genuine values or none; this repo does not yet
 *     track real per-page content dates, so none is the honest choice.
 */
import { writeFileSync } from "node:fs";
import { projects } from "../src/content/projects.js";

const SITE = "https://glennhammond.com";

const paths = [
  "/",
  "/work",
  ...projects.map((p) => p.path),
  "/practice",
  "/services/rise-design-systems",
  "/services/storyline-development",
  "/about",
  "/contact",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <url>
    <loc>${SITE}${p === "/" ? "/" : p}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync("dist/sitemap.xml", sitemap);
writeFileSync("dist/robots.txt", robots);

console.log(`postbuild: sitemap.xml (${paths.length} URLs), robots.txt`);
