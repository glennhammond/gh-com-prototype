import { Link } from "react-router-dom";
import { getImage } from "../lib/media.js";
import { casaSubprojects } from "../content/projects.js";
import "./ProjectCard.css";

/**
 * Portfolio card — V3.
 *
 * Four sizes, and the size is the hierarchy:
 *
 *   programme  full width, image beside a list of the five child projects.
 *              Used exactly once, for CASA.
 *   lead       the flagship case study, wider than its neighbours.
 *   default    a case study in the grid.
 *   small      a prototype. Visibly lighter than a client case study.
 *
 * A card's visual is one of three things and never a borrowed screen:
 *   an image · a designed evidence panel built from verified figures ·
 *   a labelled gap saying which image is missing.
 *
 * Plain-language area tags replace numbered layer marks, so a visitor does not
 * have to have learned the four-layer model to scan the portfolio. The whole
 * card is one link with the heading carrying the accessible name and the image
 * marked decorative, so a screen reader announces one target rather than four.
 */
export default function ProjectCard({ project, size = "default", eager = false }) {
  const { card } = project;
  const img = card.image ? getImage(card.image) : null;
  const isProgramme = size === "programme";

  return (
    <article className={`pcard pcard--${size}`}>
      <Link className="pcard__link" to={project.path}>
        <div className="pcard__visual">
          {img ? (
            <picture>
              <source type="image/avif" srcSet={img.avif} sizes={SIZES[size]} />
              <source type="image/webp" srcSet={img.webp} sizes={SIZES[size]} />
              <img
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                loading={eager ? "eager" : "lazy"}
                decoding={eager ? "sync" : "async"}
                {...(eager ? { fetchpriority: "high" } : {})}
              />
            </picture>
          ) : card.panel ? (
            <EvidencePanel panel={card.panel} />
          ) : (
            <GapPanel placeholder={card.placeholder} />
          )}
        </div>

        <div className="pcard__body">
          {card.kicker && <p className="pcard__kicker">{card.kicker}</p>}
          <p className="pcard__client">
            <span className="pcard__project">{project.title}</span>
            {project.clientName}
            <span className="pcard__sector">{project.sector}</span>
          </p>
          <h3 className="pcard__headline">{card.headline}</h3>
          <p className="pcard__summary">{card.summary}</p>

          {isProgramme ? (
            <ol className="pcard__children">
              {casaSubprojects.map((child, i) => (
                <li key={child.slug}>
                  <span className="pcard__childnum" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {child.title}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="pcard__areas">
              {project.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          )}

          <span className="pcard__cta" aria-hidden="true">
            {isProgramme ? "Explore the programme" : "View case study"}
          </span>
        </div>
      </Link>
    </article>
  );
}

const SIZES = {
  programme: "(min-width: 1000px) 560px, 100vw",
  lead: "(min-width: 1000px) 620px, 100vw",
  default: "(min-width: 1000px) 400px, (min-width: 640px) 50vw, 100vw",
  small: "(min-width: 1000px) 300px, (min-width: 640px) 40vw, 100vw",
};

/**
 * Used where no approved imagery exists but verified figures do. Says what is
 * true at a size that reads as deliberate, and never implies a screen that
 * cannot be shown.
 */
function EvidencePanel({ panel }) {
  return (
    <div className="epanel">
      <p className="epanel__kicker">{panel.kicker}</p>
      <dl className="epanel__figures">
        {panel.figures.map((f) => (
          <div key={f.label}>
            <dt>
              <span className="epanel__value">{f.value}</span>
              {f.unit && <span className="epanel__unit">{f.unit}</span>}
            </dt>
            <dd>{f.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Used where the correct image does not exist or cannot be attributed. States
 * the gap rather than filling it with something from another project.
 */
function GapPanel({ placeholder }) {
  if (!placeholder) return null;
  return (
    <div className="gpanel">
      <p className="gpanel__tag">Image to supply</p>
      <p className="gpanel__label">{placeholder.label}</p>
      {placeholder.note && <p className="gpanel__note">{placeholder.note}</p>}
    </div>
  );
}
