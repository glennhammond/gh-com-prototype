// @ts-check

/**
 * Source-state evidence for article URLs advertised by the current public
 * gh.com-react sitemap on 24 August 2026.
 *
 * This registry answers a narrower question than migration-policy.js:
 * does the old source repository currently contain a post that the production
 * post registry would expose, a post explicitly marked draft, or no matching
 * source at all?
 *
 * It is migration evidence only and must never be imported by client code.
 */

/** @typedef {'registry-published'|'draft-source'|'source-missing'} LegacySourceState */

/**
 * @typedef {Object} LegacySourceEvidence
 * @property {LegacySourceState} state
 * @property {string} reason
 */

/** @type {Record<string, LegacySourceEvidence>} */
export const legacySitemapArticleSources = {
  '/blog/ai-patterns-elearning': {
    state: 'draft-source',
    reason: 'Markdown exists, but frontmatter explicitly sets status: draft; the production post registry filters drafts.',
  },
  '/blog/clean-design-elearning': {
    state: 'draft-source',
    reason: 'Markdown exists, but frontmatter explicitly sets status: draft; sitemap presence overstates publication status.',
  },
  '/blog/design-system': {
    state: 'draft-source',
    reason: 'Markdown exists, but frontmatter explicitly sets status: draft and includes authority claims that require evidence reconciliation.',
  },
  '/blog/master-slides-in-storyline': {
    state: 'registry-published',
    reason: 'Markdown exists without draft status and is eligible for the old production post registry; now rebuilt as retained knowledge.',
  },
  '/blog/scenario-writing-that-feels-real': {
    state: 'source-missing',
    reason: 'No matching markdown source is present in the current old-site post directory or production post registry.',
  },
  '/blog/storyline-tips-that-actually-help': {
    state: 'draft-source',
    reason: 'Markdown exists and is explicitly status: draft; it is source material, not proof of a published article surface.',
  },
  '/blog/ux-for-learning': {
    state: 'registry-published',
    reason: 'Markdown exists without draft status and is eligible for the old production post registry.',
  },
  '/blog/welcome': {
    state: 'draft-source',
    reason: 'Markdown exists but is explicitly status: draft; generic welcome content has no independent authority value by default.',
  },
  '/blog/xapi-basics': {
    state: 'registry-published',
    reason: 'Markdown exists without draft status and is eligible for the old production post registry, though its technical/evidence quality needs rebuilding.',
  },
  '/blog/xapi-isnt-scary': {
    state: 'draft-source',
    reason: 'Markdown exists but is explicitly status: draft and substantially overlaps the xAPI basics intent.',
  },
};

export const legacySitemapArticleSourceCapture = {
  capturedAt: '2026-08-24',
  sourceProject: 'gh-com-react',
  articleCount: 10,
};

export function validateLegacySourceState() {
  const entries = Object.entries(legacySitemapArticleSources);
  if (entries.length !== legacySitemapArticleSourceCapture.articleCount) {
    throw new Error(
      `Legacy source state: expected ${legacySitemapArticleSourceCapture.articleCount} sitemap article entries, found ${entries.length}`,
    );
  }

  const valid = new Set(['registry-published', 'draft-source', 'source-missing']);
  for (const [path, evidence] of entries) {
    if (!path.startsWith('/blog/')) {
      throw new Error(`Legacy source state: unexpected non-blog path ${path}`);
    }
    if (!valid.has(evidence.state)) {
      throw new Error(`Legacy source state: ${path} has invalid state ${evidence.state}`);
    }
    if (!evidence.reason || evidence.reason.trim().length < 20) {
      throw new Error(`Legacy source state: ${path} needs a substantive reason`);
    }
  }

  return legacySitemapArticleSources;
}
