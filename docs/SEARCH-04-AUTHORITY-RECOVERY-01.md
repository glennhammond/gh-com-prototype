# Search 04 — Authority Recovery 01

**Date:** 24 August 2026  
**Branch:** `feat/record-production-integration-01`  
**Status:** In progress — branch implementation advanced; deployed qualification currently blocked by the Vercel Hobby build-rate limit

## Purpose

Search 03 established the production search contract, migration gate and first retained authority resource. Search 04 begins reducing migration debt source-by-source rather than treating every historical URL as equally valuable.

The governing distinction is now:

1. **THE RECORD evidence** — Project → Record → Artefact.
2. **Retained knowledge** — standalone resources that independently earn survival because they have durable utility, historical authority/citations, or both.
3. **Migration-only estate** — historical URLs that remain protected while their final disposition is established.

A conventional Blog is still not part of the product architecture.

## 1. Inherited WordPress redirect estate is now machine-governed

The current `gh.com-react` production repository contains a substantial redirect graph that is not visible in the current sitemap.

Captured estate:

- 28 historical WordPress article identities
- 56 historical source forms:
  - original pretty permalink
  - `/?p=<id>` WordPress query URL
- historical Portfolio rules, including the unsafe `/portfolio/:path*` wildcard

`src/content/inherited-redirect-policy.js` records these identities independently of the current live-sitemap inventory.

`scripts/migration-audit.mjs` requires every launch-ready preserved WordPress identity to prove that:

- its final canonical destination is statically rendered;
- the destination is intentionally listed in the new sitemap;
- the original pretty permalink redirects directly to the final destination;
- the historical `/?p=<id>` URL redirects directly to the same destination;
- no intermediate legacy article is required.

A future `PUBLISH=1` build cannot pass while unresolved inherited article identities or inherited Portfolio rules remain.

## 2. Master Slides in Storyline — inherited article recovery 01

Historical identity:

- WordPress id: `156463`
- old pretty permalink: `/master-slides-in-storyline`
- current React canonical: `/blog/master-slides-in-storyline`

Disposition: **PRESERVE**.

Why this one survives:

- the recovered source is first-hand rather than generic SEO copy;
- the argument is about production-system design rather than a transient product trick;
- Articulate still documents Slide Masters as a current Storyline 360 feature for consistent presentation and reusable layouts;
- current Storyline release history continues to include accessibility fixes involving text styles and master layouts, reinforcing the need to treat masters as part of a tested system rather than as an accessibility guarantee.

The historical article was not copied verbatim. Its durable argument was rebuilt and project-specific prescriptions were removed where they should not be presented as universal rules.

The refreshed article now separates:

- stable layout inheritance;
- reusable interaction/component logic;
- visual foundations;
- accessibility verification;
- versioned production-system practice.

New architecture:

- retained knowledge id: `master-slides-storyline`
- canonical: `/blog/master-slides-in-storyline`
- retained article renderer: `src/pages/KnowledgeArticle.jsx`
- policy: indexable + sitemap
- historical redirects:
  - `/master-slides-in-storyline` → `/blog/master-slides-in-storyline`
  - `/?p=156463` → `/blog/master-slides-in-storyline`

Both historical source forms bypass intermediate legacy pages.

## 3. Moodle login-first — inherited article recovery 02

Historical identity:

- WordPress id: `164`
- historical permalink: `/how-to-set-moodles-user-login-page-as-the-sites-landing-page`
- old React redirect destination: `/blog/how-to-set-moodles-user-login-page-as-the-sites-landing-page`
- surviving source slug: `/blog/how-to-set-moodles-login-page-as-the-sites-landing-page`

Disposition: **PRESERVE, rebuilt**.

Source recovery showed two separate problems in the old estate:

1. the surviving article was dated 2013 and marked `draft`;
2. the old Vercel redirect pointed to a slug containing `user-login`, while the actual source slug does not.

Simply carrying the old redirect graph forward would therefore preserve a broken migration.

The useful intent remains current. Moodle 5.x still supports:

- requiring authentication before users can see Site home;
- separate Site home configuration for guests and authenticated users;
- a configurable signed-in destination such as Dashboard or Site home.

The resource has therefore been rebuilt as an access/entry decision guide rather than a brittle menu-click recipe.

Canonical retained resource:

`/blog/how-to-set-moodles-login-page-as-the-sites-landing-page`

Migration rules now converge on it directly:

- `/how-to-set-moodles-user-login-page-as-the-sites-landing-page` → canonical resource;
- `/?p=164` → canonical resource;
- broken old intermediate `/blog/how-to-set-moodles-user-login-page-as-the-sites-landing-page` → canonical resource.

This is a genuine authority repair: the new graph is both more current and more correct than the graph being replaced.

## 4. Retained knowledge now has a reusable article family

`KnowledgeArticle.jsx` provides a shared retained-knowledge article surface rather than creating a bespoke page for every recovered resource.

This means retained knowledge can grow selectively without recreating a Blog product or authoring a collection of unrelated one-off templates.

The renderer supports:

- title/introduction;
- numbered sections;
- explanatory prose;
- practical bullet sets;
- ordered implementation sequences;
- current product/reference sources;
- an evidence/provenance note.

The article family is lazy-routed so body content does not enter the route-independent client bundle.

Current retained knowledge set:

1. Principles of Assessment and Rules of Evidence
2. Master Slides in Storyline
3. How to make Moodle show login first

Each resource independently earns indexability; there is no Blog index requirement and no publishing cadence implied by this set.

## 5. Landmark and search hardening

Deployed inspection of the first retained resource found a nested `<main>` landmark because `Layout` already supplies the page main and `AssessmentPrinciples` also used one.

That page root is now `<article>` instead.

The search architecture audit has been strengthened to require exactly one `<main>` landmark on every intentionally indexable route.

The search audit also now:

- verifies retained-knowledge body content and search-policy coverage one-to-one on the build side;
- keeps retained knowledge body content out of route-independent client policy code;
- handles conditional WordPress `/?p=` redirects separately from unconditional route redirects;
- rejects canonical-source collisions and redirect chains without falsely treating a conditional homepage query redirect as replacing `/`.

## 6. Live sitemap is a discovery inventory, not unquestioned truth

Further source inspection of the old `gh.com-react` estate found an important reliability problem.

The old sitemap generator:

- is a manually invoked `npm run sitemap` command, not part of `npm run build`;
- attempts to import a Vite/browser post registry from Node;
- falls back through source parsing and directory scanning;
- can ultimately derive post URLs from markdown filenames;
- does not reliably represent production publication status in that fallback path;
- generates `lastmod` from the sitemap build timestamp rather than a trustworthy page modification source.

The current public application also returns the temporary `Interim` experience rather than the full portfolio router, while Vercel rewrites all paths to `index.html`.

A deployed request to `/blog/scenario-writing-that-feels-real` therefore returns HTTP 200 with the generic root shell and root canonical metadata, not a distinct server-rendered article.

### Source-state classification of current sitemap articles

Source inspection now distinguishes the old sitemap article entries as follows.

**Surviving non-draft source:**

- `/blog/master-slides-in-storyline` — now rebuilt/preserved
- `/blog/ux-for-learning` — survives; quality/authority review still required
- `/blog/xapi-basics` — survives; technical/evidence-led rebuild still required

**Draft source advertised by the old sitemap:**

- `/blog/ai-patterns-elearning`
- `/blog/clean-design-elearning`
- `/blog/design-system`
- `/blog/storyline-tips-that-actually-help`
- `/blog/welcome`
- `/blog/xapi-isnt-scary`

The old production post registry filters `status: draft` when `PROD` is true, so these sitemap entries are not evidence of a healthy published article surface.

**No matching current source recovered:**

- `/blog/scenario-writing-that-feels-real`

The earlier assumption that `storyline-tips-that-actually-help` was also source-missing was incorrect and has been withdrawn; the file exists but is explicitly draft.

Migration rule therefore becomes:

> A legacy sitemap URL is discovery evidence. A destructive or rebuild decision requires route/source/search/backlink evidence appropriate to the risk.

Draft and source-missing sitemap entries remain protected as investigation items until first-party search/backlink evidence is available, but they are not automatic rebuild commitments.

## 7. Historical analytics property exists

The old production source contains GA4 measurement id:

`G-PXDLN9NVDG`

Automatic page-view collection is explicitly disabled in the base tag, indicating the previous app intended to control SPA page-view tracking itself.

This confirms that the `analyticsBaselineCaptured` launch dependency represents a real historical measurement property rather than an aspirational future setup.

No direct Google Analytics or Search Console connector is currently available in the installed/plugin catalogue, so the baseline cannot be exported autonomously from this environment.

## 8. Backlink data access

Semrush is connected, but backlink research remains unavailable because the account does not currently have sufficient API units.

This is an evidence-access constraint, not evidence that backlinks do not exist.

The migration ledger therefore continues to block destructive action where backlink/citation evidence could materially change the decision.

## 9. Core / More / Bore disposition

The historical design-system child `/work/elearning-design-system/core-more-bore` remains separated from the other visual/system foundations because it is a learning-design method rather than simply a design token or asset page.

Current web research did not establish a clear external provenance for the exact “Core / More / Bore” formulation.

It should therefore **not** be republished as a recognised industry framework without attribution.

Possible future dispositions remain:

- retain as clearly labelled Glenn/ISQ practice language, if first-hand evidence supports that framing;
- incorporate into a future Practice/Record discussion as an internal decision method;
- retire if first-party search/link evidence is negligible.

## 10. Qualification infrastructure and Vercel block

A GitHub Actions production-quality workflow has been added at:

`.github/workflows/quality.yml`

It runs Node 24, `npm ci`, then the repository's complete `npm run check` production gate on pushes and pull requests.

This is a durable independent quality channel, not a replacement for deployed-output verification.

The current autonomous GitHub App write path has not produced a visible Actions run through the available workflow-run connector, so no Actions pass is claimed yet.

The missing Vercel previews are now explained: GitHub reports the Vercel commit status as failure with `upgradeToPro=build-rate-limit` for the new Hobby project.

Therefore:

- latest branch changes are **not** treated as deployed qualification;
- the absence of previews is **not** treated as a code/build failure;
- no attempt has been made to promote or move the production domain;
- manual deploy tooling was rejected because the connector's runtime schema did not expose the required explicit preview/project/file inputs safely.

## 11. Current branch state and expected next qualified counts

The branch currently contains:

- THE RECORD explicit search policy;
- retained knowledge policy and renderer;
- three retained knowledge resources;
- two repaired inherited WordPress identities;
- live-sitemap and inherited-redirect cutover gates;
- one-main landmark qualification;
- GitHub production-quality workflow.

Expected next successful production build state:

- **23 intentional indexable canonicals**;
- **3 retained knowledge resources**;
- **1 explicitly noindexed Artefact**;
- **10 configured permanent redirect rules**, including two conditional WordPress query redirects;
- live-sitemap migration inventory: **7 launch-ready / 20 unresolved**;
- inherited WordPress inventory: **2 launch-ready / 26 unresolved**;
- inherited Portfolio inventory: **1 launch-ready / 2 unresolved**.

These counts are branch expectations, not deployed claims, until the Vercel rate-limit condition allows a current preview or another trusted CI result is available.

No production domain has been moved, no production deployment has been promoted, and `main` has not been merged.

## 12. Next autonomous sequence

1. Continue source-state classification of the inherited WordPress estate while preview builds are rate-limited.
2. Prefer recovering surviving first-hand/currentable material over recreating deleted legacy posts.
3. Keep draft, phantom and year-sensitive material in investigation unless first-party search/backlink evidence gives it independent value.
4. Reassess `/blog/ux-for-learning` and `/blog/xapi-basics` as the two strongest surviving non-draft sitemap resources after Master Slides.
5. Prefer consolidation over one-for-one Storyline article recreation where the historic intent overlaps the stronger retained production-system resource.
6. Keep design-system child consolidation blocked until the canonical ISQ Design System evidence architecture is defined rather than adding a fifth Project for migration convenience.
7. Export GA4, Search Console and Bing baselines before any destructive cutover decision once access is available.
8. Qualify the current branch and historical redirects on a new Vercel preview as soon as the project can build again.
9. Keep public cutover blocked until first-party search/analytics baselines and inherited authority decisions reach an acceptable launch state.
