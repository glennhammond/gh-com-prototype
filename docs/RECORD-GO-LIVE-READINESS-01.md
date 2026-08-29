# THE RECORD — Go-Live Readiness 01

**Date:** 24 August 2026

**Status:** Release candidate qualified; public cutover remains a separate gate

**Branch:** `release/record-go-live-readiness-01`
**Baseline integrated to main:** `11fe447c98650d60c1a82e9a995039ed5ddb0e64`

## 1. Decision

The Minimum Amazing THE RECORD product is sufficiently resolved and technically qualified to become a release candidate.

This is **not** a declaration that `glennhammond.com` should be switched over automatically. Repository integration, release qualification and public domain cutover are deliberately separate gates.

The release candidate is built around the canonical THE RECORD field rather than the unfinished V3 portfolio estate.

## 2. Canonical public product

The sitemap and publication contract contain 21 canonical/indexable routes:

- `/`
- `/work`
- Wellbeing Studio Project → three Records → three Artefacts
- ISQ Connect & Learn Project → Record → Artefact
- CASA Flight Examiner Rating Course Project → Record → Artefact
- TAFE Queensland SkillsTech Pathways Project → Record → Artefact
- `/practice`
- `/about`
- `/contact`

`/privacy` remains an addressable support route with `noindex` and is excluded from the sitemap.

Rise and Storyline specialist routes remain addressable for direct entry and migration continuity but sit outside the canonical product sitemap.

## 3. Practice state

Practice Architecture v1 is retained as the evidence interpretation layer of THE RECORD.

Primary proven recurring claims:

1. Start with the situation, not the inherited structure.
2. Keep connected decisions connected.
3. Solve at the altitude the problem requires.

`Frame. Shape. Make. Evidence.` remains a strong emerging/current operating description rather than a retrospectively claimed historical methodology.

Tools remain subordinate to Practice. Storyline has evidenced specialist depth; Rise is retained without being promoted to a core recurring Practice claim.

## 4. Contact and privacy release correction

The prototype enquiry form was removed from the release surface because it simulated submission without sending or storing a message.

The release Contact page now uses working direct channels only:

- email
- LinkedIn

The current release contains:

- no website enquiry submission or storage
- no Google Analytics implementation
- no advertising pixels
- no account tracking
- no marketing cookies

The Privacy support page now describes those factual behaviours only. It does not invent legal terms for future integrations. Any future working form or analytics implementation must update the privacy contract before being enabled.

## 5. Migration-only portfolio estate

The later THE RECORD canonicalisation supersedes the older assumption that every V3 case-study route is part of the launch product.

Eleven migration-only routes remain addressable for evidence recovery, redirect decisions and future canonicalisation, but are explicitly protected with:

`X-Robots-Tag: noindex, nofollow`

They are also excluded from the sitemap.

The routes are:

- `/work/casa`
- `/work/casa/aviationworx`
- `/work/casa/class`
- `/work/casa/course-system`
- `/work/casa/learning-catalogue`
- `/work/isq-elearning-design-system`
- `/work/isq-differentiated-learning`
- `/work/goodstart-myportal`
- `/work/sonic-healthplus`
- `/work/safetyhub-asbestos`
- `/work/interaction-prototypes`

These routes currently contain 58 explicit editorial placeholders across ten pages. That debt remains visible and tracked, but it is **not** treated as canonical release content and is therefore not allowed to block the Minimum Amazing product.

The publishing verifier enforces this distinction. `PUBLISH=1` fails on an editorial placeholder in a canonical/indexable release surface, but not on an explicitly quarantined migration route.

## 6. Historical URL migration

Permanent redirect rules are now present for the high-value historical URLs already identified by the SEO migration work:

- `/glenn-hammond` → `/about`
- `/elearning-design` → `/practice`
- `/storyline-development` → `/services/storyline-development`
- `/moodle-customisation` → `/practice`
- `/xapi-elearning` → `/practice`
- `/elearning-authoring-tools` → `/practice`
- `/elearning-design-system` → `/practice`
- `/interaction-design` → `/practice`
- `/services` → `/practice`
- `/services/xapi-analytics` → `/practice`
- `/design-system/:slug*` → `/practice`

These redirects must be verified on the production domain after cutover.

## 7. Publication qualification

The release candidate was deliberately built through the true publication gate:

`PUBLISH=1 npm run check`

This executes:

- production SSG build
- publishing verification
- static accessibility audit

### Result: PASS

The publication-mode deployment rendered 35 pages and passed all automated gates.

Confirmed:

- zero editorial placeholders on canonical/indexable release surfaces
- 11 migration-only routes explicitly quarantined from indexing
- canonical sitemap integrity
- no withheld project leakage
- no unapproved client-name/logo leakage according to repository publication status
- exactly one `h1` per rendered page
- heading-order audit
- accessible link/button names
- image alt/intrinsic-size/loading checks
- responsive image checks
- visible focus support
- reduced-motion support
- 44px minimum interactive targets
- enforced colour contrast pairs
- internal-link integrity
- no automatic third-party resource requests outside the explicit allow-list

### Performance

- Initial JS: **95 KB gzipped** / 120 KB budget
- Largest JS chunk: **95 KB** / 100 KB budget
- CSS: **16 KB gzipped** / 30 KB budget
- Largest image: **173 KB** / 180 KB budget
- Total route JS: **183 KB gzipped**, reported as migration debt rather than initial payload

The normal Vercel preview build command was restored after the publication qualification. The audited product source was unchanged by that restoration.

## 8. Deployment safety

`main` is explicitly excluded from Git-triggered Vercel deployment:

```json
"git": {
  "deploymentEnabled": {
    "main": false
  }
}
```

The rule was introduced before THE RECORD production integration was merged to main and was proven to prevent that merge from creating a deployment.

The Vercel project currently has no `glennhammond.com` custom production domain attached. Public domain cutover therefore remains an explicit release action rather than an accidental consequence of repository integration.

## 9. Remaining go-live gates

### A. External browser review

Still required before public cutover:

- desktop visual pass
- mobile visual pass
- keyboard traversal
- enlarged-text / browser-zoom stress
- representative Practice → Record → Artefact movement
- browser Back / Forward restoration

The ChatGPT execution environment could not perform this against the protected Vercel preview because outbound browser networking is blocked by the runtime. Static accessibility equivalents have passed, but this document does not pretend they replace the final visual review.

### B. Publication permission sign-off

Client/employer material must still receive the appropriate final publication approval before domain cutover where required. The repository guardrails prevent known unapproved names/logos from shipping according to the current content records, but they do not substitute for Glenn's final external permission decision.

### C. Domain and production deployment

Public release still requires a deliberate decision to:

- create/promote a production deployment
- attach or move `glennhammond.com` to this Vercel project
- deliberately alter/remove the `main` deployment guard if automatic production deployment is later desired
- verify redirects and canonical responses on the production domain

### D. Post-cutover SEO

After cutover:

- verify the historical redirects on `glennhammond.com`
- verify sitemap and robots responses
- submit/refresh the sitemap in Google Search Console
- monitor 404s, crawl errors and unexpected legacy landings

## 10. Gate recommendation

### Repository release-candidate integration: **PASS**

The Minimum Amazing canonical product has passed publication-mode build and static accessibility qualification and can safely be integrated into `main` while the deployment guard remains active.

### Public domain cutover / go-live: **HOLD**

The hold is narrow and deliberate. It is not a request for more Practice design or more canonical content.

Public cutover should occur only after:

1. the final external-browser review;
2. final publication-permission sign-off; and
3. an explicit domain/production release decision.

No further content should be manufactured merely to eliminate migration debt that THE RECORD has already classified as non-canonical.
