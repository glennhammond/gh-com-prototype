// @ts-check

/**
 * Redirect estate inherited from the current gh.com-react production project.
 *
 * Each historical WordPress article is represented once here even though the
 * old deployment protects two source forms: the original permalink and a
 * `/?p=<id>` query. Both source forms must eventually resolve directly to the
 * same final successor without passing through the intermediate React blog.
 *
 * This policy is migration-only and is never imported by client code.
 */

/**
 * @typedef {'preserve'|'rebuild'|'consolidate'|'retire'|'review'} LegacyAction
 * @typedef {Object} LegacyArticle
 * @property {string} wpId
 * @property {string} slug
 * @property {LegacyAction} action
 * @property {boolean} launchReady
 * @property {string=} destination
 * @property {'storyline'|'xapi'|'moodle'|'ai'|'general'|'obsolete'} territory
 * @property {string} reason
 */

/** @type {LegacyArticle[]} */
export const inheritedArticleRedirects = [
  {
    wpId: '1',
    slug: 'hello-world',
    action: 'retire',
    launchReady: false,
    territory: 'obsolete',
    reason: 'Generic WordPress welcome content has no obvious modern professional successor; final 404/410 decision waits for first-party search/link evidence.',
  },
  {
    wpId: '164',
    slug: 'how-to-set-moodles-user-login-page-as-the-sites-landing-page',
    action: 'review',
    launchReady: false,
    territory: 'moodle',
    reason: 'Historic Moodle technical advice may now be version-sensitive. Preserve only if current accuracy and external/search value justify a refreshed resource.',
  },
  {
    wpId: '156431',
    slug: 'gamification-in-storyline-leaderboards-badges-and-incentives',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Historic Storyline pattern material is better evaluated as part of a smaller practical Storyline knowledge set than perpetuated automatically as a separate authority page.',
  },
  {
    wpId: '156433',
    slug: 'new-quick-tips-layout-for-your-projects',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Layout-tip material belongs in a reduced Storyline interaction/pattern collection unless first-party data proves strong independent demand.',
  },
  {
    wpId: '156435',
    slug: 'new-elegant-blog-post-layout-how-to-create-vertical-tabs-in-storyline',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Vertical-tab implementation is useful historical craft evidence but is unlikely to require an independent future authority surface by default.',
  },
  {
    wpId: '156437',
    slug: 'another-nifty-layout-idea-for-storyline',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Historic layout technique should be evaluated with the broader Storyline pattern estate rather than migrated one-for-one.',
  },
  {
    wpId: '156447',
    slug: 'ai-in-instructional-design',
    action: 'review',
    launchReady: false,
    territory: 'ai',
    reason: 'AI guidance ages quickly; do not preserve a dated informational page for authority unless it is substantially current, distinctive and still discovered.',
  },
  {
    wpId: '156449',
    slug: 'using-xapi-to-unlock-deeper-learning-analytics',
    action: 'consolidate',
    launchReady: false,
    territory: 'xapi',
    reason: 'Future xAPI authority should be grounded in current Experience Intelligence evidence and measurement limits, not several overlapping generic legacy articles.',
  },
  {
    wpId: '156453',
    slug: '5-ways-ai-is-transforming-elearning-design',
    action: 'review',
    launchReady: false,
    territory: 'ai',
    reason: 'Time-sensitive AI list content is not a strategic authority asset by default; retain only if current usefulness and first-party evidence support it.',
  },
  {
    wpId: '156456',
    slug: 'what-is-xapi-and-why-is-it-important-in-elearning',
    action: 'consolidate',
    launchReady: false,
    territory: 'xapi',
    reason: 'Generic xAPI explainer intent overlaps the planned evidence-led xAPI resource and should not survive automatically as a separate page.',
  },
  {
    wpId: '156461',
    slug: 'storyline-vs-rise-which-tool-should-you-use',
    action: 'rebuild',
    launchReady: false,
    territory: 'storyline',
    reason: 'Tool-choice intent can remain professionally useful, but any future version should be grounded in real production constraints and current tool behaviour rather than generic comparison copy.',
  },
  {
    wpId: '156463',
    slug: 'master-slides-in-storyline',
    action: 'preserve',
    launchReady: true,
    destination: '/blog/master-slides-in-storyline',
    territory: 'storyline',
    reason: 'Recovered first-hand Storyline production guidance has been refreshed against current Articulate documentation. The canonical React URL is preserved and both historical WordPress source forms redirect directly to it.',
  },
  {
    wpId: '156466',
    slug: 'a-new-quick-and-easy-layout-idea-for-storyline',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Historic layout craft should contribute to a reduced Storyline pattern resource rather than force one-for-one URL recreation.',
  },
  {
    wpId: '156471',
    slug: 'how-to-create-and-use-a-lightbox-in-storyline',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Specific Storyline interaction technique is a consolidation candidate pending search/backlink evidence.',
  },
  {
    wpId: '156473',
    slug: 'storyline-menu-design-options',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Menu-design craft is useful supporting evidence but should not dictate a standalone future page without demonstrated independent value.',
  },
  {
    wpId: '156476',
    slug: 'storyline-360-triggers-and-variables',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Triggers/variables material can support a practical Storyline knowledge cluster; exact survival depends on current accuracy and search value.',
  },
  {
    wpId: '156481',
    slug: 'how-to-create-a-custom-storyline-player-menu',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Custom-player technique belongs in the Storyline implementation cluster unless independent authority evidence warrants preservation.',
  },
  {
    wpId: '156483',
    slug: 'branding-your-storyline-course',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Branding guidance overlaps design-system and Storyline implementation evidence; consolidate rather than recreate automatically.',
  },
  {
    wpId: '156486',
    slug: 'using-tabs-in-storyline-interaction-ideas',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Tabs interaction material belongs with the reduced Storyline pattern set pending independent search/backlink evidence.',
  },
  {
    wpId: '156488',
    slug: 'storyline-ui-layout-for-tabs',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Closely related to the tabs/layout estate and should not create duplicate future authority surfaces.',
  },
  {
    wpId: '156492',
    slug: 'a-modern-storyline-layout-to-support-your-courses',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Historic modern-layout guidance should be consolidated with practical Storyline/design-system evidence unless first-party data argues otherwise.',
  },
  {
    wpId: '156494',
    slug: 'get-a-modern-storyline-player-fast',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Specific player-layout guidance is a consolidation candidate, not a mandatory standalone migration surface.',
  },
  {
    wpId: '156496',
    slug: 'why-storyline-slides-still-matter-in-2025',
    action: 'review',
    launchReady: false,
    territory: 'storyline',
    reason: 'Year-labelled opinion/content requires currency review; retain only if the argument remains useful beyond its 2025 framing.',
  },
  {
    wpId: '156498',
    slug: 'need-help-with-a-storyline-project',
    action: 'consolidate',
    launchReady: false,
    territory: 'storyline',
    reason: 'Commercial Storyline-help intent is likely better satisfied by Practice/Contact than a legacy blog-sales page, but exact semantic match should be confirmed from source and search evidence.',
  },
  {
    wpId: '156500',
    slug: 'elearning-tools-i-use',
    action: 'review',
    launchReady: false,
    territory: 'general',
    reason: 'Personal tool-list content changes over time and should not be migrated solely because an old route exists.',
  },
  {
    wpId: '156504',
    slug: 'quick-tips-for-web-flow-designers',
    action: 'retire',
    launchReady: false,
    territory: 'obsolete',
    reason: 'This appears peripheral to the current professional authority strategy; preserve only if external/search evidence unexpectedly proves significant value.',
  },
  {
    wpId: '156506',
    slug: 'best-labs-for-facebook-brand-pages',
    action: 'retire',
    launchReady: false,
    territory: 'obsolete',
    reason: 'Facebook brand-page app content is obsolete and misaligned with the current practice; no generic redirect should be created.',
  },
  {
    wpId: '156330',
    slug: 'storyline-with-scorm-xapi-the-best-of-both-worlds',
    action: 'consolidate',
    launchReady: false,
    territory: 'xapi',
    reason: 'SCORM/xAPI implementation material should be reviewed against current technical evidence and consolidated into a stronger measurement/implementation surface.',
  },
];

export const inheritedPortfolioRedirects = [
  {
    source: '/portfolio',
    action: 'redirect',
    launchReady: true,
    destination: '/work',
    reason: 'Exact portfolio-index successor.',
  },
  {
    source: '/portfolio/elearning-design-system',
    action: 'consolidate',
    launchReady: false,
    destination: '/work/isq-elearning-design-system',
    reason: 'Old design-system project route should ultimately land on the evidenced ISQ Design System Project, not on a broad Practice page or a wildcard Work slug.',
  },
  {
    source: '/portfolio/:path*',
    action: 'retire-wildcard',
    launchReady: false,
    reason: 'The old catch-all portfolio redirect cannot be inherited safely. Historical portfolio sources must be enumerated and mapped semantically source-by-source.',
  },
];

export const inheritedRedirectCapture = {
  sourceProject: 'gh-com-react',
  capturedAt: '2026-08-24',
  articleCount: 28,
  articleSourceForms: 56,
};

export function validateInheritedRedirectPolicy() {
  if (inheritedArticleRedirects.length !== inheritedRedirectCapture.articleCount) {
    throw new Error(`Inherited redirects: expected ${inheritedRedirectCapture.articleCount} article mappings, found ${inheritedArticleRedirects.length}`);
  }
  if (inheritedRedirectCapture.articleSourceForms !== inheritedRedirectCapture.articleCount * 2) {
    throw new Error('Inherited redirects: articleSourceForms must represent permalink + ?p= source for every captured article');
  }

  const ids = new Set();
  const slugs = new Set();
  for (const entry of inheritedArticleRedirects) {
    if (ids.has(entry.wpId)) throw new Error(`Inherited redirects: duplicate WordPress id ${entry.wpId}`);
    if (slugs.has(entry.slug)) throw new Error(`Inherited redirects: duplicate slug ${entry.slug}`);
    ids.add(entry.wpId);
    slugs.add(entry.slug);

    if (entry.launchReady && entry.action !== 'preserve') {
      throw new Error(`Inherited redirects: ${entry.slug} can only be launch-ready after it reaches preserve state`);
    }
    if (entry.action === 'preserve' && !entry.destination) {
      throw new Error(`Inherited redirects: preserved article ${entry.slug} needs a final canonical destination`);
    }
    if (entry.launchReady && !entry.destination) {
      throw new Error(`Inherited redirects: launch-ready article ${entry.slug} needs a destination`);
    }
  }

  return inheritedArticleRedirects;
}
