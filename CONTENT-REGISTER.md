# Content and asset register

Status of every claim and asset in the prototype, and what is still missing.
Machine-readable equivalents live in `src/content/*.js` as `status` and
`source` fields; `npm run verify` enforces them.

**Statuses** — `approved` · `permission-required` · `proposed` ·
`evidence-pending` · `restricted` · `placeholder`

---

## Facts published in this build

| Claim | Status | Source |
| --- | --- | --- |
| Approximately 50,000 educators, Connect & Learn | approved | Master Copy, confirmed 25 Jul 2026 |
| More than 60 Storyline courses redeveloped | approved | Master Copy |
| Three-month engagement, 2024, eLearning Specialist | approved | Master Copy |
| Migration from Cornerstone to ISQ-hosted Moodle | approved | Master Copy |
| Two Diamond Awards, Best eLearning Project, LearnX 2024 | approved | Master Copy |
| 640 Goodstart centres; Certificate III and Diploma | approved | Master Copy |
| Fifteen years' experience | approved | Master Copy |
| CASA 2015–2021, eLearning Specialist | approved | Master Copy / CV |
| Client names: ISQ, CASA, Corporate Yoga Australia, Goodstart | approved | Master Copy |
| Testimonial — Debby Lewis, Founder, Corporate Yoga Australia | approved | Master Copy, approved 25 Jul 2026 |
| 24-hour enquiry response expectation | approved | Master Copy |
| Brisbane; working Australia-wide | approved | Master Copy |
| Qualifications: UX Design, TAE40116, Dip. Graphic Design, BA | approved | CV via Master Copy |
| Wellbeing Studio platform stack and scope | proposed | `concept-to-platform` record |
| All homepage, Practice and About copy | proposed | Blueprint v1.0 |
| The three Wellbeing Studio decisions | proposed | `concept-to-platform` record; framing needs confirmation |

## Deliberately absent

| Item | Why |
| --- | --- |
| Any Wellbeing Studio participant, client or engagement figure | Does not exist. The case study says so rather than estimating. |
| Cromwell Property Group by name | Permission not confirmed. Referred to only as "a first enterprise pilot" — no identifying descriptor. |
| Connect & Learn participation / admin-time figures | Not released. Stated as unclaimed on the page. |
| CASA audience size, evaluation results | Not published; confidentiality boundary unconfirmed. |
| Goodstart adoption or completion data | Does not exist for 2014–15 work. |
| Design-system production savings, component counts, a11y results | The supplied archive's sample metrics are placeholders and must never surface. |
| Second and third testimonials | Only one qualifies. |
| Personal dimension on About | Cannot be invented. Section omitted rather than shipped thin. |
| Prices or indicative ranges | No commercial data supplied. |
| Privacy policy wording | Requires legal review. Structure only. |

## Assets

| Asset | Status | Note |
| --- | --- | --- |
| ITC Avant Garde Demi + Bold | licensed | Self-hosted. Do not redistribute publicly. |
| Inter Variable, JetBrains Mono | OFL | Latin subset only, bundled from npm |
| Wordmark SVG | approved | Inlined from the supplied file, unmodified |
| 6 Wellbeing Studio captures | approved | Cropped through `scripts/images.mjs`; browser chrome and scrollbars removed |
| ISQ + CASA logo files | approved | **Present in repo but unused** — see DECISIONS.md §1 |
| Torres and Cape, Seqwater, TAFE Qld logos | permission-required | **Excluded from this build.** `verify.mjs` fails if they reappear |
| Glenn's portrait | approved | Not yet used — needs crop and grade |
| CASA 2021 screenshots | approved | Not yet used — need art direction |
| 7 ISQ eLearning Design System component captures | approved | Cropped through `scripts/images.mjs`; **present in repo but not yet placed on the page** — see DECISIONS.md §19–20. Six carry the component library's own demonstration copy, not published-course content |
| `og.png` | inherited | Carried over from the previous build; should be redesigned for the new position |

---

## Required before launch — ordered by impact

1. **Approve or reject the position and the homepage copy.** Everything else is
   downstream.
2. **Resolve the three client logos.** Confirm or remove permanently.
3. **Confirm the three Wellbeing Studio decisions** and the framing of each
   rejected alternative. One conversation; the highest-value item here.
4. **Privacy policy** — legal content for `/privacy`. Launch blocker.
5. **LearnX certificate** — to fix exact award wording in copy and schema.
6. **Personal dimension** — three short answers for About.
7. Wellbeing Studio outcome figures, if they can be obtained.
8. Cromwell naming permission.
9. Connect & Learn screenshots.
10. Second and third testimonials.
11. Child Protection Program written in restricted form, or dropped for good.
12. Old-URL inventory from the current live site, for redirects.
