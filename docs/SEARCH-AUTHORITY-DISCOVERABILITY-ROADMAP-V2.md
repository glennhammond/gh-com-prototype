# Search, Authority & Discoverability Roadmap v2

**Date:** 24 August 2026  
**Phase completed:** Search, Authority & Discoverability 02 — Migration Intelligence & Search Evidence Map  
**Branch:** `feat/record-production-integration-01`

## Executive conclusion

THE RECORD should remain the search architecture.

The investigation did not reveal a need for a conventional SEO content machine, a separate keyword-site architecture or a mandatory blog. It revealed a more useful problem:

> glennhammond.com already has accumulated historical search/citation equity, while the new Project → Record → Artefact system creates a stronger first-hand professional evidence graph than the legacy site. The work now is to migrate authority deliberately, make indexability explicit, and strengthen the small number of evidence territories that genuinely deserve to define Glenn's public authority.

The largest avoidable risk is not “insufficient keywords”. It is destroying or flattening historical intent through weak redirects while automatically indexing every new evidence artefact.

# Phase 02 findings

## Finding 1 — Historical authority is real, not hypothetical

Confirmed examples include:

- an external Goodstart portal reference linking to the historical Goodstart project page;
- an academic/professional clinical-supervision PDF citing the historical Principles of Assessment and Rules of Evidence page;
- the existing migration manifest recording indexed historical design-system content;
- Independent Schools Queensland's annual report externally connecting Glenn Hammond to ISQ as eLearning Specialist;
- professional profile/current external references that reinforce digital-learning identity.

These are sufficient to reject a “replace everything and redirect broadly” migration strategy.

## Finding 2 — THE RECORD is a search advantage when direct entry is designed properly

Records are especially strong search units because they represent:

- a real professional problem;
- a consequential decision;
- first-hand evidence;
- provenance;
- an evidence boundary;
- links upward, downward and sideways through the work.

This provides information gain beyond generic service pages or articles.

## Finding 3 — the current redirect layer is only a release-readiness baseline

`/services → /practice` is defensible.

By contrast:

- `/services/xapi-analytics → /practice` is semantically weak until equivalent evidence is visible;
- `/design-system/:slug* → /practice` is too broad and should be replaced with explicit mappings.

## Finding 4 — current sitemap policy is too permissive

The build currently places every Project, Record and Artefact in the canonical sitemap. That conflicts with the required indexability principle.

Indexability must become explicit evidence metadata, with Artefacts opt-in rather than automatically indexable.

## Finding 5 — branded entity ambiguity exists but is manageable

“Glenn Hammond” is not unique in search. Search results include unrelated professionals and Glenn Hammond Curtiss.

The solution is a coherent entity graph:

**Glenn Hammond → Australia/Brisbane → digital learning products/experiences/platforms/systems → organisations → Projects → technologies → outcomes/evidence**

No artificial personal-brand keyword repetition is required.

## Finding 6 — the strongest whitespace is connected-system practice

The search landscape fragments capability across:

- LMS vendors;
- Moodle infrastructure/development specialists;
- learning-design agencies;
- UX/product practitioners;
- authoring-tool specialists;
- xAPI specialists.

The strongest distinctive evidence is Glenn working across boundaries that are usually separated:

**product/experience architecture + learning architecture + platform change + content/production + technical implementation.**

# Authority territories

## PRIMARY now

1. **Learning platform + content/system transformation**
2. **Digital learning product + experience architecture**

## EMERGING toward PRIMARY

3. **Scalable learning production/design systems**

## SUPPORTING

4. Learning/platform UX
5. Professional judgement and assessment design

## EMERGING

6. xAPI / experience measurement

## DO NOT PURSUE as authority pillars

- generic learning theory;
- generic “what is eLearning?” content;
- tool-tip publishing at scale;
- city/keyword landing pages;
- artificial GEO/AEO content.

# Roadmap

## Gate A — Architecture encoding

**Timing:** BUILD NOW  
**Goal:** make the search policy part of product architecture before production hardens.

### Deliver

- explicit `search.index` / sitemap/canonical metadata in evidence model;
- Artefact opt-in indexation;
- sitemap generation from indexability contract;
- search/canonical/noindex assertions in verification harness;
- direct-entry context contract for Project/Record/Artefact;
- structured-data alignment with evidence model;
- ledger-driven redirect specification.

### Exit condition

The build can distinguish “route exists” from “surface should be indexed”.

---

## Gate B — Historical authority resolution

**Timing:** BEFORE LAUNCH  
**Goal:** close high-risk migration rows.

### Highest-priority work

1. Rebuild `/principles-of-assessment-and-rules-of-evidence/` at the same URL using current authoritative Australian VET requirements while retaining the historical citation relationship.
2. Enumerate all design-system historical/indexed URLs; remove wildcard redirect behaviour.
3. Resolve the ISQ eLearning Design System canonical representation.
4. Rebuild Goodstart as a credible historical Project or preserve the old page until that can be done.
5. Verify LearnX award → exact Project relationship and certificate evidence.
6. Resolve AviationWorx/CLASS historical mappings.
7. Verify whether the historical TAFE umbrella URL is genuinely equivalent to Pathways.

### Exit condition

No high-value source URL depends on a guessed destination.

---

## Gate C — Measurement freeze

**Timing:** IMMEDIATELY BEFORE CUTOVER  
**Goal:** create an auditable pre-redesign baseline.

### Export

**Google Search Console**

- clicks, impressions, CTR, position;
- queries and landing pages;
- branded/non-branded grouping;
- indexing and sitemap state;
- countries/devices/search appearance;
- Core Web Vitals;
- links/top linked pages where available.

**Bing Webmaster Tools**

- search/index/crawl data;
- backlink data where available;
- AI Performance: citations, cited pages, grounding queries/intents/topics and available trend/share metrics.

**Analytics**

- organic entrances by landing page;
- referrals;
- meaningful contact/conversion movements;
- legacy-page usage.

**Authority**

- Search Console Links export;
- Semrush export if API units are enabled;
- manual citation list.

### Store

Record export date, date range, property/account and unmodified raw files.

### Exit condition

A future 30/90-day comparison can be made without reconstructing the old state from memory.

---

## Gate D — Migration implementation & qualification

**Timing:** BEFORE PUBLIC CUTOVER

### Deliver

- direct one-hop redirects from approved ledger;
- correct 404/410 for no-successor content;
- production canonical/noindex policy;
- new sitemap;
- production robots;
- preview/staging exclusion;
- preserved Search Console/Bing verification;
- production analytics continuity;
- media redirect/context checks;
- full status/redirect/canonical crawl.

### Key rule

Do not redirect many old URLs to Home/Practice just because the new site is smaller. Google explicitly warns against irrelevant many-to-one redirects that may be treated as soft 404s.

### Exit condition

Every meaningful old URL has a verified disposition and every new indexable URL satisfies the direct-entry contract.

---

## Gate E — Launch observation

**Timing:** Day 0–7

### Monitor

- old/new indexing movement;
- crawl/index errors;
- canonical selection;
- redirect failures;
- 404/410 volume;
- sitemap processing;
- staging leakage;
- organic landing-page continuity;
- analytics/contact instrumentation;
- branded SERP changes.

### Rule

Fix technical faults quickly; do not “SEO tweak” pages daily because rankings fluctuate while recrawling/reindexing occurs.

---

## Gate F — 30-day evidence review

### Compare

**before → 30 days**

- clicks/impressions;
- organic entrances;
- top landing pages;
- indexed canonical pages;
- Project vs Record vs Artefact direct entry;
- broken/lost backlinks;
- Bing AI citations/grounding queries;
- contact/referral movement.

### Decide

- whether titles/descriptions need clarification based on real query language;
- whether any Artefact should be promoted/demoted for indexation;
- whether historical knowledge surfaces are retaining useful discovery;
- whether high-value external links should be updated to final canonical URLs.

---

## Gate G — 90-day authority review

### Compare

**before → launch → 30 days → 90 days**

### Decide

- which authority territories are strengthening;
- whether design-system evidence is ready to become PRIMARY;
- whether xAPI evidence is ready for authority promotion;
- which Records are attracting meaningful direct-entry audiences;
- whether any selective substantial note/essay is justified by an unanswered need;
- whether retired historical content produced unexpected demand worth reconsidering.

No generic content calendar follows automatically.

---

# Evidence expansion sequence

After migration safety is secured, the highest-value additions to THE RECORD are:

1. **ISQ/CASA production-system / eLearning Design System evidence**
2. **Wellbeing Studio Experience Intelligence / xAPI evidence**
3. **Goodstart historical learning-platform Project recovery**
4. additional historical Projects only where the evidence is strong enough to improve the practice graph

This sequence strengthens existing authority territories rather than adding unrelated breadth.

# Current measurement status

## Available

- repository architecture and migration history;
- earlier migration manifest containing Search Console-derived observations;
- current live/search-result inspection;
- external citation/reference discovery;
- current SERP/competitive sampling;
- current Google/Bing platform documentation.

## EVIDENCE GAP

- live raw Search Console exports in this environment;
- live Bing Webmaster exports;
- live analytics exports;
- complete backlink/referring-domain metrics;
- Semrush data, because the connected account currently lacks sufficient API units.

No installable Search Console/Analytics/Bing Webmaster plugin was available through the current plugin catalogue.

# Decision gates

## MIGRATION INTELLIGENCE GATE — **PASS WITH CONDITIONS**

We can safely define the migration strategy and many high-confidence mappings. Destructive cutover remains conditional on first-party performance/backlink exports and resolution of a small set of historically important URLs, particularly design-system, Goodstart, LearnX and AviationWorx/CLASS mappings.

## SEARCH ARCHITECTURE GATE — **PASS**

Project → Record → Artefact is sufficiently defined for discovery and direct entry. The architecture is an advantage, not a liability. The required change is explicit indexability: Artefact existence must not imply Artefact indexation.

## MEASUREMENT BASELINE GATE — **PASS WITH CONDITIONS**

A credible measurement design is defined and earlier Search Console-derived observations exist, but raw current GSC/Bing/analytics/backlink exports are not accessible in this environment. Those exports are a formal before-launch condition.

## PRODUCTION INTEGRATION GATE — **PASS**

There is enough evidence to hand BUILD NOW requirements to production: explicit indexability, sitemap changes, verification assertions, direct-entry framing, structured-data alignment and ledger-driven redirects can proceed without waiting for keyword data.

Public domain cutover remains a separate gate.

# Formal outputs produced by Search 02

1. `SEARCH-02-URL-MIGRATION-SEARCH-EQUITY-LEDGER.md`
2. `SEARCH-02-SEARCH-EVIDENCE-MAP.md`
3. `SEARCH-02-AUTHORITY-ENTITY-MAP.md`
4. `SEARCH-02-OPPORTUNITY-PRIORITISATION.md`
5. `SEARCH-02-INDEXABILITY-CONTRACT.md`
6. `SEARCH-02-MIGRATION-RISK-REGISTER.md`
7. `SEARCH-02-PRODUCTION-SEARCH-REQUIREMENTS.md`
8. `SEARCH-AUTHORITY-DISCOVERABILITY-ROADMAP-V2.md`

# Final strategic statement

The target is not “rank for eLearning keywords”.

The target is a durable professional evidence graph in which:

**Glenn → Practice → Project → Record → Artefact → organisation/technology/outcome → external reference**

all reinforce one another while old authority is transferred only where meaning survives the move.

Search becomes a property of the evidence system rather than a publishing department attached to it.