# glennhammond.com — URL Migration Manifest v1.0

**Date:** 18 August 2026  
**Status:** Implementation baseline  
**Repository location:** `docs/SEO-MIGRATION.md`

---

## 1. Purpose

This document is the canonical URL migration map for the rebuild of glennhammond.com.

It reconciles:

- the historical WordPress URL estate
- the current React site architecture
- the existing sitemap
- current Google Search Console indexing and performance evidence
- the planned new information architecture

The objective is to preserve useful search history while substantially modernising the site.

---

# 2. Canonical future architecture

Primary site routes:

```text
/
├── about
├── work
│   └── [project-slug]
├── practice
├── blog
│   └── [article-slug]
└── contact
```

Primary navigation:

```text
Work
Practice
About
```

`Blog` and `Contact` may remain supporting routes without appearing as primary navigation items.

---

# 3. Migration action definitions

**KEEP**  
Existing canonical URL remains unchanged.

**REBUILD**  
Existing URL remains or gains a new canonical equivalent, but the page content is substantially rebuilt.

**REDIRECT**  
Permanent 301 redirect to a specific new canonical URL.

**CONSOLIDATE**  
Several historical URLs are combined into one stronger destination.

**PRESERVE**  
Existing content remains available and indexable, with optional later editorial refresh.

**RETIRE**  
No new equivalent is required. Return 404/410 unless backlink or traffic evidence justifies another treatment.

**REVIEW**  
Final decision depends on content extraction or further historical evidence.

---

# 4. Core current URLs

| Existing URL | Action | Canonical destination | Notes |
|---|---|---|---|
| `/` | KEEP | `/` | Homepage |
| `/about` | KEEP | `/about` | Strong current search visibility |
| `/about/` | REDIRECT | `/about` | Normalise trailing slash |
| `/work` | KEEP | `/work` | Canonical portfolio index |
| `/services` | REDIRECT | `/practice` | Practice replaces Services |
| `/contact` | KEEP | `/contact` | Supporting route |
| `/contact/` | REDIRECT | `/contact` | Normalise |

---

# 5. Current Work URLs

## CASA Flight Examiner Rating

```text
/work/casa-flight-examiner-rating
```

**Action:** KEEP + REBUILD

Retain exact slug.

This becomes a major case study.

---

## CASA AviationWorx Class

```text
/work/casa-aviationworx-class
```

**Action:** KEEP + REBUILD

Retain existing slug while project naming and scope are clarified.

Do not rename solely for presentation consistency.

---

## eLearning Design System

```text
/work/elearning-design-system
```

**Action:** KEEP + TRANSFORM

Public-facing working title:

**Rise Design System**

Retain the existing URL because it already has search visibility.

The rebuilt page should be organisation-neutral.

---

## Corporate Yoga Australia Website

```text
/work/corporate-yoga-australia-website
```

**Action:** REVIEW

Likely future treatment:

```text
301 → /work/wellbeing-studio
```

Only make this redirect once the Wellbeing Studio case study genuinely encompasses the historical page content.

---

## React Learning Prototypes

```text
/work/react-learning-prototypes
```

**Action:** PRESERVE / REVIEW

Potentially useful secondary portfolio work demonstrating learning interaction and front-end capability.

---

# 6. Historical WordPress portfolio index

```text
/portfolio/
```

**Action:** REDIRECT

```text
301 → /work
```

Do not recreate `/portfolio` as a parallel content system.

---

# 7. Historical CASA portfolio URLs

## CASA LMS front-end

```text
/portfolio/casa-learning-management-system-front-end-design/
```

**Action:** REBUILD + REDIRECT

Provisional destination:

```text
/work/casa-learning-management-system
```

Final title and scope to be confirmed during CASA content extraction.

---

## CASA Storyline template

```text
/portfolio/casa-storyline-template-design-and-development/
```

**Action:** REBUILD + REDIRECT

Provisional destination:

```text
/work/casa-storyline-template-design
```

Do not call this a “design system” until the historical work has been reviewed.

---

## CASA AviationWorx

Where historical content substantially overlaps:

```text
301 → /work/casa-aviationworx-class
```

Final mapping should be confirmed after the CASA project inventory.

---

# 8. Historical ISQ / education portfolio URLs

## Child Protection for Teachers

```text
/portfolio/child-protection-for-teachers/
```

**Action:** REBUILD + REDIRECT

Provisional destination:

```text
/work/child-protection-for-teachers
```

Publication must be carefully separated from confidential or employer-owned material.

---

## Migration to Moodle

```text
/portfolio/migration-to-moodle/
```

**Action:** REBUILD + REDIRECT

Preferred future destination:

```text
/work/connect-and-learn
```

Alternative:

```text
/work/moodle-platform-migration
```

**Status:** REVIEW until Connect & Learn content extraction is complete.

---

## LearnX award-winning project

```text
/learnx-award-winning-project/
```

**Action:** CONSOLIDATE / REBUILD

Likely destination:

```text
/work/connect-and-learn
```

or whichever project the award specifically relates to.

Do not map until the original award/project relationship is confirmed.

---

# 9. Other historical client portfolio URLs

## Sonic Health Plus

```text
/portfolio/elearning-design-development-sonic-health-plus/
```

**Action:** REVIEW + likely REBUILD

Provisional future destination:

```text
/work/sonic-health-plus
```

Suitable for a concise portfolio record if sufficient evidence/assets remain.

---

## Goodstart Institute of Early Learning

```text
/portfolio/goodstart-institute-early-learning/
```

**Action:** REVIEW + likely REBUILD

Provisional future destination:

```text
/work/goodstart-early-learning
```

---

## TAFE Queensland

```text
/portfolio/tafe-queensland/
```

**Action:** REVIEW + likely REBUILD

Provisional destination:

```text
/work/tafe-queensland
```

---

## eLearning Heroes Challenge 183

```text
/portfolio/elearning-heroes-challenge-183/
```

**Action:** REVIEW

Possible outcomes:

1. retain as a small experiment
2. consolidate into `/work/react-learning-prototypes`
3. convert to a blog/technical note
4. retire

Do not treat as a primary case study by default.

---

## Storyline hamburger-menu prototype

```text
/portfolio/prototype-hamburger-menu-in-storyline/
```

**Action:** REVIEW

Likely destination if retained:

```text
/blog/[appropriate-storyline-article]
```

or:

```text
/work/react-learning-prototypes
```

Retire if no enduring value remains.

---

# 10. Historical service pages

## Consultation and strategy

```text
/consultation-and-strategy/
```

**Action:** CONSOLIDATE

```text
301 → /practice
```

---

## Consultancy

```text
/consultancy/
```

**Action:** CONSOLIDATE

```text
301 → /practice
```

---

## eLearning design and development

```text
/elearning-design-and-development/
```

**Action:** CONSOLIDATE

```text
301 → /practice
```

---

## Implementation and analytics

```text
/elearning/implementation-analytics/
```

**Action:** CONSOLIDATE / REVIEW

Initial destination:

```text
301 → /practice
```

Future reconsideration is permitted if a substantial evidence/measurement capability page is created.

---

## Web courses

```text
/web-courses/
```

**Action:** CONSOLIDATE

```text
301 → /practice
```

---

# 11. Historical profile URL

```text
/profile/
```

**Action:** REDIRECT

```text
301 → /about
```

---

# 12. Historical Blog/category URLs

## Blog category

```text
/category/blog/
```

**Action:** REDIRECT

```text
301 → /blog
```

---

## eLearning Design & Development category

```text
/category/elearning-design-development/
```

**Action:** REDIRECT

Preferred destination:

```text
/blog
```

Do not recreate WordPress category taxonomy solely for migration.

---

## Moodle category

```text
/category/moodle/
```

**Action:** REVIEW

Preferred future treatment:

```text
301 → /blog
```

unless a useful Moodle topic/archive page is deliberately created.

---

# 13. Current Blog URLs with existing visibility

## Moving from WordPress to React

```text
/blog/Moving-from-Wordpress-to-React
```

**Action:** PRESERVE

Do not change case or slug during the migration.

Potential later improvement:

- editorial refresh
- updated publication date only if substantially rewritten
- contextual links to current site architecture/work

---

## Master slides in Storyline

```text
/blog/master-slides-in-storyline
```

**Action:** PRESERVE

Evergreen technical article.

---

## Clean design in eLearning

```text
/blog/clean-design-elearning
```

**Action:** PRESERVE + optional refresh

---

# 14. Current sitemap Blog URLs

Initially retain:

```text
/blog/ai-patterns-elearning
/blog/clean-design-elearning
/blog/design-system
/blog/master-slides-in-storyline
/blog/scenario-writing-that-feels-real
/blog/storyline-tips-that-actually-help
/blog/ux-for-learning
/blog/xapi-basics
/blog/xapi-isnt-scary
```

**Action:** PRESERVE

These broadly support the new authority areas.

---

## Generic welcome post

```text
/blog/welcome
```

**Action:** REVIEW → likely RETIRE

No need to preserve generic introductory content without meaningful historical/search value.

---

# 15. Historical Moodle technical content

## Moodle language customisation

```text
/how-to-change-the-default-words-and-phrases-in-moodle/
```

**Action:** REVIEW

Potentially useful evergreen article.

Before preservation:

- verify instructions against current Moodle
- rewrite if materially outdated
- avoid preserving technically incorrect instructions for SEO

Potential destination:

```text
/blog/[refreshed-moodle-slug]
```

---

## Moodle homepage blocks

```text
/make-moodle-home-page-blocks-visible-teachers/
```

**Action:** REVIEW

Same treatment as above.

---

## H5P demonstration

```text
/h5p-demonstration/
```

**Action:** REVIEW

Retain only if the demonstration remains operational and professionally useful.

Otherwise retire.

---

# 16. Historical instructional-design hub

```text
/instructional-design/
```

**Action:** REVIEW / possible consolidation hub

Do not automatically recreate the entire academic hierarchy.

Potential outcomes:

- retain as a strong evergreen learning-design article
- redirect to `/practice`
- develop into a Writing hub
- consolidate selected historical material into it

Decision depends on surviving content quality.

---

# 17. Instructional-design project pages

```text
/instructional-design/capstone-project/
/instructional-design/digital-media-design/
/instructional-design/instructional-design-document/
```

**Action:** REVIEW

Assess individually.

If these primarily represent old academic assignments rather than current professional authority, they may be retired.

Preserve only material that remains genuinely useful or evidential.

---

# 18. Instructional-design model pages

Historical hierarchy includes:

```text
/instructional-design/instructional-design-models/
/instructional-design/instructional-design-models/dick-and-carey-model/
/instructional-design/instructional-design-models/rapid-instructional-design/
/instructional-design/instructional-design-models/understanding-by-design-ubd/
```

**Action:** REVIEW AS A COLLECTION

Do not automatically recreate each page.

Preferred strategy:

- identify meaningful historical search/backlink value
- consolidate thin material where appropriate
- preserve genuinely useful long-form articles
- remove generic textbook-like content that no longer reflects the practice

---

# 19. Learning theory pages

Historical pages include:

```text
/instructional-design/learning-theory/andragogy/
/instructional-design/learning-theory/assessment-learning-models/
/instructional-design/learning-theory/behaviourism/
/instructional-design/learning-theory/cognitivism/
/instructional-design/learning-theory/connectivism/
/instructional-design/learning-theory/constructivism/
/instructional-design/learning-theory/signature-assignment/
```

**Action:** REVIEW / CONSOLIDATE

Google has recently crawled some of this hierarchy, so do not erase it casually.

However, crawler awareness alone is not sufficient justification to recreate thin historical pages.

Preferred hierarchy of decisions:

1. preserve if useful + authoritative
2. consolidate into stronger evergreen learning-theory content
3. redirect to the strongest equivalent
4. retire where no contemporary value remains

---

# 20. Other historical learning content

## Principles of assessment and rules of evidence

```text
/principles-of-assessment-and-rules-of-evidence/
```

**Action:** REVIEW

Potentially valuable if authoritative and current.

---

## Protégé effect

```text
/the-protege-effect/
```

**Action:** REVIEW

Potential Writing article.

---

## Tips for online facilitation

```text
/tips-for-online-facilitation/
```

**Action:** REVIEW + likely PRESERVE/REFRESH

Google has recently crawled this historical URL.

---

# 21. Obsolete technical / utility URLs

## Facebook iframe tabs

```text
/iframe-tabs-for-facebook-brand-pages/
```

**Action:** RETIRE

Unless meaningful backlink evidence is discovered.

---

## Feature elements

```text
/features/elements/
```

**Action:** RETIRE / investigate

Do not recreate without a known dependency.

---

## Project template

```text
/project-template/
```

**Action:** RETIRE

Unless required by an existing application.

---

## Storyline project taxonomy

```text
/project-attributes/storyline/
```

**Action:** RETIRE / redirect only if needed

Do not recreate WordPress taxonomy.

---

## Feed

```text
/feed/
```

**Action:** RETIRE

Only recreate RSS if RSS becomes an intentional new-site feature.

---

# 22. Current eLearning Design System child URLs

Existing sitemap includes:

```text
/work/elearning-design-system/asset-register
/work/elearning-design-system/atomic-design
/work/elearning-design-system/colours
/work/elearning-design-system/core-more-bore
/work/elearning-design-system/course-structure
/work/elearning-design-system/images-icons
/work/elearning-design-system/overview
/work/elearning-design-system/storyline
/work/elearning-design-system/typography
```

Initial strategy:

## `/work/elearning-design-system/typography`

**Action:** REVIEW CAREFULLY

This URL is currently indexed.

Do not remove until search performance and page content have been evaluated.

---

## Remaining child routes

**Action:** CONSOLIDATE / REVIEW

Default future treatment if no independent content case exists:

```text
301 → /work/elearning-design-system
```

Avoid retaining nine thin pages simply because they previously existed.

If selected child pages become substantial resources, they may remain.

---

# 23. Additional historic URLs detected by Google

Search Console has identified historical URLs including:

```text
/portfolio/elearning-design-system/
/portfolio/migration-to-moodle/
/blog-post-title-5/
```

## Old eLearning Design System portfolio page

```text
/portfolio/elearning-design-system/
```

**Action:** REDIRECT

```text
301 → /work/elearning-design-system
```

---

## Old Moodle migration portfolio page

```text
/portfolio/migration-to-moodle/
```

Already covered above.

Final destination pending Connect & Learn case-study decision.

---

## Placeholder blog post

```text
/blog-post-title-5/
```

**Action:** RETIRE

Do not redirect generic junk to the homepage.

Return 404/410 unless external link evidence provides a reason for another treatment.

---

# 24. New proposed Work URLs

These URLs do not exist yet but represent the preferred future portfolio architecture.

## Definite

```text
/work/wellbeing-studio
```

**Status:** CREATE

Flagship case study.

---

## Probable

```text
/work/connect-and-learn
/work/child-protection-for-teachers
/work/casa-learning-management-system
/work/casa-storyline-template-design
```

**Status:** CONTENT EXTRACTION REQUIRED

Do not create empty/thin production pages simply to reserve these routes.

---

## Potential secondary work

```text
/work/sonic-health-plus
/work/goodstart-early-learning
/work/tafe-queensland
```

**Status:** REVIEW AFTER CONTENT EXTRACTION

---

# 25. Current target Work collection

## Tier 1

1. Wellbeing Studio
2. CASA Flight Examiner Rating
3. Connect & Learn
4. Rise Design System

These should receive the strongest case-study treatment.

---

## Tier 2

Potential project records:

5. CASA LMS interface
6. CASA Storyline template/system
7. Child Protection
8. LearnX award-winning project
9. Sonic Health Plus
10. Goodstart
11. TAFE Queensland
12. React Learning Prototypes

Tier 2 pages can be deliberately concise.

They exist to preserve evidence, depth, historical links and professional breadth.

---

# 26. Redirect implementation rules

All migrations must follow these rules.

### Rule 1

Old URL redirects directly to the final canonical destination.

Avoid:

```text
old → intermediate → final
```

Use:

```text
old → final
```

### Rule 2

Do not redirect unrelated content to `/`.

### Rule 3

Do not create a page solely because an old URL existed.

### Rule 4

Where several thin historical pages cover the same topic, consolidate them.

### Rule 5

Every permanent content migration uses HTTP 301.

### Rule 6

Normalise trailing-slash variants consistently.

### Rule 7

Do not create two indexable URLs for the same content.

---

# 27. Sitemap rules

The new `sitemap.xml` must include only:

- canonical URLs
- indexable content
- live production pages

Do not include:

- redirects
- 404 pages
- retired content
- staging pages
- duplicate slash variants
- thin unpublished project placeholders

Use genuine `lastmod` values where available.

Do not artificially update every page's modification date on each deployment.

---

# 28. Development constraint

This document is an architectural constraint for:

- Claude
- Codex
- Copilot
- future developers
- future redesign work

No development agent should rename, delete or restructure existing canonical URLs without checking this manifest.

Any proposed route change must answer:

1. Does the current URL have Search Console visibility?
2. Does a historical WordPress URL point here?
3. Are external links likely to reference it?
4. Is a redirect required?
5. Does changing the route provide enough benefit to justify migration risk?

---

# 29. Decisions intentionally deferred

The following are not unresolved mistakes. They require project/content evidence first.

### Connect & Learn canonical URL

Likely:

```text
/work/connect-and-learn
```

Confirm after project extraction.

---

### CASA LMS / AviationWorx relationship

Determine whether these represent:

- one case study
- two case studies
- a parent project with related work

Do not merge prematurely.

---

### CASA Storyline work

Determine whether this was:

- a template
- template system
- component library
- design system
- broader production framework

Use the historically accurate description.

---

### Historical instructional-design collection

Decide after reviewing surviving content.

---

### Historical Moodle articles

Validate technical accuracy before republication.

---

### eLearning Design System child hierarchy

Decide which child resources genuinely deserve standalone indexing.

---

# 30. Immediate implementation status

The website can now safely proceed under the following locked decisions:

```text
/                              KEEP
/about                         KEEP
/work                          KEEP
/work/casa-flight-examiner-rating
                               KEEP + REBUILD
/work/casa-aviationworx-class KEEP + REBUILD
/work/elearning-design-system KEEP + TRANSFORM
/services                      301 → /practice
/profile/                      301 → /about
/portfolio/                    301 → /work
/category/blog/                301 → /blog
/portfolio/elearning-design-system/
                               301 → /work/elearning-design-system
```

New route authorised:

```text
/practice
```

New flagship route authorised:

```text
/work/wellbeing-studio
```

Other new Work routes should follow content extraction.

---

# 31. Strategic principle

The new glennhammond.com should not look or behave like an archive.

The historical material exists beneath a deliberately restrained contemporary site.

The visitor experience should feel curated.

The underlying content estate should feel substantial.

The SEO strategy is therefore:

**preserve what has value, consolidate what has fragmented, rebuild what demonstrates capability, and remove what no longer deserves to represent the practice.**

**Quiet on the surface. Considerable depth underneath.**