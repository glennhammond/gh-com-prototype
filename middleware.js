import { next } from '@vercel/functions';
import { inheritedArticleRedirects } from './src/content/inherited-redirect-policy.js';

const byId = Object.fromEntries(inheritedArticleRedirects.map((entry) => [entry.wpId, entry]));

/**
 * Resolve inherited WordPress `?p=` identities before the static homepage can
 * satisfy the request. The deployment-config rewrite remains as a fallback,
 * but production runtime proof showed that it can lose precedence to `/`.
 */
export default function wordpressLegacyMiddleware(request) {
  const url = new URL(request.url);
  const wpId = url.searchParams.get('p');

  if (wpId === null) return next();

  const entry = byId[wpId];
  if (!entry) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'Cache-Control': 'public, max-age=300, s-maxage=3600' },
    });
  }

  if (entry.action === 'preserve' && entry.destination) {
    return Response.redirect(new URL(entry.destination, url.origin), 308);
  }

  return new Response('Gone', {
    status: 410,
    headers: { 'Cache-Control': 'public, max-age=300, s-maxage=3600' },
  });
}

export const config = { matcher: '/' };
