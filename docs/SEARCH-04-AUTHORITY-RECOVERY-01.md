# Search 04 — Authority Recovery 01

**Date:** 24 August 2026  
**Branch:** `feat/record-production-integration-01`  
**Status:** In progress — implementation complete in branch; latest Master Slides preview qualification still pending Vercel Git pickup

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

`src/content/inherited-redirect-policy.js` now records these identities independently of the current live-sitemap inventory.

`scripts/migration-audit.mjs` now requires every launch-ready preserved WordPress identity to prove that:

- its final canonical destination is statically rendered;
- the destination is intentionally listed in the new sitemap;
- the original pretty permalink redirects directly to the final destination;
- the historical `/?p=<id>` URL redirects directly to the same destination;
- no intermediate legacy article is required.

A future `PUBLISH=1` build cannot pass while unresolved inherited article identities or inherited Portfolio rules remain.

## 2. Master Slides in Storyline — first inherited article recovery

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

Both historical source forms are configured to bypass intermediate legacy pages.

## 3. Retained knowledge now has a reusable article family

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

## 4. Landmark hardening

Deployed inspection of the first retained resource found a nested `<main>` landmark because `Layout` already supplies the page main and `AssessmentPrinciples` also used one.

That page root is now `<article>` instead.

The search architecture audit has been strengthened to require exactly one `<main>` landmark on every intentionally indexable route.

This converts a manual discovery into a regression guard for future retained knowledge.

## 5. Live sitemap is a discovery inventory, not unquestioned truth

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

Two current-sitemap slugs were also not found in the present markdown registry:

- `/blog/scenario-writing-that-feels-real`
- `/blog/storyline-tips-that-actually-help`

These remain migration investigation items because Search Console/backlink evidence is still unavailable, but they are **not automatic rebuild commitments**.

Migration rule therefore becomes:

> A legacy sitemap URL is discovery evidence. A destructive or rebuild decision requires route/source/search/backlink evidence appropriate to the risk.

## 6. Historical analytics property exists

The old production source contains GA4 measurement id:

`G-PXDLN9NVDG`

Automatic page-view collection is explicitly disabled in the base tag, indicating the previous app intended to control SPA page-view tracking itself.

This confirms that the `analyticsBaselineCaptured` launch dependency represents a real historical measurement property rather than an aspirational future setup.

No direct Google Analytics or Search Console connector is currently available in the installed/plugin catalogue, so the baseline cannot be exported autonomously from this environment.

## 7. Backlink data access

Semrush is connected, but backlink research remains unavailable because the account does not currently have sufficient API units.

This is an evidence-access constraint, not evidence that backlinks do not exist.

The migration ledger therefore continues to block destructive action where backlink/citation evidence could materially change the decision.

## 8. Core / More / Bore disposition

The historical design-system child `/work/elearning-design-system/core-more-bore` remains separated from the other visual/system foundations because it is a learning-design method rather than simply a design token or asset page.

Current web research did not establish a clear external provenance for the exact “Core / More / Bore” formulation.

It should therefore **not** be republished as a recognised industry framework without attribution.

Possible future dispositions remain:

- retain as clearly labelled Glenn/ISQ practice language, if first-hand evidence supports that framing;
- incorporate into a future Practice/Record discussion as an internal decision method;
- retire if first-party search/link evidence is negligible.

## 9. Current qualification state

The branch contains the complete Master Slides implementation and migration policy changes.

Expected next qualified build state:

- 22 intentional indexable canonicals;
- 2 retained knowledge resources;
- 1 explicitly noindexed Artefact;
- 7 configured permanent redirects, including one conditional WordPress query redirect;
- live-sitemap migration inventory: 7 launch-ready / 20 unresolved;
- inherited WordPress inventory: 1 launch-ready / 27 unresolved;
- inherited Portfolio inventory: 1 launch-ready / 2 unresolved.

**Important:** these expected counts are not yet claimed as deployed qualification because Vercel Git integration has not yet surfaced a deployment after commit `b1d0354d50ea8237200e2bf2bd838387d5585f7d`. The branch is ahead of the latest visible preview deployment.

No production domain has been moved, no production deployment has been promoted, and `main` has not been merged.

## 10. Next autonomous sequence

1. Qualify the Master Slides integration as soon as the branch preview appears in Vercel.
2. Verify both historical Master Slides redirects against deployed output.
3. Continue source recovery of the old Storyline/Moodle/xAPI estate.
4. Prefer consolidation over one-for-one article recreation where intent overlaps.
5. Keep AI/year-sensitive content in review unless it can be rebuilt into genuinely current first-hand work.
6. Keep design-system child consolidation blocked until the canonical ISQ Design System evidence architecture is defined rather than adding a fifth Project for migration convenience.
7. Keep public cutover blocked until first-party search/analytics baselines and inherited authority decisions reach an acceptable launch state.
