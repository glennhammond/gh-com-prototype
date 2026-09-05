// @ts-check

/** Inherited WordPress and portfolio redirect estate. */
const retire = (wpId, slug, territory, reason) => ({
  wpId,
  slug,
  action: 'retire',
  launchReady: true,
  status: 410,
  territory,
  reason,
});

export const inheritedArticleRedirects = [
  retire('1', 'hello-world', 'obsolete', 'Generic WordPress welcome content has no modern professional successor.'),
  {
    wpId: '164',
    slug: 'how-to-set-moodles-user-login-page-as-the-sites-landing-page',
    action: 'preserve',
    launchReady: true,
    destination: '/blog/how-to-set-moodles-login-page-as-the-sites-landing-page',
    territory: 'moodle',
    reason: 'The historical Moodle intent has been rebuilt against current Moodle behaviour and remains qualified retained knowledge.',
  },
  retire('156431', 'gamification-in-storyline-leaderboards-badges-and-incentives', 'storyline', 'Generic historical Storyline technique does not justify one-for-one recreation.'),
  retire('156433', 'new-quick-tips-layout-for-your-projects', 'storyline', 'Historical layout-tip content belongs to the retired generic Storyline-tip estate.'),
  retire('156435', 'new-elegant-blog-post-layout-how-to-create-vertical-tabs-in-storyline', 'storyline', 'Historical implementation craft does not require an independent launch URL.'),
  retire('156437', 'another-nifty-layout-idea-for-storyline', 'storyline', 'Historical layout-tip content does not justify one-for-one migration.'),
  retire('156447', 'ai-in-instructional-design', 'ai', 'Time-sensitive generic AI guidance is intentionally retired.'),
  retire('156449', 'using-xapi-to-unlock-deeper-learning-analytics', 'xapi', 'Generic xAPI guidance is retired in favour of current first-hand implementation evidence.'),
  retire('156453', '5-ways-ai-is-transforming-elearning-design', 'ai', 'Time-sensitive AI list content is not a durable authority asset.'),
  retire('156456', 'what-is-xapi-and-why-is-it-important-in-elearning', 'xapi', 'Generic xAPI explainer intent is intentionally retired.'),
  retire('156461', 'storyline-vs-rise-which-tool-should-you-use', 'storyline', 'Tool-choice content has no qualified launch successor.'),
  {
    wpId: '156463',
    slug: 'master-slides-in-storyline',
    action: 'preserve',
    launchReady: true,
    destination: '/blog/master-slides-in-storyline',
    territory: 'storyline',
    reason: 'Recovered first-hand Storyline production guidance remains qualified retained knowledge.',
  },
  retire('156466', 'a-new-quick-and-easy-layout-idea-for-storyline', 'storyline', 'Historical layout craft is retired rather than duplicated.'),
  retire('156471', 'how-to-create-and-use-a-lightbox-in-storyline', 'storyline', 'Specific historical Storyline technique lacks sufficient launch authority.'),
  retire('156473', 'storyline-menu-design-options', 'storyline', 'Historical menu-design craft is supporting evidence, not a required standalone page.'),
  retire('156476', 'storyline-360-triggers-and-variables', 'storyline', 'Generic triggers-and-variables material is retired.'),
  retire('156481', 'how-to-create-a-custom-storyline-player-menu', 'storyline', 'Specific historical player technique does not justify one-for-one recreation.'),
  retire('156483', 'branding-your-storyline-course', 'storyline', 'Generic branding guidance is better represented through current design-system and project evidence.'),
  retire('156486', 'using-tabs-in-storyline-interaction-ideas', 'storyline', 'Historical tabs material is retired.'),
  retire('156488', 'storyline-ui-layout-for-tabs', 'storyline', 'Overlapping tabs/layout content is retired.'),
  retire('156492', 'a-modern-storyline-layout-to-support-your-courses', 'storyline', 'Historical layout guidance is retired.'),
  retire('156494', 'get-a-modern-storyline-player-fast', 'storyline', 'Specific historical player-layout guidance does not warrant a standalone successor.'),
  retire('156496', 'why-storyline-slides-still-matter-in-2025', 'storyline', 'Year-labelled opinion content is intentionally retired.'),
  retire('156498', 'need-help-with-a-storyline-project', 'storyline', 'Legacy sales/blog intent has no semantic current successor.'),
  retire('156500', 'elearning-tools-i-use', 'general', 'Personal tool-list content is transient.'),
  retire('156504', 'quick-tips-for-web-flow-designers', 'obsolete', 'Peripheral historical utility content has no modern professional successor.'),
  retire('156506', 'best-labs-for-facebook-brand-pages', 'obsolete', 'Obsolete Facebook brand-page utility content has no modern successor.'),
  retire('156330', 'storyline-with-scorm-xapi-the-best-of-both-worlds', 'xapi', 'Historical SCORM/xAPI explanation is retired in favour of current governed measurement work.'),
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
    action: 'redirect',
    launchReady: true,
    destination: '/work/elearning-design-system',
    reason: 'The historical Design System project identity now resolves to the neutral canonical eLearning Design System project begun in 2024.',
  },
  {
    source: '/portfolio/migration-to-moodle',
    action: 'redirect',
    launchReady: true,
    destination: '/work/connect-and-learn/concurrent-migration',
    reason: 'The historical Moodle migration identity has a direct semantic successor in the Connect & Learn concurrent-migration Record.',
  },
];

export const inheritedPortfolioWildcardPolicy = {
  inherited: false,
  reason: 'A broad portfolio wildcard would transfer unrelated authority and hide unresolved historical identities behind soft semantic matches.',
};

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
    if (!entry.launchReady) throw new Error(`Inherited redirects: ${entry.slug} has no launch-scale disposition`);
    if (entry.action === 'preserve' && !entry.destination) throw new Error(`Inherited redirects: preserved article ${entry.slug} needs a final canonical destination`);
    if (entry.action === 'retire' && entry.status !== 410) throw new Error(`Inherited redirects: retired article ${entry.slug} must explicitly return 410`);
  }

  for (const entry of inheritedPortfolioRedirects) {
    if (entry.action !== 'redirect' || !entry.launchReady || !entry.destination) {
      throw new Error(`Inherited redirects: portfolio source ${entry.source} is not fully resolved`);
    }
    if (entry.source.includes(':') || entry.source.includes('*')) {
      throw new Error(`Inherited redirects: portfolio source ${entry.source} must be source-specific, not a wildcard`);
    }
  }
  return inheritedArticleRedirects;
}
