import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Section, { SectionHead } from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { marked } from "../components/Editorial.jsx";
import { storylineDevelopment as copy } from "../content/services.js";
import { projectBySlug } from "../content/projects.js";
import {
  graph,
  personSchema,
  practiceSchema,
  breadcrumbSchema,
} from "../lib/schema.js";
import "./ServicePage.css";

/**
 * Advanced Storyline development.
 *
 * Sits under /services rather than in primary navigation, alongside Rise
 * design systems. Evidence here is the deeper of the two: CASA's reusable
 * Storyline production system, the Flight Examiner Rating program, the
 * sixty-plus ISQ courses redeveloped, and the self-directed interaction
 * prototypes. See content/services.js for the sourcing note.
 */
export default function StorylineDevelopment() {
  const evidenceProjects = copy.evidence.slugs
    .map((slug) => projectBySlug[slug])
    .filter(Boolean);

  return (
    <>
      <Seo
        title={copy.seo.title}
        description={copy.seo.description}
        path="/services/storyline-development"
        jsonLd={graph(
          personSchema,
          practiceSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Storyline development", href: "/services/storyline-development" },
          ])
        )}
      />

      {/* --- Hero ------------------------------------------------------- */}
      <header className="svc-hero on-ink">
        <div className="container">
          <nav aria-label="Breadcrumb" className="svc-hero__crumbs">
            <ol>
              <li>
                <a href="/services">Services</a>
              </li>
              <li aria-current="page">Storyline development</li>
            </ol>
          </nav>
          <p className="eyebrow svc-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="display-l svc-hero__title">{copy.hero.headline}</h1>
          <p className="svc-hero__standfirst">{copy.hero.standfirst}</p>
        </div>
      </header>

      {/* --- When it fits ------------------------------------------------ */}
      <Section>
        <SectionHead
          eyebrow={copy.whenItFits.eyebrow}
          headline={copy.whenItFits.headline}
          standfirst={copy.whenItFits.body}
        />
      </Section>

      {/* --- Capability groups --------------------------------------------- */}
      <Section className="svc-system" aria-labelledby="svc-groups-title">
        <SectionHead
          id="svc-groups-title"
          eyebrow="What I design and build"
          headline="Four kinds of interactive learning"
        />
        <div className="svc-groups svc-groups--four">
          {copy.groups.map((group) => (
            <article key={group.title} className="svc-group">
              <h3 className="svc-group__title">{group.title}</h3>
              <ul className="svc-group__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* --- Technical depth ------------------------------------------------ */}
      <Section band tight aria-labelledby="svc-technical-title">
        <SectionHead
          id="svc-technical-title"
          eyebrow={copy.technical.eyebrow}
          headline="The means, not the pitch"
        />
        <p className="svc-prose svc-prose--ink">{copy.technical.body}</p>
      </Section>

      {/* --- Ecosystem experience -------------------------------------------- */}
      <Section aria-labelledby="svc-experience-title">
        <SectionHead
          id="svc-experience-title"
          eyebrow={copy.experience.eyebrow}
          headline="Experience that predates the brief"
        />
        <div className="svc-prose">
          {copy.experience.body.map((p) => (
            <p key={p.slice(0, 24)}>{marked(p)}</p>
          ))}
        </div>
      </Section>

      {/* --- Modernisation --------------------------------------------------- */}
      <Section className="svc-modernisation" aria-labelledby="svc-modernisation-title">
        <SectionHead
          id="svc-modernisation-title"
          eyebrow={copy.modernisation.eyebrow}
          headline={copy.modernisation.headline}
          standfirst={copy.modernisation.body}
        />
        <ul className="svc-outcomes">
          {copy.modernisation.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* --- Selected work ---------------------------------------------- */}
      {evidenceProjects.length > 0 && (
        <Section className="svc-evidence" aria-labelledby="svc-evidence-title">
          <SectionHead
            id="svc-evidence-title"
            eyebrow={copy.evidence.heading}
            headline="Storyline work, across six years"
          />
          <ul className="svc-evidence__grid">
            {evidenceProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
          <p className="svc-evidence__more">
            Two of these belong to the same six-year engagement.{" "}
            <Link to="/work/casa">See the full CASA program</Link>
          </p>
        </Section>
      )}

      {/* --- Close / CTA -------------------------------------------------- */}
      <Section band tight className="svc-cta" aria-labelledby="svc-cta-title">
        <h2 id="svc-cta-title" className="display-l">
          {copy.cta.heading}
        </h2>
        <p className="svc-cta__body">{copy.cta.body}</p>
        <Button to={copy.cta.href} variant="primary">
          {copy.cta.label}
        </Button>
        <p className="svc-cta__more">
          Not sure Storyline is the right call?{" "}
          <Link to="/services">Compare it with Rise on the Services overview</Link>
        </p>
      </Section>
    </>
  );
}
