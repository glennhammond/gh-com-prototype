import { Link } from "react-router-dom";
import { getImage } from "../lib/media.js";
import { casaSubprojects } from "../content/projects.js";
import "./ProjectCard.css";

/**
 * Retained project card.
 *
 * Four sizes, with hierarchy carried through composition rather than a public
 * framework. Plain-language area tags let visitors scan the work without
 * learning an internal taxonomy first.
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
          ) : card.map ? (
            <MapPanel items={card.map} />
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
            {isProgramme ? "View programme" : "View project"}
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

function MapPanel({ items }) {
  if (!items?.length) return null;
  return (
    <div className="mpanel">
      <p className="mpanel__kicker">How it holds together</p>
      <ol className="mpanel__list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ol>
    </div>
  );
}

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
