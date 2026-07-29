import { Link } from "react-router-dom";
import { getImage } from "../lib/media.js";
import Icon from "./Icon.jsx";
import { siblings, related } from "../content/projects.js";
import "./ProjectNav.css";

/**
 * End-of-case navigation.
 *
 * Two distinct jobs, deliberately not merged:
 *
 *   <PrevNext>  linear movement. Inside a programme it stays inside the
 *               programme, because leaving CASA halfway through CASA is a
 *               navigation failure dressed as a feature.
 *   <Related>   lateral movement by shared discipline, for a reader who came
 *               for a capability rather than for a client.
 *
 * Both are nav landmarks with accessible names, so a screen-reader user can
 * tell them apart in a landmark list.
 */

export function PrevNext({ path }) {
  const { prev, next, within } = siblings(path);
  if (!prev && !next) return null;

  return (
    <nav className="pnext" aria-label="Previous and next project">
      <div className="container pnext__inner">
        {prev ? (
          <Link className="pnext__link pnext__link--prev" to={prev.path}>
            <span className="pnext__dir">
              <Icon name="previous" size={16} />
              {within && prev.format === "programme" ? "Back to" : "Previous"}
            </span>
            <span className="pnext__title">{prev.title}</span>
            {prev.clientName && (
              <span className="pnext__client">{prev.clientName}</span>
            )}
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link className="pnext__link pnext__link--next" to={next.path}>
            <span className="pnext__dir">
              Next
              <Icon name="next" size={16} />
            </span>
            <span className="pnext__title">{next.title}</span>
            {next.clientName && (
              <span className="pnext__client">{next.clientName}</span>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
}

export function Related({ path, count = 2 }) {
  const items = related(path, count);
  if (!items.length) return null;

  return (
    <nav className="related" aria-labelledby="related-title">
      <div className="container">
        <h2 id="related-title" className="related__title">
          Related work
        </h2>
        <ul className="related__list">
          {items.map((p) => {
            const img = p.card.image ? getImage(p.card.image) : null;
            return (
              <li key={p.slug}>
                <Link className="related__link" to={p.path}>
                  <div className="related__visual">
                    {img ? (
                      <picture>
                        <source
                          type="image/avif"
                          srcSet={img.avif}
                          sizes="(min-width: 900px) 200px, 34vw"
                        />
                        <source
                          type="image/webp"
                          srcSet={img.webp}
                          sizes="(min-width: 900px) 200px, 34vw"
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
                      <span className="related__gap" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="related__client">{p.clientName}</p>
                    <p className="related__name">{p.title}</p>
                    <p className="related__areas">{p.areas.join(" · ")}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
