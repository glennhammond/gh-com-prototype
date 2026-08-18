import { STATUS, SOURCE } from "./status.js";

/**
 * Approach page copy — v3.4.
 *
 * Canonical home of the "work is lost in the joins, not inside a layer"
 * argument. Home, Practice and About each point here rather than each
 * restating the argument in full (see DECISIONS.md).
 *
 * Every project-specific sentence in `evidence` below is a narrower
 * restatement of something already written and approved on that project's
 * own case study record in content/projects.js. Nothing here adds a fact, a
 * cause or an outcome the source record does not already state.
 */
export const approach = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,

  hero: {
    eyebrow: "Approach",
    headline: "The work is lost in the joins, not inside a layer.",
    standfirst:
      "A learning program is four layers: the experience, the content, the platform and the production system that keeps it current. Most organisations buy each layer separately, from a different specialist or a different vendor, and the decisions between the layers end up owned by nobody. This page sets out how I diagnose that, and where it shows up across three of the projects on Work.",
  },

  diagnosis: {
    eyebrow: "How the diagnosis runs",
    headline: "Four layers, read as one system.",
    standfirst:
      "Each layer has its own failure mode, described in full on Capabilities. What matters here is the sequence: which layer is actually broken is rarely the one the request names first.",
    steps: [
      "Start with the layer named in the brief, and ask what it depends on.",
      "Find the layer that is actually failing, which is often one step away from the one described.",
      "Trace the decision that was never handed to anyone: the join between two layers that both sides assumed the other owned.",
      "Scope the work at the join, not only inside the layer that is easiest to see.",
    ],
  },

  delivery: {
    eyebrow: "Strategy through delivery",
    headline: "From diagnosis to something that keeps running.",
    body: [
      "Most engagements start with a Learning System Review: two to three weeks across all four layers, ending in a written plan, whether or not I do the work that follows. It exists because a diagnosis is cheap and a rebuild is not.",
      "Where delivery follows, ownership does not stop at launch. Each project below carried the work through to the layer that keeps it running after the interesting part is finished.",
    ],
    cta: {
      href: "/practice",
      label: "See the four engagements",
    },
  },

  evidenceTitle: "The model, in three projects",
  evidence: [
    {
      project: "Wellbeing Studio",
      href: "/work/wellbeing-studio",
      body:
        "The platform layer (Moodle, heavily themed, on AWS) was chosen so effort could go into the harder interface problem instead of rebuilding cohort management and authentication from scratch. The operations layer that followed is a publishing and replay workflow the organisation runs itself.",
    },
    {
      project: "ISQ Connect & Learn",
      href: "/work/connect-and-learn",
      body:
        "The platform and content layers had to move together rather than in sequence: the learning architecture was settled early enough that more than sixty Storyline courses did not have to be redeveloped twice, inside a three-month engagement.",
    },
    {
      project: "CASA Flight Examiner Rating",
      href: "/work/casa/flight-examiner-rating",
      body:
        "The course's instructional and assessment design was built on the CASA program's reusable Storyline production system: the templates and specified components documented on the program's course-system page.",
    },
  ],

  close: {
    headline: "See the evidence, or start with your own problem.",
    workCta: { href: "/work", label: "See the work" },
    contactCta: { href: "/contact", label: "Start a conversation" },
  },

  seo: {
    title: "Approach | Glenn Hammond",
    description:
      "How I diagnose a learning problem across four layers, and how that diagnosis plays out across three projects: Wellbeing Studio, Connect & Learn and CASA Flight Examiner Rating.",
  },
};
