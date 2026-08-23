# THE RECORD — Whole-System Consolidation 02

## Canonicalisation & Entry Architecture

**Date:** 23 August 2026  
**Status:** Canonical product baseline  
**Branch:** `feat/record-production-integration-01`  
**Go-live:** Separate gate. Do not infer launch readiness from this document.

---

## 1. Decision

THE RECORD is now the canonical professional evidence architecture for glennhammond.com.

The governing hierarchy is:

```text
Home
  ↓
Work
  ↓
Project
  ↓
Record
  ↓
Artefact
```

This hierarchy is not a sequence every visitor must follow. Project, Record and Artefact routes are all legitimate direct-entry surfaces. The hierarchy expresses evidentiary depth and provides widening/narrowing context.

The current evidence field contains:

- 4 Projects
- 6 Records
- 6 Artefacts

The four current territories are deliberately unequal:

1. Wellbeing Studio 2027 — active reference territory; 3 Records / 3 Artefacts
2. ISQ Connect & Learn — completed systems territory; 1 Record / 1 Artefact
3. CASA Flight Examiner Rating Course — completed regulated-learning territory; 1 Record / 1 Artefact
4. TAFE Queensland SkillsTech Pathways — historical territory; 1 Record / 1 Artefact

Unequal evidence density is intentional. THE RECORD must never create content merely to make territories look equally full.

---

## 2. Canonical surface roles

### Home — proposition and entry

Home must:

- establish the professional proposition
- identify THE RECORD as the evidence system
- demonstrate the span, age and weighting of the current evidence field
- allow movement into Work
- allow movement into Practice
- provide a concise commercial/contact movement

Home must not:

- duplicate the full Work index
- reproduce the Practice architecture
- act as a service catalogue
- invent project imagery to fill a visual slot
- imply that every Project is equally important or equally current

The Home hero therefore uses THE RECORD itself as the visual system: territory, state and Project → Record → Artefact depth. The previous Wellbeing Studio placeholder image is retired.

### Work — composed evidence field

Work is the canonical index of professional evidence.

It must:

- include every canonical Project currently admitted to THE RECORD
- preserve authored project order and weighting
- expose the Records currently available inside each territory
- show evidence density honestly
- allow entry at Project or Record depth

Work is not:

- a complete career catalogue
- a card grid
- a filterable skills database
- an archive of every old portfolio page

Record context labels on Work must come from the Record's editorial centre, not from its array position.

### Project — territory

A Project establishes the professional territory around a body of work.

Required contract:

- organisation / period
- state
- role
- altitude
- proposition
- territory/context
- available Records

Optional authored modules:

- trajectory
- parent-program context
- system map
- constraints
- significant external context
- project-specific evidence framing
- relationship to a wider body of work

A Project page is not a fixed page template. The required contract answers the same questions; the composition may differ when the material earns it.

### Record — consequential decision

A Record narrows a Project to something worth examining.

Required contract:

- parent Project context
- what happened
- why this is worth examining
- immediate access to relevant Artefact evidence where available
- explicit evidence boundary

Optional authored modules:

- tension
- move / reframe
- principle
- correction
- decision sequence
- production gates
- system model
- implementation detail
- authored relationship to another Record or Project

`Tension → Move → Principle` is a useful editorial pattern, not a compulsory template.

The dark principle/correction band is punctuation. It must not appear automatically on every Record.

### Artefact — inspection

An Artefact is inspectable evidence, not decoration.

Required contract:

- provenance
- summary
- inspectable evidence or semantic reconstruction
- evidence treatment / accessibility framing
- clear movement back to the parent Record

Direct-entry behaviour:

- entry from a parent Record: **Return to Record**, with focus restoration
- direct entry: **View Record**

Optional authored forms include:

- recovered interface sequence
- semantic reconstruction
- dependency/system map
- production qualification map
- annotated visual evidence
- comparison
- interaction reconstruction

---

## 3. Historical versus contemporary evidence

Canonical rule:

> Preserve historical surfaces when the surface itself is evidence. Reconstruct semantically when the system, relationship or idea is the evidence. Never cosmetically modernise history.

Therefore:

- TAFE recovered interface screens remain visually historical.
- CASA recovered course screens remain attributable historical evidence.
- ISQ uses a semantic dependency map rather than inventing a 2024 platform screen.
- contemporary Wellbeing concepts may use semantic reconstructions where the implemented/product architecture is the evidence being inspected.

A historical Project may still express contemporary professional relevance. Historical status describes the evidence, not its value.

---

## 4. Relationships

Relationships are authored evidence architecture.

Allowed relationship verbs remain:

- led to
- informed
- continued in
- revisited in
- extended through

Relationships must only appear where the underlying work supports them.

Do not add generic “related work”, recommendation carousels or similarity logic simply to increase navigation.

The Wellbeing chain currently proves the model:

```text
Contextual entry
  → led to → Connected-service model
  → continued in → R U OK? Day production slice
```

Empty relationship arrays are legitimate.

---

## 5. Home / Work distinction

The two routes intentionally overlap in subject but not responsibility.

### Home says

“This is the kind of practice this evidence represents, and this is the span of evidence available.”

### Work says

“Here is the evidence field itself, composed at Project and Record depth.”

Home uses compressed evidence indexes. Work uses editorial Record summaries and the full Project field.

If Home begins reproducing Work descriptions, Record excerpts or detailed Practice models, the distinction has failed.

---

## 6. Meta-Frame and widening/narrowing

The Meta-Frame is part of THE RECORD architecture, not decorative site chrome.

Its scope is derived from the canonical Record model rather than a manually duplicated route table.

Resolution behaviour:

```text
/work                                      Work
/work/[project]                            Project
/work/[project]/[record]                   Record
/work/[project]/[record]/[artefact]        Artefact / inspection
```

Legacy work routes do not receive canonical Record scope treatment merely because they live below `/work/`.

The interface must continue to support:

- direct entry
- Back / Forward restoration
- widening to parent context
- focus restoration after Artefact inspection
- no-JS static comprehension

---

## 7. Canonical route estate

### Canonical, indexable product routes

```text
/
/work

/work/wellbeing-studio
/work/wellbeing-studio/contextual-entry
/work/wellbeing-studio/contextual-entry/daily-wellbeing-journey
/work/wellbeing-studio/connected-service
/work/wellbeing-studio/connected-service/relationship-model
/work/wellbeing-studio/ruok-production-slice
/work/wellbeing-studio/ruok-production-slice/qualification-map

/work/connect-and-learn
/work/connect-and-learn/concurrent-migration
/work/connect-and-learn/concurrent-migration/dependency-map

/work/casa/flight-examiner-rating
/work/casa/flight-examiner-rating/examiner-judgement
/work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning

/work/tafe-pathways
/work/tafe-pathways/supporting-conversation
/work/tafe-pathways/supporting-conversation/exploration-environment

/practice
/about
/contact
```

`/privacy` remains addressable but `noindex` and is excluded from the sitemap.

The sitemap advertises the canonical product, not every route that temporarily remains renderable during migration.

---

## 8. Legacy route migration manifest

No destructive redirect or retirement is implemented in Consolidation 02. These are migration dispositions for the later Go-Live Gate.

| Existing route | Disposition | Canonicalisation decision |
|---|---|---|
| `/work/casa` | TEMPORARY RETAIN / ABSORB | Source view of the wider six-year CASA estate. Do not redirect to FERC until the wider CASA evidence has been modelled; FERC does not represent all CASA work. |
| `/work/casa/class` | REVIEW / ABSORB | Candidate future CASA Project/Record evidence. Do not preserve as an old-style case study by default. |
| `/work/casa/aviationworx` | REVIEW / ABSORB | Same rule: determine its real relationship to CLASS/CASA before mapping. |
| `/work/casa/learning-catalogue` | REVIEW / ABSORB | Likely evidence within a future CASA territory rather than a permanently parallel case-study page. |
| `/work/casa/course-system` | REVIEW / ABSORB | Strong candidate for future system/design evidence; do not force into FERC. |
| `/work/isq-elearning-design-system` | TEMPORARY RETAIN / LIKELY FUTURE CANONICAL EVIDENCE | Distinct body of work. Do not automatically merge into Connect & Learn; a genuine `informed` relationship may later connect them. |
| `/work/isq-differentiated-learning` | TEMPORARY RETAIN / REVIEW | Candidate future Project or Record after editorial extraction. |
| `/work/goodstart-myportal` | TEMPORARY RETAIN / REVIEW | Historical evidence candidate; admission to THE RECORD requires editorial value, not route survival. |
| `/work/sonic-healthplus` | TEMPORARY RETAIN / REVIEW | Same rule. |
| `/work/safetyhub-asbestos` | TEMPORARY RETAIN / REVIEW | Same rule. |
| `/work/interaction-prototypes` | ABSORB / REVIEW | Likely better interpreted through Practice or a deliberate experiments/evidence territory than retained as a generic project page. |
| `/services/rise-design-systems` | ABSORB → REDIRECT | Keep addressable until Practice is redesigned. Then absorb the useful material into Practice and redirect to the strongest canonical destination. |
| `/services/storyline-development` | ABSORB → REDIRECT | Same treatment as Rise. |
| `/about` | RETAIN | Supporting canonical route with existing search value. It need not return to primary navigation. |

Historical WordPress routes remain governed by `docs/SEO-MIGRATION.md`, but where that earlier document conflicts with THE RECORD, this canonicalisation record has product-architecture authority. Final redirect targets still require evidence/SEO qualification before launch.

---

## 9. Performance architecture

Canonical routes must not inherit the entire legacy content/media estate merely because both systems currently live in one repository.

Rules established in Consolidation 02:

- Home imports only the portrait evidence it actually displays.
- Home no longer imports `projects.js` or the legacy eager image resolver.
- CASA and TAFE canonical Artefacts import only the recovered evidence they display.
- `media.js` remains available to legacy case-study routes during migration.
- route-level code splitting remains part of the evidence architecture.
- the build must run publishing verification automatically.

The legacy `projects` and `media` chunks may continue to exist while legacy routes exist. Their existence is migration debt, not proof that canonical routes should consume them.

---

## 10. Flexible grammar rule

THE RECORD has a **shared evidentiary contract and an authored visual grammar**.

Do not turn the first six Records into a CMS page template.

A future page should be rejected if it satisfies the layout template but cannot answer the evidentiary questions.

A future page may depart substantially from existing composition if it preserves:

- hierarchy
- provenance
- evidence boundary
- contextual movement
- accessibility
- inspection integrity

The system should feel consistent because the reasoning is consistent, not because every page has the same sequence of bands.

---

## 11. Practice gate

### Evidence maturity: PASS

THE RECORD now contains enough diverse evidence to derive Practice from observed patterns rather than from a capability list.

The evidence demonstrates:

- product strategy and experience architecture
- platform/content/operations concurrency
- regulated professional learning and assessment reasoning
- interaction design and facilitated experience
- production implementation and qualification
- correction of implementation when later product reasoning requires it
- historical craft and contemporary systems thinking inside one evidence model

### Practice design: OPEN

Practice should now be designed as an interpretation of THE RECORD.

It should not begin from:

- service labels
- software/tool categories
- an inherited four-card capability grid
- a claim that Glenn can “do everything”

The next phase should ask:

> What recurring patterns of judgement, responsibility and making become visible when the evidence is read together?

---

## 12. Exit decision

Whole-System Consolidation 02 closes when:

- Home and Work have distinct canonical roles
- Home contains no fabricated project placeholder imagery
- Work uses semantic Record context rather than positional meaning
- canonical evidence media is isolated from the legacy eager asset estate
- the sitemap advertises canonical routes only
- build verification passes automatically on Vercel
- repository documentation identifies THE RECORD as the current architecture
- legacy routes have explicit migration dispositions

At that point:

**THE RECORD canonical evidence architecture: CLOSED**  
**Practice Architecture 01: OPEN**
