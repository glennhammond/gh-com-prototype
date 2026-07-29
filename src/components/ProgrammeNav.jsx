import { Link } from "react-router-dom";
import { getImage } from "../lib/media.js";
import { casaSubprojects, projectBySlug } from "../content/projects.js";
import "./ProgrammeNav.css";

/**
 * Programme navigation — V3.
 *
 * A programme is not a longer case study. It is a parent with children, and
 * the interface has to state that relationship in three places:
 *
 *   <ProgrammeMap>   on the overview: the projects grouped by body of work,
 *                    each linking into its own page
 *   <ProgrammeRail>  on a subproject: where you are inside the programme, and
 *                    one-click movement to any sibling
 *   the URL          /work/casa/class says it without any component at all
 *
 * The rail is a nav landmark with an ordered list. Current position is marked
 * with aria-current AND a visible rule and weight change, so the state does
 * not depend on colour.
 */

export function ProgrammeMap({ programme }) {
  const map = programme.programmeMap;
  if (!map) return null;

  return (
    <section className="pmap" aria-labelledby="pmap-title">
      <div className="container">
        <h2 id="pmap-title" className="display-m pmap__title">
          What the six years contained
        </h2>
        <p className="pmap__lede">{map.note}</p>

        <ol className="pmap__groups">
          {map.groups.map((group, gi) => (
            <li key={group.label} className="pmap__group">
              <div className="pmap__grouphead">
                <span className="pmap__num" aria-hidden="true">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="pmap__grouptitle">{group.label}</h3>
                <p className="pmap__groupdetail">{group.detail}</p>
              </div>
              <ul className="pmap__items">
                {group.items.map((slug) => {
                  const p = projectBySlug[slug];
                  if (!p) return null;
                  return (
                    <li key={slug}>
                      <Link className="pmap__link" to={p.path}>
                        <span className="pmap__linktitle">{p.title}</span>
                        <span className="pmap__linkrole">{p.role}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProgrammeRail({ programme, currentSlug }) {
  return (
    <nav className="prail" aria-label={`${programme.title} projects`}>
      <div className="container prail__inner">
        <p className="prail__label">
          <Link to={programme.path}>{programme.shortTitle ?? programme.title}</Link>
          <span className="prail__sep" aria-hidden="true">/</span>
          <span className="prail__count">
            {casaSubprojects.length} projects
          </span>
        </p>
        <ol className="prail__list">
          {casaSubprojects.map((p, i) => {
            const current = p.slug === currentSlug;
            return (
              <li key={p.slug}>
                <Link
                  to={p.path}
                  className={`prail__item${current ? " is-current" : ""}`}
                  aria-current={current ? "page" : undefined}
                >
                  <span className="prail__index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/**
 * The overview's own entry into its children: image or placeholder cards, at a
 * smaller scale than the Work index so the hierarchy stays legible.
 */
export function SubprojectCards({ projects }) {
  return (
    <ul className="subcards">
      {projects.map((p) => {
        const img = p.card.image ? getImage(p.card.image) : null;
        return (
          <li key={p.slug}>
            <article className="subcard">
              <Link className="subcard__link" to={p.path}>
                <div className="subcard__visual">
                  {img ? (
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={img.avif}
                        sizes="(min-width: 900px) 340px, 100vw"
                      />
                      <source
                        type="image/webp"
                        srcSet={img.webp}
                        sizes="(min-width: 900px) 340px, 100vw"
                      />
                      <img
                        src={img.src}
                        alt=""
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  ) : (
                    <div className="subcard__gap">
                      <span>Image to supply</span>
                      {p.card.placeholder?.label}
                    </div>
                  )}
                </div>
                <h3 className="subcard__title">{p.title}</h3>
                <p className="subcard__summary">{p.card.summary}</p>
                <span className="subcard__cta" aria-hidden="true">
                  Read the project
                </span>
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
