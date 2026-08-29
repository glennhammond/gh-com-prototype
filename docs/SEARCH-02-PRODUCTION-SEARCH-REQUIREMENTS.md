# Production Search Requirements v1

**Date:** 24 August 2026  
**Workstream:** Search, Authority & Discoverability 02  
**Purpose:** implementation-ready requirements for the glennhammond.com production workstream

These requirements strengthen THE RECORD. They do not replace Project → Record → Artefact with keyword pages.

# BUILD NOW

## 1. Make indexability explicit in the evidence model

Add validated search/indexability metadata to Projects, Records and Artefacts.

Minimum behaviour:

- `index` is explicit.
- `sitemap` is explicit or derived only from `index`.
- canonical path is explicit/validated.
- Artefacts default to non-indexed until approved under the Indexability Contract.
- validation rejects contradictory states such as `noindex` + sitemap inclusion.

**Reason:** `scripts/postbuild.mjs` currently places every Project, Record and Artefact in the sitemap. That is structurally too permissive.

## 2. Drive sitemap generation from the indexability contract

Change `scripts/postbuild.mjs` so the sitemap represents intentionally indexable canonical surfaces, not every route.

Acceptance:

- no redirect source in sitemap;
- no `noindex` URL in sitemap;
- no migration-only legacy route in sitemap;
- every sitemap URL resolves directly to 200;
- every sitemap URL self-canonicalises;
- only approved Artefacts appear.

## 3. Add search contract checks to the qualification harness

Extend audit/verification so release fails on:

- missing/duplicate titles or H1s;
- indexable route lacking canonical;
- canonical pointing to redirect/non-200;
- noindex URL present in sitemap;
- route advertised in sitemap but not statically rendered;
- indexable page whose built HTML lacks primary page text;
- redirect chain;
- internal link to a known redirect when final canonical is known;
- staging canonical/hostname leakage;
- structured-data URL not matching canonical.

## 4. Replace provisional blanket redirect logic with ledger-driven redirects

Current Vercel rules include broad redirects to `/practice`.

Required:

- remove `/design-system/:slug* → /practice` as an unconditional blanket rule;
- enumerate historical design-system sources from the migration ledger/GSC/log evidence;
- retain `/services → /practice` where semantic match is strong;
- make `/services/xapi-analytics → /practice` conditional on Practice containing a real evidence-backed equivalent;
- add known strong direct mappings such as historical Moodle migration → Connect & Learn concurrent-migration Record;
- enforce one-hop redirects.

## 5. Preserve static/prerendered primary content

The current production direction uses `vite-react-ssg`; retain that property.

Acceptance for every indexable route:

- meaningful page title, description, H1 and primary copy exist in built HTML;
- main internal links are present as crawlable anchors;
- page does not depend on client JS to reveal its identity or core evidence;
- hydration enhances rather than creates the search-visible document.

This is not because Google cannot execute JavaScript. Google can; the requirement improves reliability across crawlers, direct links and non-Google agents as well as user performance.

## 6. Strengthen direct-entry framing

### Project pages

Visible first-screen/early context should include where appropriate:

- organisation;
- period/state;
- Glenn's role;
- concise body-of-work proposition;
- disciplines/capability context;
- route to Records;
- route to relevant Practice interpretation.

### Record pages

Direct entry must expose:

- Project + organisation context;
- the professional problem/decision;
- what happened;
- Glenn's role;
- why it is worth examining;
- evidence boundary;
- parent/related evidence links.

### Artefact pages

If indexable, include:

- provenance;
- parent Record/Project;
- what the artefact shows;
- what it supports/does not support;
- meaningful caption/transcript/alt treatment;
- related navigation.

## 7. Use descriptive metadata based on the evidence, not keywords

For every indexable page:

- unique title;
- useful meta description;
- one clear H1;
- canonical;
- Open Graph/Twitter metadata as appropriate;
- organisation/project context visible in body copy.

Title pattern should favour actual subject + project + Glenn where useful. Avoid repeating the same sitewide service phrase.

## 8. Make the evidence graph explicit in internal links

Required relationship types:

- Work → Project;
- Project → Records;
- Record → Artefacts;
- child → parent;
- related Record → related Record when conceptually meaningful;
- Practice claim → supporting Record(s);
- Project/Record → Practice where interpretation helps;
- retained knowledge → relevant evidence, only when genuinely related.

Link text should describe the destination meaning rather than generic “read more”.

## 9. Keep structured data factual and aligned with visible content

Current Person/Practice schema provides a useful foundation.

Before hardening:

- keep one stable Person `@id`;
- ensure all CreativeWork/evidence nodes reference the same Person;
- use organisation relationships only where publication/attribution is verified;
- verify the LearnX award before release of the current `award` claim;
- review `knowsAbout` against the final evidence-backed Practice claims;
- ensure schema does not contain claims materially richer than visible content;
- structured data must use canonical URLs.

Do not add schema types because they sound SEO-friendly. Use only types that truthfully describe the surface.

## 10. Preserve media as evidence

For meaningful media:

- descriptive alt text based on visual function;
- captions that explain evidence/provenance when useful;
- video transcript or substantial text equivalent when speech/content is professionally important;
- stable media URLs where historically linked;
- width/height/responsive loading to protect performance;
- Open Graph image should be specific when a strong project image exists, otherwise use site fallback.

Do not keyword-stuff filenames or alt text.

# BEFORE LAUNCH

## 11. Complete the migration evidence freeze

Capture/export before public cutover:

### Google Search Console

- total clicks;
- total impressions;
- CTR;
- average position;
- top queries;
- branded vs non-branded query grouping;
- top landing pages;
- pages/queries involving historical URLs;
- countries;
- devices;
- search appearance;
- indexing/page-status exports;
- sitemap state;
- Core Web Vitals;
- Links report/top linked pages where available.

Store raw exports with the migration documentation and record export date/range.

### Bing Webmaster Tools

- search performance;
- indexed URLs;
- crawl/index issues;
- backlink data if available;
- **AI Performance** export: citations, cited pages, grounding queries/intents/topics and available trend/share data.

Interpret Bing AI metrics as citation/grounding visibility, not ranking authority.

### Analytics

- organic entrances/sessions by landing page;
- referral landing pages;
- contact/conversion movements;
- historical pages still receiving visits;
- device/country context where materially useful.

### Authority

- first-party Search Console links export;
- Semrush/backlink export if API units become available;
- confirmed manual citations/backlinks from this phase.

## 12. Freeze the exact old→new redirect manifest

Before cutover:

- complete source URL inventory from previous sitemap, old WordPress estate, GSC, analytics, backlinks and known external references;
- assign exactly one disposition per meaningful source;
- unresolved sources remain preserved/quarantined rather than guessed;
- test every redirect source and destination.

## 13. Preserve externally referenced high-value historical resources

Minimum launch requirements:

- `/principles-of-assessment-and-rules-of-evidence/` must not disappear. Preferred approach: substantive rebuild at the same URL against current standards.
- Goodstart historical project URL must remain functional until a credible Project successor exists; then redirect directly.
- indexed design-system routes remain preserved/quarantined until evidence-backed mapping is complete.

## 14. Search property and measurement continuity

Confirm before cutover:

- Search Console domain/property verification survives deployment;
- Bing Webmaster verification survives;
- analytics property/tag remains stable through launch unless an intentional documented migration is unavoidable;
- production sitemap URL works;
- production robots is correct;
- preview/staging deployments are non-indexable;
- no production `noindex` inherited from staging.

## 15. Launch redirect/canonical crawl

Run a full automated crawl over:

- every ledger source;
- every canonical URL;
- all sitemap URLs;
- www/non-www and HTTP/HTTPS variants where applicable;
- case/trailing-slash variants important to the historic estate.

Produce a machine-readable result and fail launch on broken strong mappings.

## 16. Reassess `/about`

Do **not** remove `/about` merely because the emerging global IA favours Home / Work / Practice / Contact. The earlier migration manifest records search visibility for About. Export current first-party data first. Retain at launch unless a strong reason to consolidate is demonstrated.

# POST-LAUNCH

## 17. Monitor migration at launch, 7, 30 and 90 days

Track:

- indexed old vs new URLs;
- redirect/404 errors;
- canonical selection;
- clicks/impressions by landing page;
- branded/non-branded query changes;
- organic entry to Project/Record/Artefact types;
- contact/referral movement;
- backlink continuity;
- Bing AI citations/grounding queries;
- Core Web Vitals;
- staging/index anomalies.

Do not judge migration health from ranking movement alone during early recrawl/reindexing.

## 18. Use real query evidence to refine titles/copy

At 30/90 days, inspect which Records attract meaningful queries and direct entrants. Refine language when it improves visitor comprehension and accurately reflects the work.

Do not turn queries into a content calendar automatically.

## 19. Promote/demote Artefacts based on evidence

Artefact indexation is reversible editorial policy.

- promote a noindexed Artefact when it proves independent direct-entry value;
- demote an indexed Artefact if it behaves as a thin duplicate and adds no independent value.

Keep redirects/canonicals stable when possible while making these decisions.

## 20. Expand the authority field selectively

Recommended next evidence additions:

1. ISQ/CASA design-system/production-system evidence;
2. WS Experience Intelligence / xAPI first-hand evidence;
3. Goodstart historical Project recovery;
4. other historical projects only where evidence quality and professional relevance are strong.

# EXPERIMENT

## `llms.txt`

Google's June 2026 guidance says `llms.txt` is not needed for Google Search and does not positively or negatively affect Google visibility/rankings. Maintain one only if a specific non-Google service creates operational value. Do not make it a launch dependency.

## AI-citation optimisation

Treat as a content-quality/structure experiment:

- clear headings;
- strong provenance;
- explicit evidence boundaries;
- concise factual summaries;
- meaningful tables/diagrams with textual context;
- stable canonical URLs.

Do not create AI-only pages or hidden summaries.

## Selective editorial notes

A future note/essay is justified only where:

- a substantial idea cannot be expressed well through Project/Record/Artefact;
- Glenn has first-hand experience or a distinctive argument;
- the page adds real information rather than summarising commodity knowledge.

No publishing cadence is required.

# Measurement baseline status

Current state of this investigation:

- historical migration manifest contains some Search Console-derived observations;
- live Search Console/Bing/analytics connectors are not available in this environment;
- plugin discovery found no installable Search Console/Analytics/Bing Webmaster connector;
- Semrush is connected but backlink research is blocked by insufficient API units;
- external web research has confirmed several manual authority/citation assets.

Therefore raw baseline metrics remain an **EVIDENCE GAP** and are a formal pre-launch condition.

# Production handoff acceptance

Production can proceed with BUILD NOW architectural changes without waiting for traffic metrics because those changes encode safe search behaviour rather than keyword assumptions.

Public cutover must not proceed until the BEFORE LAUNCH evidence/redirect/property conditions are satisfied or explicitly waived with the resulting measurement risk documented.