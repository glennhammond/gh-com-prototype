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
];

export const knowledgeByPath = Object.fromEntries(
  knowledgeResources.map((resource) => [resource.path, resource]),
);
