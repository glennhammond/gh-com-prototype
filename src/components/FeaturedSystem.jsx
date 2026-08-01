import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import "./FeaturedSystem.css";

/**
 * Homepage featured-system section — v3.2.
 *
 * A dedicated treatment for the ISQ eLearning Design System, distinct from
 * the ProjectCard grammar used everywhere else. The brief for this release is
 * explicit that a fourth identical project card would understate the work:
 * this is the clearest single piece of evidence for the site's four-layer
 * proposition, so it gets a wider statement, its own evidence indicators and
 * a live-system link, sitting between the proof strip and "Selected work".
 *
 * No image is used: no approved screenshot exists yet (see DECISIONS.md
 * §18), so the visual side carries the system's own architecture instead of
 * a placeholder plate, which turns the absence of a screenshot into content
 * rather than a gap.
 */
export default function FeaturedSystem({ content }) {
  return (
    <section
      className="section featured-system"
      aria-labelledby="featured-system-title"
    >
      <div className="container featured-system__inner">
        <div className="featured-system__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="featured-system-title" className="display-l">
            {content.title}
          </h2>
          <p className="featured-system__statement">{content.statement}</p>

          <dl className="featured-system__evidence">
            {content.evidence.map((item) => (
              <div key={item}>
                <dd>{item}</dd>
              </div>
            ))}
          </dl>

          <ul
            className="featured-system__caps"
            aria-label="Disciplines demonstrated"
          >
            {content.capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="featured-system__actions">
            <Button to={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </Button>
            <Button
              href={content.secondaryCta.href}
              variant="outline"
              target="_blank"
            >
              {content.secondaryCta.label}
              <Icon name="external" size={16} />
              <span className="visually-hidden"> (opens in a new tab)</span>
            </Button>
          </div>
        </div>

        <div className="featured-system__map" aria-hidden="true">
          <p className="featured-system__map-label">How it holds together</p>
          <ol className="featured-system__map-list">
            <li>Foundations</li>
            <li>Learning patterns</li>
            <li>Components</li>
            <li>Platform implementation</li>
            <li>Governance</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
