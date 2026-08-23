# glennhammond.com URL Migration & Search Equity Ledger v1

**Date:** 24 August 2026  
**Workstream:** Search, Authority & Discoverability 02  
**Status:** Canonical decision ledger for public cutover planning  
**Branch:** `feat/record-production-integration-01`  

This document upgrades `docs/SEO-MIGRATION.md` against the now-settled THE RECORD architecture. The 18 August document remains historical evidence; this ledger governs cutover decisions unless later first-party Search Console, analytics or backlink evidence overturns a row.

## Governing rules

1. Project → Record → Artefact remains canonical.
2. A redirect is allowed only when the destination substantially satisfies the source intent.
3. Do not redirect unrelated historical URLs to Home or Practice simply to suppress 404s.
4. External citations and backlinks are evidence assets even when the source page is old.
5. Standalone knowledge resources may survive outside THE RECORD when they have independent utility.
6. Unknown search performance is an **EVIDENCE GAP**, not permission to delete.
7. Redirects should point directly to final destinations and remain in place for at least one year; indefinite retention is preferable for meaningful inbound links.

## Evidence snapshot

- The current live root has produced a JavaScript-shell response to one non-browser crawler, while search results demonstrate that rendered homepage content can nevertheless be indexed. The production SSG direction therefore remains correct and should be preserved.
- A third-party Goodstart portal reference still links to `/portfolio/goodstart-institute-early-learning/` and describes the historical My Portal project.
- A clinical-supervision teaching PDF from International Islamic University Malaysia directly cites `/principles-of-assessment-and-rules-of-evidence/`.
- The existing repository manifest records that `/work/elearning-design-system/typography` is indexed and should not be removed without performance review.
- The 2024 Independent Schools Queensland annual report externally identifies Glenn Hammond as eLearning Specialist, strengthening the Glenn ↔ ISQ entity relationship.

## Canonical new evidence field

### Projects

- `/work/wellbeing-studio`
- `/work/connect-and-learn`
- `/work/casa/flight-examiner-rating`
- `/work/tafe-pathways`

### Records

- `/work/wellbeing-studio/contextual-entry`
- `/work/wellbeing-studio/connected-service`
- `/work/wellbeing-studio/ruok-production-slice`
- `/work/connect-and-learn/concurrent-migration`
- `/work/casa/flight-examiner-rating/examiner-judgement`
- `/work/tafe-pathways/supporting-conversation`

### Artefacts

- `/work/wellbeing-studio/contextual-entry/daily-wellbeing-journey`
- `/work/wellbeing-studio/connected-service/relationship-model`
- `/work/wellbeing-studio/ruok-production-slice/qualification-map`
- `/work/connect-and-learn/concurrent-migration/dependency-map`
- `/work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning`
- `/work/tafe-pathways/supporting-conversation/exploration-environment`

## Migration ledger

| Source / current URL | Authority/search evidence | New relationship | Primary disposition | Destination | Semantic match | Cutover decision / risk |
|---|---|---|---|---|---|---|
| `/` | Current branded search surface | Home | **RETAIN** | `/` | Strong | Preserve canonical root. SSG output must contain meaningful HTML without requiring JS execution. |
| `/work` | Canonical work index | Work | **RETAIN** | `/work` | Strong | Keep as evidence index; no parallel `/portfolio`. |
| `/practice` | New canonical practice interpretation | Practice | **RETAIN** | `/practice` | Strong | Practice must be evidence-led, not a keyword/services dump. |
| `/contact` | Supporting commercial route | Contact | **RETAIN** | `/contact` | Strong | Preserve. |
| `/about` | Earlier migration manifest records strong search visibility | About / entity | **RETAIN** | `/about` | Strong | Do not remove before current GSC landing-page evidence is exported. It may later be consolidated, but not at launch. |
| `/profile/` | Historical identity route | About / entity | **301 REDIRECT** | `/about` | Strong | Direct redirect. |
| `/portfolio/` | Historical portfolio index | Work | **301 REDIRECT** | `/work` | Strong | Direct redirect; do not recreate Portfolio taxonomy. |
| `/services` | Historical services index | Practice | **301 REDIRECT** | `/practice` | Strong | Appropriate if Practice visibly explains current capability. |
| `/consultation-and-strategy/` | Historical service | Practice | **CONSOLIDATE** | `/practice` | Acceptable | Practice must include evidence-backed strategy/architecture capability before redirect. |
| `/consultancy/` | Historical service | Practice | **CONSOLIDATE** | `/practice` | Acceptable | Avoid generic consultancy copy. |
| `/elearning-design-and-development/` | Historical service | Practice | **CONSOLIDATE** | `/practice` | Acceptable | Preserve concepts through visible practice/evidence links. |
| `/web-courses/` | Historical service | Practice | **CONSOLIDATE** | `/practice` | Acceptable | Do not create a thin replacement. |
| `/elearning/implementation-analytics/` | Historical service/topic | Practice / emerging measurement evidence | **CONSOLIDATE** | `/practice` | Weak → acceptable only after content change | **BLOCKED:** Practice must contain a real evidence-backed implementation/measurement section first. |
| `/services/xapi-analytics` | Current/legacy service route; xAPI appears in positioning but published Record evidence is still incomplete | Practice / future Record | **CONSOLIDATE** | `/practice` only when equivalent section exists | Weak today | Remove unconditional redirect until semantic equivalence is established. Do not create a thin xAPI landing page. |
| `/services/rise-design-systems` | Addressable legacy service page | Practice | **CONSOLIDATE** | `/practice` | Acceptable | Practice should link to production-system/design-system evidence. |
| `/services/storyline-development` | Addressable legacy service page | Practice | **CONSOLIDATE** | `/practice` | Acceptable | Storyline is supporting capability, not primary identity. |
| `/design-system/:slug*` | Current Vercel blanket redirect | Unknown historic design-system estate | **REBUILD** | Enumerate individually | Weak | **REMOVE BLANKET RULE.** Wildcard redirect to Practice is not evidence of equivalence. Build explicit source list first. |
| `/work/elearning-design-system/typography` | Recorded as indexed in prior manifest | Future Project/Record/Artefact | **REBUILD** | Pending ISQ Design System canonicalisation | Unknown | **EVIDENCE GAP:** export GSC clicks/impressions and inspect page content before redirecting. |
| `/work/elearning-design-system` | Historical/current concept | Future Project | **REBUILD** | likely `/work/isq-elearning-design-system` if identity is confirmed | Acceptable if same project | Do not invent a third design-system concept. |
| `/portfolio/elearning-design-system/` | Detected historically by Google in prior manifest | Future Project | **REBUILD** | likely ISQ design-system Project | Unknown | Confirm identity and existing backlinks before cutover. |
| `/portfolio/migration-to-moodle/` | Historical project; directly aligned with Connect & Learn | Record | **301 REDIRECT** | `/work/connect-and-learn/concurrent-migration` | Strong | Better match than Project root because the Record directly answers migration intent. |
| `/work/casa-flight-examiner-rating` | Historical flat route | Project | **301 REDIRECT** | `/work/casa/flight-examiner-rating` | Strong | Direct redirect. |
| `/portfolio/casa-learning-management-system-front-end-design/` | Historical CASA project | Future CASA Project/Record | **REBUILD** | likely `/work/casa` or a future platform Record | Unknown | Do not redirect to FERC; platform front-end intent is different. Preserve until CASA platform representation is settled. |
| `/portfolio/casa-storyline-template-design-and-development/` | Historical CASA production-system project | Future Project/Record | **REBUILD** | future CASA production-system evidence | Unknown | Strong potential supporting authority around scalable production; no equivalent canonical Record yet. |
| `/work/casa-aviationworx-class` | Historical flat route | CASA historical work | **REBUILD** | `/work/casa/aviationworx` or `/work/casa/class` | Unknown | Existing repository already records unresolved AviationWorx/CLASS identity. Do not redirect until verified. |
| `/portfolio/child-protection-for-teachers/` | Historical/employer project | Future Project/Record if publishable | **REBUILD** | no destination yet | Unknown | Permission/evidence and public-value gate required. No generic redirect. |
| `/learnx-award-winning-project/` | Historical award surface | Project/evidence claim | **REBUILD** | project owning the award, once verified | Unknown | **EVIDENCE GAP:** award/project relationship must be verified before redirect or schema claim. |
| `/portfolio/goodstart-institute-early-learning/` | Live external reference from Goodstart portal directory | Future Project | **REBUILD** | proposed `/work/goodstart-early-learning` | Strong after rebuild | High-priority authority recovery. Keep source functioning until successor exists, then 301 directly. |
| `/portfolio/elearning-design-development-sonic-health-plus/` | Historical portfolio asset | Future Project | **REBUILD** | proposed `/work/sonic-healthplus` | Strong if same project | Publish only if evidence/assets remain strong enough. |
| `/portfolio/tafe-queensland/` | Historical TAFE portfolio route | Project | **CONSOLIDATE** | `/work/tafe-pathways` only if source is Pathways | Unknown | **EVIDENCE GAP:** historical page may cover broader TAFE work. Verify before redirect. |
| `/portfolio/elearning-heroes-challenge-183/` | Historical community/prototype evidence | Historical retained resource / lab | **REBUILD** | future retained note or prototype grouping | Unknown | Supporting authority only. Do not elevate into main Work solely for search. |
| `/portfolio/prototype-hamburger-menu-in-storyline/` | Historical technical prototype | Historical retained resource | **REBUILD** | retained technical note if still useful | Unknown | Refresh/retain only if instructions and artefact still work; otherwise 404. |
| `/principles-of-assessment-and-rules-of-evidence/` | **Confirmed external academic/professional citation** | Retained standalone knowledge surface | **REBUILD** | **same URL preferred** | Strong | Highest-priority knowledge preservation. Update for current Australian VET standards and retain address to avoid unnecessary link migration. |
| `/instructional-design/` | Historical learning-design hub | Retained editorial surface only if useful | **CONSOLIDATE** | no automatic destination | Unknown | Review page + inbound data. Do not recreate generic textbook hierarchy by default. |
| `/instructional-design/instructional-design-models/` and child model pages | Historical academic content | None or retained knowledge | **CONSOLIDATE** | one substantial retained resource only if evidence supports | Weak | Thin textbook-like pages should not survive simply because crawled. |
| `/instructional-design/learning-theory/*` | Historical academic hierarchy | None or retained knowledge | **CONSOLIDATE** | strongest genuine equivalent if one is created | Weak | Otherwise return 404/410 rather than Practice/Home redirect. |
| `/tips-for-online-facilitation/` | Prior manifest records recent Google crawl | Retained knowledge | **REBUILD** | same URL or deliberate retained note | Strong if still useful | Refresh for current practice before preserving indexation. |
| `/the-protege-effect/` | Historical learning note | Retained knowledge | **REBUILD** | same URL if retained | Unknown | Preserve only if distinctive/current enough. |
| `/how-to-change-the-default-words-and-phrases-in-moodle/` | Historical Moodle technical content | Retained technical knowledge | **REBUILD** | same URL preferred if refreshed | Strong if technically current | Verify against current Moodle before re-indexing. |
| `/make-moodle-home-page-blocks-visible-teachers/` | Historical Moodle technical content | Retained technical knowledge | **REBUILD** | same URL preferred if refreshed | Strong if technically current | Otherwise 404; do not redirect to generic Moodle/Practice page. |
| `/h5p-demonstration/` | Historical demonstration | Retained artefact/knowledge | **404** unless demonstration still works | n/a | n/a | Operational usefulness is the gate. |
| `/blog/master-slides-in-storyline` | Prior manifest marks evergreen | Retained knowledge | **RETAIN** | same URL | Strong | Blog IA is not required for the URL to survive. Validate technical currency. |
| `/blog/clean-design-elearning` | Existing knowledge surface | Retained knowledge | **REBUILD** | same URL | Strong | Keep only if rewritten beyond generic advice and anchored in real evidence. |
| `/blog/Moving-from-Wordpress-to-React` | Existing visibility recorded in prior manifest | Historical technical note | **RETAIN** | same URL | Strong | Preserve case and slug at migration; refresh only if materially rewritten. |
| `/blog/xapi-basics` | Historical/current knowledge | Emerging territory | **REBUILD** | same URL if technically current | Strong | Do not promote as primary authority until first-hand xAPI evidence is also visible. |
| `/blog/xapi-isnt-scary` | Historical/current knowledge | Emerging territory | **CONSOLIDATE** | `/blog/xapi-basics` or stronger future xAPI evidence | Acceptable | Avoid two overlapping introductory xAPI pages. |
| `/blog/welcome` | Generic introductory post | None | **410 GONE** | n/a | n/a | No meaningful successor. |
| WordPress utility/tag/category/pagination URLs with no unique content | Low-value taxonomy | None | **404** | n/a | n/a | Do not redirect taxonomies en masse. Use 410 only for intentionally retired resources where useful. |

## Redirect implementation changes required before launch

1. Replace blanket `/design-system/:slug* → /practice` with explicit mappings.
2. Re-check `/services/xapi-analytics → /practice`; retain only when Practice has equivalent evidence-backed meaning.
3. Add strong direct redirects where semantic mapping is already proven, especially:
   - `/portfolio/ → /work`
   - `/profile/ → /about`
   - `/portfolio/migration-to-moodle/ → /work/connect-and-learn/concurrent-migration`
   - `/work/casa-flight-examiner-rating → /work/casa/flight-examiner-rating`
4. Preserve externally cited `/principles-of-assessment-and-rules-of-evidence/` through rebuild rather than retirement.
5. Do not redirect Goodstart until its successor exists. Once built, redirect old URL directly to the Goodstart Project.
6. Keep all redirects chain-free.

## Evidence gaps that block destructive action

- Current GSC landing-page/query export, including `/about` and indexed design-system URLs.
- Current analytics organic landing-page and referral export.
- Full backlink/referring-domain export (Semrush connection currently lacks API units).
- Historical content inspection for TAFE umbrella page, AviationWorx/CLASS, LearnX award, design-system URLs.
- Exact inventory of `/design-system/*` historical slugs.

## Decision

The migration can be defined safely **only if destructive actions are blocked by the evidence gaps above**. Known strong mappings may be implemented now; weak/wildcard mappings must not be treated as complete merely because a redirect currently exists.