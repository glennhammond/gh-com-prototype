# Search, Authority & Discoverability 03 — Production Integration 01

**Date:** 24 August 2026  
**Branch:** `feat/record-production-integration-01`  
**Public cutover:** NOT AUTHORISED  
**Main merge:** NOT PERFORMED

## Purpose

Translate Search 02 from strategy into enforceable product behaviour without allowing search requirements to distort THE RECORD.

The governing model remains:

**Project → Record → Artefact**

Search inclusion is now an explicit editorial/product decision rather than a side effect of route existence.

---

# 1. Production changes completed

## 1.1 Explicit evidence indexability

Created `src/content/search-policy.js`.

Every canonical Project, Record and Artefact now has an explicit search policy containing:

- index / noindex decision
- sitemap inclusion decision
- canonical route
- direct-entry class
- reason for the decision

The policy validates exact coverage and refuses implicit defaults.

Current canonical evidence field:

- 4 Projects — index
- 6 Records — index
- 6 Artefacts — 5 index, 1 noindex

The R U OK? Day production qualification map remains live and inspectable but is deliberately `noindex, follow` and excluded from the sitemap because it is currently more useful as supporting implementation evidence than as an independent search result.

## 1.2 Metadata enforcement

`Seo.jsx` now consumes the search policy.

Consequences:

- intentional canonical evidence indexes normally;
- the noindex Artefact emits `noindex, follow`;
- migration-only `/work/*` routes outside the canonical evidence policy are quarantined;
- legacy specialist `/services/*` routes remain addressable for migration review but are quarantined from indexation.

This establishes the product rule:

> Route existence is not search inclusion.

## 1.3 Sitemap generated from policy

`postbuild.mjs` no longer assumes every Project / Record / Artefact belongs in search.

Current sitemap contains 20 intentional canonical URLs:

- Home
- Work
- Practice
- About
- Contact
- 4 Projects
- 6 Records
- 5 Artefacts

No synthetic `lastmod` value is emitted because the product does not currently have a trustworthy modification-date source.

## 1.4 Redirect architecture tightened

Removed weak/broad redirects:

- `/services/xapi-analytics → /practice`
- `/design-system/:slug* → /practice`

Current exact one-hop redirects are deliberately small:

- `/services → /practice`
- `/portfolio → /work`
- `/profile → /about`
- `/portfolio/migration-to-moodle → /work/connect-and-learn/concurrent-migration`
- `/work/casa-flight-examiner-rating → /work/casa/flight-examiner-rating`

No wildcard migration redirect is permitted by the new qualification gate.

## 1.5 Structured-data evidence correction

Removed the LearnX award assertion from the sitewide Person schema.

The award/project relationship remains an evidence gap and therefore does not currently meet the threshold for machine-readable assertion.

This does not deny that recognition occurred. It keeps structured data at the stricter standard required for externally asserted facts.

---

# 2. Qualification machinery

## Search architecture audit

Created `scripts/search-audit.mjs`.

It fails the build for:

- search-policy coverage drift
- sitemap drift
- indexable routes without static rendering
- duplicate/missing titles
- insufficient descriptions
- incorrect H1 count
- incorrect canonical
- incorrect `og:url`
- noindex/index contradictions
- noindex Artefacts accidentally entering sitemap
- migration-only routes becoming indexable
- redirect chains
- wildcard migration redirects
- canonical internal links pointing at redirect sources
- materially empty pre-rendered output

Latest qualified result:

**PASS — 20 indexable canonicals · 1 noindex Artefact · 5 exact permanent redirects**

## Existing publication verifier reconciled

The pre-existing verification gate previously encoded the assumption:

> if a page route exists, it should be indexable.

That assumption conflicted with Search 02.

The verifier now consumes the explicit search contract while retaining its original controls for:

- factual/editorial placeholders
- client approvals
- withheld work
- no-JavaScript resilience
- metadata
- internal links
- performance budgets
- third-party resource rules
- sitemap integrity

Latest qualified result:

**PASS**

Performance remained inside existing budgets at qualification:

- initial JS approximately 100 KB gzipped / 120 KB budget
- CSS approximately 16 KB gzipped / 30 KB budget
- largest image approximately 173 KB / 180 KB budget

---

# 3. Vercel topology verified

## New project

`gh-com-prototype`

- receives branch previews
- public domain is not attached
- preview estate is protected from indexing by Vercel preview behaviour
- remains explicitly non-live

## Existing public project

`gh-com-react`

Still owns:

- `glennhammond.com`
- `www.glennhammond.com`

This is desirable.

The redesign is therefore not capable of replacing the current public site merely because the new branch builds successfully.

Domain movement remains a separate migration/cutover action.

---

# 4. Current public estate frozen before cutover

The current production sitemap was captured from `gh-com-react` on 24 August 2026.

It contains **27 live sitemap URLs**.

The set includes:

- Home / About / Contact / Services / Work
- a current Blog index
- nine current blog/knowledge URLs
- the current flat CASA work URL
- the Corporate Yoga Australia website work URL
- nine eLearning Design System child URLs

This matters because the new intentional sitemap contains only 20 URLs and is not intended to be a one-for-one copy of the old product.

A new live-estate contract now records every one of the 27 current sitemap URLs in `src/content/migration-policy.js`.

Current status after initial source recovery:

- 6 URLs are already cutover-ready
- 21 require rebuild, consolidation, review or deliberate retirement

No unresolved URL is silently treated as disposable.

---

# 5. Inherited redirect graph discovered

The current production repository contains a substantial redirect graph from historical WordPress URLs and `?p=` IDs into the current React estate.

Examples include old Storyline, xAPI, AI and portfolio permalinks.

This redirect graph lives with the old deployment configuration.

Therefore:

> Moving `glennhammond.com` to the new Vercel project without explicitly reconciling these redirects could destroy authority even if the visible current sitemap were migrated perfectly.

The old broad `/portfolio/:path*` behaviour will **not** be copied blindly.

The migration strategy is to flatten valuable inherited redirects directly to their final semantic successor, source by source, and deliberately retire the rest.

---

# 6. Migration cutover gate

Created `scripts/migration-audit.mjs` and added it to every build.

Ordinary review builds:

- pass while unresolved migration work exists;
- surface unresolved URLs/dependencies as warnings.

`PUBLISH=1` builds:

- fail while currently live URLs lack a launch-ready disposition;
- fail while cutover dependencies remain open.

Current cutover dependencies:

1. inherited redirect graph reconciled
2. Google Search Console baseline captured
3. Bing Webmaster baseline captured
4. analytics baseline captured
5. historical citation recovery complete

This is the intended safety model:

> autonomous production work may continue; public replacement may not occur until authority migration is qualified.

---

# 7. Historical knowledge recovery — first pass

Source recovery from the current production repo has already changed several dispositions.

## Master Slides in Storyline

**REBUILD / PRESERVE URL candidate**

The current article contains meaningful first-hand Storyline experience and production-system thinking. It should not be treated as generic SEO filler.

It needs a technical/editorial refresh before cutover, but the existing URL should be favoured unless first-party search evidence argues otherwise.

## UX for Learning

**REBUILD candidate**

The subject is highly aligned with the future practice, but the current article is generic and makes several broad claims without first-hand evidence.

If retained, it should be rebuilt around evidence from genuine Projects/Records rather than copied verbatim.

## Building the eLearning Design System

**CONSOLIDATE**

The current post is draft-like and includes claims about xAPI/data architecture that do not meet the current evidence threshold.

Its useful thinking belongs with the actual ISQ/CASA production-system evidence rather than surviving as a parallel generic authority claim.

## xAPI Basics + xAPI Isn't Scary

**REBUILD + CONSOLIDATE**

The two pages overlap substantially.

The surviving future xAPI knowledge surface should be rebuilt only after current Experience Intelligence evidence can support:

- statement design
- identity/privacy
- governance
- delivery
- validation
- LRS behaviour
- what measurement can and cannot prove

The future article should be less promotional and more exact than either current page.

---

# 8. eLearning Design System historical mini-site

The live estate currently contains nine indexed/discoverable child URLs under:

`/work/elearning-design-system/*`

Source recovery shows that they form one coherent system covering:

- overview
- atomic/system architecture
- asset governance
- colour foundations
- Core / More / Bore
- course structure
- imagery/iconography
- Storyline implementation
- typography

The correct response is **not** to preserve nine thin search pages indefinitely and **not** to redirect all nine to Practice.

Current architectural recommendation:

### Future canonical cluster

**Project**

`/work/isq-elearning-design-system`

A properly evidenced account of the organisational system and why it exists.

**Record(s)**

A small number of consequential decisions such as:

- moving from course-level solutions to a governed system
- separating learning pattern from implementation
- treating production code as evidence / auditing documentation against what ships

**Artefact(s)**

One or two substantial inspectable surfaces, for example:

- system anatomy: foundations → patterns → components → platform implementation → governance
- component lifecycle / implementation evidence

### Historical URL treatment

- `overview` → likely Project
- `atomic-design` → consolidate into system architecture evidence
- `asset-register` → consolidate into governance evidence
- `colours` → consolidate into foundations evidence
- `course-structure` → consolidate into learning-pattern evidence
- `images-icons` → consolidate into foundations/media evidence
- `storyline` → consolidate into implementation evidence after unverified xAPI claims are removed
- `typography` → consolidate into foundations evidence, with special care because earlier migration evidence recorded it as indexed
- `core-more-bore` → separate rebuild/reassessment because it is a distinct learning-design pattern and may deserve a retained knowledge surface

Exact redirects stay blocked until those targets exist and Search Console/referral evidence is available.

---

# 9. Production integration gate

## SEARCH POLICY IMPLEMENTATION

**PASS**

Indexability is now explicit, validated and consumed by metadata/sitemap generation.

## STATIC DISCOVERY QUALIFICATION

**PASS**

Intentional canonical surfaces are statically rendered and pass the new search audit.

## REDIRECT ARCHITECTURE

**PASS WITH CONDITIONS**

The new redirect layer is deliberately clean, but the inherited production redirect graph is not yet reconciled.

## PUBLIC CUTOVER

**FAIL — BY DESIGN**

The product is not authorised for domain cutover while 21 current sitemap URLs and five migration dependencies remain unresolved.

This is not a product-quality failure. It is the migration guard working correctly.

---

# 10. Next autonomous production sequence

1. Continue recovering and classifying current knowledge URLs from `gh.com-react`.
2. Recover the full historical design-system source and define the smallest strong canonical successor cluster.
3. Recover authority-bearing URLs outside the current sitemap, especially externally cited resources.
4. Flatten the inherited WordPress redirect graph into an explicit old → final successor ledger.
5. Implement high-confidence historical redirects only when the destination is indexable and semantically strong.
6. Build/recover retained standalone knowledge surfaces only where they add genuine value beyond THE RECORD.
7. Capture Search Console, Bing and analytics baselines when first-party access/export is available.
8. Run `PUBLISH=1` only after the migration contract is fully qualified.

Until then:

**Do not attach `glennhammond.com` to the new Vercel project.**
