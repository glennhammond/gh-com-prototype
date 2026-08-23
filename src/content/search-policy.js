// @ts-check

/**
 * Search/indexability policy for THE RECORD.
 *
 * Route existence and search inclusion are deliberately separate concerns.
 * Every canonical Project, Record and Artefact must be represented here.
 * Artefacts are opt-in: omission is a validation error, not an implicit index.
 */

/** @typedef {'project'|'record'|'artefact'|'supporting'} DirectEntryType */
/**
 * @typedef {Object} SearchPolicyEntry
 * @property {boolean} index
 * @property {boolean} sitemap
 * @property {string} canonical
 * @property {DirectEntryType} directEntry
 * @property {string} reason
 */

/** @type {{projects: Record<string, SearchPolicyEntry>, records: Record<string, SearchPolicyEntry>, artefacts: Record<string, SearchPolicyEntry>}} */
export const searchPolicy = {
  projects: {
    'wellbeing-studio-2027': {
      index: true,
      sitemap: true,
      canonical: '/work/wellbeing-studio',
      directEntry: 'project',
      reason: 'Distinct active body of work with three substantial Records and explicit first-hand role/context.',
    },
    'connect-and-learn': {
      index: true,
      sitemap: true,
      canonical: '/work/connect-and-learn',
      directEntry: 'project',
      reason: 'Distinct platform-and-content migration body of work with independently useful professional context.',
    },
    'casa-ferc': {
      index: true,
      sitemap: true,
      canonical: '/work/casa/flight-examiner-rating',
      directEntry: 'project',
      reason: 'Distinct regulated-learning project with clear role, historical context and supporting evidence.',
    },
    'tafe-pathways': {
      index: true,
      sitemap: true,
      canonical: '/work/tafe-pathways',
      directEntry: 'project',
      reason: 'Distinct historical interaction project with unusual facilitator-led design evidence.',
    },
  },

  records: {
    'ws-contextual-entry': {
      index: true,
      sitemap: true,
      canonical: '/work/wellbeing-studio/contextual-entry',
      directEntry: 'record',
      reason: 'Standalone product/interaction decision with explicit problem, move, making and evidence boundary.',
    },
    'ws-connected-service': {
      index: true,
      sitemap: true,
      canonical: '/work/wellbeing-studio/connected-service',
      directEntry: 'record',
      reason: 'Distinct product-architecture reframe with substantial information gain beyond the Project surface.',
    },
    'ws-ruok-production-slice': {
      index: true,
      sitemap: true,
      canonical: '/work/wellbeing-studio/ruok-production-slice',
      directEntry: 'record',
      reason: 'Durable production decision trail whose evidence boundary prevents future-event overclaiming.',
    },
    'isq-concurrent-migration': {
      index: true,
      sitemap: true,
      canonical: '/work/connect-and-learn/concurrent-migration',
      directEntry: 'record',
      reason: 'Strong standalone account of why platform migration and course redevelopment had to remain coupled.',
    },
    'casa-examiner-judgement': {
      index: true,
      sitemap: true,
      canonical: '/work/casa/flight-examiner-rating/examiner-judgement',
      directEntry: 'record',
      reason: 'Distinct assessment-design reasoning with regulated-domain context and first-hand evidence.',
    },
    'tafe-supported-conversation': {
      index: true,
      sitemap: true,
      canonical: '/work/tafe-pathways/supporting-conversation',
      directEntry: 'record',
      reason: 'Distinct design argument about technology supporting rather than replacing a human facilitator.',
    },
  },

  artefacts: {
    'ws-daily-wellbeing-journey': {
      index: true,
      sitemap: true,
      canonical: '/work/wellbeing-studio/contextual-entry/daily-wellbeing-journey',
      directEntry: 'artefact',
      reason: 'Semantic reconstruction gives the interaction model enough explanatory substance for independent inspection.',
    },
    'ws-connected-service-map': {
      index: true,
      sitemap: true,
      canonical: '/work/wellbeing-studio/connected-service/relationship-model',
      directEntry: 'artefact',
      reason: 'Distinctive product-architecture evidence with standalone explanatory value.',
    },
    'ws-ruok-production-gates': {
      index: false,
      sitemap: false,
      canonical: '/work/wellbeing-studio/ruok-production-slice/qualification-map',
      directEntry: 'supporting',
      reason: 'Useful production evidence inside its parent Record, but initially too implementation-specific to justify an independent search result.',
    },
    'isq-migration-dependency-map': {
      index: true,
      sitemap: true,
      canonical: '/work/connect-and-learn/concurrent-migration/dependency-map',
      directEntry: 'artefact',
      reason: 'Independent visual/semantic explanation of platform-content concurrency for migration-intent visitors.',
    },
    'casa-assessment-reasoning-sequence': {
      index: true,
      sitemap: true,
      canonical: '/work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning',
      directEntry: 'artefact',
      reason: 'Distinct historical course evidence explaining regulation, assessment principles and competency reasoning.',
    },
    'tafe-facilitated-exploration': {
      index: true,
      sitemap: true,
      canonical: '/work/tafe-pathways/supporting-conversation/exploration-environment',
      directEntry: 'artefact',
      reason: 'Recovered interaction evidence is sufficiently framed to explain facilitated use independently of the parent Record.',
    },
  },
};

const groups = ['projects', 'records', 'artefacts'];
const validDirectEntry = new Set(['project', 'record', 'artefact', 'supporting']);

const assert = (condition, message) => {
  if (!condition) throw new Error(`Search policy validation: ${message}`);
};

/**
 * Validates the search policy against THE RECORD content without importing the
 * content estate into client metadata code.
 * @param {{projects: Array<{id:string,path:string}>, records: Array<{id:string,path:string}>, artefacts: Array<{id:string,path:string}>}} content
 */
export function validateSearchPolicy(content) {
  for (const group of groups) {
    const items = content[group];
    const policyGroup = searchPolicy[group];
    const ids = new Set(items.map((item) => item.id));

    assert(Object.keys(policyGroup).length === items.length, `${group} policy must cover every canonical item exactly once`);

    for (const item of items) {
      const policy = policyGroup[item.id];
      assert(policy, `${group} ${item.id} has no search policy`);
      assert(typeof policy.index === 'boolean', `${group} ${item.id}.index must be boolean`);
      assert(typeof policy.sitemap === 'boolean', `${group} ${item.id}.sitemap must be boolean`);
      assert(!policy.sitemap || policy.index, `${group} ${item.id} cannot be in sitemap while noindex`);
      assert(policy.canonical === item.path, `${group} ${item.id} canonical must equal its canonical route ${item.path}`);
      assert(validDirectEntry.has(policy.directEntry), `${group} ${item.id} has invalid directEntry value`);
      assert(typeof policy.reason === 'string' && policy.reason.trim().length > 20, `${group} ${item.id} needs an editorial/search rationale`);
    }

    for (const id of Object.keys(policyGroup)) {
      assert(ids.has(id), `${group} search policy contains unknown id ${id}`);
    }
  }

  return searchPolicy;
}

/** @param {string} path */
export function evidenceSearchForPath(path) {
  for (const group of groups) {
    for (const policy of Object.values(searchPolicy[group])) {
      if (policy.canonical === path) return policy;
    }
  }
  return null;
}

/**
 * Evidence routes not explicitly approved by this policy are migration-only
 * and therefore noindex. Legacy specialist service routes are also quarantined
 * until their final ledger disposition is implemented.
 * @param {string} path
 */
export function shouldNoindexPath(path) {
  const policy = evidenceSearchForPath(path);
  if (policy) return !policy.index;
  if (path.startsWith('/work/')) return true;
  if (path.startsWith('/services/')) return true;
  return false;
}

/**
 * @param {{projects: Array<{id:string}>, records: Array<{id:string}>, artefacts: Array<{id:string}>}} content
 */
export function getIndexableEvidencePaths(content) {
  validateSearchPolicy(content);
  return groups.flatMap((group) =>
    content[group]
      .filter((item) => searchPolicy[group][item.id].sitemap)
      .map((item) => searchPolicy[group][item.id].canonical),
  );
}
