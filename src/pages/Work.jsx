import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Button from "../components/Button.jsx";
import { workIndex } from "../content/projects.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Work.css";

/**
 * Work index — V3.
 *
 * V2 showed four projects as a lead card plus a grid. With thirteen routed
 * pages that structure stops communicating: everything looks equally
 * important, and the CASA programme reads as one project among many rather
 * than as six years of work with five projects inside it.
 *
 * V3 uses three tiers, and the hierarchy is carried by scale and position
 * rather than by a badge:
 *
 *   1. Featured programme  full-width, image left, five named projects listed
 *                          on the right. Nothing else on the page is this size.
 *   2. Case studies        a two-column grid, with the flagship taking the
 *                          first, wider cell.
 *   3. Prototypes          a compact row, visibly smaller, under a heading
 *                          that says what it is.
 *
 * Each tier has a real <h2>, so the hierarchy is in the document outline and
 * not only in the layout.
 */
export default function Work() {
  const { programme, featured, lab } = workIndex;
  const [flagship, ...rest] = featured;

  return (
    <>
      <Seo
        title="Selected work | Glenn Hammond"
        description="A six-year learning programme inside Australia's aviation safety regulator, a live wellbeing platform, an award-winning schools migration, and vocational, health and safety learning for education and government."
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
          headline="One programme, seven case studies and a small lab."
          standfirst="Ordered by weight rather than by date. Each page says what the evidence supports and, where it matters, what it does not."
        />

        {/* --- Tier 1: the programme -------------------------------------- */}
        <section className="work-tier" aria-labelledby="tier-programme">
          <h2 id="tier-programme" className="work-tier__title">
            <span className="work-tier__num" aria-hidden="true">01</span>
            Featured programme
          </h2>
          <ProjectCard project={programme} size="programme" eager />
        </section>

        {/* --- Tier 2: case studies ---------------------------------------- */}
        <section className="work-tier" aria-labelledby="tier-cases">
          <h2 id="tier-cases" className="work-tier__title">
            <span className="work-tier__num" aria-hidden="true">02</span>
            Case studies
          </h2>
          <ul className="work-grid">
            <li className="work-grid__lead">
              <ProjectCard project={flagship} size="lead" />
            </li>
            {rest.map((project) => (
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
