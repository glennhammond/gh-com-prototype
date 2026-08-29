// @ts-check
import { canonicalProjectExtensions } from './canonical-project-extensions.js';

/** @typedef {'intended'|'implemented'|'observed'|'validated'} EvidenceState */
/** @typedef {'led-to'|'informed'|'continued-in'|'revisited-in'|'extended-through'} RelationshipVerb */

/**
 * @typedef {Object} EvidenceClaim
 * @property {string} id
 * @property {EvidenceState} state
 * @property {string} claim
 * @property {string} basis
 * @property {string=} limitation
 */

/**
 * @typedef {Object} Relationship
 * @property {string} id
 * @property {RelationshipVerb} verb
 * @property {string} label
 * @property {string} href
 * @property {string=} note
 */

/**
 * @typedef {Object} EditorialPlacement
 * @property {string} surface
 * @property {number} order
 * @property {'anchor'|'point'|'support'} role
 * @property {boolean=} featured
 */

/**
 * @typedef {Object} Artefact
 * @property {string} id
 * @property {string} recordId
 * @property {string} path
 * @property {string} title
 * @property {string} kind
 * @property {string} provenance
 * @property {string} status
 * @property {string} summary
 * @property {string} accessibility
 * @property {string[]} evidenceClaimIds
 */

/**
 * @typedef {Object} RecordEntry
 * @property {string} id
 * @property {string} projectId
 * @property {string} path
 * @property {string} title
 * @property {string} centre
 * @property {string} context
 * @property {string} happened
 * @property {string} worthExamining
 * @property {string} tension
 * @property {string} move
 * @property {string[]} making
 * @property {string} evidenceBoundary
 * @property {string[]} artefactIds
 * @property {string[]} evidenceClaimIds
 * @property {Relationship[]} relationships
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} path
 * @property {string} title
 * @property {string} organisation
 * @property {string} period
 * @property {string} state
 * @property {string} proposition
 * @property {string} context
 * @property {string} role
 * @property {string} altitude
 * @property {{period:string,label:string,detail:string,id?:string}[]} trajectory
 * @property {string[]} recordIds
 * @property {EditorialPlacement[]} placements
 */

/**
 * @typedef {Object} RecordContent
 * @property {Project[]} projects
 * @property {RecordEntry[]} records
 * @property {Artefact[]} artefacts
 * @property {EvidenceClaim[]} evidenceClaims
 */

const STATES = new Set(['intended', 'implemented', 'observed', 'validated']);
const VERBS = new Set(['led-to', 'informed', 'continued-in', 'revisited-in', 'extended-through']);

const assert = (condition, message) => {
  if (!condition) throw new Error(`THE RECORD content validation: ${message}`);
};

const nonEmpty = (value, label) => {
  assert(typeof value === 'string' && value.trim().length > 0, `${label} must be a non-empty string`);
};

const unique = (items, label) => {
  const seen = new Set();
  for (const item of items) {
    nonEmpty(item.id, `${label}.id`);
    assert(!seen.has(item.id), `duplicate ${label} id "${item.id}"`);
    seen.add(item.id);
  }
};

/**
 * Fold already-evidenced Project-only surfaces into the canonical model.
 * Extensions are idempotent so callers may validate an already-resolved
 * recordContent object without duplicating the Project.
 * @param {RecordContent} content
 * @returns {RecordContent}
 */
const resolveCanonicalProjects = (content) => {
  const existingIds = new Set(content.projects.map((project) => project.id));
  const extensions = canonicalProjectExtensions.filter((project) => !existingIds.has(project.id));
  if (!extensions.length) return content;
  return { ...content, projects: [...content.projects, ...extensions] };
};

/** @param {RecordContent} content */
export function validateRecordContent(content) {
  assert(content && typeof content === 'object', 'content object is required');
  const resolved = resolveCanonicalProjects(content);

  unique(resolved.projects, 'project');
  unique(resolved.records, 'record');
  unique(resolved.artefacts, 'artefact');
  unique(resolved.evidenceClaims, 'evidence claim');

  const projectIds = new Set(resolved.projects.map((item) => item.id));
  const recordIds = new Set(resolved.records.map((item) => item.id));
  const artefactIds = new Set(resolved.artefacts.map((item) => item.id));
  const claimIds = new Set(resolved.evidenceClaims.map((item) => item.id));
  const paths = new Set();

  for (const project of resolved.projects) {
    nonEmpty(project.path, `project ${project.id}.path`);
    assert(project.path.startsWith('/work/'), `project ${project.id} path must live beneath /work`);
    assert(!paths.has(project.path), `duplicate route "${project.path}"`);
    paths.add(project.path);
    project.recordIds.forEach((id) => assert(recordIds.has(id), `project ${project.id} references missing record ${id}`));
    project.placements.forEach((placement) => {
      nonEmpty(placement.surface, `project ${project.id} placement surface`);
      assert(Number.isFinite(placement.order), `project ${project.id} placement order must be numeric`);
      assert(['anchor', 'point', 'support'].includes(placement.role), `project ${project.id} has invalid placement role`);
    });
  }

  for (const record of resolved.records) {
    assert(projectIds.has(record.projectId), `record ${record.id} references missing project ${record.projectId}`);
    const project = resolved.projects.find((item) => item.id === record.projectId);
    nonEmpty(record.path, `record ${record.id}.path`);
    assert(project && record.path.startsWith(`${project.path}/`), `record ${record.id} must deepen beneath its project route`);
    assert(!paths.has(record.path), `duplicate route "${record.path}"`);
    paths.add(record.path);
    record.artefactIds.forEach((id) => assert(artefactIds.has(id), `record ${record.id} references missing artefact ${id}`));
    record.evidenceClaimIds.forEach((id) => assert(claimIds.has(id), `record ${record.id} references missing evidence claim ${id}`));
    record.relationships.forEach((relationship) => {
      assert(VERBS.has(relationship.verb), `record ${record.id} has unsupported relationship verb ${relationship.verb}`);
      nonEmpty(relationship.href, `relationship ${relationship.id}.href`);
      nonEmpty(relationship.label, `relationship ${relationship.id}.label`);
    });
  }

  for (const artefact of resolved.artefacts) {
    assert(recordIds.has(artefact.recordId), `artefact ${artefact.id} references missing record ${artefact.recordId}`);
    const record = resolved.records.find((item) => item.id === artefact.recordId);
    nonEmpty(artefact.path, `artefact ${artefact.id}.path`);
    assert(record && artefact.path.startsWith(`${record.path}/`), `artefact ${artefact.id} must deepen beneath its record route`);
    assert(!paths.has(artefact.path), `duplicate route "${artefact.path}"`);
    paths.add(artefact.path);
    artefact.evidenceClaimIds.forEach((id) => assert(claimIds.has(id), `artefact ${artefact.id} references missing evidence claim ${id}`));
  }

  for (const claim of resolved.evidenceClaims) {
    assert(STATES.has(claim.state), `evidence claim ${claim.id} has invalid state ${claim.state}`);
    nonEmpty(claim.claim, `evidence claim ${claim.id}.claim`);
    nonEmpty(claim.basis, `evidence claim ${claim.id}.basis`);
  }

  return resolved;
}

/** @param {RecordContent} content */
export function indexRecordContent(content) {
  const resolved = validateRecordContent(content);
  return {
    projectById: Object.fromEntries(resolved.projects.map((item) => [item.id, item])),
    recordById: Object.fromEntries(resolved.records.map((item) => [item.id, item])),
    artefactById: Object.fromEntries(resolved.artefacts.map((item) => [item.id, item])),
    claimById: Object.fromEntries(resolved.evidenceClaims.map((item) => [item.id, item])),
  };
}
