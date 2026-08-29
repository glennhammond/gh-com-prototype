import { site } from "../content/site.js";
import { about } from "../content/about.js";

/**
 * Structured data — Blueprint §25 + Search 02 evidence discipline.
 *
 * Rule: no schema claim that has not been verified strongly enough for machine
 * assertion. The LearnX award/project relationship remains an evidence gap, so
 * no award property is emitted until the supporting certificate/relationship
 * is qualified.
 */

const url = (path) => `${site.origin}${path === "/" ? "" : path}`;

const address = {
  "@type": "PostalAddress",
  addressLocality: site.location.locality,
  addressRegion: site.location.region,
  addressCountry: site.location.country,
};

/** Person — sitewide identity. Retains the role title recruiters expect. */
export const personSchema = {
  "@type": "Person",
  "@id": `${site.origin}/#person`,
  name: site.name,
  jobTitle: site.roleTitle,
  url: site.origin,
  email: `mailto:${site.email}`,
  address,
  sameAs: [site.linkedin],
  knowsAbout: [
    "Digital learning",
    "eLearning",
    "Learning design",
    "Instructional design",
    "Learning experience design",
    "Digital product strategy",
    "Experience architecture",
    "Information architecture",
    "Learning platforms",
    "Moodle",
    "Articulate Storyline",
    "Rise 360",
    "xAPI",
    "Accessibility",
  ],
  alumniOf: undefined,
  hasCredential: about.qualifications.map((q) => ({
    "@type": "EducationalOccupationalCredential",
    name: q,
  })),
};

/** ProfessionalService — commercial metadata, subordinate to Practice evidence. */
export const practiceSchema = {
  "@type": "ProfessionalService",
  "@id": `${site.origin}/#practice`,
  name: "Glenn Hammond — Digital product, learning and systems practice",
  url: `${site.origin}/practice`,
  founder: { "@id": `${site.origin}/#person` },
  address,
  areaServed: { "@type": "Country", name: "Australia" },
  serviceType: [
    "Digital product strategy and experience architecture",
    "Learning experience and interaction design",
    "Learning platform architecture and migration",
    "Learning technology and production systems",
  ],
};

/** CreativeWork — one per case study. */
export function projectSchema(project) {
  const node = {
    "@type": "CreativeWork",
    "@id": url(project.path),
    name: project.title,
    url: url(project.path),
    abstract: project.card?.summary,
    creator: { "@id": `${site.origin}/#person` },
    about: project.sector,
  };
  // Only assert a client when the name is approved for publication.
  if (project.clientName) {
    node.sourceOrganization = {
      "@type": "Organization",
      name: project.clientName,
    };
  }
  return node;
}

/** BreadcrumbList — case studies and other second-level pages. */
export function breadcrumbSchema(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.href),
    })),
  };
}

/** Wraps nodes into a single @graph document. */
export const graph = (...nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes.filter(Boolean),
});
