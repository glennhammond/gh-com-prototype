// @ts-check

/**
 * Search/indexability policy for THE RECORD and retained standalone knowledge.
 *
 * Route existence and search inclusion are deliberately separate concerns.
 * Every canonical Project, Record and Artefact must be represented here.
 * Artefacts are opt-in: omission is a validation error, not an implicit index.
 * Retained knowledge is similarly explicit and remains outside a conventional
 * blog/content cadence.
 *
 * Important dependency boundary: this module is imported by Seo.jsx and is
 * therefore route-independent client code. It must contain policy metadata
 * only; retained knowledge body content remains in lazy route modules.
 */

/** @typedef {'project'|'record'|'artefact'|'knowledge'|'supporting'} DirectEntryType */
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

/** @type {Record<string, SearchPolicyEntry>} */
export const knowledgeSearchPolicy = {
  'principles-assessment-rules-evidence': {
    index: true,
    sitemap: true,
    canonical: '/principles-of-assessment-and-rules-of-evidence',
    directEntry: 'knowledge',
    reason: 'Externally cited historical URL with durable VET-assessment intent; rebuilt against the current 2025 Standards rather than retained as stale legacy content.',
  },
};

const groups = ['projects', 'records', 'artefacts'];
const validDirectEntry = new Set(['project', 'record', 'artefact', 'knowledge', 'supporting']);

const assert = (condition, message) => {
  if (!condition) throw new Error(`Search policy validation: ${message}`);
};

/**
 * Validates the search policy against THE RECORD content without importing the
 * legacy content estate into client metadata code.
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

  validateKnowledgeSearchPolicy();
  return searchPolicy;
}

/**
 * Policy-shape validation only. Exact coverage against retained knowledge body
 * content is performed by the server-side search audit, preserving the client
 * dependency boundary above.
 */
export function validateKnowledgeSearchPolicy() {
  for (const [id, policy] of Object.entries(knowledgeSearchPolicy)) {
    assert(typeof policy.index === 'boolean', `knowledge ${id}.index must be boolean`);
    assert(typeof policy.sitemap === 'boolean', `knowledge ${id}.sitemap must be boolean`);
    assert(!policy.sitemap || policy.index, `knowledge ${id} cannot be in sitemap while noindex`);
    assert(typeof policy.canonical === 'string' && policy.canonical.startsWith('/'), `knowledge ${id} needs an absolute canonical path`);
    assert(policy.directEntry === 'knowledge', `knowledge ${id} must use directEntry=knowledge`);
    assert(typeof policy.reason === 'string' && policy.reason.trim().length > 20, `knowledge ${id} needs an editorial/search rationale`);
  }

  return knowledgeSearchPolicy;
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

/** @param {string} path */
export function knowledgeSearchForPath(path) {
  return Object.values(knowledgeSearchPolicy).find((policy) => policy.canonical === path) ?? null;
}

/**
 * Evidence routes not explicitly approved by this policy are migration-only
 * and therefore noindex. Legacy specialist service routes are also quarantined
 * until their final ledger disposition is implemented.
 * @param {string} path
 */
export function shouldNoindexPath(path) {
  const evidencePolicy = evidenceSearchForPath(path);
  if (evidencePolicy) return !evidencePolicy.index;
  const knowledgePolicy = knowledgeSearchForPath(path);
  if (knowledgePolicy) return !knowledgePolicy.index;
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

export function getIndexableKnowledgePaths() {
  validateKnowledgeSearchPolicy();
  return Object.values(knowledgeSearchPolicy)
    .filter((policy) => policy.sitemap)
    .map((policy) => policy.canonical);
}
