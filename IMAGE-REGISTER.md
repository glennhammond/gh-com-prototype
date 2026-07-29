# Image register — V3

Every supplied asset, what happened to it, and why. Sources are never modified;
derivatives are produced by `scripts/images.mjs`, which carries the crop reason
for each one inline.

58 derivatives from 33 sources, AVIF and WebP at up to three widths.

---

## 1. Published

### CASA

| Output | Source | Page | What it demonstrates |
| --- | --- | --- | --- |
| `class-home` | `casa-aviationworx-class-lms-hero.jpg` | CASA overview, CLASS | Task-led landing pattern; two navigation bars separating intention from subject matter |
| `casa-programme-card` | same, cropped above the tile row | Work index, CASA cards | Programme identity |
| `casa-streams` | `casa-document-control-catalogue-start.jpg` | Learning catalogue | Audience segmentation by span of responsibility |
| `casa-doc-catalogue` | `casa-document-control-catalogue-6.jpg` | Learning catalogue | Purpose statement above the fold in process learning |
| `casa-component-spec` | `tpl-component-spec.png` | Production system | Component states specified, not just layouts |
| `casa-icons` | `tpl-icons.png` | Production system | Icon and step-marker library; numerals carrying state, not colour alone |
| `casa-template-menu` | `casa-course-template-menu.jpg` | Production system | The template as it ships, unfilled. Flagged as a template |
| `casa-authoring-guidance` | `casa-learner-data.jpg` | Production system | Authoring instructions built into the template. Flagged as a template |
| `casa-video-lightbox` | `casa-course-template-video-lightbox.jpg` | Production system | One specified video treatment with the step markers retained |
| `casa-video` | `video-edit.jpg` | CASA overview | In-house production capability |
| `casa-authoring` | `storyline-build.jpg` | CASA overview | The tool the production system had to survive |
| `casa-interview`, `casa-regulation`, `casa-assessment`, `casa-competency`, `casa-mobile-plan`, `casa-mobile-conduct`, `casa-card` | `fer-*.png` | Flight Examiner Rating | Carried over from V2, unchanged |

### Other projects

| Output | Source | Page |
| --- | --- | --- |
| `tafe-industry-data`, `tafe-card` | `tafe-construction-industry-data.jpg` | TAFE |
| `tafe-map-admin`, `tafe-map-trades` | `tafe-pathways-screen-01/02.jpg` | TAFE (pair) |
| `tafe-slideshow` | `tafe-pathways-experience-hero.png` | TAFE |
| `tafe-wireframe` | `tafe-pathways-wireframe.jpg` | TAFE, expandable |
| `sonic-cover`, `sonic-card` | `sonic-healthplus-course-cover.png` | Sonic |
| `sonic-support-services` | `sonic-healthplus-injury-management-hero.jpg` | Sonic |
| `sonic-question`, `sonic-feedback` | `sonic-healthplus-module-01/02.png` | Sonic (pair) |
| `sonic-education` | `sonic-healthplus-module-03.png` | Sonic |
| `goodstart-myportal`, `goodstart-card` | `goodstart-learning-screen.jpg` | Goodstart |
| `goodstart-activity` | `goodstart-food-interaction.png` | Goodstart |
| `isq-diff-title`, `isq-diff-card` | `isq-differentiated-learning-hero.jpg` | ISQ |
| `isq-diff-intro`, `-tiers`, `-cycle`, `-scenario` | `isq-differentiation-screen-02/03/04/05.jpg` | ISQ |
| `safetyhub-cover` | `safetyhub-asbestos-awareness-hero.png` | Safetyhub |
| `safetyhub-question`, `safetyhub-card` | `safetyhub-asbestos-question-03.png` | Safetyhub |
| `safetyhub-video` | `safetyhub-asbestos-screen-04.png` | Safetyhub |
| `safetyhub-choice`, `safetyhub-feedback` | `safetyhub-asbestos-screen-05/07.png` | Safetyhub (pair) |
| `proto-data-intro`, `proto-card` | `learning-data-prototype-hero.png` | Prototypes |
| `proto-likert` | `learning-data-likert-scale.jpg` | Prototypes |
| `proto-menu` | `storyline-hamburger-menu-prototype.jpg` | Prototypes |

---

## 2. Omitted, with reasons

| Asset | Reason |
| --- | --- |
| `tafe-industry-data-interface.png` | **File is corrupt.** The lower two thirds of the PNG is black. The same screen survives intact as `tafe-construction-industry-data.jpg`, which is used instead. |
| `mobile-navigation-wireframe.gif` | A generic phone UI-kit mockup with placeholder avatars and "Full Name" rows. It is not evidence of your work, and at 400 × 300 in a 1.8 MB GIF it is expensive for what it says. |
| `casa-video-production.jpg` | Three reasons. A document is open and legible on the monitor behind the subject. The original needs both an EXIF 180° rotation and a horizontal flip before text in it reads correctly, which makes it a mirrored phone selfie. And the video-edit timeline is stronger evidence of the same claim. **Supply a cleaner production still if you want the filming story on the page.** |
| `class-platform.png` | Its left panel carries `training.admin@casa.gov.au` and lorem-ipsum welcome copy. Its right panel — the My Learning list, the only part worth publishing — is about 710 source pixels wide and cannot be shown legibly. V2 shipped a crop of this file that left the email address in frame. |
| `isq-differentiation-screen-06.jpg` | The classroom photograph includes a whiteboard carrying what appear to be real children's first names. |
| `tafe-pathways-title-image.jpg` | Generic road-at-sunrise stock. It is not evidence of design work, and the manifest already flagged it. |
| `sonic-healthplus-assessment.png` | A third near-identical quiz screen. Two are already shown as a question-and-feedback pair. |
| `safetyhub-asbestos-screen-06.png` | The correct-answer state. Visually identical to screen 07 apart from one line of text; the incorrect-answer state is the more useful of the two because the feedback does more work. |
| `storyline-hamburger-menu-state.jpg` | The same menu, same state, in a framed variant. A near-duplicate. |
| `goodstart-course-experience.jpg` | Identical to `goodstart-learning-screen.jpg` at half the resolution. |
| `goodstart-moodle-platform-hero.png` | 486 × 401 inside an iMac mockup. Too small to publish, cannot be enlarged without blurring the interface text, and the brief rules out routine device mockups. A labelled placeholder marks where it belongs. |
| `goodstart-institute-logo.png` | A client mark is not portfolio evidence. Retained in `source/` for a future identity strip. |
| `casa-course-template-icons.jpg` | Pixel-identical to `tpl-icons.png`, which is already in the V2 archive. The PNG is used because it carries transparency and stays crisper. |
| `fer-component.png` | Duplicates what the component specification sheet already shows. |

---

## 3. Uncertain CASA attribution

These are the ones to resolve before publication. Each is flagged in the
interface as well as here.

| Asset | Attributed to | Confidence | What would settle it |
| --- | --- | --- | --- |
| `class-home` | CLASS | **High.** The header wordmark reads *CLASS: CASA Learning Academy for Safe Skies* | Nothing. This is primary evidence |
| `casa-streams` | Learning catalogue | **Low.** Content is a leadership curriculum; the archive filename says "document control catalogue". Which platform hosted it is unknown | Confirm whether the four streams were CASA's existing leadership framework, and which platform this sat in |
| `casa-doc-catalogue` | Learning catalogue | **Low.** Grouped with `casa-streams` by filename family only. It is visibly a different artefact: a course *about* the controlled document catalogue | Confirm whether these two belong to the same body of work |
| `casa-template-menu`, `casa-icons`, `casa-component-spec`, `casa-authoring-guidance`, `casa-video-lightbox` | Production system | **Medium-high.** Consistent visual language and evidently template artefacts, but not tied to a named platform | Confirm whether the templates served AviationWorx, CLASS or both |
| `casa-video`, `casa-authoring` | Programme-wide | **Medium.** Clearly CASA production work; which project they belong to is unknown | Confirm which courses this footage and this build were for |
| — | AviationWorx | **No asset.** Nothing in the archive carries the AviationWorx identity | Supply a screenshot, or confirm none can be published |

---

## 4. Rules applied

- Crops are expressed as fractions of the source so they survive a re-export.
- Nothing is upscaled. A width is skipped when the source cannot carry it,
  which is why `casa-mobile-*` stop at 480 and `class-home` stops at 800.
- Intrinsic dimensions are written to `src/lib/image-manifest.json`, so every
  `<img>` reserves its box and layout shift stays at zero.
- Grading is applied to photography only. Interface colour is authentic.
- Hero images are `eager` with `fetchpriority="high"`; everything else is
  `lazy`.
- No screenshot appears twice on the same page. `scripts/audit.mjs` fails if
  one does.
- No image is attributed to a CASA subproject it cannot be tied to.
  `scripts/audit.mjs` enforces this with a per-page allow-list.
