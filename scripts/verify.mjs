/**
 * Production verification — Live Site Renewal 01.
 *
 * The gate checks the rendered estate rather than relying on memory: canonical
 * content, metadata, noindex policy, internal links, publishing cleanliness,
 * payload budgets and accidental image preloading all fail visibly.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative, sep } from "node:path";
import { gzipSync } from "node:zlib";
import { clients } from "../src/content/clients.js";
import { projects, withheldProjects } from "../src/content/projects.js";
import { recordContent, recordRoutePaths } from "../src/content/public-record.js";
import { testimonials } from "../src/content/testimonials.js";
import { isPublishable } from "../src/content/status.js";
import {
  getIndexableEvidencePaths,
  getIndexableKnowledgePaths,
  shouldNoindexPath,
  validateSearchPolicy,
} from "../src/content/search-policy.js";

const DIST = "dist";
const failures = [];
const warnings = [];
const notes = [];
const fail = (m) => failures.push(m);
const warn = (m) => warnings.push(m);
const note = (m) => notes.push(m);
const toPosix = (p) => p.split(sep).join("/");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const fileToRoute = (file) => {
  const normal = toPosix(file);
  if (normal === "index.html") return "/";
  if (!normal.endsWith(".html")) return null;
  return `/${normal.slice(0, -5)}`;
};

if (!existsSync(DIST)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

validateSearchPolicy(recordContent);

const files = walk(DIST);
const htmlFiles = files.filter((f) => extname(f) === ".html");
const html = Object.fromEntries(
  htmlFiles.map((f) => [toPosix(relative(DIST, f)), readFileSync(f, "utf8")])
);
const renderedRoutes = new Set(
  Object.keys(html).map(fileToRoute).filter(Boolean),
);

/* --- 1. Publishing cleanliness ------------------------------------------ */
const HARD_PLACEHOLDER = [
  /\[to be written\]/i,
  /\blorem ipsum\b/i,
  /\bTKTK\b/,
  /\bTBC\b/,
  /\bTBD\b/,
  /\bXXX\b/,
  /coming soon/i,
  />\s*placeholder text\s*</i,
];
for (const [file, source] of Object.entries(html)) {
  for (const pattern of HARD_PLACEHOLDER) {
    if (pattern.test(source)) fail(`Placeholder ${pattern} found in ${file}`);
  }
}

const STALE_PUBLIC_COPY = [
  /I read every enquiry myself and reply within 24 hours/i,
  /Replies within 24 hours/i,
];
for (const [file, source] of Object.entries(html)) {
  for (const pattern of STALE_PUBLIC_COPY) {
    if (pattern.test(source)) fail(`Retired response-promise copy remains in ${file}`);
  }
}

/* --- 2. Client/logo and route guardrails -------------------------------- */
const unapprovedNames = clients.filter((c) => !c.nameApproved);
for (const [file, source] of Object.entries(html)) {
  const text = source.replace(/<[^>]+>/g, " ");
  for (const client of unapprovedNames) {
    if (text.includes(client.name)) fail(`Unapproved client name "${client.name}" appears in ${file}`);
  }
}

const approvedLogoStems = clients
  .filter((c) => c.logoApproved && c.logoFile)
  .map((c) => c.logoFile.replace(/\.[a-z]+$/i, ""));
for (const file of files) {
  const rel = toPosix(relative(DIST, file));
  if (!/logo/i.test(rel)) continue;
  if (!approvedLogoStems.some((stem) => rel.includes(stem))) {
    fail(`Logo asset shipped without a logoApproved record: ${rel}`);
  }
}

for (const withheld of withheldProjects) {
  if (html[`work/${withheld.slug}.html`] || html[`work/${withheld.slug}/index.html`]) {
    fail(`Withheld project "${withheld.slug}" was rendered. ${withheld.reason}`);
  } else {
    note(`Withheld as intended: /work/${withheld.slug}`);
  }
}

for (const project of projects) {
  if (!isPublishable(project.status)) fail(`Project "${project.slug}" has status "${project.status}" but is routed.`);
}
for (const t of testimonials) {
  if (!t.name || !t.role || !t.organisation || !t.dateApproved) {
    fail(`Testimonial "${t.id}" is missing a name, role, organisation or approval date.`);
  }
}

/* --- 3. Required pre-rendered content ----------------------------------- */
const REQUIRED = {
  "index.html": [
    "Thirty years of making digital things.",
    "Still learning how to make them better.",
    "eLearning Design System",
  ],
  "work.html": [
    "Projects across digital products, experiences, learning and systems.",
    "Wellbeing Studio 2027",
    "eLearning Design System",
  ],
  "work/elearning-design-system.html": [
    "eLearning Design System",
    "A core system, not an ISQ-owned style guide.",
    "Learning data is becoming part of the design system.",
  ],
  "work/wellbeing-studio.html": ["The shape of the work", "Designing entry around moments in the working day"],
  "work/wellbeing-studio/contextual-entry.html": ["Why examine this", "Inspect the artefact"],
  "work/wellbeing-studio/contextual-entry/daily-wellbeing-journey.html": ["Need a reset between meetings?", "Arrival Reset Breath", "Read the analysis"],
  "work/wellbeing-studio/connected-service.html": ["Useful Experience is the centre", "Inspect the relationship model"],
  "work/wellbeing-studio/connected-service/relationship-model.html": ["Action / Return / Explore", "Read the analysis"],
  "work/wellbeing-studio/ruok-production-slice.html": ["Capability proved", "production vertical slice"],
  "work/casa/flight-examiner-rating.html": ["Assessment inside a safety regulator", "Designing for examiner judgement rather than recall"],
  "work/connect-and-learn.html": ["The platform could not wait for the courses", "60+"],
  "work/tafe-pathways.html": ["A digital environment inside a human conversation", "Designing technology to support a conversation, not replace it"],
  "practice.html": [
    "The work changes. Certain decisions keep recurring.",
    "Start with the situation, not the inherited structure.",
    "Keep connected decisions connected.",
    "Solve at the scale the problem requires.",
    "Frame. Shape. Make. Evidence.",
  ],
  "about.html": ["Thirty years making digital things", "Where I have done it"],
  "contact.html": ["Tell me what is happening", "Send this"],
  "privacy.html": ["Contact enquiries and Formspree", "No analytics or advertising tracking"],
};

for (const [file, needles] of Object.entries(REQUIRED)) {
  const source = html[file];
  if (!source) {
    fail(`Expected pre-rendered page missing: ${file}`);
    continue;
  }
  for (const needle of needles) {
    if (!source.includes(needle)) fail(`"${needle}" not present in pre-rendered ${file}`);
  }
}

/* --- 4. Public-language contract ---------------------------------------- */
const PUBLIC_IDENTITY_FORBIDDEN = [
  [/\bTHE RECORD\b/, "THE RECORD"],
  [/Evidence landscape/i, "Evidence landscape"],
  [/professional evidence system/i, "professional evidence system"],
  [/one evidence grammar/i, "one evidence grammar"],
  [/<dt>Altitude<\/dt>/i, "Altitude metadata label"],
  [/>\s*View Record\s*</i, "View Record CTA"],
];
for (const [file, source] of Object.entries(html)) {
  for (const [pattern, label] of PUBLIC_IDENTITY_FORBIDDEN) {
    if (pattern.test(source)) fail(`Public identity leak "${label}" found in ${file}`);
  }
}

/* --- 5. Metadata + semantic shape --------------------------------------- */
for (const [file, source] of Object.entries(html)) {
  if (file === "404.html") continue;
  if (!/<title[^>]*>[^<]{10,}<\/title>/.test(source)) fail(`Missing or short <title> in ${file}`);
  if (!/name="description"[^>]*content="[^"]{40,}"/.test(source)) fail(`Missing or short meta description in ${file}`);
  if (!/rel="canonical"/.test(source)) fail(`Missing canonical in ${file}`);
  if (!/property="og:title"/.test(source)) fail(`Missing og:title in ${file}`);
  if (!/application\/ld\+json/.test(source)) warn(`No structured data in ${file}`);

  const h1s = source.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(`${file} has ${h1s.length} h1 elements, expected 1`);
}

/* --- 6. noindex policy --------------------------------------------------- */
for (const [file, source] of Object.entries(html)) {
  const route = fileToRoute(file);
  const hasNoindex = /name="robots"[^>]*content="[^"]*noindex/i.test(source);
  const shouldNoindex =
    file === "404.html" ||
    file === "privacy.html" ||
    (route ? shouldNoindexPath(route) : false);

  if (shouldNoindex && !hasNoindex) fail(`${file} should carry noindex but does not`);
  else if (!shouldNoindex && hasNoindex) fail(`${file} unexpectedly carries noindex`);
}

/* --- 7. Internal link integrity ----------------------------------------- */
const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
const redirectSources = new Set((vercel.redirects ?? []).map((r) => r.source));
for (const [file, source] of Object.entries(html)) {
  const hrefs = [...source.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    if (href.startsWith("/assets/") || href.includes(".")) continue;
    const clean = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (!renderedRoutes.has(clean) && !redirectSources.has(clean)) {
      fail(`Broken internal link "${href}" in ${file}`);
    }
  }
}

/* --- 8. Editorial review markers ---------------------------------------- */
const PUBLISHING = process.env.PUBLISH === "1";
let placeholderCount = 0;
const placeholderPages = [];
for (const [file, source] of Object.entries(html)) {
  const marks = source.match(/class="ph-mark"/g) ?? [];
  const gapPlates = source.match(/class="phplate"|class="gpanel"/g) ?? [];
  const total = marks.length + gapPlates.length;
  if (total) {
    placeholderCount += total;
    placeholderPages.push(`${file}: ${marks.length} inline, ${gapPlates.length} image`);
  }
}
const gapItems = projects.reduce((n, p) => n + (p.gaps?.length ?? 0), 0);
if (placeholderCount) {
  note(`${placeholderCount} editorial placeholders across ${placeholderPages.length} migration/review pages`);
  note(`${gapItems} source facts remain listed to confirm`);
  if (PUBLISHING) fail(`PUBLISH=1 but ${placeholderCount} editorial placeholders remain.`);
  else warn("Review-only routes still contain editorial placeholders; canonical release pages are checked separately by release-audit.");
}

/* --- 9. Performance budgets --------------------------------------------- */
const gz = (f) => gzipSync(readFileSync(f)).length;
const sum = (list) => list.reduce((n, f) => n + gz(f), 0);
const js = files.filter((f) => f.endsWith(".js"));
const css = files.filter((f) => f.endsWith(".css"));
const fonts = files.filter((f) => f.endsWith(".woff2"));
const images = files.filter((f) => /\.(avif|webp|png|jpg|svg)$/.test(f));

const BUDGET = { initialJs: 120, chunk: 100, css: 30, image: 180 };
const manifestPath = join(DIST, ".vite", "manifest.json");
let initialJsKb = null;
if (!existsSync(manifestPath)) {
  fail("Vite manifest missing; cannot qualify initial client JavaScript");
} else {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const entryKeys = Object.keys(manifest).filter((key) => manifest[key]?.isEntry);
  const initialFiles = new Set();
  const visit = (key) => {
    const item = manifest[key];
    if (!item) return;
    if (item.file?.endsWith(".js")) initialFiles.add(join(DIST, item.file));
    for (const imported of item.imports ?? []) visit(imported);
  };
  entryKeys.forEach(visit);
  initialJsKb = Math.round(sum([...initialFiles]) / 1024);
}

const totalJsKb = Math.round(sum(js) / 1024);
const largestChunkKb = js.length ? Math.round(Math.max(...js.map((f) => gz(f))) / 1024) : 0;
const cssKb = Math.round(sum(css) / 1024);
const fontKb = Math.round(fonts.reduce((n, f) => n + statSync(f).size, 0) / 1024);
const largestImageKb = Math.round(images.reduce((max, f) => Math.max(max, statSync(f).size), 0) / 1024);

if (initialJsKb !== null) note(`Initial JS ${initialJsKb}KB gzipped (budget ${BUDGET.initialJs})`);
note(`Total route JS ${totalJsKb}KB gzipped`);
note(`Largest JS chunk ${largestChunkKb}KB gzipped (budget ${BUDGET.chunk})`);
note(`CSS ${cssKb}KB gzipped (budget ${BUDGET.css})`);
note(`Fonts ${fontKb}KB total across ${fonts.length} files`);
note(`Largest image ${largestImageKb}KB (budget ${BUDGET.image})`);

if (initialJsKb !== null && initialJsKb > BUDGET.initialJs) fail(`Initial JS budget exceeded: ${initialJsKb}KB > ${BUDGET.initialJs}KB`);
if (largestChunkKb > BUDGET.chunk) fail(`JS chunk budget exceeded: ${largestChunkKb}KB > ${BUDGET.chunk}KB`);
if (cssKb > BUDGET.css) fail(`CSS budget exceeded: ${cssKb}KB > ${BUDGET.css}KB`);
if (largestImageKb > BUDGET.image) fail(`Image budget exceeded: ${largestImageKb}KB > ${BUDGET.image}KB`);

/* --- 10. Preload discipline --------------------------------------------- */
let imagePreloadCount = 0;
for (const [file, source] of Object.entries(html)) {
  const preloads = source.match(/<link\b[^>]*rel="preload"[^>]*as="image"[^>]*>/gi) ?? [];
  if (preloads.length) {
    imagePreloadCount += preloads.length;
    fail(`${file} contains ${preloads.length} generated image preload hint(s); lazy evidence must not be promoted to critical network work`);
  }
}
note(`Generated image preload hints: ${imagePreloadCount}`);

/* --- 11. Third-party runtime resources ---------------------------------- */
const ALLOWED_EXTERNAL_RESOURCES = ["isq-elearning-design-system.vercel.app"];
for (const [file, source] of Object.entries(html)) {
  const externalSrcs = [...source.matchAll(/\bsrc="(https?:\/\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !u.startsWith("https://glennhammond.com"))
    .filter((u) => !u.includes("schema.org"))
    .filter((u) => !ALLOWED_EXTERNAL_RESOURCES.some((allowed) => u.includes(allowed)));
  if (externalSrcs.length) fail(`Third-party runtime resource referenced in ${file}: ${externalSrcs.join(", ")}`);
}

/* --- 12. Sitemap integrity ---------------------------------------------- */
const sitemapPath = join(DIST, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("dist/sitemap.xml not found");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  if (/<loc>[^<]*\/privacy<\/loc>/.test(sitemap)) fail("Sitemap includes /privacy, which is noindex");
  if (/<lastmod>/.test(sitemap)) fail("Sitemap contains a fabricated/untrusted lastmod value");

  const indexableEvidence = getIndexableEvidencePaths(recordContent);
  const indexableKnowledge = getIndexableKnowledgePaths();
  for (const route of indexableEvidence) {
    if (!sitemap.includes(`<loc>https://glennhammond.com${route}</loc>`)) fail(`Sitemap missing evidence route ${route}`);
  }
  for (const route of indexableKnowledge) {
    if (!sitemap.includes(`<loc>https://glennhammond.com${route}</loc>`)) fail(`Sitemap missing knowledge route ${route}`);
  }
  if (sitemap.includes("/work/isq-elearning-design-system")) fail("Sitemap still advertises retired ISQ-specific design-system canonical");
  if (!sitemap.includes("/work/elearning-design-system")) fail("Sitemap is missing renewed eLearning Design System canonical");
  note(`Sitemap: ${indexableEvidence.length} evidence routes + ${indexableKnowledge.length} retained knowledge route(s)`);
}

const line = "-".repeat(64);
console.log(`\n${line}\nVERIFICATION — ${htmlFiles.length} pages\n${line}`);
for (const n of notes) console.log(`  · ${n}`);
if (warnings.length) {
  console.log("\nWarnings");
  for (const w of warnings) console.log(`  ! ${w}`);
}
if (failures.length) {
  console.log("\nFailures");
  for (const f of failures) console.log(`  ✗ ${f}`);
  console.log(`\n${line}\n${failures.length} failure(s).\n`);
  process.exit(1);
}
console.log(`\n${line}\nAll checks passed.\n`);
