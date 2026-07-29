import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Icon from "../components/Icon.jsx";
import { getImage } from "../lib/media.js";
import { home } from "../content/home.js";
import { layers } from "../content/layers.js";
import { featured } from "../content/projects.js";
import { site } from "../content/site.js";
import { graph, personSchema, practiceSchema } from "../lib/schema.js";
import "./Home.css";

/**
 * Homepage — V2.
 *
 * Seven movements, composed rather than stacked: a dark opening, a light
 * proof band, a work sequence with one lead card and two supporting cards, a
 * compact model strip, an offset offer block, a portrait split, and a dark
 * close.
 *
 * Exactly two ink bands: the opening and the close. Everything between them,
 * and the footer beneath them, sits on paper or raised paper. Dark is
 * punctuation, so the page reads light and the two dark moments carry weight
 * they did not have when a quarter of the page was already dark.
 */
export default function Home() {
  const portrait = getImage("glenn-working");
  const [lead, ...supporting] = featured;

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
          <p className="eyebrow hero__eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {home.hero.headline}
          </h1>
          <p className="hero__standfirst">{home.hero.standfirst}</p>
          <div className="hero__actions">
            <Button to={home.hero.primaryCta.href} variant="primary">
              {home.hero.primaryCta.label}
            </Button>
            <Button to={home.hero.secondaryCta.href} variant="outline">
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* 02 — proof strip ------------------------------------------------ */}
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

      {/* 03 — selected work ---------------------------------------------- */}
      <section className="section home-work" aria-labelledby="work-title">
        <div className="container">
          <header className="home-work__head">
            <p className="eyebrow">{home.work.eyebrow}</p>
            <h2 id="work-title" className="display-l">
              {home.work.headline}
            </h2>
            <p className="lede">{home.work.standfirst}</p>
          </header>

          <ProjectCard project={lead} size="lead" eager />

          <ul className="home-work__grid">
            {supporting.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <Link className="home-work__all" to="/work">
            All four projects
          </Link>
        </div>
      </section>

      {/* 04 — the model, compact ----------------------------------------- */}
      <section className="section section--tight model" aria-labelledby="model-title">
        <div className="container">
          <div className="model__head">
            <p className="spine spine--short model__spine" aria-hidden="true">
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
                <Icon name={layer.icon} size={32} className="model__icon" />
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

      {/* 05 — how to buy -------------------------------------------------- */}
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

      {/* 06 — Glenn -------------------------------------------------------- */}
      <section className="section person" aria-labelledby="person-title">
        <div className="container person__inner">
          {portrait && (
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
          )}
          <div className="person__text">
            <p className="eyebrow">{home.person.eyebrow}</p>
            <h2 id="person-title" className="display-m">
              {home.person.headline}
            </h2>
            {home.person.body.map((p) => (
              <p key={p.slice(0, 24)} className="person__para">
                {p}
              </p>
            ))}
            <Link className="person__link" to={home.person.cta.href}>
              {home.person.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — close --------------------------------------------------------- */}
      <section className="section section--tight close on-ink" aria-labelledby="close-title">
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
            <p className="close__promise">{site.responsePromise.text}</p>
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
