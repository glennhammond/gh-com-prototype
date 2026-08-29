# Launch Validation and Stabilisation 04

**Project:** glennhammond.com / THE RECORD  
**Validation date:** 30 August 2026 AEST  
**Outcome:** **COMPLETE — production stable**  
**Authoritative deployed source SHA:** `5b99570fa60606c6ad624bb861452f0b5c67bebc`  
**Main release merge:** `7b92ff679619c7ef37e5fbbf50ae91a103dbc624`  
**Production deployment:** `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz`

## 1. Governing judgement

The qualified THE RECORD release remains live, internally consistent and reversible. Phase 04 found no material production defect and made no executable change. The production deployment remains the exact hotfix artefact qualified during Controlled Production Promotion 03.

The only executable launch correction remains the already-qualified WordPress query-identity middleware delivered through PR #9. No further roll-forward or rollback is required.

## 2. Candidate and production integrity

| Control | Stabilisation evidence |
| --- | --- |
| Git default branch | `main` |
| Current repository head at validation | `05b5b4e7c4fadcb4ec854b963a377e4395fd3c79` |
| Deployed source | `5b99570fa60606c6ad624bb861452f0b5c67bebc` |
| Production deployment | `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz` — READY |
| Production aliases | apex, `www`, project production aliases — attached without alias error |
| Executable drift after launch | None; later commits are documentation only |
| Rollback state | Prior candidate and legacy production deployments retained |

## 3. Public release estate

Fresh validation against `https://glennhammond.com` confirmed:

- `sitemap.xml` returns 200 and contains exactly 24 intentional canonical URLs;
- all 24 sitemap URLs return 200;
- all 24 pages emit the expected self-canonical URL;
- all 24 pages emit a parseable JSON-LD block;
- Home, Work, Practice, Design System, Wellbeing Studio, Connect & Learn, CASA, TAFE, About and Contact are publicly available;
- `robots.txt` returns 200, allows crawling and declares the apex sitemap;
- Privacy remains live and `noindex, follow`;
- quarantined supporting routes remain live with restrictive noindex headers;
- no canonical launch URL unexpectedly carries noindex.

## 4. Migration runtime contract

| Request | Observed result |
| --- | --- |
| `www.glennhammond.com/` | 308 to the canonical apex |
| `/portfolio/elearning-design-system` | 308 to `/work/isq-elearning-design-system` |
| `/work/elearning-design-system/overview` | 308 to `/work/isq-elearning-design-system` |
| `/blog/xapi-basics` | 410 |
| `/?p=156456` | 410 |
| `/?p=156463` | 308 to the retained Master Slides page |
| `/?p=999999` | 404 |
| `/portfolio/unknown-route` | 404 |
| unrelated unknown route | 404 |

Vercel preserves `?p=156463` on the redirect location. The destination returns 200 and emits the clean canonical `https://glennhammond.com/blog/master-slides-in-storyline`, so the inherited query is not an indexing or release blocker.

## 5. Human experience review

The live desktop review covered Home, Work, ISQ eLearning Design System, Wellbeing Studio, Connect & Learn, CASA, TAFE, Practice, About and Contact.

Evidence:

- each route rendered meaningful content and the expected page heading;
- no application error overlay was present;
- no horizontal overflow was detected;
- no loaded image was broken;
- lazy-loaded images completed after entering the viewport;
- header navigation completed Home → Work → ISQ Design System → Contact;
- Contact exposes the correct `mailto:glenn@glennhammond.com` path and LinkedIn profile;
- no site-origin browser console error was recorded;
- browser-extension metadata noise was excluded because it is not emitted by the site.

### Mobile evidence

The production source inherits the previously passed 390px release review for Home, Work, Practice, ISQ, Wellbeing Studio and Contact. The only executable change after that review is request middleware for root WordPress query identities; it does not modify components, CSS, typography, assets or responsive behaviour.

A fresh local mobile-browser binary could not be obtained during Phase 04 because both browser-CDN responses were truncated. This is an evidence-acquisition limitation, not a production symptom. Mobile qualification therefore remains valid by exact source ancestry, the unchanged CSS/component tree, the passing static responsive/touch-target audit and the prior rendered 390px proof. No fresh mobile behaviour is claimed beyond that evidence.

## 6. Runtime and observability

- Active deployment state: READY.
- Current deployment error/fatal log scan: no entries in the latest two-hour window.
- Project runtime status groups observed: 200, 404 and 410 only; no 5xx group.
- The only 24-hour warning group belongs to the superseded pre-hotfix deployment and its former `/api/wordpress-legacy` path.
- The Vercel Hobby plan does not provide external log drains; direct Vercel runtime queries remain the appropriate monitoring route.

## 7. Requalification

`npm ci && npm run check` passed on the current `main` tree:

- 38-route production build — PASS;
- search audit — PASS: 24 indexable canonicals, one noindex artefact and 28 approved permanent redirects;
- migration cutover audit — PASS;
- verification suite — PASS;
- release qualification audit — PASS;
- static accessibility and contrast audit — PASS;
- performance budgets — PASS.

`npm audit` reports zero high or critical findings and three accepted moderate entries inherited through React Router / `vite-react-ssg`. There is no compatible fix in the current stack. The application does not accept attacker-controlled navigation destinations or use the affected SSR error-hydration path, so these entries remain a separately managed dependency-migration item rather than a production hold.

## 8. Stabilisation disposition

### Closed

- Production and domain integrity
- Canonical launch estate
- Redirect, 410 and 404 behaviour
- Desktop visitor journeys
- Contact path
- Active-deployment error scan
- Full repository requalification
- Rollback availability

### Continuing aftercare, not a launch defect

- Google Search Console sitemap confirmation and priority URL inspection;
- indexing and Design System consolidation checks at 1–2 days, 7 days and 14–28 days;
- routine runtime/error observation during the aftercare window;
- React Router major-stack migration as scheduled maintenance, not an urgent release change.

A daily 28-day post-launch indexing watch is active and will report only meaningful change or action required.

## Final decision

**LAUNCH VALIDATION AND STABILISATION 04 — COMPLETE.**

`glennhammond.com` is stable on the qualified THE RECORD production release. There is no unresolved material risk, no reason to roll back and no justification for another production deployment during the stabilisation window.
