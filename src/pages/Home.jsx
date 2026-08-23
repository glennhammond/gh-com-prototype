import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Button from "../components/Button.jsx";
import SelectedWork from "../components/SelectedWork.jsx";
import portraitAvif from "../assets/portrait/glenn-working-800.avif";
import portraitWebp from "../assets/portrait/glenn-working-800.webp";
import { home } from "../content/home.js";
import {
  casaProject,
  connectProject,
  recordContent,
  tafeProject,
  wellbeingProject,
} from "../content/the-record.js";
import { site } from "../content/site.js";
import { graph, personSchema, practiceSchema } from "../lib/schema.js";
import "./Home.css";

const territories = [wellbeingProject, connectProject, casaProject, tafeProject];

/**
 * Homepage — THE RECORD canonical entry surface.
 *
 * Home establishes the proposition, demonstrates the span of the evidence
 * field, and creates two movements: inspect THE RECORD or interpret the
 * practice. It deliberately does not reproduce the Work index or the full
 * Practice architecture.
 */
export default function Home() {
  const portrait = {
    avif: portraitAvif,
    webp: portraitWebp,
    src: portraitWebp,
    width: 800,
    height: 1000,
  };

  return (
    <>
      <Seo
        title={home.seo.title}
        description={home.seo.description}
        path="/"
        jsonLd={graph(personSchema, practiceSchema)}
      />

      <section className="hero on-ink" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="eyebrow hero__eyebrow">{home.hero.eyebrow}</p>
            <h1 id="hero-title" className="hero__title">{home.hero.headline}</h1>
            <p className="hero__standfirst">{home.hero.standfirst}</p>

            <div className="hero__actions">
              <Button to={home.hero.primaryCta.href} variant="primary">
                {home.hero.primaryCta.label}
              </Button>
              <Link className="hero__secondary" to={home.hero.secondaryCta.href}>
                {home.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <aside className="hero__record-field" aria-label="THE RECORD evidence field">
            <div className="hero__record-field-head">
              <p>THE RECORD · Evidence field</p>
              <p>
                {territories.length} Projects · {recordContent.records.length} Records · {recordContent.artefacts.length} Artefacts
              </p>
            </div>

            <ol className="hero__territories">
              {territories.map((project, index) => (
                <li key={project.id}>
                  <span className="hero__territory-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{project.title}</strong>
                    <span>{project.period} · {project.state}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="hero__record-depth">
              <span>Project</span><i aria-hidden="true">→</i><span>Record</span><i aria-hidden="true">→</i><span>Artefact</span>
            </p>
          </aside>
        </div>
      </section>

      <section className="proof" aria-label="Track record">
        <div className="container">
          <ul className="proof__list">
            {home.proof.items.map((item) => (
              <li key={item.label}>
                <span className="proof__value">{item.value}</span>
                <span className="proof__label">{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="proof__clients">{home.proof.clients}</p>
        </div>
      </section>

      <SelectedWork
        intro={home.work}
        wellbeing={wellbeingProject}
        isq={connectProject}
        casa={casaProject}
        tafe={tafeProject}
      />

      <section className="section buy" aria-labelledby="buy-title">
        <div className="container buy__inner">
          <div className="buy__offer">
            <p className="eyebrow">{home.buy.eyebrow}</p>
            <h2 id="buy-title" className="display-l">{home.buy.headline}</h2>
            <p className="buy__lede">{home.buy.standfirst}</p>
          </div>
          <div className="buy__aside">
            <p>{home.buy.body}</p>
            <Button to={home.buy.cta.href} variant="outline">
              {home.buy.cta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="section person" aria-labelledby="person-title">
        <div className="container person__inner">
          <div className="person__portrait">
            <picture>
              <source type="image/avif" srcSet={portrait.avif} sizes="(min-width: 900px) 300px, 60vw" />
              <source type="image/webp" srcSet={portrait.webp} sizes="(min-width: 900px) 300px, 60vw" />
              <img
                src={portrait.src}
                alt="Glenn Hammond at his desk, in profile."
                width={portrait.width}
                height={portrait.height}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="person__text">
            <p className="eyebrow">{home.person.eyebrow}</p>
            <h2 id="person-title" className="display-m">{home.person.headline}</h2>
            {home.person.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="person__para">{paragraph}</p>
            ))}
            <Link className="person__link" to={home.person.cta.href}>
              {home.person.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight close on-ink" aria-labelledby="close-title">
        <div className="container close__inner">
          <div>
            <h2 id="close-title" className="display-l">{home.close.headline}</h2>
            <p className="close__body">{home.close.body}</p>
          </div>
          <div className="close__action">
            <Button to={home.close.cta.href} variant="primary">
              {home.close.cta.label}
            </Button>
            <p className="close__promise">{site.responsePromise.text}</p>
            <p className="close__alt">
              Or write directly: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
