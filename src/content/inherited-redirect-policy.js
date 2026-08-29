// @ts-check

/**
 * Redirect estate inherited from the current gh.com-react production project,
 * reconciled for Minimum Amazing search cutover on 26 August 2026.
 *
 * Each historical WordPress article is represented once here even though the
 * old deployment exposed two source forms: the original permalink and a
 * `/?p=<id>` query. Preserved resources redirect directly to their canonical
 * successor. Intentionally retired resources return 410 for both source forms.
 *
 * This policy is migration-only and is never imported by client code.
 */

/**
 * @typedef {'preserve'|'retire'} LegacyAction
 * @typedef {Object} LegacyArticle
 * @property {string} wpId
 * @property {string} slug
 * @property {LegacyAction} action
 * @property {boolean} launchReady
 * @property {string=} destination
 * @property {410=} status
 * @property {'storyline'|'xapi'|'moodle'|'ai'|'general'|'obsolete'} territory
 * @property {string} reason
 */

const retire = (wpId, slug, territory, reason) => ({
  wpId,
  slug,
  action: 'retire',
  launchReady: true,
  status: 410,
  territory,
  reason,
});

/** @type {LegacyArticle[]} */
export const inheritedArticleRedirects = [
  retire('1', 'hello-world', 'obsolete', 'Generic WordPress welcome content has no modern professional successor.'),
  {
    wpId: '164',
    slug: 'how-to-set-moodles-user-login-page-as-the-sites-landing-page',
    action: 'preserve',
    launchReady: true,
    destination: '/blog/how-to-set-moodles-login-page-as-the-sites-landing-page',
    territory: 'moodle',
    reason: 'The historical Moodle intent has been rebuilt against current Moodle 5.x behaviour and remains a qualified retained-knowledge resource.',
  },
  retire('156431', 'gamification-in-storyline-leaderboards-badges-and-incentives', 'storyline', 'Generic historical Storyline technique; one-for-one recreation is not justified by launch-scale authority evidence.'),
  retire('156433', 'new-quick-tips-layout-for-your-projects', 'storyline', 'Historical layout-tip content belongs to the retired generic Storyline-tip estate.'),
  retire('156435', 'new-elegant-blog-post-layout-how-to-create-vertical-tabs-in-storyline', 'storyline', 'Historical implementation craft may inform future first-hand evidence but does not require an independent launch URL.'),
  retire('156437', 'another-nifty-layout-idea-for-storyline', 'storyline', 'Historical layout-tip content does not justify one-for-one migration.'),
  retire('156447', 'ai-in-instructional-design', 'ai', 'Time-sensitive generic AI guidance is intentionally retired rather than preserved as stale authority.'),
  retire('156449', 'using-xapi-to-unlock-deeper-learning-analytics', 'xapi', 'Generic xAPI/analytics explanation is retired in favour of future authority grounded in current first-hand implementation evidence.'),
  retire('156453', '5-ways-ai-is-transforming-elearning-design', 'ai', 'Time-sensitive AI list content is not a durable authority asset.'),
  retire('156456', 'what-is-xapi-and-why-is-it-important-in-elearning', 'xapi', 'Generic xAPI explainer intent is intentionally retired; no thin replacement is required for launch.'),
  retire('156461', 'storyline-vs-rise-which-tool-should-you-use', 'storyline', 'Tool-choice content may be useful again only if rebuilt from current first-hand production evidence; the historical URL has no launch successor.'),
  {
    wpId: '156463',
    slug: 'master-slides-in-storyline',
    action: 'preserve',
    launchReady: true,
    destination: '/blog/master-slides-in-storyline',
    territory: 'storyline',
    reason: 'Recovered first-hand Storyline production guidance remains a qualified retained-knowledge resource at the existing React canonical URL.',
  },
  retire('156466', 'a-new-quick-and-easy-layout-idea-for-storyline', 'storyline', 'Historical layout craft is retired rather than forcing a duplicate Storyline knowledge estate.'),
  retire('156471', 'how-to-create-and-use-a-lightbox-in-storyline', 'storyline', 'Specific historical Storyline technique lacks sufficient independent launch authority to warrant recreation.'),
  retire('156473', 'storyline-menu-design-options', 'storyline', 'Historical menu-design craft is supporting evidence, not a required standalone authority page.'),
  retire('156476', 'storyline-360-triggers-and-variables', 'storyline', 'Generic triggers-and-variables material is retired; future guidance should be current and evidence-led.'),
  retire('156481', 'how-to-create-a-custom-storyline-player-menu', 'storyline', 'Specific historical player technique does not justify one-for-one URL recreation.'),
  retire('156483', 'branding-your-storyline-course', 'storyline', 'Generic branding guidance is better represented through current Design System and Project evidence.'),
  retire('156486', 'using-tabs-in-storyline-interaction-ideas', 'storyline', 'Historical tabs material is part of the retired generic Storyline-tip estate.'),
  retire('156488', 'storyline-ui-layout-for-tabs', 'storyline', 'Closely overlapping tabs/layout content is retired rather than creating duplicate authority surfaces.'),
  retire('156492', 'a-modern-storyline-layout-to-support-your-courses', 'storyline', 'Historical layout guidance is retired; current design-system evidence is a stronger professional representation.'),
  retire('156494', 'get-a-modern-storyline-player-fast', 'storyline', 'Specific historical player-layout guidance does not warrant a standalone launch successor.'),
  retire('156496', 'why-storyline-slides-still-matter-in-2025', 'storyline', 'Year-labelled opinion content is intentionally retired rather than carried into launch as stale copy.'),
  retire('156498', 'need-help-with-a-storyline-project', 'storyline', 'Legacy sales/blog intent is not semantically equivalent to a current Practice or Contact page, so no generic redirect is created.'),
  retire('156500', 'elearning-tools-i-use', 'general', 'Personal tool-list content is transient and has no durable launch authority requirement.'),
  retire('156504', 'quick-tips-for-web-flow-designers', 'obsolete', 'Peripheral historical utility content has no modern professional successor.'),
  retire('156506', 'best-labs-for-facebook-brand-pages', 'obsolete', 'Obsolete Facebook brand-page utility content has no modern successor.'),
  retire('156330', 'storyline-with-scorm-xapi-the-best-of-both-worlds', 'xapi', 'Historical SCORM/xAPI explanation is retired; future implementation authority should be grounded in current governed measurement work.'),
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
    destination: '/work/isq-elearning-design-system',
    reason: 'The historical Design System project identity now resolves directly to the canonical evidenced ISQ eLearning Design System Project.',
  },
  {
    source: '/portfolio/migration-to-moodle',
    action: 'redirect',
    launchReady: true,
    destination: '/work/connect-and-learn/concurrent-migration',
    reason: 'The historical Moodle migration identity has a direct semantic successor in the Connect & Learn concurrent-migration Record.',
  },
];

/**
 * The former `/portfolio/:path*` catch-all is deliberately not inherited.
 * Unknown historical portfolio paths must return a normal 404 unless a future
 * source-specific mapping is supported by evidence.
 */
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

    if (!entry.launchReady) {
      throw new Error(`Inherited redirects: ${entry.slug} has no launch-scale disposition`);
    }
    if (entry.action === 'preserve' && !entry.destination) {
      throw new Error(`Inherited redirects: preserved article ${entry.slug} needs a final canonical destination`);
    }
    if (entry.action === 'retire' && entry.status !== 410) {
      throw new Error(`Inherited redirects: retired article ${entry.slug} must explicitly return 410`);
    }
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
