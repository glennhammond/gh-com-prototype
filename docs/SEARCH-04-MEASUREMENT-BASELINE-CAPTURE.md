# Search 04 — Measurement Baseline Capture Contract

**Status:** pre-launch evidence contract  
**Date:** 24 August 2026  
**Production domain:** `https://glennhammond.com`  
**Current production project:** `gh-com-react`  
**Known current GA4 measurement ID:** `G-PXDLN9NVDG`

This document defines the minimum first-party search and acquisition evidence required before the public domain can move from the existing `gh-com-react` project to THE RECORD production project.

The purpose is not to collect every available metric. It is to answer the migration questions that external search tools and repository inspection cannot answer safely:

1. Which current URLs receive search impressions or clicks?
2. Which historical/legacy URLs still receive meaningful entry traffic?
3. Which queries currently associate Glenn Hammond with particular topics?
4. Which landing pages receive organic/referral sessions or key events?
5. Which pages are cited by Bing AI surfaces?
6. Which URLs therefore need preservation, rebuilding, consolidation or deliberate retirement?

---

## 1. Google Search Console baseline

### Property

Use the Search Console property that currently covers `glennhammond.com`.

Do not change verification, sitemap submission, canonical configuration or domain ownership before the baseline export is complete.

### Capture A — Search results / Pages

Export **Web** search performance grouped by **Pages** for:

- last 16 months / maximum available period
- last 90 days
- last 28 complete days

Capture at minimum:

- clicks
- impressions
- CTR
- average position

Use no query/page filters for the baseline export.

Search Console assigns most performance data to canonical URLs. This is useful for migration analysis, but it also means historical aliases can be under-represented if Google already consolidated them to another canonical.

### Capture B — Search results / Queries

Export the same three periods grouped by **Queries**.

Capture at minimum:

- query
- clicks
- impressions
- CTR
- average position

If the branded/non-branded query filter is available for the property, also export both views for the 16-month period. Treat the classification as diagnostic rather than as a ranking signal.

### Capture C — high-risk URL checks

Inspect/export page-filtered query data for the migration URLs most likely to change materially, including:

- `/about`
- `/blog/master-slides-in-storyline`
- `/blog/ux-for-learning`
- `/blog/xapi-basics`
- `/blog/ai-patterns-elearning`
- `/blog/design-system`
- `/work/elearning-design-system/typography`
- the other current eLearning Design System child URLs
- `/work/corporate-yoga-australia-website`
- any Goodstart historical URL found in Search Console
- `/principles-of-assessment-and-rules-of-evidence/` if present historically

For each, record whether it has:

- impressions in the last 16 months
- clicks in the last 16 months
- meaningful recent activity in the last 90 days
- distinctive queries that would be damaged by a broad redirect

### Export method

The normal report export is acceptable for this site if the result set is comfortably below the UI export limit. Search Console report exports can be limited to representative table rows; use the Search Console API if the property exceeds the practical report export size.

### Files

Save exports with explicit date windows, for example:

- `gsc-pages-16m-2026-08-24.csv`
- `gsc-pages-90d-2026-08-24.csv`
- `gsc-pages-28d-2026-08-24.csv`
- `gsc-queries-16m-2026-08-24.csv`
- `gsc-queries-90d-2026-08-24.csv`
- `gsc-queries-28d-2026-08-24.csv`

Do not edit the raw exports. Analysis can use copies.

---

## 2. Google Analytics 4 baseline

The current production source loads GA4 measurement ID `G-PXDLN9NVDG`. Preserve access to that property during migration even if the tracking implementation changes later.

### Capture A — Landing pages

Open **Reports → Engagement → Landing page**.

For the longest useful historical period available and again for the last 90 days, export:

- Landing page
- Sessions
- Active users
- New users
- Average engagement time per session
- Key events, if the property has meaningful key events configured

Add **Session source / medium** as a secondary dimension where available.

Create/export views for:

- all traffic
- `google / organic`
- organic search more broadly if other search engines produce meaningful sessions
- referral traffic

This is the most important GA4 migration export because it identifies pages that people genuinely enter through, even where Search Console click data is small or incomplete.

### Capture B — Traffic acquisition

Open **Reports → Acquisition → Traffic acquisition**.

Capture at minimum:

- Session source / medium
- Sessions
- Engaged sessions / engagement rate where available
- Key events where configured

Add **Landing page + query string** as a secondary dimension for organic and referral traffic.

### Capture C — conversion/contact continuity

Record which event(s), if any, currently represent meaningful enquiry/contact behaviour.

Do not invent a conversion baseline if the property does not have a trustworthy event configured. Record the gap instead.

### Files

Suggested raw-export names:

- `ga4-landing-pages-all-2026-08-24.csv`
- `ga4-landing-pages-organic-2026-08-24.csv`
- `ga4-landing-pages-referral-2026-08-24.csv`
- `ga4-traffic-acquisition-2026-08-24.csv`

---

## 3. Bing Webmaster Tools baseline

Capture the standard search-performance view and the **AI Performance** reporting available to the property.

### AI Performance

Record/export, where available:

- citations
- cited pages
- grounding queries
- intents/topics or citation-share views exposed by the current product

Use these as discovery/citation evidence only. Bing explicitly does not define AI Performance metrics as rankings, authority or importance scores.

Priority question:

> Is Bing already citing a historical page that THE RECORD migration would otherwise consolidate or retire?

If yes, preserve the cited intent until the successor is implemented and verified.

---

## 4. Authority/backlink baseline

Semrush backlink research is connected but, as of 24 August 2026, the account does not have sufficient API units for the backlink report.

Do not fabricate backlink counts or Authority Score estimates.

When backlink evidence is available, prioritise:

- referring domains to historical WordPress permalinks
- links to Goodstart historical project URLs
- links to Design System child URLs
- links to Storyline resources
- links to `/principles-of-assessment-and-rules-of-evidence/`
- links to any URL proposed for 404/410

---

## 5. Decision rules after capture

### Preserve / rebuild

Default toward preservation when a URL has any combination of:

- meaningful recent organic clicks
- meaningful impressions for distinctive queries
- credible external links/citations
- meaningful organic/referral landing sessions
- direct relevance to a primary authority territory

### Consolidate

Consolidate only when:

- the successor genuinely answers the same intent,
- the original content does not justify an independent surface,
- and a direct one-hop redirect can be made to the final canonical destination.

Do not redirect a narrow technical/article URL to `/practice` or `/` merely to avoid a 404.

### Retire

404/410 is acceptable where:

- no meaningful first-party search/entry evidence exists,
- no credible external citation/backlink remains,
- source content is obsolete/missing/low-value,
- and no semantically equivalent successor exists.

### Keep unresolved

If evidence conflicts, keep the migration entry unresolved. Uncertainty is safer than an irreversible broad redirect before launch.

---

## 6. Gate closure

Update migration dependencies only after the raw evidence exists and has been reviewed:

- `searchConsoleBaselineCaptured: true`
- `analyticsBaselineCaptured: true`
- `bingBaselineCaptured: true`

`inheritedRedirectGraphReconciled` remains a separate condition: data capture alone does not close URL migration work.

`historicalCitationRecoveryComplete` remains separate as well: it covers authority/citation discovery beyond first-party performance data.

---

## 7. Production continuity at cutover

Before moving the domain:

- keep Search Console verification valid
- preserve or deliberately replace the existing GA4 measurement strategy
- submit the new canonical sitemap only after domain cutover is qualified
- do not publish staging/preview URLs into sitemaps or canonical tags
- keep permanent redirects one-hop and source-specific
- retain redirect rules for at least the normal migration horizon rather than removing them immediately after Google recrawls

The launch decision should compare the new product against this captured baseline at roughly 7-day, 30-day and 90-day checkpoints rather than judging migration success from ranking anecdotes.
