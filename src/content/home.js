import { STATUS, SOURCE } from "./status.js";

/**
 * v3.2 adds `featuredSystem`, a dedicated homepage section for the ISQ
 * eLearning Design System, positioned between the proof strip and
 * "Selected work".
 *
 * It is deliberately not a fourth project card. The design system is the
 * clearest single piece of evidence for the four-layer proposition the site
 * presents. See DECISIONS.md §18.
 */

/**
 * Homepage copy, V2 sequence.
 *
 * V1 ran:
 * claim → framework → flagship → evidence → belief → capability → close.
 *
 * A first-time visitor met Glenn's diagnostic model before seeing enough work
 * to care about it, and met his argument before meeting him.
 *
 * V2 runs:
 * claim → proof strip → featured system → selected work → model →
 * specialist development → how to buy → Glenn → close.
 *
 * Proof arrives within the first two viewport heights. The four-layer model
 * appears once attention has been earned, and no primary action requires the
 * visitor to decode it.
 *
 * Two additional beats support that sequence:
 *
 * 1. A featured-system band for the ISQ eLearning Design System immediately
 *    ahead of the selected-work trio.
 * 2. A compact Rise and Storyline specialist-development band directly after
 *    the four-layer model.
 *
 * This makes both specialist services visible before a visitor reaches the
 * detailed Practice page without displacing the top-of-page positioning.
 *
 * All copy is PROPOSED, awaiting approval.
 */

export const home = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,

  /* 01 — the claim */
  hero: {
    eyebrow: "Learning systems · Brisbane, working Australia-wide",
    headline: "The course is the easy part.",
    standfirst:
      "A course is one layer of four. The platform it runs on, the content around it and the production system that keeps it current are the other three — and they are where learning programmes actually come apart. I design all four, and I own the joins.",
    primaryCta: {
      href: "/work",
      label: "View work",
    },
  },

  /* 02 — proof strip. Approved claims only. */
  proof: {
    items: [
      {
        value: "15+",
        label:
          "years designing learning for regulated, national and enterprise clients",
      },
      {
        value: "6",
        label: "years inside the aviation regulator, CASA",
      },
      {
        value: "2×",
        label: "Diamond Awards, Best eLearning Project, LearnX 2024",
      },
      {
        value: "640",
        label: "childcare centres served by a national platform he built",
      },
    ],
    clients:
      "Independent Schools Queensland · Civil Aviation Safety Authority · Goodstart Early Learning · Corporate Yoga Australia",
  },

  /* 03 — the three flagship projects, one-plus-two composition */
  work: {
    eyebrow: "Flagship work",
    headline: "Three projects, one owner across every layer.",
    standfirst:
      "A live wellbeing platform built end to end, a platform migration run alongside a full course rebuild, and six years of regulated aviation learning built on one production system.",
  },

  /* 04 — the model, after proof has earned it */
  framework: {
    eyebrow: "How I read a problem",
    headline: "Four layers. Most organisations buy them separately.",
    standfirst:
      "A short summary of the model I use to diagnose a learning problem. The full reasoning, and how it plays out across three projects, is on the Approach page.",
    cta: {
      href: "/approach",
      label: "Read the Approach page",
    },
  },

  /* 06 — Rise and Storyline, after the model has been introduced */
  specialistDevelopment: {
    eyebrow: "How it gets built",
    headline: "Specialist digital learning development",
    standfirst:
      "Both sit inside Content and Operations above. Neither is a bolt-on.",
    rise: {
      headline: "Rise design systems",
      body:
        "Premium, scalable Rise experiences supported by custom components, HTML, CSS and reusable production standards.",
      cta: {
        href: "/services/rise-design-systems",
        label: "Explore Rise design systems",
      },
    },
    storyline: {
      headline: "Advanced Storyline development",
      body:
        "Bespoke scenarios, simulations and interactive learning built on extensive experience across the Articulate ecosystem.",
      cta: {
        href: "/services/storyline-development",
        label: "Explore Storyline development",
      },
    },
  },

  /* 07 — how to buy */
  buy: {
    eyebrow: "Where most work starts",
    headline: "A Learning System Review.",
    standfirst:
      "Two to three weeks, across all four layers, ending in a written plan you can take to a budget holder — whether or not I do the work that follows.",
    body:
      "Larger delivery work — building or migrating a platform with the content that lives in it, or building the production system an in-house team needs — usually starts here. It is the cheapest way to find out whether the problem is where you think it is.",
    cta: {
      href: "/practice",
      label: "See all four engagements",
    },
  },

  /* 08 — Glenn */
  person: {
    eyebrow: "Who you would be working with",
    headline: "One person, accountable for the joins.",
    body: [
      "I have spent fifteen years on the parts of digital learning nobody puts in the brief. Six of them inside the aviation regulator, building learning for examiners who assess other examiners. Three months moving an entire professional learning estate off a platform it had outgrown. A year turning a wellbeing business into a product that runs without its founder in the room.",
      "I work directly with internal teams rather than around them — usually alongside subject-matter experts, an IT function I do not control, and someone who will have to run the thing after I leave. That last person is the one I design for.",
    ],
    cta: {
      href: "/about",
      label: "More about how I work",
    },
  },

  /* 09 — close */
  close: {
    headline: "Tell me what is happening.",
    body:
      "Most conversations start with someone describing a course problem that turns out to be a platform problem, or the reverse. A few sentences is enough — you do not need to have diagnosed it first.",
    cta: {
      href: "/contact",
      label: "Start a conversation",
    },
  },

  seo: {
    title: "Glenn Hammond — Learning systems design",
    description:
      "I design all four layers of a learning programme: the experience, the content, the platform and the production system that keeps it running. Fifteen years across aviation, education, government and workplace wellbeing.",
  },
};