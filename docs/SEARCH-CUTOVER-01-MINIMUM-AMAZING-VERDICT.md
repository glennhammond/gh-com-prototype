# Search Cutover 01 — Minimum Amazing verdict

**Project:** glennhammond.com / THE RECORD  
**Branch:** `feat/visual-identity-03-production-candidate-01`  
**Qualified code head:** `9e9a9c5b4f435c8243f4334dc23f272f64fa508e`  
**Pull request:** #7 → `main`  
**Merge status:** **NOT MERGED**  
**Verdict:** **PASS — search/migration cutover and canonical launch estate are qualified**

---

## 1. What this verdict means

The Minimum Amazing search cutover is ready at the production-candidate level.

The verdict applies to the **intentional canonical/public launch estate**, not to every static page retained in the repository for legacy review. The production build still contains a set of older Work and service routes so their content can be inspected and reconciled, but those routes are explicitly quarantined with `noindex` and are not part of the canonical launch/search estate.

A release-specific qualification gate now enforces that distinction instead of treating route existence as equivalent to publication status.

The qualified state is:

- **24 intentionally indexable canonical URLs**
- **Privacy published but intentionally `noindex` and absent from the sitemap**
- **0 editorial placeholders on the canonical/indexable launch estate**
- **27/27 current live-estate URLs have an explicit migration disposition**
- **28/28 inherited WordPress article identities have an explicit migration disposition**
- **3/3 inherited portfolio rules are resolved**
- **search audit PASS**
- **migration cutover audit PASS**
- **release qualification audit PASS**
- **GitHub Production quality workflow PASS**
- **Vercel preview deployment READY**

This does **not** authorise a merge to `main`. Merge remains a separate release decision.

---

## 2. Canonical launch/search estate

The generated sitemap contains these 24 intentional canonical URLs.

### Core identity and navigation

1. `/`
2. `/work`
3. `/practice`
4. `/about`
5. `/contact`

### Canonical Projects

6. `/work/wellbeing-studio`
7. `/work/connect-and-learn`
8. `/work/isq-elearning-design-system`
9. `/work/casa/flight-examiner-rating`
10. `/work/tafe-pathways`

### Canonical Records

11. `/work/wellbeing-studio/contextual-entry`
12. `/work/wellbeing-studio/connected-service`
13. `/work/wellbeing-studio/ruok-production-slice`
14. `/work/connect-and-learn/concurrent-migration`
15. `/work/casa/flight-examiner-rating/examiner-judgement`
16. `/work/tafe-pathways/supporting-conversation`

### Indexable Artefacts

17. `/work/wellbeing-studio/contextual-entry/daily-wellbeing-journey`
18. `/work/wellbeing-studio/connected-service/relationship-model`
19. `/work/connect-and-learn/concurrent-migration/dependency-map`
20. `/work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning`
21. `/work/tafe-pathways/supporting-conversation/exploration-environment`

The R U OK? qualification map remains deliberately supporting/noindex rather than being promoted into an independent search result.

### Retained knowledge

22. `/principles-of-assessment-and-rules-of-evidence`
23. `/blog/master-slides-in-storyline`
24. `/blog/how-to-set-moodles-login-page-as-the-sites-landing-page`

These are retained because they have durable historical/search value and enough current explanatory value to justify their own canonical surfaces. They do not imply the return of a conventional blog/content-marketing architecture.

---

## 3. ISQ eLearning Design System — canonical authority recovery

The ISQ eLearning Design System is now a canonical Project:

`/work/isq-elearning-design-system`

It is the intentional successor to the fragmented historical Design System URL estate.

Nine legacy child URLs under `/work/elearning-design-system/*` consolidate directly to this canonical Project rather than reproducing thin child pages.

The Project is also integrated into Practice-level evidence, so it contributes to the site's professional argument rather than existing as an isolated SEO landing page.

### Evidence treatment

The first release candidate originally contained eight image placeholders on this page. Those placeholders have been removed from the published presentation rather than filled with invented or unapproved imagery.

The canonical case study now relies on evidence that can be stated and inspected directly:

- the system architecture
- learning-pattern and component definitions
- implementation-tier decisions
- selected component reasoning
- governance and audit practices
- the operational live reference system
- the source repository / implementation history

A visible evidence note makes the boundary explicit: live-course screens are not published without explicit clearance.

This converts the page from an unfinished screenshot gallery into a defensible system case study without weakening the evidence standard.

---

## 4. Current live-estate migration

The captured live estate contains **27 sitemap URLs**. All 27 now have a launch-ready disposition; none remain in an unresolved review/rebuild/consolidate state.

Key treatments include:

- `/services` → `/practice`
- legacy CASA canonical identity → current CASA canonical Project
- nine Design System child URLs → `/work/isq-elearning-design-system`
- `/work/corporate-yoga-australia-website` → **410 Gone** rather than a misleading redirect to Wellbeing Studio
- `/blog` → **410 Gone** because the new site does not maintain a conventional blog index
- generic/draft AI, xAPI, Storyline-tip and other weak article surfaces → **410 Gone** where no equivalent canonical body of work exists
- `/blog/design-system` → **410 Gone** rather than being redirected merely because its words overlap the ISQ Design System Project

The migration rule is semantic continuity, not keyword similarity.

---

## 5. Inherited WordPress estate

The inherited WordPress capture contains **28 article identities / 56 historical source forms**.

All 28 identities now have explicit launch-ready treatment.

### Preserved identities

- historical Moodle login landing-page article → current retained Moodle knowledge URL
- historical Master Slides article → `/blog/master-slides-in-storyline`

### Retired identities

The remaining 26 inherited article identities return **410 Gone** when they no longer justify preservation or do not have a semantically equivalent canonical successor.

This includes generic/transient Storyline guidance, generic xAPI material, AI/tool-list content and peripheral historical material that would dilute the new authority system if recreated merely to preserve URL count.

---

## 6. Inherited portfolio graph

Three explicit portfolio mappings are retained:

- `/portfolio` → `/work`
- `/portfolio/elearning-design-system` → `/work/isq-elearning-design-system`
- `/portfolio/migration-to-moodle` → `/work/connect-and-learn/concurrent-migration`

There is deliberately **no broad `/portfolio/:path*` redirect**. Unknown historical portfolio URLs should fail normally rather than being dumped onto `/work` and creating false relevance.

---

## 7. HTTP retirement strategy

Retired known URLs are implemented as genuine **410 Gone** responses through the Vercel routing layer and `api/gone.js`.

Inherited WordPress query identities are handled through `api/wordpress-legacy.js`, which can distinguish:

- preserved known identities
- retired known identities
- unknown identities

This preserves the difference between a deliberately removed historical resource and a URL that never belonged to the captured estate.

The migration audit validates the route graph from source policy through Vercel configuration.

---

## 8. Search/entity improvements included in the candidate

The cutover also strengthens first-party entity clarity without turning the site into an SEO template.

Home now identifies Glenn Hammond as a Brisbane-based **Digital Learning & Experience Designer** working across eLearning, digital products, platforms and systems, with first-hand project evidence.

Person structured data includes verified areas of practice such as:

- digital learning and eLearning
- learning and instructional design
- learning experience design
- digital product strategy
- experience and information architecture
- learning platforms and Moodle
- Articulate Storyline and Rise 360
- xAPI
- accessibility

This is supporting entity information, not a substitute for the evidence architecture.

---

## 9. First-party search evidence dependencies

Launch-scale dependency status is explicit rather than hidden.

- **Google Search Console:** baseline captured and incorporated into migration decisions
- **GA4:** historical acquisition evidence captured, with known historical data-quality/configuration limitations retained as a limitation
- **Bing:** classified as non-blocking for this launch
- **historical citation/authority recovery:** sufficient for launch-scale decisions; no requirement to reconstruct every lost page

The Design System recovery decision is particularly supported by historical search evidence and is treated as a priority authority consolidation rather than generic content expansion.

---

## 10. Qualification gates

### Search audit

PASS:

- 24 indexable canonicals
- one deliberately noindex supporting Artefact
- ledger-approved permanent redirects
- canonical and sitemap policy consistent with THE RECORD

### Migration cutover audit

PASS:

- 27/27 current URLs launch-ready
- 28/28 inherited article identities launch-ready
- 3/3 inherited portfolio rules launch-ready
- launch-scale evidence dependencies reconciled

### Whole-estate editorial verifier

PASS in normal review mode, with an explicit warning that legacy review pages still contain editorial placeholders.

After removing the eight Design System image placeholders, the remaining review-estate count is:

- **51 editorial placeholders across 10 pages**
- **66 facts still listed as requiring confirmation**

Those pages are legacy/noindex review surfaces and are not part of the qualified canonical search estate.

The old blanket `PUBLISH=1` rule would still fail because it treats every statically rendered legacy page as a launch surface. That behaviour is retained as a useful whole-estate editorial stress test, but it is no longer the release definition for this cutover.

### Release qualification audit

A permanent `scripts/release-audit.mjs` now runs during every production build.

It requires:

- every URL in generated `sitemap.xml` to exist
- every sitemap URL to remain indexable
- every canonical/indexable launch surface to contain **zero** visible editorial placeholders
- Privacy to be publication-clean while retaining its intentional noindex state

It explicitly does not promote quarantined legacy review pages into launch blockers merely because they continue to exist in the static build.

**Result: PASS.**

### GitHub Actions

Production quality workflow run #177 on qualified code head `9e9a9c5b4f435c8243f4334dc23f272f64fa508e` completed successfully.

### Vercel

The same code head built successfully and reached **READY**.

Representative canonical runtime check:

- `/work/isq-elearning-design-system` → **200 OK**
- correct title, description and canonical URL
- substantive architecture/component/governance content rendered
- no Design System editorial image placeholders rendered

Vercel Preview Protection adds an `x-robots-tag: noindex` response header to the preview deployment. That is expected and desirable for review deployments; it is not the production page's own robots policy.

The protected preview authentication layer intercepts redirecting URLs before the connected fetch client can observe the raw downstream 308/410 status. For that reason, redirect/retirement status is qualified by the passing migration audit and Vercel routing configuration rather than misreported as externally observed HTTP behaviour.

A final unprotected production smoke test should still be run immediately after any future production promotion.

---

## 11. Performance and technical qualification

At the qualified build:

- initial JS: ~99 KB gzip, within 120 KB budget
- largest JS chunk: ~99 KB gzip, within 100 KB budget
- CSS: ~19 KB gzip, within 30 KB budget
- largest image: ~173 KB, within 180 KB budget
- static accessibility/contrast audit: PASS

Browser-level production smoke testing remains appropriate at promotion time even though the static qualification gates are green.

---

## 12. Separate dependency-security follow-up

`npm ci` currently reports **4 package vulnerabilities: 2 moderate and 2 high**.

They were not introduced or investigated as part of Search Cutover 01 and did not prevent the application build or current quality audits from passing.

They should not be silently ignored. Dependency/security remediation is a separate technical follow-up and should establish the affected packages and upgrade impact before production promotion. Do not use `npm audit fix --force` blindly if it introduces breaking dependency changes.

---

## 13. Remaining work that is explicitly non-blocking for Search Cutover 01

The following remain real work, but they are not grounds for reopening the search architecture:

- resolve or retire the remaining legacy/noindex review pages over time
- confirm the 66 legacy review facts if those surfaces are ever promoted
- selectively add approved Design System imagery later if it materially improves the case study
- review dependency vulnerabilities separately
- run final browser/runtime smoke checks after production promotion
- monitor Search Console after cutover for indexing, redirect discovery and authority consolidation

Do not rebuild weak historical URLs merely to make these lists shorter.

---

## 14. Rollback position

No merge to `main` has been performed by this workstream.

The production-candidate branch and PR #7 remain the controlled integration point. If a later release review identifies a material issue, the current production site can remain untouched while the candidate branch is corrected and requalified.

If the candidate is eventually promoted and a material routing/indexing defect is discovered, rollback should restore the previously known-good production deployment first, then correct the migration policy and rerun:

1. `search-audit`
2. `migration-audit`
3. `verify`
4. `release-audit`
5. production runtime smoke tests

Do not patch production search behaviour ad hoc outside the governed policy files.

---

# Final decision

## PASS — Search Cutover 01 / Minimum Amazing

The canonical glennhammond.com authority and evidence estate is coherent, migration-complete at launch scale, explicit about what is preserved and retired, and protected by repeatable qualification gates.

The remaining legacy review debt is visible and documented but no longer confused with the release definition.

**Do not merge automatically.** The next phase is production-promotion readiness and launch smoke testing, not further search-architecture invention.
