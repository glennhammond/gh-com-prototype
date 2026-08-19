/**
 * Temporary placehold.co imagery for the architecture-first redesign phase.
 * Deliberately neutral — no frames, gradients or fake UI — so the page is
 * judged on composition, not on placeholder artwork. Width/height set the
 * aspect ratio the final asset must fill; swap the src for a real image and
 * the layout needs no further change.
 */
export default function PlaceholderShot({
  width,
  height,
  label,
  alt,
  className = "",
  eager = false,
}) {
  const src = `https://placehold.co/${width}x${height}?text=${encodeURIComponent(label)}`;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
    />
  );
}
