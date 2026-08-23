/**
 * Neutral architecture placeholder with no third-party request.
 * Production builds keep the layout role but generate the plate locally as
 * an SVG data URL until authentic evidence replaces it.
 */
export default function PlaceholderShot({
  width,
  height,
  label,
  alt,
  className = '',
  eager = false,
}) {
  const safe = String(label).replace(/[<>&'\"]/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#ded7c5"/><line x1="0" y1="0" x2="${width}" y2="${height}" stroke="#b9b2a0" stroke-width="2"/><line x1="${width}" y1="0" x2="0" y2="${height}" stroke="#b9b2a0" stroke-width="2"/><rect x="${Math.round(width * 0.08)}" y="${Math.round(height * 0.44)}" width="${Math.round(width * 0.84)}" height="${Math.round(height * 0.12)}" fill="#f4f1e9"/><text x="50%" y="51%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="${Math.max(14, Math.round(width / 42))}" letter-spacing="2" fill="#435264">${safe}</text></svg>`;
  const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
    />
  );
}
