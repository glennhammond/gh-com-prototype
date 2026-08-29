import { inheritedArticleRedirects } from '../src/content/inherited-redirect-policy.js';

const byId = Object.fromEntries(inheritedArticleRedirects.map((entry) => [entry.wpId, entry]));

export default function handler(request, response) {
  const raw = request.query?.p;
  const wpId = Array.isArray(raw) ? raw[0] : String(raw ?? '');
  const entry = byId[wpId];

  if (!entry) {
    response.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600');
    response.status(404).send('Not Found');
    return;
  }

  // The vercel.json redirects should resolve preserved IDs before this rewrite.
  // Keep a direct fallback here so the endpoint remains semantically correct if
  // routing precedence changes during local or preview qualification.
  if (entry.action === 'preserve' && entry.destination) {
    response.setHeader('Location', entry.destination);
    response.status(308).end();
    return;
  }

  response.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600');
  response.status(410).send('Gone');
}
