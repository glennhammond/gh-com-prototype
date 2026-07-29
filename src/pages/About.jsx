import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import { about } from "../content/about.js";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./About.css";

/**
 * About — Blueprint §15.
 *
 * First person throughout. Two registers: a short summary for scanning, then a
 * complete dated history for the recruiter and the person doing diligence.
 * Never a chronological CV as the main experience.
 *
 * DELIBERATELY ABSENT: the personal dimension, a portrait, and any speaking or
 * writing section. None of that material exists in the supplied sources, and
 * inventing it is exactly what the evidence rules forbid. The portrait is
 * approved and available but is held until it can be cropped and graded rather
 * than dropped in raw. See CONTENT-REGISTER.md.
 */
export default function About() {
  return (
    <>
      <Seo
        title="About | Glenn Hammond"
        description="Fifteen years across learning design, digital platforms, media production and educational technology — in aviation, education, government, early learning and workplace wellbeing."
        path="/about"
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ])
        )}
      />

      <div className="section container">
        <SectionHead level={1} eyebrow={about.eyebrow} headline={about.headline} />

        <div className="about__summary">
          {about.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>

      <section className="section about__approach on-ink" aria-labelledby="approach">
        <div className="container container--narrow">
          <h2 id="approach" className="display-m">
            {about.approach.heading}
          </h2>
          <div className="about__approach-body">
            {about.approach.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="history">
        <h2 id="history" className="display-m about__section-title">
          Where I have done it
        </h2>

        <ol className="about__history">
          {about.history.map((entry) => (
            <li key={entry.period + entry.org} className="about__entry">
              <p className="about__period">{entry.period}</p>
              <div>
                <h3 className="about__role">
                  {entry.role}
                  <span className="about__org">{entry.org}</span>
                </h3>
                <p className="about__detail">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="about__lists">
          <section aria-labelledby="quals">
            <h3 id="quals" className="eyebrow">
              Qualifications
            </h3>
            <ul className="about__plain">
              {about.qualifications.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="recognition">
            <h3 id="recognition" className="eyebrow">
              Recognition
            </h3>
            <ul className="about__plain">
              {about.recognition.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="sectors">
            <h3 id="sectors" className="eyebrow">
              Sectors
            </h3>
            <ul className="about__plain">
              {about.sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="about__contact">
          <p>
            Based in {site.location.locality}, working with organisations across{" "}
            {site.location.served}.
          </p>
          <div className="about__contact-actions">
            <Button to="/contact" variant="primary">
              Start a conversation
            </Button>
            <Button href={site.linkedin} variant="outline" target="_blank">
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
