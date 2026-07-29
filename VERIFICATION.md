# Verification results

Run against the production build (`npm run check`) on 26 July 2026.

---

## Build and pre-render

```
[vite-react-ssg] Rendering Pages... (11)
[vite-react-ssg] Build finished.
postbuild: sitemap.xml (10 URLs), robots.txt
```

11 HTML files, 10 indexable URLs, all pre-rendered. No build warnings, no
console errors.

## Guardrails — `npm run verify`

```
VERIFICATION — 11 pages
  · Withheld as intended: /work/child-protection-program
  · JS 99KB gzipped (budget 120)
  · CSS 7KB gzipped (budget 30)
  · Fonts 107KB total across 4 files
  · Largest image 87KB (budget 180)
All checks passed.
```

Covered by that pass:

| Check | Result |
| --- | --- |
| Placeholder scan (`[To be written]`, lorem, TBC, TBD, "coming soon") | 0 found |
| Unapproved client names in output | 0 found |
| Unapproved logo assets shipped | 0 found |
| Withheld routes rendered | 0 |
| Routed content with a non-publishable status | 0 |
| Testimonials missing name / role / org / approval date | 0 |
| Required copy present in pre-rendered HTML | 7/7 pages |
| Unique `<title>` ≥ 10 chars | 11/11 |
| Meta description ≥ 40 chars | 11/11 |
| Canonical URL | 11/11 |
| Open Graph title | 11/11 |
| Exactly one `h1` | 11/11 |
| Broken internal links | 0 |
| Third-party resources | 0 |

## Content without JavaScript

Scripts stripped, tags removed, words counted:

| Page | Words |
| --- | --- |
| `/work/wellbeing-studio` | 1,357 |
| `/practice` | 1,096 |
| `/` | 754 |
| `/about` | 477 |
| `/work/connect-and-learn` | 463 |
| `/work/flight-examiner-rating` | 408 |
| `/privacy` | 350 |
| `/contact` | 273 |
| `/work/goodstart-myportal` | 246 |
| `/work` | 221 |

Every route delivers its full argument with JavaScript disabled. This is the
defect that most needed fixing: the current live site returns *"This site
requires JavaScript to run."*

## Accessibility

Static analysis of the built markup — 0 issues across 11 pages:

- images without `alt`, or with empty `alt`: 0
- empty links: 0
- form controls without an associated label or `aria-label`: 0
- missing `lang="en-AU"`: 0
- missing skip link: 0
- missing `<main>` landmark: 0
- heading-level skips: 0 (one was found on `/practice` and fixed — `LayerTabs`
  now takes a `level` prop so its panel titles sit correctly under the page h1)

Built into the components rather than checked afterwards:

- Focus is never obscured by the sticky header — `scroll-margin-top` on every
  `[id]` (WCAG 2.2 SC 2.4.11)
- No dragging interactions anywhere (SC 2.5.7)
- 44px minimum targets, 48px on form controls (SC 2.5.8 requires 24px)
- Contact in the same footer position on every page (SC 3.2.6)
- Single-step form, nothing re-entered (SC 3.3.7)
- No CAPTCHA — honeypot instead (SC 3.3.8)
- Layer colour always paired with numeral and name (SC 1.4.1)
- Error messages are actionable, listed at the top, linked to their field, and
  announced; focus moves to the summary on failed submit (SC 3.3.1, 3.3.3)
- 16px minimum font-size on inputs, so iOS does not zoom the viewport

**Not yet done, and automation is not a substitute**: a manual keyboard pass on
every template, a screen-reader pass (VoiceOver/NVDA) on the homepage, flagship
case study and contact form, a 200% zoom check and a forced-colours check.
These need a real browser and should happen before launch.

## Responsive

Rendered and reviewed at 390, 768 and 1440px. Single column below 720px, no
horizontal scroll at 320px, hero is content-height rather than `100vh`, and the
four layers are shown expanded at every width — the framework is never hidden
behind a tap. Filters wrap rather than scrolling horizontally.

## Reduced motion

One entrance animation exists (the hero bands). Under
`prefers-reduced-motion: reduce` it does not play and the bands render present
and correct. All transitions collapse to 1ms via the token layer. No content
anywhere depends on motion or scroll position to become visible.

## Structured data

`Person` and `ProfessionalService` sitewide; `CreativeWork` per case study;
`BreadcrumbList` on all second-level pages. The `award` value states exactly
what the Master Copy states and is frozen until the LearnX certificate is
supplied. No unverified claim appears in schema.

## Defects found and fixed during this pass

1. **Layer 04 invisible on ink bands** — Operations is `#14171C`, the band
   colour itself. The `.on-ink` context now re-maps `--layer-4` to a readable
   slate, which fixed it everywhere at once.
2. **Browser chrome in platform imagery** — the supplied WebP files still
   contained Chrome tab strips, URL bars, bookmark bars and a scrollbar column.
   `scripts/images.mjs` now crops all four edges per source.
3. **Header wordmark misaligned** — `align-items: baseline` against an inline
   SVG, which has no text baseline, threw the descriptor above the mark.
4. **Heading skip on `/practice`** — h1 → h3.
5. **Fonts 294KB** — `@fontsource` entry points ship Cyrillic, Greek and
   Vietnamese. Latin-only faces declared by hand: 107KB.
6. **Case-study section titles wrapping mid-phrase** — a flex `max-width` was
   shrinking the heading to its longest word.

## Known limitations of this pass

Visual review was done with a print-rendering engine inside the sandbox, not
Chrome: the environment had no working headless browser and the Chrome
extension could not reach the sandbox or open `file://` URLs. Layout, colour,
typography, hierarchy and spacing were verified this way and the results are
sound, but **the prototype has not yet been seen in a real browser**. Grid and
flex fallbacks in that renderer differ slightly from Chrome, so a browser pass
is the first thing to do on receipt — run `npm run dev` and walk the six routes.
