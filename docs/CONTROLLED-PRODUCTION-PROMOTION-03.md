# Controlled Production Promotion 03

**Project:** glennhammond.com / THE RECORD  
**Promotion date:** 29 August 2026 (UTC)  
**Outcome:** **COMPLETE — production live and verified**  
**Authoritative deployed source SHA:** `5b99570fa60606c6ad624bb861452f0b5c67bebc`  
**Main merge SHA:** `7b92ff679619c7ef37e5fbbf50ae91a103dbc624`  
**Production deployment:** `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz`

## 1. Promotion record

The controlled sequence authorised after Production Promotion Readiness 01 was completed without rebuilding the qualified release artefact:

1. PR #7 was merged into `feat/record-production-integration-01`.
2. The reconciled integration tree passed GitHub Production Quality and its READY Vercel preview.
3. PR #8 was merged into `main` at `f96a301c1a7782c46ffeff49a9e0b38167a326be`.
4. Qualified preview `dpl_BRphWjUCb2L1zg3K2Y3t8CXtBA7C` was promoted to production deployment `dpl_EVcp7zYCjfubRKRyRqDwPEV22fbG`.
5. `www.glennhammond.com` and then `glennhammond.com` were moved from the legacy `gh-com-react` project to `gh-com-prototype`.
6. Real-domain testing exposed one production-only migration defect: root WordPress `?p=` requests reached the static homepage before the configured rewrite.
7. PR #9 added a narrow Vercel middleware boundary for WordPress query identities. GitHub Production Quality run 194 passed, preview `dpl_4j6wgtn3RwhLsNpAX8jEAheq8NzE` was READY, and protected-preview runtime tests returned the required 308, 410 and 404 outcomes.
8. PR #9 was merged to `main` at `7b92ff679619c7ef37e5fbbf50ae91a103dbc624`.
9. The exact qualified hotfix preview was promoted to production deployment `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz`.
10. The Vercel project-domain setting was updated so `www.glennhammond.com` permanently redirects to the canonical apex.

No Search Cutover decision, visual identity, canonical launch route or quarantined legacy-review route was reopened.

## 2. Final release identity

| Control | Recorded value |
| --- | --- |
| Repository | `glennhammond/gh-com-prototype` |
| Authoritative deployed source | `5b99570fa60606c6ad624bb861452f0b5c67bebc` |
| Source tree | `28e6fcde1ba0fd599620cd885464fea7982444cf` |
| Main merge | `7b92ff679619c7ef37e5fbbf50ae91a103dbc624` |
| Qualified hotfix PR | #9 |
| GitHub quality gate | Production Quality run 194 — PASS |
| Qualified preview | `dpl_4j6wgtn3RwhLsNpAX8jEAheq8NzE` — READY |
| Production deployment | `dpl_DhvTBgZbxktLbEGn1k2bxYAws2Xz` — READY |
| Production project | `gh-com-prototype` / `prj_TXqIuueyIx83V1yOKQTF5s64YOLx` |
| Canonical domain | `https://glennhammond.com` |
| Secondary domain | `https://www.glennhammond.com` → apex, 308 |

The promoted production deployment is a Vercel promotion clone of the qualified preview. Its source tree is the authoritative runtime identity; the later main merge records that same tree in repository history.

## 3. Qualification and security

The hotfix was fully requalified before promotion:

- 38-route production build — PASS;
- release audit — PASS;
- search audit — PASS;
- migration audit — PASS;
- verification suite — PASS;
- static accessibility and contrast checks — PASS;
- performance budgets — PASS;
- GitHub Production Quality run 194 — PASS;
- Vercel preview — READY.

`npm audit` reports zero high or critical findings and three accepted moderate React Router entries. The application does not expose the affected attacker-controlled data-router or SSR hydration paths. Eliminating them mechanically requires a separately qualified React Router major-stack migration and is not a production hold.

## 4. Production runtime evidence

Observed against the public real domain after the final promotion:

| Request | Observed result |
| --- | --- |
| `/`, `/work`, `/practice`, `/work/isq-elearning-design-system` | 200 |
| Wellbeing Studio, Connect & Learn, CASA, TAFE Pathways, About and Contact | 200 |
| `/portfolio/elearning-design-system` | 308 → `/work/isq-elearning-design-system` |
| `/work/elearning-design-system/overview` | 308 → `/work/isq-elearning-design-system` |
| `/blog/xapi-basics` | 410 |
| `/?p=156456` | 410 |
| `/?p=156463` | 308 → retained Master Slides canonical |
| `/?p=999999` | 404 |
| `/portfolio/unknown-route` | 404 |
| an unrelated unknown route | 404 |
| `/robots.txt` | 200; crawling allowed; apex sitemap declared |
| `/sitemap.xml` | 200; exactly 24 `loc` entries |
| `www.glennhammond.com/` | 308 → `https://glennhammond.com/` |

Home, Work, Practice, Design System and Contact each emitted one correct apex canonical. Their JSON-LD parsed successfully and included the expected Person, ProfessionalService, CreativeWork and BreadcrumbList entities. The supporting CASA route retained `x-robots-tag: noindex, nofollow`.

The production application is the same qualified Vercel artefact previously covered by the desktop, tablet and mobile release gate. The domain move and hotfix changed request handling only; no component, content, styling or asset changed.

## 5. Rollback

### Immediate application rollback

If a new runtime regression is introduced, use Vercel rollback/promote to restore the previous production candidate deployment `dpl_EVcp7zYCjfubRKRyRqDwPEV22fbG`, then verify the real-domain matrix. This rollback does **not** contain the WordPress `?p=` precedence fix, so it is suitable only as a short emergency service recovery while preserving or rapidly restoring equivalent query-identity handling.

### Full legacy rollback

The last legacy production deployment remains `dpl_5ns6tPiSMe1CTwweveuZAHttaefd` in project `gh-com-react` (`prj_vbZJ8XK2ean2iEKyS7rTqPSjQais`). A full rollback requires moving both apex and `www` together to that project and re-verifying TLS, apex behaviour, `www` redirect, navigation, robots and sitemap.

### Git rollback

Use normal Git revert commits against `main`; do not rewrite history. Do not independently remove redirects, 410 handling, canonicals, robots policy or the sitemap. Those behaviours form one coupled search-migration release. After search engines begin processing the new estate, prefer a roll-forward that preserves the published URL contract.

## 6. Launch-day checklist outcome

- [x] Public 200 routes
- [x] Permanent redirects
- [x] Retired-route 410s
- [x] Unknown-route and unknown WordPress-ID 404s
- [x] Apex canonical tags
- [x] Robots and 24-URL sitemap
- [x] Structured data parsing
- [x] Supporting-route noindex header
- [x] `www` consolidation
- [x] Contact route and direct-email path present
- [x] Exact qualified deployment promoted
- [x] Legacy project/deployment retained for rollback

## 7. Immediate search aftercare

Operational follow-up is deliberately limited to:

1. confirm or submit `https://glennhammond.com/sitemap.xml` in Google Search Console;
2. inspect Home, Work, Practice, ISQ Design System, Wellbeing Studio, Connect & Learn, CASA and TAFE Pathways;
3. inspect representative 308, 410 and 404 migration cases;
4. record the post-launch Search Console baseline with this release SHA and deployment ID;
5. review coverage and the nine-to-one Design System consolidation after 1–2 days, 7 days and 14–28 days;
6. keep Bing non-blocking unless new evidence materially changes its significance.

Search Console submission and later indexing observations are post-launch operations, not production-readiness blockers.

## Final decision

**CONTROLLED PRODUCTION PROMOTION 03 — COMPLETE.**

`glennhammond.com` is live on the qualified THE RECORD release, the production runtime contract has been observed on the real domain, rollback assets remain available, and there is no known material launch blocker.
