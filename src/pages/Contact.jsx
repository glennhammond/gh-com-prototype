import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Contact.css";

/**
 * Contact — Blueprint §21.
 *
 * The primary action is a specific project conversation, not "get in touch".
 * Email is shown alongside the form because referrals prefer it and a
 * form-only practice reads as gated.
 */
export default function Contact() {
  return (
    <>
      <Seo
        title="Start a conversation | Glenn Hammond"
        description="Tell me what is happening with your learning platform, program or production system. Brisbane, working with organisations across Australia."
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
            standfirst="Most conversations start with someone describing a course problem that turns out to be a platform problem, or the reverse. A few sentences is enough to begin."
          />
        </div>

        <div className="contact__grid">
          <div className="contact__form">
            <EnquiryForm />
          </div>

          <aside className="contact__aside" aria-labelledby="contact-direct">
            <h2 id="contact-direct" className="eyebrow">
              Or directly
            </h2>
            <ul className="contact__direct">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>

            <h2 className="eyebrow contact__aside-heading">Where</h2>
            <p className="contact__where">{site.location.label}</p>

            <h2 className="eyebrow contact__aside-heading">What happens next</h2>
            <ol className="contact__next">
              <li>I read it myself. Every enquiry, not a filtered inbox.</li>
              <li>A reply within 24 hours, even if the answer is that I am not the right person.</li>
              <li>
                If it looks like a fit, a 30-minute call to work out which layer
                the problem is actually on.
              </li>
            </ol>

            <p className="contact__privacy">
              What you send is used only to reply to you. Nothing is stored
              beyond that. See the{" "}
              <a href="/privacy">privacy notice</a>.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}
