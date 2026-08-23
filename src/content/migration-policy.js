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
    reason: 'The current source is generic/draft-like but the underlying subject can support a stronger first-hand UX/learning-design note if Search Console evidence justifies preserving the URL.',
  },
  {
    path: '/blog/design-system',
    action: 'consolidate',
    launchReady: false,
    reason: 'The current article is a draft and asserts integrations/outcomes too broadly. Its useful ideas belong with first-hand ISQ/CASA production-system evidence, not as a parallel generic authority claim.',
  },
  {
    path: '/blog/master-slides-in-storyline',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/master-slides-in-storyline',
    reason: 'Contains substantial first-hand Storyline experience and production-system thinking. Preserve/rebuild at the existing URL unless first-party performance evidence overturns this.',
  },
  {
    path: '/blog/scenario-writing-that-feels-real',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/scenario-writing-that-feels-real',
    reason: 'Potential evergreen learning-design resource with professional relevance; source/route relationship still requires recovery and quality review.',
  },
  {
    path: '/blog/storyline-tips-that-actually-help',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/storyline-tips-that-actually-help',
    reason: 'Potential evergreen Storyline resource; source/route relationship and current quality still require review before cutover.',
  },
  {
    path: '/blog/ux-for-learning',
    action: 'rebuild',
    launchReady: false,
    destination: '/blog/ux-for-learning',
    reason: 'Strategically aligned topic, but the current article is generic. Keep the URL only if rebuilt around first-hand product/learning evidence and first-party search evidence supports retention.',
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
    reason: 'xAPI is an emerging authority territory, but the current article is too simplified for the evidence/governance standard now used in the practice. Rebuild only after current Experience Intelligence evidence can support it.',
  },
  {
    path: '/blog/xapi-isnt-scary',
    action: 'consolidate',
    launchReady: false,
    destination: '/blog/xapi-basics',
    reason: 'Substantially overlaps xAPI basics and makes broader learning-outcome claims than the evidence supports. Consolidate only after the surviving xAPI surface is rebuilt and external-link evidence is checked.',
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

  // Current eLearning Design System child URLs. Source recovery shows these are
  // one coherent system rather than nine independent authority pages. They are
  // therefore consolidation candidates into a future evidenced ISQ Design
  // System Project → Record → Artefact cluster. Exact destinations stay open
  // until that cluster is canonical and the first-party search data is known.
  {
    path: '/work/elearning-design-system/overview',
    action: 'consolidate',
    launchReady: false,
    destination: '/work/isq-elearning-design-system',
    reason: 'The overview is project-level material and should become the entry surface for the evidenced ISQ Design System rather than survive as a parallel mini-site overview.',
  },
  {
    path: '/work/elearning-design-system/atomic-design',
    action: 'consolidate',
    launchReady: false,
    reason: 'Useful system-architecture explanation, but better represented inside the canonical design-system architecture/evidence surface than as a separate indexed page.',
  },
  {
    path: '/work/elearning-design-system/asset-register',
    action: 'consolidate',
    launchReady: false,
    reason: 'Asset governance is meaningful evidence but belongs inside the design-system governance/implementation story rather than as an independent search landing page.',
  },
  {
    path: '/work/elearning-design-system/colours',
    action: 'consolidate',
    launchReady: false,
    reason: 'Visual-foundation material is too narrow to justify an independent indexed result; preserve its evidence inside a system-foundations artefact.',
  },
  {
    path: '/work/elearning-design-system/core-more-bore',
    action: 'rebuild',
    launchReady: false,
    reason: 'This is a distinct learning-design pattern rather than merely a visual-system child. Reassess as a retained knowledge note or pattern-level Record before deciding its final URL.',
  },
  {
    path: '/work/elearning-design-system/course-structure',
    action: 'consolidate',
    launchReady: false,
    reason: 'Reusable course-flow guidance belongs with documented learning patterns inside the canonical design-system evidence rather than as a standalone project child.',
  },
  {
    path: '/work/elearning-design-system/images-icons',
    action: 'consolidate',
    launchReady: false,
    reason: 'Imagery/icon guidance is a system foundation and should be retained as evidence within the canonical design-system cluster, not as an independent search result.',
  },
  {
    path: '/work/elearning-design-system/storyline',
    action: 'consolidate',
    launchReady: false,
    reason: 'The current page mixes useful template evidence with unverified xAPI claims. Preserve the verified Storyline implementation evidence inside the canonical system/production architecture.',
  },
  {
    path: '/work/elearning-design-system/typography',
    action: 'consolidate',
    launchReady: false,
    reason: 'Currently indexed historical foundation material; retain its evidence and authority but consolidate into a stronger foundations artefact rather than perpetuating thin child pages.',
  },
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
