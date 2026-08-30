/**
 * Build verification — Blueprint §17, §26, §27 + Search 02.
 *
 * Publishing guardrails are enforced in code rather than remembered. Route
 * existence and search inclusion are intentionally separate: the search policy
 * decides indexability, while this verifier retains publication, evidence,
 * performance, metadata and no-JS safeguards across the whole rendered estate.
 *
 * Run with: npm run verify (or npm run check to build first)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative, sep } from "node:path";
import { gzipSync } from "node:zlib";
import { clients } from "../src/content/clients.js";
import { projects, withheldProjects } from "../src/content/projects.js";
import { recordContent, recordRoutePaths } from "../src/content/the-record.js";
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

/* --- 1. Placeholder scan --------------------------------------------------- */

const PLACEHOLDER = [
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
  for (const pattern of PLACEHOLDER) {
    if (pattern.test(source)) fail(`Placeholder ${pattern} found in ${file}`);
  }
}

/* --- 2. Client-name and logo approvals ------------------------------------ */

const unapprovedNames = clients.filter((c) => !c.nameApproved);
for (const [file, source] of Object.entries(html)) {
  const text = source.replace(/<[^>]+>/g, " ");
  for (const client of unapprovedNames) {
    if (text.includes(client.name)) {
      fail(`Unapproved client name "${client.name}" appears in ${file}`);
    }
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

/* --- 3. Withheld routes ---------------------------------------------------- */

for (const withheld of withheldProjects) {
  if (html[`work/${withheld.slug}.html`] || html[`work/${withheld.slug}/index.html`]) {
    fail(`Withheld project "${withheld.slug}" was rendered. ${withheld.reason}`);
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

/* --- 5. Pre-rendered content / no-JS resilience ---------------------------- */

const REQUIRED = {
  "index.html": ["Thirty years of making digital things.", "Still learning how to make them better.", "Frame. Shape. Make. Evidence."],
  "work.html": ["Projects across digital products, experiences, learning and systems.", "Wellbeing Studio 2027", "TAFE Queensland SkillsTech Pathways"],
  "work/wellbeing-studio.html": ["The shape of the work", "Designing entry around moments in the working day"],
  "work/wellbeing-studio/contextual-entry.html": ["Why examine this", "Inspect the artefact"],
  "work/wellbeing-studio/contextual-entry/daily-wellbeing-journey.html": ["Need a reset between meetings?", "Arrival Reset Breath", "Read the analysis"],
  "work/wellbeing-studio/connected-service.html": ["Useful Experience is the centre", "Inspect the relationship model", "the R U OK? Day production slice"],
  "work/wellbeing-studio/connected-service/relationship-model.html": ["Action / Return / Explore", "Continue only when continuing is useful", "Read the analysis"],
  "work/wellbeing-studio/ruok-production-slice.html": ["Capability proved", "The team proved authentication", "Inspect the production map"],
  "work/wellbeing-studio/ruok-production-slice/qualification-map.html": ["Production rule", "Product correction", "2c56d6b", "Read the analysis"],
  "work/casa/flight-examiner-rating.html": ["Assessment inside a safety regulator", "Designing for examiner judgement rather than recall"],
  "work/casa/flight-examiner-rating/examiner-judgement.html": ["Accuracy without application becomes a document", "Inspect the evidence sequence"],
  "work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning.html": ["Know which instrument governs", "Make the principles of sound assessment explicit", "Show what sits below the visible task", "Read the analysis"],
  "work/connect-and-learn.html": ["The platform could not wait for the courses", "Designing the platform and course rebuild as one system"],
  "work/connect-and-learn/concurrent-migration.html": ["Sequential delivery would have made the wrong decisions look final", "Inspect the dependency map"],
  "work/connect-and-learn/concurrent-migration/dependency-map.html": ["Shape the destination and the estate together", "What serial delivery would get wrong", "Read the analysis"],
  "work/isq-elearning-design-system.html": ["ISQ eLearning Design System", "least complex implementation"],
  "work/casa.html": ["The five projects", "What the six years contained"],
  "work/casa/class.html": ["CASA Learning Academy for Safe Skies", "not public-facing"],
  "work/casa/aviationworx.html": ["Image to supply", "no image in the recovered archive"],
  "work/casa/course-system.html": ["Template or prototype"],
  "work/tafe-pathways.html": ["A digital environment inside a human conversation", "Designing technology to support a conversation, not replace it"],
  "work/tafe-pathways/supporting-conversation.html": ["A careers tool can answer questions", "Inspect the exploration environment"],
  "work/tafe-pathways/supporting-conversation/exploration-environment.html": ["A hub, not a funnel", "Comparable industry data", "Put careers into an environment", "Read the analysis"],
  "work/sonic-healthplus.html": ["Sonic HealthPlus"],
  "work/safetyhub-asbestos.html": ["Safetyhub"],
  "work/isq-differentiated-learning.html": ["Years 7 to 10"],
  "work/goodstart-myportal.html": ["640 centres"],
  "work/interaction-prototypes.html": ["SCORM 2004"],
  "practice.html": [
    "The work changes. Certain decisions keep recurring.",
    "Start with the situation, not the inherited structure.",
    "Keep connected decisions connected.",
    "Solve at the scale the problem requires.",
    "Frame. Shape. Make. Evidence.",
    "The work shown here is selective",
    "The practice has widened in scope",
  ],
  "principles-of-assessment-and-rules-of-evidence.html": [
    "The four Principles of Assessment",
    "The four Rules of Evidence",
    "Why validity appears twice",
  ],
  "about.html": ["Where I have done it"],
  "contact.html": ["Tell me what is happening", "Email is the simplest place to start"],
  "privacy.html": [
    "No enquiry submission on the site",
    "Privacy-respecting site measurement",
    "Vercel Web Analytics and Speed Insights",
    "not used here for advertising, cross-site tracking",
  ],
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

// Visual Identity 04 public-language contract. The internal evidence model may
// keep its canonical terms in source and governance, but these phrases must not
// return as public branding, explanatory taxonomy or obsolete CTA language.
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

// The production measurement contract is deliberately limited to Vercel's
// first-party Web Analytics and Speed Insights. Advertising, cross-site and
// session-replay trackers require a separate privacy decision and release.
const FORBIDDEN_TRACKERS = [
  [/googletagmanager\.com/i, "Google Tag Manager"],
  [/google-analytics\.com/i, "Google Analytics"],
  [/connect\.facebook\.net/i, "Meta Pixel"],
  [/clarity\.ms\/tag/i, "Microsoft Clarity"],
  [/hotjar\.com/i, "Hotjar"],
];
for (const [file, source] of Object.entries(html)) {
  for (const [pattern, label] of FORBIDDEN_TRACKERS) {
    if (pattern.test(source)) fail(`Unapproved tracker "${label}" found in ${file}`);
  }
}

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
  if (!/<title[^>]*>[^<]{10,}<\/title>/.test(source)) fail(`Missing or short <title> in ${file}`);
  if (!/name="description"[^>]*content="[^"]{40,}"/.test(source)) fail(`Missing or short meta description in ${file}`);
  if (!/rel="canonical"/.test(source)) fail(`Missing canonical in ${file}`);
  if (!/property="og:title"/.test(source)) fail(`Missing og:title in ${file}`);
  if (!/application\/ld\+json/.test(source)) warn(`No structured data in ${file}`);

  const h1s = source.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(`${file} has ${h1s.length} h1 elements, expected 1`);
}

/* --- 6b. noindex — Search 02 contract --------------------------------------
   404/privacy are deliberately excluded. Canonical evidence and retained
   knowledge follow explicit search policy. Still-rendered legacy Work/service
   pages are addressable for migration/review but quarantined from indexation. */

for (const [file, source] of Object.entries(html)) {
  const route = fileToRoute(file);
  const hasNoindex = /name="robots"[^>]*content="[^"]*noindex/i.test(source);
  const shouldNoindex =
    file === "404.html" ||
    file === "privacy.html" ||
    (route ? shouldNoindexPath(route) : false);

  if (shouldNoindex && !hasNoindex) {
    fail(`${file} should carry a noindex robots meta tag but does not`);
  } else if (!shouldNoindex && hasNoindex) {
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
  ...getIndexableKnowledgePaths(),
]);

for (const [file, source] of Object.entries(html)) {
  const hrefs = [...source.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    if (href.startsWith("/assets/") || href.includes(".")) continue;
    const clean = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (!routes.has(clean)) fail(`Broken internal link "${href}" in ${file}`);
  }
}

/* --- 7b. Editorial placeholders -------------------------------------------
   Review builds count/list known factual gaps. PUBLISH=1 turns every remaining
   editorial placeholder into a release failure. */

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

if (initialJsKb !== null && initialJsKb > BUDGET.initialJs) fail(`Initial JS budget exceeded: ${initialJsKb}KB > ${BUDGET.initialJs}KB`);
if (largestChunkKb > BUDGET.chunk) fail(`JS chunk budget exceeded: ${largestChunkKb}KB > ${BUDGET.chunk}KB`);
if (cssKb > BUDGET.css) fail(`CSS budget exceeded: ${cssKb}KB > ${BUDGET.css}KB`);
if (largestImageKb > BUDGET.image) fail(`Image budget exceeded: ${largestImageKb}KB > ${BUDGET.image}KB`);

/* --- 9. Third-party runtime requests ---------------------------------------
   External evidence citations are ordinary links and are allowed. This gate
   blocks load-time third-party dependencies only (scripts/images/media etc),
   because those affect privacy, reliability and performance. */

const ALLOWED_EXTERNAL_RESOURCES = ["isq-elearning-design-system.vercel.app"];

for (const [file, source] of Object.entries(html)) {
  const externalSrcs = [...source.matchAll(/\bsrc="(https?:\/\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !u.startsWith("https://glennhammond.com"))
    .filter((u) => !u.includes("schema.org"))
    .filter((u) => !ALLOWED_EXTERNAL_RESOURCES.some((allowed) => u.includes(allowed)));

  if (externalSrcs.length) {
    fail(`Third-party runtime resource referenced in ${file}: ${externalSrcs.join(", ")}`);
  }
}

/* --- 10. Sitemap integrity — Search 02 ------------------------------------- */

const sitemapPath = join(DIST, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("dist/sitemap.xml not found");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  if (/<loc>[^<]*\/privacy<\/loc>/.test(sitemap)) fail("Sitemap includes /privacy, which is noindex and must not be listed");
  if (/<loc>[^<]*\/services<\/loc>/.test(sitemap)) fail("Sitemap includes /services, which redirects to /practice");
  if (/<lastmod>/.test(sitemap)) fail("Sitemap contains a <lastmod> value without a trustworthy modification source");
  if (!/<loc>[^<]*\/practice<\/loc>/.test(sitemap)) fail("Sitemap is missing the canonical /practice URL");

  const indexableEvidence = getIndexableEvidencePaths(recordContent);
  const indexableKnowledge = getIndexableKnowledgePaths();
  for (const route of indexableEvidence) {
    if (!sitemap.includes(`<loc>https://glennhammond.com${route}</loc>`)) {
      fail(`Sitemap is missing indexable evidence route ${route}`);
    }
  }
  for (const route of indexableKnowledge) {
    if (!sitemap.includes(`<loc>https://glennhammond.com${route}</loc>`)) {
      fail(`Sitemap is missing retained knowledge route ${route}`);
    }
  }
  for (const route of recordRoutePaths.filter((route) => !indexableEvidence.includes(route))) {
    if (sitemap.includes(`<loc>https://glennhammond.com${route}</loc>`)) {
      fail(`Sitemap includes evidence route explicitly excluded by search policy: ${route}`);
    }
  }
  note(`Sitemap: ${indexableEvidence.length} evidence routes + ${indexableKnowledge.length} retained knowledge route(s) follow the explicit indexability contract; /services and /privacy absent; no fabricated lastmod`);
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
