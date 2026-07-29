# glennhammond.com — Release One prototype

High-fidelity working prototype built to the **Glenn Hammond Website Experience
Blueprint v1.0**. Territory A, *The Whole System*; organising idea *Four Layers,
One Owner*; visual territory *Instrument*.

**Status: prototype for review. Not production.** The enquiry form is mocked and
the privacy notice is deliberately unwritten. See `INTEGRATIONS.md`.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build and check

```bash
npm run build        # static pre-render to dist/ + sitemap and robots
npm run verify       # guardrail checks against dist/
npm run check        # both, in order
```

`npm run verify` fails the build on placeholder copy, unapproved client names or
logos, withheld routes appearing, missing metadata, broken internal links,
third-party requests, or a blown performance budget. It is the blueprint's
publishing guardrails expressed as code rather than as a checklist.

## Regenerate imagery

```bash
npm run images
```

Crops the raw Wellbeing Studio captures in `src/assets/ws/source/` to remove
browser chrome and emits AVIF + WebP at two widths. Sources are never modified.
Outputs are committed, so a clean checkout builds without running sharp.

---

## What is here

| Route | Content |
| --- | --- |
| `/` | Homepage, seven beats |
| `/work` | Work index with layer filter |
| `/work/wellbeing-studio` | **Flagship** case study, including the decision log |
| `/work/connect-and-learn` | Standard case study |
| `/work/flight-examiner-rating` | Standard case study |
| `/work/goodstart-myportal` | Project note |
| `/practice` | Four layers + four engagements |
| `/about` | Summary, method, dated history |
| `/contact` | Layer-qualified enquiry |
| `/privacy` | Structure only — requires approved legal content |
| `/404` | Not found |

Ten indexable URLs, all pre-rendered to static HTML.

## Stack

React 18 · Vite 6 · `vite-react-ssg` · React Router 6 · plain CSS with design
tokens. No CSS framework, no component library, no state library, no animation
library. Content is plain JavaScript modules in `src/content/`, ready to move
behind a git-backed CMS without touching a component.

## Documentation

- `ARCHITECTURE.md` — how the code is organised and why
- `DECISIONS.md` — every deviation from the blueprint, with its reason
- `CONTENT-REGISTER.md` — status of every claim and asset; what is still missing
- `INTEGRATIONS.md` — what must be wired up before this can go live
- `VERIFICATION.md` — results of the checks run against this build

## Licensing note

`src/assets/fonts/` contains ITC Avant Garde Gothic Std, licensed to Glenn
Hammond. Do not redistribute this repository publicly with those files in place.
Inter and JetBrains Mono are SIL Open Font Licence and are bundled from npm.
