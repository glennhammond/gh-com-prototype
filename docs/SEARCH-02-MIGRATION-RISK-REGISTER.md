# Migration Risk Register v1

**Date:** 24 August 2026  
**Workstream:** Search, Authority & Discoverability 02

Scales: Probability = Low / Medium / High. Impact = Low / Medium / High / Critical.

| Risk | Probability | Impact | Detection mechanism | Prevention | Launch response |
|---|---|---|---|---|---|
| High-value historical URL is removed before equity is understood | Medium | **Critical** | GSC old landing pages; analytics; backlink data; 404 logs; external-search discovery | Migration ledger; destructive-action evidence gate; preserve unresolved URLs | Restore source or add correct direct redirect; request recrawl after fix |
| Confirmed external citation is lost | Medium | **High** | backlink/citation ledger; manual external references | Preserve/rebuild cited resource at same URL where possible | Restore URL immediately; contact referring site only after stable successor exists |
| Historical URL is redirected to semantically weak `/practice` or Home | **High today** | **High** | redirect audit; manual source/destination intent review; soft-404 reports | Remove wildcard/generic redirects; require semantic-match rating | Replace with direct equivalent, rebuild source, or return proper 404/410 |
| `/design-system/:slug*` blanket redirect destroys differentiated historical intent | **High today** | **High** | enumerate incoming slugs from logs/GSC/backlinks; test Vercel rules | Replace wildcard with explicit mappings | Disable blanket rule; restore unresolved paths until mapped |
| `/services/xapi-analytics` redirects before equivalent evidence exists | Medium | Medium–high | destination content review; GSC query/landing-page comparison | Make redirect conditional on substantive Practice/evidence representation | Restore/rebuild source or improve destination before re-enabling |
| Redirect chain forms through successive migration rules | Medium | High | automated HTTP redirect crawl | every source maps directly to final canonical | Collapse chains; update internal/external links |
| Redirect destination returns non-200 or soft 404 | Medium | High | automated status/canonical crawler; GSC Page Indexing | verify all redirect destinations in release gate | Repair destination or redirect rule immediately |
| URL casing or trailing-slash variants split signals | Medium | Medium | crawl canonical/redirect matrix | one canonical casing; `cleanUrls`; `trailingSlash: false`; explicit tests | add direct normalisation redirects, update internal links |
| Old and new surfaces remain indexable with near-duplicate content | Medium | High | crawl canonical/noindex; GSC duplicate/canonical reports | canonical/noindex contract; remove duplicate sitemap entries | apply correct canonical/noindex or retire duplicate |
| Every Artefact enters sitemap automatically, creating thin-result proliferation | **High today** | High | inspect generated sitemap; thin-content/direct-entry review | explicit `search.index` + `search.sitemap` fields; Artefact default noindex | remove failing Artefacts from sitemap, noindex until upgraded |
| Important Record/Project omitted from sitemap | Low–medium | High | sitemap vs content-model test | generate from explicit indexability model | add canonical URL, resubmit sitemap |
| Staging/preview deployment becomes indexable | Medium | High | search for preview host; response-header/meta audit | staging robots/noindex/auth or Vercel controls; production-only canonical generation | immediately noindex/block; request removal if indexed |
| Production accidentally ships staging canonical/OG URLs | Low–medium | High | built-HTML canonical/OG test | site origin centralised; release audit | hotfix metadata and resubmit sitemap |
| Current app-shell rendering regresses in production | Medium | **Critical** | fetch built HTML without JS; crawler tests; URL Inspection | retain SSG/prerendering; make critical content present in initial HTML | restore SSG/static output; request recrawl of affected pages |
| Client-side navigation hides crawlable internal links | Medium | Medium–high | HTML link crawler without JS | real `<a href>` links in rendered HTML | replace non-link controls for navigational relationships |
| Metadata is lost or becomes templated/generic during component consolidation | Medium | High | title/description/H1 uniqueness tests | metadata derived from evidence model with editorial review | restore page-specific metadata |
| Canonical tags conflict with redirect/sitemap signals | Medium | High | canonical matrix test; GSC canonical reports | self-canonical indexable pages; no canonical to legacy redirects | align canonical, redirect, internal link and sitemap signals |
| Structured-data Person/award claims exceed verified evidence | Medium | High reputational | schema review; Rich Results test; evidence-claim audit | factual schema only; verify LearnX evidence | remove/unfreeze unsupported claim until documentation exists |
| Structured data names obsolete/legacy Practice differently from visible content | Medium | Medium | compare JSON-LD to visible page | single entity model; contextual but coherent wording | update schema and page together |
| Organisation/client attribution is published without approval | Low–medium | High | publication-content review | content permission flags; release gate | remove page/claim and deindex if necessary |
| Images/videos lose captions, alt text or provenance during migration | Medium | Medium–high | media manifest audit; accessibility crawl | keep semantic captions/provenance in content model | restore context; do not rely on filename SEO |
| Historical image/PDF URLs with inbound links disappear | Medium | Medium | GSC/backlinks/server logs for media URLs | include media URLs in migration inventory | redirect file to equivalent asset or restore |
| Rebuilt historical knowledge resource silently changes meaning while preserving old date | Medium | Medium | editorial provenance review | explicit “updated” metadata where substantial revision occurs | correct publication/update labels |
| Generic old learning-theory pages are retained just because Google crawled them | Medium | Medium | content-value review | evidence/value threshold, not crawl presence | consolidate/404/410 low-value pages |
| Useful old technical tutorial is removed because it does not fit new IA | Medium | Medium–high | GSC/backlink/search discovery | retained-knowledge exception in architecture | restore/rebuild at same URL or a strong equivalent |
| Search Console verification is lost at cutover | Medium | **High** | property ownership check before DNS/deploy | preserve verification method/files/tags; verify domain property | restore verification immediately; avoid changing property unnecessarily |
| Bing Webmaster verification/data continuity is lost | Medium | Medium | BWT property check | document verification and sitemap before launch | restore verification and resubmit sitemap |
| Pre-migration performance baseline is not exported | **High currently** | **High** | baseline checklist | export GSC, BWT, analytics and authority data before cutover | if missed, freeze earliest post-launch snapshot and mark comparisons limited |
| Semrush/backlink baseline remains unavailable | **High currently** | Medium | API status | purchase/enable units only if justified; alternatively first-party GSC Links export when available | mark authority baseline partial; do not invent counts |
| Analytics configuration/measurement changes simultaneously with site move | Medium | High | compare tag/property IDs and event collection | preserve current measurement through cutover; change later unless essential | annotate date; repair tracking; avoid false migration conclusions |
| Contact/conversion movement is unmeasurable | Medium | Medium–high | analytics event QA | define meaningful contact/referral events before launch | add tracking and mark pre-fix data incomplete |
| Core Web Vitals regress due to richer media | Medium | Medium–high | CrUX/GSC CWV + Lighthouse/browser checks | responsive images, dimensions, lazy loading below fold, performance budgets | optimise largest regressors; avoid removing evidence to chase score blindly |
| Search rankings fluctuate and are misdiagnosed as failure too early | High | Medium | compare 7/30/90-day trends, indexation and crawl | baseline + expected migration monitoring | fix technical faults immediately; otherwise allow recrawl/reindex period |
| AI-citation metrics are mistaken for ranking/authority scores | Medium | Medium | metric interpretation review | use Bing AI Performance as citation/grounding visibility only | correct reporting narrative, retain raw metric history |
| `llms.txt` is treated as required SEO infrastructure | Low–medium | Low | architecture review | classify as EXPERIMENT only; Google says it does not affect Google Search visibility/rankings | remove if it adds maintenance noise |
| Internal links keep pointing to redirected historical URLs | Medium | Medium | link crawl | rewrite all first-party links to final canonical destinations | update links; keep redirect for external traffic |
| External professional profiles continue linking to old pages | Medium | Medium | profile audit | update LinkedIn and other high-value profiles after cutover | update manually, prioritising pages with real referral traffic |
| Name ambiguity prevents clear branded entity resolution | Medium | Medium–high | branded SERP review | consistent Glenn + professional domain + organisation/project co-occurrence | align Home/Practice/profile descriptions and structured data |

## Highest-priority launch blockers

1. No destructive cutover until first-party GSC/analytics exports are captured or explicitly recorded as unavailable.
2. Remove/replace semantically weak wildcard redirects.
3. Implement explicit indexability so sitemap does not automatically publish all Artefacts.
4. Verify every old→new redirect as one hop to a 200 canonical destination.
5. Confirm production built HTML contains primary content and metadata without JS execution.
6. Preserve the externally cited Principles of Assessment URL.
7. Resolve or quarantine indexed design-system routes rather than flattening them into Practice.
8. Verify Search Console/Bing ownership and production analytics before domain cutover.

## Launch monitoring cadence

### Cutover day

- status/redirect crawl of complete ledger;
- production robots and sitemap;
- canonical/noindex matrix;
- key direct-entry pages fetched without JS;
- Search Console/Bing verification;
- analytics real-time sanity check.

### Days 1–7

- 404/410 and redirect errors;
- unexpected indexed staging host;
- submitted/indexed sitemap movement;
- branded search-result changes;
- organic landing-page continuity;
- crawler/server errors if accessible.

### Day 30

- compare organic entrances, clicks/impressions and top landing pages against baseline;
- check canonical/duplicate/index coverage;
- assess external-link recovery;
- inspect Bing AI citations/grounding queries where data exists;
- identify opportunities from real queries rather than publishing to a prewritten keyword calendar.

### Day 90

- authority-territory review;
- compare query clusters and direct-entry behaviour;
- promote/demote Artefact indexation based on value;
- decide whether any selective new knowledge surface is justified.