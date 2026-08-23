/**
 * Build one responsive image descriptor from explicitly imported derivatives.
 *
 * Canonical THE RECORD routes use this helper instead of the legacy media.js
 * eager glob. Each route therefore imports only evidence it can display; the
 * historical case-study estate can remain isolated until migration is complete.
 */
export function recordImage({ avif, webp, width, height }) {
  const asSrcset = (items) => items.map(([size, url]) => `${url} ${size}w`).join(', ');
  const largestWebp = [...webp].sort((a, b) => b[0] - a[0])[0];

  return {
    avif: asSrcset(avif),
    webp: asSrcset(webp),
    src: largestWebp[1],
    width,
    height,
  };
}
