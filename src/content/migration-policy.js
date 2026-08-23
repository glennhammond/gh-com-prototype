// @ts-check

/**
 * Public-estate migration contract captured from the current gh-com-react
 * production deployment on 24 August 2026.
 *
 * This is deliberately separate from THE RECORD search policy. The search
 * policy governs what the new product wants indexed; this contract governs
 * what the existing public domain is already responsible for preserving,
 * redirecting, rebuilding, consolidating or intentionally retiring.
 */

/**
 * @typedef {'retain'|'redirect'|'rebuild'|'consolidate'|'retire'|'review'} MigrationAction
 * @typedef {Object} MigrationEntry
 * @property {string} path
 * @property {MigrationAction} action
 * @property {boolean} launchReady
 * @property {string=} destination
 * @property {string} reason
 */

/** @type {MigrationEntry[]} */
export const liveSitemapMigration = [
  {
    path: '/',
    action: 'retain',
    launchReady: true,
    destination: '/',
    reason: 'Homepage remains canonical.',
  },
  {
    path: '/about',
    action: 'retain',
    launchReady: true,
    destination: '/about',
    reason: 'About remains a canonical identity surface.',
  },
  {
    path: '/blog',
    action: 'review',
    launchReady: false,
    reason: 'No conventional blog is required by the new architecture; the index cannot disappear until retained knowledge URLs are resolved.',
  },
  {
    path: '/blog/ai-patterns-elearning',
    action: 'review',
    launchReady: false,
    reason: 'Time-sensitive AI content needs evidence/recency review before preservation or retirement.',
  },
  {
    path: '/blog/clean-design-elearning',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/clean-design-elearning',
    reason: 'Potentially evergreen design/UX knowledge; preserve the URL if the content still earns standalone value.',
  },
  {
    path: '/blog/design-system',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/design-system',
    reason: 'Supports a genuine production-systems authority territory but must be reconciled with first-hand ISQ/CASA evidence.',
  },
  {
    path: '/blog/master-slides-in-storyline',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/master-slides-in-storyline',
    reason: 'Known evergreen Storyline resource; preserve/rebuild at the existing URL unless first-party performance evidence overturns this.',
  },
  {
    path: '/blog/scenario-writing-that-feels-real',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/scenario-writing-that-feels-real',
    reason: 'Potential evergreen learning-design resource with professional relevance.',
  },
  {
    path: '/blog/storyline-tips-that-actually-help',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/storyline-tips-that-actually-help',
    reason: 'Potential evergreen Storyline resource; needs quality/search review before cutover.',
  },
  {
    path: '/blog/ux-for-learning',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/ux-for-learning',
    reason: 'Strong strategic overlap with learning experience/product practice; preserve if content quality supports it.',
  },
  {
    path: '/blog/welcome',
    action: 'retire',
    launchReady: false,
    reason: 'Generic welcome content is a retirement candidate, but final 404/410 treatment waits for first-party search/link evidence.',
  },
  {
    path: '/blog/xapi-basics',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/xapi-basics',
    reason: 'xAPI is an emerging authority territory; content requires technical currency review before retention.',
  },
  {
    path: '/blog/xapi-isnt-scary',
    action: 'consolidate',
    launchReady: false,
    destination: '/blog/xapi-basics',
    reason: 'Likely overlap with xAPI basics, but semantic equivalence and external-link evidence must be checked before consolidation.',
  },
  {
    path: '/contact',
    action: 'retain',
    launchReady: true,
    destination: '/contact',
    reason: 'Contact remains canonical.',
  },
  {
    path: '/services',
    action: 'redirect',
    launchReady: true,
    destination: '/practice',
    reason: 'Practice is the strong semantic successor to the generic Services index.',
  },
  {
    path: '/work',
    action: 'retain',
    launchReady: true,
    destination: '/work',
    reason: 'Work remains the canonical professional evidence index.',
  },
  {
    path: '/work/casa-flight-examiner-rating',
    action: 'redirect',
    launchReady: true,
    destination: '/work/casa/flight-examiner-rating',
    reason: 'Exact historical-to-canonical project migration.',
  },
  {
    path: '/work/corporate-yoga-australia-website',
    action: 'review',
    launchReady: false,
    destination: '/work/wellbeing-studio',
    reason: 'Wellbeing Studio is a plausible successor only if it genuinely encompasses the historical website-project intent.',
  },

  // Current eLearning Design System child URLs. These were present in the live
  // sitemap at capture time; broad redirection to Practice is explicitly
  // prohibited until the ISQ/design-system evidence architecture is resolved.
  ...[
    'asset-register',
    'atomic-design',
    'colours',
    'core-more-bore',
    'course-structure',
    'images-icons',
    'overview',
    'storyline',
    'typography',
  ].map((slug) => ({
    path: `/work/elearning-design-system/${slug}`,
    action: /** @type {const} */ ('review'),
    launchReady: false,
    reason: 'Live design-system child URL requires individual content/search-equity review before any redirect or rebuild decision.',
  })),
];

/**
 * The current production repo also contains a substantial redirect graph from
 * WordPress permalinks/query IDs into newer React blog/work routes. Those
 * source URLs can carry external link equity even when they are absent from the
 * sitemap. Cutover is therefore blocked until the graph is flattened into the
 * new migration ledger or intentionally retired source-by-source.
 */
export const migrationDependencies = {
  inheritedRedirectGraphReconciled: false,
  searchConsoleBaselineCaptured: false,
  bingBaselineCaptured: false,
  analyticsBaselineCaptured: false,
  historicalCitationRecoveryComplete: false,
};

export const liveSitemapCapture = {
  capturedAt: '2026-08-24',
  sourceProject: 'gh-com-react',
  sourceDomain: 'https://glennhammond.com',
  urlCount: 27,
};

export function validateMigrationPolicy() {
  const paths = liveSitemapMigration.map((entry) => entry.path);
  const unique = new Set(paths);
  if (paths.length !== liveSitemapCapture.urlCount) {
    throw new Error(`Migration policy: expected ${liveSitemapCapture.urlCount} live sitemap URLs, found ${paths.length}`);
  }
  if (unique.size !== paths.length) {
    throw new Error('Migration policy: duplicate live sitemap URL');
  }

  for (const entry of liveSitemapMigration) {
    if (!entry.path.startsWith('/')) throw new Error(`Migration policy: invalid path ${entry.path}`);
    if (entry.action === 'redirect' && !entry.destination) {
      throw new Error(`Migration policy: redirect ${entry.path} needs a destination`);
    }
    if (entry.launchReady && ['review', 'rebuild', 'consolidate', 'retire'].includes(entry.action)) {
      throw new Error(`Migration policy: ${entry.path} cannot be launchReady while action ${entry.action} is unresolved`);
    }
  }

  return liveSitemapMigration;
}
