# glennhammond.com — Architecture

## Current authority

This repository now implements **THE RECORD**, Glenn Hammond’s professional evidence system.

The canonical product hierarchy is:

```text
Home → Work → Project → Record → Artefact
```

The current architecture was proven through the Production Integration and Whole-System Consolidation work on `feat/record-production-integration-01`.

Go-live remains a separate gate. Legacy routes are intentionally still renderable while migration decisions are resolved.

For the product/editorial contract and migration manifest, see:

`docs/THE-RECORD-CANONICALISATION-02.md`

---

## 1. Stack

- React 18
- React Router 6
- Vite 6
- `vite-react-ssg`
- plain CSS with design tokens
- self-hosted fonts
- static pre-rendering for all routes

The application remains progressively enhanced. JavaScript adds browser behaviour; it is not required to understand the core evidence content.

---

## 2. Repository shape

```text
src/
  main.jsx
  routes.jsx

  content/
    the-record.js        canonical Project / Record / Artefact evidence
    record-model.js      hierarchy + evidence validation
    home.js              Home entry copy
    site.js              navigation and site settings

    projects.js          legacy case-study estate; migration source, not canonical
    layers.js            existing Practice model
    engagements.js       existing Practice commercial model
    ...

  lib/
    record-context.js    Meta-Frame scope derived from THE RECORD
    record-media.js      explicit responsive-image helper for canonical evidence
    media.js             legacy eager image resolver
    schema.js            structured-data builders
    validation.js        form validation

  components/
    Layout.jsx
    MetaFrame.jsx
    SelectedWork.jsx
    ...

  pages/
    Home.jsx
    Work.jsx

    RecordProject.jsx
    RecordPage.jsx
    ArtefactPage.jsx

    ConnectedServiceRecord.jsx
    ConnectedServiceArtefact.jsx
    RuokProductionRecord.jsx
    RuokQualificationArtefact.jsx

    ConnectRecordProject.jsx
    ConnectMigrationRecord.jsx
    ConnectDependencyArtefact.jsx

    CasaRecordProject.jsx
    CasaJudgementRecord.jsx
    CasaJudgementArtefact.jsx

    TafeRecordProject.jsx
    TafeConversationRecord.jsx
    TafeConversationArtefact.jsx

    Practice.jsx           existing interpretation layer; next redesign phase
    CaseStudy.jsx          legacy case-study renderer
    ...

  routes/
    route-level lazy wrappers

  styles/
    tokens.css
    fonts.css
    global.css
    system.css

scripts/
  postbuild.mjs          canonical sitemap + robots
  verify.mjs             production publishing gate
  audit.mjs              review-quality audit
  images.mjs             legacy/source image derivative pipeline
```

The central architectural boundary is now **canonical evidence versus legacy estate**.

---

## 3. Canonical evidence model

`src/content/the-record.js` is the source of truth for professional evidence admitted to THE RECORD.

It contains four entity families:

### Project

A territory of work.

Required data includes:

- stable id and canonical path
- organisation / period / state
- proposition and context
- role and altitude
- optional trajectory
- ordered Record ids
- authored placement metadata

### Record

A consequential decision or movement inside a Project.

Required data includes:

- parent Project id
- canonical nested path
- title and editorial centre
- what happened
- why it is worth examining
- tension / move data where relevant
- making/implementation evidence
- evidence boundary
- Artefact ids
- evidence-claim ids
- authored relationships

The data shape does **not** require every Record page to render the same module sequence. The schema is an evidentiary contract, not a page template.

### Artefact

Inspectable evidence nested beneath a Record.

Required data includes:

- parent Record id
- canonical path
- kind and provenance
- status
- summary
- accessibility/evidence treatment
- evidence-claim ids

The page implementation determines the inspection form appropriate to the evidence: recovered historical screens, semantic reconstruction, dependency map, qualification map, etc.

### Evidence claim

A claim with explicit evidence state and basis.

States:

```text
intended
implemented
observed
validated
```

Claims may also carry limitations. This prevents the editorial layer from converting “designed”, “implemented” or “observed” into unsupported outcome language.

---

## 4. Hierarchy validation

`record-model.js` validates the evidence graph at module load.

It enforces:

- unique Project / Record / Artefact / claim ids
- unique canonical paths
- Records nested beneath their Project route
- Artefacts nested beneath their Record route
- valid parent references
- valid evidence-claim references
- supported relationship verbs
- numeric/valid placement metadata

The hierarchy therefore fails early if content attempts to escape its parent territory or references evidence that does not exist.

---

## 5. Route architecture

`routes.jsx` declares canonical routes explicitly before the legacy catch-all routes.

Canonical pattern:

```text
/work
/work/[project]
/work/[project]/[record]
/work/[project]/[record]/[artefact]
```

Current Project paths are intentionally authored rather than generated slugs; for example CASA is nested beneath `/work/casa/flight-examiner-rating`.

Legacy migration routes remain later in the route table:

```text
/work/:slug
/work/casa/:slug
/services/...
/about
```

Addressability during migration does not make a route canonical.

The sitemap is the authoritative search-discovery list and contains only the current canonical product routes plus retained support routes.

---

## 6. Home and Work

### Home

Home is the **entry architecture**, not another portfolio index.

It now:

- states the professional proposition
- renders the live evidence field (Project/Record/Artefact counts)
- names all four territories and their current state
- previews evidence density without inventing imagery
- creates movement to Work and Practice
- provides a concise commercial/contact bridge

The previous Home-specific four-layer and Rise/Storyline mini-Practice sections were removed from Home. The existing Practice route retains those ideas until Practice is deliberately redesigned.

### Work

Work composes all canonical Projects at Project and Record depth.

Project lead treatment is derived from authored placement metadata (`featured`), not from a project id check.

Record context on Work is derived from each Record’s `centre`, not its array index. Positional labels such as “the product widened” are not allowed to carry semantic meaning.

The spatial offsets between Projects remain editorial composition; they do not encode ontology.

---

## 7. Meta-Frame

`MetaFrame.jsx` persists the site identity and primary navigation.

THE RECORD scope is resolved by `record-context.js`, which derives context from the canonical evidence collections rather than maintaining a second manual list of route conditions.

It distinguishes:

- Work
- Project
- Record
- Artefact inspection
- legacy Work routes

Artefact routes receive the inspection treatment without removing the wider site identity.

This prevents future canonical evidence from becoming invisible to the Meta-Frame simply because another conditional was not added.

---

## 8. Browser journey behaviour

`Layout.jsx` owns route effects.

It provides:

- manual scroll restoration
- Back/Forward scroll-position recovery
- focus restoration after Artefact inspection
- hash focus/scroll behaviour
- top-of-page reset on new navigation
- focus movement to `main` after navigation

Artefact links pass route state when entered from a Record. This allows the Artefact to render:

- **Return to Record** for internal inspection
- **View Record** for direct entry

The parent Record can regain focus at the originating evidence link after return.

---

## 9. Progressive enhancement

The base application remains statically understandable.

The inline `.js` flag is applied before paint. Interactive controls that require JavaScript are only exposed when functional.

Core requirements remain:

- static HTML contains the professional evidence
- primary navigation remains usable without JS
- content hierarchy does not depend on client rendering
- direct Project/Record/Artefact routes pre-render independently

The build verification script checks required text in the generated HTML so no-JS resilience is a production gate rather than an assumption.

---

## 10. Historical evidence treatment

THE RECORD distinguishes historical evidence from contemporary reconstruction.

Rule:

> Preserve historical surfaces when the surface itself is evidence. Reconstruct semantically when the relationship/system is the evidence. Never cosmetically modernise history.

Examples:

- CASA and TAFE Artefacts display recovered historical screens with contemporary editorial framing.
- ISQ displays a semantic dependency structure rather than an invented historical platform interface.
- Wellbeing conceptual Artefacts can use semantic reconstructions because the architecture/product decision is the evidence.

Historical visual style is not a defect to be “fixed” inside an Artefact.

---

## 11. Media architecture

Two media systems currently coexist deliberately.

### Canonical scoped media

`record-media.js` builds responsive descriptors from explicit route-local imports.

CASA and TAFE canonical Artefact routes import only the evidence derivatives they display.

This prevents those routes from inheriting the complete historical asset estate.

### Legacy media

`media.js` uses an eager `import.meta.glob` across the legacy asset folders. It remains available to `CaseStudy` and other legacy routes during migration.

It is migration debt, not the pattern for new THE RECORD work.

New canonical routes must not import `media.js` merely for convenience.

---

## 12. Performance architecture

Performance is treated structurally, not as late compression.

Current principles:

- route-level lazy modules for evidence detail
- static pre-rendering
- explicit responsive image derivatives
- no third-party font connections
- canonical routes isolated from legacy content/media where possible
- initial-JS and individual-chunk budgets enforced by verification

The Consolidation 02 verified build reports:

- Home static HTML: 22.90 KiB
- CASA assessment-reasoning Artefact HTML: 18.77 KiB
- TAFE exploration-environment Artefact HTML: 21.33 KiB
- initial JS: 99 KB gzipped (120 KB budget)
- largest JS chunk: 99 KB gzipped (100 KB budget)
- CSS: 16 KB gzipped (30 KB budget)
- largest image: 173 KB (180 KB budget)

The legacy `projects` and `media` chunks still exist because legacy routes still exist. The canonical architecture no longer treats them as entry dependencies.

---

## 13. Sitemap and migration

`postbuild.mjs` generates a sitemap from `the-record.js` plus retained canonical support routes.

Included:

- Home
- Work
- all canonical Projects
- all canonical Records
- all canonical Artefacts
- Practice
- About
- Contact

Excluded:

- legacy case-study routes
- legacy service routes
- `/privacy` (`noindex`)

Redirects are **not** implemented by removing routes during Consolidation 02. Final redirect/retirement decisions belong to the Go-Live Gate and are documented in `docs/THE-RECORD-CANONICALISATION-02.md` plus the earlier `docs/SEO-MIGRATION.md` research.

---

## 14. Production verification

The `build` command now runs:

```text
vite-react-ssg build
→ postbuild sitemap/robots
→ verify.mjs
```

Therefore a Vercel deployment cannot become READY simply because compilation succeeded if publishing verification fails.

`verify.mjs` currently checks:

- placeholder/prohibited content
- client/logo approval
- withheld routes
- publishable content status
- required pre-rendered content
- metadata and one-H1 rule
- noindex behaviour
- internal links
- editorial placeholder reporting
- initial/chunk/CSS/image performance budgets
- third-party resource policy
- sitemap integrity

`audit.mjs` remains the broader review-quality pass and is run through `npm run check`.

---

## 15. Legacy estate boundary

The old case-study system is retained as a source estate while migration is incomplete.

Do not infer from its continued presence that:

- every old case study deserves a canonical Project
- every old route should survive launch
- `projects.js` remains the product content model
- the old CASA parent model is the final THE RECORD ontology
- the old Rise/Storyline service pages should remain independent services

Admission to THE RECORD is an editorial/evidentiary decision.

Legacy dispositions are recorded in the Consolidation 02 document before any destructive migration work begins.

---

## 16. Next architectural phase

THE RECORD now has enough evidence diversity for Practice to be derived from the work.

The next product architecture phase is:

**Practice Architecture 01 — Reading the Practice Through THE RECORD**

Practice should interpret recurring patterns of judgement, responsibility and making across the evidence system. It should not be designed as another capability/service inventory.
