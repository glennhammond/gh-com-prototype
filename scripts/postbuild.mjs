/**
 * Post-build: sitemap.xml and robots.txt, generated from the route table so
 * they cannot drift from what was actually rendered.
 */
import { writeFileSync } from "node:fs";
import { projects } from "../src/content/projects.js";

const SITE = "https://glennhammond.com";

const paths = [
  "/",
  "/work",
  ...projects.map((p) => p.path),
  "/services",
  "/about",
  "/contact",
  "/privacy",
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <url>
    <loc>${SITE}${p === "/" ? "/" : p}</loc>
    <lastmod>${today}</lastmod>
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
