# THE RECORD — Practice Production 01 Specification

**Architecture dependency:** `docs/PRACTICE-ARCHITECTURE-02.md`  
**Architecture Gate:** PASS  
**Target route:** `/practice`  
**Target branch:** `feat/record-production-integration-01`

## 1. Production intent

Build the smallest genuinely excellent Practice experience that interprets the current canonical THE RECORD field without becoming a duplicate Work index, capability catalogue, methodology pitch or commercial services page.

The implementation must make the evidence relationship visible enough that a visitor can move from an interpretation directly into the Record and then into an Artefact.

## 2. Content hierarchy

### A. Threshold

- Eyebrow: `THE RECORD · Practice`
- `h1`: `The work changes. Certain decisions keep recurring.`
- Standfirst defining Practice as THE RECORD’s interpretation layer.
- Integrity note: the current public canonical field is selective and begins in 2015; it is not thirty years of canonical evidence.
- Immediate text link to `/work`.

### B. Proven recurring practice

Section heading: `What keeps recurring`

Render three authored claims:

1. Start with the situation, not the inherited structure.
2. Keep connected decisions connected.
3. Solve at the altitude the problem requires.

Each claim must include:

- visible classification `Proven recurring practice`;
- concise interpretation;
- explicit evidence-boundary copy;
- evidence relationships resolving canonical Project, Record and Artefact data;
- a Record deep link and an Artefact inspection link for each relationship;
- relationship note explaining why the evidence supports the claim.

### C. Current operating lens

Section heading: `A current way of describing the movement`

Render `Frame. Shape. Make. Evidence.` as four overlapping modes, not interactive tabs and not numbered steps.

Required boundary copy:

- the terms describe current work;
- they are not claimed as the historical terminology of older projects;
- as a four-part named set they are classified as a strong emerging pattern/current interpretive lens.

### D. Evolution of practice

Section heading: `The practice has widened in altitude`

Render a compact, semantic chronological sequence from the canonical field:

- 2015 — TAFE Pathways — Artefact / Experience.
- 2015–21 — CASA FERC — Artefact / Experience / System.
- 2024 — ISQ Connect & Learn — Experience / Content / Platform.
- 2026–27 — Wellbeing Studio — Product / Experience / System.

This sequence is evidence of widening scope, not a value ladder. Earlier artefact-making remains present inside later system work.

Each item links to its relevant Record rather than becoming a new project summary.

### E. Strong emerging practice

Section heading: `What is still emerging`

Render two visibly weaker claims:

- Make complexity usable without falsifying it.
- Design technology with human activity, not instead of it.

Each must say `Strong emerging pattern` and link to the narrower evidence supporting it.

Do not promote production qualification/correction to recurring Practice. It remains single-project evidence inside Wellbeing Studio.

### F. Specialist production depth

Section heading: `Tools are materials, not the Practice`

Acknowledge Storyline as recurring specialist production depth because canonical evidence exists across TAFE, CASA and ISQ. Explain what it enabled rather than presenting a feature list.

The page may link to `/services/storyline-development` as specialist detail, but the route must not become a fourth primary Practice claim.

Do not promote Rise on `/practice` until canonical THE RECORD evidence supports a comparable claim. Preserve `/services/rise-design-systems` for direct entry and SEO migration continuity.

### G. Evidence contract

Section heading: `How to read a Practice claim`

Explain the four classifications succinctly:

- Proven recurring practice
- Strong emerging pattern
- Single-project evidence
- Aspirational positioning

Close with the governing rule: Practice cannot outrun the Record.

### H. Close

Primary route movement: `/work` — inspect THE RECORD.  
Secondary route movement: `/contact` — contact Glenn.

No four-engagement sales catalogue is rendered.

## 3. Component requirements

Prefer route-local semantic composition over new shared abstraction unless reuse is genuinely needed.

Required production units:

- `Practice` route page.
- Data-backed Practice claim model in `src/content/practice.js`.
- Evidence relationship rendering driven by canonical IDs, not copied project facts.
- Route-local CSS in `src/pages/Practice.css`.

The implementation should not use:

- `LayerTabs`;
- `LayerMark` for Four Layers;
- `engagements` data;
- legacy `projects.js` as the source of Practice evidence;
- client-side state to reveal essential content.

## 4. Practice claim data contract

`src/content/practice.js` should classify claims with stable identifiers and one of:

- `proven-recurring`
- `strong-emerging`
- `single-project`
- `aspirational-positioning`

Evidence relationships reference:

- `recordId`
- `artefactId` where inspection evidence exists
- an authored relationship note

At module load, validate that:

- every referenced Record exists in `recordIndex`;
- every referenced Artefact exists;
- an Artefact belongs to the linked Record;
- every `proven-recurring` claim spans at least two distinct Projects;
- the three primary claims currently span all four canonical Projects.

A broken evidence mapping should fail the build rather than silently render a false relationship.

## 5. Evidence relationship behaviour

For every core claim evidence unit show:

- Project title / period as provenance;
- Record title as the primary link;
- concise support note;
- Artefact title as a secondary inspection link.

The page never invents a claim state from an Artefact. Existing Record/evidence boundaries remain authoritative.

## 6. Record deep-linking

Use canonical `record.path` and `artefact.path` values from `src/content/the-record.js` via `recordIndex`.

Never duplicate paths as hand-authored strings in the page component when an indexed canonical entity exists.

Browser Back/Forward must use ordinary React Router links with no route-state dependency.

## 7. Chronology / evolution behaviour

Evolution uses a semantic ordered list. It must:

- follow source periods;
- avoid implying continuous canonical documentation between entries;
- avoid animations or horizontal timeline interactions;
- reflow vertically at all widths;
- link each step back to source evidence.

## 8. Specialist-production treatment

### Storyline

Retain route `/services/storyline-development`.

On `/practice`, describe Storyline only as evidenced specialist production depth across TAFE, CASA and ISQ. Do not reproduce the legacy capability matrix.

Update any specialist-route backlink that says users can compare Rise and Storyline on the Practice overview; that comparison no longer exists.

### Rise

Retain route `/services/rise-design-systems` for direct entry / migration continuity.

Remove the dependency that describes the Practice overview as a Rise-versus-Storyline comparison.

Do not promote Rise as a core Practice claim in Production 01.

## 9. Legacy `/practice` disposition

Retire from `/practice`:

- `Four layers, one owner.`
- `LayerTabs`.
- Four Layers as the page’s organising model.
- the main Rise / Storyline comparison section.
- `The right tool for the learning problem` comparison copy.
- `How this is bought`.
- the four engagements list and all buyer/trigger/includes/excludes/outcome/next-step detail.
- legacy evidence references via `projects.js`.

Legacy data/components may remain in the repository where other routes still depend on them. Production 01 removes their dependency from `/practice`; it does not conduct unrelated repository deletion.

## 10. SEO / schema

Update `/practice` metadata to describe an evidence-backed digital product, learning, interaction and systems practice rather than Four Layers / four engagements.

Update `practiceSchema` so `serviceType` no longer mirrors the retired Four Layers model.

Do not add schema claims that exceed canonical evidence.

Retain canonical URL `/practice` and breadcrumb semantics.

## 11. Responsive behaviour

- Header headline uses fluid type and constrained measure.
- Core claim content is single-reading-order DOM; desktop grids may separate interpretation and evidence visually.
- Evidence relationships stack to one column below desktop widths.
- Mode grid reduces from four/two columns to one.
- Evolution remains vertical at all widths.
- No essential content is clipped, collapsed or horizontally scrollable.
- Use fluid padding and spacing; no fixed-height cards.

## 12. Accessibility semantics

- Exactly one `h1`.
- No skipped heading levels.
- Section headings use `h2`; claim/mode/evolution titles use `h3`.
- Classification is visible text.
- Evidence is a list of relationships, not visual-only connectors.
- Links have descriptive names: `Read Record`, `Inspect artefact`, or entity title with context.
- All link targets remain usable with keyboard and enlarged text.
- Keep existing site focus and reduced-motion rules intact.
- Do not introduce motion as required meaning.

## 13. Motion

**None required for Practice Production 01.**

THE RECORD’s architecture is already expressed through typography, spacing, provenance and movement between routes. Adding page-local reveal animation would be decoration, not architecture.

## 14. Verification contract changes

Update static build verification so `/practice` must contain at least:

- `The work changes. Certain decisions keep recurring.`
- `Start with the situation, not the inherited structure.`
- `Keep connected decisions connected.`
- `Solve at the altitude the problem requires.`
- `Frame. Shape. Make. Evidence.`
- `The public Record is selective`

Add a Practice architecture regression check that fails if built `/practice` contains legacy markers such as:

- `Four layers, one owner`
- `Four engagements`
- `The right tool for the learning problem`

## 15. Qualification requirements

### Repository / static qualification

Run or obtain equivalent CI evidence for:

- `npm run build`
- `npm run verify`
- `npm run audit` / `npm run check`
- static `/practice` rendering
- internal-link validation
- heading-order validation
- metadata and canonical validation
- performance budgets

### Browser qualification

On the Vercel branch preview inspect:

- direct entry `/practice`;
- `/practice` → representative Record → Artefact → browser Back / Forward;
- `/practice` → `/work` and `/contact`;
- desktop and mobile layouts;
- keyboard traversal and visible focus;
- enlarged-text stress;
- semantic reading order;
- no horizontal overflow;
- specialist direct-entry routes and revised backlinks;
- representative Work / Record / Artefact routes for regression.

### Architecture qualification

Technical success is insufficient. The page must still answer:

1. Does Practice interpret evidence rather than advertise capabilities?
2. Is THE RECORD visibly authoritative?
3. Are stronger and weaker claims distinguishable?
4. Can every core claim be inspected?
5. Has any historical project been rewritten to fit contemporary language?
6. Has any tool or commercial offer become the architecture again?

## 16. Production stop conditions

Stop before:

- merge to `main`;
- production deployment or production-domain change;
- adding unsupported private/client material;
- promoting a weak claim merely to make the page feel fuller.

Production 01 may correct its own implementation autonomously until the qualification gate is satisfied.