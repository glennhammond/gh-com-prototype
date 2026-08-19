import { STATUS, SOURCE } from "./status.js";

/**
 * Homepage copy, V3 sequence.
 *
 * V1 ran:
 * claim → framework → flagship → evidence → belief → capability → close.
 * V2 added a standalone "featured system" band for the ISQ eLearning Design
 * System ahead of the selected-work trio.
 *
 * V3 removes that standalone band. The hero now carries its own evidence
 * figure (Wellbeing Studio), and the ISQ Design System is folded into the
 * "Selected work" sequence as part of the Connect & Learn entry rather than
 * treated as a separate abstract system — they are the same story: a
 * platform migration, and the shared framework it produced afterwards. See
 * `src/components/SelectedWork.jsx`.
 *
 * V3 runs:
 * claim (with its own evidence) → proof strip → selected work (three
 * projects, individually art-directed) → model → specialist development →
 * how to buy → Glenn → close.
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
      "A course is one layer of four. The platform it runs on, the content around it and the production system that keeps it current are the other three — and they are where learning programs actually come apart. I design all four, and I own the joins.",
    primaryCta: {
      href: "/work/wellbeing-studio",
      label: "View the Wellbeing Studio case study",
    },
    secondaryCta: {
      href: "/work",
      label: "See all projects",
    },
    figure: {
      placeholder: {
        width: 1600,
        height: 1000,
        label: "WELLBEING STUDIO — 2027 PRODUCT VIEW",
      },
      alt: "Placeholder for the 2027 Wellbeing Studio product interface, the redeveloped member experience this hero anticipates.",
      area: "Wellbeing Studio — 2027 product",
      caption:
        "A workplace wellbeing platform built for Corporate Yoga Australia: product strategy, interface design, the Moodle architecture underneath it, and the weekly publishing workflow that keeps it running. The current interface is being redeveloped for 2027, so this position anticipates the new product rather than showing the live one.",
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

  /* 03 — selected work. Three projects, individually art-directed — see
     SelectedWork.jsx. Wellbeing Studio leads as the primary flagship, ISQ
     is second, CASA is third — hierarchy by strategic weight, not by which
     record has the richest imagery. */
  work: {
    eyebrow: "Selected work",
    headline: "Three flagship projects, three different kinds of proof.",
    standfirst:
      "A wellbeing business turned into a product, a platform migration run against a fixed deadline, and a national examiner program built inside a regulator.",
  },

  /* 04 — the model, after proof has earned it */
  framework: {
    eyebrow: "How I read a problem",
    headline: "Four layers. Most organisations buy them separately.",
    standfirst:
      "This is the diagnostic I use, not a test you have to pass. It matters because the work is rarely lost inside a layer — it is lost between them, in the handover nobody scoped.",
  },

  /* 05 — Rise and Storyline, after the model has been introduced */
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

  /* 06 — how to buy */
  buy: {
    eyebrow: "Where most work starts",
    headline: "A Learning System Review.",
    standfirst:
      "Two to three weeks, across all four layers, ending in a written plan you can take to a budget holder — whether or not I do the work that follows.",
    body:
      "Larger delivery work — building or migrating a platform with the content that lives in it, or building the production system an in-house team needs — usually starts here. It is the cheapest way to find out whether the problem is where you think it is.",
    cta: {
      href: "/services",
      label: "See all four engagements",
    },
  },

  /* 07 — Glenn */
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

  /* 08 — close */
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
      "I design all four layers of a learning program: the experience, the content, the platform and the production system that keeps it running. Fifteen years across aviation, education, government and workplace wellbeing.",
  },
};