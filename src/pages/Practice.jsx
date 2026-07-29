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
        title="Services | Glenn Hammond"
        description="Four layers, four defined engagements. Learning system reviews, platform and programme delivery, production and design systems, and embedded specialist work."
        path="/services"
        jsonLd={graph(
          personSchema,
          practiceSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ])
        )}
      />

      <div className="section container">
        <SectionHead
          level={1}
          eyebrow="Practice"
          headline="Four layers, one owner."
          standfirst="I work across all four layers of a learning programme rather than taking one and handing the rest on. That is not a claim to be better at each discipline than a specialist in it — it is a claim that the decisions between them need a single owner."
        />
        <LayerTabs />
      </div>

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
