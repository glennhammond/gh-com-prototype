# Production integrations

What is live, what is deliberately absent, and what still has to be true before
new integrations are enabled.

No secret or API key is present in this repository. The Formspree form endpoint
is public client configuration by design.

---

## 1. Enquiry form — LIVE VIA FORMSPREE

`src/components/EnquiryForm.jsx` now submits contact enquiries to the Formspree
form `xbdnpnrp`.

The existing production form behaviour remains intact:

- four required fields with client-side validation;
- accessible field errors and error summary;
- focus management after validation, success and delivery failure;
- disabled sending state;
- optional problem-area and timeframe context;
- Formspree `_gotcha` honeypot;
- a direct email fallback;
- an in-page success state rather than a simulated confirmation.

The browser sends the form directly to Formspree using `fetch()` and requests a
JSON response. No Formspree React dependency is required because this project
already owns the form state, validation and accessibility behaviour.

The endpoint is intentionally visible in the client bundle. It is not a secret
credential and must not be treated as one.

**Production qualification still required after deployment:** submit one real
test enquiry from `https://glennhammond.com/contact` and confirm that it arrives
at the intended Formspree recipient with the expected sender details and fields.

---

## 2. Privacy policy — UPDATED FOR FORMSPREE

`/privacy` now describes the live enquiry behaviour before the form is promoted
to production. It states that contact details and message content are sent to
Formspree for delivery and that Formspree may process or retain submissions as
part of providing its service.

The page continues to state that this release does not include Google Analytics,
advertising pixels, personalisation, account tracking or marketing cookies.

Do not reintroduce a zero-retention claim for enquiry submissions unless the
actual Formspree account configuration and service behaviour have been verified
to support it.

---

## 3. Analytics — NOT INSTALLED

Deliberately absent from the prototype: it would set cookies with no privacy
notice in place, and `verify.mjs` fails the build on any third-party request.

Confirmed configuration for production:

| Setting | Value |
| --- | --- |
| Property | GA4, `445630278` |
| Measurement ID | `G-PXDLN9NVDG` |
| Account | `19566777` |
| IP anonymisation | on |
| Google Signals | off |
| Ad personalisation | off |
| Retention | 14 months |

Install only after `/privacy` is updated for the final analytics behaviour.
Relax the third-party check in `scripts/verify.mjs` to allowlist the required
Google runtime resources at that point.

---

## 4. Redirects — INCOMPLETE

`vercel.json` carries the redirects that are known from the previous codebase:
`/services` and `/services/xapi-analytics` → `/practice`, and the nine
`/design-system/*` routes → `/practice`.

**Still needed**: an inventory of the *current live site's* URLs. It is a
client-rendered app and could not be crawled during the blueprint work. Export a
URL list from Search Console or the existing build before cutover, or existing
search equity will be lost.

---

## 5. Git-backed CMS — NOT INSTALLED

Blueprint §29 Decision 05 recommends **Sveltia CMS** (Decap as the fallback):
git-backed, no database, no subscription, no lock-in, and it satisfies the
confirmed requirement for both code and no-code editing.

Not installed here because the collection config should be written against
*approved* content shapes, and the copy is still awaiting approval. The content
modules in `src/content/` are already shaped for it — see `ARCHITECTURE.md`.

Roughly two days: admin route, GitHub OAuth via a Vercel function, and one
collection per content type.

---

## 6. Open Graph image

`public/og.png` is inherited from the previous build and reflects the old
positioning. It should be redesigned for the current positioning before a later
brand-polish release.

---

## 7. Continuous integration — NOT SET UP

`npm run check` is the gate. Wire it into GitHub Actions on pull requests, and
add:

- `axe-core` accessibility scan against the built pages;
- Lighthouse CI against the budgets already in `verify.mjs`;
- a link checker across `dist/`.

The budgets and the content guardrails are already codified; only the runner is
missing.
