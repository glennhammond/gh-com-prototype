// @ts-check

/**
 * Source-survival evidence for the 28 WordPress article identities inherited
 * from gh.com-react.
 *
 * The redirect graph proves that a URL identity existed. It does not prove
 * that the current React repository still contains the article body. This
 * registry keeps those two facts separate so source-missing identities do not
 * become automatic rebuild commitments.
 */

/** @typedef {'registry-published'|'related-draft-source'|'source-missing'} InheritedSourceState */

const published = {
  'ai-in-instructional-design': {
    sourcePath: 'src/posts/ai-in-instructional-design.md',
    reason: 'Matching markdown survives with draft:false and the same slug.',
  },
  '5-ways-ai-is-transforming-elearning-design': {
    sourcePath: 'src/posts/5-ways-ai-is-transforming-elearning-design.md',
    reason: 'Matching markdown survives with draft:false and the same slug.',
  },
  'master-slides-in-storyline': {
    sourcePath: 'src/posts/master-slides-in-storyline.md',
    reason: 'Matching published source survives and has already been rebuilt as retained knowledge.',
  },
};

const relatedDraft = {
  'how-to-set-moodles-user-login-page-as-the-sites-landing-page': {
    sourcePath: 'src/posts/how-to-set-moodles-login-page-as-the-sites-landing-page.md',
    reason: 'A related source survives under a different slug and is explicitly draft; the historical redirect had drifted to a non-existent intermediate React slug. The intent has now been rebuilt as retained knowledge.',
  },
};

const sourceMissing = [
  'hello-world',
  'gamification-in-storyline-leaderboards-badges-and-incentives',
  'new-quick-tips-layout-for-your-projects',
  'new-elegant-blog-post-layout-how-to-create-vertical-tabs-in-storyline',
  'another-nifty-layout-idea-for-storyline',
  'using-xapi-to-unlock-deeper-learning-analytics',
  'what-is-xapi-and-why-is-it-important-in-elearning',
  'storyline-vs-rise-which-tool-should-you-use',
  'a-new-quick-and-easy-layout-idea-for-storyline',
  'how-to-create-and-use-a-lightbox-in-storyline',
  'storyline-menu-design-options',
  'storyline-360-triggers-and-variables',
  'how-to-create-a-custom-storyline-player-menu',
  'branding-your-storyline-course',
  'using-tabs-in-storyline-interaction-ideas',
  'storyline-ui-layout-for-tabs',
  'a-modern-storyline-layout-to-support-your-courses',
  'get-a-modern-storyline-player-fast',
  'why-storyline-slides-still-matter-in-2025',
  'need-help-with-a-storyline-project',
  'elearning-tools-i-use',
  'quick-tips-for-web-flow-designers',
  'best-labs-for-facebook-brand-pages',
  'storyline-with-scorm-xapi-the-best-of-both-worlds',
];

/** @type {Record<string, {state:InheritedSourceState, sourcePath?:string, reason:string}>} */
export const inheritedArticleSources = {
  ...Object.fromEntries(
    Object.entries(published).map(([slug, evidence]) => [slug, {
      state: /** @type {const} */ ('registry-published'),
      ...evidence,
    }]),
  ),
  ...Object.fromEntries(
    Object.entries(relatedDraft).map(([slug, evidence]) => [slug, {
      state: /** @type {const} */ ('related-draft-source'),
      ...evidence,
    }]),
  ),
  ...Object.fromEntries(
    sourceMissing.map((slug) => [slug, {
      state: /** @type {const} */ ('source-missing'),
      reason: 'No matching markdown source is present in the current gh.com-react posts directory. Preserve the URL identity for backlink/search review, but do not infer recoverable content from the slug alone.',
    }]),
  ),
};

export const inheritedSourceCapture = {
  capturedAt: '2026-08-24',
  sourceProject: 'gh-com-react',
  articleCount: 28,
};

/**
 * @param {Array<{slug:string}>} inheritedArticles
 */
export function validateInheritedSourceState(inheritedArticles) {
  const evidenceSlugs = new Set(Object.keys(inheritedArticleSources));
  const policySlugs = new Set(inheritedArticles.map((entry) => entry.slug));

  if (evidenceSlugs.size !== inheritedSourceCapture.articleCount) {
    throw new Error(`Inherited source state: expected ${inheritedSourceCapture.articleCount} entries, found ${evidenceSlugs.size}`);
  }
  if (policySlugs.size !== evidenceSlugs.size) {
    throw new Error('Inherited source state: source registry and redirect policy counts differ');
  }

  for (const slug of policySlugs) {
    if (!evidenceSlugs.has(slug)) throw new Error(`Inherited source state: missing source evidence for ${slug}`);
  }
  for (const slug of evidenceSlugs) {
    if (!policySlugs.has(slug)) throw new Error(`Inherited source state: unknown historical identity ${slug}`);
  }

  return inheritedArticleSources;
}
