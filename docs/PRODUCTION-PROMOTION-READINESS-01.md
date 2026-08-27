# Production Promotion Readiness 01

**Project:** glennhammond.com / THE RECORD  
**Candidate branch:** `feat/visual-identity-03-production-candidate-01`  
**Pull request:** #7 → `feat/record-production-integration-01`  
**Qualified parent:** `0298065d29cf8da655967f53953e663c3092ecb8`  
**Authoritative release SHA:** the head of the candidate branch containing this record and the dependency remediation below; record the immutable SHA and Vercel deployment ID in the launch log before promotion  
**Merge status:** **NOT MERGED**  
**Production status:** **NOT PROMOTED**  
**Verdict:** **GO — ready for a controlled, explicitly authorised promotion sequence**

This verdict does not authorise a merge, Vercel promotion or domain change. It means the candidate has no known material pre-launch blocker and can enter the controlled promotion sequence in section 8 after its branch checks and preview deployment are green.

## 1. Candidate integrity

The qualified parent was reconstructed from GitHub and its 573 repository blobs were verified against the remote tree.

| Control | Evidence | Status |
| --- | --- | --- |
| Branch and PR | PR #7 is open and draft; head `feat/visual-identity-03-production-candidate-01`; base `feat/record-production-integration-01`; mergeable; not merged | PASS |
| Qualified parent | `0298065d29cf8da655967f53953e663c3092ecb8` | PASS |
| Base at review | `c1f0ada6db643ebccc58bf62f9545496b72a4f0d` | Recorded |
| GitHub Production Quality | Run `33047278042` / run 179 succeeded at the qualified parent | PASS |
| Browser release gate | Run `33047274490` / run 66 succeeded at the qualified parent across 1440, 820 and 390 px viewports | PASS |
| Candidate Vercel preview | Deployment `dpl_4zpMSL1VjmmoBf6KxqnWkHdK9KHv` was READY at the qualified parent | PASS |
| Release audit | 38 generated routes; canonical estate, placeholder quarantine and evidence checks passed | PASS |
| Search audit | 24 indexable canonicals, one noindex supporting Artefact and 20 approved redirect rules | PASS |
| Migration audit | 27/27 live-estate URLs, 28/28 inherited WordPress identities and 3/3 portfolio rules resolved | PASS |

The dependency remediation in this record changes dependency manifests only. The resulting candidate-branch head becomes authoritative only after GitHub Production Quality, browser QA and a READY Vercel preview have all completed successfully against that exact SHA. No drift between that SHA and the promoted deployment is permitted.

## 2. Dependency and security disposition

The initial audit reported two high and two moderate findings. They were investigated rather than force-fixed.

| Package | Initial finding | Disposition |
| --- | --- | --- |
| `nanoid` 3.3.16 | High, transitive build dependency | Updated non-breakingly to 3.3.18 |
| `sharp` 0.34.5 | High, direct development dependency | Updated to 0.35.4. It is used by `scripts/images.mjs`, not the deployed application; there is no production upload or untrusted-image processing path. Metadata smoke test passed with libvips 8.18.6. |
| `react-router-dom` / `react-router` 6.30.4 | Moderate | Updated within major to 6.30.6, closing the directly remediable 6.30.2–6.30.4 advisory. |
| React Router residual advisories | Three npm audit package entries, moderate; no high or critical findings | Accepted for launch. The application uses declarative, code-owned routes and links, without attacker-controlled navigation targets, data-router actions/loaders or manual SSR error hydration. The currently available fix requires React Router 7.18, while `vite-react-ssg` 0.9.2 declares React Router 6 compatibility. A forced major upgrade is a larger release risk and is not justified by the absent exploit path. Track separately. |

After remediation, `npm audit` reports **0 high, 0 critical and 3 moderate package entries**. `npm run build` passed all release gates with 38 generated pages. Performance remained within budget: 99 KB initial/largest JavaScript gzip, 19 KB CSS gzip and 173 KB largest image.

Security disposition: **PASS — no credible material production exploit path remains.**

## 3. Release estate and human experience

The release estate remains the Search Cutover-qualified estate:

- 24 intentionally indexable canonical URLs;
- one deliberately noindex supporting Artefact;
- Privacy published but noindex and absent from the sitemap;
- 51 placeholders confined to 10 legacy/noindex review routes.

The placeholder-bearing review routes are not production-release blockers and were not expanded in this phase.

The real-browser release gate at the qualified parent passed Home, Work, Practice, About, Contact, service pages, retained knowledge, Wellbeing Studio, ISQ, CASA and TAFE surfaces at desktop, tablet and mobile widths. It also passed typography roles, fonts, Record/Artefact navigation and focus, scroll restoration, mobile-menu focus/Escape behaviour, reduced-motion behaviour and no-JavaScript mobile behaviour. No material visual, hierarchy, imagery, terminology or mobile-readability defect was exposed. Dependency-only remediation does not alter presentation, but the gate must still rerun at the authoritative SHA.

Human experience disposition: **PASS. Preserve the established identity; no redesign is indicated.**

## 4. Production runtime contract

### Expected public behaviour

| Request | Expected result |
| --- | --- |
| `/`, `/work`, `/practice`, `/work/isq-elearning-design-system` | 200; correct page; self-referencing `https://glennhammond.com/...` canonical |
| `/robots.txt` | 200; public crawling allowed; sitemap points to `https://glennhammond.com/sitemap.xml` |
| `/sitemap.xml` | 200; 24 canonical/indexable URLs only |
| Canonical launch pages | Valid JSON-LD appropriate to the page, including Person/ProfessionalService and breadcrumb entities where defined |
| `/portfolio/elearning-design-system` | Permanent redirect to `/work/isq-elearning-design-system` |
| `/work/elearning-design-system/overview` | Permanent redirect to `/work/isq-elearning-design-system` |
| `/blog/xapi-basics` | 410 Gone |
| `/?p=156456` | 410 Gone |
| `/?p=156463` | Permanent redirect to `/blog/master-slides-in-storyline` |
| `/?p=999999` | 404 Not Found |
| `/portfolio/unknown-route` | 404 Not Found; no broad portfolio redirect |

### Verification boundary

Build/configuration proof is complete. The release, search and migration audits pass, generated HTML contains the expected canonical metadata and structured data, and `vercel.json` contains the explicit redirects and 410/404 handlers.

The candidate preview is protected by Vercel authentication. Anonymous requests were observed returning a 302 to Vercel SSO with `x-robots-tag: noindex` before the application was reached. Therefore the table above is **not claimed as preview-runtime proof**. Public status-code and header proof remains a mandatory gate on the unprotected production-target Vercel URL before domain reassignment, then again on the real domain immediately after reassignment.

Runtime disposition: **configuration/build PASS; public production-runtime observation pending the controlled promotion.**

## 5. Promotion architecture

There are two separate Vercel projects:

- candidate: `gh-com-prototype` (`prj_TXqIuueyIx83V1yOKQTF5s64YOLx`), linked to this repository, with `main` deployments disabled and no production custom domain;
- current production: `gh-com-react` (`prj_vbZJ8XK2ean2iEKyS7rTqPSjQais`), linked to the legacy `glennhammond/gh.com-react` repository and currently owning `glennhammond.com` and `www.glennhammond.com`.

The current production deployment recorded before cutover is `dpl_5ns6tPiSMe1CTwweveuZAHttaefd`, Git SHA `a70f88d39ffe96fea54800be646dccc32b48fb86`.

Consequences:

1. A merge to `main` does not by itself publish the site.
2. The staged integration branch remains useful as a deliberate release boundary and should be retained.
3. The exact already-qualified Vercel artefact must be promoted; a fresh production rebuild would introduce avoidable drift.
4. Both apex and `www` domain assignments must move together from the old project to the candidate project. The apex remains canonical and `www` must continue to redirect to it.
5. No DNS change is expected while both projects remain in the same Vercel account, but domain assignment and certificate health must be verified at cutover rather than assumed.

## 6. Material risks

There are no known material pre-launch blockers. The remaining controlled risks are launch gates, not evidence of candidate failure:

- public runtime statuses cannot be observed through the authenticated preview;
- the real domains currently belong to a different Vercel project;
- the residual React Router moderate advisories require a separately qualified major-stack migration to eliminate mechanically, but the vulnerable execution paths are not present here.

If the exact authoritative SHA does not receive green CI, browser QA and a READY preview, or if the unprotected production-target smoke test differs from section 4, the verdict automatically becomes **HOLD** until corrected.

## 7. Preconditions for explicit promotion approval

- Record the exact candidate SHA and its READY Vercel deployment ID.
- Confirm PR #7 is still draft/open and still targets `feat/record-production-integration-01`.
- Confirm no unexpected commits have entered either branch.
- Confirm all required GitHub checks and browser QA are green at that SHA.
- Confirm the old production deployment and both domain assignments remain available for rollback.
- Obtain explicit approval from Glenn before each merge/promotion step.

## 8. Exact promotion sequence

1. Merge PR #7 into `feat/record-production-integration-01` only after explicit instruction.
2. Confirm the integration result contains the authoritative candidate tree with no unrelated drift; rerun required checks.
3. Create/validate the integration-to-`main` PR. Merge it only after explicit instruction. Do not alter `vercel.json` merely to trigger production.
4. In `gh-com-prototype`, promote the READY deployment built from the authoritative SHA to the production target without rebuilding.
5. Before moving the real domains, test the resulting unprotected production-target Vercel URL against every status/header case in section 4. Stop on any mismatch.
6. Reassign `glennhammond.com` and `www.glennhammond.com` together from `gh-com-react` to `gh-com-prototype`. Preserve apex as primary and `www` → apex.
7. Verify certificate/domain health and run the launch-day checklist immediately.
8. Begin Search Cutover aftercare only after the real-domain checks pass.

No step in this sequence was executed by this readiness phase.

## 9. Rollback sequence

For a material outage during or immediately after cutover:

1. Stop launch/search submissions and record the failing request, response and deployment ID.
2. Reassign both `glennhammond.com` and `www.glennhammond.com` together to the old `gh-com-react` project and known production deployment `dpl_5ns6tPiSMe1CTwweveuZAHttaefd`.
3. Verify apex 200, `www` → apex, TLS, navigation and the old sitemap/robots behaviour.
4. If the new repository has been merged, revert the integration-to-`main` merge with a normal Git revert after service recovery; do not rewrite branch history.
5. Repair on the candidate branch and repeat the full qualification and promotion sequence.

Do not independently roll back or selectively remove redirects, 410s, canonicals, robots or sitemap policy. They are one coupled search-migration unit. Before search-engine submission, a full old-project domain rollback is the safest emergency recovery. Once crawlers begin processing the new estate, prefer a roll-forward that preserves the migration layer; restoring the legacy estate can make newly advertised canonical URLs disappear.

## 10. Launch-day smoke-test checklist

Run from an unauthenticated external connection and record timestamp, deployment SHA/ID, status, `Location`, canonical and `x-robots-tag` where relevant.

### HTTP and migration

- [ ] `https://glennhammond.com/` → 200
- [ ] `https://www.glennhammond.com/` → permanent redirect to apex
- [ ] `/work`, `/practice`, `/work/isq-elearning-design-system` → 200
- [ ] `/portfolio/elearning-design-system` → permanent redirect to `/work/isq-elearning-design-system`
- [ ] `/work/elearning-design-system/overview` → permanent redirect to `/work/isq-elearning-design-system`
- [ ] `/blog/xapi-basics` → 410
- [ ] `/?p=156456` → 410
- [ ] `/?p=156463` → permanent redirect to `/blog/master-slides-in-storyline`
- [ ] `/?p=999999` → 404
- [ ] `/portfolio/unknown-route` → 404 with no broad redirect
- [ ] Redirect destinations do not chain and remain on HTTPS/apex

### Search contract

- [ ] `/robots.txt` → 200, crawl allowed, correct apex sitemap URL
- [ ] `/sitemap.xml` → 200, parseable, exactly 24 intended canonical URLs
- [ ] Priority pages have one correct self-referencing apex canonical
- [ ] Canonical launch pages do not emit `noindex` or an authentication `x-robots-tag`
- [ ] Privacy and the qualification-map Artefact remain noindex and absent from sitemap
- [ ] JSON-LD parses; expected Person/ProfessionalService/Breadcrumb entities are present and URLs use the apex

### Human experience

- [ ] Home, Work, Wellbeing Studio, Connect & Learn, ISQ, CASA, TAFE, Practice, About and Contact render on desktop and mobile
- [ ] Primary navigation, project/Record/Artefact navigation and browser back/forward work
- [ ] Mobile menu opens/closes, traps/restores focus appropriately and responds to Escape
- [ ] Contact path and email link work
- [ ] Images load without broken assets; fonts and typography roles are consistent
- [ ] No horizontal overflow or unreadable text at 390, 820 and 1440 px
- [ ] No material console errors; reduced-motion behaviour remains usable
- [ ] Expected security headers are present

## 11. Immediate Search Cutover aftercare

1. Confirm or submit `https://glennhammond.com/sitemap.xml` in Google Search Console.
2. Inspect Home, Work, Practice, Design System, Wellbeing Studio, Connect & Learn, CASA and TAFE canonical URLs.
3. Inspect representative legacy redirects, both 410 classes, the unknown WordPress ID and unknown portfolio fall-through.
4. Capture a new baseline with timestamp, authoritative SHA/deployment ID, sitemap status, inspected responses and initial coverage state.
5. Review indexed/not-indexed behaviour and the nine-to-one Design System consolidation after 1–2 days, 7 days and 14–28 days; investigate only material divergence from the migration contract.
6. Keep Bing non-blocking unless new evidence changes its significance.

This is operational aftercare only, not a reopening of Search Cutover strategy.

## Final decision

**GO — the candidate is safe to enter the deliberate, reversible promotion sequence, subject to explicit approval and the exact-SHA gates above.**

No merge, production promotion, domain reassignment or search-engine submission has been performed.
