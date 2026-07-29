/**
 * Bespoke icon set, v3.1.
 *
 * One geometric family, drawn on a 24x24 grid with a 2px safe margin, 1.5px
 * strokes, square terminals, no fills and no enclosing decorative circles.
 * Every mark inherits `currentColor`, and the stroke is compensated by size in
 * system.css so a 16px icon does not go spindly and a 48px one does not go
 * clumsy.
 *
 * An icon always travels with a word when meaning depends on it. Icons are
 * not used on buttons whose label already names the action, on headings, in
 * body copy, or on routine metadata rows. If the word is clearer, the word
 * wins.
 *
 * One deliberate exception to the no-circle rule: Research uses a magnifier,
 * because no geometric alternative reads as search. The circle is the content
 * of that mark, not an enclosure around it, which is the distinction the rule
 * is protecting.
 *
 * Usage:  <Icon name="enlarge" size={16} />
 *         <Icon name="layer-experience" />          // 24, the default
 */

const PATHS = {
  /* --- The four layers -------------------------------------------------
     A stack read from the top down: Experience is the surface a learner
     touches, Operations is the ground everything else stands on. */
  "layer-experience": "M3 7h18M3 7v10h18V7M3 12h18",
  "layer-content": "M5 3h11l3 3v15H5zM16 3v3h3M8 11h8M8 15h8",
  "layer-platform": "M3 5h18v6H3zM3 15h18v4H3zM7 8h2M7 17h2",
  "layer-operations": "M4 20V9l8-5 8 5v11M4 20h16M10 20v-6h4v6",

  /* --- Disciplines ------------------------------------------------------ */
  research: "M4 4h9M4 4v9M10.5 10.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M14.5 14.5L20 20",
  architecture: "M3 21V6l9-3 9 3v15M3 21h18M9 21v-6h6v6M7 10h3M14 10h3",
  production: "M3 5h18v14H3zM3 9h18M7 5V3M17 5V3M10 13l4 2.5-4 2.5z",
  governance: "M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-4.5",
  measurement: "M3 21h18M6 21V12M11 21V7M16 21V15M21 21V4",

  /* --- Actions and navigation ------------------------------------------- */
  enlarge: "M9 3H3v6M15 21h6v-6M21 9V3h-6M3 15v6h6",
  external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
  previous: "M20 12H4M10 6l-6 6 6 6",
  next: "M4 12h16M14 6l6 6-6 6",
  close: "M5 5l14 14M19 5L5 19",
  download: "M12 3v13M6 11l6 6 6-6M4 21h16",
  video: "M3 5h13v14H3zM16 10l5-3v10l-5-3z",
  flagged: "M5 21V3h13l-3 4 3 4H5",
  registration: "M4 4h16v16H4zM4 9h16M9 4v5M8 14h8M8 17h5",
};

const LABELS = {
  "layer-experience": "Layer 01, Experience",
  "layer-content": "Layer 02, Content",
  "layer-platform": "Layer 03, Platform",
  "layer-operations": "Layer 04, Operations",
  research: "Research",
  architecture: "Architecture",
  production: "Production",
  governance: "Governance",
  measurement: "Measurement",
  enlarge: "Enlarge",
  external: "Opens in a new tab",
  previous: "Previous",
  next: "Next",
  close: "Close",
  download: "Download",
  video: "Video",
  flagged: "Flagged",
  registration: "Registration",
};

export default function Icon({ name, size = 24, title, className = "" }) {
  const d = PATHS[name];
  if (!d) return null;

  /* A titled icon is exposed to assistive technology; an untitled one is
     decorative, because the word beside it already carries the meaning. */
  const label = title === true ? LABELS[name] : title;

  return (
    <svg
      viewBox="0 0 24 24"
      className={["icon", size !== 24 && `icon--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : "true"}
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}

export { PATHS as iconNames };
