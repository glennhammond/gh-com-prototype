import { STATUS, SOURCE } from "./status.js";

/**
 * The four layers — Blueprint §9, "Four Layers, One Owner".
 *
 * This is the organising structure of the whole site, not a graphic. It drives
 * the homepage framework, the Practice page, the work filter, the layer marks
 * on every project and the enquiry form's qualification question.
 *
 * Language rule (BP §9): plain nouns a buyer already uses. No learning-industry
 * jargon. Each layer names a failure mode the buyer has probably lived through.
 */

export const layers = [
  {
    id: "experience",
    number: "01",
    name: "Experience",
    /** CSS custom property carrying this layer's colour. Colour is never the
     *  only signal — the numeral and name always travel with it. */
    token: "--layer-1",
    /** Bespoke mark from the icon set. Colour is never the only signal:
     *  the icon, the numeral and the name always travel with the swatch. */
    icon: "layer-experience",
    what: "What the learner actually sees, does and remembers. Journey, interface, pacing, accessibility.",
    fails:
      "Looks fine in the demo. Unusable on a phone in a staffroom at seven in the morning.",
    brings:
      "UX and interaction design, mobile-first composition, accessibility built into the design decision rather than audited afterwards.",
    capabilities: [
      "User experience and journey design",
      "Information architecture",
      "Interface and visual design",
      "Accessible interaction patterns",
    ],
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
  {
    id: "content",
    number: "02",
    name: "Content",
    token: "--layer-2",
    /** Bespoke mark from the icon set. Colour is never the only signal:
     *  the icon, the numeral and the name always travel with the swatch. */
    icon: "layer-content",
    what: "The programmes, scenarios, assessment and media. The substance people are there for.",
    fails: "Accurate and unusable, or engaging and wrong. Rarely both right.",
    brings:
      "Learning design, scenario and assessment craft, subject-matter expert collaboration, video and instructional media.",
    capabilities: [
      "Learning and programme design",
      "Scenario and assessment design",
      "Technical content translation",
      "Video and instructional media",
    ],
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
  {
    id: "platform",
    number: "03",
    name: "Platform",
    token: "--layer-3",
    /** Bespoke mark from the icon set. Colour is never the only signal:
     *  the icon, the numeral and the name always travel with the swatch. */
    icon: "layer-platform",
    what: "The environment it runs in. Structure, roles, cohorts, registration, integration, hosting.",
    fails:
      "Chosen before anyone asked what it needed to do. Fights the content for the next five years.",
    brings:
      "Moodle architecture at enterprise scale, migration, custom registration and cohort workflows, hosting and environments.",
    capabilities: [
      "Moodle architecture and optimisation",
      "Platform migration",
      "Registration and cohort systems",
      "Integration and environments",
    ],
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
  {
    id: "operations",
    number: "04",
    name: "Operations",
    token: "--layer-4",
    /** Bespoke mark from the icon set. Colour is never the only signal:
     *  the icon, the numeral and the name always travel with the swatch. */
    icon: "layer-operations",
    what: "The production system and workflow that keeps it going after launch. Templates, governance, automation, publishing.",
    fails:
      "Nobody scoped it. Quality decays from month three and everyone blames the platform.",
    brings:
      "Design systems, style manuals, asset registers, onboarding automation, publishing and replay workflows.",
    capabilities: [
      "Design and production systems",
      "Governance and asset registers",
      "Onboarding and communication automation",
      "Publishing and media workflows",
    ],
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
];

export const layerById = Object.fromEntries(layers.map((l) => [l.id, l]));

export const layerIds = layers.map((l) => l.id);
