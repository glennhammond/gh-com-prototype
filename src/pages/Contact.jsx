import Seo from "../components/Seo.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Contact.css";

/**
 * Contact — production enquiry form with a direct email fallback.
 *
 * Form delivery is handled by Formspree through the existing accessible
 * EnquiryForm component. Email and LinkedIn remain available as direct channels.
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
        <div className="contact__grid">
          <section className="contact__direct-panel" aria-labelledby="contact-enquiry">
            <p className="eyebrow">Start a conversation</p>
            <h1 id="contact-enquiry" className="contact__direct-title">
              Tell me what is happening.
            </h1>

            <div className="contact__form">
              <EnquiryForm />
            </div>

            <p className="contact__channel-note">
              Prefer to write directly?{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
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
