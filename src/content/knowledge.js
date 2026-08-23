// @ts-check

/**
 * Retained standalone knowledge.
 *
 * These are not blog posts and do not form a publishing cadence. A resource
 * belongs here only when it has durable standalone value that THE RECORD does
 * not express adequately, or when historical authority/citations justify
 * preserving the canonical URL.
 */

export const knowledgeResources = [
  {
    id: 'principles-assessment-rules-evidence',
    path: '/principles-of-assessment-and-rules-of-evidence',
    eyebrow: 'Retained knowledge · Australian VET assessment',
    title: 'Principles of Assessment and Rules of Evidence',
    description:
      'A current plain-language reference to the Principles of Assessment and Rules of Evidence under the 2025 Standards for RTOs, with the distinction between assessment process and assessment evidence made explicit.',
    updated: '24 August 2026',
    jurisdictionNote:
      'This page describes Standard 1.4 for RTOs regulated by the Australian Skills Quality Authority (ASQA). Western Australia and Victoria have separate VET regulators; providers should check the requirements that apply to their own registration.',
    introduction: [
      'The Principles of Assessment and Rules of Evidence answer two related but different questions. The principles describe how an assessment system should support fair, appropriate and consistent assessment. The rules describe what an assessor must be satisfied about when making an individual judgement from the evidence presented.',
      'Under the 2025 Standards for Registered Training Organisations, these requirements sit in Standard 1.4. The 2025 Standards came into effect on 1 July 2025, replacing the previous 2015 Standards for ASQA-regulated RTOs.',
    ],
    principles: [
      {
        name: 'Fairness',
        summary:
          'Assessment accommodates the VET student’s needs, including reasonable adjustment where appropriate, and enables reassessment where necessary.',
        designQuestion:
          'Does the assessment process give this student a fair opportunity to demonstrate competence without changing the competency standard?',
      },
      {
        name: 'Flexibility',
        summary:
          'Assessment is appropriate to the context, the training product and the individual student, and recognises relevant skills and knowledge regardless of how or where they were acquired.',
        designQuestion:
          'Is the method appropriate to this learner and context while still gathering the evidence the training product requires?',
      },
      {
        name: 'Validity',
        summary:
          'Assessment includes practical application that enables the student to demonstrate the relevant skills and knowledge in an appropriate practical setting.',
        designQuestion:
          'Does the assessment require the learner to demonstrate the competency, rather than only describe or recall it?',
      },
      {
        name: 'Reliability',
        summary:
          'Assessment evidence is interpreted consistently and assessment outcomes are comparable irrespective of which assessor conducts the assessment.',
        designQuestion:
          'Would another competent assessor using the same criteria be able to reach a comparable judgement from the same performance?',
      },
    ],
    rules: [
      {
        name: 'Validity',
        summary:
          'The evidence is adequate for the assessor to be reasonably assured that the student possesses the skills and knowledge described in the training product.',
        judgementQuestion:
          'Does this evidence genuinely demonstrate the competency being assessed?',
      },
      {
        name: 'Sufficiency',
        summary:
          'The quality, quantity and relevance of the evidence are enough for an informed judgement of competency.',
        judgementQuestion:
          'Is there enough relevant evidence to make a defensible judgement rather than relying on one narrow observation?',
      },
      {
        name: 'Authenticity',
        summary:
          'The assessor is assured that the evidence is the original and genuine work of the student.',
        judgementQuestion:
          'Am I sufficiently confident that this learner produced or performed the evidence?',
      },
      {
        name: 'Currency',
        summary:
          'The evidence demonstrates the student’s current skills and knowledge.',
        judgementQuestion:
          'Does the evidence show present competence rather than only capability from the distant past?',
      },
    ],
    distinction: {
      heading: 'Why validity appears twice',
      paragraphs: [
        'Validity is both a Principle of Assessment and a Rule of Evidence because the assessment process and the evidence judgement can each fail in different ways.',
        'At the process level, validity asks whether the assessment enables practical demonstration of the relevant skills and knowledge. At the evidence level, validity asks whether the evidence gathered is adequate to support the assessor’s judgement that the student has the competency described in the training product.',
      ],
    },
    application: [
      'Review assessment tools before use against the training product and Standard 1.4, rather than relying on a generic compliance checklist.',
      'Make the task, conditions, expected performance and evidence criteria clear to both student and assessor.',
      'Use practical demonstration where the competency requires performance, with theory supporting rather than substituting for application.',
      'Build decision-making rules and observable benchmarks that reduce avoidable variation between assessors.',
      'Design authenticity into online and portfolio assessment rather than trying to prove authorship after the evidence has been submitted.',
      'Treat validation and monitoring as feedback into the assessment system: a problem found in use should change the tool or process, not merely be recorded.',
    ],
    sources: [
      {
        label: 'ASQA — Assessment Practice Guide (Standards 1.3, 1.4 and 1.5)',
        href: 'https://www.asqa.gov.au/for-providers/standards-for-RTOs/practice-guides/quality-area-1-training-and-assessment/assessment-practice-guide',
      },
      {
        label: 'Federal Register of Legislation — Outcome Standards for NVR Registered Training Organisations Instrument 2025',
        href: 'https://www.legislation.gov.au/F2025L00354/latest/text',
      },
      {
        label: 'ASQA — About the 2025 Standards for RTOs',
        href: 'https://www.asqa.gov.au/for-providers/standards-for-RTOs/about-the-standards',
      },
    ],
    evidenceNote:
      'This URL is retained from the historical glennhammond.com knowledge estate. The content has been reconstructed against the current 2025 Standards rather than reproducing the older version, because an externally cited URL is only worth preserving if the information it now serves is accurate.',
  },
  {
    id: 'master-slides-storyline',
    type: 'article',
    path: '/blog/master-slides-in-storyline',
    eyebrow: 'Retained knowledge · Storyline production systems',
    title: 'Master Slides in Storyline',
    description:
      'How I use Storyline slide masters and layouts as part of a maintainable production system: what belongs on the master, what should stay local, and why consistency is a systems problem rather than a formatting exercise.',
    updated: '24 August 2026',
    introduction: [
      'For years I began Storyline projects by dutifully creating master slides, then gradually abandoned them as the course became more bespoke. The problem was not the feature. I was asking the master to behave like a finished template instead of treating it as one layer in a design system.',
      'Slide masters become useful when they hold the decisions that really are stable across a course: visual foundations, recurring layout structure and persistent interface elements. Interaction logic, scenario-specific behaviour and content-level exceptions belong elsewhere. That separation is what makes a system reusable without making every screen look identical.',
    ],
    sections: [
      {
        heading: 'What slide masters are good at',
        paragraphs: [
          'Articulate continues to describe Slide Masters as the Storyline mechanism for applying a consistent look and feel across slides and creating layouts for different content types. That is the right level of responsibility for them: shared presentation and structure, not every behavioural decision in the course.',
        ],
        bullets: [
          'Shared backgrounds, brand framing and persistent visual elements.',
          'Layouts for recurring screen families such as section openers, content, scenario setup and assessment framing.',
          'Theme-level typography and colour decisions that should not drift slide by slide.',
          'Placeholders and alignment structures that make the intended composition obvious to the next person authoring the course.',
        ],
      },
      {
        heading: 'Use a small architecture, not a giant template library',
        paragraphs: [
          'A production system becomes harder to use when every possible screen has its own layout. I prefer a small number of masters and layouts that express genuinely recurring structures, then reusable components for the variation inside them.',
        ],
        bullets: [
          'Start with one core master and add another only when a section has a genuinely different structural need.',
          'Name layouts by purpose rather than appearance: Section opener, Content + media, Scenario decision, Assessment frame.',
          'Keep the layout list short enough that another developer can choose correctly without opening a separate manual.',
          'If a layout exists for only one slide, question whether it should simply be a slide-level composition instead.',
        ],
      },
      {
        heading: 'What belongs on the master — and what does not',
        paragraphs: [
          'The useful boundary is stability. If changing an element should change every slide using that layout, the master is a good candidate. If the element depends on the meaning, state or logic of one interaction, it normally belongs at slide or component level.',
        ],
        bullets: [
          'Master: stable brand frame, recurring background treatments, layout geometry, persistent labels and carefully chosen global interface elements.',
          'Slide/component: scenario logic, conditional triggers, local variables, content-specific states, one-off media and interaction behaviour.',
          'Do not place logic on the master simply because it is technically reusable. Reuse is valuable only when authors can understand and safely modify the behaviour later.',
          'Treat feedback, navigation and accessibility behaviour as systems in their own right; a master can support them but does not remove the need to test them.',
        ],
      },
      {
        heading: 'Design-system thinking is the real advantage',
        paragraphs: [
          'The strongest benefit is not saving a few minutes while duplicating slides. It is moving recurring decisions out of individual course screens and into a governed foundation.',
        ],
        bullets: [
          'Define type roles and colour roles once, then use them consistently rather than styling objects ad hoc.',
          'Use predictable spacing and alignment rules so layouts feel related even when their content differs.',
          'Name masters, layouts, layers and reusable objects so their purpose survives handover.',
          'Version the starting file and record meaningful changes. A template without a known version quickly becomes several unofficial templates.',
        ],
      },
      {
        heading: 'Accessibility still has to be designed and tested',
        paragraphs: [
          'Consistency helps accessibility, but a shared layout is not an accessibility guarantee. Storyline’s own release history continues to include fixes involving text styles, screen-reader behaviour, focus and content placed on master layouts. That is a useful reminder that the authored system and the published experience both need checking.',
        ],
        bullets: [
          'Use proper text styles and a logical heading hierarchy rather than treating typography as visual formatting only.',
          'Check focus order and keyboard behaviour on representative slides using each layout.',
          'Do not assume an object inherited from a master is automatically exposed to assistive technology in the way you expect.',
          'Test the published output after Storyline updates when a course depends on persistent master-level interface elements.',
        ],
      },
      {
        heading: 'A practical build sequence',
        ordered: [
          'Define the visual foundations: type roles, colour roles, spacing and recurring frame.',
          'Identify the small number of screen families that repeat across the course.',
          'Create masters and layouts for those families, using names that describe their purpose.',
          'Build reusable interaction components separately from the layout system.',
          'Create a short example scene that stress-tests every layout with realistic content rather than placeholder text.',
          'Check keyboard, focus, text styles, contrast and responsive player behaviour in published output.',
          'Save and version the starting file only after the system survives that test scene.',
        ],
      },
      {
        heading: 'The rule I use now',
        paragraphs: [
          'If a future developer has to remember a convention, the system is weak. Put stable visual and structural decisions where Storyline can inherit them; put interaction behaviour where it can be seen, understood and tested. The goal is not to force every slide through a master. It is to stop every slide becoming a new design decision.',
        ],
      },
    ],
    sources: [
      {
        label: 'Articulate — Storyline 360 feature list: Slide Masters',
        href: 'https://www.articulate.com/360/storyline/all/',
      },
      {
        label: 'Articulate — Storyline 360 version history',
        href: 'https://cdn.articulate.com/assets/kb/sl360/en-Storyline-360-Version-History.html',
      },
    ],
    evidenceNote:
      'This resource preserves the useful first-hand argument from the historical article while removing project-specific dimensions and recipes that should not be presented as universal Storyline practice. The core feature remains current in Storyline 360; the guidance here is framed as production-system practice rather than as undocumented product behaviour.',
  },
];

export const knowledgeByPath = Object.fromEntries(
  knowledgeResources.map((resource) => [resource.path, resource]),
);
