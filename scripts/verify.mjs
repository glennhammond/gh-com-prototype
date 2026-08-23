/**
 * Build verification — Blueprint §17, §26, §27.
 *
 * The blueprint asks for the publishing guardrails to be enforced in code
 * rather than remembered. This script reads the built output in dist/ and
 * fails on anything that must not ship.
 *
 * Run with:  npm run verify   (or npm run check to build first)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative, sep } from "node:path";
import { gzipSync } from "node:zlib";
import { clients } from "../src/content/clients.js";
import { projects, withheldProjects } from "../src/content/projects.js";
import { recordRoutePaths } from "../src/content/the-record.js";
import { testimonials } from "../src/content/testimonials.js";
import { isPublishable } from "../src/content/status.js";

const DIST = "dist";
const failures = [];
const warnings = [];
const notes = [];

const fail = (m) => failures.push(m);
const warn = (m) => warnings.push(m);
const note = (m) => notes.push(m);

/* --- helpers -------------------------------------------------------------- */

/* path.relative() returns backslash-separated paths on Windows; every route
   key in this file is forward-slash. Normalise before use as a lookup key. */
const toPosix = (p) => p.split(sep).join("/");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => extname(f) === ".html");
const html = Object.fromEntries(
  htmlFiles.map((f) => [toPosix(relative(DIST, f)), readFileSync(f, "utf8")])
);

/* --- 1. Placeholder scan --------------------------------------------------- */

const PLACEHOLDER = [
  /\[to be written\]/i,
  /\blorem ipsum\b/i,
  /\bTKTK\b/,
  /\bTBC\b/,
  /\bTBD\b/,
  /\bXXX\b/,
  /coming soon/i,
  /placeholder text/i,
];

for (const [file, source] of Object.entries(html)) {
  for (const pattern of PLACEHOLDER) {
    if (pattern.test(source)) {
      fail(`Placeholder ${pattern} found in ${file}`);
    }
  }
}

/* --- 2. Unapproved client names and logos ---------------------------------- */

const unapprovedNames = clients.filter((c) => !c.nameApproved);
for (const [file, source] of Object.entries(html)) {
  const text = source.replace(/<[^>]+>/g, " ");
  for (const client of unapprovedNames) {
    if (text.includes(client.name)) {
      fail(`Unapproved client name "${client.name}" appears in ${file}`);
    }
  }
}

/* Only clients with logoApproved may have a mark in the build. The check is
   scoped to logo assets so a project screenshot cannot trip it. */
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

/* --- 3. Withheld routes ---------------------------------------------------- */

for (const withheld of withheldProjects) {
  if (html[`work/${withheld.slug}.html`] || html[`work/${withheld.slug}/index.html`]) {
    fail(
      `Withheld project "${withheld.slug}" was rendered. ${withheld.reason}`
    );
  } else {
    note(`Withheld as intended: /work/${withheld.slug}`);
  }
}

/* --- 4. Content status ------------------------------------------------------ */

for (const project of projects) {
  if (!isPublishable(project.status)) {
    fail(`Project "${project.slug}" has status "${project.status}" but is routed.`);
  }
}
for (const t of testimonials) {
  if (!t.name || !t.role || !t.organisation || !t.dateApproved) {
    fail(`Testimonial "${t.id}" is missing a name, role, organisation or approval date.`);
  }
}

/* --- 5. Pre-rendered content (no-JS resilience) ---------------------------- */

const REQUIRED = {
  "index.html": ["Thirty years of making digital things.", "THE RECORD", "Frame. Shape. Make. Evidence."],
  "work.html": ["Work is where the practice is composed", "Wellbeing Studio 2027", "TAFE Queensland SkillsTech Pathways"],
  "work/wellbeing-studio.html": ["The shape of the work", "Designing entry around moments in the working day"],
  "work/wellbeing-studio/contextual-entry.html": ["Why examine this", "Inspect the artefact"],
  "work/wellbeing-studio/contextual-entry/daily-wellbeing-journey.html": ["Need a reset between meetings?", "Arrival Reset Breath", "View Record"],
  "work/wellbeing-studio/connected-service.html": ["Useful Experience is the centre", "Inspect the relationship model", "the R U OK? Day production slice"],
  "work/wellbeing-studio/connected-service/relationship-model.html": ["Action / Return / Explore", "Continue only when continuing is useful"],
  "work/wellbeing-studio/ruok-production-slice.html": ["Capability proved", "The team proved authentication", "Inspect the production map"],
  "work/wellbeing-studio/ruok-production-slice/qualification-map.html": ["Production rule", "Product correction", "2c56d6b", "View Record"],
  "work/casa/flight-examiner-rating.html": ["Assessment inside a safety regulator", "Designing for examiner judgement rather than recall"],
  "work/casa/flight-examiner-rating/examiner-judgement.html": ["Accuracy without application becomes a document", "Inspect the evidence sequence"],
  "work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning.html": ["Know which instrument governs", "Make the principles of sound assessment explicit", "Show what sits below the visible task", "View Record"],
  "work/connect-and-learn.html": ["The platform could not wait for the courses", "Designing the platform and course rebuild as one system"],
  "work/connect-and-learn/concurrent-migration.html": ["Sequential delivery would have made the wrong decisions look final", "Inspect the dependency map"],
  "work/connect-and-learn/concurrent-migration/dependency-map.html": ["Shape the destination and the estate together", "What serial delivery would get wrong", "View Record"],
  "work/isq-elearning-design-system.html": ["ISQ eLearning Design System", "least complex implementation"],
  "work/casa.html": ["The five projects", "What the six years contained"],
  "work/casa/class.html": ["CASA Learning Academy for Safe Skies", "not public-facing"],
  "work/casa/aviationworx.html": ["Image to supply", "no image in the recovered archive"],
  "work/casa/course-system.html": ["Template or prototype"],
  "work/tafe-pathways.html": ["A digital environment inside a human conversation", "Designing technology to support a conversation, not replace it"],
  "work/tafe-pathways/supporting-conversation.html": ["A careers tool can answer questions", "Inspect the exploration environment"],
  "work/tafe-pathways/supporting-conversation/exploration-environment.html": ["A hub, not a funnel", "Comparable industry data", "Put careers into an environment", "View Record"],
  "work/sonic-healthplus.html": ["Sonic HealthPlus"],
  "work/safetyhub-asbestos.html": ["Safetyhub"],
  "work/isq-differentiated-learning.html": ["Years 7 to 10"],
  "work/goodstart-myportal.html": ["640 centres"],
  "work/interaction-prototypes.html": ["SCORM 2004"],
  "practice.html": [
    "The work changes. Certain decisions keep recurring.",
    "Start with the situation, not the inherited structure.",
    "Keep connected decisions connected.",
    "Solve at the altitude the problem requires.",
    "Frame. Shape. Make. Evidence.",
    "The public Record is selective",
  ],
  "about.html": ["Where I have done it"],
  "contact.html": ["Tell me what is happening", "What does the problem seem closest to"],
  "privacy.html": ["must not go live"],
};

for (const [file, needles] of Object.entries(REQUIRED)) {
  const source = html[file];
  if (!source) {
    fail(`Expected pre-rendered page missing: ${file}`);
    continue;
  }
  for (const needle of needles) {
    if (!source.includes(needle)) {
      fail(`"${needle}" not present in pre-rendered ${file}`);
    }
  }
}

/* Practice Architecture v1 regression gate. These are legacy organising
   markers, not merely old phrases: if they return, the route has slipped back
   into capability/commercial architecture. */
const PRACTICE_LEGACY_MARKERS = [
  "Four layers, one owner",
  "Four engagements",
  "The right tool for the learning problem",
];
const practiceSource = html["practice.html"] ?? "";
for (const marker of PRACTICE_LEGACY_MARKERS) {
  if (practiceSource.includes(marker)) {
    fail(`Legacy Practice architecture marker returned: "${marker}"`);
  }
}

/* --- 6. Head metadata ------------------------------------------------------- */

for (const [file, source] of Object.entries(html)) {
  if (file === "404.html") continue;
  // Tags carry a data-rh attribute from the head manager, so match loosely.
  if (!/<title[^>]*>[^<]{10,}<\/title>/.test(source))
    fail(`Missing or short <title> in ${file}`);
  if (!/name="description"[^>]*content="[^"]{40,}"/.test(source))
    fail(`Missing or short meta description in ${file}`);
  if (!/rel="canonical"/.test(source)) fail(`Missing canonical in ${file}`);
  if (!/property="og:title"/.test(source)) fail(`Missing og:title in ${file}`);
  if (!/application\/ld\+json/.test(source)) warn(`No structured data in ${file}`);

  const h1s = source.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(`${file} has ${h1s.length} h1 elements, expected 1`);
}

/* --- 6b. noindex — SEO migration Phase A -----------------------------------
   /404 and /privacy must carry a noindex robots meta tag; nothing else may,
   so an indexable page can never be accidentally hidden from search. */

const NOINDEX_PAGES = new Set(["404.html", "privacy.html"]);
for (const [file, source] of Object.entries(html)) {
  const hasNoindex = /name="robots"[^>]*content="[^"]*noindex/i.test(source);
  if (NOINDEX_PAGES.has(file)) {
    if (!hasNoindex) fail(`${file} should carry a noindex robots meta tag but does not`);
  } else if (hasNoindex) {
    fail(`${file} unexpectedly carries a noindex robots meta tag`);
  }
}

/* --- 7. Internal links ------------------------------------------------------ */

const routes = new Set([
  "/",
  "/work",
  "/practice",
  "/services/rise-design-systems",
  "/services/storyline-development",
  "/about",
  "/contact",
  "/privacy",
  ...projects.map((p) => p.path),
  ...recordRoutePaths,
]);

for (const [file, source] of Object.entries(html)) {
  const hrefs = [...source.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    if (href.startsWith("/assets/") || href.includes(".")) continue;
    const clean = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (!routes.has(clean)) fail(`Broken internal link "${href}" in ${file}`);
  }
}

/* --- 7b. Editorial placeholders (V3) ---------------------------------------
   This prototype deliberately renders its own gaps. They are counted and
   listed here so nothing is forgotten, and they FAIL the build when
   PUBLISH=1, which is the flag to set before a real launch build. */

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
  note(`${placeholderCount} editorial placeholders across ${placeholderPages.length} pages`);
  note(`${gapItems} facts listed as still to confirm`);
  for (const line of placeholderPages) note(`   ${line}`);
  if (PUBLISHING) {
    fail(`PUBLISH=1 but ${placeholderCount} editorial placeholders remain. Resolve them or remove the copy.`);
  } else {
    warn("Review build: editorial placeholders are rendered on purpose. Set PUBLISH=1 to fail on them.");
  }
}

/* --- 8. Performance budget -------------------------------------------------- */

const gz = (f) => gzipSync(readFileSync(f)).length;
const sum = (list) => list.reduce((n, f) => n + gz(f), 0);

const js = files.filter((f) => f.endsWith(".js"));
const css = files.filter((f) => f.endsWith(".css"));
const fonts = files.filter((f) => f.endsWith(".woff2"));
const images = files.filter((f) => /\.(avif|webp|png|jpg|svg)$/.test(f));

/*
 * Production Integration 01 changes the structural budget rather than simply
 * lifting the old 140KB total-JS ceiling. Home and legacy CaseStudy content
 * are route chunks, so the meaningful regression gate is the static import
 * closure of the application entry plus a ceiling for any individual chunk.
 * Total route JS is still reported as editorial growth debt, but it no longer
 * pretends every route chunk is downloaded on first entry.
 */
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
const largestImage = images.reduce((max, f) => Math.max(max, statSync(f).size), 0);
const largestImageKb = Math.round(largestImage / 1024);

if (initialJsKb !== null) note(`Initial JS ${initialJsKb}KB gzipped (budget ${BUDGET.initialJs})`);
note(`Total route JS ${totalJsKb}KB gzipped (reported, not treated as initial payload)`);
note(`Largest JS chunk ${largestChunkKb}KB gzipped (budget ${BUDGET.chunk})`);
note(`CSS ${cssKb}KB gzipped (budget ${BUDGET.css})`);
note(`Fonts ${fontKb}KB total across ${fonts.length} files`);
note(`Largest image ${largestImageKb}KB (budget ${BUDGET.image})`);

if (initialJsKb !== null && initialJsKb > BUDGET.initialJs)
  fail(`Initial JS budget exceeded: ${initialJsKb}KB > ${BUDGET.initialJs}KB`);
if (largestChunkKb > BUDGET.chunk)
  fail(`JS chunk budget exceeded: ${largestChunkKb}KB > ${BUDGET.chunk}KB`);
if (cssKb > BUDGET.css) fail(`CSS budget exceeded: ${cssKb}KB > ${BUDGET.css}KB`);
if (largestImageKb > BUDGET.image)
  fail(`Image budget exceeded: ${largestImageKb}KB > ${BUDGET.image}KB`);

/* --- 9. Third-party requests ------------------------------------------------ */

/* Outbound links a human clicks (not fetched resources) are allow-listed
   individually, same treatment as linkedin.com below. Currently: the ISQ
   eLearning Design System reference site, linked from the homepage featured
   section and the ISQ case study per the v3.2 brief. */
const ALLOWED_EXTERNAL_LINKS = ["isq-elearning-design-system.vercel.app"];

/* This check exists to keep the page free of resources the browser fetches
 * automatically on load — scripts, embeds, trackers — per the blueprint's
 * zero-third-party-connections rule. It does not need to block a plain,
 * user-initiated <a href> to a verified piece of Glenn's own evidence: that
 * is a reference link in copy, not a connection the page makes for you.
 * EVIDENCE_LINKS is for exactly that — an explicit, narrow allowlist of
 * outbound <a href> targets. src attributes (script, img, iframe, etc.) are
 * checked separately below and are never exempted, so an embed or tracker
 * pointed at one of these domains would still fail the build. */
const EVIDENCE_LINKS = ["https://isq-elearning-design-system.vercel.app"];

for (const [file, source] of Object.entries(html)) {
  const srcs = [...source.matchAll(/\bsrc="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
  const hrefs = [...source.matchAll(/\bhref="(https?:\/\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !EVIDENCE_LINKS.some((allowed) => u.startsWith(allowed)));

  const external = [...srcs, ...hrefs]
    .filter((u) => !u.startsWith("https://glennhammond.com"))
    .filter((u) => !u.includes("schema.org"))
    .filter((u) => !u.includes("linkedin.com"))
    .filter((u) => !ALLOWED_EXTERNAL_LINKS.some((allowed) => u.includes(allowed)));
  if (external.length) {
    fail(`Third-party resource referenced in ${file}: ${external.join(", ")}`);
  }
}

/* --- 10. Sitemap integrity — SEO migration Phase A -------------------------- */

const sitemapPath = join(DIST, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("dist/sitemap.xml not found");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  if (/<loc>[^<]*\/privacy<\/loc>/.test(sitemap))
    fail("Sitemap includes /privacy, which is noindex and must not be listed");
  if (/<loc>[^<]*\/services<\/loc>/.test(sitemap))
    fail("Sitemap includes /services, which now 301s to /practice");
  if (/<lastmod>/.test(sitemap))
    fail("Sitemap contains a <lastmod> value; Phase A requires omitting it rather than fabricating one");
  if (!/<loc>[^<]*\/practice<\/loc>/.test(sitemap))
    fail("Sitemap is missing the canonical /practice URL");
  for (const route of recordRoutePaths) {
    if (!sitemap.includes(`<loc>https://glennhammond.com${route}</loc>`))
      fail(`Sitemap is missing THE RECORD route ${route}`);
  }
  note("Sitemap: /practice and THE RECORD routes present, /services and /privacy absent, no fabricated lastmod");
}

/* --- Report ----------------------------------------------------------------- */

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