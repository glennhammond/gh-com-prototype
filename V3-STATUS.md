# Prototype V3 — handover

V2 is untouched. This is a separate, reviewable prototype in
`Prototypes/glennhammond-prototype-v3`.

```
npm ci
npm run images     # regenerate derivatives from src/assets/*/source (optional)
npm run dev        # walk the routes at 390, 768, 1024 and 1440
npm run check      # build + verify
node scripts/audit.mjs   # static accessibility and attribution review
```

---

## 1. What changed

**CASA became a programme.** V2 flattened six years inside the regulator into
one case study called *Flight Examiner Rating*. That understated both the range
and, more importantly, the platform work. V3 gives CASA an overview page and
five subprojects at their own routes, each with its own audience, constraints,
evidence and attribution.

**Five new case studies, one promoted.** TAFE Queensland, ISQ differentiated
learning, Sonic HealthPlus, Safetyhub and the prototypes are new. Goodstart
moves from a text-only note to a full case study with real imagery.

**The Work index is now three tiers.** Featured programme, case studies,
prototypes. Hierarchy is carried by scale, position and a real heading for each
tier, not by a badge or a colour.

**Gaps are visible, not hidden.** Every unconfirmed fact renders as a marked
editorial placeholder, and every page carries a *Still to confirm* panel. This
is deliberate for a review prototype: a missing fact that only shows up in a
build log never gets filled in. `PUBLISH=1 npm run verify` fails the build
while any remain, which is the switch to throw before a real launch build.

**Three clients cleared.** TAFE Queensland, Sonic HealthPlus and Safetyhub are
now `nameApproved` in `content/clients.js`, dated 27 Jul 2026. None has an
approved logo, and name approval and logo approval remain separate booleans.

**Copy is written without em dashes**, per your working style. Inherited V2
copy was not swept; if you want that done it is a contained pass over
`src/content/`.

---

## 2. Final architecture

```
/                                        Home
/work                                    Index — 3 tiers
/work/casa                               ── PROGRAMME OVERVIEW
   /work/casa/aviationworx                    01  no attributable imagery
   /work/casa/class                           02
   /work/casa/learning-catalogue              03  attribution uncertain
   /work/casa/course-system                   04
   /work/casa/flight-examiner-rating          05  carried over from V2
/work/wellbeing-studio                   Flagship
/work/connect-and-learn                  LearnX 2024
/work/tafe-pathways                      NEW
/work/goodstart-myportal                 Promoted from a note
/work/isq-differentiated-learning        NEW
/work/sonic-healthplus                   NEW
/work/safetyhub-asbestos                 NEW
/work/interaction-prototypes             NEW — lab tier
/services  /about  /contact  /privacy  /404
```

21 pages pre-rendered. 20 URLs in the sitemap.

**New components**

| Component | Job |
| --- | --- |
| `Figure` (rewritten) | image, pair, or labelled placeholder; area chip, analytical caption, prototype flag, provenance note, accessible enlarge dialog |
| `Editorial` | `marked()` placeholder renderer, `Gaps` panel, `EvidenceNote` |
| `ProjectMeta` | `MetaBar`, `Brief` (In 60 seconds), `Outcomes`, `Decisions` |
| `ProgrammeNav` | `ProgrammeMap`, `ProgrammeRail`, `SubprojectCards` |
| `ProjectNav` | `PrevNext` (stays inside a programme), `Related` (by shared discipline) |
| `ProjectCard` (extended) | programme / lead / default / small, plus a gap panel |

---

## 3. Images used, by page

| Page | Images |
| --- | --- |
| `/work/casa` | `casa-programme-card`, `class-home`, `casa-video`, `casa-authoring` |
| `/work/casa/aviationworx` | none. 3 labelled placeholders |
| `/work/casa/class` | `class-home`, 1 placeholder |
| `/work/casa/learning-catalogue` | `casa-streams`, `casa-doc-catalogue` |
| `/work/casa/course-system` | `casa-component-spec`, `casa-icons`, `casa-template-menu`, `casa-authoring-guidance`, `casa-video-lightbox` |
| `/work/casa/flight-examiner-rating` | `casa-card`, `casa-interview`, `casa-regulation`, `casa-assessment`, `casa-competency`, `casa-mobile-plan` + `casa-mobile-conduct` (pair) |
| `/work/wellbeing-studio` | `ws-card`, `ws-landing`, `ws-library`, `ws-session`, `ws-program` |
| `/work/connect-and-learn` | none. Designed evidence panel |
| `/work/tafe-pathways` | `tafe-card`, `tafe-industry-data`, `tafe-map-admin` + `tafe-map-trades` (pair), `tafe-slideshow`, `tafe-wireframe` |
| `/work/goodstart-myportal` | `goodstart-card`, `goodstart-myportal`, `goodstart-activity`, 1 placeholder |
| `/work/isq-differentiated-learning` | `isq-diff-card`, `isq-diff-title`, `isq-diff-intro`, `isq-diff-tiers`, `isq-diff-cycle`, `isq-diff-scenario` |
| `/work/sonic-healthplus` | `sonic-card`, `sonic-cover`, `sonic-support-services`, `sonic-question` + `sonic-feedback` (pair), `sonic-education` |
| `/work/safetyhub-asbestos` | `safetyhub-card`, `safetyhub-cover`, `safetyhub-question`, `safetyhub-video`, `safetyhub-choice` + `safetyhub-feedback` (pair) |
| `/work/interaction-prototypes` | `proto-card`, `proto-data-intro`, `proto-likert`, `proto-menu` |

Full derivation recipes and crop reasons are in `scripts/images.mjs`. Omissions
and their reasons are in `IMAGE-REGISTER.md`.

---

## 4. The three findings that changed the brief

**1. There is no AviationWorx imagery.** Both platform screenshots in the
archive carry the CLASS wordmark, reading *CLASS: CASA Learning Academy for Safe
Skies*. The file named `casa-aviationworx-class-lms-hero.jpg` is a CLASS home
page. AviationWorx is therefore written from confirmed responsibility and
carries three labelled placeholders.

**2. `casa-learner-data.jpg` is not learner data.** It is a template guidance
slide reading *"Something compelling on this slide. For example: Statistic(s),
Video, Funny, Reflective question, Interaction"* — instructions to the next
course author. It is published on the production-system page, captioned as
authoring guidance and flagged as a template. The manifest's proposed caption,
"connect the design to learner data or reporting", would have been a false
claim.

**3. The two "document control catalogue" screens are different artefacts.**
One is a leadership-stream selector (*Leading and managing self / others /
managers / CASA*). The other is the opening of a course about the controlled
document catalogue. The archive groups them by filename only. They are
presented together with an evidence note saying exactly that.

Also worth knowing: the brief calls CLASS *"CASA Learning for Safer Skies"*. The
platform header reads *"CASA Learning Academy for Safe Skies"*. The screenshot
wording is used, because it is primary evidence.

---

## 5. Client permission and confidentiality

**Resolved in this build**

- V2 published `class-platform.png` cropped in a way that left the internal
  address `training.admin@casa.gov.au` in frame. V3 does not process that file
  at all. This was a live defect in V2.
- `casa-video-production.jpg` is not published. A document is open and legible
  on the monitor behind the subject, and the file needs both an EXIF rotation
  and a horizontal flip before any text in it reads correctly.
- `isq-differentiation-screen-06.jpg` is not published. The classroom
  photograph shows a whiteboard carrying what appear to be real children's
  first names.

**Still open, in priority order**

1. **ISQ differentiated learning** publishes course photography showing
   identifiable school students. Confirm the licence and the publication
   permission before this page goes live. This is the highest-risk item on the
   site.
2. **CASA Flight Examiner Rating** publishes a piece-to-camera frame showing a
   named, identifiable CASA examiner.
3. **CLASS** publishes real course titles and the account label *User: Glenn
   Hammond*. Yours, but on a government platform.
4. **Sonic HealthPlus** screens describe commercial service tiers, retainers
   and pricing logic. Naming approval is not approval to publish that content.
5. **Safetyhub** — confirm the course was published rather than draft portfolio
   material, and confirm the site-footage licence.
6. **TAFE Queensland** — name now approved; confirm interface imagery too.
7. No client logo is approved for display beyond ISQ and CASA, and neither is
   used as portfolio imagery.

---

## 6. Unresolved factual placeholders

54 rendered placeholders across 10 pages; 59 facts listed in the per-page
*Still to confirm* panels. The full list is in `GAPS.md`, and every one is also
visible in the interface where it belongs.

The five that block the most:

1. What AviationWorx was for, who used it, and how it related to CLASS.
2. The platform technology behind both AviationWorx and CLASS.
3. Whether the CASA stream selector and the Document Catalogue course are one
   body of work.
4. Your role boundaries on TAFE Queensland, Goodstart and Sonic HealthPlus.
5. Any measurable outcome for any of the five new case studies. Every one
   currently ends with `[Add measurable outcome]`.

---

## 7. Checks completed, and one that was not

**Automated, on the real build**

- `npm run verify` — placeholder scan, unapproved client names, unapproved
  logo assets, withheld routes, content status, pre-rendered content on 17
  named pages, head metadata, single h1 per page, internal link integrity,
  performance budgets, zero third-party requests. **Passing.**
- `node scripts/audit.mjs` — heading order with no skipped levels, alt text
  present and descriptive on every image, intrinsic dimensions on every image,
  loading strategy, `srcset`/`sizes` on every picture, duplicate imagery within
  a page, accessible names on every link and button, named nav landmarks,
  computed contrast for 11 token pairs, focus/reduced-motion/44px-target CSS,
  `aria-current` on the programme rail, and CASA image attribution per page.
  **Passing.**

**Contrast, computed**

| Pair | Ratio |
| --- | --- |
| ink on paper | 15.89:1 |
| steel on paper | 7.07:1 |
| steel on plate | 6.70:1 |
| brass-deep on paper (non-text) | 3.41:1 |
| on-ink on ink | 15.89:1 |
| on-ink-muted on ink | 8.76:1 |
| brass on ink | 7.59:1 |

**Budgets**

| | Actual | Budget |
| --- | --- | --- |
| JS gzipped | 127 KB | 140 KB (was 120) |
| CSS gzipped | 9 KB | 30 KB |
| Fonts | 107 KB / 4 files | ~120 KB |
| Largest image | 173 KB | 180 KB |

**The check that was not done: a real browser.** Chromium could not be
installed in this environment — the download host is outside the network
allowlist, and `playwright install` cannot elevate. Pages were rendered with
WeasyPrint at 390 and 1440, which was enough to catch four real defects (a
duplicated hero image on five pages, a wrong screen-reader class name, an
unescaped placeholder in figure captions, and two bad crops). It is **not** a
browser: it did not apply the responsive media queries reliably and it does not
lay out `grid-template-columns: repeat(auto-fit, minmax(…))` the way Chrome
does.

**Treat multi-column grid behaviour and the type scale as unverified.** Run
`npm run dev` and walk all 21 routes at 390, 768, 1024 and 1440 before judging
composition. The specific things to look at are the *In 60 seconds* panel, the
Work index two-column grid, the programme map's two-column groups, and the
paired figures at the 640px stacking breakpoint.

---

## 8. Known open items

| Item | Consequence |
| --- | --- |
| **JS budget raised 120 → 140 KB** | Real regression. V2 shipped 4 routed case studies at 102 KB; V3 ships 14 at 127 KB, because every content record is in the client bundle. The fix is structural: load case-study records per route, or serve those routes as static HTML without hydration, since nothing on them is interactive except the image dialog. |
| **Privacy page is still indexable** | Carried over from V2. Still a P0. |
| **Open Graph image** | Still V2's. |
| **Services page** | Still V1 structure. Only the two link paths were updated. |
| **About page** | Still V1. No portrait, no personal paragraph. |
| **In-page case-study contents** | Not built. The CASA programme page is a long single scroll. |
| **Connect & Learn audience size** | 28,000 published, 50,000 in the Master Copy. Unresolved. |
| **Browser QA** | Not possible here. See above. |

---

## 9. Recommended next content-gathering, in order

1. **Write two paragraphs on AviationWorx** and find any screenshot. It is the
   one page on the site currently carried entirely by assertion, and it is one
   of the two things you have specifically confirmed you built.
2. **Get one number per new case study.** Learners reached, courses produced,
   time saved, completion rate — any single verifiable figure. Five case
   studies currently end with `[Add measurable outcome]`, and at senior
   consultant level that is the difference between a portfolio and a gallery.
3. **Resolve the ISQ photography permission** before anything is published.
4. **Recover the old page copy** for TAFE, Sonic and Safetyhub from a web
   archive if one exists. The image archive establishes what was designed; it
   cannot establish scale, role boundaries or outcomes, and those are exactly
   the gaps.
5. **Re-capture the CLASS My Learning panel** at a legible resolution, and
   confirm whether the two CLASS screenshots are the same release.
6. **Decide the Child Protection Program question.** It is still withheld, and
   `verify.mjs` still fails the build if it is rendered unwritten.
