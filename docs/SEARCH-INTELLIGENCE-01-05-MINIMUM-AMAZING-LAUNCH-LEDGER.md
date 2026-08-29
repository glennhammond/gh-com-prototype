# Search Intelligence 01–05 — Minimum Amazing Search Launch Ledger

**Status:** Decision-complete / search cutover HOLD  
**Date:** 26 August 2026  
**Repository:** `glennhammond/gh-com-prototype`  
**Branch:** `feat/visual-identity-03-production-candidate-01`  
**PR:** #7 — draft; staged against `feat/record-production-integration-01`  

This document is the launch-scale search, authority-recovery and migration authority for Minimum Amazing Production Release 01. It qualifies and reconciles the existing Search 02–05 architecture against the 26 August 2026 Ahrefs investigation and the first-party GSC/GA4 work already completed.

It does **not** reopen the product architecture, public visual identity or Project → Record → Artefact evidence model.

---

## 1. Executive decision

The search architecture is **decision-complete**. Further broad keyword or backlink research is not justified before launch.

The site does not have a large hidden SEO estate that requires one-for-one recreation. Historical organic visibility was real but modest, while the currently reported referring-domain total is heavily polluted by recent spam. The valuable signals are narrower and more useful:

- historical third-party provenance from Articulate / E-Learning Heroes around Storyline work;
- a current legitimate Remote Reviewer reference identifying Glenn as an eLearning Specialist;
- meaningful current GSC visibility for the ISQ eLearning Design System, CASA Flight Examiner Rating, Home, About, Services/Practice intent and Master Slides in Storyline;
- historical Australian visibility for `elearning Brisbane`, eLearning developer/designer terms and Principles of Assessment / Rules of Evidence;
- three retained knowledge resources already justified by first-party evidence, external citation or durable professional value.

The correct launch strategy is therefore:

> **Protect a small number of real authority assets, strengthen Glenn's person/entity signals, preserve strong semantic successors, and explicitly retire weak legacy content rather than turning the site into an SEO-content estate.**

No conventional blog programme, location-page programme, FAQ farm or keyword landing-page set is required for Minimum Amazing.

---

# Search Intelligence 01 — Ground Zero & Authority Recovery

## 2. Ahrefs authority baseline — 26 August 2026

### Domain authority history

Historically, glennhammond.com carried low but real Ahrefs Domain Rating, broadly in the 0–4 range for most of the available history. A sharp 2026 rise in reported DR/referring domains is not a credible measure of professional authority.

The referring-domain history increased from tens of domains to approximately 440 by August 2026. Inspection shows that this rise is dominated by obvious low-quality/spam/link-network domains. It must not be used as a KPI or as evidence that the site currently has a large healthy backlink graph.

### Meaningful historical/current referring sources

**Articulate / E-Learning Heroes**

- Historically the strongest relevant third-party source discovered.
- Ahrefs recorded approximately 95 historical links from Articulate, including many dofollow links into Storyline challenge outputs.
- Those links are now recorded as lost; restoring the old raw challenge URLs would not automatically restore source-side links that no longer exist.
- The value is therefore primarily **professional provenance and authority evidence**, with selective post-launch reclamation potential.

**Remote Reviewer**

- Current legitimate reference to glennhammond.com.
- Anchor/context identifies Glenn as an **eLearning Specialist**.
- This is a materially more useful entity/authority signal than the large volume of recent spam domains.

**SlideShare**

- Historical profile/root-domain reference found, now lost because the source page is unavailable.
- Possible low-effort post-launch reclamation if the old profile remains under Glenn's control.

### Historical organic performance

Ahrefs historical estimates show modest but genuine organic acquisition, peaking around 2019 at roughly 20–30 estimated visits/month in stronger months. Organic visibility declined substantially after 2020 and was effectively negligible from 2022 onward.

As of 26 August 2026, Ahrefs reports approximately:

- **0 current organic keywords** for Australia/global in the relevant Site Explorer snapshot;
- **0 estimated organic traffic**;
- **0 tracked AI citations** to glennhammond.com across the Ahrefs-supported major AI-answer surfaces in Australia.

These zeros are useful baselines, not reasons for aggressive SEO intervention.

### Historical ranking signals worth preserving conceptually

Historical Ahrefs data included:

- `glenn hammond` — historically strong branded visibility in the United States snapshot;
- `elearning brisbane` — historically visible in Australia;
- `elearning consultant`, `elearning designer`, `elearning developer` — historical association with Glenn/root domain;
- `goodstart institute` / `goodstart online learning portal` — historical Goodstart project association;
- `principles of assessment and rules of evidence` — historical Australian top-10 visibility;
- Storyline/E-Learning Heroes challenge terms and project references.

This is sufficient to prove that the domain once carried useful professional associations, but not enough to justify rebuilding the old WordPress estate one page at a time.

---

## 3. Legacy authority classifications

### Preserve / recover now

| Territory / URL family | Decision | Reason |
| --- | --- | --- |
| Home / person identity | **RETAIN** | Current and historical branded/professional visibility; permanent entity home. |
| `/about` | **RETAIN** | First-party GSC shows meaningful person/about impressions; strong entity role. |
| `/services` | **DIRECT REDIRECT → `/practice`** | Practice is the genuine semantic successor to commercial/capability intent. |
| CASA Flight Examiner Rating | **RETAIN / exact semantic redirect where old flat slug exists** | Current GSC visibility and strong professional association. |
| ISQ eLearning Design System | **NEW CANONICAL EQUIVALENT REQUIRED** | Current GSC signal plus unusually strong real evidence; existing nine-page interim estate should consolidate into one stronger Project. |
| Principles of Assessment and Rules of Evidence | **RETAIN / REBUILD — already justified** | Historical Australian ranking, external citation evidence and current reconstructed resource. |
| Master Slides in Storyline | **RETAIN / REBUILD — already justified** | Strongest retained-knowledge search validation and real first-hand Storyline production knowledge. |
| Moodle login-first article | **RETAIN / REBUILD — already justified** | Historical source/redirect identity with durable implementation intent; current resource is updated rather than stale. |

### Do not recover for launch

| Territory / URL family | Decision | Reason |
| --- | --- | --- |
| Understanding by Design coursework | **LEGITIMATE RETIREMENT** | GSC showed hundreds of low-position impressions but no clicks; visibility disappeared by January 2026; no meaningful backlink evidence. |
| Andragogy | **LEGITIMATE RETIREMENT** | Search demand exists, but independent Glenn authority/legacy equity does not justify a page. |
| Cognitivism | **LEGITIMATE RETIREMENT** | Same as above. |
| Perceptual / generic learning styles | **LEGITIMATE RETIREMENT** | Weak current professional fit and no meaningful authority requirement; generic learning-styles territory is also scientifically problematic. |
| Generic AI-in-eLearning list articles | **LEGITIMATE RETIREMENT** | Interim/generic material ages quickly; no reason to preserve merely because a URL existed. |
| Generic xAPI explainers | **RETIRE / future evidence-led replacement only** | Glenn now has stronger first-hand implementation evidence; do not inherit generic explainer copy as authority. |
| Most old Storyline tips/layout posts | **RETIRE / selective future consolidation** | Historical craft evidence can inform a smaller first-hand resource set, but one-for-one page recreation is not justified. |
| Obsolete Web/Facebook utility articles | **410/404** | No modern professional successor and no strategic authority value. |

### Historical evidence worth revisiting after launch

**Goodstart Institute / early-learning project**

Ahrefs found one of the stronger historic project-link profiles relative to the small domain, and old search visibility around Goodstart terms. Most recorded backlinks are now lost. The project is a **Tier 2 evidence-recovery candidate**, not a Minimum Amazing launch blocker.

**Articulate / E-Learning Heroes challenge work**

Several Storyline challenge outputs historically received multiple Articulate links. Because the source-side links are now mostly gone, raw URL restoration is not a Day-0 authority requirement. The stronger post-launch move is to recover a selective set as attributable Artefacts or a compact historical Storyline evidence collection, then repair Articulate/profile links where possible.

---

# Search Intelligence 02 — Practice Demand & Professional Entity Landscape

## 4. Selective Australian demand evidence

The following values are directional Ahrefs Australia monthly-volume snapshots from 26 August 2026. They are not traffic forecasts.

| Territory | Approx. AU volume | Minimum Amazing decision |
| --- | ---: | --- |
| `instructional designer` | 250 | Use naturally in Practice/About/evidence where accurate. **No dedicated keyword page.** |
| `learning designer` | 150 | Use naturally in Practice/evidence. **No dedicated keyword page.** |
| `elearning Brisbane` | 150 | Important historical/local association. Support through Home/About/Practice entity language, not a location page. |
| `digital learning consultant` | 80 | Useful supporting Practice language where accurate. |
| `learning experience designer` | 70 | Supporting professional terminology. |
| `digital learning designer` | 20 | Supporting professional terminology. |
| `learning designer Brisbane` | 10 | Local supporting query; no separate page. |
| `Articulate Storyline` | 250 | Strong technology territory, carried by real Work + Retained Knowledge. |
| `Rise 360` | 400 | Strong technology territory, best supported through ISQ Design System + Practice rather than a keyword page. |
| `xAPI` | 100 | Future evidence-led authority territory; no generic launch explainer. |
| `learning analytics` | 150 | Future evidence-led authority territory tied to real implementation/measurement. |
| `information architecture` | 400 | Broad practice discipline; use in evidence and Practice, not as an isolated SEO service page. |
| `product strategy` | 200 | Broad practice discipline; support with real project evidence. |
| `experience design` | 200 | Broad practice discipline; support with real project evidence. |
| `digital product design` | 150 | Broad practice discipline; support with real project evidence. |
| `experience architecture` | 10 | Valid Glenn vocabulary but weak search demand; retain editorially, do not build a search page around it. |
| `andragogy` | 450 | Search demand alone is insufficient; retire legacy coursework surface. |
| `principles of assessment` | 200 | Stronger fit because real historical ranking/citation evidence exists. |
| `cognitivism` | 150 | Search demand alone is insufficient; retire legacy coursework surface. |
| `Understanding by Design` | 100 | Search demand alone is insufficient; retire legacy coursework surface. |

### Entity conclusion

The strongest search-language bridge between Glenn's historic reputation and current broader practice is not a new category page. It is a clearer identity layer:

> **Glenn Hammond — Digital Learning & Experience Designer, Brisbane / Australia**

with visible and metadata-supported evidence that the practice also spans digital products, systems, platforms, information architecture, product strategy and technical production.

Historical role labels such as **eLearning Specialist** should remain wherever they truthfully describe past work or third-party references. They should not be erased merely to force contemporary consistency.

---

# Search Intelligence 03 — Minimum Amazing Search Architecture Reconciliation

## 5. Architecture verdict

The existing architecture survives search qualification.

Do **not** add dedicated launch pages for:

- instructional designer;
- learning designer;
- xAPI;
- learning analytics;
- product strategy;
- experience architecture;
- information architecture;
- Brisbane eLearning;
- generic Rise/Storyline services.

The launch architecture should continue to let:

- **Home** establish Glenn and the breadth of practice;
- **Practice** explain what Glenn does and how the work connects;
- **Work** expose the body of evidence;
- **Projects** own substantial professional territories;
- **Records** own independently useful decisions/problems/systems;
- **Artefacts** index only where they create genuine standalone information gain;
- **Retained Knowledge** preserve exceptional durable resources outside the evidence hierarchy;
- **About** own person/entity depth;
- **Contact** support the next useful movement.

This is materially stronger than a keyword landing-page architecture because it gives visitors and machines attributable first-hand information rather than interchangeable service copy.

---

# 6. URL Performance & Launch Search Ledger

The title/description language below is **directional authority**, not permission to overwrite stronger qualified editorial copy mechanically.

## Core identity and navigation

| Canonical | Search/entity purpose | Primary topic / intent | Title direction | H1 role | Internal-link role | Schema | Index | Legacy relationship | Launch status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Permanent identity + broad practice entry | Glenn Hammond; digital learning; products; experience; Brisbane/Australia | **Glenn Hammond — digital learning, products & experience design** | Preserve qualified visible positioning; do not keyword-stuff | Distribute authority into Work, Practice, About and key evidence | `Person` + `WebSite`/`WebPage` where accurate; verified `sameAs` only | Yes | Root remains root | **READY — metadata refinement recommended** |
| `/work` | Body-of-work index | Glenn Hammond work/projects/evidence | **Work — digital products, learning & systems | Glenn Hammond** | `Work` | Primary hub to Projects; avoid thin tag/category duplicates | `CollectionPage`/`WebPage` only if implemented accurately | Yes | `/portfolio` → `/work` | **READY** |
| `/practice` | Capability/practice successor to Services | digital learning, product/experience design, systems, platforms | **Practice — digital learning, product & experience design | Glenn Hammond** | Preserve editorial Practice heading | Link each practice claim to real Project/Record evidence | `WebPage`; no fake Service schema | Yes | `/services` → `/practice` | **READY** |
| `/about` | Person/entity depth and professional history | Glenn Hammond; Digital Learning & Experience Designer; Brisbane | **About Glenn Hammond — Digital Learning & Experience Designer** | About Glenn Hammond / qualified editorial equivalent | Reinforce Projects, organisations, role history and Contact | `Person` + `AboutPage`, accurate organisations/`sameAs` | Yes | `/profile` → `/about` | **READY — title refinement recommended** |
| `/contact` | Conversion/contact endpoint | contact Glenn Hammond | **Contact Glenn Hammond** | Contact | Receive contextual links from relevant Work/Practice pages | `ContactPage` | Yes | Existing canonical | **READY** |
| `/privacy` | Supporting legal surface | privacy | Plain descriptive title | Privacy | Footer/support only | `WebPage` | Prefer noindex unless legal/search need says otherwise | None | **SUPPORTING** |

## Canonical Projects

| Canonical | Primary evidence/topic | Likely search/discovery role | Index | Legacy relationship | Launch status |
| --- | --- | --- | --- | --- | --- |
| `/work/wellbeing-studio` | Digital product/service experience, wellbeing platform/service architecture | Product/experience/service evidence | Yes | Historical CYA website route requires deliberate disposition | **READY** |
| `/work/connect-and-learn` | Moodle platform migration + concurrent digital-learning redevelopment | Digital learning, Moodle, platform/content migration | Yes | Existing current Project | **READY** |
| `/work/casa/flight-examiner-rating` | Regulated learning and assessment design | CASA, assessment design, regulated digital learning | Yes | Old flat CASA FERC URL redirects here | **READY** |
| `/work/tafe-pathways` | Facilitated digital interaction / careers exploration | Historical interaction/learning design evidence | Yes | Historical evidence territory | **READY** |
| `/work/isq-elearning-design-system` | Learning design systems, Rise implementation, accessibility, governance, reusable components | High-value current professional authority territory | **YES — promote into canonical search policy** | Consolidate current `/work/elearning-design-system/*`, old portfolio DS and applicable DS article | **BLOCKER: CANONICALISE + INDEX + REDIRECT** |

## Current canonical Records and Artefacts

Existing indexability policy is retained because each indexed child has a distinct direct-entry argument. No keyword-cannibalisation problem was identified that justifies flattening the hierarchy.

**Records — keep indexed**

- `/work/wellbeing-studio/contextual-entry`
- `/work/wellbeing-studio/connected-service`
- `/work/wellbeing-studio/ruok-production-slice`
- `/work/connect-and-learn/concurrent-migration`
- `/work/casa/flight-examiner-rating/examiner-judgement`
- `/work/tafe-pathways/supporting-conversation`

**Artefacts — keep indexed**

- `/work/wellbeing-studio/contextual-entry/daily-wellbeing-journey`
- `/work/wellbeing-studio/connected-service/relationship-model`
- `/work/connect-and-learn/concurrent-migration/dependency-map`
- `/work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning`
- `/work/tafe-pathways/supporting-conversation/exploration-environment`

**Supporting Artefact — keep noindex**

- `/work/wellbeing-studio/ruok-production-slice/qualification-map`

Search inclusion remains governed by the standalone-value test:

> A deep surface indexes only when a person arriving directly can understand what it is, who made it, why it matters, its parent context and what useful movement comes next.

## Retained Knowledge

| Canonical | Purpose | Index | Launch status |
| --- | --- | --- | --- |
| `/principles-of-assessment-and-rules-of-evidence` | Durable VET assessment resource rebuilt against current standards; citation/history preservation | Yes | **READY** |
| `/blog/master-slides-in-storyline` | First-hand Storyline production/system guidance with demonstrated search value | Yes | **READY** |
| `/blog/how-to-set-moodles-login-page-as-the-sites-landing-page` | Historical Moodle implementation intent rebuilt for current behaviour | Yes | **READY** |

A conventional `/blog` index is **not required** merely because these resources use historical `/blog/` URLs.

---

# Search Intelligence 04 — URL / Redirect / Metadata Launch Manifest

## 7. High-priority exact redirects

### Existing semantic redirects to preserve

- `/services` → `/practice`
- `/profile` → `/about`
- `/portfolio` → `/work`
- historical CASA Flight Examiner Rating flat route → `/work/casa/flight-examiner-rating`
- Master Slides historical WordPress permalink/query forms → `/blog/master-slides-in-storyline`
- Moodle historical permalink/query forms → `/blog/how-to-set-moodles-login-page-as-the-sites-landing-page`

### ISQ eLearning Design System consolidation — required before cutover

The following currently live/search-visible estate should consolidate into the stronger canonical Project unless a child is later proven to deserve its own standalone Record/Artefact:

- `/work/elearning-design-system/overview`
- `/work/elearning-design-system/atomic-design`
- `/work/elearning-design-system/asset-register`
- `/work/elearning-design-system/colours`
- `/work/elearning-design-system/core-more-bore`
- `/work/elearning-design-system/course-structure`
- `/work/elearning-design-system/images-icons`
- `/work/elearning-design-system/storyline`
- `/work/elearning-design-system/typography`
- `/portfolio/elearning-design-system`
- `/blog/design-system` **only after verifying that the current article's dominant intent is the same design-system body of work**

Default destination:

`/work/isq-elearning-design-system`

This is a strong semantic consolidation because the canonical Project already contains the underlying real system, implementation, accessibility and governance evidence. It avoids preserving nine thin/overlapping search surfaces.

## 8. Explicit retirement policy

Do not use blanket redirects to Home or Practice.

Where no genuine semantic successor exists, use an intentional 404/410 according to the migration implementation contract.

Launch-retirement candidates include:

- old Understanding by Design coursework;
- Andragogy coursework;
- Cognitivism coursework;
- generic/perceptual learning-styles coursework;
- generic AI-in-eLearning list articles;
- stale AI trend posts;
- generic tool-list articles without durable evidence;
- obsolete Facebook/Web utility posts;
- generic Storyline layout/tips pages that have no current independent authority evidence;
- generic xAPI explainer pages that would compete with stronger future first-hand implementation material;
- `hello-world` / generic welcome content.

The current `Moving-from-Wordpress-to-React` interim article has recent GSC visibility (66 impressions, 1 click in the captured evidence) but is AI-assisted interim editorial rather than inherited authority. It is **not a launch-preservation requirement**. If it survives later, it should be rebuilt as a genuinely first-hand account of this migration rather than kept as generic commentary.

## 9. Historical project/artefact exceptions

### Goodstart

Do not redirect historical Goodstart project URLs generically to Work/Home. If an exact modern Project is not ready for launch, allow the historical route to retire deliberately and place Goodstart in the Tier 2 recovery backlog. A later authentic Project can be published on its own merits.

### Articulate challenge files

Do not restore raw historical Storyline exports solely because they once received Articulate links. Source-side links are largely lost. Selective recovery should happen post-launch as attributable evidence, with profile/citation reclamation where practical.

### Historical image/media URLs

Redirect an old asset URL only where the new target is the same or an unmistakably equivalent asset/context. Otherwise allow it to disappear rather than redirecting an image request to a generic page.

---

## 10. Metadata and entity refinements before launch

### Home

Keep the visible positioning intact. Search metadata should be slightly more explicit than the editorial hero.

Recommended direction:

- Title: `Glenn Hammond — digital learning, products & experience design`
- Description: identify Glenn as Brisbane-based / working Australia-wide and connect digital learning, digital products, experience, platforms and systems.

Do not turn the title into a list of every capability.

### About

Current generic `About | Glenn Hammond` undersells the strongest person/entity page.

Recommended direction:

- Title: `About Glenn Hammond — Digital Learning & Experience Designer`
- Description: retain the longer-practice context, Brisbane/Australia and substantive digital-learning/product/platform background.

### Practice

Use professional language people actually use — instructional design, learning design, digital learning, product/experience design, platforms, systems — inside coherent prose and evidence relationships. Do not repeat keyword variants mechanically.

### Structured data

Use only accurate structures:

- `Person` for Glenn, with verified `sameAs` only;
- `WebSite` / `WebPage` / `AboutPage` / `ContactPage` as appropriate;
- `CreativeWork`-family semantics for attributable Projects/Records/Artefacts only where the implementation accurately describes them;
- `Article` for genuine retained authored knowledge where dates/authorship/provenance are correct;
- `BreadcrumbList` for nested evidence relationships.

Do not add FAQ, Service or other schema merely because a type exists.

---

# 11. Internal-link architecture

Minimum Amazing should deliberately reinforce these relationships:

- Home → Work / Practice / About / selected flagship Projects;
- Practice claim → strongest Project/Record proving that claim;
- Project → related Record/Artefact;
- Record/Artefact → parent context + adjacent related evidence;
- ISQ Design System ↔ Connect & Learn where the relationship is genuine;
- Master Slides ↔ CASA/ISQ Storyline production-system evidence where relevant;
- Principles of Assessment ↔ CASA assessment evidence only where the relationship is editorially meaningful, not for link sculpting;
- About → organisations/projects that establish identity/provenance;
- relevant Work/Practice → Contact as the next human movement.

The goal is semantic clarity and visitor usefulness, not PageRank manipulation.

---

# Search Intelligence 05 — Minimum Amazing Search Production Gate

## 12. Measurement baseline

### Pre-launch evidence now available

**Google Search Console**

First-party capture has already been completed across approximately 16 months, three months and 28 days for Pages and Queries. The property-level 16-month capture recorded:

- **21 clicks**
- **2,287 impressions**

This baseline is sufficient for migration control and should be recorded as **captured/analysed**.

**GA4**

The historical GA4 property must be preserved. The recent Landing Page report was materially unreliable for migration analysis (`(not set)` dominating the report, implausibly low engagement). Record this as:

> **baseline captured, data-quality limited — do not use landing-page history as primary migration evidence**

The launch requirement is to verify clean page-view and meaningful contact/conversion behaviour on Day 0, not to delay the site attempting to manufacture historical GA4 precision that the property does not contain.

**Bing Webmaster Tools**

A completed useful Bing baseline is not currently available in the evidence set. This is an **evidence gap**, but not a Minimum Amazing launch blocker. Capture Day-0/early-crawl Bing evidence when authenticated access is practical.

**Ahrefs — 26 August 2026**

Record as baseline:

- current meaningful organic visibility: effectively zero in the captured Site Explorer snapshot;
- current AI citation count in Australia: zero across the tracked major surfaces;
- referring-domain count is spam-contaminated and must not be used raw as a success KPI;
- meaningful authority should be tracked as **credible referring domains / recovered relevant citations / linked canonical pages**, not total RD count.

## 13. Day 0 / 7 / 14 / 30 measurement contract

### Day 0 — launch integrity

Verify:

- production canonical domain and HTTPS;
- robots and sitemap availability;
- exact sitemap membership against search policy;
- canonical tags;
- index/noindex contract;
- priority 301s and explicit retirement responses;
- no redirect chains;
- analytics page-view operation and contact/conversion event where implemented;
- GSC property remains verified;
- no staging/preview indexation leakage.

### Day 7 — early crawl

Inspect:

- discovered/indexed canonical URLs;
- crawl/index errors;
- old high-priority URLs and redirect destinations;
- new impressions by canonical page;
- branded queries and obvious entity associations;
- any unexpected duplicate/soft-404 patterns.

### Day 14 — initial learning

Inspect:

- branded vs non-branded query breadth;
- whether Home/About/Practice/Work are receiving appropriate intent;
- whether the ISQ Design System canonical has inherited relevant visibility;
- old-URL impressions/clicks and redirect behaviour;
- Project/Record/Artefact pages beginning to acquire relevant impressions;
- contact behaviour quality rather than raw traffic alone.

### Day 30 — first meaningful review

Compare against baseline:

- indexed canonical coverage;
- query breadth and topic association;
- impressions/clicks/CTR by meaningful page family;
- branded entity visibility;
- credible referring domains and reclaimed citations;
- pages attracting relevant discovery;
- AI citation count as a contextual metric only;
- meaningful contact/conversion movement.

Do not interpret low first-month traffic as failure if indexing and query association are moving in the correct direction.

---

# 14. Selective authority/content backlog

## Tier 1 — strongest near-term authority work

1. **ISQ eLearning Design System canonical Project** — pre-launch because current search intent must be preserved.
2. **Storyline production-system evidence** — strengthen relationships between Master Slides, CASA and ISQ work rather than creating multiple generic Storyline articles.
3. **First-hand xAPI / learning analytics evidence** — publish only when current implementation, governance and measurement limits can be shown from real work.

## Tier 2 — historical recovery

1. **Selected Articulate / E-Learning Heroes evidence** — recover a small high-quality set, then repair editable profile/citation links where practical.
2. **Goodstart project** — reconstruct when source evidence can support a strong modern Project; historical SEO alone does not force launch inclusion.
3. **SlideShare/profile reclamation** — low-effort if Glenn still controls the profile.

## Tier 3 — post-launch editorial opportunities

- a first-hand WordPress → React/static-generation migration account based on this real migration;
- evidence-led Storyline vs Rise decision writing based on actual production constraints;
- xAPI / LRS / learning analytics implementation notes grounded in current systems;
- product/experience architecture essays only where working artefacts produce original information gain.

Do not schedule generic weekly content.

---

# 15. Authority & entity backlog

Prioritise:

- consistent Glenn Hammond identity across glennhammond.com, LinkedIn, GitHub and legitimate profiles;
- Brisbane/Australia disambiguation where appropriate;
- contemporary identity language such as **Digital Learning & Experience Designer** while preserving truthful historic `eLearning Specialist` role references;
- verified organisation/project relationships;
- Articulate profile/citation repair where editable;
- SlideShare/profile repair where editable;
- maintaining legitimate current references such as Remote Reviewer;
- parallel Google Business Profile recovery as a separate local/entity workstream.

Do not pursue paid links, mass directories, link swaps, automated guest posts or reputation-manipulation tactics.

---

# 16. SEARCH LAUNCH VERDICT

## HOLD

The **strategy and search architecture are complete**. The HOLD is implementation-only and should not trigger another research programme.

### Smallest search-specific blocker list

#### 1. ISQ eLearning Design System canonicalisation

Before cutover:

- promote `/work/isq-elearning-design-system` into the canonical search/indexability policy;
- ensure its factual/project evidence is qualified for publication;
- include it in sitemap/internal-link authority;
- permanently redirect the nine current `/work/elearning-design-system/*` pages and the old portfolio identity to the canonical Project, subject to final exact semantic validation;
- remove duplicate/thin competing search surfaces.

#### 2. Final migration-manifest implementation + cutover audit

Before cutover:

- turn the remaining inherited/current legacy estate into explicit source-by-source 301, 404 or 410 decisions;
- preserve only strong semantic successors;
- retire weak generic/coursework/obsolete pages rather than routing them to Home/Practice;
- eliminate broad wildcard/soft-404 behaviour;
- update evidence dependencies to reflect that GSC and historical authority/citation work are complete, GA4 is captured but data-quality limited, and Bing is a documented non-blocking evidence gap;
- rerun the production search + migration cutover audits with `PUBLISH=1` until green.

Once those two items are complete, **no additional broad SEO research is required for Minimum Amazing launch**. The search gate should move to **PASS** if the existing production audit remains green.

---

## 17. Boundary with the wider release gate

This SEARCH HOLD is not the same as the overall PR/release decision.

PR #7 currently carries separate human/editorial/factual review gates. Those remain governed by the production workstream. Search Intelligence does not reopen Visual Identity 04 and does not convert unresolved factual placeholders into SEO tasks.

The next search action is therefore implementation, not research.
