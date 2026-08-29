// @ts-check

/**
 * Public-estate migration contract captured from the current gh-com-react
 * production deployment on 24 August 2026 and reconciled for Minimum Amazing
 * search cutover on 26 August 2026.
 *
 * This is deliberately separate from THE RECORD search policy. The search
 * policy governs what the new product wants indexed; this contract governs
 * what the existing public domain is already responsible for preserving,
 * redirecting or intentionally retiring.
 */

/**
 * @typedef {'retain'|'redirect'|'rebuild'|'consolidate'|'retire'|'review'} MigrationAction
 * @typedef {Object} MigrationEntry
 * @property {string} path
 * @property {MigrationAction} action
 * @property {boolean} launchReady
 * @property {string=} destination
 * @property {404|410=} status
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
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The new product deliberately has no conventional blog index. The three retained knowledge resources remain available at their qualified canonical URLs without preserving a generic blog programme.',
  },
  {
    path: '/blog/ai-patterns-elearning',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The surviving source is explicitly draft, the material is generic and time-sensitive, and Search Intelligence found no authority reason to preserve it for launch.',
  },
  {
    path: '/blog/clean-design-elearning',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The surviving source is explicitly draft and generic. The wider UX topic is represented more credibly through first-hand Project and Practice evidence.',
  },
  {
    path: '/blog/design-system',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The generic draft article is not a proven semantic equivalent of the ISQ eLearning Design System Project and contains authority claims that should not be inherited through a redirect.',
  },
  {
    path: '/blog/master-slides-in-storyline',
    action: 'retain',
    launchReady: true,
    destination: '/blog/master-slides-in-storyline',
    reason: 'Recovered first-hand Storyline production guidance has been rebuilt against current Storyline 360 feature documentation and preserved at the existing canonical URL.',
  },
  {
    path: '/blog/scenario-writing-that-feels-real',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'No matching source survives and Search Intelligence found no independent authority requirement that justifies recreating the sitemap-only URL.',
  },
  {
    path: '/blog/storyline-tips-that-actually-help',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The surviving source is explicitly draft and belongs to the generic Storyline-tip estate that Search Intelligence qualified for retirement rather than one-for-one recreation.',
  },
  {
    path: '/blog/ux-for-learning',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'Although a non-draft source survives, it is generic and has no launch-scale authority evidence sufficient to justify rebuilding it beside stronger first-hand Practice and Project material.',
  },
  {
    path: '/blog/welcome',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The source is explicitly draft, generic introductory copy and has no independent authority value.',
  },
  {
    path: '/blog/xapi-basics',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'Generic xAPI explanation is intentionally retired. Future xAPI authority should come from current first-hand implementation evidence rather than preserving simplified legacy copy.',
  },
  {
    path: '/blog/xapi-isnt-scary',
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The source is explicitly draft, overlaps the retired generic xAPI explainer and is not a distinct authority asset.',
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
    action: 'retire',
    launchReady: true,
    status: 410,
    reason: 'The historical website project is not semantically equivalent to Wellbeing Studio. Retiring it is safer than transferring unrelated authority into a different product body of work.',
  },

  // The nine current Design System child URLs represent one coherent system.
  // The evidence-rich /work/isq-elearning-design-system Project is now the
  // canonical entry, so each historical child transfers directly to it rather
  // than surviving as a thin parallel search page.
  {
    path: '/work/elearning-design-system/overview',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Project-level overview material is consolidated into the canonical evidenced ISQ eLearning Design System Project.',
  },
  {
    path: '/work/elearning-design-system/atomic-design',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'System-architecture evidence is preserved inside the stronger canonical Project rather than maintained as a thin child result.',
  },
  {
    path: '/work/elearning-design-system/asset-register',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Asset-governance evidence belongs to the canonical Project and does not warrant an independent search surface.',
  },
  {
    path: '/work/elearning-design-system/colours',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Visual-foundation evidence is retained within the canonical Project rather than as an independent indexed child page.',
  },
  {
    path: '/work/elearning-design-system/core-more-bore',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'The learning-pattern evidence remains attributable within the canonical Project; no synthetic Record is created solely to preserve the old URL.',
  },
  {
    path: '/work/elearning-design-system/course-structure',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Reusable course-flow evidence is consolidated into the canonical Project rather than perpetuating a thin child page.',
  },
  {
    path: '/work/elearning-design-system/images-icons',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Imagery and icon guidance is a system foundation represented inside the canonical Project.',
  },
  {
    path: '/work/elearning-design-system/storyline',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Verified Storyline/template implementation evidence is preserved inside the canonical Design System Project without inheriting unqualified claims from the old child URL.',
  },
  {
    path: '/work/elearning-design-system/typography',
    action: 'redirect',
    launchReady: true,
    destination: '/work/isq-elearning-design-system',
    reason: 'Typography foundation evidence is consolidated into the stronger canonical Design System Project.',
  },
];

/**
 * Search-cutover dependencies after Search Intelligence 01–05 reconciliation.
 * A true value means the dependency has a launch-scale disposition, not that
 * every imaginable historical data source is available.
 */
export const migrationDependencies = {
  inheritedRedirectGraphReconciled: true,
  searchConsoleBaselineCaptured: true,
  bingBaselineClassifiedNonBlocking: true,
  analyticsBaselineCaptured: true,
  historicalCitationRecoverySufficientForLaunch: true,
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
    if (entry.launchReady && ['review', 'rebuild', 'consolidate'].includes(entry.action)) {
      throw new Error(`Migration policy: ${entry.path} cannot be launchReady while action ${entry.action} is unresolved`);
    }
    if (entry.action === 'retire' && entry.launchReady && ![404, 410].includes(entry.status)) {
      throw new Error(`Migration policy: retired ${entry.path} needs an explicit 404 or 410 launch status`);
    }
  }

  return liveSitemapMigration;
}
