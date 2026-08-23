import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Privacy.css";

/**
 * Privacy — current website behaviour only.
 *
 * The Minimum Amazing release deliberately does not enable the prototype
 * enquiry submission seam or analytics. This page therefore states only what
 * the current website does, rather than inventing policy language for planned
 * integrations that are not running.
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
          standfirst="The current release is deliberately simple: it publishes professional work and provides links for direct contact."
        />

        <div className="privacy__body">
          <section className="privacy__section">
            <h2 className="privacy__heading">No enquiry submission on the site</h2>
            <p>
              This release does not send or store a web enquiry. The contact page
              provides an email link and a LinkedIn link instead. If you email me,
              the message is handled through email rather than stored by this website.
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
            <h2 className="privacy__heading">External links</h2>
            <p>
              Some links open external services such as LinkedIn or email. Once you
              choose to follow an external link, that service operates under its own
              terms and information practices.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__heading">If the site changes</h2>
            <p>
              If a working enquiry form, analytics or another feature that changes
              how the website handles information is introduced, this page will be
              updated before that feature is enabled.
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
