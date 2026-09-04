import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Privacy.css";

/**
 * Privacy — current website behaviour only.
 *
 * The contact form now uses Formspree for enquiry delivery. This page describes
 * that live behaviour alongside the site's continuing absence of analytics,
 * advertising tracking and marketing cookies.
 */
export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy | Glenn Hammond"
        description="A concise description of the information behaviour of the current glennhammond.com website."
        path="/privacy"
        noindex
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Privacy", href: "/privacy" },
          ])
        )}
      />

      <div className="section container container--narrow privacy">
        <SectionHead
          level={1}
          eyebrow="Privacy"
          headline="What this website does with information."
          standfirst="This site publishes professional work and provides a contact form for direct enquiries. The notes below describe what is collected and why."
        />

        <div className="privacy__body">
          <section className="privacy__section">
            <h2 className="privacy__heading">Contact enquiries and Formspree</h2>
            <p>
              If you use the contact form, the information you enter is sent to
              Formspree so it can deliver the enquiry to me. This can include your
              name, organisation, email address, message, selected problem area and
              rough timeframe.
            </p>
            <p>
              I use those details to read and respond to your enquiry. Formspree is
              a third-party form delivery service and may process or retain a
              submission as part of providing that service under its own information
              practices. Please do not use the form to send sensitive or confidential
              information.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__heading">No analytics or advertising tracking</h2>
            <p>
              This release does not include Google Analytics, advertising pixels,
              personalisation, account tracking or marketing cookies.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__heading">External services and links</h2>
            <p>
              The contact form uses Formspree for delivery, and some links open
              external services such as LinkedIn or email. Those services operate
              under their own terms and information practices.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__heading">If the site changes</h2>
            <p>
              If analytics, accounts, marketing technology or another feature that
              changes how the website handles information is introduced, this page
              will be updated to describe that behaviour.
            </p>
          </section>
        </div>

        <p className="privacy__contact">
          Questions about the website: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </>
  );
}
