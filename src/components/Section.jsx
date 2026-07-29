import "./Section.css";

/**
 * Page section. Handles the two surfaces (paper and ink band) and the vertical
 * rhythm, so no page needs to know how a band is built.
 *
 * Surfaces alternate to give the page a measured pace: each ink band carries a
 * moment of argument, each paper band carries evidence (Blueprint §12).
 */
export default function Section({
  band = false,
  tight = false,
  narrow = false,
  as: Tag = "section",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        "section",
        tight && "section--tight",
        band && "section--band on-ink",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <div className={`container${narrow ? " container--narrow" : ""}`}>
        {children}
      </div>
    </Tag>
  );
}

/** Standard section opener: eyebrow, heading, optional standfirst. */
export function SectionHead({ eyebrow, headline, standfirst, id, level = 2 }) {
  const H = `h${level}`;
  return (
    <header className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {headline && (
        <H id={id} className="display-l section-head__title">
          {headline}
        </H>
      )}
      {standfirst && <p className="lede section-head__lede">{standfirst}</p>}
    </header>
  );
}
