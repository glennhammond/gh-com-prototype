# THE RECORD — Minimum Amazing Editorial & Publication Proof 01

**Date:** 24 August 2026  
**Status:** PASS — editorial/publication qualification complete; go-live remains held by separate browser, permission and release gates  
**Branch:** `proof/record-editorial-publication-01`  
**Visual-proof baseline:** `d239bee520f98d8582efd0ab2496b88874f26ee1`  
**Publication qualification commit:** `e38168fc6bb385b0b1045367ab99b8e91bf15b1b`

## 1. Decision

The Minimum Amazing canonical THE RECORD product has passed editorial and publication qualification.

This pass does not add Projects, Records or Artefacts and does not reopen the Project → Record → Artefact architecture. It tests whether the qualified product says only what its current evidence can support, whether public copy is legible as public copy rather than internal architecture documentation, and whether machine-readable identity and publication controls agree with the visible product.

Result: **PASS**.

The product remains **not yet approved for public domain cutover**. External browser closure, final publication-permission sign-off and the explicit production/domain release decision remain separate gates.

## 2. Material editorial findings and corrections

### A. Career continuity versus public evidence window

The homepage line `Thirty years of making digital things.` describes career continuity. THE RECORD itself is selective and its current public evidence field reaches back to 2015.

That distinction is now explicit rather than implied:

- Home describes THE RECORD as a **selective, living professional evidence system**.
- Practice states that the public Record is selective, currently reaches back to 2015, and that the thirty-year Home line is not a claim of thirty years of published evidence.

This removes an avoidable evidence-scope ambiguity without weakening the established homepage positioning.

### B. Practice language is now visitor-facing

Several phrases were useful during architecture work but unnecessarily internal in the public interface. The release no longer asks a visitor to understand terms such as:

- `interpretation layer`
- `canonical Project territories`
- `selective canonical field`
- `canonical proof`

Practice now explains itself directly: it **reads across THE RECORD** to identify recurring ways of working while remaining bounded by the evidence.

The evidence classification model itself is retained. Only the public explanatory language was simplified.

### C. About is reconciled to the qualified Practice

The About page still carried an older proposed positioning statement built around `all four layers` and `one owner`. That language predated Practice Architecture v1 and no longer represented the strongest qualified model.

The About `How I work` section now aligns with the proven recurring Practice claims:

1. start with the situation rather than the requested deliverable;
2. keep connected decisions connected;
3. solve at the altitude the problem requires.

The replacement explicitly avoids claiming to replace every specialist. Its status is now `APPROVED` rather than `PROPOSED`.

Canonical About copy also uses Australian `program` spelling.

### D. TAFE provenance now explains the evidence correction directly

The TAFE Artefact previously referred to a `later editorial inventory`, which exposed an internal production process to visitors.

It now states the meaningful fact directly: earlier portfolio copy described Pathways as self-directed; recovered project evidence shows that description was wrong and that the experience was facilitator-led.

The historical interface remains historical. No retrospective visual modernisation was introduced.

### E. About receives secondary discoverability

`/about` was already a canonical/indexable route but was absent from both primary and footer navigation.

It is now exposed in the footer while remaining outside the locked primary navigation. This improves recruiter/diligence discoverability without changing the primary Work / Practice / Contact architecture.

## 3. Machine-readable professional identity

Structured data previously described the practice more narrowly than the visible evidence field, particularly around learning systems, Moodle and instructional design.

The Person identity now uses:

`Digital Product, Experience & Learning Designer`

`knowsAbout` now reflects evidenced breadth across:

- Digital product strategy
- Experience architecture
- Learning experience design
- Interaction design
- Learning platforms
- Learning technology
- Digital production systems
- Accessibility

The ProfessionalService node now includes production systems and implementation as well as product, experience, learning and platform work.

No structured-data claim was added solely for search breadth. Each added area is represented in the canonical evidence field and/or qualified Practice.

## 4. Publication controls

The existing release verifier continues to enforce:

- zero editorial placeholders on canonical/indexable release surfaces;
- withheld-project exclusion;
- migration-only route quarantine;
- canonical metadata and sitemap integrity;
- internal-link integrity;
- approved client-name rules;
- approved-logo rules;
- performance budgets;
- no automatic third-party resource leakage outside the explicit allow-list.

The new editorial-publication audit adds explicit regression checks for:

- selective evidence scope at Home;
- 30-year career versus 2015-onwards public evidence distinction;
- public-facing Practice language;
- removal of internal architecture/editorial-process phrases;
- About/Practice alignment;
- Australian `program` spelling in representative canonical output;
- secondary About discoverability;
- machine-readable professional identity breadth;
- canonical Project organisation-name approval against the publication register.

Client-name approval in the repository is not treated as a substitute for final external material/publication permission sign-off. That remains a human go-live gate.

## 5. Qualification

The proof was run through the true publication gate:

```text
PUBLISH=1 npm run check
```

This executed:

1. production SSG build;
2. publication verification;
3. static accessibility review;
4. Visual & Interaction Proof static regression audit;
5. Editorial & Publication Proof regression audit.

### Result: PASS

Rendered pages: **35**  
Canonical sitemap URLs: **21**  
Canonical/indexable editorial placeholders: **0**  
Migration-only routes quarantined: **11**  
Migration-estate placeholders retained outside canonical release: **58**

### Editorial-publication assertions

**33 / 33 passed.**

The gate confirms, among other things:

- Home explicitly identifies THE RECORD as selective;
- Practice explicitly separates the thirty-year career line from the public evidence window;
- internal architecture phrases are absent from representative canonical output;
- TAFE no longer exposes internal editorial-process language;
- About uses the qualified Practice model;
- About is available through the secondary footer IA;
- structured data carries the broader evidenced professional identity;
- all four canonical Project organisation names resolve to the current approved-name register.

## 6. Accessibility and visual regressions

The existing static accessibility audit remains green, including:

- heading order;
- image alt/intrinsic dimensions/loading strategy;
- accessible interactive names;
- contrast pairs;
- focus rules;
- reduced-motion support;
- 44px minimum targets;
- reserved image boxes.

The Visual Proof regression audit also remains green:

- no-JS mobile menu behaviour;
- progressive-enhancement disclosure behaviour;
- browser-history focus/scroll restoration source contract;
- v3.1 evidence-first opening typography ceiling.

The audit correctly continues to report that literal external-browser QA is outstanding. Static/source qualification is not misrepresented as a substitute for that final browser pass.

## 7. Performance

Budgets remain unchanged.

- Initial JS: **96 KB gzipped** / 120 KB budget
- Largest JS chunk: **96 KB** / 100 KB budget
- Total route JS: **183 KB gzipped**
- CSS: **16 KB gzipped** / 30 KB budget
- Fonts: **107 KB** across four files
- Largest image: **173 KB** / 180 KB budget

The editorial changes introduced no material performance regression.

## 8. Known non-blocking repository debt

The repository still contains an older generic status model in which both `APPROVED` and `PROPOSED` are technically publishable in the prototype. Its comments are stricter than its implementation.

This proof does not broaden that legacy model or use it as the canonical editorial gate. The canonical Minimum Amazing product is instead protected by route-level publication verification plus the new editorial-publication regression audit.

A future repository-governance cleanup may rationalise the legacy status semantics, but it is not necessary to redesign or delay the qualified canonical product.

## 9. Remaining release gates

### A. External browser closure — HOLD

Still required because the execution runtime cannot reach the protected Vercel preview through a real browser:

- desktop review around 1440px;
- intermediate review around 1024px and 768px;
- mobile review around 390px;
- 200% browser zoom / enlarged-text stress;
- keyboard traversal and visible-focus review;
- reduced-motion review;
- representative Practice → Record → Artefact movement;
- browser Back / Forward restoration.

### B. Final external publication-permission sign-off — HOLD

Repository name/logo guardrails and evidence treatment have passed, but the final human decision that every employer/client artefact intended for public release is cleared remains separate from code qualification.

### C. Production/domain release — HOLD

No production promotion, DNS change, custom-domain attachment or `main` deployment-guard change is authorised by this proof.

## 10. Recommendation

### Minimum Amazing Editorial & Publication Proof 01: **PASS**

No further editorial content should be manufactured merely to make THE RECORD look fuller.

The next useful work is release closure, not another content or architecture phase:

1. complete the external-browser review in an environment that can genuinely reach the preview;
2. complete final publication-permission sign-off;
3. reconcile this qualified proof branch into the intended release branch without changing `main` or production implicitly;
4. make an explicit go-live/domain decision only after those holds are closed.
