import { STATUS, SOURCE } from "./status.js";

/**
 * Specialist Articulate depth retained for direct entry and search continuity.
 * These pages describe tools and production capability where that specificity
 * is useful; they are not parallel brands or the organising structure of the
 * public practice.
 */

export const riseDesignSystems = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,

  seo: {
    title: "Articulate Rise Design Systems | Glenn Hammond",
    description:
      "Articulate Rise design systems, reusable components, custom HTML/CSS enhancement and production governance, grounded in real work at Independent Schools Queensland.",
  },

  hero: {
    eyebrow: "Specialist depth · Articulate Rise",
    headline: "Making Rise more distinctive, reusable and governed.",
    standfirst:
      "Rise is fast because it is deliberately constrained. That is useful until an organisation needs a recognisable visual language, repeatable interaction patterns, accessible components and standards that survive beyond one course. I design the system around the tool so teams can keep its speed without accepting every default.",
  },

  challenge: {
    eyebrow: "The constraint",
    headline: "Fast to build. Easy to make interchangeable.",
    body: [
      "Rise's speed comes from a fixed set of blocks and a shared visual language. For a single course that trade can be entirely reasonable. The constraint becomes more visible across a programme or organisation: courses start to look interchangeable, interaction choices narrow to what is immediately available, and authoring standards can drift because there is nowhere for a shared production rule to live.",
      "The useful response is not to fight Rise. It is to decide which constraints are helpful, then build a reusable layer of design, interaction and production governance around the places where the defaults are not enough.",
    ],
  },

  system: {
    eyebrow: "Beyond theme customisation",
    headline: "Build the reusable rules around the tool.",
    intro:
      "The work combines a design system that governs how learning looks, reads and behaves with technical enhancement that extends what Rise can do while keeping the authoring model maintainable.",
    groups: [
      {
        title: "Design systems",
        body: "Reusable component libraries, interaction patterns, typography, spacing, accessible colour, layouts, image standards and content patterns create a shared production language rather than a collection of one-off courses.",
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
        body: "Custom HTML blocks, external CSS and reusable interaction patterns can extend Rise without making every course a bespoke software project. The guiding rule is to use the least complex implementation that fully supports the learning purpose.",
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
      "The useful deliverable is not only the course in front of you. It is a system the next course can inherit.",
  },

  principle:
    "A strong Rise engagement should leave the organisation with more than a finished course. It should leave reusable decisions that improve the work that follows.",

  outcomes: {
    note: "Any adoption or delivery-efficiency claim belongs with the ISQ project evidence where its basis and limitations can be inspected; this page does not manufacture a marketing number.",
    items: [
      "Stronger visual and interaction consistency across a course suite",
      "A more recognisable experience than the default Rise theme alone can provide",
      "Faster production once reusable components and templates exist",
      "Easier maintenance because shared rules can be updated centrally",
      "Accessible patterns designed into components rather than added after production",
      "Clearer governance so quality depends less on who builds the next course",
    ],
  },

  evidence: {
    heading: "Work to inspect",
    slug: "isq-elearning-design-system",
  },

  cta: {
    heading: "Need Rise to do more?",
    body: "If the requirement is a flagship course, a reusable component system or a wider production standard, I can help work out what should stay native to Rise and what genuinely needs extending.",
    label: "Discuss a Rise project",
    href: "/contact",
  },
};

export const storylineDevelopment = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,

  seo: {
    title: "Advanced Articulate Storyline Development | Glenn Hammond",
    description:
      "Advanced Articulate Storyline development for branching scenarios, simulations, assessment, interaction and reusable production systems across aviation and education learning.",
  },

  hero: {
    eyebrow: "Specialist depth · Articulate Storyline",
    headline: "Complex interaction when the interaction carries the learning.",
    standfirst:
      "I have used Articulate Storyline across regulated aviation and education learning for more than a decade, including six years inside Australia's aviation safety regulator. That depth is useful when the learning depends on decisions, consequence, practice, simulation or state — and when the result still needs to be maintainable after the interesting interaction has been built.",
  },

  whenItFits: {
    eyebrow: "When Storyline earns its complexity",
    headline: "When the interaction carries the learning.",
    body: "Storyline is useful when a learner needs to make a decision, practise a process, explore a consequence, work through a branching scenario or receive feedback that depends on what they did. The tool is not the starting point; the required behaviour is. If a simpler implementation can carry the learning, it should.",
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
    body: "Variables and conditional logic, triggers, states and layers, SCORM and xAPI packaging, and LMS deployment are means to a reliable experience, not the proposition. The interaction and learning-data prototypes on this site test that technical depth outside a client brief so a pattern can be understood before it is needed under delivery pressure.",
  },

  experience: {
    eyebrow: "Experience across the Articulate ecosystem",
    body: [
      "Six years inside the Civil Aviation Safety Authority (2015–2021) included building and maintaining a reusable Storyline production system for the regulator's design team — a style manual, authoring templates, specified components with documented states, and an icon and step-marker library used across the Flight Examiner Rating programme and wider CASA learning work.",
      "That production-system discipline carried forward: more than sixty Storyline courses were redeveloped to a shared architecture at Independent Schools Queensland while a platform migration was happening in the same engagement. Recognised as an Articulate eLearning Hero. [Confirm earliest Articulate tools used and approximate dates, for a fuller account of the ecosystem history.]",
    ],
  },

  modernisation: {
    eyebrow: "Storyline modernisation",
    headline: "Modernising existing Storyline content.",
    body: "Long-lived course libraries accumulate assumptions. Modernisation starts by working out what an older project was built to do, then updating only what needs to change: accessibility, publishing, templates, interaction patterns or LMS compatibility rather than reflexively rebuilding the whole course.",
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
    heading: "Work to inspect",
    slugs: ["flight-examiner-rating", "course-system", "connect-and-learn", "interaction-prototypes"],
  },

  cta: {
    heading: "Planning a complex Storyline project?",
    body: "I can help determine whether Storyline is warranted, shape the learning approach, prototype the interaction and build a maintainable implementation ready for deployment.",
    label: "Discuss a Storyline project",
    href: "/contact",
  },
};
