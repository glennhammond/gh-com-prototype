# glennhammond.com — THE RECORD

Production prototype for **THE RECORD**, Glenn Hammond’s professional evidence system.

The canonical evidence architecture is:

```text
Home → Work → Project → Record → Artefact
```

**Current status:** Whole-System Consolidation 02 canonical baseline.  
**Branch:** `feat/record-production-integration-01`  
**Go-live:** separate gate. This branch must not be merged to `main` merely because it is production-qualified.

The current canonical field contains **4 Projects, 6 Records and 6 Artefacts** across Wellbeing Studio 2027, ISQ Connect & Learn, CASA Flight Examiner Rating and TAFE Queensland SkillsTech Pathways.

See `docs/THE-RECORD-CANONICALISATION-02.md` for the current product architecture, flexible editorial grammar, route estate and migration decisions.

---

## Run it

```bash
npm install
npm run dev
```

## Build and qualify

```bash
npm run build
```

`npm run build` now performs three production steps:

1. static pre-render via `vite-react-ssg`
2. sitemap / robots generation
3. publishing verification

The verification gate checks no-JS content, metadata, internal links, withheld/unapproved material, sitemap integrity and performance budgets.

For the additional review audit:

```bash
npm run check
```

`npm run check` runs the qualified build and then `scripts/audit.mjs`.

---

## Canonical routes

### Entry and interpretation

```text
/
/work
/practice
/about
/contact
```

`/privacy` remains addressable but `noindex` and is not included in the sitemap.

### Evidence

```text
/work/wellbeing-studio
  /contextual-entry
    /daily-wellbeing-journey
  /connected-service
    /relationship-model
  /ruok-production-slice
    /qualification-map

/work/connect-and-learn
  /concurrent-migration
    /dependency-map

/work/casa/flight-examiner-rating
  /examiner-judgement
    /assessment-reasoning

/work/tafe-pathways
  /supporting-conversation
    /exploration-environment
```

Legacy case-study and service routes still render during migration. Their continued existence does **not** make them canonical. They are omitted from the canonical sitemap and have explicit dispositions in the Consolidation 02 document.

---

## Current content authority

`src/content/the-record.js` is the canonical evidence model for Project, Record, Artefact and evidence claims.

The legacy `src/content/projects.js` estate remains available only because migration is incomplete. New THE RECORD work must not be added there by default.

Key boundaries:

- `the-record.js` — canonical professional evidence
- `record-model.js` — evidence validation and hierarchy contract
- `record-context.js` — Meta-Frame scope derived from canonical evidence data
- `record-media.js` — scoped media helper for canonical evidence routes
- `projects.js` / `media.js` — legacy estate pending migration

---

## Stack

React 18 · Vite 6 · `vite-react-ssg` · React Router 6 · plain CSS with design tokens.

The site is statically pre-rendered, route-split and progressively enhanced. Canonical Record routes are designed to remain understandable without JavaScript; Back/Forward restoration and Artefact focus return enhance the browser journey where JavaScript is available.

---

## Documentation authority

Current:

- `docs/THE-RECORD-CANONICALISATION-02.md` — canonical product and migration baseline
- `ARCHITECTURE.md` — current technical architecture
- `docs/SEO-MIGRATION.md` — earlier URL migration research; still useful, but superseded by Consolidation 02 where product architecture conflicts
- `DECISIONS.md` — historical implementation decisions
- `CONTENT-REGISTER.md` / `IMAGE-REGISTER.md` — legacy/content evidence registers
- `VERIFICATION.md` — earlier qualification record; current deployments enforce verification in the build itself

## Licensing note

`src/assets/fonts/` contains licensed ITC Avant Garde Gothic Std files. Do not redistribute those font files.
