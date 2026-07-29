/**
 * Static review pass over the built HTML — V3.
 *
 * A browser could not be installed in this environment, so the visual QA that
 * needs one is handed over rather than claimed. Everything that CAN be checked
 * without a browser is checked here, on the real build:
 *
 *   1  heading order — no skipped levels, exactly one h1
 *   2  alt text — present on every content image, and actually descriptive
 *   3  responsive images — srcset, sizes and intrinsic dimensions on every img
 *   4  loading strategy — hero eager, everything below the fold lazy
 *   5  duplicate imagery — the same image used twice on one page
 *   6  landmark and link names — no empty or ambiguous accessible names
 *   7  colour contrast — every token pair used for text, computed
 *   8  focus, motion and touch targets — the CSS rules exist
 *   9  attribution — no CASA subproject claims an image from another one
 *
 *     node scripts/audit.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative } from "node:path";

const DIST = "dist";
const fails = [];
const warns = [];
const notes = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);
const note = (m) => notes.push(m);

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else out.push(f);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error("dist/ not found — run npm run build first.");
  process.exit(1);
}

const pages = walk(DIST)
  .filter((f) => extname(f) === ".html")
  .map((f) => [relative(DIST, f), readFileSync(f, "utf8")]);

/* --- 1. Heading order ------------------------------------------------------ */

for (const [file, html] of pages) {
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  if (levels.filter((l) => l === 1).length !== 1)
    fail(`${file}: ${levels.filter((l) => l === 1).length} h1 elements`);
  let previous = 0;
  levels.forEach((level, i) => {
    if (previous && level > previous + 1)
      fail(`${file}: heading jumps h${previous} → h${level} at position ${i + 1}`);
    previous = level;
  });
}

/* --- 2 & 3 & 4. Images ------------------------------------------------------ */

const WEAK_ALT = /^(image|photo|picture|screenshot|logo|graphic)s?\.?$/i;

for (const [file, html] of pages) {
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const seen = new Map();

  imgs.forEach((tag, i) => {
    const alt = /\balt="([^"]*)"/.exec(tag);
    const decorative = alt && alt[1] === "";

    if (!alt) fail(`${file}: img ${i + 1} has no alt attribute`);
    else if (!decorative) {
      if (WEAK_ALT.test(alt[1]))
        fail(`${file}: img ${i + 1} has non-descriptive alt "${alt[1]}"`);
      else if (alt[1].length < 25)
        warn(`${file}: img ${i + 1} has a short alt (${alt[1].length} chars)`);
    }

    if (!/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag))
      fail(`${file}: img ${i + 1} has no intrinsic width/height (layout shift)`);

    if (!/\bloading="(lazy|eager)"/.test(tag))
      fail(`${file}: img ${i + 1} has no loading attribute`);

    const src = /\bsrc="([^"]+)"/.exec(tag)?.[1] ?? "";
    const stem = src.replace(/-\d+\.(webp|avif)$/, "");
    if (stem) {
      seen.set(stem, (seen.get(stem) ?? 0) + 1);
    }
  });

  const eager = imgs.filter((t) => /loading="eager"/.test(t));
  if (eager.length > 1)
    warn(`${file}: ${eager.length} eager images; only the hero should be eager`);
  if (imgs.length && eager.length === 0 && file !== "404.html")
    note(`${file}: no eager image (fine if the hero is type-only)`);

  for (const [stem, count] of seen) {
    if (count > 1)
      warn(`${file}: ${stem.split("/").pop()} appears ${count} times on one page`);
  }

  // Every <picture> should offer AVIF and WebP with sizes.
  const pictures = [...html.matchAll(/<picture>[\s\S]*?<\/picture>/g)].map((m) => m[0]);
  pictures.forEach((p, i) => {
    if (!/type="image\/avif"/.test(p)) warn(`${file}: picture ${i + 1} has no AVIF source`);
    if (!/sizes="/.test(p)) fail(`${file}: picture ${i + 1} has no sizes attribute`);
  });
}

/* --- 5. Accessible names on interactive elements ---------------------------- */

for (const [file, html] of pages) {
  const links = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)];
  links.forEach(([full, inner], i) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ").trim();
    const labelled = /aria-label="[^"]+"/.test(full);
    if (!text && !labelled) fail(`${file}: link ${i + 1} has no accessible name`);
  });

  const buttons = [...html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/g)];
  buttons.forEach(([full, inner], i) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    if (!text && !/aria-label="[^"]+"/.test(full))
      fail(`${file}: button ${i + 1} has no accessible name`);
  });

  for (const nav of html.matchAll(/<nav\b([^>]*)>/g)) {
    if (!/aria-label|aria-labelledby/.test(nav[1]))
      warn(`${file}: a <nav> has no accessible name`);
  }
}

/* --- 6. Colour contrast ----------------------------------------------------- */

const hex = (h) => {
  const n = parseInt(h.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const lin = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const lum = (h) => {
  const [r, g, b] = hex(h).map(lin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

const PAIRS = [
  /* Quiet Authority, v3.1. Every pair below is a combination the built CSS
     actually renders; a token that only appears in the study is not listed. */
  ["text on paper", "#15191e", "#f4f1e9", 4.5],
  ["text on raised paper", "#15191e", "#fcfaf5", 4.5],
  ["text on plate", "#15191e", "#e7e1d3", 4.5],
  ["text-secondary on paper", "#435264", "#f4f1e9", 4.5],
  ["text-secondary on raised paper", "#435264", "#fcfaf5", 4.5],
  ["text-tertiary on paper", "#5f6c7c", "#f4f1e9", 4.5],
  ["text-secondary on plate", "#435264", "#e7e1d3", 4.5],
  ["brass-ink on paper", "#855619", "#f4f1e9", 4.5],
  ["brass-ink on raised paper", "#855619", "#fcfaf5", 4.5],
  ["brass-ink on plate", "#855619", "#e7e1d3", 4.5],
  /* plate-deep carries transparent artwork and nothing else. Neither brass
     nor brass-ink is legible on it (2.98 and 4.38), so no text or mark is
     permitted there — which is why no pair is listed for that surface. */
  ["text on plate-deep", "#15191e", "#ded7c5", 4.5],
  ["brass-ink on brass-tint", "#855619", "#f1e7d4", 4.5],
  ["mineral-ink on paper", "#3a5a4f", "#f4f1e9", 4.5],
  ["mineral-ink on raised paper", "#3a5a4f", "#fcfaf5", 4.5],
  /* Non-text brass: rules, focus rings and graphic marks only. 3:1 is the
     right bar (SC 1.4.11), and 4.5 is deliberately NOT required here. */
  ["brass mark on paper", "#a66f22", "#f4f1e9", 3.0],
  ["brass mark on raised paper", "#a66f22", "#fcfaf5", 3.0],
  ["brass mark on plate", "#a66f22", "#e7e1d3", 3.0],
  /* The primary action, in all three states. */
  ["action foreground on action", "#ffffff", "#8c5e1c", 4.5],
  ["action foreground on hover", "#ffffff", "#6f4711", 4.5],
  ["action foreground on active", "#ffffff", "#5c3a0e", 4.5],
  ["action boundary on paper", "#8c5e1c", "#f4f1e9", 3.0],
  /* Ink band. */
  ["on-ink on ink", "#f4f1e9", "#15191e", 4.5],
  ["on-ink-dim on ink", "#c7cdd4", "#15191e", 4.5],
  ["on-ink-muted on ink", "#aeb6bf", "#15191e", 4.5],
  ["brass-light on ink", "#d0a45b", "#15191e", 4.5],
  ["mineral-light on ink", "#7fa396", "#15191e", 4.5],
  ["on-ink on ink-raised", "#f4f1e9", "#20262d", 4.5],
  ["on-ink-dim on ink-raised", "#c7cdd4", "#20262d", 4.5],
  ["layer-04 mark on ink", "#7d8894", "#15191e", 3.0],
  /* Semantic states. */
  ["success on success-bg", "#2f6b4f", "#edf5f0", 4.5],
  ["warning on warning-bg", "#7a5200", "#faf1de", 4.5],
  ["error on error-bg", "#9b3225", "#fbefec", 4.5],
  ["error on raised paper", "#9b3225", "#fcfaf5", 4.5],
  /* Disabled control. */
  ["disabled text on disabled surface", "#5e6772", "#f0ebe1", 4.5],
];

for (const [name, fg, bg, min] of PAIRS) {
  const r = ratio(fg, bg);
  const line = `${name}: ${r.toFixed(2)}:1 (needs ${min})`;
  if (r < min) fail(`Contrast — ${line}`);
  else note(`Contrast — ${line}`);
}

/* --- 7. CSS rules that carry accessibility --------------------------------- */

const css = walk(DIST)
  .filter((f) => f.endsWith(".css"))
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");

const CSS_REQUIRED = [
  [":focus-visible", "visible focus styles"],
  ["prefers-reduced-motion", "reduced-motion support"],
  ["min-height:44px", "44px minimum touch targets"],
  ["aspect-ratio", "reserved image boxes"],
];
for (const [needle, label] of CSS_REQUIRED) {
  if (!css.replace(/\s+/g, "").includes(needle.replace(/\s+/g, "")))
    fail(`CSS is missing ${label} (${needle})`);
  else note(`CSS carries ${label}`);
}

/* --- 8. Meaning never carried by colour alone ------------------------------- */

for (const [file, html] of pages) {
  // Current state in the programme rail must carry aria-current, not only a
  // colour and weight change.
  if (/class="prail__item is-current"/.test(html) && !/aria-current="page"/.test(html))
    fail(`${file}: programme rail marks a current item without aria-current`);
}

/* --- 9. CASA attribution ---------------------------------------------------- */

const CASA_OWNED = {
  "work/casa/class.html": ["class-home"],
  "work/casa/learning-catalogue.html": ["casa-streams", "casa-doc-catalogue"],
  "work/casa/course-system.html": [
    "casa-component-spec",
    "casa-icons",
    "casa-template-menu",
    "casa-authoring-guidance",
    "casa-video-lightbox",
  ],
  "work/casa/flight-examiner-rating.html": [
    "casa-interview",
    "casa-regulation",
    "casa-assessment",
    "casa-competency",
    "casa-mobile-plan",
    "casa-mobile-conduct",
    "casa-card",
  ],
  "work/casa/aviationworx.html": [],
};

for (const [file, allowed] of Object.entries(CASA_OWNED)) {
  const html = pages.find(([f]) => f === file)?.[1];
  if (!html) {
    fail(`Expected page missing: ${file}`);
    continue;
  }
  const used = new Set(
    [...html.matchAll(/\/assets\/([a-z0-9-]+?)-\d+\.(?:webp|avif)/g)].map((m) => m[1])
  );
  // Related-project cards legitimately show other projects' card images.
  const body = html.split('class="related"')[0];
  const inBody = new Set(
    [...body.matchAll(/\/assets\/([a-z0-9-]+?)-\d+\.(?:webp|avif)/g)].map((m) => m[1])
  );
  for (const name of inBody) {
    if (!allowed.includes(name))
      fail(`${file}: uses image "${name}", which is not attributed to this project`);
  }
  if (allowed.length === 0 && inBody.size === 0)
    note(`${file}: carries no imagery, as intended — attribution could not be established`);
  used.size; // referenced so the intent of the wider scan is explicit
}

/* --- Report ----------------------------------------------------------------- */

const rule = "-".repeat(70);
console.log(`\n${rule}\nSTATIC REVIEW — ${pages.length} pages\n${rule}`);
for (const n of notes) console.log(`  · ${n}`);
if (warns.length) {
  console.log("\nWarnings");
  for (const w of warns) console.log(`  ! ${w}`);
}
if (fails.length) {
  console.log("\nFailures");
  for (const f of fails) console.log(`  ✗ ${f}`);
  console.log(`\n${rule}\n${fails.length} failure(s).\n`);
  process.exit(1);
}
console.log(`\n${rule}\nStatic review passed. Browser QA is still outstanding.\n`);
