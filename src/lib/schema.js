import { site } from "../content/site.js";
import { about } from "../content/about.js";

/**
 * Structured data — Blueprint §25.
 *
 * Rule from the blueprint: no schema claim that has not been verified.
 * In particular, `award` states exactly what the Master Copy states and no
 * more; it is frozen until the LearnX certificate is supplied.
 */

const url = (path) => `${site.origin}${path === "/" ? "" : path}`;

const address = {
  "@type": "PostalAddress",
  addressLocality: site.location.locality,
  addressRegion: site.location.region,
  addressCountry: site.location.country,
};

/** Person — sitewide identity. */
export const personSchema = {
  "@type": "Person",
  "@id": `${site.origin}/#person`,
  name: site.name,
  jobTitle: site.roleTitle,
  url: site.origin,
  email: `mailto:${site.email}`,
  address,
  sameAs: [site.linkedin],
  award: "Two Diamond Awards, Best eLearning Project, LearnX 2024",
  knowsAbout: [
    "Digital product strategy",
    "Experience architecture",
    "Learning experience design",
    "Interaction design",
    "Learning platforms",
    "Learning technology",
    "Digital production systems",
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
  name: "Glenn Hammond — Digital product, experience and learning practice",
  url: `${site.origin}/practice`,
  founder: { "@id": `${site.origin}/#person` },
  address,
  areaServed: { "@type": "Country", name: "Australia" },
  serviceType: [
    "Digital product strategy and experience architecture",
    "Learning experience and interaction design",
    "Learning platform architecture and migration",
    "Learning technology, production systems and implementation",
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
