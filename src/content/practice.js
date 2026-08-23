// @ts-check
import { recordIndex } from './the-record.js';

export const practiceClassifications = {
  'proven-recurring': 'Proven recurring practice',
  'strong-emerging': 'Strong emerging pattern',
  'single-project': 'Single-project evidence',
  'aspirational-positioning': 'Aspirational positioning',
};

/**
 * Practice is an interpretation layer over THE RECORD.
 * Evidence references use canonical Record / Artefact ids and are resolved
 * below so a broken or manufactured relationship fails during the build.
 */
export const practiceClaims = [
  {
    id: 'situation-first',
    classification: 'proven-recurring',
    publicGroup: 'core',
    title: 'Start with the situation, not the inherited structure.',
    summary:
      'Across the current Record, a recurring first move is to question the structure that arrived with the brief. A content portal can become a service around working moments; a migration can become a coupled delivery system; regulation can become assessment reasoning; a self-service default can become a facilitated environment.',
    boundary:
      'This is a contemporary interpretation of recurring decisions. It is not terminology claimed to have been used by the historical projects themselves.',
    evidence: [
      {
        recordId: 'ws-connected-service',
        artefactId: 'ws-connected-service-map',
        note: 'Existing destinations were not allowed to define the future product. Real working situations and useful participant experiences became the design unit.',
      },
      {
        recordId: 'isq-concurrent-migration',
        artefactId: 'isq-migration-dependency-map',
        note: 'A serial migration sequence was rejected because platform, course-estate and operational decisions needed to remain coupled.',
      },
      {
        recordId: 'casa-examiner-judgement',
        artefactId: 'casa-assessment-reasoning-sequence',
        note: 'The course was organised around examiner judgement and assessment reasoning rather than simply restating regulation.',
      },
      {
        recordId: 'tafe-supported-conversation',
        artefactId: 'tafe-facilitated-exploration',
        note: 'A self-service assumption gave way to an explorable environment designed to support a live careers conversation.',
      },
    ],
  },
  {
    id: 'connected-decisions',
    classification: 'proven-recurring',
    publicGroup: 'core',
    title: 'Keep connected decisions connected.',
    summary:
      'The work is strongest when decisions that affect each other stay in conversation long enough to improve each other. Product and engineering, platform and content, regulation and interaction, facilitation and interface are not automatically separate workstreams just because an organisation can draw boxes around them.',
    boundary:
      'Connected ownership does not mean one person owns every organisational decision. The claim is about keeping consequential dependencies visible instead of turning them into premature hand-offs.',
    evidence: [
      {
        recordId: 'ws-ruok-production-slice',
        artefactId: 'ws-ruok-production-gates',
        note: 'Product definition, implementation, staging, reliability and later product correction stayed connected; proved infrastructure was not allowed to become product authority.',
      },
      {
        recordId: 'isq-concurrent-migration',
        artefactId: 'isq-migration-dependency-map',
        note: 'Platform migration and more than sixty Storyline rebuilds had to teach each other inside one delivery system.',
      },
      {
        recordId: 'casa-examiner-judgement',
        artefactId: 'casa-assessment-reasoning-sequence',
        note: 'Regulatory hierarchy, assessment principles, competency reasoning and interaction design were treated as one learning problem.',
      },
      {
        recordId: 'tafe-supported-conversation',
        artefactId: 'tafe-facilitated-exploration',
        note: 'Facilitation, non-linear information architecture, visual exploration and stateful implementation were designed as one experience.',
      },
    ],
  },
  {
    id: 'required-altitude',
    classification: 'proven-recurring',
    publicGroup: 'core',
    title: 'Solve at the altitude the problem requires.',
    summary:
      'Sometimes the useful unit is an interaction. Sometimes it is an experience, a platform, a product or the relationships between them. The Record shows the unit of design widening and narrowing with the problem rather than treating one discipline or deliverable as the permanent centre.',
    boundary:
      'Artefact, Experience and System describe useful altitudes, not a hierarchy of value and not a branded sequential method. Earlier forms of making remain first-class inside broader system work.',
    evidence: [
      {
        recordId: 'tafe-supported-conversation',
        artefactId: 'tafe-facilitated-exploration',
        note: 'An interaction-heavy Storyline build became a facilitated careers environment: artefact and experience had to work together.',
      },
      {
        recordId: 'casa-examiner-judgement',
        artefactId: 'casa-assessment-reasoning-sequence',
        note: 'Individual course artefacts sat inside a regulated professional-learning experience and a wider production context.',
      },
      {
        recordId: 'isq-concurrent-migration',
        artefactId: 'isq-migration-dependency-map',
        note: 'The unit of work widened from courses to learning architecture, platform migration and operational continuity.',
      },
      {
        recordId: 'ws-connected-service',
        artefactId: 'ws-connected-service-map',
        note: 'The current work operates at product, experience and service-system scale while still resolving into concrete participant interactions.',
      },
    ],
  },
  {
    id: 'frame-shape-make-evidence',
    classification: 'strong-emerging',
    publicGroup: 'lens',
    title: 'Frame. Shape. Make. Evidence.',
    summary:
      'Four overlapping modes are useful for describing the current practice: understand the real situation, shape the architecture, make the thing, then qualify what the evidence lets us say.',
    boundary:
      'Frame, Shape and Make are visible broadly across the Record. Evidence as an explicitly named discipline is strongest in current work, so the four-part set is not presented as a historical methodology.',
    evidence: [
      {
        recordId: 'ws-ruok-production-slice',
        artefactId: 'ws-ruok-production-gates',
        note: 'Current production work makes the full movement explicit: definition, implementation, qualification and product correction.',
      },
      {
        recordId: 'isq-concurrent-migration',
        artefactId: 'isq-migration-dependency-map',
        note: 'Framing, architecture and production remained coupled while the platform and course estate were still teaching each other.',
      },
      {
        recordId: 'casa-examiner-judgement',
        artefactId: 'casa-assessment-reasoning-sequence',
        note: 'The audience and regulatory problem shaped the learning model before interaction and production decisions followed.',
      },
      {
        recordId: 'tafe-supported-conversation',
        artefactId: 'tafe-facilitated-exploration',
        note: 'Facilitation needs shaped the information architecture and application-like Storyline implementation.',
      },
    ],
  },
  {
    id: 'usable-complexity',
    classification: 'strong-emerging',
    publicGroup: 'emerging',
    title: 'Make complexity usable without falsifying it.',
    summary:
      'Complex systems often need to become easier to understand without becoming simpler than the truth allows. That tension is clearest in regulated learning and is becoming increasingly explicit in product and evidence architecture.',
    boundary:
      'This pattern is strong but not yet promoted to proven recurring practice across the whole canonical field.',
    evidence: [
      {
        recordId: 'casa-examiner-judgement',
        artefactId: 'casa-assessment-reasoning-sequence',
        note: 'Regulatory hierarchy and competency complexity were made visible without flattening the distinctions experienced examiners depend on.',
      },
      {
        recordId: 'ws-connected-service',
        artefactId: 'ws-connected-service-map',
        note: 'A complex service ecosystem was reduced to useful participant behaviours while preserving explicit boundaries around what is intended versus implemented.',
      },
    ],
  },
  {
    id: 'human-activity',
    classification: 'strong-emerging',
    publicGroup: 'emerging',
    title: 'Design technology with human activity, not instead of it.',
    summary:
      'When a useful human relationship already exists, the digital product should know whether its job is to support that relationship rather than automate it away.',
    boundary:
      'This is strongly evidenced in two territories. It remains an emerging Practice claim rather than a universal statement about every project.',
    evidence: [
      {
        recordId: 'tafe-supported-conversation',
        artefactId: 'tafe-facilitated-exploration',
        note: 'The careers adviser remained central; the software expanded what the adviser and students could explore together.',
      },
      {
        recordId: 'ws-connected-service',
        artefactId: 'ws-connected-service-map',
        note: 'Human-led sessions, workplace delivery and digital experiences were designed as one service ecosystem rather than competing channels.',
      },
    ],
  },
  {
    id: 'qualification-correction',
    classification: 'single-project',
    publicGroup: null,
    title: 'Qualification and correction are part of making.',
    summary:
      'The R U OK? Day production slice shows implementation, qualification and later product correction operating as one production discipline.',
    boundary:
      'This is strong current evidence from one Project and is deliberately not promoted as recurring Practice yet.',
    evidence: [
      {
        recordId: 'ws-ruok-production-slice',
        artefactId: 'ws-ruok-production-gates',
        note: 'The production history records technical proof, runtime remediation and a later decision to remove mandatory authentication from the core participant journey.',
      },
    ],
  },
  {
    id: 'thirty-years',
    classification: 'aspirational-positioning',
    publicGroup: null,
    title: 'Thirty years of making digital things. Still learning how to make them better.',
    summary:
      'A broader biographical positioning line about career continuity, retained elsewhere in the site.',
    boundary:
      'The current public canonical THE RECORD field is selective and begins in 2015. It must not be used to imply thirty years of canonical evidence.',
    evidence: [],
  },
];

export const practiceModes = [
  {
    id: 'frame',
    title: 'Frame',
    body: 'Clarify the situation, audience, constraints and the problem that is genuinely worth solving.',
  },
  {
    id: 'shape',
    title: 'Shape',
    body: 'Turn that understanding into product, learning, experience or system architecture before inherited implementation becomes the brief.',
  },
  {
    id: 'make',
    title: 'Make',
    body: 'Prototype, design, build and produce at the altitude the problem requires — from interaction to system.',
  },
  {
    id: 'evidence',
    title: 'Evidence',
    body: 'Separate intention from implementation, observation and validation; qualify what the work can safely claim.',
  },
];

export const practiceEvolution = [
  {
    period: '2015',
    projectId: 'tafe-pathways',
    recordId: 'tafe-supported-conversation',
    altitude: 'Artefact · Experience',
    title: 'Interaction became a facilitated environment.',
    body: 'Pathways stretched an authoring tool into a non-linear, stateful environment built around the conversation happening in the room.',
  },
  {
    period: '2015–21',
    projectId: 'casa-ferc',
    recordId: 'casa-examiner-judgement',
    altitude: 'Artefact · Experience · System',
    title: 'Learning design widened inside a regulated system.',
    body: 'Course artefacts, assessment reasoning, responsive context and production practice sat inside six years of broader learning work in an aviation safety regulator.',
  },
  {
    period: '2024',
    projectId: 'connect-and-learn',
    recordId: 'isq-concurrent-migration',
    altitude: 'Experience · Content · Platform',
    title: 'The platform and the course estate became one delivery problem.',
    body: 'Migration, learning architecture, more than sixty rebuilds and operations had to move concurrently rather than wait for clean hand-offs.',
  },
  {
    period: '2026–27',
    projectId: 'wellbeing-studio-2027',
    recordId: 'ws-connected-service',
    altitude: 'Product · Experience · System',
    title: 'The unit of design widened to a connected service.',
    body: 'Product strategy, experience architecture, service relationships and production implementation now operate together while still resolving into useful participant moments.',
  },
];

function resolveEvidence(entry) {
  const record = recordIndex.recordById[entry.recordId];
  if (!record) {
    throw new Error(`Practice evidence references missing Record "${entry.recordId}"`);
  }

  const project = recordIndex.projectById[record.projectId];
  if (!project) {
    throw new Error(`Practice evidence Record "${record.id}" has no canonical Project`);
  }

  const artefact = entry.artefactId ? recordIndex.artefactById[entry.artefactId] : null;
  if (entry.artefactId && !artefact) {
    throw new Error(`Practice evidence references missing Artefact "${entry.artefactId}"`);
  }
  if (artefact && artefact.recordId !== record.id) {
    throw new Error(
      `Practice evidence Artefact "${artefact.id}" does not belong to Record "${record.id}"`,
    );
  }

  return { ...entry, project, record, artefact };
}

function validatePracticeClaims() {
  const ids = new Set();
  const canonicalProjectIds = new Set(Object.keys(recordIndex.projectById));

  for (const claim of practiceClaims) {
    if (ids.has(claim.id)) throw new Error(`Duplicate Practice claim "${claim.id}"`);
    ids.add(claim.id);

    if (!practiceClassifications[claim.classification]) {
      throw new Error(`Practice claim "${claim.id}" has invalid classification`);
    }

    const resolved = claim.evidence.map(resolveEvidence);
    const projects = new Set(resolved.map((item) => item.project.id));

    if (claim.classification === 'proven-recurring' && projects.size < 2) {
      throw new Error(
        `Proven recurring Practice claim "${claim.id}" needs evidence from multiple Projects`,
      );
    }

    if (claim.publicGroup === 'core' && projects.size !== canonicalProjectIds.size) {
      throw new Error(
        `Core Practice claim "${claim.id}" must currently be tested against all canonical Projects`,
      );
    }
  }
}

function resolveEvolution(entry) {
  const project = recordIndex.projectById[entry.projectId];
  const record = recordIndex.recordById[entry.recordId];
  if (!project || !record || record.projectId !== project.id) {
    throw new Error(`Practice evolution entry "${entry.period}" has an invalid evidence mapping`);
  }
  return { ...entry, project, record };
}

validatePracticeClaims();

export const resolvedPracticeClaims = practiceClaims.map((claim) => ({
  ...claim,
  label: practiceClassifications[claim.classification],
  evidence: claim.evidence.map(resolveEvidence),
}));

export const corePracticeClaims = resolvedPracticeClaims.filter(
  (claim) => claim.publicGroup === 'core',
);
export const emergingPracticeClaims = resolvedPracticeClaims.filter(
  (claim) => claim.publicGroup === 'emerging',
);
export const currentPracticeLens = resolvedPracticeClaims.find(
  (claim) => claim.id === 'frame-shape-make-evidence',
);
export const resolvedPracticeEvolution = practiceEvolution.map(resolveEvolution);
