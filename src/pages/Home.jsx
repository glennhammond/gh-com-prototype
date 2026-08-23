import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import PlaceholderShot from "../components/PlaceholderShot.jsx";
import SelectedWork from "../components/SelectedWork.jsx";
import portraitAvif from "../assets/portrait/glenn-working-800.avif";
import portraitWebp from "../assets/portrait/glenn-working-800.webp";
import { home } from "../content/home.js";
import { layers } from "../content/layers.js";
import {
  casaProject,
  connectProject,
  tafeProject,
  wellbeingProject,
} from "../content/the-record.js";
import { site } from "../content/site.js";
import { graph, personSchema, practiceSchema } from "../lib/schema.js";
import "./Home.css";

/**
 * Homepage — THE RECORD consolidation baseline.
 *
 * The opening and commercial/practice material remain deliberately stable
 * while the evidence entry surface is now driven by THE RECORD itself rather
 * than the legacy case-study estate. This keeps Home aligned with Work without
 * turning it into a duplicate Work index.
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

      {/* 01 — the claim ------------------------------------------------- */}
      <section className="hero on-ink" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="eyebrow hero__eyebrow">{home.hero.eyebrow}</p>

            <h1 id="hero-title" className="hero__title">
              {home.hero.headline}
            </h1>

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

          <div className="hero__visual">
            <figure className="hero__figure">
              <p className="hero__figure-label">{home.hero.figure.area}</p>
              <PlaceholderShot
                className="hero__figure-img"
                width={home.hero.figure.placeholder.width}
                height={home.hero.figure.placeholder.height}
                label={home.hero.figure.placeholder.label}
                alt={home.hero.figure.alt}
                eager
              />
              <figcaption className="hero__figure-cap">
                {home.hero.figure.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 02 — proof strip ----------------------------------------------- */}
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

      {/* 03 — selected work ----------------------------------------------
         One editorial sequence, sourced from the canonical RECORD model. */}
      <SelectedWork
        intro={home.work}
        wellbeing={wellbeingProject}
        isq={connectProject}
        casa={casaProject}
        tafe={tafeProject}
      />

      {/* 04 — the model ------------------------------------------------- */}
      <section
        className="section section--tight model"
        aria-labelledby="model-title"
      >
        <div className="container">
          <div className="model__head">
            <p
              className="spine spine--short model__spine"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
              <span />
            </p>

            <p className="eyebrow">{home.framework.eyebrow}</p>

            <h2 id="model-title" className="display-m">
              {home.framework.headline}
            </h2>

            <p className="model__lede">{home.framework.standfirst}</p>
          </div>

          <ol className="model__list">
            {layers.map((layer) => (
              <li
                key={layer.id}
                className="model__item"
                style={{ "--layer": `var(${layer.token})` }}
              >
                <Icon
                  name={layer.icon}
                  size={32}
                  className="model__icon"
                />

                <h3 className="model__name">
                  <span className="model__num">{layer.number}</span>
                  {layer.name}
                </h3>

                <p className="model__what">{layer.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 — specialist development ----------------------------------- */}
      <section
        className="section section--tight specialist"
        aria-labelledby="specialist-title"
      >
        <div className="container">
          <header className="specialist__head">
            <p className="eyebrow">
              {home.specialistDevelopment.eyebrow}
            </p>

            <h2 id="specialist-title" className="display-m">
              {home.specialistDevelopment.headline}
            </h2>

            <p className="specialist__lede">
              {home.specialistDevelopment.standfirst}
            </p>
          </header>

          <div className="specialist__panels">
            <article
              className="specialist__panel"
              aria-labelledby="specialist-rise"
            >
              <h3
                id="specialist-rise"
                className="specialist__title"
              >
                {home.specialistDevelopment.rise.headline}
              </h3>

              <p className="specialist__body">
                {home.specialistDevelopment.rise.body}
              </p>

              <Link
                className="specialist__cta"
                to={home.specialistDevelopment.rise.cta.href}
              >
                {home.specialistDevelopment.rise.cta.label}
              </Link>
            </article>

            <article
              className="specialist__panel"
              aria-labelledby="specialist-storyline"
            >
              <h3
                id="specialist-storyline"
                className="specialist__title"
              >
                {home.specialistDevelopment.storyline.headline}
              </h3>

              <p className="specialist__body">
                {home.specialistDevelopment.storyline.body}
              </p>

              <Link
                className="specialist__cta"
                to={home.specialistDevelopment.storyline.cta.href}
              >
                {home.specialistDevelopment.storyline.cta.label}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 06 — how to buy ------------------------------------------------ */}
      <section className="section buy" aria-labelledby="buy-title">
        <div className="container buy__inner">
          <div className="buy__offer">
            <p className="eyebrow">{home.buy.eyebrow}</p>

            <h2 id="buy-title" className="display-l">
              {home.buy.headline}
            </h2>

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

      {/* 07 — Glenn ----------------------------------------------------- */}
      <section className="section person" aria-labelledby="person-title">
        <div className="container person__inner">
          <div className="person__portrait">
            <picture>
              <source
                type="image/avif"
                srcSet={portrait.avif}
                sizes="(min-width: 900px) 300px, 60vw"
              />

              <source
                type="image/webp"
                srcSet={portrait.webp}
                sizes="(min-width: 900px) 300px, 60vw"
              />

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

            <h2 id="person-title" className="display-m">
              {home.person.headline}
            </h2>

            {home.person.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="person__para"
              >
                {paragraph}
              </p>
            ))}

            <Link
              className="person__link"
              to={home.person.cta.href}
            >
              {home.person.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 08 — close ----------------------------------------------------- */}
      <section
        className="section section--tight close on-ink"
        aria-labelledby="close-title"
      >
        <div className="container close__inner">
          <div>
            <h2 id="close-title" className="display-l">
              {home.close.headline}
            </h2>

            <p className="close__body">{home.close.body}</p>
          </div>

          <div className="close__action">
            <Button to={home.close.cta.href} variant="primary">
              {home.close.cta.label}
            </Button>

            <p className="close__promise">
              {site.responsePromise.text}
            </p>

            <p className="close__alt">
              Or write directly:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
