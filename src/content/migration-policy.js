// @ts-check

/**
 * Public-estate migration contract captured from the former production site.
 * The September 2026 renewal changes only the Design System destination: the
 * canonical project is now the neutral eLearning Design System begun in 2024.
 */

const retire = (path, reason) => ({
  path,
  action: 'retire',
  launchReady: true,
  status: 410,
  reason,
});

const redirect = (path, destination, reason) => ({
  path,
  action: 'redirect',
  launchReady: true,
  destination,
  reason,
});

const retain = (path, reason) => ({
  path,
  action: 'retain',
  launchReady: true,
  destination: path,
  reason,
});

const DESIGN_SYSTEM = '/work/elearning-design-system';

export const liveSitemapMigration = [
  retain('/', 'Homepage remains canonical.'),
  retain('/about', 'About remains a canonical identity surface.'),
  retire('/blog', 'The new site has no generic blog index; retained knowledge survives only at qualified URLs.'),
  retire('/blog/ai-patterns-elearning', 'Draft, generic and time-sensitive material is not retained.'),
  retire('/blog/clean-design-elearning', 'Draft generic material is superseded by first-hand project evidence.'),
  retire('/blog/design-system', 'Generic draft material is not equivalent to the current eLearning Design System project.'),
  retain('/blog/master-slides-in-storyline', 'Recovered first-hand Storyline guidance remains qualified retained knowledge.'),
  retire('/blog/scenario-writing-that-feels-real', 'No qualified source or authority requirement survives.'),
  retire('/blog/storyline-tips-that-actually-help', 'Generic Storyline-tip content is retired rather than recreated.'),
  retire('/blog/ux-for-learning', 'Generic material is superseded by stronger first-hand Project and Practice evidence.'),
  retire('/blog/welcome', 'Generic introductory copy has no independent authority value.'),
  retire('/blog/xapi-basics', 'Generic xAPI explanation is superseded by current implementation evidence.'),
  retire('/blog/xapi-isnt-scary', 'Overlapping draft xAPI explanation is retired.'),
  retain('/contact', 'Contact remains canonical.'),
  redirect('/services', '/practice', 'Practice is the semantic successor to the generic Services index.'),
  retain('/work', 'Work remains the canonical professional evidence index.'),
  redirect('/work/casa-flight-examiner-rating', '/work/casa/flight-examiner-rating', 'Exact historical-to-canonical project migration.'),
  retire('/work/corporate-yoga-australia-website', 'The historical website project is not semantically equivalent to Wellbeing Studio.'),
  redirect('/work/elearning-design-system/overview', DESIGN_SYSTEM, 'Project overview consolidates into the renewed canonical eLearning Design System.'),
  redirect('/work/elearning-design-system/atomic-design', DESIGN_SYSTEM, 'System architecture consolidates into the renewed canonical project.'),
  redirect('/work/elearning-design-system/asset-register', DESIGN_SYSTEM, 'Asset-governance evidence belongs to the canonical project.'),
  redirect('/work/elearning-design-system/colours', DESIGN_SYSTEM, 'Visual foundations belong to the canonical project.'),
  redirect('/work/elearning-design-system/core-more-bore', DESIGN_SYSTEM, 'Learning-pattern evidence belongs to the canonical project.'),
  redirect('/work/elearning-design-system/course-structure', DESIGN_SYSTEM, 'Course-flow evidence belongs to the canonical project.'),
  redirect('/work/elearning-design-system/images-icons', DESIGN_SYSTEM, 'Imagery and icon guidance belongs to the canonical project.'),
  redirect('/work/elearning-design-system/storyline', DESIGN_SYSTEM, 'Storyline implementation evidence belongs to the canonical project.'),
  redirect('/work/elearning-design-system/typography', DESIGN_SYSTEM, 'Typography foundation evidence belongs to the canonical project.'),
];

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
  if (paths.length !== liveSitemapCapture.urlCount) {
    throw new Error(`Migration policy: expected ${liveSitemapCapture.urlCount} live sitemap URLs, found ${paths.length}`);
  }
  if (new Set(paths).size !== paths.length) throw new Error('Migration policy: duplicate live sitemap URL');

  for (const entry of liveSitemapMigration) {
    if (!entry.path.startsWith('/')) throw new Error(`Migration policy: invalid path ${entry.path}`);
    if (entry.action === 'redirect' && !entry.destination) throw new Error(`Migration policy: redirect ${entry.path} needs a destination`);
    if (entry.action === 'retire' && entry.launchReady && ![404, 410].includes(entry.status)) {
      throw new Error(`Migration policy: retired ${entry.path} needs an explicit 404 or 410 launch status`);
    }
  }
  return liveSitemapMigration;
}
