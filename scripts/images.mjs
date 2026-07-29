/**
 * Image pipeline — the site's whole image grammar in one file.
 *
 * Every published image is derived here from an untouched source. Crops are
 * expressed as fractions of the source so they survive a re-export at another
 * resolution, and each entry records why it is cropped that way.
 *
 *     npm run images
 *
 * Sources:  src/assets/<set>/source/   never modified
 * Outputs:  src/assets/<set>/          AVIF + WebP at up to three widths
 *
 * Rules enforced here (Blueprint §19, V3 brief):
 *   · crop to the decision; never shrink a whole UI until it is illegible
 *   · no browser chrome, bookmark bars or scrollbars
 *   · never upscale — a width is skipped if the source cannot carry it
 *   · authentic interface colour — grading applies to photography only
 *   · intrinsic dimensions emitted to src/lib/image-manifest.json so every
 *     <img> can reserve its box and CLS stays at zero
 *
 * V3 note on omissions. Assets deliberately NOT processed are listed in
 * IMAGE-REGISTER.md with a reason each. The two hard exclusions are a
 * truncated TAFE PNG (the lower two thirds of the file is black) and a
 * generic phone UI-kit GIF that is not evidence of Glenn's work.
 */
import sharp from "sharp";
import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/* libvips caches decoded pixel buffers between operations. Across a run this
   size — around seventy derivatives from sixty sources, several of them
   detailed 3D renders — the cache grows until the process is killed. Turning
   it off costs a few seconds and makes the run survivable on a small machine. */
sharp.cache(false);
sharp.concurrency(1);

/**
 * Emitted widths, v3.1 — matched to the nine figure roles rather than to a
 * generic ladder. 480 exists so a phone never pulls a desktop file; the rest
 * correspond to the roles in IMAGE-TAXONOMY.md:
 *
 *   480   interface detail, portrait screens at 2x, mobile column
 *   660   interface overview, photographic evidence — the DEFAULT
 *   800   primary evidence
 *   860   paired sequence
 *   1180  full-width photography, and the 2x source for a 660 support figure
 *   1600  the 2x source for a primary or paired figure
 *
 * A width is skipped when the source cannot carry it, so several assets will
 * legitimately stop below 1600. Nothing is ever upscaled.
 *
 * NOTE FOR v3.1: the derivatives currently in src/assets were emitted by v3 at
 * 1600/800/480 and have NOT been regenerated — sharp could not run in the
 * environment where this change was made. Every `sizes` attribute is already
 * matched to its role, so nothing over-fetches badly today, but running
 * `npm run images` on a machine with a working sharp build will emit the
 * exact role widths and shrink the payload further.
 */
const WIDTHS = [1600, 1180, 860, 800, 660, 480];

const SETS = {
  /* ================================================================ CASA
     Six years, five bodies of work. Sources are kept in one set because
     they share a client, but each recipe records which project it belongs
     to so IMAGE-REGISTER.md can be generated from this file if needed.
     ---------------------------------------------------------------- */
  casa: [
    /* --- CLASS platform ---------------------------------------------- */
    {
      in: "casa-aviationworx-class-lms-hero.jpg",
      out: "class-home",
      // Trims the white page margin either side of the captured frame. The
      // header wordmark is retained deliberately: it is the only thing in the
      // archive that positively identifies this screen as CLASS rather than
      // AviationWorx, and that attribution is the point.
      crop: [0.098, 0.005, 0.891, 0.998],
    },
    /* class-platform.png is NOT processed. Its left panel carries a training
       administration email address and lorem-ipsum welcome copy, and its
       right panel — the only part worth publishing — is roughly 710 source
       pixels wide, which cannot be shown at a legible size. The CLASS page
       carries a labelled placeholder instead. */

    /* --- Learning catalogue ------------------------------------------ */
    {
      in: "casa-catalogue-stream-selection.jpg",
      out: "casa-streams",
      crop: [0.03, 0.025, 0.97, 0.975],
    },
    {
      in: "casa-catalogue-interface.jpg",
      out: "casa-doc-catalogue",
      // Trims the empty page-fold below the purpose statement.
      crop: [0.0, 0.0, 1.0, 0.8],
    },

    /* --- Storyline production system --------------------------------- */
    {
      in: "casa-course-template-menu.jpg",
      out: "casa-template-menu",
      crop: [0, 0, 1, 1],
    },
    {
      in: "tpl-icons.png",
      out: "casa-icons",
      // The V3 archive supplied a JPEG of this same artwork. The PNG is kept
      // because flat vector icons compress better and stay crisper from it,
      // and because it carries transparency, which sits on the figure plate.
      // Full frame: tightening the crop clipped the outline row.
      crop: [0, 0, 1, 1],
    },
    {
      in: "tpl-component-spec.png",
      out: "casa-component-spec",
      // Full frame. The dimension and slide-position annotations at the left
      // are the evidence; a tighter crop leaves only a trophy and a palette.
      crop: [0, 0, 1, 1],
    },
    {
      in: "casa-video-lightbox.jpg",
      out: "casa-video-lightbox",
      crop: [0, 0, 1, 1],
    },
    {
      in: "casa-learner-data.jpg",
      out: "casa-authoring-guidance",
      // Renamed from the archive's "learner-data". It is not learner data:
      // it is a template guidance slide instructing course authors what kind
      // of content belongs in this position. Captioned as such.
      crop: [0, 0, 1, 1],
    },

    /* --- Multimedia --------------------------------------------------- */
    /* casa-video-production.jpg is NOT processed. Three reasons, in order of
       weight: a document is open and legible on the monitor behind the
       subject; the original needs both an EXIF rotation and a horizontal flip
       before any text in it reads correctly, which means it is a mirrored
       phone selfie; and the video-edit timeline below is stronger evidence of
       the same claim. See IMAGE-REGISTER.md. */
    { in: "video-edit.jpg", out: "casa-video", crop: [0, 0, 1, 1] },
    { in: "storyline-build.jpg", out: "casa-authoring", crop: [0.015, 0.02, 0.985, 0.98] },

    /* --- Flight Examiner Rating --------------------------------------- */
    {
      in: "fer-interview.png",
      out: "casa-interview",
      // Sidebar dropped and the frame closed in on the video itself. The
      // subject is the piece to camera — a delegated flight examiner talking
      // to other examiners — not the player it sits in.
      crop: [0.175, 0.04, 0.93, 0.84],
    },
    {
      in: "fer-assessment.png",
      out: "casa-assessment",
      // Sidebar deliberately KEPT: module progression is the evidence.
      crop: [0.0, 0.012, 1.0, 0.995],
    },
    {
      in: "fer-competency.png",
      out: "casa-competency",
      crop: [0.135, 0.02, 1.0, 1.0],
    },
    {
      in: "fer-regulation.png",
      out: "casa-regulation",
      crop: [0.012, 0.015, 0.995, 0.935],
    },
    { in: "fer-mobile-plan.png", out: "casa-mobile-plan", crop: [0.02, 0.01, 0.98, 0.99] },
    { in: "fer-mobile-conduct.png", out: "casa-mobile-conduct", crop: [0.02, 0.01, 0.98, 0.99] },

    /* --- Cards --------------------------------------------------------- */
    {
      in: "casa-aviationworx-class-lms-hero.jpg",
      out: "casa-programme-card",
      // Stops above the task tiles. A 16:10 card crop through the tile row
      // reads as a mistake; stopping short of it reads as a decision.
      crop: [0.098, 0.005, 0.891, 0.755],
    },
    {
      in: "fer-interview.png",
      out: "casa-card",
      crop: [0.145, 0.03, 1.0, 0.9],
      ratio: 16 / 10,
      anchor: "top",
    },
  ],

  /* ================================================ TAFE Queensland */
  tafe: [
    {
      in: "tafe-pathways-experience-hero.png",
      out: "tafe-slideshow",
      crop: [0, 0, 1, 1],
    },
    {
      in: "tafe-construction-industry-data.jpg",
      out: "tafe-industry-data",
      crop: [0, 0, 1, 1],
    },
    { in: "tafe-pathways-screen-01.jpg", out: "tafe-map-admin", crop: [0, 0, 1, 1] },
    { in: "tafe-pathways-screen-02.jpg", out: "tafe-map-trades", crop: [0, 0, 1, 1] },
    {
      in: "tafe-pathways-wireframe.jpg",
      out: "tafe-wireframe",
      // 903px wide original. Only 480 and 800 are emitted; the figure is
      // marked expandable so the flow labels can be read at full size.
      crop: [0, 0, 1, 1],
    },
    {
      in: "tafe-construction-industry-data.jpg",
      out: "tafe-card",
      ratio: 16 / 10,
      anchor: "top",
    },
  ],

  /* ============================================== Sonic HealthPlus */
  sonic: [
    { in: "sonic-healthplus-course-cover.png", out: "sonic-cover", crop: [0.005, 0, 0.994, 1] },
    {
      in: "sonic-healthplus-injury-management-hero.jpg",
      out: "sonic-support-services",
      crop: [0, 0, 1, 1],
    },
    { in: "sonic-healthplus-module-03.png", out: "sonic-education", crop: [0, 0, 1, 1] },
    { in: "sonic-healthplus-module-01.png", out: "sonic-question", crop: [0, 0, 1, 1] },
    { in: "sonic-healthplus-module-02.png", out: "sonic-feedback", crop: [0, 0, 1, 1] },
    {
      in: "sonic-healthplus-course-cover.png",
      out: "sonic-card",
      crop: [0.005, 0, 0.994, 1],
      ratio: 16 / 10,
    },
  ],

  /* ==================================================== Goodstart */
  goodstart: [
    { in: "goodstart-learning-screen.jpg", out: "goodstart-myportal", crop: [0, 0.018, 1, 0.997] },
    { in: "goodstart-food-interaction.png", out: "goodstart-activity", crop: [0, 0, 0.998, 0.997] },
    {
      in: "goodstart-learning-screen.jpg",
      out: "goodstart-card",
      crop: [0, 0.018, 1, 0.997],
      ratio: 16 / 10,
      anchor: "top",
    },
  ],

  /* ================================= ISQ differentiated learning */
  isq: [
    { in: "isq-differentiated-learning-hero.jpg", out: "isq-diff-title", crop: [0.012, 0.012, 0.988, 0.988] },
    { in: "isq-differentiation-screen-02.jpg", out: "isq-diff-intro", crop: [0.005, 0.113, 0.995, 0.892] },
    { in: "isq-differentiation-screen-03.jpg", out: "isq-diff-tiers", crop: [0.005, 0.113, 0.995, 0.892] },
    { in: "isq-differentiation-screen-04.jpg", out: "isq-diff-cycle", crop: [0.005, 0.113, 0.995, 0.892] },
    { in: "isq-differentiation-screen-05.jpg", out: "isq-diff-scenario", crop: [0.005, 0.113, 0.995, 0.892] },
    {
      in: "isq-differentiated-learning-hero.jpg",
      out: "isq-diff-card",
      crop: [0.012, 0.012, 0.988, 0.988],
      ratio: 16 / 10,
    },
  ],

  /* ==================================================== Safetyhub */
  safetyhub: [
    { in: "safetyhub-asbestos-awareness-hero.png", out: "safetyhub-cover", crop: [0, 0, 1, 1] },
    { in: "safetyhub-asbestos-question-03.png", out: "safetyhub-question", crop: [0, 0, 1, 1] },
    { in: "safetyhub-asbestos-screen-04.png", out: "safetyhub-video", crop: [0, 0, 1, 1] },
    { in: "safetyhub-asbestos-screen-05.png", out: "safetyhub-choice", crop: [0, 0, 1, 1] },
    { in: "safetyhub-asbestos-screen-07.png", out: "safetyhub-feedback", crop: [0, 0, 1, 1] },
    {
      in: "safetyhub-asbestos-question-03.png",
      out: "safetyhub-card",
      crop: [0, 0, 1, 1],
      ratio: 16 / 10,
    },
  ],

  /* =================================================== Prototypes */
  proto: [
    { in: "learning-data-prototype-hero.png", out: "proto-data-intro", crop: [0.006, 0.009, 0.993, 0.985] },
    { in: "learning-data-likert-scale.jpg", out: "proto-likert", crop: [0, 0, 1, 1] },
    { in: "storyline-hamburger-menu-prototype.jpg", out: "proto-menu", crop: [0, 0, 1, 1] },
    {
      in: "learning-data-prototype-hero.png",
      out: "proto-card",
      crop: [0.006, 0.009, 0.993, 0.985],
      ratio: 16 / 10,
      anchor: "top",
    },
  ],

  /* ---------------------------------------------- Wellbeing Studio */
  ws: [
    { in: "ws-landing.webp", out: "ws-landing", chromeTop: 122, trim: [14, 14], ratio: 16 / 9 },
    { in: "ws-library.webp", out: "ws-library", chromeTop: 130, trim: [0, 16], ratio: 3 / 2 },
    { in: "ws-session.webp", out: "ws-session", chromeTop: 134, trim: [0, 34], ratio: 3 / 2 },
    { in: "ws-dashboard.webp", out: "ws-dashboard", ratio: 3 / 2 },
    { in: "ws-journeys.webp", out: "ws-journeys", ratio: 3 / 2 },
    { in: "ws-program.webp", out: "ws-program", ratio: 3 / 2 },
    {
      in: "ws-landing.webp",
      out: "ws-card",
      chromeTop: 122,
      trim: [14, 14],
      ratio: 16 / 10,
      anchor: "top",
    },
  ],

  /* --------------------------------------------------------- Portrait */
  portrait: [
    {
      in: "glenn-desk.jpg",
      out: "glenn-working",
      cropPx: { left: 1943, top: 326, width: 2440, height: 3050 },
      grade: true,
    },
    {
      in: "glenn-desk.jpg",
      out: "glenn-desk-wide",
      cropPx: { left: 1180, top: 300, width: 4200, height: 2363 },
      grade: true,
    },
  ],
};

const manifest = {};

for (const [set, recipes] of Object.entries(SETS)) {
  const SRC = join(root, `src/assets/${set}/source`);
  const OUT = join(root, `src/assets/${set}`);
  if (!existsSync(SRC)) {
    console.error(`Missing source directory: ${SRC}`);
    process.exit(1);
  }
  mkdirSync(OUT, { recursive: true });

  for (const r of recipes) {
    const file = join(SRC, r.in);

    /* Auto-rotation has to happen before anything measures the image, or the
       crop rectangle is computed against the wrong axes. */
    const loaded = () => (r.autoRotate ? sharp(file).rotate() : sharp(file));
    const meta = r.autoRotate
      ? await loaded().toBuffer({ resolveWithObject: true }).then((o) => o.info)
      : await sharp(file).metadata();

    /* --- extraction rectangle ---------------------------------------- */
    let rect;
    if (r.cropPx) {
      rect = { ...r.cropPx };
    } else if (r.crop) {
      const [l, t, rr, b] = r.crop;
      rect = {
        left: Math.round(meta.width * l),
        top: Math.round(meta.height * t),
        width: Math.round(meta.width * (rr - l)),
        height: Math.round(meta.height * (b - t)),
      };
    } else {
      const top = r.chromeTop ?? 0;
      const [tl, tr] = r.trim ?? [0, 0];
      rect = { left: tl, top, width: meta.width - tl - tr, height: meta.height - top };
    }

    /* --- optional target ratio, anchored ------------------------------ */
    if (r.ratio) {
      const wanted = Math.round(rect.width / r.ratio);
      if (wanted < rect.height) {
        if (r.anchor !== "top") rect.top += Math.round((rect.height - wanted) / 2);
        rect.height = wanted;
      } else {
        const w = Math.round(rect.height * r.ratio);
        rect.left += Math.round((rect.width - w) / 2);
        rect.width = w;
      }
    }

    rect.width = Math.min(rect.width, meta.width - rect.left);
    rect.height = Math.min(rect.height, meta.height - rect.top);

    const variants = [];

    /* Resume support. Encoding seventy derivatives takes several minutes; if a
       run is interrupted, the next one should not redo finished work. Pass
       --force to re-encode everything. */
    if (!process.argv.includes("--force")) {
      const done = [];
      for (const width of WIDTHS) {
        if (width > rect.width * 1.05) continue;
        const a = join(OUT, `${r.out}-${width}.avif`);
        const w = join(OUT, `${r.out}-${width}.webp`);
        if (existsSync(a) && existsSync(w)) done.push({ width, path: a });
      }
      const expected = WIDTHS.filter((w) => w <= rect.width * 1.05).length;
      if (done.length === expected && expected > 0) {
        const top = await sharp(done[0].path).metadata();
        manifest[r.out] = {
          set,
          source: r.in,
          width: top.width,
          height: top.height,
          widths: done.map((d) => d.width),
        };
        console.log(`${r.out.padEnd(24)} cached`);
        continue;
      }
    }

    for (const width of WIDTHS) {
      if (width > rect.width * 1.05) continue; // never upscale
      const base = () => {
        let p = loaded().extract(rect).resize({ width, withoutEnlargement: true });
        if (r.grade) {
          // Photography only: a gentle warm neutral that sits with Paper.
          p = p
            .modulate({ brightness: 1.05, saturation: 0.96 })
            .linear(1.04, -5)
            .recomb([
              [1.02, 0.0, 0.0],
              [0.0, 1.0, 0.0],
              [0.0, 0.0, 0.96],
            ]);
        }
        return p;
      };

      const avif = await base().avif({ quality: 54, effort: 4 }).toFile(join(OUT, `${r.out}-${width}.avif`));
      const webp = await base().webp({ quality: 76 }).toFile(join(OUT, `${r.out}-${width}.webp`));
      variants.push({ width, height: avif.height, avif: avif.size, webp: webp.size });
    }

    if (variants.length === 0) {
      console.error(`${r.out}: source too small for the smallest emitted width.`);
      process.exit(1);
    }

    const largest = variants[0];
    manifest[r.out] = {
      set,
      source: r.in,
      width: largest.width,
      height: largest.height,
      widths: variants.map((v) => v.width),
    };

    console.log(
      `${r.out.padEnd(24)} ${String(largest.width).padStart(4)}x${String(largest.height).padEnd(4)}  ` +
        variants
          .map((v) => `${v.width}:${Math.round(v.avif / 1024)}/${Math.round(v.webp / 1024)}`)
          .join("  ") +
        " KB avif/webp"
    );
  }
}

writeFileSync(
  join(root, "src/lib/image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);

console.log(`\n${Object.keys(manifest).length} images written.`);
