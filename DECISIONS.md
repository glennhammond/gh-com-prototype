# Deviations from the blueprint

Every departure, with its reason and its consequence. Nothing here changes the
strategic position; all of it is execution.

---

## 1. Client evidence is set as type, not as logos

**Blueprint §12 beat 04** specifies a row of four approved client marks.

**What was built** — the four approved client *names* set typographically, with
their sector beneath.

**Why** — only two of the four approved clients (ISQ, CASA) have a supplied logo
file. Corporate Yoga Australia and Goodstart Early Learning do not. The three
logo files that *do* exist in the previous codebase — Torres and Cape HHS,
Seqwater, TAFE Queensland — belong to clients with no approval record and are
excluded from this build entirely. A row of two marks and two names reads as
broken; four names read as deliberate.

**Consequence** — slightly weaker instant recognition for a scanning buyer.
Reversible the moment all four logos are supplied and cleared: `clients.js`
already carries the fields, and the component reads `approvedLogos()`.

---

## 2. The homepage four-layer section is not a tab set

**Blueprint §12 beat 02 and §20** propose an ARIA tab set on the homepage.

**What was built** — all four layers shown at once, each linking into the work
index pre-filtered by that layer (`/work?layer=platform`).

**Why** — the stated purpose is "let a buyer go straight to the layer they
recognise as their problem". Four short panels shown at once serve that better
than making the visitor click, and it removes a hydration flash, a keyboard
pattern and a JavaScript dependency from the single most important section of
the site. It also keeps beat 02 to one screen rather than four stacked ones.

The full ARIA tab treatment **is** implemented, on `/practice`, where each layer
carries enough content to justify hiding three of four.

**Consequence** — the homepage's four-layer interaction is a link rather than a
tab. It works on every device, by keyboard, and without JavaScript.

---

## 3. Vite 5 → 6, `vite-react-ssg` beta → stable

**What was built** — Vite 6.3, `vite-react-ssg` 0.9.2, `@vitejs/plugin-react`
4.6.

**Why** — the supplied project pinned `vite-react-ssg@0.9.1-beta.1`, and 0.9.2
requires Vite 6. Shipping a handover on a pinned beta is worse than a routine
major bump. The pre-rendering approach is unchanged, as the blueprint asks.

**Consequence** — none observed. Full build verified: 11 pages rendered,
sitemap and robots generated.

---

## 4. Dark theme removed

The supplied codebase had a `ThemeContext`, a `localStorage` theme flag and a
`[data-theme="dark"]` token block.

**Why** — the blueprint specifies a paper-first system with ink bands as the
structural device. A user-toggled dark mode doubles the design surface, competes
with the ink-band rhythm that carries the argument, and is not mentioned
anywhere in the strategy. The inline theme script also caused a flash.

**Consequence** — one less feature to maintain. Re-adding it later means
restoring one token block; the `.on-ink` mechanism already proves every
component works on a dark ground.

---

## 5. Routes removed for Release One

- `/services` and `/services/xapi-analytics` — folded into `/practice`. The
  Master Copy confirms xAPI is a supporting capability, not a proposition; a
  dedicated route contradicted that. Redirects are configured in `vercel.json`.
- `/design-system/*` (nine routes) — deferred to Release Two per §27.
- `/work/child-protection-program` — **withheld**. The previous build shipped
  this route containing bracketed `[To be written]` copy. It is recorded in
  `withheldProjects` so the decision stays visible, and `verify.mjs` fails the
  build if it is ever rendered without being written properly.

---

## 6. The Wellbeing Studio decision log

**Blueprint §26** lists "three decisions, with the alternative rejected" as a
**blocker**, on the basis that only Glenn knows what he chose against.

**What was built** — three decisions, each traceable to the supplied
`concept-to-platform` project record: the Moodle choice and its explicit UX
cost; replay treated as a core feature rather than catch-up; the rename from
Corporate Wellbeing Studio to Wellbeing Studio.

**Why** — the record states all three decisions and, in the Moodle case, states
the trade-off in Glenn's own terms ("significant effort was required to overcome
traditional Moodle UX limitations"). Nothing was invented.

**Consequence** — the *framing* of each rejected alternative is editorial and
needs Glenn's confirmation before launch. Marked `proposed` in `projects.js`.
This is the single highest-value review item in the build.

---

## 7. CASA imagery held back

Approved 2021 Flight Examiner Rating screenshots exist. They are not used.

**Why** — §19 requires interfaces to be cropped and art-directed, and §27
explicitly permits "two case studies without client imagery, carried by
diagrams" as an acceptable Release One state. Publishing 2021-era screenshots
raw would breach the imagery direction on a page whose whole subject is rigour.

**Consequence** — Flight Examiner Rating is carried by structure and type.
Add the images once cropped through `scripts/images.mjs`.

---

## 8. The 24-hour reply is stated

The brief said not to imply a live 24-hour commitment unless Glenn has approved
it. He has: the Master Copy lists *"Set the enquiry response expectation to
within 24 hours"* among the confirmed source-of-truth decisions. It is rendered
on the homepage close, the contact page and in the footer, and is sourced in
`content/site.js`. Remove `site.responsePromise` to withdraw it everywhere.

---

## 9. No portrait on About

The supplied portrait is approved for the About page. It is not used yet.

**Why** — §19 requires it tightly cropped and graded to the palette. Dropping in
a 6000×3376 landscape frame raw would undercut the art direction on the one page
where Glenn's presence matters. The page is written to work without it.

**Consequence** — About is currently type-only. Crop, grade, and add.

---

# V3 deviations

## 10. The Work index gained a tier, and the flagship kept its place

**What was built** — three tiers: Featured program, case studies,
prototypes. CASA is the only programme; Wellbeing Studio is the first and
widest card inside the case-study tier.

**Why** — the V3 brief's recommended hierarchy put CASA at the top and did not
mention Wellbeing Studio or Connect & Learn at all. Dropping them would have
removed the only live product in the portfolio and the only award-winning
project. Glenn confirmed the merge. The programme sits above the case studies
because six years and five projects is a different kind of claim, not because
it is better work.

**Consequence** — thirteen routed case-study pages instead of four. Hierarchy
has to do real work, which is why each tier has a heading in the document
outline as well as a size on screen.

## 11. AviationWorx is published without imagery

**What was built** — a full case-study page carried by type, with three
labelled image placeholders and an evidence note explaining the absence.

**Why** — no asset in the archive carries the AviationWorx identity. Both
platform screenshots show CLASS. Borrowing a CLASS screen for the AviationWorx
page would be the exact failure the brief names.

**Consequence** — the thinnest page on the site is one of the two things Glenn
has specifically confirmed he built. That is uncomfortable and correct.

## 12. Three clients cleared, no logos

**What was built** — TAFE Queensland, Sonic HealthPlus and Safetyhub added to
`clients.js` as `nameApproved`, dated 27 Jul 2026, on Glenn's confirmation.

**Why** — the V2 register had TAFE Queensland as permission-required and did
not carry the other two at all, which would have failed the build.

**Consequence** — `logoApproved` stays false for all three, and the
`nameApproved`/`logoApproved` split is doing its job. The logo-asset check in
`verify.mjs` was rewritten to derive its allow-list from the register rather
than from a hard-coded list of three names.

## 13. The JS budget was raised, and the reason is written down

**What was built** — budget moved from 120 KB to 140 KB gzipped. Measured 127.

**Why** — V2 shipped four routed case studies and measured 102 KB. V3 ships
fourteen. All the content is in the client bundle because the whole tree
hydrates.

**Consequence** — this is a real regression, not a rounding error, and raising
the budget is a deferral rather than a fix. The fix is structural: load
case-study records per route, or stop hydrating the case-study routes, since
nothing on them is interactive except the image dialog. Recorded as open in
`V3-STATUS.md`. The budget was raised rather than removed so the next
regression still fails the build.

## 14. Copy is written without em dashes

**Why** — Glenn's stated working style.

**Consequence** — inherited V2 copy still contains them, so the site is
currently mixed. Sweeping `src/content/` is a contained follow-up pass and was
not done unasked, because mechanical replacement of an em dash produces bad
prose about a third of the time.

---

# V3.2 deviations

## 15. The "still to confirm" panel is no longer public

**What was built** — `Gaps`, the per-page "Still to confirm before this page
is published" panel, is removed from `CaseStudy.jsx` and from
`Editorial.jsx`/`Editorial.css`. Every project record keeps its `gaps` array;
`GAPS.md` is still generated from it. The data is internal now, not rendered.

**Why** — appropriate for an internal review artefact, wrong for a live
portfolio a prospective client reads. A visible "still to confirm" list on
every case study undercut the site's own evidence-led voice at exactly the
pages meant to demonstrate it.

**Consequence** — nothing on screen tells a reader what is unconfirmed. The
`EvidenceNote` pattern (a public, editorial explanation of a specific
evidentiary limit, e.g. "no learner-facing imagery has been approved") is
kept and remains the correct tool where a reader genuinely needs to know why
something is not shown.

## 16. Connect & Learn's audience figure is stated without a number

**What was built** — the disputed audience figure (Master Copy: "approximately
50,000 educators"; CV: "28,000 users") is removed from `about.js` and from the
Connect & Learn card's evidence panel in `projects.js`. Both now describe the
audience without a number ("teachers, principals, board members and
volunteers across ISQ member schools").

**Why** — the two source figures disagree by a large margin and neither is
confirmed. Publishing either as if settled overstates certainty; publishing
both is inconsistent. `gaps` on the Connect & Learn record keeps the
reconciliation item for when Glenn confirms one.

**Consequence** — the card's evidence panel now shows two figures (engagement
length, course count) instead of three. Reversible the moment a figure is
confirmed: restore the `dt`/`dd` pair in `card.panel.figures`.

## 17. `/services` redirect direction fixed

**What was built** — `vercel.json` redirected `/services → /practice`, a route
that has not existed since Decision 5 folded `/practice` into `/services`. The
redirect now runs the other way: `/practice`, `/services/xapi-analytics` and
`/design-system/*` all redirect to `/services`, which is the live route.

**Why** — the old redirect made `/services` — the route actually in
`routes.jsx` and linked from the header nav — permanently redirect to a page
that does not exist. This was very likely shipped backwards by mistake when
Decision 5 renamed the route and the redirect was not updated to match.

**Consequence** — none. This restores the routing comment's own stated intent.

## 18. ISQ eLearning Design System added as a case study, not a microsite

**What was built** — a new project record in `projects.js`
(`/work/isq-elearning-design-system`), a dedicated homepage featured-system
section, and two new optional, generic section types added to
`CaseStudy.jsx` (a system-architecture flow and a selected-components list),
gated on fields no other record sets. No existing case study's rendering
changes.

**Why** — the live ISQ design-system site and its source repository were both
unreachable from this environment (network policy denies the live domain;
this session's GitHub access is not scoped to that repository). Per Glenn's
direction, the case study proceeds on qualitative, conservative language
rather than guessed numbers: no component count, no asserted maturity-state
label set, no claim about the reference site's own build stack. All eight
required visual subjects are placeholders in the site's existing "image to
supply" pattern (the same device already used on `/work/casa/aviationworx`),
not fabricated screens.

**Consequence** — the case study is honest but visually thinner than it
should eventually be. See the implementation report for the full list of
claims that need verification against the live system before publication.

---

# SEO migration Phase A (18 August 2026)

## 19. `/practice` supersedes `/services` as the canonical capability route

**Supersedes Decision 17.** Decision 17 is left exactly as written above — it
was correct given what was known at the time, and the record stays intact.
This entry does not rewrite it; it overrides its conclusion for a different,
later reason.

**What was built** — `/practice` is now the canonical route for the four-layer
capability page. `routes.jsx`, `content/site.js` (nav and internal copy),
`vercel.json`, `scripts/postbuild.mjs` and `scripts/verify.mjs` were all
updated together. `vercel.json` now redirects `/services`,
`/services/xapi-analytics` and `/design-system/*` directly to `/practice`
(no chains). The two specialist-practice pages,
`/services/rise-design-systems` and `/services/storyline-development`, keep
their existing URLs unchanged — only their breadcrumbs and cross-links now
point at `/practice` as the parent overview.

**Why** — `docs/SEO-MIGRATION.md` (dated 18 Aug 2026) is an external
architectural constraint document that locks in `/practice` as canonical and
`/services → /practice` as a required redirect, with `Practice` named in
primary navigation. Decision 17's reasoning ("`/services` is the route
actually in `routes.jsx`") was sound as an internal-consistency fix at the
time, but the migration document is the newer and more authoritative source
for this specific question, and it was written with full knowledge of the
prior state.

**Consequence** — none of the underlying Services/Practice page content or
visual treatment changed; this is a route and nav-label migration only. Any
inbound link or bookmark to `/services` (however it accrued) is preserved via
the 301. The two specialist pages remain nested under a `/services/` path
segment that no longer matches their logical parent's URL — a known,
accepted asymmetry recorded here rather than silently carried. Revisiting
that nesting is out of scope for Phase A.

---

# Flagship restructure (18 August 2026)

## 20. Three flagship projects replace the CASA program as homepage and Work-page lead content

**What was built:** `content/projects.js` gained a `flagships` export (Wellbeing Studio, ISQ Connect & Learn, CASA Flight Examiner Rating, in that fixed order) and `workIndex` was restructured into `flagships`, `secondary` and `lab` tiers. Home and Work both render a one-plus-two composition from this array. The CASA program overview remains live and discoverable as the lead entry of the secondary tier, with its card copy revised to name Flight Examiner Rating naturally rather than carry a flagship badge.

**Why:** directed by Glenn. Three specific projects, not the CASA program as a whole, carry primary editorial prominence, in an order reflecting recency and completeness of end-to-end ownership demonstrated (Wellbeing Studio, then Connect & Learn, then CASA Flight Examiner Rating), not client, array position or alphabetical order.

**Consequence:** every previously live route stays live and indexable. No project moved into `withheldProjects`. CASA's four other children (AviationWorx, CLASS, course system, learning catalogue) are no longer individually listed on the Work page; they remain reachable through the CASA program page's own navigation, unchanged.

## 21. Six-project secondary selection on the Work page

**What was built:** the Work page's "Selected additional work" tier shows six cards: the CASA program overview, the ISQ eLearning Design System, TAFE Queensland, Goodstart MyPortal, Sonic HealthPlus and Safetyhub. ISQ Differentiated Learning stays live and indexable at its existing route but carries no Work-page card.

**Why:** selection criteria were approved status, evidence completeness (approved imagery versus placeholder figures), recency, sector diversity and capability coverage not already carried by the three flagships. ISQ Differentiated Learning's capability area (content design and learning experience) is already carried at strength by CASA Flight Examiner Rating and Wellbeing Studio, and it is the third ISQ-attributed entry after Connect & Learn and the ISQ eLearning Design System.

**Consequence:** `/work/isq-differentiated-learning` remains a live route, in the sitemap, and covered by `scripts/verify.mjs`'s required-page checks. Removing it from the Work-page grid is a display decision, not a withdrawal.

## 22. Approach becomes the canonical home of the four-layer argument; the Featured System band is removed

**What was built:** a new `/approach` route and `content/approach.js`, added to primary navigation. Home's dedicated ISQ eLearning Design System band (the `FeaturedSystem` component) was removed entirely; the component and its stylesheet were deleted, since Home was their only consumer. The "work is lost in the joins" argument, previously stated in full on Home, Practice and About, is now stated once on Approach; the other three pages carry a shortened version and a link.

**Why:** directed by Glenn, to stop the homepage presenting a fourth prominent item alongside the three flagships, and to stop the same diagnostic argument being restated three times across the site. Every project-specific claim on Approach is a narrower restatement of an already-approved sentence on that project's own case-study record (Wellbeing Studio's publishing and replay workflow, Connect & Learn's platform-and-content sequencing, CASA Flight Examiner Rating's use of the program's production system); no new fact, cause or outcome was introduced.

**Consequence:** `/practice` keeps "Capabilities" as its nav label and page identity, consistent with the original migration brief. `scripts/verify.mjs` gained an `approach.html` required-content entry and `/approach` in its internal-link allow list; no existing required-page entry was removed.
