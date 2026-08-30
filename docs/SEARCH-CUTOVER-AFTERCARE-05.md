# Search Cutover Aftercare 05

**Project:** glennhammond.com / THE RECORD  
**Aftercare opened:** 30 August 2026 AEST  
**Status:** **ACTIVE — immediate public baseline complete; 28-day observation underway**  
**Authoritative deployed source SHA:** `5b99570fa60606c6ad624bb861452f0b5c67bebc`  
**Production deployment:** `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz`

## 1. Governing judgement

The production search contract is healthy. The first post-launch public discovery check already exposes the new Home page and reports it as crawled on 30 August 2026. Older indexed identities remain visible during the early transition, while priority new Project URLs are not yet consistently discoverable through public result checks. This is an expected day-one baseline, not evidence of a migration defect.

No search-driven production change is justified at this stage. The correct action is to preserve the qualified canonical, sitemap, redirect, 410 and 404 contract while Google recrawls and consolidates the estate.

## 2. Production and Vercel identity

| Purpose | Verified URL or identity |
| --- | --- |
| Canonical public site | `https://glennhammond.com/` |
| Stable Vercel production alias | `https://gh-com-prototype.vercel.app/` |
| Immutable release URL | `https://gh-com-prototype-fg23coel1-glenns-projects-ae671c7f.vercel.app/` |
| Vercel deployment | `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz` — READY, target `production` |
| Deployed source | `5b99570fa60606c6ad624bb861452f0b5c67bebc` |

Both Vercel URLs render the qualified production Home page and emit the apex `https://glennhammond.com/` canonical. They are review and release-evidence URLs, not additional search canonicals.

## 3. Immediate public baseline

Observed on 30 August 2026 AEST:

- the public Home result exposes the new THE RECORD content and reports a same-day crawl;
- the broad public discovery result still includes older identities such as `/about`, `/services`, `/design-system/typography` and `/blog/Moving-from-Wordpress-to-React`;
- a focused search for current Work pages surfaced an older CASA identity rather than the new CASA canonical;
- the new ISQ eLearning Design System canonical was not yet surfaced by the focused public result checks;
- this mixed state is retained as the day-one transition baseline and is not interpreted as a failure.

Public search-result checks are discovery evidence only. Google Search Console remains authoritative for property-specific crawl and indexing status.

## 4. Live crawl contract

Fresh public checks confirm:

- `https://glennhammond.com/` returns 200 from Vercel;
- `robots.txt` allows crawling and declares `https://glennhammond.com/sitemap.xml`;
- `sitemap.xml` contains exactly 24 intentional canonical URLs;
- the priority ISQ Project returns the expected page, self-canonical and one JSON-LD block;
- the stable and immutable Vercel URLs both declare the apex Home canonical;
- the launch validation redirect, 410 and 404 contract remains the governing migration contract.

## 5. Google Search Console actions

### Immediate account-level actions

1. Confirm the `glennhammond.com` property remains verified.
2. Submit or confirm `https://glennhammond.com/sitemap.xml` and record its processing result.
3. Inspect these priority URLs:
   - `https://glennhammond.com/`
   - `https://glennhammond.com/work`
   - `https://glennhammond.com/work/isq-elearning-design-system`
   - `https://glennhammond.com/work/wellbeing-studio`
   - `https://glennhammond.com/work/connect-and-learn`
   - `https://glennhammond.com/work/casa/flight-examiner-rating`
   - `https://glennhammond.com/work/tafe-pathways`
4. Record for each priority URL:
   - URL availability to Google;
   - indexing state;
   - last crawl where available;
   - user-declared canonical;
   - Google-selected canonical;
   - blocking enhancement or structured-data issue, if any.
5. Request indexing only for priority canonicals that are eligible and not already queued or recently crawled. Do not submit all 24 pages mechanically.

The account-level run began during this phase but Google presented a CAPTCHA after secure account handoff. No Search Console submission or inspection result is claimed until that challenge is explicitly approved and completed.

## 6. Monitoring cadence

### Day 1–2

- confirm sitemap processing;
- inspect priority canonical URLs;
- record initial indexed, discovered and crawled states;
- verify no priority URL is blocked by robots or an unintended noindex;
- capture the first post-launch Search Console screenshot/export if meaningful data is available.

### Day 7

- compare indexed and non-indexed canonical counts;
- inspect Design System consolidation into `/work/isq-elearning-design-system`;
- sample old Design System children, preserved WordPress identities and deliberate 410s;
- check for soft-404 classification, redirect errors or Google-selected canonical mismatches;
- compare page/query impressions with the pre-launch baseline without treating normal short-term volatility as failure.

### Day 14–28

- capture the post-launch Pages and Queries baseline;
- review priority Project discovery and retained-knowledge continuity;
- confirm legacy identities are declining, redirecting or dropping according to policy;
- confirm the nine Design System child identities are consolidating toward the canonical Project;
- close Phase 05 only when no material migration anomaly remains or any anomaly has an explicit corrective action.

A daily indexing condition watch is active through the 28-day window and reports only meaningful change or action required.

## 7. Material intervention triggers

Intervene only if one or more of these is observed:

- sitemap fetch or processing error;
- Google cannot fetch a priority canonical;
- unintended robots or noindex exclusion;
- Google selects a materially wrong canonical after recrawl;
- redirect chain, loop or wrong destination;
- known retired identity returns 200 or is classified persistently as a soft 404;
- material 5xx behaviour;
- priority Project remains undiscovered after the normal recrawl window despite sitemap inclusion and internal linking;
- Design System legacy identities fail to consolidate after repeated crawl evidence.

Do not respond to ordinary early volatility by changing URLs, titles, canonicals, redirects or information architecture.

## 8. Vercel plan upgrade disposition

Moving the Vercel account from Hobby to Pro is operationally useful but is not part of the domain cutover and does not require another deployment.

The upgrade should not change:

- the active production deployment;
- the apex or `www` domain assignment;
- DNS records;
- canonical metadata;
- the controlled preview → qualify → promote release pattern.

After upgrading, review Web Analytics, Speed Insights, runtime retention and optional log-drain availability. Enable only the observability features that have a clear owner and destination. Do not reassign the domains or rebuild the release merely because the plan changed.

## 9. Production move — completed sequence

The site is already live at `glennhammond.com`. The controlled move completed as follows:

1. the qualified production candidate merged through the retained integration branch;
2. the reconciled release merged to `main`;
3. the exact qualified Vercel preview artefact was promoted rather than rebuilt;
4. apex and `www` were assigned together to `gh-com-prototype`;
5. production migration behaviour was smoke-tested;
6. the WordPress query-identity hotfix was qualified and promoted;
7. `www` was set to redirect permanently to the canonical apex;
8. Launch Validation and Stabilisation 04 closed with production stable.

No further domain move is required. Future executable releases should continue to use preview qualification followed by explicit promotion of the tested artefact.

## Current decision

**SEARCH CUTOVER AFTERCARE 05 — ACTIVE, NO HOLD.**

The immediate public baseline is complete and the live search contract remains healthy. Search Console account-level confirmation remains outstanding until Google authentication and its CAPTCHA are completed. The 28-day observation period cannot truthfully be closed on day one; it is governed by the cadence and intervention thresholds above.
