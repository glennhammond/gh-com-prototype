# THE RECORD — Release Closure 01

**Date:** 24 August 2026  
**Purpose:** close the two remaining human/external gates without reopening product architecture  
**Qualified source branch:** `proof/record-editorial-publication-01`

## 1. Current qualification state

The canonical Minimum Amazing product has passed:

- product/architecture qualification;
- production build and publication verification;
- static accessibility qualification;
- Visual & Interaction Proof static/source qualification;
- Minimum Amazing Editorial & Publication Proof.

The remaining work is deliberately narrow.

Do **not** use this phase to add Projects, Records, Artefacts, page patterns or motion.

## 2. Gate A — external browser closure

### Test environment

Use the final immutable preview from this branch rather than a production domain.

Run the matrix below in a genuine browser capable of reaching the Vercel preview.

### Representative route set

1. `/` — Home
2. `/work` — Work field
3. `/work/wellbeing-studio` — multi-Record Project
4. `/work/connect-and-learn` — single-Record Project
5. `/work/wellbeing-studio/contextual-entry` — Record with semantic Artefact preview
6. `/work/casa/flight-examiner-rating/examiner-judgement` — historical-evidence Record
7. `/work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning` — recovered historical Artefact
8. `/work/tafe-pathways/supporting-conversation/exploration-environment` — historical interface sequence
9. `/practice`
10. `/about`
11. `/contact`

### Viewport matrix

| Width | Purpose | Minimum route coverage |
| --- | --- | --- |
| ~1440px | full desktop composition | all representative routes |
| ~1024px | intermediate desktop/tablet landscape | Home, Work, Project, Record, Artefact, Practice |
| ~768px | tablet / transition breakpoint | Home, Work, Record, Artefact, Practice |
| ~390px | narrow mobile | all representative routes |

### Enlarged-text / zoom matrix

At minimum:

- 200% browser zoom at a desktop viewport;
- 200% zoom at a narrow/intermediate viewport where practical;
- verify no horizontal page scrolling caused by text/layout;
- verify Meta-Frame controls and current-scope text remain usable;
- verify long Project/Record/Artefact titles wrap without clipping or obscuring controls;
- verify evidence captions and lists remain in reading order.

### Keyboard traversal

For Home, Work, one Record, one Artefact, Practice and Contact:

- Tab from browser chrome into the page;
- verify `Skip to main content` becomes visible and works;
- verify focus is always visible;
- verify primary navigation order is logical;
- on narrow viewport, open/close Menu by keyboard and verify Escape returns focus to Menu;
- verify links in evidence lists and relationship sections are reachable in document order;
- verify focus is never hidden behind the Meta-Frame.

### Reduced motion

With `prefers-reduced-motion: reduce` enabled:

- verify no decorative transition is introduced by route changes;
- verify Meta-Frame inspection state remains fully legible;
- verify focus and navigation changes are immediate and understandable.

### Required journey 1 — Record → Artefact → Return

Use:

`/work/wellbeing-studio/contextual-entry`

1. Tab/focus the `Inspect the artefact` link.
2. Activate it.
3. Confirm the Artefact is clearly identified on direct arrival.
4. Activate `Return to Record`.
5. Confirm focus returns to the original Artefact-entry link rather than restarting at the top of the Record.

Repeat once using CASA or TAFE recovered evidence.

### Required journey 2 — browser Back / Forward

1. Enter Work.
2. Navigate to a Project, then a Record.
3. Scroll to a meaningful mid-page position and focus a link/control.
4. Navigate deeper.
5. Use browser **Back**.
6. Confirm the previous scroll position and a meaningful focus target are restored without theatrical motion.
7. Use browser **Forward** and confirm the route returns predictably.

### Pass condition

Gate A passes when no issue materially damages:

- orientation;
- evidence hierarchy;
- legibility;
- focus/keyboard use;
- reflow;
- Project → Record → Artefact movement;
- direct-entry comprehension;
- browser-history behaviour.

Small cosmetic differences between browsers are not release blockers unless they change those behaviours.

## 3. Gate B — final publication-permission sign-off

Repository publication controls already confirm that the four canonical Project organisation names are permitted by the current publication register. Logo approval is separately controlled.

This final gate concerns **the specific evidence/material appearing in the public product**, not merely the organisation name.

### Sign-off matrix

| Territory | Canonical evidence | Material type | Final human check |
| --- | --- | --- | --- |
| Wellbeing Studio 2027 | Daily wellbeing journey | semantic reconstruction of adopted product/experience thinking | confirm no confidential or unpublished organisational detail is exposed |
| Wellbeing Studio 2027 | Connected-service relationship model | semantic architectural reconstruction | confirm no confidential or unpublished organisational detail is exposed |
| Wellbeing Studio 2027 | R U OK? production qualification map | production history / commit provenance | confirm commit/provenance references and implementation history are suitable for public release |
| ISQ Connect & Learn | migration dependency map | semantic reconstruction from confirmed migration facts | confirm the described operational/migration facts are cleared for public publication |
| CASA Flight Examiner Rating | assessment reasoning sequence | recovered course/interface evidence | confirm the displayed recovered screens and surrounding explanatory copy are cleared for public publication |
| TAFE SkillsTech Pathways | exploration environment | recovered historical interface evidence | confirm the displayed historical screens and surrounding explanatory copy are cleared for public publication |

### Permission rules

- A Project name being approved does **not** automatically approve every screenshot, document or historical artefact.
- A logo may only appear where the publication register explicitly permits it.
- Do not replace a missing approval with a reconstructed client-branded screen.
- If one evidence item cannot be cleared, remove or substitute that item without redesigning the Project/Record architecture.
- Do not manufacture evidence to keep visual density equal across territories.

### Pass condition

Gate B passes when each canonical evidence item is either:

1. explicitly cleared for public use; or
2. removed/replaced by an already-supported non-confidential evidence treatment.

## 4. Gate C — integration decision

Once Gate A and Gate B pass:

1. confirm the qualified branch head has not drifted;
2. reconcile `proof/record-editorial-publication-01` into the intended release/integration branch;
3. rerun `PUBLISH=1 npm run check` on the reconciled head;
4. verify the normal Vercel preview build command is restored afterwards;
5. keep `main` deployment protection in place until the explicit production-release decision.

Do not use integration as an opportunity for unrelated cleanup.

## 5. Gate D — explicit go-live decision

Only after A–C pass should the product move to domain/release work.

That decision may include:

- creating/promoting the production deployment;
- attaching or moving `glennhammond.com`;
- deciding whether the `main` automatic-deployment guard should remain or change;
- verifying historical redirects on the production domain;
- verifying `robots.txt`, sitemap and canonical URLs in production;
- refreshing/submitting the sitemap in Google Search Console;
- monitoring 404s and unexpected legacy landings after cutover.

None of those actions is authorised merely by completing this checklist.

## 6. Stop rule

If Gate A or B reveals a problem, fix the **smallest evidence-backed issue** and rerun the affected gate.

Reopen product architecture only if the failure cannot be solved without changing the meaning of Project → Record → Artefact or the direct-entry/evidence model.
