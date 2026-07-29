# Production integrations still required

What is mocked, what is missing, and what has to be true before this goes live.
No secret, key, endpoint or account identifier is present anywhere in this
repository.

---

## 1. Enquiry form — MOCKED

**Now** — `submitEnquiry()` at the bottom of
`src/components/EnquiryForm.jsx` waits 450ms and resolves. Nothing is sent,
nothing is stored. The success screen says so explicitly, so a reviewer cannot
mistake it for a working form.

**Everything else is real**: validation, error summary, focus management, ARIA
wiring, the honeypot, the layer qualification, and the disabled sending state.

**To make it live**, replace that one function. Nothing else changes.

Recommended shape, per blueprint §24:

```
POST /api/enquiry   →  Vercel serverless function
                    →  Resend (or Formspark / Postmark)
                    →  glenn@glennhammond.com
```

Requirements:

- **No submission store.** Confirmed decision in the Master Copy: deliver by
  email, retain nothing.
- **No CAPTCHA.** WCAG 2.2 SC 3.3.8. The honeypot field
  (`company-url`) plus server-side IP rate limiting is the intended defence.
  Reject any submission where the honeypot is non-empty.
- Validate again on the server using `src/lib/validation.js` — it is pure and
  has no DOM or React dependency for exactly this reason.
- Set a sensible max body size and a per-IP limit.
- API key in a Vercel environment variable. Never in the client bundle.

---

## 2. Privacy policy — BLOCKER

`/privacy` ships the correct structure and factual scope with every operative
clause left explicitly blank, and a visible notice saying it must not go live as
it stands.

Required before the form or analytics are switched on:

- Approved wording for each of the five sections
- Retention period for enquiry emails
- Access, correction and complaints pathway, referencing the OAIC
- Confirmation of whether a cookie notice is needed for the final GA4 config

This is not a design task. It will be forgotten unless it is scheduled.

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

Install only after `/privacy` is live. Relax the third-party check in
`scripts/verify.mjs` to allowlist `googletagmanager.com` at that point.

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
positioning. It should be redesigned for *The course is the easy part* before
launch — it is the first thing anyone sees when Glenn shares a link.

---

## 7. Continuous integration — NOT SET UP

`npm run check` is the gate. Wire it into GitHub Actions on pull requests, and
add:

- `axe-core` accessibility scan against the built pages
- Lighthouse CI against the budgets already in `verify.mjs`
- a link checker across `dist/`

The budgets and the content guardrails are already codified; only the runner is
missing.
