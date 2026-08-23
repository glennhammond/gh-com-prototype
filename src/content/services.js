import { STATUS, SOURCE } from "./status.js";

/**
 * Rise and Storyline — specialist production routes retained for direct entry
 * and migration continuity.
 *
 * Practice Architecture v1 does not organise the practice around tools. These
 * routes therefore provide subordinate production depth rather than parallel
 * Practice pillars. Storyline has recurring canonical evidence across TAFE,
 * CASA and ISQ. Rise retains useful evidence through the ISQ eLearning Design
 * System but is not promoted as a core recurring Practice claim until the
 * canonical field earns that stronger statement.
 */

export const riseDesignSystems = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,

  seo: {
    title: "Rise Design Systems and Development | Glenn Hammond",
    description:
      "Premium Articulate Rise development: reusable component libraries, custom HTML and CSS enhancement, and design systems built from real production work at Independent Schools Queensland.",
  },

  hero: {
    eyebrow: "Practice · Rise design systems",
    headline: "Transforming Rise into a distinctive, scalable digital learning system.",
    standfirst:
      "Rise is one of the fastest authoring tools available, but out of the box it produces generic-looking courses with limited flexibility. I develop design systems, reusable components and custom HTML/CSS enhancements that transform Rise into a premium learning platform while retaining all of its speed and maintainability.",
  },

  challenge: {
    eyebrow: "The challenge with standard Rise",
    headline: "Fast to build. Easy to make interchangeable.",
    body: [
      "Rise's speed comes from a fixed set of blocks and a shared visual language, and for a single course that trade is a good one. The constraint shows up once an organisation is producing more than one: courses become visually interchangeable, brand expression is limited to a theme colour, the same handful of interactions get reused because they are the ones on offer, and authoring standards drift between projects because there is nowhere for a standard to live.",
      "None of that is a flaw in Rise. It is what happens when a tool built for speed is used without a system built for scale — and it is exactly the gap specialist system design closes.",
    ],
  },

  system: {
    eyebrow: "A system, not cosmetic customisation",
    headline: "Not just colours and fonts.",
    intro:
      "The work goes well beyond changing a theme. Two things get built, and they compound: a design system that governs how a course looks, reads and behaves, and technical enhancement that extends what Rise can actually do without leaving Rise.",
    groups: [
      {
        title: "Design systems",
        body: "Reusable component libraries, branded interaction patterns, consistent typography, spacing systems, accessible colour systems, reusable layouts, image standards and content patterns — the same structure the ISQ eLearning Design System documents as foundations, learning patterns and governed components.",
        items: [
          "Reusable component libraries",
          "Branded interaction patterns",
          "Consistent typography",
          "Spacing systems",
          "Accessible colour systems",
          "Reusable layouts",
          "Image standards",
          "Content patterns",
        ],
      },
      {
        title: "Technical enhancement",
        body: "Custom HTML blocks, an external CSS architecture and a reusable interaction library that stay inside Rise's authoring model rather than fighting it — assigned the least complex implementation tier that fully supports the learning purpose, the same native-first rule the ISQ system documents and audits itself against.",
        items: [
          "Custom HTML blocks",
          "External CSS architecture",
          "Reusable interaction library",
          "Accessible components",
          "Responsive layouts",
          "Advanced styling — accordions, tabs, flip cards, timelines, process diagrams",
          "Reusable templates",
        ],
      },
    ],
    close:
      "Rather than producing one-off courses, I create scalable systems that enable teams to develop consistent, high-quality learning experiences for years to come.",
  },

  principle:
    "A strong Rise engagement should leave the organisation with more than a finished course. It should create a reusable system that improves every course produced afterwards.",

  outcomes: {
    note: "Adoption and delivery-efficiency figures belong to the underlying project record, not to marketing copy for this page — see the ISQ eLearning Design System case study for what is and is not yet claimed.",
    items: [
      "Stronger visual and interaction consistency across a course suite",
      "Distinctive, on-brand learning rather than a generic Rise theme",
      "Faster production once the component library and templates exist",
      "Easier maintenance, because a fix or a rebrand happens once in the system rather than once per course",
      "Accessible patterns built into components rather than audited after the fact",
      "Clearer governance, so quality stops depending on who happens to build the next course",
    ],
  },

  evidence: {
    heading: "Featured system",
    slug: "isq-elearning-design-system",
  },

  cta: {
    heading: "Need Rise to do more?",
    body: "Whether the requirement is a single flagship course or a reusable organisation-wide system, I can help establish the structure, components and standards needed to produce better learning at scale.",
    label: "Discuss a Rise project",
    href: "/contact",
  },
};

export const storylineDevelopment = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,

  seo: {
    title: "Advanced Storyline Development | Glenn Hammond",
    description:
      "Advanced Articulate Storyline development for branching scenarios, simulations, assessments and reusable production systems, built on six years of regulated aviation and education learning.",
  },

  hero: {
    eyebrow: "Practice · Storyline development",
    headline: "Sophisticated interactive learning built on deep Articulate expertise.",
    standfirst:
      "I have developed with Articulate Storyline across regulated aviation and education learning for more than a decade, including six years inside Australia's aviation safety regulator. That depth is what makes it possible to design and build complex interactions, simulations and scenario-based learning that stay intuitive, maintainable and aligned with the learning objective.",
  },

  whenItFits: {
    eyebrow: "When Storyline is the right choice",
    headline: "When the interaction carries the learning.",
    body: "Storyline earns its cost when a learner needs to make a decision, practise a process, explore a consequence, work through a branching scenario or receive feedback tailored to what they did — not just what they clicked. The tool is justified by the learning objective, interaction requirement, accessibility, production constraints and maintenance model rather than by a fixed authoring preference.",
  },

  groups: [
    {
      title: "Scenario-based learning",
      items: [
        "Branching decisions",
        "Realistic consequences",
        "Role-based perspectives",
        "Workplace situations",
        "Adaptive feedback",
        "Non-linear pathways",
      ],
    },
    {
      title: "Simulations and practice",
      items: [
        "Software simulations",
        "Procedural practice",
        "Guided demonstrations",
        "Systems training",
        "Equipment or interface interactions",
        "Safe practice environments",
      ],
    },
    {
      title: "Advanced assessments",
      items: [
        "Variable-driven assessment",
        "Complex scoring",
        "Question banks",
        "Confidence measures",
        "Remediation pathways",
        "Performance-based feedback",
      ],
    },
    {
      title: "Custom interactive experiences",
      items: [
        "Bespoke interfaces",
        "Animated processes",
        "Interactive diagrams",
        "Exploratory experiences",
        "Dashboards and menus",
        "Non-linear content structures",
      ],
    },
  ],

  technical: {
    eyebrow: "Technical depth",
    body: "Variables and conditional logic, triggers, states and layers, SCORM and xAPI packaging, and LMS deployment are the means to a reliable experience, not the pitch. The interaction and learning-data prototypes on this site were built to test exactly this: SCORM learner-data capture and variable-driven navigation, outside a client brief, because the only way to trust a pattern under pressure is to have built it before you need it.",
  },

  experience: {
    eyebrow: "Experience across the Articulate ecosystem",
    body: [
      "Six years inside the Civil Aviation Safety Authority (2015–2021) built and maintained a reusable Storyline production system for the regulator's design team — a style manual, authoring templates, specified components with documented states, and an icon and step-marker library used across the Flight Examiner Rating programme and the wider CASA learning catalogue.",
      "That production-system discipline carried forward: more than sixty Storyline courses were redeveloped to a single architecture at Independent Schools Queensland, run alongside a platform migration inside a single term. Recognised as an Articulate eLearning Hero.",
    ],
  },

  modernisation: {
    eyebrow: "Storyline modernisation",
    headline: "Modernising existing Storyline content.",
    body: "Six years working inside one organisation's course library, and the production system built to govern it, is also what a modernisation engagement draws on: diagnosing what an older project was actually built to do, updating accessibility and publishing settings, consolidating inconsistent templates, and republishing to a current LMS without starting the course over.",
    items: [
      "Legacy course audit",
      "Visual and interaction redesign",
      "Accessibility remediation",
      "Player and publishing updates",
      "Template consolidation",
      "SCORM or xAPI review",
      "LMS compatibility testing",
    ],
  },

  evidence: {
    heading: "Selected work",
    slugs: ["flight-examiner-rating", "course-system", "connect-and-learn", "interaction-prototypes"],
  },

  cta: {
    heading: "Planning a complex Storyline project?",
    body: "I can help shape the learning approach, prototype the interaction and develop a robust experience that is engaging, maintainable and ready for deployment.",
    label: "Discuss a Storyline project",
    href: "/contact",
  },
};
