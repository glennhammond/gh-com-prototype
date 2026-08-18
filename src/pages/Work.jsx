import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Button from "../components/Button.jsx";
import { workIndex } from "../content/projects.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Work.css";

/**
 * Work index — v3.4.
 *
 * Four tiers. The hierarchy is carried by scale and position rather than by
 * a badge:
 *
 *   1. Flagship work        one-plus-two: Wellbeing Studio leads at full
 *                          width, Connect & Learn and CASA Flight Examiner
 *                          Rating follow as two equal-weight supporting
 *                          cards, in that fixed order.
 *   2. Selected additional  six cards, led by the CASA program overview.
 *      work                 Its five children stay reachable through the
 *                          program's own navigation rather than as separate
 *                          cards here.
 *   3. Prototypes           a compact row, visibly smaller, under a heading
 *                          that says what it is.
 *
 * Each tier has a real <h2>, so the hierarchy is in the document outline and
 * not only in the layout.
 */
export default function Work() {
  const { flagships, secondary, lab } = workIndex;
  const [lead, ...supportingFlagships] = flagships;
  const [casaProgramme, ...otherSecondary] = secondary;

  return (
    <>
      <Seo
        title="Selected work | Glenn Hammond"
        description="A six-year learning program inside Australia's aviation safety regulator, a live wellbeing platform, an award-winning schools migration, and vocational, health and safety learning for education and government."
        path="/work"
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
          ])
        )}
      />

      <div className="section container">
        <SectionHead
          level={1}
          eyebrow="Selected work"
          headline="Learning systems in practice."
          standfirst="Three flagship projects, a selection of additional work spanning platforms, production systems and organisational design systems, and a compact prototypes tier. Together they demonstrate how strategy becomes implementation."
        />

        {/* --- Tier 1: flagship work ---------------------------------------- */}
        <section className="work-tier" aria-labelledby="tier-flagship">
          <h2 id="tier-flagship" className="work-tier__title">
            <span className="work-tier__num" aria-hidden="true">01</span>
            Flagship work
          </h2>
          <ul className="work-grid">
            <li className="work-grid__lead">
              <ProjectCard project={lead} size="lead" eager />
            </li>
            {supportingFlagships.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>

        {/* --- Tier 2: selected additional work ------------------------------ */}
        <section className="work-tier" aria-labelledby="tier-secondary">
          <h2 id="tier-secondary" className="work-tier__title">
            <span className="work-tier__num" aria-hidden="true">02</span>
            Selected additional work
          </h2>
          <ProjectCard project={casaProgramme} size="programme" />
          <ul className="work-grid">
            {otherSecondary.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>

        {/* --- Tier 3: prototypes ------------------------------------------ */}
        <section className="work-tier" aria-labelledby="tier-lab">
          <h2 id="tier-lab" className="work-tier__title">
            <span className="work-tier__num" aria-hidden="true">03</span>
            Prototypes and experiments
          </h2>
          <p className="work-tier__note">
            Self-directed builds, not client deliverables. They show technique
            and technical depth; they do not claim outcomes.
          </p>
          <ul className="work-lab">
            {lab.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} size="small" />
              </li>
            ))}
          </ul>
        </section>

        <aside className="work-more">
          <p>
            Fifteen years produced more than this. Much of it sits inside
            regulators, schools and former employers, and is not mine to
            publish. If you need to see something closer to your own situation,
            ask. I can usually talk you through it even when I cannot show it.
          </p>
          <Button to="/contact" variant="outline">
            Ask about a sector
          </Button>
        </aside>
      </div>
    </>
  );
}
