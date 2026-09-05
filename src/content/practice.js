// @ts-check
import { recordIndex } from './public-record.js';

export const practiceClassifications = {
  'proven-recurring': 'Proven recurring practice',
  'strong-emerging': 'Strong emerging pattern',
  'single-project': 'Single-project evidence',
  'aspirational-positioning': 'Aspirational positioning',
};

/**
 * Practice claims remain internally evidence-backed; the public Practice page
 * is free to present them in simpler language. References resolve against the
 * renewed public record so renamed/reframed projects use their current routes.
 */
export const practiceClaims = [
  {
    id: 'situation-first',
    classification: 'proven-recurring',
    publicGroup: 'core',
    title: 'Start with the situation, not the inherited structure.',
    summary:
      'A recurring first move is to question the structure that arrived with the brief. A content portal can become a service around working moments; a migration can become a coupled delivery system; repeated course decisions can become a design system; regulation can become assessment reasoning; a self-service default can become a facilitated environment.',
    boundary:
      'This is a contemporary interpretation of recurring decisions, not terminology claimed to have been used by historical projects.',
    evidence: [
      { recordId: 'ws-connected-service', artefactId: 'ws-connected-service-map', note: 'Existing destinations were not allowed to define the future product.' },
      { recordId: 'isq-concurrent-migration', artefactId: 'isq-migration-dependency-map', note: 'A serial migration sequence was rejected because platform, course-estate and operational decisions needed to remain coupled.' },
      { projectId: 'isq-elearning-design-system', note: 'Repeated course-level decisions widened into a reusable eLearning Design System.' },
      { recordId: 'casa-examiner-judgement', artefactId: 'casa-assessment-reasoning-sequence', note: 'The course was organised around examiner judgement rather than restating regulation.' },
      { recordId: 'tafe-supported-conversation', artefactId: 'tafe-facilitated-exploration', note: 'A self-service assumption gave way to an environment designed around a live careers conversation.' },
    ],
  },
  {
    id: 'connected-decisions',
    classification: 'proven-recurring',
    publicGroup: 'core',
    title: 'Keep connected decisions connected.',
    summary:
      'Product and engineering, platform and content, regulation and interaction, facilitation and interface are not automatically separate workstreams. The work is strongest when consequential dependencies stay visible long enough to improve each other.',
    boundary:
      'Connected ownership does not mean one person owns every organisational decision; it means avoiding premature hand-offs where decisions materially affect one another.',
    evidence: [
      { recordId: 'ws-ruok-production-slice', artefactId: 'ws-ruok-production-gates', note: 'Product definition, implementation, staging and later product correction stayed connected.' },
      { recordId: 'isq-concurrent-migration', artefactId: 'isq-migration-dependency-map', note: 'Platform migration and more than sixty Storyline rebuilds had to teach each other.' },
      { projectId: 'isq-elearning-design-system', note: 'Patterns, components, implementation, accessibility, governance and learning data are treated as one operational system.' },
      { recordId: 'casa-examiner-judgement', artefactId: 'casa-assessment-reasoning-sequence', note: 'Regulatory hierarchy, assessment reasoning and interaction design were treated as one learning problem.' },
      { recordId: 'tafe-supported-conversation', artefactId: 'tafe-facilitated-exploration', note: 'Facilitation, information architecture and implementation were designed as one experience.' },
    ],
  },
  {
    id: 'required-altitude',
    classification: 'proven-recurring',
    publicGroup: 'core',
    title: 'Solve at the scale the problem requires.',
    summary:
      'Sometimes the useful unit is an interaction. Sometimes it is an experience, a platform, a product or the relationships between them. The unit of design should widen or narrow with the problem rather than with a preferred deliverable.',
    boundary:
      'Artefact, experience and system are useful scales, not a hierarchy of value. Earlier forms of making remain first-class inside broader system work.',
    evidence: [
      { recordId: 'tafe-supported-conversation', artefactId: 'tafe-facilitated-exploration', note: 'An interaction-heavy build became a facilitated careers environment.' },
      { recordId: 'casa-examiner-judgement', artefactId: 'casa-assessment-reasoning-sequence', note: 'Course artefacts sat inside a regulated professional-learning context.' },
      { recordId: 'isq-concurrent-migration', artefactId: 'isq-migration-dependency-map', note: 'The unit widened from courses to learning architecture, migration and operational continuity.' },
      { projectId: 'isq-elearning-design-system', note: 'Repeated production choices widened into a reusable system.' },
      { recordId: 'ws-connected-service', artefactId: 'ws-connected-service-map', note: 'Current work operates at product and service-system scale while resolving into concrete participant interactions.' },
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
      'This describes the practice now; it is not presented as a historical methodology imposed retrospectively.',
    evidence: [
      { recordId: 'ws-ruok-production-slice', artefactId: 'ws-ruok-production-gates', note: 'Current production work makes definition, implementation, qualification and correction explicit.' },
      { recordId: 'isq-concurrent-migration', artefactId: 'isq-migration-dependency-map', note: 'Framing, architecture and production remained coupled.' },
    ],
  },
];

export const practiceModes = [
  { id: 'frame', title: 'Frame', body: 'Clarify the situation, audience, constraints and the problem genuinely worth solving.' },
  { id: 'shape', title: 'Shape', body: 'Turn that understanding into product, learning, experience or system architecture before inherited implementation becomes the brief.' },
  { id: 'make', title: 'Make', body: 'Prototype, design, build and produce at the scale the problem requires — from interaction to system.' },
  { id: 'evidence', title: 'Evidence', body: 'Separate intention from implementation, observation and validation; qualify what the work can safely claim.' },
];

export const practiceEvolution = [
  {
    period: '2015', projectId: 'tafe-pathways', recordId: 'tafe-supported-conversation', altitude: 'Artefact · Experience',
    title: 'Interaction became a facilitated environment.',
    body: 'Pathways stretched an authoring tool into a non-linear, stateful environment built around the conversation happening in the room.',
  },
  {
    period: '2015–21', projectId: 'casa-ferc', recordId: 'casa-examiner-judgement', altitude: 'Artefact · Experience · System',
    title: 'Learning design widened inside a regulated system.',
    body: 'Course artefacts, assessment reasoning, responsive context and production practice sat inside six years of broader learning work in an aviation safety regulator.',
  },
  {
    period: '2024', projectId: 'connect-and-learn', recordId: 'isq-concurrent-migration', altitude: 'Experience · Content · Platform',
    title: 'The platform and course estate became one delivery problem.',
    body: 'Migration, learning architecture, more than sixty rebuilds and operations had to move concurrently rather than wait for clean hand-offs.',
  },
  {
    period: '2026–27', projectId: 'wellbeing-studio-2027', recordId: 'ws-connected-service', altitude: 'Product · Experience · System',
    title: 'The unit of design widened to a connected service.',
    body: 'Product strategy, experience architecture, service relationships and production implementation now operate together while still resolving into useful participant moments.',
  },
];

function resolveEvidence(entry) {
  const record = entry.recordId ? recordIndex.recordById[entry.recordId] : null;
  if (entry.recordId && !record) throw new Error(`Practice evidence references missing Record "${entry.recordId}"`);
  const projectId = entry.projectId ?? record?.projectId;
  const project = projectId ? recordIndex.projectById[projectId] : null;
  if (!project) throw new Error('Practice evidence has no canonical Project');
  const artefact = entry.artefactId ? recordIndex.artefactById[entry.artefactId] : null;
  if (entry.artefactId && !artefact) throw new Error(`Practice evidence references missing Artefact "${entry.artefactId}"`);
  return { ...entry, project, record, artefact };
}

function validatePracticeClaims() {
  const ids = new Set();
  const canonicalProjectIds = new Set(Object.keys(recordIndex.projectById));
  for (const claim of practiceClaims) {
    if (ids.has(claim.id)) throw new Error(`Duplicate Practice claim "${claim.id}"`);
    ids.add(claim.id);
    if (!practiceClassifications[claim.classification]) throw new Error(`Practice claim "${claim.id}" has invalid classification`);
    const resolved = claim.evidence.map(resolveEvidence);
    const projects = new Set(resolved.map((item) => item.project.id));
    if (claim.classification === 'proven-recurring' && projects.size < 2) throw new Error(`Proven recurring Practice claim "${claim.id}" needs evidence from multiple Projects`);
    if (claim.publicGroup === 'core') {
      const missingProjects = [...canonicalProjectIds].filter((id) => !projects.has(id));
      if (missingProjects.length) throw new Error(`Core Practice claim "${claim.id}" must be tested against all canonical Projects; missing ${missingProjects.join(', ')}`);
    }
  }
}

function resolveEvolution(entry) {
  const project = recordIndex.projectById[entry.projectId];
  const record = recordIndex.recordById[entry.recordId];
  if (!project || !record || record.projectId !== project.id) throw new Error(`Practice evolution entry "${entry.period}" has an invalid evidence mapping`);
  return { ...entry, project, record };
}

validatePracticeClaims();

export const resolvedPracticeClaims = practiceClaims.map((claim) => ({
  ...claim,
  label: practiceClassifications[claim.classification],
  evidence: claim.evidence.map(resolveEvidence),
}));
export const corePracticeClaims = resolvedPracticeClaims.filter((claim) => claim.publicGroup === 'core');
export const currentPracticeLens = resolvedPracticeClaims.find((claim) => claim.id === 'frame-shape-make-evidence');
export const resolvedPracticeEvolution = practiceEvolution.map(resolveEvolution);
