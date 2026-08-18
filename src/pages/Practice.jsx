import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import LayerTabs from "../components/LayerTabs.jsx";
import LayerMark from "../components/LayerMark.jsx";
import Button from "../components/Button.jsx";
import { engagements } from "../content/engagements.js";
import { projectBySlug } from "../content/projects.js";
import {
  graph,
  personSchema,
  practiceSchema,
  breadcrumbSchema,
} from "../lib/schema.js";
import "./Practice.css";

/**
 * Practice — Blueprint §11, §14.
 *
 * Replaces "Services". Organised around the four layers rather than six
 * parallel service lines, with four defined engagements underneath. Six
 * services describe what I can do; four engagements describe what a client can
 * buy, and the first one is deliberately small.
 *
 * No prices. The blueprint recommends an indicative range on the entry offer
 * only, and only once three or four have been sold.
 */
export default function Practice() {
  return (
    <>
      <Seo
        title="Capabilities | Glenn Hammond"
        description="Four layers, four defined engagements. Learning system reviews, platform and program delivery, production and design systems, and embedded specialist work."
        path="/practice"
        jsonLd={graph(
          personSchema,
          practiceSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Capabilities", href: "/practice" },
          ])
        )}
      />

      <div className="section container">
        <SectionHead
          level={1}
          eyebrow="Capabilities"
          headline="Four layers, one owner."
          standfirst="I work across all four layers of a learning program rather than taking one and handing the rest on. Two of those layers have their own specialist practice: Rise design systems and premium development, and advanced Storyline development."
        />
        <Link className="practice-intro__cta" to="/approach">
          Read how I connect the four layers
        </Link>
        <LayerTabs />
      </div>

      <section className="section builds" aria-labelledby="builds-title">
        <div className="container">
          <SectionHead
            id="builds-title"
            eyebrow="How it gets built"
            headline="Rise and Storyline, done as specialist practices."
            standfirst="Both sit mostly inside the Content and Operations layers above — this is how the work gets built, not a different kind of work. Rise and Storyline are chosen for different reasons rather than ranked against each other."
          />

          <div className="builds__cards">
            <article className="builds__card" aria-labelledby="builds-rise">
              <h3 id="builds-rise" className="builds__title">
                Rise design systems and premium development
              </h3>
              <p className="builds__body">
                Rise makes responsive course production efficient, but its
                standard visual and interaction options can make learning feel
                generic. I combine learning design, UX, HTML, CSS and reusable
                components to create distinctive, scalable Rise experiences.
              </p>
              <Link className="builds__cta" to="/services/rise-design-systems">
                Explore Rise design systems
              </Link>
            </article>

            <article className="builds__card" aria-labelledby="builds-storyline">
              <h3 id="builds-storyline" className="builds__title">
                Advanced Storyline development
              </h3>
              <p className="builds__body">
                Bespoke scenarios, simulations, assessments and interactive
                learning built on extensive experience across the Articulate
                ecosystem.
              </p>
              <Link className="builds__cta" to="/services/storyline-development">
                Explore Storyline development
              </Link>
            </article>
          </div>

          <div className="builds__compare">
            <h3 className="builds__compare-title">
              The right tool for the learning problem
            </h3>
            <p>
              <strong>Rise</strong> is responsive and content-led: efficient
              to develop and maintain, suited to scalable programmes and
              course suites, and strongest for structured, content-rich
              learning enhanced through reusable systems and custom
              components.
            </p>
            <p>
              <strong>Storyline</strong> is bespoke and interaction-led: it
              supports complex scenarios, simulations and advanced logic, and
              is strongest where the interaction itself carries the learning.
            </p>
            <p>
              I recommend Rise, Storyline or a combined solution based on the
              learning objectives, audience, interaction requirements,
              accessibility, production constraints, maintenance model and
              reporting requirements — not on a fixed preference for either
              tool.
            </p>
          </div>
        </div>
      </section>

      <section className="section engagements" aria-labelledby="engagements-title">
        <div className="container">
          <SectionHead
            id="engagements-title"
            eyebrow="How this is bought"
            headline="Four engagements."
            standfirst="Sized so the first one is small. Most work starts with a review and goes from there, and a review is useful even if nothing follows it."
          />

          <div className="engagements__list">
            {engagements.map((engagement) => {
              const evidence = engagement.evidence
                .map((slug) => projectBySlug[slug])
                .filter(Boolean);

              return (
                <article
                  key={engagement.id}
                  className="engagement"
                  aria-labelledby={`eng-${engagement.id}`}
                >
                  <div className="engagement__head">
                    <p className="engagement__kind">
                      {engagement.kind} &middot; {engagement.duration}
                    </p>
                    <h3 id={`eng-${engagement.id}`} className="engagement__title">
                      {engagement.name}
                    </h3>
                    <p className="engagement__lede">{engagement.lede}</p>
                    <ul className="engagement__layers" aria-label="Layers involved">
                      {engagement.layers.map((id) => (
                        <li key={id}>
                          <LayerMark id={id} variant="compact" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <dl className="engagement__detail">
                    <dt>Who it is for</dt>
                    <dd>{engagement.buyer}</dd>

                    <dt>What usually triggers it</dt>
                    <dd>{engagement.trigger}</dd>

                    <dt>What is included</dt>
                    <dd>
                      <ul>
                        {engagement.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>

                    <dt>What is not</dt>
                    <dd>{engagement.excludes.join(". ")}.</dd>

                    <dt>What you end up with</dt>
                    <dd>{engagement.outcome}</dd>

                    {evidence.length > 0 && (
                      <>
                        <dt>Evidence</dt>
                        <dd className="engagement__evidence">
                          {evidence.map((project, i) => (
                            <span key={project.slug}>
                              {i > 0 && ", "}
                              <Link to={project.path}>
                                {project.title}
                              </Link>
                            </span>
                          ))}
                        </dd>
                      </>
                    )}

                    <dt>Next step</dt>
                    <dd>{engagement.nextStep}</dd>
                  </dl>

                  {engagement.note && (
                    <p className="engagement__note">{engagement.note}</p>
                  )}
                </article>
              );
            })}
          </div>

          <div className="engagements__close">
            <p>
              Not sure which of these it is? That is normal, and it is usually
              the first thing worth working out together.
            </p>
            <Button to="/contact" variant="primary">
              Start a conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
