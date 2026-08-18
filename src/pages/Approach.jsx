import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import { approach } from "../content/approach.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Approach.css";

/**
 * Approach — v3.4.
 *
 * The canonical home of the "work is lost in the joins" argument, so Home,
 * Practice and About can each point here instead of restating it. Capabilities
 * answers what gets built inside each layer; this page answers how a problem
 * gets diagnosed across them and carried through to delivery.
 */
export default function Approach() {
  return (
    <>
      <Seo
        title={approach.seo.title}
        description={approach.seo.description}
        path="/approach"
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Approach", href: "/approach" },
          ])
        )}
      />

      <div className="section container">
        <SectionHead
          level={1}
          eyebrow={approach.hero.eyebrow}
          headline={approach.hero.headline}
          standfirst={approach.hero.standfirst}
        />
      </div>

      <section className="section section--tight approach-diagnosis on-ink" aria-labelledby="diagnosis-title">
        <div className="container container--narrow">
          <p className="eyebrow">{approach.diagnosis.eyebrow}</p>
          <h2 id="diagnosis-title" className="display-m">
            {approach.diagnosis.headline}
          </h2>
          <p className="approach-diagnosis__lede">{approach.diagnosis.standfirst}</p>

          <ol className="approach-diagnosis__steps">
            {approach.diagnosis.steps.map((step, i) => (
              <li key={step.slice(0, 24)}>
                <span className="approach-diagnosis__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section approach-delivery" aria-labelledby="delivery-title">
        <div className="container container--narrow">
          <p className="eyebrow">{approach.delivery.eyebrow}</p>
          <h2 id="delivery-title" className="display-m">
            {approach.delivery.headline}
          </h2>
          {approach.delivery.body.map((p) => (
            <p key={p.slice(0, 24)} className="approach-delivery__para">
              {p}
            </p>
          ))}
          <Link className="approach-delivery__cta" to={approach.delivery.cta.href}>
            {approach.delivery.cta.label}
          </Link>
        </div>
      </section>

      <section className="section approach-evidence" aria-labelledby="evidence-title">
        <div className="container">
          <h2 id="evidence-title" className="display-l">
            {approach.evidenceTitle}
          </h2>

          <ul className="approach-evidence__list">
            {approach.evidence.map((item) => (
              <li key={item.project} className="approach-evidence__item">
                <h3 className="approach-evidence__title">{item.project}</h3>
                <p className="approach-evidence__body">{item.body}</p>
                <Link className="approach-evidence__link" to={item.href}>
                  View case study
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight approach-close on-ink" aria-labelledby="close-title">
        <div className="container approach-close__inner">
          <h2 id="close-title" className="display-l">
            {approach.close.headline}
          </h2>
          <div className="approach-close__actions">
            <Button to={approach.close.workCta.href} variant="primary">
              {approach.close.workCta.label}
            </Button>
            <Button to={approach.close.contactCta.href} variant="outline">
              {approach.close.contactCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
