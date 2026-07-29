# Prototype V2 — status, honestly

**This is a partial V2, not a finished one.** What is here is built, builds
clean and passes verification. What is not here is listed below by name. Please
read this before reviewing anything else.

---

## Art direction chosen

**"Evidence, annotated"** — Instrument evolved rather than replaced.

Three directions were considered: (A) Instrument warmed — paper-dominant with
ink reduced to punctuation; (B) Evidence, annotated — the same warmth plus every
screenshot placed on a quiet backplate, labelled by area and paired with a
caption that explains the decision it proves; (C) Index — a catalogue system
with oversized numerals and strict ratios.

**B was chosen.** Glenn's whole proposition is judgement, and annotation is
literally judgement shown on top of evidence. It also solves the awkward
problem the other two do not: it dignifies mixed-age assets. A 2021 course
screenshot placed on a plate with an analytical caption reads as evidence of a
decision; the same screenshot dropped into a grid reads as a dated screenshot.

Concretely: Paper dominates, ink bands drop from four to two on the homepage,
imagery carries the colour, every figure has a backplate with real padding, an
area chip and a caption about *why*, and composition varies deliberately —
full-bleed type, ruled proof index, lead-card-plus-grid, four-up model strip,
offset offer split, portrait split, dark close.

---

## Done and verified

| Area | State |
| --- | --- |
| **Image pipeline** | Rebuilt. 22 art-directed images from 3 sets, AVIF+WebP at 3 widths, crops expressed as source fractions with a written reason each. Browser chrome, bookmark bars and scrollbars removed. Manifest drives intrinsic dimensions. |
| **CASA case study** | No longer text-only. Nine figures: piece-to-camera hero, regulatory instrument hierarchy, assessment structure with sidebar retained, competency iceberg, a two-up phone pair, component spec sheet, icon library, video edit, CLASS platform. Every one captioned analytically. |
| **Work index** | Rebuilt as a visual portfolio. Filter **removed** (four projects did not justify it; its OR logic was never explained and its empty state described a match the code did not perform). Lead card plus grid. Plain-language area tags, not layer numbers. |
| **Homepage** | Resequenced: claim → proof strip → selected work → model → how to buy → Glenn → close. Proof now lands inside the first two viewport heights. Two ink bands, not four. Portrait present. |
| **Connect & Learn / Goodstart** | Honest designed evidence panels built from verified figures instead of borrowed or invented screens. |
| **Case-study template** | One template driven by available evidence. "In 60 seconds" panel added (problem, role, scope, outcome, stack). Figures interleaved through the argument. |
| **Labels** | Nav "Practice" → **Services**. CTA "See how it holds up" → **View the flagship case study**. Contact's "Which layers are you stuck at?" → **What does the problem seem closest to?** |
| **Portrait** | Tight 4:5 crop, warm-graded, used as a secondary working image on Home. |
| **Dependencies** | `package.json` / lockfile back in sync — `npm ci` now works from the ZIP. High-severity `postcss` advisory resolved. |
| **Budgets** | JS 102KB gz (120), CSS 7KB (30), fonts 107KB across 4 files, largest image 97KB (180). Verified on the real build. |

## Not done

| Not done | Consequence |
| --- | --- |
| **Services page restructure** | Still V1: four layers first, engagements second, ~1,100 words. The review asked for engagements first, condensed to buyer/trigger/outcome/duration/next step. Only the route name and metadata changed. |
| **About page** | Still V1. No portrait, no personal paragraph, no collaboration statement, overlapping 2021–/2026– roles still unexplained. |
| **In-page case-study contents** | Not built. The flagship is still a long single scroll. |
| **Wellbeing Studio editing** | "In 60 seconds" added, but the decision-log repetition the review flagged has not been edited down. |
| **Privacy `noindex`** | Still indexable and still in the sitemap. **This is a P0 from the review and it is still open.** |
| **Open Graph image** | Still the old positioning. |
| **Real browser QA** | Not possible in this environment (see below). No keyboard, screen-reader, 200% zoom or forced-colours pass. |
| **Deliverables 3–12** | Design rationale is this file. Image register, updated content register, route/redirect register, QA results, performance measurements, dependency report and V1→V2 change log are **not written**. |

## Two things that need your decision

1. **Connect & Learn audience size — sources conflict.** The Master Copy says
   *approximately 50,000 educators* (confirmed 25 Jul). The CV says *28,000
   users — teachers, principals, board members and volunteers* (6 Jul). These
   may be measuring different things: member-school population versus platform
   users. Per the brief I published the more conservative figure, **28,000**,
   and flagged it here. Tell me which is right.

2. **Cromwell Property Group.** The CV names it as the Wellbeing Studio pilot
   client. Public naming permission is still unconfirmed, so the case study
   says "a first enterprise pilot" with no identifying descriptor.

## Environment limitation you should know about

Every render in this session was produced by a print engine inside the sandbox,
not a browser. Chromium could not be installed (the download host is outside
the network allowlist), and the Chrome extension cannot reach the sandbox or
open `file://`. That engine renders type, colour, hierarchy, imagery and
spacing faithfully enough to have caught six real defects, but its `clamp()` and
CSS-grid support diverge from Chrome — in the last render the hero headline came
out far smaller than its `clamp(2.8rem, 8vw, 6.2rem)` should produce, and
several grids collapsed to one column.

**Treat the typographic scale and grid behaviour as unverified.** Run
`npm run dev` and walk the six routes at 390, 768, 1024 and 1440 before
judging the composition.
