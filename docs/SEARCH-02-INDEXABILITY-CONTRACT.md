# Project / Record / Artefact Indexability Contract v1

**Date:** 24 August 2026  
**Workstream:** Search, Authority & Discoverability 02

## Governing principle

> A surface deserves an independently indexed URL only if it provides genuine standalone value to somebody entering directly from search or another external source.

Route existence, visual quality and inclusion in THE RECORD are not sufficient reasons to index a page.

## Required model change

Indexability must become explicit content data rather than an accidental consequence of route creation.

Recommended content model fields:

```js
search: {
  index: true | false,
  sitemap: true | false,
  canonical: '/canonical-path',
  directEntry: 'project' | 'record' | 'artefact' | 'supporting',
  reason: 'human-readable editorial/search rationale'
}
```

Rules:

- `index` must never default to `true` for Artefacts.
- `sitemap: true` requires `index: true`.
- all indexable pages must have a self-referencing canonical unless a deliberate equivalent is documented.
- the sitemap generator must consume these fields rather than blindly including every evidence URL.
- route generation and indexability remain separate concerns.

## Project contract

A Project **SHOULD INDEX** when all of the following are true:

1. It represents a real, distinct body of work.
2. Glenn's role is explicit and verified.
3. Organisation/client attribution is publishable.
4. It provides meaningful context beyond the child Records.
5. A direct entrant can understand the problem/body of work without navigating elsewhere first.
6. At least one substantial Record or equivalent evidence unit supports it, unless the Project itself is a complete historical evidence surface.
7. Title, description, H1 and visible copy describe the work accurately rather than being keyword-led.
8. The page has no unresolved placeholders that undermine public credibility.

A Project **SHOULD NOT INDEX** when it is:

- an empty container for one thin child page;
- a migration placeholder;
- a duplicate presentation of another Project;
- unpublished due to permission/evidence constraints;
- an internal taxonomy surface with no direct-entry value.

### Current four Projects

All four canonical Projects are suitable for indexation in principle:

- Wellbeing Studio 2027 — **INDEX**
- ISQ Connect & Learn — **INDEX**
- CASA Flight Examiner Rating — **INDEX**
- TAFE Queensland SkillsTech Pathways — **INDEX**

Their evidence boundaries and first-hand context make them legitimate standalone results.

## Record contract

A Record **SHOULD INDEX** when all of the following are true:

1. It centres on a consequential professional problem, decision, constraint or piece of making.
2. It is not merely a subheading extracted into a URL.
3. The opening identifies Project/organisation/context immediately for direct entrants.
4. It explains what happened, why it is worth examining and what Glenn did.
5. It contains a clear evidence boundary or equivalent factual discipline.
6. It connects to at least one Project and relevant evidence/relationship.
7. It supplies information gain that is not fully available on the Project page.
8. Its title is intelligible without relying on the breadcrumb trail.

A Record **SHOULD NOT INDEX** when it is:

- duplicated almost entirely on the Project page;
- a transitional implementation note with no enduring external value;
- an unverified claim container;
- too context-dependent to understand via direct entry.

### Current Records

The six canonical Records meet the architectural threshold for indexation, subject to final editorial/publication checks:

- WS contextual entry — **INDEX**
- WS connected service — **INDEX**
- WS RUOK production slice — **INDEX**; consider post-event update after 10 September, but current evidence boundary already prevents future-event claims
- ISQ concurrent migration — **INDEX**
- CASA examiner judgement — **INDEX**
- TAFE supporting conversation — **INDEX**

## Artefact contract

Artefacts have a stricter default.

**DEFAULT: NOINDEX / EXCLUDE FROM SITEMAP** until the Artefact passes an independent-value review.

An Artefact **MAY INDEX** only when all of the following are true:

1. The Artefact is interpretable without first reading the parent Record.
2. It has visible provenance: Project, Record, date/period and what the artefact is.
3. It explains what the visitor is looking at, not just displays an image/diagram.
4. It explains what the artefact proves and, where material, what it does not prove.
5. It contains unique evidence or explanation not duplicated by the Record.
6. It answers a plausible external question or inspection need.
7. Media has useful alt text/caption/transcript where applicable.
8. The page has sufficient substance to avoid functioning as a thin media wrapper.
9. The Artefact is safe/approved for public inspection.

An Artefact **MUST REMAIN EMBEDDED / NOINDEX** when it is:

- a single screenshot with a caption;
- a cropped detail whose meaning depends on the Record;
- a production checklist meaningful mainly to the project team;
- duplicated media already fully explained elsewhere;
- an internal implementation log without durable professional value;
- primarily decorative.

### Provisional review of current Artefacts

This is an editorial/search recommendation, not a claim that current pages fail direct-entry QA.

| Artefact | Initial indexability | Reason |
|---|---|---|
| WS Daily wellbeing journey | **REVIEW → likely INDEX** | Strong interaction/product evidence if the page explains the entry model, states and provenance independently. |
| WS Connected service relationship model | **INDEX** | Distinctive product-architecture evidence with standalone explanatory value. |
| WS RUOK production qualification map | **NOINDEX initially** | Valuable evidence inside the Record, but its implementation-history specificity makes independent search value weaker. Promote only if page carries substantial explanatory context. |
| ISQ Migration dependency map | **INDEX** | Directly visualises the core platform/content concurrency insight and can answer migration-intent visitors. |
| CASA Assessment reasoning sequence | **INDEX** | Strong, distinctive course/assessment evidence with a clear external subject and historical authority connection. |
| TAFE Facilitated exploration environment | **REVIEW → likely INDEX** | Unusual historical interaction evidence; index if direct-entry page fully explains facilitated use and recovered artefacts. |

## Retained standalone knowledge contract

A historical knowledge URL may remain indexed even though it is not Project → Record → Artefact when it has independent value that the evidence hierarchy does not replace.

**RETAIN / REBUILD AND INDEX** when:

- it has confirmed external citations/backlinks;
- it continues to answer a real question accurately;
- it is substantial and first-party;
- updating it will not misrepresent publication history;
- a Record is not a semantically equivalent successor.

Examples:

- `/principles-of-assessment-and-rules-of-evidence/` — **REBUILD + INDEX at same URL** because external citation is confirmed and the resource has standalone intent.
- technically current, genuinely useful Storyline/Moodle resources — retain selectively.

## Historical-page redirect contract

**301 REDIRECT** when:

- a clear equivalent/superior successor exists;
- the destination substantially satisfies the historical visitor intent;
- source and destination relation is documented in the migration ledger.

**DO NOT REDIRECT** when:

- the destination is merely the closest broad category;
- a project page is being used to absorb an unrelated technical article;
- Home/Practice would not answer the original purpose;
- content identity is unresolved.

## `noindex` contract

Use `noindex,follow` for live/addressable pages that should remain accessible during migration or as supporting experience but should not appear as independent results.

Suitable cases:

- migration-only legacy routes while their disposition is unresolved;
- supporting Artefact pages failing the independent-value threshold;
- utility/privacy surfaces if search appearance has no user value (policy choice, not mandatory);
- internal review surfaces on a publicly reachable deployment.

Do not use `noindex` as a substitute for returning the correct 404/410 on content intentionally removed.

## 404 / 410 contract

### 404

Use when:

- no legitimate successor exists;
- the URL was accidental/unknown or ordinary removed content;
- there is no particular value in signalling deliberate retirement.

### 410

Use selectively when:

- a known historical resource is intentionally and permanently retired;
- there is no semantic successor;
- a deliberate gone response improves migration clarity.

Examples: generic `/blog/welcome` is a reasonable 410 candidate.

## Sitemap contract

The sitemap must contain only canonical URLs intentionally offered for indexation.

**Include:**

- Home, Work, Practice, About (while retained), Contact if desired as search entry;
- indexable Projects;
- indexable Records;
- only Artefacts that pass the independent-value contract;
- retained standalone knowledge surfaces intentionally preserved.

**Exclude:**

- redirects;
- 404/410 URLs;
- `noindex` pages;
- migration-only legacy routes;
- non-canonical duplicates;
- embedded-only Artefacts.

## Direct-entry minimum contract

Every indexable evidence URL must visibly provide, without relying on navigation history:

1. Glenn Hammond attribution / site identity.
2. Project or source context.
3. Organisation where publishable.
4. Date/period/state where relevant.
5. Clear page purpose/H1.
6. Glenn's role or relationship to the work.
7. Evidence/provenance context.
8. Route upward/back to Project and sideways to relevant Practice/related work.
9. A meaningful next movement for a professional visitor.

## Technical acceptance tests

The build/verification harness should fail if:

- an indexable page lacks canonical;
- a `noindex` page is in sitemap;
- a redirect source is in sitemap;
- an indexable Artefact lacks Project/Record context;
- two indexable routes claim the same canonical;
- a canonical points to a redirect/non-200 destination;
- staging/preview host is indexable;
- an indexable route renders only an app shell in built HTML;
- page title/H1 are missing;
- structured data references a non-canonical URL.

## Immediate architectural conclusion

The current `postbuild.mjs` behaviour — adding all Projects, Records and Artefacts to the sitemap — must change before production hardens. Indexability is editorial evidence architecture and must be represented in `recordContent`, validated, then consumed by sitemap/meta generation.