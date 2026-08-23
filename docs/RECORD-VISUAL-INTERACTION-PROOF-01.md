# THE RECORD — Visual & Interaction Proof 01

**Date:** 24 August 2026  
**Status:** CONDITIONAL PASS  
**Branch:** `proof/record-visual-interaction-01`  
**Baseline:** `12984d6cadde5442c9d5be7c82df2ede1faf0a18`

## 1. Executive judgement

THE RECORD has a coherent, restrained and evidence-led implementation. Source review, rendered-output qualification and the true publication gate exposed no structural failure in the Project → Record → Artefact model, Practice interpretation layer, direct-entry architecture or Minimum Amazing publication boundary.

Three material experiential issues were identified and corrected:

1. the no-JavaScript mobile Meta-Frame hid the real navigation and exposed an inert Menu control;
2. browser-history restoration retained scroll position but did not restore a meaningful focus target;
3. several Work / Project / Record / Artefact / Practice openings had drifted above the v3.1 evidence-first display scale, allowing typography to overpower evidence.

The result is a **CONDITIONAL PASS**, not an unconditional PASS, because this execution environment cannot reach the protected Vercel preview from Chromium/Playwright. Literal viewport composition, real keyboard traversal, 200% zoom and browser Back/Forward behaviour therefore remain an external-browser gate. That limitation is not treated as a product failure and is not disguised as a completed test.

## 2. Qualification coverage

### Genuinely executed

- repository/source inspection against the qualified release baseline;
- current Vercel preview builds;
- all 35 prerendered pages through the Vercel build;
- canonical publishing verification;
- static accessibility audit;
- proof-specific source regression audit;
- performance budget verification;
- route and component review across Home, Work, four canonical Projects, all six Records, all six Artefacts, Practice, Meta-Frame and Contact;
- direct-entry state logic review;
- Artefact Return/View Record state logic review;
- Back/Forward scroll and focus restoration source qualification;
- no-JavaScript navigation fallback qualification.

### Browser environment attempted but blocked

- Chromium `144.0.7559.96` on Debian GNU/Linux 13;
- Playwright `1.57.0`;
- Node `22.16.0`;
- npm `10.9.2`.

The runtime could not resolve/reach the Vercel preview; DNS resolution timed out. The connected Vercel fetch could inspect rendered HTML, but it is not a visual browser and protected deeper routes were redirected through Vercel SSO.

### Therefore not genuinely browser-tested here

- 1440px desktop;
- 1024px intermediate;
- 768px tablet/narrow;
- 390px mobile;
- 200% browser zoom;
- enlarged-text behaviour;
- real keyboard traversal;
- real Back/Forward focus and scroll restoration;
- visual motion timing.

These must be run externally before this phase becomes an unconditional PASS.

## 3. Experience findings

### Home

The Home implementation functions as an entry surface rather than a compressed sitemap. The proposition, THE RECORD evidence field, Practice bridge and selected evidence are distinct layers. It does not require a conventional services list to establish the breadth of the practice. Home already used the restrained v3.1 display ceiling and became the useful reference for correcting deeper-page heading drift.

### Work

Work reads as a curated evidence field rather than a database. Unequal evidence density is represented intentionally: Wellbeing Studio carries three Records; Connect & Learn, CASA and TAFE carry one each without padding. Project and Record hierarchy remains distinct. The lead typography had become materially over-scaled and was brought back to the system display ceiling.

### Project

All four canonical Project routes add useful territory before narrowing into a Record. The single-Record Projects still earn their existence:

- Connect & Learn explains the concurrent platform/course migration territory;
- CASA places the Flight Examiner Rating work within the broader regulated learning context;
- TAFE establishes the facilitator-led school-session context;
- Wellbeing Studio legitimately contains a denser contemporary evidence field.

No Project wrapper was found to be ceremonial enough to remove.

### Record

All six Records were reviewed. The recurring grammar is consistent without becoming interchangeable: Project orientation, centre, what happened, why examine this, evidence preview, tension, move, principle/correction and evidence boundary. Evidence appears early enough to prevent the pages becoming essays about evidence. Record openings were reduced below the Project display ceiling to strengthen narrowing.

### Artefact

All six Artefacts were reviewed. Historical material remains historical rather than cosmetically modernised. Contemporary system/decision evidence uses semantic reconstruction and explicitly states its evidence limits. Direct entry uses `View Record`; internal inspection uses `Return to Record`. Artefact headings were reduced again below Record scale so the inspected evidence remains visually primary.

### Practice

Practice correctly interprets THE RECORD instead of becoming a second portfolio or service catalogue. The three proven recurring claims remain evidence-backed; `Frame. Shape. Make. Evidence.` remains a current overlapping operating description rather than a retrospective method; Storyline remains specialist depth. The evidence classifications are useful, but some terminology should receive a final human-tone pass in Editorial & Publication Proof.

### Meta-Frame

The Meta-Frame scope is path-derived, so direct-entry orientation does not depend on prior navigation state. It remains intentionally light rather than becoming breadcrumb chrome. The no-JavaScript small-screen behaviour contained a genuine progressive-enhancement defect and has been corrected.

### Contact

The direct-contact version is materially stronger than a simulated form. Email and LinkedIn are genuine channels, and the page clearly states that the website does not submit or store an enquiry. No additional conversion UI was warranted in this phase.

### Direct entry

Project, Record and Artefact routes all include enough local orientation to make sense without a previous page. The Meta-Frame derives scope from the pathname. Artefacts distinguish direct entry (`View Record`) from internal inspection (`Return to Record`). Practice and Contact are self-orienting.

### Back / Forward

Scroll restoration was already intentionally manual and non-theatrical. A gap remained: POP navigation restored scroll but could leave focus without a useful target. The proof now remembers meaningful focused/activated controls per history entry and restores focus with `preventScroll` alongside saved scroll position.

### Keyboard

Static focus styling, target sizing, skip-link and accessible-name checks pass. Artefact invitation links carry stable IDs for return focus. Real keyboard traversal remains blocked by the browser-network limitation and is therefore an external gate.

### Responsive / zoom

Source-level CSS uses fluid display tokens, minmax grids, intrinsic image dimensions, responsive picture sources and dedicated narrow-layout rules. The display-scale correction reduces risk from giant headings at intermediate and mobile widths. Literal 1440/1024/768/390 composition and 200% zoom remain blocked and must not be inferred as browser-tested.

### Motion

No new decorative motion was added. Existing navigation/restoration deliberately uses `behavior: auto`; reduced-motion CSS remains present. No source evidence justified adding animation. Visual motion timing remains an external-browser check.

### Typography

The principal material refinement was to restore the v3.1 evidence-first ceiling. Home was already within the system. Work, Project, Record, Artefact and Practice had drifted to roughly 90–109px maxima in places. The revised hierarchy uses a restrained Project/Work/Practice ceiling and progressively narrows Record and Artefact openings.

### Overall system feel

The implementation reads as one professional evidence system rather than a collection of successful pages. The strongest quality is not component novelty but consistent widening/narrowing, evidence boundaries, unequal density and restrained interface chrome. No redesign was warranted.

## 4. Defects found and corrected

### D01 — No-JavaScript mobile navigation failure

**Severity:** High accessibility/progressive-enhancement defect  
**Affected:** Meta-Frame on all narrow canonical routes  
**Cause:** CSS exposed the Menu disclosure by default and hid navigation, despite `index.html` only adding `.js` when JavaScript is available.  
**Fix:** Base small-screen state now hides the inert disclosure and shows navigation; `.js` progressively enables the disclosure/collapsed menu. Desktop behaviour remains unchanged.  
**Qualification:** Proof-specific static audit PASS; production SSG and accessibility audit PASS. Literal no-JS browser rendering remains external-browser confirmation.

### D02 — POP history restored scroll but not focus

**Severity:** Medium interaction/accessibility defect  
**Affected:** Browser Back/Forward across canonical routes, especially Record → Artefact → Back  
**Cause:** `Layout` stored scroll per history key but returned immediately after POP scroll restoration without restoring a meaningful focus target.  
**Fix:** Meaningful interactive focus targets are stored per history entry and restored with `preventScroll` alongside scroll restoration. Existing explicit Artefact return-focus handling remains intact.  
**Qualification:** Proof-specific source audit PASS; code builds/SSGs correctly. Literal Back/Forward browser execution remains external-browser confirmation.

## 5. Material refinements made

### R01 — Restore evidence-first display hierarchy

Work, Project, Record, Artefact and Practice openings were brought back under the v3.1 display ceiling. Project/Work/Practice remain largest; Record narrows; Artefact narrows further. This is a visual-system correction, not an information-architecture change.

### R02 — Add proof regression coverage

`scripts/visual-proof-audit.mjs` now checks:

- no-JS mobile navigation fallback;
- JavaScript disclosure enhancement;
- history focus restoration logic;
- evidence-first display ceiling on principal openings.

It is included in `npm run audit` and therefore runs under `npm run check` / the explicit publication gate.

## 6. Deliberately not changed

The following attractive alternatives were rejected as unnecessary churn:

- no card-grid redesign of Work;
- no removal of single-Record Project routes;
- no new Projects or additional Records;
- no Practice-as-services or capability filtering;
- no new visual identity direction or typeface exploration;
- no decorative page-transition system;
- no extra motion added to make the site feel “premium”;
- no standardisation of historical Artefacts into a contemporary visual style;
- no forced equal evidence density between Projects;
- no expansion of the 58 migration-only placeholders;
- no change to the Project → Record → Artefact model;
- no production deployment, DNS, domain attachment or main deployment-guard change.

## 7. Editorial questions carried forward

The next editorial phase should decide, without reopening architecture:

1. whether terms such as “canonical”, “interpretation layer”, “evidence boundary” and evidence-classification language are sufficiently human for first-time visitors in every occurrence;
2. whether the distinction between thirty years of practice and a selective public Record reaching back to 2015 is expressed consistently across Home, About and Practice;
3. whether internal provenance language in the TAFE Artefact (“older portfolio description”, “later editorial inventory”) should remain public-facing or be simplified while retaining the correction;
4. whether commit identifiers in the RUOK qualification Artefact are the right public level of provenance or should become more inspectable/legible evidence references;
5. whether repeated “THE RECORD” explanatory copy can be reduced once the final cross-site editorial read is performed.

## 8. Accessibility qualification

### Passed through rendered/static qualification

- one `h1` per rendered page;
- heading-order audit;
- descriptive image alt checks;
- responsive image / intrinsic-dimension checks;
- accessible link/button names;
- visible focus CSS;
- reduced-motion CSS;
- 44px minimum interactive target rules;
- colour contrast token pairs;
- reserved image boxes;
- canonical internal-link/publishing integrity;
- no-JS navigation proof-specific assertions;
- source-level history focus restoration assertion.

### Still requires literal external-browser execution

- full keyboard traversal and focus order;
- visible focus under actual Meta-Frame states;
- Back/Forward focus/scroll restoration;
- 200% zoom;
- enlarged text;
- 1440 / 1024 / 768 / 390 responsive composition;
- reduced-motion behaviour in a real browser.

## 9. Performance regression

The budget was not relaxed.

| Measure | Release baseline | Visual proof | Budget / result |
| --- | ---: | ---: | --- |
| Initial JS | 95 KB gzipped | 96 KB gzipped | 120 KB — PASS |
| Largest JS chunk | 95 KB gzipped | 96 KB gzipped | 100 KB — PASS |
| Total route JS | 183 KB gzipped | 183 KB gzipped | reported debt — unchanged |
| CSS | 16 KB gzipped | 16 KB gzipped | 30 KB — PASS |
| Largest image | 173 KB | 173 KB | 180 KB — PASS |

The small JS increase is attributable to route-independent focus-history behaviour and is accepted as functional accessibility/interaction cost, not decorative payload.

## 10. Publication qualification

The branch was explicitly deployed through:

`PUBLISH=1 npm run check`

Result: **PASS**.

The gate confirmed:

- 35 rendered pages;
- 21 canonical sitemap URLs;
- zero editorial placeholders on canonical/indexable release surfaces;
- 11 migration-only routes still explicitly quarantined;
- publishing verification PASS;
- static accessibility audit PASS;
- visual-proof static audit PASS (6/6);
- performance budgets PASS.

The normal Vercel preview build command was restored after qualification. The public-domain safety boundary remains unchanged.

## 11. Recommendation

### Visual & Interaction Proof 01: CONDITIONAL PASS

The implementation is strong enough to proceed to the next proof without further architectural or visual redesign.

Before public cutover, run one short external-browser closure pass at approximately 1440px, 1024px, 768px and 390px, plus 200% zoom, keyboard traversal, reduced motion and the two representative history journeys:

- Home → Work → Project → Record → Artefact → Back → Back → Forward;
- Practice → Record → Artefact → Back.

If that pass exposes no new material defect, promote this phase from CONDITIONAL PASS to PASS and proceed with:

# THE RECORD — Minimum Amazing Editorial & Publication Proof

Do not go live from this phase.
