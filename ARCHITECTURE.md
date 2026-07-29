# Architecture

## Why this codebase

Two React projects were supplied. `glennhammond-site` is the current live site:
plain `vite build`, Tailwind, client-rendered — which is why the live site
returns *"This site requires JavaScript to run"* to any non-JS request, and why
every link Glenn shares generates no preview. `glennhammond.com` is the redesign
in progress: React 18, Vite, **`vite-react-ssg`**, real design tokens, licensed
ITC Avant Garde, a working `Head` component and route-level static generation.

The redesign is the canonical foundation and its pre-rendering approach was
retained, exactly as the blueprint recommends. It was verified building cleanly
(20 routes) before any code was written.

Vite was moved 5 → 6 and `vite-react-ssg` from a pinned `0.9.1-beta` to the
stable `0.9.2`, which requires Vite 6. That is the only stack change; see
`DECISIONS.md`.

## Layout

```
src/
  main.jsx            ViteReactSSG entry
  routes.jsx          route table; the only place routes are declared
  content/            data, no markup — the future CMS collection shapes
    status.js         evidence status model + provenance labels
    site.js           settings, navigation, contact, response promise
    layers.js         the four layers (drives most of the site)
    projects.js       case studies + explicitly withheld projects
    engagements.js    the four engagements
    clients.js        client register with separate name/logo approvals
    testimonials.js   approved testimonials only
    about.js          biography and dated history
    home.js           homepage copy, beat by beat
  lib/                pure logic, no React
    schema.js         JSON-LD builders
    media.js          resolves image names to AVIF/WebP srcsets
    validation.js     enquiry validation, unit-testable
  components/         reusable, presentational
  pages/              route components
    home/             the seven homepage beats, one file each
  styles/
    tokens.css        design tokens — single source of truth
    fonts.css         @font-face
    global.css        reset, base type, layout primitives, utilities
scripts/
  images.mjs          art-direction pipeline (source → AVIF/WebP)
  postbuild.mjs       sitemap.xml + robots.txt from the route table
  verify.mjs          publishing guardrails as build checks
```

The separation the brief asked for holds: content data, presentational
components, layout components, route composition, design tokens, metadata and
validation logic are each in exactly one place. No page component exceeds ~200
lines and the homepage is composition only.

## The layer system

`content/layers.js` is the spine. It drives the homepage framework section, the
Practice page tabs, the work filter, the layer marks on every project card and
case study, the capability columns and the enquiry form's qualification
question. Adding a fifth layer would be a one-file change.

Each layer carries a CSS custom property name rather than a colour value, so
components read `var(--layer-3)` and the `.on-ink` context can re-map it. That is
how Layer 04 — which is Ink, and would vanish on an ink band — stays visible
without any component knowing about the problem.

**Colour is never the only signal.** `LayerMark` always renders the numeral, and
either the name or a visually-hidden equivalent. Selected states in the filter
and tabs carry a swatch fill, a border change and a checkmark.

## Surfaces

Two grounds: warm paper and near-black ink. A component sits on either without
modification, because `.on-ink` re-maps `--paper`, `--ink`, `--steel`, `--brass`
and `--rule` rather than overriding each component. Homepage beats alternate so
each ink band carries a moment of argument and each paper band carries evidence.

## Progressive enhancement

An inline script adds `.js` to `<html>` before paint. Controls that need
JavaScript to work are revealed by that class, so a visitor without it is never
shown a control that cannot function:

- **Header** — below 900px the disclosure toggle appears only with `.js`;
  without it the nav renders inline and always visible.
- **Work filter** — hidden entirely without `.js`; every project is listed.
- **Layer tabs** — without `.js`, and at any width below 900px, all four panels
  are shown and the tablist is hidden. ARIA tab roles are attached only when
  the tab behaviour is actually available, because a `tabpanel` with no
  reachable `tab` is worse than no roles at all.
- **Enquiry form** — validation is progressive; the markup is a normal form.

Panel visibility is driven by a `data-selected` attribute present in the static
HTML, so the correct panel paints on the first frame. There is no hydration
flash.

## Motion

One entrance animation site-wide: the four hero bands draw in sequence over
600ms, once, on first paint. It is pure CSS, so nothing is hidden if JavaScript
never runs. Everything else is a 140ms state change. No scroll-triggered
reveals, no parallax, no custom cursors, no page transitions. Under
`prefers-reduced-motion` the entrance does not play and the bands are simply
present.

## Performance

Enforced in `scripts/verify.mjs`, measured on the real build:

| Budget | Limit | Actual |
| --- | --- | --- |
| JS, gzipped | 120 KB | 99 KB |
| CSS, gzipped | 30 KB | 7 KB |
| Fonts | ~120 KB | 107 KB across 4 files |
| Largest image | 180 KB | 87 KB |

The hero is text, so nothing large blocks first paint. Fonts are self-hosted
Latin-subset only — the `@fontsource` entry points ship Cyrillic, Greek and
Vietnamese, which was 294 KB for an English-language site. There are zero
third-party connections on any page; `verify.mjs` fails the build if one appears.

## Content model

Every content record carries a `status` from `content/status.js` and a `source`.
`verify.mjs` refuses to ship a routed project that is not `approved` or
`proposed`, refuses to render a withheld project, and fails on any unapproved
client name appearing anywhere in the output.

`clients.js` keeps `nameApproved` and `logoApproved` as separate booleans.
Permission to name a client is not permission to display their mark, and
conflating the two is how the previous codebase came to ship three unapproved
logos.

The shapes in `content/` are deliberately CMS-ready. Moving to Sveltia or Decap
means writing a collection config that matches these fields and swapping the
imports for file reads. No component changes.

---

# V3 additions

## Programmes

A programme is a parent record with children, not a longer case study. CASA is
the only one, and the structure is expressed in three places at once so no
single component has to carry the relationship on its own:

- **the URL** — `/work/casa/class` states it before anything renders
- **`content/projects.js`** — children carry `programme: "casa"`, the parent
  carries a `programmeMap`
- **the interface** — a programme rail on every child, a programme map and
  subproject cards on the parent, and previous/next that stays inside the
  programme rather than escaping it halfway through

`routes.jsx` needs two entries (`work/:slug` and `work/casa/:slug`) because
React Router matches segment by segment. Both render the same `CaseStudy`
component, which resolves its record from `useLocation().pathname` rather than
from a param. That keeps `content/projects.js` the single source of truth for
routing, sitemap generation and structured data.

## Records carry their own gaps

Every project record has an optional `gaps` array and may use square brackets
inside body copy. `components/Editorial.jsx` renders both:

- `marked(text)` splits on `[…]` and wraps each one in `<mark class="ph-mark">`
  with a visually hidden "Editorial placeholder:" prefix
- `<Gaps items={…}>` renders the per-page panel

Nothing else in the content uses square brackets, which is what makes the
marker unambiguous. `verify.mjs` counts them, reports where they are, and fails
the build when `PUBLISH=1`.

The same idea applies to imagery. A figure may carry `placeholder: { label,
note, ratio }` instead of `image`, and a card may carry `card.placeholder`.
Both render a labelled empty plate that says which asset belongs there and why
it is missing. The rule this encodes: mark the gap, never borrow a screen from
another project.

## Two verification scripts, not one

`verify.mjs` is a publishing guardrail — it answers "may this ship". It is
unchanged in intent from V2, extended for the new routes and the placeholder
count.

`audit.mjs` is a review pass — it answers "is this any good". Heading order,
alt-text quality, intrinsic dimensions, loading strategy, duplicate imagery
within a page, accessible names, named landmarks, computed contrast for every
token pair, the presence of focus / reduced-motion / touch-target rules, and a
per-page allow-list for CASA image attribution.

They are separate because they fail for different reasons and at different
times. A publishing guardrail should be conservative and rarely change; a
review pass should get stricter as the site matures.
