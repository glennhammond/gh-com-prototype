import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Section, { SectionHead } from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { riseDesignSystems as copy } from "../content/services.js";
import { projectBySlug } from "../content/projects.js";
import {
  graph,
  personSchema,
  practiceSchema,
  breadcrumbSchema,
} from "../lib/schema.js";
import "./ServicePage.css";

/**
 * Specialist Articulate Rise depth.
 *
 * The legacy /services URL remains addressable for direct entry and search
 * migration continuity. It is subordinate to Practice rather than presented as
 * a parallel service brand.
 */
export default function RiseDesignSystems() {
  const evidenceProject = projectBySlug[copy.evidence.slug];

  return (
    <>
      <Seo
        title={copy.seo.title}
        description={copy.seo.description}
        path="/services/rise-design-systems"
        jsonLd={graph(
          personSchema,
          practiceSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Practice", href: "/practice" },
            { name: "Rise design systems", href: "/services/rise-design-systems" },
          ])
        )}
      />

      <header className="svc-hero on-ink">
        <div className="container">
          <nav aria-label="Breadcrumb" className="svc-hero__crumbs">
            <ol>
              <li><a href="/practice">Practice</a></li>
              <li aria-current="page">Rise design systems</li>
            </ol>
          </nav>
          <p className="eyebrow svc-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1 className="display-l svc-hero__title">{copy.hero.headline}</h1>
          <p className="svc-hero__standfirst">{copy.hero.standfirst}</p>
        </div>
      </header>

      <Section>
        <SectionHead eyebrow={copy.challenge.eyebrow} headline={copy.challenge.headline} />
        <div className="svc-prose">
          {copy.challenge.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
      </Section>

      <Section className="svc-system" aria-labelledby="svc-system-title">
        <SectionHead
          id="svc-system-title"
          eyebrow={copy.system.eyebrow}
          headline={copy.system.headline}
          standfirst={copy.system.intro}
        />
        <div className="svc-groups">
          {copy.system.groups.map((group) => (
            <article key={group.title} className="svc-group">
              <h3 className="svc-group__title">{group.title}</h3>
              <p className="svc-group__body">{group.body}</p>
              <ul className="svc-group__list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="svc-close-line">{copy.system.close}</p>
      </Section>

      <Section band tight>
        <p className="svc-principle">{copy.principle}</p>
      </Section>

      <Section aria-labelledby="svc-outcomes-title">
        <SectionHead id="svc-outcomes-title" eyebrow="Outcomes" headline="What this changes" />
        <ul className="svc-outcomes">
          {copy.outcomes.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="svc-note">{copy.outcomes.note}</p>
      </Section>

      {evidenceProject && (
        <Section className="svc-evidence" aria-labelledby="svc-evidence-title">
          <SectionHead
            id="svc-evidence-title"
            eyebrow={copy.evidence.heading}
            headline={evidenceProject.title}
          />
          <div className="svc-evidence__unit">
            <ProjectCard project={evidenceProject} size="lead" />
            {evidenceProject.externalRef && (
              <p className="svc-evidence__external">
                <a href={evidenceProject.externalRef.href} target="_blank" rel="noopener noreferrer">
                  {evidenceProject.externalRef.label}
                  <span className="visually-hidden">: opens in a new tab</span>
                </a>
              </p>
            )}
          </div>
        </Section>
      )}

      <Section band tight className="svc-cta" aria-labelledby="svc-cta-title">
        <h2 id="svc-cta-title" className="display-l">{copy.cta.heading}</h2>
        <p className="svc-cta__body">{copy.cta.body}</p>
        <Button to={copy.cta.href} variant="primary">{copy.cta.label}</Button>
        <p className="svc-cta__more">
          <Link to="/practice">Read how the practice works</Link>
        </p>
      </Section>
    </>
  );
}
