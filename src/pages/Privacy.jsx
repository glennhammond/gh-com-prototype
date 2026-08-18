import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import { site } from "../content/site.js";
import { graph, personSchema, breadcrumbSchema } from "../lib/schema.js";
import "./Privacy.css";

/**
 * Privacy — structure only.
 *
 * Blueprint §24 and §26 record this as a launch blocker: no privacy policy
 * exists, the enquiry form collects personal information and GA4 sets cookies,
 * and both require disclosure under the Australian Privacy Principles.
 *
 * This page is therefore the SHAPE of that notice with the factual scope
 * filled in from confirmed decisions, and every operative clause left as an
 * explicit gap. Nothing here is legal drafting and none of it should ship.
 * Writing plausible-sounding policy text would be the single most dangerous
 * kind of invented content on the site.
 */

const SECTIONS = [
  {
    heading: "What is collected when you use the enquiry form",
    known: [
      "Name, organisation, email address, an optional indication of which layers you are stuck at, your message, and an optional timeframe.",
      "Submissions are delivered by email. There is no separate long-term submission store.",
    ],
    needed:
      "Confirmed retention period for the resulting email, and the process for handling an access or deletion request.",
  },
  {
    heading: "Analytics",
    known: [
      "Google Analytics 4 is used to understand which pages are read and how people arrive.",
      "Configuration is data-minimising: IP anonymisation on, Google Signals off, ad personalisation off.",
    ],
    needed:
      "Confirmed data-retention setting, and a decision on whether a cookie notice is required for the final configuration.",
  },
  {
    heading: "How information is used",
    known: ["To reply to your enquiry, and for nothing else."],
    needed:
      "Standard disclosure wording, plus confirmation that no information is disclosed to third parties beyond the email and analytics providers named above.",
  },
  {
    heading: "Third parties involved",
    known: [
      "Website hosting: Vercel.",
      "Analytics: Google Analytics 4.",
      "Email delivery for enquiries: to be confirmed at implementation.",
    ],
    needed:
      "Final list of processors, and whether any of them store data outside Australia.",
  },
  {
    heading: "Access, correction and complaints",
    known: [],
    needed:
      "Contact route for access and correction requests, and the complaints pathway including reference to the Office of the Australian Information Commissioner.",
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy | Glenn Hammond"
        description="How information submitted through this website is handled."
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
          headline="How information from this site is handled."
        />

        <div className="privacy__notice" role="note">
          <h2 className="privacy__notice-title">
            This notice is not finished, and must not go live as it stands
          </h2>
          <p>
            The structure and factual scope below are correct and come from
            confirmed decisions. The operative wording has deliberately not been
            drafted: writing plausible-sounding privacy text without legal review
            would be worse than having none.
          </p>
          <p>
            Approved legal content is required before the enquiry form and
            analytics go live. This is recorded as a launch blocker in the
            blueprint.
          </p>
        </div>

        <div className="privacy__body">
          {SECTIONS.map((section) => (
            <section key={section.heading} className="privacy__section">
              <h2 className="privacy__heading">{section.heading}</h2>
              {section.known.length > 0 && (
                <ul className="privacy__known">
                  {section.known.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <p className="privacy__needed">
                <span className="privacy__needed-label">Still required</span>
                {section.needed}
              </p>
            </section>
          ))}
        </div>

        <p className="privacy__contact">
          Questions about any of this in the meantime:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </>
  );
}
