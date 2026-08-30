import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Privacy.css";

/**
 * Privacy — current website behaviour only.
 *
 * This page describes the current production behaviour, including the
 * privacy-respecting Vercel measurement used after the Pro upgrade.
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
          standfirst="This website publishes professional work, provides direct contact links and uses limited, privacy-respecting measurement to understand its performance."
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
            <h2 className="privacy__heading">Privacy-respecting site measurement</h2>
            <p>
              This website uses Vercel Web Analytics and Speed Insights to understand
              aggregate page use and real-world website performance. Vercel describes
              these services as collecting anonymised usage and performance data without
              using cookies. They are not used here for advertising, cross-site tracking,
              personalisation or individual visitor profiles.
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
              If a working enquiry form or another feature changes how the website
              handles information, this page will be updated before that feature is
              enabled.
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
