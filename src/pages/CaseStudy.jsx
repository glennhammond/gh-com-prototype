import { Link, useLocation } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Figure from "../components/Figure.jsx";
import Button from "../components/Button.jsx";
import NotFound from "./NotFound.jsx";
import { EvidenceNote, marked } from "../components/Editorial.jsx";
import { MetaBar, Brief, Outcomes, Decisions } from "../components/ProjectMeta.jsx";
import {
  ProgrammeMap,
  ProgrammeRail,
  SubprojectCards,
} from "../components/ProgrammeNav.jsx";
import { PrevNext, Related } from "../components/ProjectNav.jsx";
import {
  projectByPath,
  casaSubprojects,
  programme as casaProgramme,
} from "../content/projects.js";
import { testimonialById } from "../content/testimonials.js";
import { site } from "../content/site.js";
import {
  graph,
  personSchema,
  projectSchema,
  breadcrumbSchema,
} from "../lib/schema.js";
import "./CaseStudy.css";

/**
 * Case study and program template — V3.
 *
 * One template, driven by which fields a record actually has. A program
 * overview and a subproject page are the same component: the program simply
 * has a map and children where a project has constraints and a decision log.
 *
 * Resolution is by pathname rather than by a route param, because program
 * children live one level deeper (/work/casa/class) and keying on the full
 * path keeps a single source of truth in content/projects.js.
 *
 * Section order follows the editorial framework, and sections are omitted
 * rather than rendered empty. v3.1 changes the SEQUENCING and the surfaces,
 * not the content or the information architecture:
 *
 *   shortened ink introduction → pale metadata strip → program rail →
 *   primary evidence on paper → in 60 seconds on raised paper →
 *   evidence note → situation → what was wrong → constraints → role →
 *   [system architecture] → [selected components] → evidence figures →
 *   key decisions → one ink argument band → subprojects / program map →
 *   [governance] → outcomes → reflection → testimonial →
 *   previous/next → related → contact on raised paper
 *
 * The two bracketed sections (v3.2) are optional, gated on fields a record
 * may or may not set — currently only the ISQ eLearning Design System uses
 * them. The per-page "still to confirm" review panel that used to sit before
 * previous/next is no longer rendered publicly; see DECISIONS.md §15.
 *
 * The single worst adjacency in v3 was the opening: a tall ink hero with a
 * 982px screenshot straddling its lower edge, before a sentence of argument
 * had been read. The metadata strip is the hinge that fixes it, and it does
 * so without touching a word of copy.
 *
 * Ink appears at most twice on any case study: the introduction, and one
 * argument band. Everything else — the metadata strip, the evidence, the
 * next-project block and the contact block — sits on a pale surface.
 */
export default function CaseStudy() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const project = projectByPath[path];
  if (!project) return <NotFound />;

  const isProgramme = project.format === "programme";
  const testimonial = project.testimonialId
    ? testimonialById[project.testimonialId]
    : null;
  const figures = project.figures ?? [];

  return (
    <article className="case">
      <Seo
        title={project.seo.title}
        description={project.seo.description}
        path={project.path}
        jsonLd={graph(
          personSchema,
          projectSchema(project),
          breadcrumbSchema(
            [
              { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
              project.programme && {
                name: casaProgramme.title,
                href: casaProgramme.path,
              },
              { name: project.title, href: project.path },
            ].filter(Boolean)
          )
        )}
      />

      {/* --- Hero ---------------------------------------------------------- */}
      <header className="case__hero on-ink">
        <div className="container">
          <nav aria-label="Breadcrumb" className="case__crumbs">
            <ol>
              <li>
                <Link to="/work">Work</Link>
              </li>
              {project.programme && (
                <li>
                  <Link to={casaProgramme.path}>{casaProgramme.shortTitle}</Link>
                </li>
              )}
              <li aria-current="page">{project.title}</li>
            </ol>
          </nav>
          <p className="eyebrow case__eyebrow">{project.hero.eyebrow}</p>
          <h1 className="display-l case__title">{project.hero.headline}</h1>
          <p className="case__standfirst">{marked(project.hero.standfirst)}</p>
          {project.externalRef && (
            <p className="case__external">
              <a
                href={project.externalRef.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.externalRef.label}
                <span className="visually-hidden">: opens in a new tab</span>
              </a>
            </p>
          )}
        </div>
      </header>

      {/* --- Metadata strip -------------------------------------------------
          Out of the ink introduction and onto plate, where it becomes the
          hinge between the dark opening and the primary evidence. */}
      <div className="case__meta">
        <div className="container">
          <MetaBar items={project.meta} />
        </div>
      </div>

      {project.programme && (
        <ProgrammeRail programme={casaProgramme} currentSlug={project.slug} />
      )}

      {/* --- Primary evidence ------------------------------------------------
          One per page, at 800px, on paper. It is the only figure permitted to
          break the reading column, and the break is what signals its rank. */}
      {(project.hero.image || project.hero.placeholder) && (
        <div className="case__lead">
          <div className="container">
            <Figure
              role={project.hero.placeholder ? "placeholder" : "primary"}
              mount={project.hero.mount}
              image={project.hero.image}
              placeholder={project.hero.placeholder}
              alt={project.hero.alt}
              caption={project.hero.caption}
              area={project.hero.area}
              index="01"
              expandable={project.hero.expandable}
              priority
            />
          </div>
        </div>
      )}

      {/* --- In 60 seconds -------------------------------------------------- */}
      <div className="container">
        <Brief brief={project.brief} />
      </div>

      {/* --- Narrative ------------------------------------------------------ */}
      <div className="container case__body">
        {project.evidenceNote && (
          <EvidenceNote>{project.evidenceNote}</EvidenceNote>
        )}

        <Block title="The situation" paragraphs={project.situation} />
        <Block title="What was actually wrong" paragraphs={project.reframe} />

        {project.constraints && (
          <section className="case__part" aria-labelledby="constraints">
            <h2 id="constraints" className="case__part-title">
              Constraints
            </h2>
            <ul className="case__list">
              {project.constraints.map((c) => (
                <li key={c}>{marked(c)}</li>
              ))}
            </ul>
          </section>
        )}

        {project.roleDetail && (
          <section className="case__part" aria-labelledby="role">
            <h2 id="role" className="case__part-title">
              My role, and who else was involved
            </h2>
            <p>{marked(project.roleDetail)}</p>
            {project.collaborators && (
              <ul className="case__list">
                {project.collaborators.map((c) => (
                  <li key={c}>{marked(c)}</li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>

      {/* --- System architecture ---------------------------------------------
          Optional: set by records that define how the work fits together as
          layers rather than as a single artefact. Currently only the ISQ
          eLearning Design System uses this. */}
      {project.architecture && (
        <section className="case__architecture" aria-labelledby="architecture">
          <div className="container">
            <h2 id="architecture" className="display-m">
              {project.architecture.headline}
            </h2>
            <p className="case__architecture-lede">{project.architecture.intro}</p>
            <ol className="case__architecture-flow">
              {project.architecture.layers.map((l, i) => (
                <li key={l.label}>
                  <span className="case__architecture-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="case__architecture-name">{l.label}</h3>
                    <p>{l.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            {project.architecture.consumers && (
              <div className="case__architecture-consumers">
                <p className="case__architecture-consumers-label">Consumed by</p>
                <ul>
                  {project.architecture.consumers.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                {project.architecture.consumersNote && (
                  <p className="case__architecture-consumers-note">
                    {marked(project.architecture.consumersNote)}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* --- Selected components -----------------------------------------------
          Optional: a small, interpreted set of examples rather than a full
          component gallery. */}
      {project.components && (
        <div className="container case__body">
          <section className="case__part" aria-labelledby="components">
            <h2 id="components" className="case__part-title">
              Selected components
            </h2>
            <dl className="case__components">
              {project.components.map((c) => (
                <div key={c.name} className="case__component">
                  <dt>{c.name}</dt>
                  <dd>{marked(c.detail)}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      )}

      {/* --- Evidence ------------------------------------------------------- */}
      {figures.length > 0 && (
        <section className="case__evidence" aria-labelledby="evidence">
          <div className="container">
            <h2 id="evidence" className="case__part-title case__evidence-title">
              {project.figuresTitle ?? "What it looked like, and why"}
            </h2>
            {project.figuresLede && (
              <p className="case__evidence-lede">{project.figuresLede}</p>
            )}
            <div className="case__figures">
              {figures.map((item, i) => (
                <Figure
                  key={item.image ?? item.placeholder?.label ?? `pair-${i}`}
                  role={item.role}
                  mount={item.mount}
                  artefact={item.artefact}
                  full={item.full}
                  image={item.image}
                  pair={item.pair}
                  placeholder={item.placeholder}
                  alt={item.alt}
                  caption={item.caption}
                  area={item.area}
                  note={item.note}
                  index={String(i + 2).padStart(2, "0")}
                  prototype={item.prototype}
                  expandable={item.expandable}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Decisions ------------------------------------------------------ */}
      <Decisions decisions={project.decisions} />

      {project.decisionLog && (
        <section className="case__decisions on-ink" aria-labelledby="decision-log">
          <div className="container">
            <h2 id="decision-log" className="display-m">
              Three decisions I would defend
            </h2>
            <p className="case__decisions-lede">
              What was chosen, why, and what it cost. A decision presented as
              costless is marketing.
            </p>
            <ol className="case__decision-list">
              {project.decisionLog.map((d, i) => (
                <li key={d.title} className="case__decision">
                  <span className="case__decision-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="case__decision-title">{d.title}</h3>
                    <dl className="case__decision-detail">
                      <dt>The choice</dt>
                      <dd>{d.choice}</dd>
                      <dt>Why</dt>
                      <dd>{d.why}</dd>
                      <dt>What it cost</dt>
                      <dd>{d.tradeoff}</dd>
                    </dl>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* --- program children --------------------------------------------- */}
      {isProgramme && (
        <>
          <ProgrammeMap programme={project} />
          <section className="case__subprojects" aria-labelledby="subprojects">
            <div className="container">
              <h2 id="subprojects" className="display-m">
                The five projects
              </h2>
              <p className="case__subprojects-lede">
                Related, but not the same work. Each has its own audience, its
                own constraints and its own evidence, and each says plainly
                where that evidence stops.
              </p>
              <SubprojectCards projects={casaSubprojects} />
            </div>
          </section>
        </>
      )}

      {/* --- Outcomes ------------------------------------------------------- */}
      <div className="container case__body">
        <Block title="Governance and audit" paragraphs={project.governance} />
        <Outcomes outcomes={project.outcomes} />

        {project.reflection && (
          <section className="case__part" aria-labelledby="reflection">
            <h2 id="reflection" className="case__part-title">
              What I would do differently
            </h2>
            <p>{project.reflection}</p>
          </section>
        )}
      </div>

      {testimonial && (
        <section className="container case__quote-wrap" aria-label="Client comment">
          <figure className="case__quote">
            <blockquote>
              <p>{testimonial.quote}</p>
            </blockquote>
            <figcaption>
              {testimonial.name}, {testimonial.role} &middot;{" "}
              {testimonial.organisation}
            </figcaption>
          </figure>
        </section>
      )}

      <PrevNext path={project.path} />
      {!isProgramme && <Related path={project.path} />}

      {project.relatedService && (
        <p className="container case__related-service">
          <Link to={project.relatedService.href}>
            {project.relatedService.label}
          </Link>
        </p>
      )}

      {/* --- Contact ---------------------------------------------------------- */}
      <section className="case__next" aria-labelledby="case-next">
        <div className="container">
          <h2 id="case-next" className="display-m">
            Recognise any of this?
          </h2>
          <p className="case__next-body">
            If your situation rhymes with this one, the useful next step is
            usually a short conversation about where the problem actually sits.
          </p>
          <div className="case__next-actions">
            <Button to="/contact" variant="primary">
              Tell me what is happening
            </Button>
            <Button to="/work" variant="outline">
              Other work
            </Button>
          </div>
          <p className="case__next-alt">
            Or write directly: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </article>
  );
}

/* -------------------------------------------------------------------------- */

function Block({ title, paragraphs }) {
  if (!paragraphs?.length) return null;
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <section className="case__part" aria-labelledby={id}>
      <h2 id={id} className="case__part-title">
        {title}
      </h2>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{marked(p)}</p>
      ))}
    </section>
  );
}
