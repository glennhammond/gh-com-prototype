import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Contact.css";

/**
 * Contact — release-ready direct contact.
 *
 * The prototype enquiry form deliberately remains out of the Minimum Amazing
 * release until a real delivery endpoint and the associated privacy contract
 * have been implemented and qualified. Email and LinkedIn are genuine working
 * channels now, so the public page should use them rather than simulate a
 * submission that never leaves the browser.
 */
export default function Contact() {
  return (
    <>
      <Seo
        title="Start a conversation | Glenn Hammond"
        description="Tell me what is happening with your learning platform, product, experience or production system. Brisbane, working with organisations across Australia."
        path="/contact"
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ])
        )}
      />

      <div className="section container contact">
        <div className="contact__intro">
          <SectionHead
            level={1}
            eyebrow="Start a conversation"
            headline="Tell me what is happening."
            standfirst="A few sentences about the situation, the people involved and what needs to change is enough to begin. You do not need to diagnose the solution first."
          />
        </div>

        <div className="contact__grid">
          <section className="contact__direct-panel" aria-labelledby="contact-email">
            <p className="eyebrow">Direct contact</p>
            <h2 id="contact-email" className="contact__direct-title">
              Email is the simplest place to start.
            </h2>
            <p className="contact__direct-lede">
              Write in your own words. A rough brief, a problem that is still
              difficult to name, or a link to something already underway are
              all useful starting points.
            </p>
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="contact__channel-note">
              This website does not submit or store an enquiry. The email link
              opens your own mail application and the conversation continues
              there.
            </p>
          </section>

          <aside className="contact__aside" aria-labelledby="contact-next">
            <h2 id="contact-next" className="eyebrow">
              What helps
            </h2>
            <ol className="contact__next">
              <li>What is happening now, and what feels wrong or limited about it.</li>
              <li>Who the experience, product or learning is for.</li>
              <li>Any real deadline, constraint or existing system that matters.</li>
            </ol>

            <h2 className="eyebrow contact__aside-heading">What happens next</h2>
            <ol className="contact__next">
              <li>I read the message myself.</li>
              <li>{site.responsePromise.text}</li>
              <li>
                If a conversation would be useful, we can arrange a short call
                and work out what deserves attention first.
              </li>
            </ol>

            <h2 className="eyebrow contact__aside-heading">Elsewhere</h2>
            <ul className="contact__direct">
              <li>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
            <p className="contact__where">{site.location.label}</p>
          </aside>
        </div>
      </div>
    </>
  );
}
