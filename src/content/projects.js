import { STATUS, SOURCE } from "./status.js";

/**
 * Project content — V3.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * WHAT CHANGED FROM V2
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * 1. CASA is a program, not a project. Six years produced several
 *    substantially different bodies of work. V2 flattened all of it into one
 *    case study called "Flight Examiner Rating", which understated both the
 *    range and the platform work. V3 gives CASA an overview page and five
 *    subprojects, each with its own evidence and its own attribution.
 *
 * 2. Five new case studies enter the portfolio: TAFE Queensland pathways,
 *    ISQ differentiated learning, Sonic HealthPlus, Safetyhub, and the
 *    interaction and learning-data prototypes. Goodstart gains real imagery
 *    and moves from a note to a full case study.
 *
 * 3. Records carry `tier`, which drives the Work index hierarchy, and `path`,
 *    which is the single source of truth for routing. program children live
 *    under /work/casa/… so the URL states the relationship.
 *
 * 4. Records carry `gaps` — the editorial placeholders that must be resolved
 *    before publication. These render in the interface as a visible panel, on
 *    purpose. This is a review prototype, and a missing fact that is invisible
 *    is a missing fact that never gets filled in.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * PLACEHOLDER CONVENTION
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Square brackets inside body copy render as a highlighted editorial
 * placeholder: "[Confirm platform scope]". Nothing else in the copy uses
 * square brackets. Search the built HTML for "ph-mark" to find every one.
 *
 * Figures may carry `placeholder: { label, note, ratio }` instead of `image`.
 * That renders a labelled empty plate describing the image that belongs
 * there, so Glenn can drop the correct asset in without re-reading the copy.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * FACTUAL DISCIPLINE
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Nothing here asserts a metric, an award, a client quotation, an audience
 * size or a technical integration that is not in a supplied source. Where the
 * recovered imagery shows something, the copy describes what the image shows
 * and says so. Where it does not, there is a placeholder.
 *
 * ⚠ RECORDED CONFLICT — Connect & Learn audience size. Master Copy (25 Jul
 *   2026) says "approximately 50,000 educators"; CV (6 Jul 2026) says "28,000
 *   users". As of v3.2, neither figure is published: the audience is
 *   described without a number until one is confirmed. See DECISIONS.md §16.
 *
 * ⚠ RECORDED CONFLICT — CLASS expansion. The V3 brief calls CLASS "CASA
 *   Learning for Safer Skies". The platform header in the recovered
 *   screenshots reads "CASA Learning Academy for Safe Skies". The screenshot
 *   wording is used because it is primary evidence.
 */

/* ══════════════════════════════════════════════════════════════════════════
   CASA — program overview
   ══════════════════════════════════════════════════════════════════════════ */

const casaProgramme = {
  path: "/work/casa",
  slug: "casa",
  format: "programme",
  tier: "programme",
  title: "CASA learning program",
  shortTitle: "CASA",
  clientId: "casa",
  clientName: "Civil Aviation Safety Authority",
  sector: "Government · aviation",
  period: "2015–2021",
  role: "eLearning Specialist",
  layers: ["experience", "content", "platform", "operations"],
  areas: ["Platforms", "Learning experience", "Content design", "Production systems"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,

  card: {
    image: "casa-programme-card",
    alt: "The CLASS platform home page, showing the CASA Learning Academy for Safe Skies wordmark, a welcome carousel and six large task tiles.",
    headline: "Six years designing learning platforms and digital learning for CASA",
    summary:
      "Two internal learning platforms, a reusable course production system and a role-based learning catalogue, built inside the aviation safety regulator over six years. The program's national Flight Examiner Rating course is presented separately, as one of three featured projects.",
    kicker: "Program · five projects",
  },

  hero: {
    role: "primary",
    eyebrow: "Civil Aviation Safety Authority · 2015–2021",
    headline: "Six years designing learning platforms and digital learning for CASA.",
    standfirst:
      "Long enough inside one regulator to design the platforms, the courses that ran on them, and the production system that let a team keep building after I stopped.",
    image: "class-home",
    alt: "The CLASS platform home page: the CASA Learning Academy for Safe Skies wordmark above a five-item navigation bar, a welcome carousel showing a hot-air balloon at dusk, and six task tiles labelled Find a Course, My Learning, New Courses, Resources, Calendar and Achievements.",
    caption:
      "CLASS, one of the two internal platforms whose front end I designed and built. It is the only platform screen in the recovered archive that carries a positive identity, which is why the AviationWorx page beside it is written without imagery rather than with a borrowed one.",
    area: "Platforms",
  },

  meta: [
    { label: "Client", value: "Civil Aviation Safety Authority" },
    { label: "Sector", value: "Government · aviation" },
    { label: "Role", value: "eLearning Specialist" },
    { label: "Period", value: "2015–2021" },
    { label: "Disciplines", value: "LMS front-end design and development · information architecture · learning design · production systems · video" },
  ],

  brief: {
    problem:
      "A safety regulator with learning obligations across two internal platforms, several distinct audiences and a design team that needed to produce at volume without producing inconsistency.",
    role: "eLearning Specialist, in-house, across six years.",
    scope:
      "LMS front-end design and development for two internal platforms, course and catalogue information architecture, instructional and assessment design, a reusable Storyline production system, and in-house video and livestream production.",
    outcome:
      "Two internal learning platforms with front ends I designed and built, a national flight examiner program, and a production system the regulator's design team used after I left.",
    stack: "Articulate Storyline · Adobe CC · AviationWorx · CLASS",
  },

  situation: [
    "CASA regulates civil aviation safety in Australia. Its learning obligations run in several directions at once: technical and regulatory training for its own inspectors and examiners, corporate and leadership development for its wider workforce, and process learning for the systems staff use every day.",
    "Those audiences do not want the same thing, do not have the same time, and in several cases were not even on the same platform. Over six years I worked across the whole of that estate rather than on any one part of it.",
  ],

  reframe: [
    "It is tempting to describe six years as a list of courses. That is the wrong unit. What actually accumulated was a set of connected systems: platforms that had to hold content, catalogues that had to make content findable, and templates that had to make content producible.",
    "The through-line is that each layer was designed so the next one did not have to be improvised. A course template exists so the catalogue is consistent. A catalogue exists so the platform is navigable. A platform front end exists so a busy inspector can find the one thing they came for.",
  ],

  roleDetail:
    "I designed and developed the LMS front ends for both internal platforms, designed course and catalogue information architecture, wrote and built learning and assessment, produced video and livestreams in house, and created the reusable Storyline production system used by the wider instructional design team.",
  collaborators: [
    "CASA subject-matter experts, including flight operations inspectors and delegated flight examiners",
    "The internal instructional design team, who authored courses against the production system",
    "[Confirm which internal team owned each platform and who else worked on the front ends]",
  ],

  /* The program map. Sequence is deliberately grouped rather than dated,
     because only the FER period and the filming date are firmly evidenced. */
  programmeMap: {
    note: "Grouped by body of work rather than by date. Only the engagement period and the March 2021 filming date are firmly evidenced; individual project dates are unconfirmed.",
    groups: [
      {
        label: "Platforms",
        detail: "LMS front-end design and development for the two internal learning platforms.",
        items: ["aviationworx", "class"],
      },
      {
        label: "Structure",
        detail: "Making a large and role-specific body of learning findable by the right people.",
        items: ["learning-catalogue"],
      },
      {
        label: "Production",
        detail: "The template, component and asset system the design team built courses from.",
        items: ["course-system"],
      },
      {
        label: "Programmes",
        detail: "The national examiner program built on top of all of it.",
        items: ["flight-examiner-rating"],
      },
    ],
  },

  /* The program page's own evidence: the production and multimedia work that
     sits under all five projects rather than inside any one of them. */
  figuresTitle: "Multimedia and production, across the program",
  figuresLede:
    "Two capabilities ran underneath everything else. Being able to author and to shoot in house changes what can be designed, because a scenario can be written for footage that is actually obtainable.",
  figures: [
    {
      role: "support",
      image: "casa-video",
      alt: "A video editing timeline showing footage of two pilots in a full-motion flight simulator, with colour scopes above and multitrack audio below.",
      caption:
        "Interviews, scenarios and livestreams were produced in house. The constraint that usually kills a scenario is that the footage does not exist; owning the camera and the edit removes it.",
      area: "Multimedia",
      expandable: true,
    },
    {
      role: "support",
      image: "casa-authoring",
      alt: "The Articulate Storyline authoring environment showing a CASA course title slide under construction, with a slide timeline, layers panel and object properties open.",
      caption:
        "The authoring environment the production system had to work inside. A template only holds if it survives contact with the tool: components had to be reusable as Storyline objects, not just as a specification.",
      area: "Production systems",
      expandable: true,
    },
  ],

  outcomes: {
    note: "Audience numbers, completion data and evaluation results are not published and are not claimed here.",
    items: [
      "Designed and developed the LMS front ends for AviationWorx and CLASS, two internal CASA learning platforms",
      "The Australian Flight Examiner Rating Course and Professional Development Program, for air transport, helicopter and general aviation examiners",
      "A reusable production system for the regulator's design team: style manual, Storyline, PowerPoint and InDesign templates, component specifications and an icon library",
      "In-house video and livestream production, including interviews, scenarios and presentations",
    ],
  },

  reflection:
    "The production system outlasted the courses. Six years on, the part of this work I would defend hardest is not any single module. It is that a team could produce consistent regulated learning without me in the room.",

  gaps: [
    "Confirm the purpose, audience and scope of AviationWorx, and how it related to CLASS.",
    "Confirm the underlying platform technology and vendor for both AviationWorx and CLASS.",
    "Confirm the number of courses and the size of the audience on each platform.",
    "Confirm the sequence of the five projects so the program map can carry dates.",
    "Confirm which recovered catalogue imagery belongs to which platform.",
  ],

  seo: {
    title: "CASA learning program — six years of platform and learning design | Glenn Hammond",
    description:
      "Two internal learning platforms, a national flight examiner program, a reusable Storyline production system and a role-based learning catalogue, designed inside Australia's aviation safety regulator.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   CASA 1 — AviationWorx
   No recovered image can be attributed to AviationWorx. Both platform
   screenshots in the archive carry the CLASS wordmark. Rather than borrow a
   CLASS screen, this page uses labelled placeholders.
   ══════════════════════════════════════════════════════════════════════════ */

const casaAviationworx = {
  path: "/work/casa/aviationworx",
  slug: "aviationworx",
  programme: "casa",
  format: "standard",
  title: "AviationWorx",
  clientId: "casa",
  clientName: "Civil Aviation Safety Authority",
  sector: "Government · aviation",
  period: "[Confirm dates]",
  role: "LMS front-end design and development",
  layers: ["experience", "platform"],
  areas: ["Platforms", "Learning experience", "Information architecture"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,

  card: {
    placeholder: {
      label: "AviationWorx platform home",
      note: "No recovered image carries the AviationWorx identity.",
    },
    headline: "Designing and developing the AviationWorx LMS front end",
    summary:
      "The first of two internal CASA learning platforms whose learner-facing front end I designed and built.",
  },

  hero: {
    role: "placeholder",
    eyebrow: "CASA program · Platform",
    headline: "Designing and developing the AviationWorx LMS front end.",
    standfirst:
      "AviationWorx was one of two internal learning platforms at CASA whose front end I designed and developed. This page is written from confirmed responsibility rather than from recovered screens.",
    placeholder: {
      label: "AviationWorx platform home page",
      note: "A screen showing the AviationWorx wordmark, primary navigation and the learner landing view.",
      ratio: "16 / 9",
    },
  },

  meta: [
    { label: "Client", value: "Civil Aviation Safety Authority" },
    { label: "program", value: "CASA, 2015–2021" },
    { label: "Role", value: "LMS front-end design and development" },
    { label: "Platform", value: "[Confirm technology and integration details]" },
    { label: "Audience", value: "[Confirm audience]" },
  ],

  brief: {
    problem:
      "An internal learning platform whose default interface did not match how CASA staff actually looked for learning.",
    role: "Front-end design and development of the learner-facing experience.",
    scope:
      "Interface design, learner navigation, content structure and platform-consistent front-end build. [Confirm platform scope]",
    outcome:
      "A learner-facing front end for AviationWorx, designed and built in house. [Add measurable outcome]",
    stack: "[Confirm technology and integration details]",
  },

  evidenceNote:
    "Attribution discipline: no image in the recovered archive carries the AviationWorx identity. The two platform screenshots that survive both show CLASS. Nothing is shown here that cannot be attributed, and the placeholders mark exactly where AviationWorx evidence belongs.",

  situation: [
    "CASA ran AviationWorx as an internal learning platform. I designed and developed its learner-facing front end. [Confirm platform scope] and [Confirm number of courses/users].",
    "The recurring problem with a platform front end inside a regulator is that the platform is chosen for administration and compliance reasons, and the learner interface is whatever the product ships with. That interface is built for a generic customer, not for an inspector who has fifteen minutes between tasks and knows exactly what they are looking for.",
  ],

  reframe: [
    "Front-end work on a learning platform is usually described as theming. It is not. Theming changes colours. What actually determines whether a platform gets used is what appears above the fold, how many decisions a learner has to make before they reach content, and whether the labels use the organisation's own words.",
    "The parts of a platform you can change are the parts worth designing carefully, because the parts you cannot change will be tolerated either way.",
  ],

  constraints: [
    "A vendor platform whose underlying structure could not be rewritten, only worked with. [Confirm technology and integration details]",
    "Government network and browser conditions, which set the floor for what the front end could rely on. [Confirm constraints]",
    "Content already in the platform, which meant the interface had to fit existing material rather than the other way round.",
  ],

  figures: [
    {
      role: "placeholder",
      placeholder: {
        label: "AviationWorx learner landing view",
        note: "The screen a learner sees on sign-in: navigation, primary tasks and any featured or required learning.",
        ratio: "16 / 9",
      },
      caption:
        "The landing view is the whole argument of a platform front end. Everything a learner cannot find here, they will ask an administrator for.",
      area: "Platforms",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "AviationWorx course or catalogue view",
        note: "How courses were listed, grouped and filtered.",
        ratio: "16 / 9",
      },
      caption:
        "Discoverability, shown rather than claimed. [Confirm how courses were grouped on AviationWorx and whether the grouping was role-based.]",
      area: "Information architecture",
    },
  ],

  outcomes: {
    note: "Course volumes, user numbers and platform metrics are unconfirmed and not claimed here.",
    items: [
      "A learner-facing front end designed and built in house for an internal CASA platform",
      "Navigation, content structure and interface conventions shaped around how CASA staff actually looked for learning, rather than the platform's generic default",
      "[Confirm whether this front end remained in production or was superseded by CLASS]",
    ],
  },

  gaps: [
    "Confirm the purpose and audience of AviationWorx.",
    "Confirm the platform technology, vendor and any integrations.",
    "Confirm the dates of the AviationWorx work and whether it preceded or ran alongside CLASS.",
    "Confirm the number of courses and users.",
    "Supply AviationWorx screenshots, or confirm that none can be published.",
    "Confirm permission to publish AviationWorx interface imagery.",
  ],

  seo: {
    title: "AviationWorx LMS front end — CASA | Glenn Hammond",
    description:
      "Front-end design and development of AviationWorx, an internal learning platform at the Civil Aviation Safety Authority.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   CASA 2 — CLASS
   ══════════════════════════════════════════════════════════════════════════ */

const casaClass = {
  path: "/work/casa/class",
  slug: "class",
  programme: "casa",
  format: "standard",
  title: "CLASS",
  clientId: "casa",
  clientName: "Civil Aviation Safety Authority",
  sector: "Government · aviation",
  period: "[Confirm dates]",
  role: "LMS front-end design and development",
  layers: ["experience", "platform"],
  areas: ["Platforms", "Learning experience", "Information architecture"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,

  card: {
    image: "casa-program-card",
    alt: "The CLASS platform home page, showing the CASA Learning Academy for Safe Skies wordmark, a welcome carousel and six large task tiles.",
    headline: "Designing the learner experience for CLASS",
    summary:
      "An internal CASA learning platform whose front end reduces the distance between signing in and starting the course you came for.",
  },

  hero: {
    role: "primary",
    eyebrow: "CASA program · Platform",
    headline: "Designing the learner experience for CLASS.",
    standfirst:
      "CLASS is an internal CASA learning platform. I designed and developed its learner-facing front end: the landing view, the navigation, and the patterns that made a large body of regulated learning navigable by the people who had to complete it.",
    image: "class-home",
    alt: "The CLASS platform home page: the CASA Learning Academy for Safe Skies wordmark above a five-item navigation bar reading Welcome, My Learning, Find a Course, Resources and What's New, a second bar reading Welcome Page, Professional Development, Regulatory and Technical Training and Training Pathways, a welcome carousel showing a hot-air balloon at dusk, and six square task tiles labelled Find a Course, My Learning, New Courses, Resources, Calendar and Achievements.",
    caption:
      "Two navigation bars doing two different jobs. The upper row is task-led: find, resume, browse resources, see what is new. The lower row is content-led and only appears once you are inside the platform. Separating intention from subject matter is what stops a mixed-audience platform collapsing into one long menu.",
    area: "Information architecture",
    expandable: true,
  },

  meta: [
    { label: "Client", value: "Civil Aviation Safety Authority" },
    { label: "program", value: "CASA, 2015–2021" },
    { label: "Role", value: "LMS front-end design and development" },
    { label: "Access", value: "Internal platform, not public-facing" },
    { label: "Platform", value: "[Confirm technology and integration details]" },
  ],

  brief: {
    problem:
      "An internal learning platform serving several CASA audiences at once, where the default interface put administration ahead of the learner.",
    role: "Front-end design and development of the learner-facing experience.",
    scope:
      "Landing view, primary navigation, task-led entry points, course-listing patterns and front-end build. [Confirm platform scope]",
    outcome:
      "A learner-facing front end for CLASS. [Add measurable outcome]",
    stack: "[Confirm technology and integration details]",
  },

  situation: [
    "CLASS, the CASA Learning Academy for Safe Skies, is an internal platform. It is not public-facing, and nothing here should be read as a consumer product: its users are CASA staff, and its content includes induction, regulatory and technical training, and professional development.",
    "A single learning platform serving induction, regulatory training and professional development has a discoverability problem before it has a design problem. The same person is a new starter, a technical specialist and a professional-development participant at different points in the same year.",
  ],

  reframe: [
    "The default answer to a mixed audience is a menu with everything on it. That works for the person who built the menu.",
    "The design decision on CLASS was to lead with tasks rather than with categories. A learner arriving at the platform has one of a small number of intentions: find something, resume something, see what is new, or find a resource. Naming those intentions as the primary controls means most visits end in one click rather than in a browse.",
  ],

  figures: [
    {
      role: "placeholder",
      placeholder: {
        label: "The My Learning panel, at a legible resolution",
        note: "A capture of this screen exists but is around 710 pixels wide and cannot be enlarged without blurring the course titles and status labels. It also sits beside a panel carrying an internal training-administration email address, which is not published.",
        ratio: "4 / 3",
      },
      caption:
        "The resume state, which is the one most learners actually need. In the low-resolution capture that survives, grade and status sit on the course row rather than behind it, and all five course actions are inline, including the course report. In a regulated setting people need the evidence of completion as often as they need the course. [Supply a higher-resolution capture of My Learning]",
      area: "Learning experience",
    },
  ],

  decisions: [
    {
      title: "Lead with tasks, not with the catalogue",
      choice:
        "Six large task tiles below the fold-line of the landing view, in place of a course listing.",
      why: "The platform's audiences share intentions even when they do not share content. Naming the intention gets a specialist and a new starter to different places from the same screen.",
    },
    {
      title: "Keep course status on the row",
      choice:
        "Grade, status and the full action set are rendered inline in My Learning rather than behind a per-course menu.",
      why: "In a regulated environment the evidence of completion matters as much as the completion. Hiding the course report costs more clicks than the visual tidiness is worth.",
    },
    {
      title: "Design the frame, accept the shell",
      choice:
        "Effort went into the landing view, navigation and course frame, not into fighting the platform's administrative screens.",
      why: "Designing for a platform you do not control means changing the parts you can actually change. Time spent on the parts you cannot is time not spent on the parts learners see.",
    },
  ],

  outcomes: {
    note: "Usage, completion and satisfaction data for CLASS is not published and is not claimed here.",
    items: [
      "A learner-facing front end for CLASS, designed and developed in house",
      "A task-led landing pattern separating intention from subject matter",
      "Course-listing patterns carrying status, grade and reporting inline",
      "[Confirm number of courses/users]",
    ],
  },

  gaps: [
    "Confirm the platform technology, vendor and any integrations behind CLASS.",
    "Confirm the dates of the CLASS front-end work.",
    "Confirm the number of courses and the size of the CLASS audience.",
    "Confirm whether the two recovered CLASS screenshots are the same release or different ones.",
    "Confirm permission to publish CLASS interface imagery, including the visible course titles.",
  ],

  seo: {
    title: "CLASS learner experience — CASA | Glenn Hammond",
    description:
      "Front-end design and development of CLASS, the CASA Learning Academy for Safe Skies: an internal learning platform for the Civil Aviation Safety Authority.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   CASA 3 — Reusable Storyline production system
   ══════════════════════════════════════════════════════════════════════════ */

const casaCourseSystem = {
  path: "/work/casa/course-system",
  slug: "course-system",
  programme: "casa",
  format: "standard",
  title: "Storyline production system",
  clientId: "casa",
  clientName: "Civil Aviation Safety Authority",
  sector: "Government · aviation",
  period: "2015–2021",
  role: "Design and production system",
  layers: ["operations", "experience"],
  areas: ["Production systems", "Design systems", "Multimedia"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,

  relatedService: {
    label: "Explore advanced Storyline development",
    href: "/services/storyline-development",
  },

  card: {
    image: "casa-icons",
    alt: "The CASA course template icon library: ten icons shown in outline and inverted treatments above numbered step markers in square and round variants, each in several states.",
    headline: "Creating a reusable Storyline production system",
    summary:
      "The style manual, templates, component specifications and asset libraries that let several designers produce work that looked like one program.",
  },

  hero: {
    role: "primary",
    mount: "plate",
    eyebrow: "CASA program · Production",
    headline: "Creating a reusable Storyline production system.",
    standfirst:
      "A regulator producing regulated learning at volume has a consistency problem before it has a quality problem. The answer was a documented production system: templates, specified components, a navigation convention and an asset library the whole design team built from.",
    image: "casa-component-spec",
    alt: "A specification sheet for a course component: a trophy icon shown with pixel dimensions and slide position, beside square and round treatments, above five state swatches labelled normal, hover, active, visited and disabled.",
    caption:
      "The part nobody sees. Dimensions, slide position and five states, specified once. A designer who has this does not have to invent a hover colour, and a reviewer does not have to notice that they did.",
    area: "Design systems",
    expandable: true,
  },

  meta: [
    { label: "Client", value: "Civil Aviation Safety Authority" },
    { label: "program", value: "CASA, 2015–2021" },
    { label: "Role", value: "Design and production system" },
    { label: "Built with", value: "Articulate Storyline · Adobe CC · PowerPoint · InDesign" },
    { label: "Users", value: "The internal instructional design team" },
  ],

  brief: {
    problem:
      "Several designers producing regulated aviation learning to different visual and interaction conventions.",
    role: "Designed and documented the production system, and maintained the asset libraries.",
    scope:
      "Style manual, Storyline, PowerPoint and InDesign templates, specified components with states, an icon and step-marker library, navigation conventions and multimedia treatments.",
    outcome:
      "A production system the regulator's design team used to build courses. [Confirm governance and handover arrangements]",
    stack: "Articulate Storyline · Adobe CC",
  },

  situation: [
    "By the time an organisation is producing enough learning to need more than one designer, it has a consistency problem. Two courses built to the same brief by two people will differ in navigation, in iconography, in how a video is presented and in what a disabled control looks like. Learners read that inconsistency as carelessness, and in a safety regulator carelessness is expensive.",
    "The usual response is a style guide nobody opens. The alternative is a production system: the conventions are in the file you start from, so following them is easier than not.",
  ],

  reframe: [
    "The unit of reuse is not the template. It is the component and its states. A template that specifies layout but not behaviour still produces four different hover treatments.",
    "So each component was specified down to dimensions, slide position and its normal, hover, active, visited and disabled states. That is unglamorous work, and it is the reason several designers could produce something that read as one program.",
  ],

  figures: [
    {
      role: "expandable",
      artefact: true,
      image: "casa-icons",
      alt: "The CASA course icon library: ten icons including discussion, balloon, idea, question, laptop, link, presenter, information, play and close, each in outline and inverted treatments, above numbered step markers 01 to 10 in square and round variants with grey, red and blue states.",
      caption:
        "One icon set, two treatments, and step markers carrying visited, current and remaining states. The numerals do the work colour cannot: a learner who does not perceive the red current-step marker still reads the number.",
      area: "Design systems",
      expandable: true,
    },
    {
      role: "support",
      image: "casa-template-menu",
      alt: "A blank course template menu screen showing a two-by-three grid of image cards captioned Title One to Title Six, with aviation photography placeholders and a dark footer bar.",
      caption:
        "The template as it ships to a designer, with placeholder titles intact. Showing it unfilled is the point: this is the starting file, and the grid, the caption plate and the footer are already decided before anyone writes a word.",
      area: "Production systems",
      prototype: true,
    },
    {
      role: "support",
      image: "casa-authoring-guidance",
      alt: "A template guidance slide reading 'Something compelling on this slide' with a list of suggestions: statistics, video, funny, reflective question, interaction, beside a map of Australia and a row of human figures.",
      caption:
        "Authoring guidance built into the template rather than filed in a manual. The slide tells the next designer what job this position does. Note that this is a guidance artefact, not a finished screen and not learner data.",
      area: "Production systems",
      prototype: true,
    },
    {
      role: "expandable",
      image: "casa-video-lightbox",
      alt: "A course video lightbox: a full-width video player with a close control at the top right and four numbered step markers beneath it.",
      caption:
        "One video treatment, specified once. Video arrives in a lightbox with a visible close control and the step markers still on screen, so watching a clip never costs a learner their place in the module.",
      area: "Multimedia",
    },
  ],

  decisions: [
    {
      title: "Specify states, not just layouts",
      choice:
        "Every reusable component was documented with dimensions, position and five interaction states.",
      why: "Layout-only templates still produce inconsistent behaviour. States are where the drift actually happens.",
    },
    {
      title: "Number every step marker",
      choice:
        "Progression markers carry a numeral as well as a colour state.",
      why: "Colour alone excludes learners who cannot distinguish the current step from the remaining ones, and it fails entirely when a course is printed or projected.",
    },
    {
      title: "Put the guidance in the file",
      choice:
        "Authoring instructions were written onto template slides rather than into a separate manual.",
      why: "A manual is a thing a designer has to remember to consult. A template slide is a thing they have to delete.",
    },
  ],

  outcomes: {
    note: "Production volumes, time savings and team size are not published and are not claimed here.",
    items: [
      "A style manual with Storyline, PowerPoint and InDesign templates",
      "Specified components with documented dimensions, positions and states",
      "An icon and step-marker library in outline and inverted treatments",
      "A single video and multimedia treatment used across courses",
      "[Confirm governance, documentation and handover arrangements]",
    ],
  },

  gaps: [
    "Confirm how many designers used the system and over what period.",
    "Confirm whether the style manual and templates were formally handed over and who maintains them now.",
    "Confirm whether the template screens shown here may be published, given they carry CASA visual identity.",
  ],

  seo: {
    title: "Reusable Storyline production system — CASA | Glenn Hammond",
    description:
      "Style manual, authoring templates, specified components and asset libraries that let a regulator's design team produce consistent digital learning at volume.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   CASA 4 — Role-based learning catalogue
   The archive filenames group these two screens together, but they are not
   obviously the same artefact. The copy says so rather than assuming.
   ══════════════════════════════════════════════════════════════════════════ */

const casaCatalogue = {
  path: "/work/casa/learning-catalogue",
  slug: "learning-catalogue",
  programme: "casa",
  format: "standard",
  title: "Role-based learning catalogue",
  clientId: "casa",
  clientName: "Civil Aviation Safety Authority",
  sector: "Government · aviation",
  period: "[Confirm dates]",
  role: "Information architecture and interface design",
  layers: ["experience", "content"],
  areas: ["Information architecture", "Learning experience"],
  status: STATUS.APPROVED,
  source: SOURCE.SUPPLIED_ASSET,

  card: {
    image: "casa-streams",
    alt: "A stream selection screen with four blue columns reading Leading and managing self, others, managers and CASA, beside the instruction Select your stream.",
    headline: "Structuring a role-based learning catalogue",
    summary:
      "Four leadership streams, defined by who a person is responsible for, used as the entry point to a large body of role-specific learning.",
  },

  hero: {
    role: "primary",
    eyebrow: "CASA program · Structure",
    headline: "Structuring a role-based learning catalogue.",
    standfirst:
      "When learning is role-specific, the hardest interface problem is the first screen. This one asks a single question a person can answer about themselves, and uses the answer to do the filtering.",
    image: "casa-streams",
    alt: "A learning catalogue stream selection screen: four tall blue columns headed Leading and managing self, Leading and managing others, Leading and managing managers, and Leading and managing CASA, each with a one-line definition and a figure icon, beside the instruction Select your stream.",
    caption:
      "One question, four answers, each defined in a single sentence so nobody has to guess which one they are. The icons escalate from one figure to four, which reinforces the ordering without relying on the reader parsing the headings.",
    area: "Information architecture",
    expandable: true,
  },

  meta: [
    { label: "Client", value: "Civil Aviation Safety Authority" },
    { label: "program", value: "CASA, 2015–2021" },
    { label: "Role", value: "Information architecture and interface design" },
    { label: "Streams", value: "Four, defined by span of responsibility" },
    { label: "Platform", value: "[Confirm which platform hosted the catalogue]" },
  ],

  brief: {
    problem:
      "A large body of learning that is only relevant to some people, presented to everyone.",
    role: "Information architecture and interface design for the catalogue entry.",
    scope:
      "Audience segmentation, stream definitions, entry-point design and catalogue navigation. [Confirm platform scope]",
    outcome:
      "A stream-based catalogue entry. [Add measurable outcome]",
    stack: "Articulate Storyline · [Confirm hosting platform]",
  },

  evidenceNote:
    "Attribution note: the two screens on this page share a filename family in the recovered archive, but they are visibly different artefacts. One is a leadership stream selector; the other is the opening of a course about the document catalogue. They are presented together because the archive groups them, and flagged because that grouping is not proven. See the handover register.",

  situation: [
    "Role-specific learning creates a filtering problem, and most catalogues solve it badly. Either everything is shown and most of it is irrelevant, or the filtering depends on data in a staff record that is out of date.",
    "The recovered evidence shows CASA using a third approach: ask the learner one question they can answer about themselves, and use the answer as the filter.",
  ],

  reframe: [
    "The four streams are not levels of seniority. They are spans of responsibility: leading yourself, leading others, leading managers, leading the organisation. That distinction matters, because it lets a technical specialist with no direct reports and a new team leader arrive at different content without either being told they are junior.",
    "It also means the taxonomy survives a restructure. Job titles change; the question of how many layers of people you are responsible for does not.",
  ],

  figures: [
    {
      role: "support",
      image: "casa-doc-catalogue",
      alt: "The opening screen of a Document Catalogue training module: a full-width photograph of filing cabinets behind the title, a Start Course button, and body copy explaining that the module covers searching, amending and creating controlled documents.",
      caption:
        "A separate artefact in the same archive group: a course about the controlled-document catalogue, opening by stating what the module covers and what it does not. The purpose statement above the fold is the useful decision here, because process learning is where learners most often start in the wrong module.",
      area: "Learning experience",
      note: "Archive attribution uncertain. Grouped with the stream selector by filename only.",
      expandable: true,
    },
  ],

  outcomes: {
    note: "Catalogue size, course counts and platform adoption are unconfirmed and not claimed here.",
    items: [
      "A single-question entry point that filters a large body of role-specific learning without relying on stale staff-record data",
      "A four-stream taxonomy built on span of responsibility rather than job title, so it survives a restructure without being redefined",
      "[Confirm how many courses sat behind each stream and how the catalogue was maintained]",
    ],
  },

  gaps: [
    "Confirm whether the stream selector and the Document Catalogue course belong to the same body of work.",
    "Confirm which platform hosted the catalogue, and whether it was AviationWorx or CLASS.",
    "Confirm whether the four streams were CASA's existing leadership framework or were defined as part of this work.",
    "Confirm the size of the catalogue and how many courses sat behind each stream.",
    "Confirm dates.",
  ],

  seo: {
    title: "Role-based learning catalogue — CASA | Glenn Hammond",
    description:
      "Audience segmentation and catalogue information architecture for role-specific learning at the Civil Aviation Safety Authority.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   CASA 5 — Flight Examiner Rating (carried forward from V2, re-parented)
   ══════════════════════════════════════════════════════════════════════════ */

const casaFer = {
  path: "/work/casa/flight-examiner-rating",
  slug: "flight-examiner-rating",
  programme: "casa",
  format: "standard",
  title: "Flight Examiner Rating",
  clientId: "casa",
  clientName: "Civil Aviation Safety Authority",
  sector: "Government · aviation",
  period: "2015–2021",
  role: "eLearning Specialist",
  layers: ["experience", "content", "operations"],
  areas: ["Learning experience", "Content design", "Multimedia"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,

  relatedService: {
    label: "Explore advanced Storyline development",
    href: "/services/storyline-development",
  },

  card: {
    image: "casa-card",
    alt: "A CASA flight training examiner speaking to camera in the Flight Examiner Rating course, her name and role captioned across the video.",
    headline: "Learning for people whose job is assessing other people",
    summary:
      "The national Flight Examiner Rating course and professional development program, for air transport, helicopter and general aviation examiners.",
  },

  hero: {
    role: "primary",
    eyebrow: "CASA program · Learning",
    headline: "Learning for people whose job is assessing other people.",
    standfirst:
      "Flight examiners sit at the top of Australian aviation: they test the people who train and test other pilots. The program had to be exact enough to be defensible and clear enough that experienced professionals would actually use it.",
    image: "casa-interview",
    alt: "A CASA flight training examiner speaking to camera, captioned with her name and role, inside the Flight Examiner Rating course.",
  },

  meta: [
    { label: "Client", value: "Civil Aviation Safety Authority" },
    { label: "program", value: "CASA, 2015–2021" },
    { label: "Role", value: "eLearning Specialist" },
    { label: "Audience", value: "Air transport, helicopter and general aviation examiners" },
    { label: "Built with", value: "Articulate Storyline · Adobe CC" },
  ],

  brief: {
    problem:
      "A regulatory framework that had to be applied consistently by the most experienced assessors in Australian aviation.",
    role: "Instructional design, assessment design and video production.",
    scope:
      "Instructional design, scenario and assessment design, video production and livestreaming, built on the program's reusable production system.",
    outcome:
      "The Australian Flight Examiner Rating Course and Professional Development Program, for air transport, helicopter and general aviation examiners.",
    stack: "Articulate Storyline · Adobe CC · CLASS",
  },

  situation: [
    "Flight examiners assess the people who train and test other pilots. The Flight Examiner Rating course and its professional development program had to help experienced professionals apply a regulatory framework consistently, across three very different sectors of aviation.",
    "The obvious approach, restating the regulation accurately, produces a document rather than a program. The other obvious approach, simplifying until it is easy, produces something no longer true, which in this domain is a safety problem rather than an editorial one.",
  ],

  reframe: [
    "The audience was the constraint that mattered. These are people who assess others for a living. Anything reading as generic compliance training loses them in the first minute, and their attention is the entire mechanism by which the program works.",
    "So the design problem was not how to explain the rules. It was how to show the reasoning behind them, in a form senior practitioners would recognise as their own.",
  ],

  figures: [
    {
      role: "expandable",
      image: "casa-regulation",
      alt: "A diagram inside the course mapping the Civil Aviation Act 1988 down through regulations, orders, Part 61 licensing, the Manual of Standards and the Flight Examiner Handbook.",
      caption:
        "The instrument hierarchy, drawn once and then referred back to. Examiners already know these documents exist. What they need is the relationship between them, so that when a question arises they know which one governs.",
      area: "Content design",
      expandable: true,
    },
    {
      role: "support",
      image: "casa-assessment",
      alt: "A course screen titled Principles of Assessment, with validity, reliability, flexibility and objectivity as expandable sections, beside a sidebar showing module progress.",
      caption:
        "The sidebar is deliberately in this frame. A program this long only works if a busy examiner can see where they are, leave, and come back without re-reading. Progress state was designed before content was written.",
      area: "Learning experience",
      expandable: true,
    },
    {
      role: "support",
      image: "casa-competency",
      alt: "A course diagram using an iceberg to show that competency comprises task skills above the surface and task management, contingency management and job-role environment skills below it.",
      caption:
        "Competency has four dimensions and only one of them is visible during a flight test. This is the single idea the program most needed to land, so it was given a picture rather than a paragraph.",
      area: "Content design",
    },
    {
      role: "pair",
      pair: [
        {
          image: "casa-mobile-plan",
          alt: "The Plan phase of the flight test process on a phone screen, with guidance on setting expectations with the applicant.",
        },
        {
          image: "casa-mobile-conduct",
          alt: "The Conduct phase of the flight test process on a phone screen, with guidance on gathering and evaluating evidence.",
        },
      ],
      caption:
        "Plan and Conduct, on a phone, in 2021. Examiners work at aerodromes and in aircraft, not at desks. Responsive delivery was in the brief rather than added as a refinement.",
      area: "Learning experience",
    },
  ],

  outcomes: {
    note: "Audience numbers, evaluation results and program outcomes are not published, and are not claimed here.",
    items: [
      "The Australian Flight Examiner Rating Course and Professional Development Program, for air transport, helicopter and general aviation examiners",
      "Scenario and assessment design grounded in the regulatory instrument hierarchy",
      "Responsive delivery, tested on phones, in 2021",
    ],
  },

  gaps: [
    "Confirm the number of examiners the program served.",
    "Confirm whether evaluation data exists and may be published.",
    "Confirm permission to publish the piece-to-camera footage, which shows an identifiable person.",
  ],

  seo: {
    title: "Flight Examiner Rating — CASA | Glenn Hammond",
    description:
      "Regulated aviation learning and assessment for flight examiners at the Civil Aviation Safety Authority.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Wellbeing Studio — flagship, carried forward from V2
   ══════════════════════════════════════════════════════════════════════════ */

const wellbeingStudio = {
  path: "/work/wellbeing-studio",
  slug: "wellbeing-studio",
  format: "flagship",
  tier: "featured",
  title: "Wellbeing Studio",
  clientId: "cya",
  clientName: "Corporate Yoga Australia",
  sector: "Workplace wellbeing",
  period: "2026",
  role: "End-to-end: product strategy, experience, platform, operations",
  layers: ["experience", "content", "platform", "operations"],
  areas: ["Learning experience", "Content design", "Platforms", "Production systems"],
  status: STATUS.PROPOSED,
  source: SOURCE.PROJECT_RECORD,

  card: {
    image: "ws-card",
    alt: "Wellbeing Studio member home page: a seasonal program hero over a photograph, with the platform's four-item navigation above it.",
    headline: "A business that ran on facilitator hours now runs on a platform",
    summary:
      "Concept to live product in a year: the member experience, the program content, the Moodle architecture underneath it, and the weekly publishing workflow that keeps it going.",
  },

  brief: {
    problem:
      "A wellbeing business whose revenue was capped by the number of facilitator hours it could sell.",
    role: "Sole practitioner, concept through to live operation.",
    scope:
      "Product strategy, experience and interface design, Moodle architecture on AWS, custom registration and cohort workflows, video delivery, communications automation, and the weekly publishing routine.",
    outcome:
      "A live subscription platform with client-specific onboarding, running weekly programming and an on-demand library the organisation publishes to itself.",
    stack: "Moodle · AWS · Vimeo · Microsoft Teams · Brevo",
  },

  hero: {
    role: "primary",
    eyebrow: "Corporate Yoga Australia · Wellbeing Studio",
    headline: "A business that ran on facilitator hours now runs on a platform.",
    standfirst:
      "Concept to live product: the member experience, the program content, the Moodle architecture underneath it, and the publishing and onboarding workflows that keep it going every week.",
    image: "ws-landing",
    alt: "Wellbeing Studio member home page, showing a seasonal program hero and a monthly focus article card.",
  },

  meta: [
    { label: "Client", value: "Corporate Yoga Australia" },
    { label: "Sector", value: "Workplace wellbeing" },
    { label: "Platform", value: "Moodle, AWS, Vimeo, Teams, Brevo" },
    { label: "Role", value: "Product strategy through to operations" },
    { label: "Status", value: "Live" },
  ],

  situation: [
    "Corporate Yoga Australia had built a successful business delivering workplace wellbeing programs, yoga sessions and facilitated experiences to organisations. Clients valued the work. The problem was that all of it depended on a facilitator being in a room at a particular time.",
    "Resources were spread across several systems. Between sessions, participants had nothing. Every new client meant more facilitator hours, which meant growth was capped by the number of hours available to sell.",
  ],

  reframe: [
    "The brief could have been read as “put the sessions online”. That would have produced a video library, and video libraries are watched once.",
    "The actual problem was structural: the business had no product. It had a service with a delivery ceiling. What it needed was something participants would return to between sessions, and something a corporate client could buy as a subscription rather than as a booking.",
  ],

  constraints: [
    "No in-house technical team. Whatever was built had to be operable by people whose expertise is wellbeing, not software.",
    "A live weekly program already running, which could not pause while a platform was built.",
    "Participants spread across office, remote and hybrid working, on organisation-managed devices with varying restrictions.",
    "A single practitioner across every discipline, which meant sequencing mattered more than it would with a team.",
  ],

  roleDetail:
    "I led the platform from initial concept through to live operation, working across product strategy, learning experience design, UX and interface design, Moodle architecture, front-end development, brand and visual systems, communications and automation design, and the operational workflows behind delivery.",
  collaborators: [
    "Corporate Yoga Australia leadership: business model, program direction and client relationships",
    "Session facilitators: program content and live delivery",
    "Pilot participants: testing and feedback",
  ],

  figures: [
    {
      role: "support",
      image: "ws-library",
      alt: "Wellbeing Studio practice library: video practice cards grouped under Mindfulness and Breathwork headings, each with a title, duration and category.",
      caption:
        "Practices are catalogued by intent and duration, not by discipline. Someone with two spare minutes can find something for two minutes, which is the difference between a library that gets used and one that gets bookmarked.",
      area: "Learning experience",
    },
    {
      role: "detail",
      image: "ws-session",
      alt: "Wellbeing Studio live session panel showing an upcoming lunch-and-learn workshop with presenter, date, description and a join action.",
      caption:
        "Live sessions and recorded ones share one structure. Treating the replay as a lesser artefact is how a platform ends up serving only the twenty people who can make a midday session.",
      area: "Content design",
    },
    {
      role: "support",
      image: "ws-program",
      alt: "Wellbeing Studio monthly program panel with a seasonal article, supporting practices and links to the next live sessions.",
      caption:
        "Seasonal framing gives a returning member a reason to come back that is not a notification. It also gives the organisation a publishing rhythm it can sustain.",
      area: "Production systems",
    },
  ],

  decisionLog: [
    {
      title: "Build on Moodle rather than a purpose-built platform",
      choice:
        "Moodle, heavily themed, on AWS, rather than a bespoke application or an off-the-shelf membership product.",
      why: "Cohort management, authentication, role structures, enrolment and reporting already existed and were proven at scale. Building those from scratch would have consumed the entire budget before a single wellbeing session was delivered.",
      tradeoff:
        "It bought a harder user-experience problem. Considerable effort went into making Moodle not feel like Moodle. That was the right trade: the UX work was solvable, rebuilding authentication and cohorts was not.",
    },
    {
      title: "Treat replay as a core feature, not catch-up",
      choice:
        "Recorded sessions were given the same structural weight as live ones, with a properly designed library rather than a folder of recordings.",
      why: "Live-only participation quietly excludes shift workers, people in other time zones, parents, and anyone whose calendar is not their own.",
      tradeoff:
        "It promoted recording, presenter access and publishing from an afterthought to a first-class operational problem, and those workflows became one of the harder parts of the build.",
    },
    {
      title: "Narrow the name from Corporate Wellbeing Studio to Wellbeing Studio",
      choice: "The product was repositioned and renamed part-way through development.",
      why: "The shorter identity read as a product rather than a corporate program. Participants engage with something that feels like theirs; they tolerate something that feels like their employer's.",
      tradeoff:
        "It dropped the word that named the buyer, so the corporate proposition had to be carried by client-facing onboarding and reporting instead.",
    },
  ],

  outcomes: {
    note: "These describe what the platform does. Participation, retention and engagement figures are not yet available and are deliberately absent.",
    items: [
      "A live wellbeing platform running weekly programming, live sessions and an on-demand library in one member experience",
      "Client-specific onboarding, so a new corporate cohort can be brought on without bespoke setup each time",
      "Automated onboarding and engagement communications, segmented by organisation",
      "A repeatable publishing and replay workflow the organisation runs itself",
      "A first enterprise pilot delivered, moving the platform from prototype to operating product",
    ],
  },

  reflection:
    "Engagement measurement should have been designed at the same time as the experience rather than after it. The platform can tell you what was published; it is weaker at telling you what changed for the people using it.",

  testimonialId: "cya-lewis",

  gaps: [
    "Confirm whether the first enterprise pilot client may be named.",
    "Confirm the framing of each rejected alternative in the decision log.",
  ],

  seo: {
    title: "Wellbeing Studio — Corporate Yoga Australia | Glenn Hammond",
    description:
      "Concept to live product: the member experience, program content, Moodle architecture and the publishing and onboarding workflows behind a workplace wellbeing platform.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Connect & Learn — carried forward from V2
   ══════════════════════════════════════════════════════════════════════════ */

const connectAndLearn = {
  path: "/work/connect-and-learn",
  slug: "connect-and-learn",
  format: "standard",
  tier: "featured",
  title: "Connect & Learn",
  clientId: "isq",
  clientName: "Independent Schools Queensland",
  sector: "Education",
  period: "2024",
  role: "eLearning Specialist, three-month engagement",
  layers: ["content", "platform", "operations"],
  areas: ["Platforms", "Content design", "Production systems"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,
  relatedSlugs: ["isq-elearning-design-system"],

  card: {
    panel: {
      kicker: "Cornerstone → ISQ-hosted Moodle",
      figures: [
        { value: "3", unit: "months", label: "Engagement" },
        { value: "60+", unit: "courses", label: "Rebuilt in parallel" },
      ],
    },
    headline: "A platform migration and a course rebuild, at the same time",
    summary:
      "Moving an entire professional learning estate off Cornerstone while more than sixty Storyline courses were redeveloped around it, inside a single term.",
  },

  brief: {
    problem:
      "A professional learning platform the organisation could not host or control, carrying courses that had outgrown it.",
    role: "eLearning Specialist on a three-month engagement.",
    scope:
      "Platform migration, learning architecture and the redevelopment of more than sixty Storyline courses, run as one piece of work rather than three.",
    outcome:
      "An ISQ-hosted Moodle environment with a rebuilt course library and materially less administrative overhead. Two Diamond Awards, LearnX 2024.",
    stack: "Moodle · Articulate Storyline",
  },

  hero: {
    /* No figure: this hero is type only, and no attributable image exists. */
    eyebrow: "Independent Schools Queensland · Connect & Learn",
    headline: "One term. A platform migration and a course rebuild at once.",
    standfirst:
      "Moving professional learning off Cornerstone to an environment Independent Schools Queensland could host and control, while more than sixty Storyline courses were redeveloped around it.",
  },

  meta: [
    { label: "Client", value: "Independent Schools Queensland" },
    { label: "Sector", value: "Education" },
    { label: "Role", value: "eLearning Specialist" },
    { label: "Period", value: "Three months, 2024" },
    { label: "Recognition", value: "2 × LearnX 2024 Diamond Award" },
  ],

  situation: [
    "Independent Schools Queensland needed to move off Cornerstone to a learning environment it could host and control directly. The platform serves teachers, principals, board members and volunteers across member schools, and the existing system had accumulated administrative processes that consumed staff time without improving anything for the people learning.",
  ],

  reframe: [
    "The interesting constraint was not the migration. It was that more than sixty Storyline courses had to be redeveloped while the new environment was being shaped, inside a three-month engagement, without a gap in service for schools already using the platform.",
    "Platform decisions and content decisions could not be sequenced one after the other. The learning architecture had to be settled early enough that course redevelopment did not have to be redone, and late enough that it reflected what the courses actually needed.",
    "The subsequent ISQ eLearning Design System formalised shared learning patterns, components and production standards for the next stage of the platform ecosystem this migration established.",
  ],

  outcomes: {
    note: "Participation, completion and administrative-time figures have not been released and are not claimed here.",
    items: [
      "An ISQ-hosted Moodle environment replacing a platform the organisation did not control",
      "More than sixty Storyline courses redeveloped to a single architecture",
      "Materially less administrative overhead than the system it replaced",
      "Two Diamond Awards in the Best eLearning Project category, LearnX 2024",
    ],
  },

  evidenceNote:
    "No learner-facing imagery from this platform has been approved for publication, so none is shown. The figures above come from the project record rather than from a reconstructed screen.",

  gaps: [
    "Resolve the audience-size conflict: the Master Copy says approximately 50,000 educators, the CV says 28,000 users. As of v3.2 neither figure is published; the site describes the audience without a number.",
    "Confirm whether any Connect & Learn interface imagery may be published.",
  ],

  seo: {
    title: "Connect & Learn — Independent Schools Queensland | Glenn Hammond",
    description:
      "A platform migration from Cornerstone to ISQ-hosted Moodle with more than sixty courses redeveloped in parallel, inside a three-month engagement.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   ISQ eLearning Design System — v3.2

   Written from the v3.2 integration brief. The live reference site
   (isq-elearning-design-system.vercel.app) and its source repository were
   both unreachable when this record was written — see DECISIONS.md §18 and
   SOURCE.ISQ_DS_BRIEF. Component counts, maturity-state labels, the exact
   implementation stack and the current version are therefore described
   qualitatively rather than asserted as confirmed numbers. `gaps` below
   lists everything that needs verification against the live system before
   these are treated as final.
   ══════════════════════════════════════════════════════════════════════════ */

const isqDesignSystem = {
  path: "/work/isq-elearning-design-system",
  slug: "isq-elearning-design-system",
  format: "standard",
  tier: "featured",
  title: "ISQ eLearning Design System",
  clientId: "isq",
  clientName: "Independent Schools Queensland",
  sector: "Education · professional learning",
  period: "2021 —",
  role: "Design-system lead, learning designer and developer",
  layers: ["experience", "content", "platform", "operations"],
  areas: ["Design systems", "Platforms", "Learning experience", "Production systems"],
  status: STATUS.PROPOSED,
  source: SOURCE.ISQ_DS_BRIEF,
  relatedSlugs: ["connect-and-learn"],

  externalRef: {
    label: "Explore the live system",
    href: "https://isq-elearning-design-system.vercel.app/",
  },

  relatedService: {
    label: "Explore Rise design systems",
    href: "/services/rise-design-systems",
  },


  card: {
    kicker: "Design system · Independent Schools Queensland",
    /* No approved screenshot exists yet. The system's own architecture is
       shown instead of a hatched gap plate, the same device the homepage
       FeaturedSystem section already uses for the same reason (v3.3). */
    map: ["Foundations", "Learning patterns", "Components", "Platform implementation", "Governance"],
    headline: "Turning course-level solutions into a shared organisational system",
    summary:
      "A live framework connecting learning patterns, visual foundations, reusable components, Rise implementation, accessibility and governance across ISQ's digital learning.",
  },

  hero: {
    role: "placeholder",
    eyebrow: "Independent Schools Queensland · Design system",
    headline: "One design language, defined once and consumed across digital learning.",
    standfirst:
      "A shared framework connecting learning design, visual foundations, reusable patterns, interface components, accessibility and governance across Articulate Rise, Connect & Learn and future ISQ digital learning products.",
    placeholder: {
      label: "ISQ eLearning Design System homepage and proposition",
      note: "The reference site's opening screen, showing how the system states its own purpose.",
      ratio: "16 / 9",
    },
    area: "Design systems",
  },

  meta: [
    { label: "Client", value: "Independent Schools Queensland" },
    { label: "Sector", value: "Education · professional learning" },
    { label: "Role", value: "Design-system lead, learning designer and developer" },
    { label: "Platforms", value: "Articulate Rise · Moodle · HTML · CSS · JavaScript" },
    { label: "Status", value: "Operational system, in active development" },
  ],

  brief: {
    problem:
      "Digital learning decisions and solutions were distributed across platforms, courses, documents and production code.",
    role:
      "Led the system from emerging course-level patterns through component development, documentation, audit, governance and live implementation.",
    scope:
      "Learning patterns, visual foundations, components, Rise implementation, accessibility, imagery, documentation, governance and the live reference site.",
    outcome:
      "A working operational reference connecting design intent with reusable implementation across ISQ digital learning.",
    stack: "HTML · CSS · JavaScript · Articulate Rise · Moodle",
  },

  situation: [
    "Independent Schools Queensland produces a substantial amount of digital learning: compliance courses and professional-learning programs for teachers, principals, board members and volunteers across member schools. Much of it shares the same underlying requirements — section orientation, legislation and policy explanation, scenario progression, evidence presentation, decision points, role comparison, process explanation, reflection, knowledge checks and resource presentation — but each course had, until now, solved them again from scratch.",
    "That pattern followed directly from the earlier work moving Connect & Learn onto ISQ-hosted Moodle: a platform migration and a parallel rebuild of more than sixty Storyline courses inside a single term. The migration solved where courses lived. It did not solve how they were designed, and the courses built afterwards faced the same recurring decisions the old ones had.",
  ],

  reframe: [
    "The problem was not inconsistent styling. It was repeated design decisions with no shared record of the decision already made: unclear component status, duplicated implementation, inconsistent learner experiences, documentation that drifted from what courses actually shipped, accessibility risk carried course by course, and no reliable way to hand a proven solution from one course to the next. None of that is fixed by a style guide, because a style guide describes appearance and this problem was about behaviour, structure and reuse.",
    "Instead of designing one more polished course, the opportunity was to build the system that could support every future course: a shared framework connecting learning design, visual design, interaction design, platform implementation, production standards, accessibility and governance, so a recurring problem only had to be solved once.",
  ],

  roleDetail:
    "Glenn led the design-system strategy, system architecture, learning-pattern definition, component specification, UX and information architecture, visual design, front-end development, Rise implementation, accessibility guidance, imagery standards, documentation, the system audit, and the governance and lifecycle model, as well as building the live reference site.",

  architecture: {
    headline: "One system, several consumers.",
    intro:
      "Foundations set the values everything else inherits. Learning patterns turn those values into repeatable structures for a course. Components are the built implementation of a pattern. Platform implementation carries a component into a real authoring environment. Governance keeps the stack from drifting once more than one course depends on it.",
    layers: [
      {
        label: "Foundations",
        detail: "Design tokens and visual foundations: colour, type, spacing and the values every pattern and component inherits.",
      },
      {
        label: "Learning patterns",
        detail: "Documented, repeatable structures for recurring learning needs — orientation, scenario progression, decision points, legislation explanation and more.",
      },
      {
        label: "Components",
        detail: "The built implementation of a pattern: specified, named and given a maturity status.",
      },
      {
        label: "Platform implementation",
        detail: "How a component is delivered in a real authoring environment, from a native block to custom code to a post-publish enhancement.",
      },
      {
        label: "Governance",
        detail: "The maturity model, contribution process and versioning that keep the system coherent as it grows.",
      },
    ],
    consumers: ["Articulate Rise", "Moodle (Connect & Learn)"],
    consumersNote:
      "Extending platform implementation further is named as ongoing work, not a finished claim — see “Where it got to” and “What's next” below.",
  },

  components: [
    {
      name: "Section opener",
      detail:
        "Orients a learner at the start of a new section: what it covers, why it matters and how long it takes. A native platform heading block could not carry the “why it matters” framing without breaking the platform's own styling, which is why this is a reusable custom-code component rather than a default block. It carries a heading landmark and a defined reading order, so a screen-reader user meets the section the same way a sighted learner does.",
    },
    {
      name: "Scenario stage",
      detail:
        "Carries a narrative scenario through several linked stages, so a course can put a decision in context rather than stating it in the abstract. Built as a reusable component because scenario-based courses recur constantly and had previously been rebuilt per course, each with slightly different navigation and a slightly different accessibility story. Keyboard and focus behaviour is specified once, in the component, rather than re-tested on every course.",
    },
    {
      name: "Decision point",
      detail:
        "Presents a choice and its consequence, used wherever a course needs a learner to apply judgement rather than recall a fact. This is the component followed through specification, implementation and use below, because it is the clearest example of a pattern that started as a recurring course requirement and ended as a documented, governed part of the system.",
    },
    {
      name: "Legislation panel",
      detail:
        "Presents a piece of legislation or policy alongside a plain-language explanation, used across the compliance courses the system grew out of. A post-publish CSS enhancement was considered and set aside here, because the panel needed a defined reading order and a collapse state that a CSS-only treatment could not guarantee across authoring updates; it is built as a governed reusable component instead.",
    },
    {
      name: "Resource panel",
      detail:
        "Surfaces supporting resources — documents, links, further reading — without breaking a course's linear flow. Implemented as the lightest tier available, a native platform block with a post-publish CSS enhancement, because the learning purpose needed a clearer visual treatment rather than custom interaction logic. The system's rule is to use the least complex implementation that fully supports the learning purpose, and this component is the clearest example of that rule being applied rather than overridden.",
    },
  ],

  figuresTitle: "The system, from catalogue to course",
  figuresLede:
    "Screenshots from the live reference site are being captured and cleared for use here. Until then, each placeholder marks exactly what belongs in it and why it was chosen, following one component, Decision point, from specification through implementation to use inside a course.",
  figures: [
    {
      role: "placeholder",
      placeholder: {
        label: "Component catalogue",
        note: "The full catalogue view, showing how components are organised and how their status is indicated at a glance.",
        ratio: "16 / 9",
      },
      caption:
        "The catalogue is the entry point for a designer choosing between a proven pattern and one still being tested. Status is shown at the point of choice, not filed in a separate document a designer has to remember to check.",
      area: "Design systems",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "Decision point — documentation",
        note: "The component's specification page: purpose, states, accessibility behaviour and usage guidance.",
        ratio: "4 / 3",
      },
      caption:
        "The specification for Decision point: what it is for, when to use it, and what a learner using assistive technology should experience. This is the claim the audit checked the built courses against.",
      area: "Documentation",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "Decision point — implementation",
        note: "The component's HTML, CSS and JavaScript as it ships, ready to drop into a course.",
        ratio: "4 / 3",
      },
      caption:
        "The same component as code. Keeping documentation and implementation visibly paired is what let the audit find the places where they had quietly diverged.",
      area: "Implementation",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "Scenario stage — learning-pattern guidance",
        note: "The pattern-level guidance for Scenario stage: when to reach for it and what learning need it answers.",
        ratio: "16 / 9",
      },
      caption:
        "A pattern sits above a component: it documents the learning need first, so a designer chooses Scenario stage because a narrative decision genuinely helps, not because it is the component they remember from the last course.",
      area: "Learning patterns",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "Rise implementation guidance",
        note: "Guidance for building the pattern inside Articulate Rise, including where a native block is enough and where it is not.",
        ratio: "16 / 9",
      },
      caption:
        "Implementation guidance for the platform most ISQ courses ship on. It states the same implementation hierarchy the components above follow: native first, custom only where the learning purpose needs it.",
      area: "Platform implementation",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "Governance and component lifecycle",
        note: "The maturity model and contribution process, showing how a component moves from proposal to a governed, reusable part of the system.",
        ratio: "16 / 9",
      },
      caption:
        "Every component carries a lifecycle state, so a designer can tell a proven pattern from an early one at a glance. The exact set of state labels is confirmed against the live system rather than restated here as fixed.",
      area: "Governance",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "Decision point in a live course",
        note: "The component as a learner encounters it, inside a published ISQ course. Requires clearance before publication.",
        ratio: "16 / 9",
      },
      caption:
        "The same component, in use. Specification, implementation and this screen are the same claim checked three times: what the system says a learner should experience, what the code does, and what actually ships.",
      area: "Learning experience",
    },
  ],

  decisionLog: [
    {
      title: "Build a design system, not a course style guide",
      choice:
        "The work was scoped as a system connecting learning design, visual foundations, components, implementation guidance and governance, rather than a visual style guide for Rise courses.",
      why: "A style guide fixes what things look like. The recurring problem was about what things are and how they behave: which pattern to reach for, how a component is implemented, and who decides when it changes. Only a system with governance behind it can answer those.",
      tradeoff:
        "It took longer to reach something publishable, and it is harder to explain in one sentence than “a set of templates.” A style guide would have shipped sooner and looked finished faster.",
    },
    {
      title: "Separate native, custom and post-publish implementation",
      choice:
        "Every pattern is assigned the least complex implementation tier that fully supports its learning purpose: a native platform block first, a reusable custom-code component only where the platform default cannot do the job, and a post-publish CSS enhancement or externally hosted asset where that is enough.",
      why: "Customising every block is how design systems become unmaintainable, because each customisation is one more thing that can break on a platform update. Restricting complexity to where the learning purpose actually needs it keeps the system sustainable as ISQ's platforms change.",
      tradeoff:
        "Some components look plainer than a fully custom build would allow, and the tiering decision itself takes judgement on every new pattern, rather than defaulting to “build it custom” as the safe answer.",
    },
    {
      title: "Treat production code as evidence",
      choice:
        "The system was audited by comparing its strategic documents, implementation guides and component documentation against the actual production CSS, HTML and live course implementations, rather than assuming the written specification was correct.",
      why: "Documentation drifts the moment nobody is watching. Courses ship, deadlines move, and a component gets adjusted locally without the documentation catching up. Treating the built courses as the primary evidence, and the documentation as a claim to be checked against them, is how that drift actually gets found.",
      tradeoff:
        "The audit surfaced undocumented components, inconsistent naming and duplicated treatments that then had to be reconciled, which is slower and less comfortable than trusting the documentation and moving on.",
    },
  ],

  governance: [
    "Each component carries a documented maturity status, from an early proposal through validation in production to becoming a governed, reusable part of the system, with a defined path to retirement when a pattern is superseded rather than silently abandoned. The exact set of status labels is confirmed against the live system rather than restated here as a fixed list.",
    "The system was audited against its own strategic documents, implementation guides, component documentation, production CSS and HTML, and live course implementations, rather than assuming the written specification was the complete system. That audit surfaced undocumented components, inconsistent naming, locally redefined values, duplicated treatments and components that had diverged from their documented pattern.",
    "Versioning and a contribution route are what keep the system from drifting again now that more than one course depends on it. This is treated as an ongoing operational discipline, not a one-off clean-up.",
  ],

  outcomes: {
    note: "Adoption figures, development-time savings and accessibility certification are not published and are not claimed here.",
    items: [
      "Distributed design decisions consolidated into one coherent reference",
      "Documented, reusable learning patterns derived from real course production",
      "Shared visual and interaction foundations across Rise and Moodle-based delivery",
      "A catalogue of reusable, specified components",
      "Rise implementation guidance for the patterns and components in the system",
      "Accessibility requirements attached to component documentation",
      "Imagery and media standards for digital learning production",
      "Drift between documentation and production surfaced and reconciled through audit",
      "Component status and lifecycle governance, so the system can evolve without becoming an uncontrolled collection of one-off builds",
      "A maintainable live operational reference connecting design intent to implementation",
      "Foundations built as governed values, so a future rebrand can be carried through the system rather than redone course by course",
    ],
  },

  reflection:
    "The next stage is adoption rather than invention: testing the system through further production work, resolving components still in an early or experimental status, extending platform implementation, and finding out whether the system actually improves consistency, accessibility and delivery efficiency rather than assuming it does.",

  evidenceNote:
    "Component counts and maturity-state labels change as the system evolves, so they are described qualitatively here rather than fixed to a number. The live reference site is the current source of truth.",

  gaps: [
    "Confirm exact component count, the maturity-state label set, and the current system version against the live site.",
    "Confirm the implementation stack and hosting of the isq-elearning-design-system.vercel.app reference site itself, as distinct from what the design system produces guidance for.",
    "Confirm whether Storyline course production is a current consumer of this system, or remains separate from it.",
    "Capture and clear the seven screenshots specified in this case study for publication: component catalogue, Decision point documentation, Decision point implementation, Scenario stage pattern guidance, Rise implementation guidance, governance/lifecycle model, and Decision point inside a live course.",
    "Confirm names and roles of any collaborators or stakeholders, if any should be credited.",
    "Confirm the project's start date and current period.",
    "Confirm permission to publish any live-course screenshot showing a component in use.",
  ],

  seo: {
    title: "ISQ eLearning Design System — Independent Schools Queensland | Glenn Hammond",
    description:
      "An operational design system connecting learning patterns, visual foundations, reusable components, Rise implementation, accessibility and governance across ISQ's digital learning.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   TAFE Queensland pathways
   ══════════════════════════════════════════════════════════════════════════ */

const tafePathways = {
  path: "/work/tafe-pathways",
  slug: "tafe-pathways",
  format: "standard",
  tier: "featured",
  title: "Vocational pathways",
  clientId: "tafe-qld",
  clientName: "TAFE Queensland",
  sector: "Vocational education",
  period: "2017",
  role: "Learning experience design and development",
  layers: ["experience", "content"],
  areas: ["Learning experience", "Information architecture", "Content design"],
  status: STATUS.APPROVED,
  source: SOURCE.SUPPLIED_ASSET,

  card: {
    image: "tafe-card",
    alt: "A TAFE Queensland industry data screen: six data categories listed over a construction site photograph, with a figure of 185,000 people employed in industry.",
    headline: "Helping learners explore vocational pathways",
    summary:
      "A self-directed exploration tool where prospective students compare industries, browse job profiles on a navigable map, and see the labour-market data behind each pathway.",
  },

  hero: {
    role: "primary",
    eyebrow: "TAFE Queensland · Vocational education",
    headline: "Helping learners explore vocational pathways.",
    standfirst:
      "A self-directed tool for people deciding what to train in. Five modes of exploration in one persistent navigation, so the same question can be answered by data, by job, or by looking at where the work actually happens.",
    image: "tafe-industry-data",
    alt: "A TAFE Queensland industry data screen over a construction site photograph, listing average salary, number employed, workforce percentage, predicted new jobs, average age and participation by gender, with 185,000 people employed shown alongside. A persistent bottom navigation reads Home, Industry Data, Job Profiles, Slideshow and Summary.",
    caption:
      "Six comparable measures, the same six for every industry. Fixing the categories is what makes the tool a comparison rather than six unrelated fact sheets, and it is why the headline figure can sit in the same position every time.",
    area: "Content design",
    expandable: true,
  },

  meta: [
    { label: "Client", value: "TAFE Queensland" },
    { label: "Sector", value: "Vocational education" },
    { label: "Role", value: "Learning experience design and development" },
    { label: "Period", value: "2017" },
    { label: "Audience", value: "[Confirm audience: prospective students, careers advisers or existing learners]" },
  ],

  brief: {
    problem:
      "Choosing a vocational pathway means comparing industries a person has never worked in, using information that is normally published as statistics.",
    role: "Learning experience design and front-end development. [Confirm role boundaries and who else worked on this]",
    scope:
      "Information architecture, navigation model, industry-data presentation, job-profile mapping and interface design.",
    outcome:
      "A self-directed pathways tool covering multiple industries. [Add measurable outcome]",
    stack: "[Confirm authoring tool and delivery platform]",
  },

  situation: [
    "Someone deciding what to train in is being asked to compare things they have no direct experience of. Course catalogues answer the wrong question: they describe what a qualification contains, not what the work is like or whether anyone is hiring.",
    "The evidence that survives shows a tool built around a different premise. Five persistent modes run along the foot of every screen: Home, Industry Data, Job Profiles, Slideshow and Summary. A visitor can enter at any of them and switch without losing their place.",
  ],

  reframe: [
    "The insight in the navigation is that people arrive with different questions. Some want to know what the job pays. Some want to know what the workplace looks like. Some want to see the whole industry laid out before they commit to any of it.",
    "Rather than sequencing those as steps in a funnel, the tool makes them parallel. That is a small structural decision with a large consequence: nobody has to answer a question they are not ready for in order to reach the one they are.",
  ],

  figures: [
    {
      role: "pair",
      pair: [
        {
          image: "tafe-map-admin",
          alt: "An isometric three-dimensional city map with pink pins marking workplaces, a category icon rail across the top, and the label administration.",
        },
        {
          image: "tafe-map-trades",
          alt: "The same isometric city map filtered to other trades, with pins in different locations and the category rail moved to the foot of the screen.",
        },
      ],
      caption:
        "The job-profile map, filtered by category. Placing jobs in a built environment rather than in a list answers a question a list cannot: where does this work physically happen. Switching the filter moves the pins rather than reloading the view, so the comparison stays visible.",
      area: "Learning experience",
      expandable: true,
    },
    {
      role: "support",
      image: "tafe-slideshow",
      alt: "A full-bleed photograph of a rail tunnel under construction with previous and next controls, and the persistent five-item bottom navigation.",
      caption:
        "The Slideshow mode carries the thing statistics cannot: scale, environment and conditions. It is also the clearest evidence of the navigation decision, because the bottom bar stays put even when the content goes full bleed.",
      area: "Learning experience",
    },
    {
      role: "expandable",
      image: "tafe-wireframe",
      alt: "A wireframe flow diagram of the pathways tool: an entry screen at the left connecting through a central hub to grouped screen clusters for each mode, with connections drawn between them.",
      caption:
        "The structure before the surface. The hub sits in the middle rather than at the start, which is the wireframe equivalent of the decision the finished navigation makes: every mode is one step from every other mode.",
      area: "Information architecture",
      expandable: true,
      note: "Low-resolution original. Expand to read the screen labels.",
    },
  ],

  decisions: [
    {
      title: "Make the modes parallel, not sequential",
      choice: "Five persistent modes in a fixed bottom navigation rather than a guided path.",
      why: "People choosing a career arrive with different questions. A funnel makes everyone answer the first question before reaching theirs.",
    },
    {
      title: "Fix the data categories across every industry",
      choice: "The same six measures, in the same positions, for each industry.",
      why: "Comparison only works if the thing being compared is stable. Variable categories turn a comparison tool into a collection of fact sheets.",
    },
    {
      title: "Place jobs in an environment rather than a list",
      choice: "An isometric map with category filtering, instead of a filterable job index.",
      why: "The question underneath 'what job should I do' is usually 'what would my day look like'. A map answers that; a list does not.",
    },
  ],

  outcomes: {
    note: "No usage, completion or enrolment data has been supplied for this project, and none is claimed.",
    items: [
      "A self-directed pathways tool with five parallel modes of exploration",
      "A fixed comparison framework of six labour-market measures per industry",
      "A category-filtered job-profile map",
      "[Add measurable outcome]",
      "[Confirm number of industries and job profiles covered]",
    ],
  },

  gaps: [
    "Confirm Glenn's role boundaries and who else worked on the project.",
    "Confirm the authoring tool and delivery platform.",
    "Confirm the audience and how the tool was distributed.",
    "Confirm the number of industries and job profiles covered.",
    "Confirm the source of the labour-market data shown.",
    "Confirm permission to publish TAFE Queensland interface imagery.",
  ],

  seo: {
    title: "Vocational pathways — TAFE Queensland | Glenn Hammond",
    description:
      "A self-directed pathways tool letting prospective vocational students compare industries, explore job profiles on a navigable map and read the labour-market data behind each option.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Goodstart — MyPortal
   ══════════════════════════════════════════════════════════════════════════ */

const goodstart = {
  path: "/work/goodstart-myportal",
  slug: "goodstart-myportal",
  format: "standard",
  tier: "featured",
  title: "MyPortal",
  clientId: "goodstart",
  clientName: "Goodstart Early Learning",
  sector: "Early childhood education",
  period: "2014–2015",
  role: "Online Learning Coordinator",
  layers: ["content", "platform"],
  areas: ["Platforms", "Content design", "Learning experience"],
  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,

  card: {
    image: "goodstart-card",
    alt: "The MyPortal course page for a Diploma of Early Childhood Education and Care, showing a course banner, collapsible sections and administration, people, messages and calendar panels.",
    headline: "A national learning platform for 640 centres",
    summary:
      "The MyPortal learning environment and the nationally accredited early childhood qualifications that ran inside it.",
  },

  hero: {
    role: "primary",
    eyebrow: "Goodstart Early Learning · MyPortal",
    headline: "A national learning platform for 640 centres.",
    standfirst:
      "Developing the MyPortal learning management system and producing nationally accredited Certificate III and Diploma programs in early childhood education and care, for educators spread across the country.",
    image: "goodstart-myportal",
    alt: "The MyPortal course page for CHC50113 Diploma of Early Childhood Education and Care: a course banner, an open-all and close-all control, a highlighted Start here section with three activity icons labelled Welcome, Image of Child and Useful forms, and side panels for administration, people, messages and a calendar.",
    caption:
      "Everything collapsed except Start here. A months-long accredited qualification presented as a full index reads as a workload; the same qualification with one section open reads as a first step. The collapse state is the design decision, not the theme.",
    area: "Learning experience",
    expandable: true,
  },

  meta: [
    { label: "Client", value: "Goodstart Early Learning" },
    { label: "Sector", value: "Early childhood education" },
    { label: "Scale", value: "640 centres nationally" },
    { label: "Role", value: "Online Learning Coordinator" },
    { label: "Period", value: "2014–2015" },
  ],

  brief: {
    problem:
      "Accredited professional learning for educators spread across a large national network of centres, with no single environment to deliver it in.",
    role: "Online Learning Coordinator. [Confirm role boundaries: platform development, course production, or both]",
    scope:
      "MyPortal learning platform development and production of nationally accredited Certificate III and Diploma programs in early childhood education and care.",
    outcome:
      "One learning environment carrying accredited qualifications across 640 centres. [Add measurable outcome]",
    stack: "Moodle",
  },

  situation: [
    "Goodstart needed one digital environment capable of supporting accredited professional learning across a large, geographically distributed network of centres, and the accredited learning to run inside it.",
    "Both halves were built together: the platform, and the nationally accredited Certificate III and Diploma programs it delivered. It is the earliest example in this portfolio of the pattern that runs through all of it.",
  ],

  reframe: [
    "An accredited qualification delivered online has a structural problem that a short course does not. It runs for months, it has assessment evidence requirements, and its learners are working full time in centres while they do it.",
    "That makes orientation the first design problem rather than a nicety. The recovered course page opens with a highlighted Start here section carrying three things: a welcome, the conceptual anchor of the qualification, and the forms people will need. Everything else is collapsed.",
  ],

  figures: [
    {
      role: "support",
      image: "goodstart-activity",
      alt: "A drag-and-drop learning activity on a wooden chopping-board background, instructing the learner to drop each food onto the correct chopping board, with fish, pizza, chicken, cheese, meat and vegetables above six coloured boards.",
      caption:
        "Food-safety colour coding taught as the task it actually is. The learner sorts food onto boards rather than reading which colour means what, which is the difference between recalling a table and performing a routine.",
      area: "Content design",
    },
    {
      role: "placeholder",
      placeholder: {
        label: "MyPortal platform home",
        note: "The recovered home-page image is a 486-pixel-wide screenshot inside a desktop mockup. It is too small to publish and cannot be enlarged without blurring the interface text.",
        ratio: "16 / 9",
      },
      caption:
        "The platform landing view, which would show how 640 centres' worth of learners were routed to their own qualifications. [Confirm whether a higher-resolution capture exists]",
      area: "Platforms",
    },
  ],

  outcomes: {
    note: "This is 2014 to 2015 work. No adoption, completion or satisfaction data is claimed.",
    items: [
      "The MyPortal learning environment, serving a national network of 640 centres",
      "Nationally accredited Certificate III and Diploma programs in early childhood education and care",
      "Interactive practice activities built around workplace routines rather than recall",
      "[Confirm number of courses/users]",
    ],
  },

  gaps: [
    "Confirm Glenn's role boundaries: platform development, course production, or both.",
    "Confirm whether MyPortal was newly built, migrated or inherited, and from what.",
    "Confirm whether the interface shown was designed by Glenn or was the platform default.",
    "Confirm the number of learners and courses.",
    "Supply a higher-resolution capture of the platform home page, if one exists.",
  ],

  seo: {
    title: "MyPortal — Goodstart Early Learning | Glenn Hammond",
    description:
      "A national learning environment and accredited early childhood education programs across 640 Goodstart centres.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   ISQ — differentiated learning
   ══════════════════════════════════════════════════════════════════════════ */

const isqDifferentiation = {
  path: "/work/isq-differentiated-learning",
  slug: "isq-differentiated-learning",
  format: "standard",
  tier: "featured",
  title: "Differentiated learning",
  clientId: "isq",
  clientName: "Independent Schools Queensland",
  sector: "Education",
  period: "2022",
  role: "Learning design and development",
  layers: ["content", "experience"],
  areas: ["Content design", "Learning experience"],
  status: STATUS.APPROVED,
  source: SOURCE.SUPPLIED_ASSET,

  card: {
    image: "isq-diff-card",
    alt: "The title screen of a professional learning course reading Differentiating the educational program for students in Years 7 to 10, with a sixty-minute duration and a photograph of a secondary classroom.",
    headline: "Professional learning for teachers, about teaching",
    summary:
      "A sixty-minute course helping secondary teachers differentiate instruction, built around a running classroom scenario rather than a model.",
  },

  hero: {
    role: "primary",
    eyebrow: "Independent Schools Queensland · Professional learning",
    headline: "Professional learning for teachers, about teaching.",
    standfirst:
      "A sixty-minute course on differentiating the educational program for students in Years 7 to 10. The audience are practising secondary teachers, which sets a high bar: anything that reads as theory they already know loses them immediately.",
    image: "isq-diff-title",
    alt: "The course title screen: Differentiating the educational program for students in Years 7 to 10, with a sixty-minute duration indicator, a start control, and a photograph of secondary students working at laptops in a classroom.",
  },

  meta: [
    { label: "Client", value: "Independent Schools Queensland" },
    { label: "Sector", value: "Education" },
    { label: "Role", value: "Learning design and development" },
    { label: "Duration", value: "60 minutes" },
    { label: "Audience", value: "Secondary teachers, Years 7 to 10" },
  ],

  brief: {
    problem:
      "Differentiation is a concept most secondary teachers can define and fewer have a repeatable method for.",
    role: "Learning design and development. [Confirm role boundaries and subject-matter collaborators]",
    scope:
      "Instructional design, scenario writing, interaction design and course build.",
    outcome:
      "A sixty-minute self-paced course for teachers in ISQ member schools. [Add measurable outcome]",
    stack: "Articulate Storyline",
  },

  situation: [
    "The learners here are practising teachers, and the subject is their own practice. That is the hardest audience configuration in professional learning, because the participant can tell within thirty seconds whether the designer has been in a classroom.",
    "The recovered sequence shows the course dealing with that directly: it establishes the problem in the language of the classroom, gives one model, and then spends most of its length inside a single worked example.",
  ],

  reframe: [
    "A course about differentiation could reasonably be organised around the tiers of intervention, because that is how the literature is organised. The recovered sequence does not do that. It introduces the tiers once, then switches to a named teacher making a decision about a named student.",
    "That is the substantive design decision. A model tells a teacher what category a student is in. A worked example shows what the teacher does on Monday, which is the actual gap.",
  ],

  figures: [
    {
      role: "support",
      image: "isq-diff-intro",
      alt: "An introduction screen over a photograph of a chess game, with body text explaining that Australian classrooms are diverse and that teachers need to tailor instruction to a range of backgrounds, experiences and dispositions.",
      caption:
        "The premise, stated in one screen and not returned to. Professional audiences do not need the case for the topic made at length; they need the topic to start.",
      area: "Content design",
    },
    {
      role: "support",
      image: "isq-diff-tiers",
      alt: "A screen explaining Tier 2 of a three-tier intervention model, with a pyramid diagram highlighting the middle tier and a note that approximately fifteen per cent of any cohort falls into it.",
      caption:
        "The three-tier model, with the proportion of a cohort named. Quantifying the tier is what makes it usable: a teacher can look at their class of twenty-eight and estimate the number, which a diagram alone does not let them do.",
      area: "Content design",
      expandable: true,
    },
    {
      role: "detail",
      image: "isq-diff-cycle",
      alt: "A screen showing a four-part circular diagram labelled Assess, Teach, Track and Adapt around the phrase student learning, beside a numbered instruction to assess what students already know, attributed to the Grattan Institute, 2015.",
      caption:
        "One cycle, sourced on the screen. Attributing the model where it appears rather than in a reference list matters for this audience, because a teacher deciding whether to trust an approach wants to know where it came from before they read the steps.",
      area: "Content design",
    },
    {
      role: "expandable",
      image: "isq-diff-scenario",
      alt: "A scenario screen headed 'Which did Marta do?', describing a teacher's decision to include a student in a targeted reading program, beside Marta's four-point targeted teaching checklist for that student.",
      caption:
        "The worked example the course is actually built on. A named teacher, a named student, and a four-line checklist that is specific enough to copy. This is where the abstraction becomes something a participant can use on Monday.",
      area: "Learning experience",
      expandable: true,
    },
  ],

  decisions: [
    {
      title: "Spend the length on one worked example",
      choice:
        "The tier model is introduced once; the majority of the sequence follows a single teacher and student.",
      why: "Practising teachers can already categorise students. What they lack is a repeatable next action, and a worked example carries that better than a framework does.",
    },
    {
      title: "Quantify the model",
      choice: "The tier explanation names the proportion of a cohort it applies to.",
      why: "A percentage lets a teacher map the model onto the class in front of them. A diagram alone does not.",
    },
    {
      title: "Source the framework on screen",
      choice: "The assess, teach, track and adapt cycle carries its citation in the frame.",
      why: "This audience evaluates the provenance of an approach before they evaluate the approach.",
    },
  ],

  outcomes: {
    note: "Completion, evaluation and impact data for this course has not been supplied, and none is claimed.",
    items: [
      "A sixty-minute self-paced professional learning course for secondary teachers",
      "A scenario-led structure built on one worked classroom example",
      "[Add measurable outcome]",
      "[Confirm number of courses/users]",
    ],
  },

  gaps: [
    "Confirm Glenn's role boundaries and who the subject-matter collaborators were.",
    "Confirm whether this course was published to ISQ member schools or remained draft.",
    "Confirm permission to publish. The course photography shows identifiable school students.",
    "Confirm the licensing of the classroom photography used in the course.",
    "Confirm completion or evaluation data, if any exists.",
  ],

  seo: {
    title: "Differentiated learning — Independent Schools Queensland | Glenn Hammond",
    description:
      "A sixty-minute professional learning course helping secondary teachers differentiate instruction for students in Years 7 to 10.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Sonic HealthPlus
   ══════════════════════════════════════════════════════════════════════════ */

const sonicHealthPlus = {
  path: "/work/sonic-healthplus",
  slug: "sonic-healthplus",
  format: "standard",
  tier: "featured",
  title: "Injury management learning",
  clientId: "sonic",
  clientName: "Sonic HealthPlus",
  sector: "Occupational health",
  period: "2017",
  role: "eLearning design and development",
  layers: ["content", "experience"],
  areas: ["Content design", "Learning experience", "Design systems"],
  status: STATUS.APPROVED,
  source: SOURCE.SUPPLIED_ASSET,

  card: {
    image: "sonic-card",
    alt: "The cover screen of a Sonic HealthPlus course titled Injury Prevention, Treatment and Management Services, with a photograph of a clinician.",
    headline: "Teaching a service offering as a learning experience",
    summary:
      "A branded course suite covering injury prevention, treatment and management, built on one visual system with question-and-feedback interactions throughout.",
  },

  hero: {
    role: "primary",
    eyebrow: "Sonic HealthPlus · Occupational health",
    headline: "Teaching a service offering as a learning experience.",
    standfirst:
      "A course suite covering injury prevention, treatment and management for an occupational health provider. The subject is a commercial service model, which is a harder learning design problem than it sounds: the content is inherently a list, and a list is not a course.",
    image: "sonic-cover",
    alt: "The Sonic HealthPlus course cover: the organisation's logo above the title Injury Prevention, Treatment and Management Services, a strapline reading Sonic HealthPlus is your comprehensive injury management provider, and a photograph of a clinician with a stethoscope.",
  },

  meta: [
    { label: "Client", value: "Sonic HealthPlus" },
    { label: "Sector", value: "Occupational health" },
    { label: "Role", value: "eLearning design and development" },
    { label: "Period", value: "2017" },
    { label: "Audience", value: "[Confirm audience: internal staff, client organisations or both]" },
  ],

  brief: {
    problem:
      "A service model with tiers, inclusions and exclusions, which people were expected to know and could only learn from a brochure.",
    role: "eLearning design and development. [Confirm role boundaries]",
    scope:
      "Learning design, visual system, interaction and assessment design, and course build across a suite of modules.",
    outcome:
      "A branded course suite on one visual system. [Add measurable outcome]",
    stack: "Articulate Storyline",
  },

  situation: [
    "The content here is a commercial service model: tiers, retainers, what is included, what is charged for, and which service applies when. That kind of material is normally distributed as a document, and normally not read.",
    "The recovered screens show it treated as learning instead, with the service distinctions taught through questions rather than stated in a list.",
  ],

  reframe: [
    "The temptation with service content is to explain the model and then test recall of it. That produces a quiz about a brochure.",
    "What the recovered assessment screens actually do is put the learner in the position of answering a client's question, then correct the answer with the reasoning attached. The distinction is small on screen and large in effect: the learner practises the judgement rather than memorising the tier table.",
  ],

  figures: [
    {
      role: "support",
      image: "sonic-support-services",
      alt: "A course screen headed Injury Management Support Services with an early intervention subsection, explaining the importance of identifying workplace hazards and of prompt treatment, over a photograph of a clinician bandaging a wrist.",
      caption:
        "The content template: a yellow title band, a dark body plate, and imagery held to the lower half. Fixing those three zones is what lets a suite of modules read as one product without each screen being designed individually.",
      area: "Design systems",
      expandable: true,
    },
    {
      role: "pair",
      pair: [
        {
          image: "sonic-question",
          alt: "A multiple-choice question asking how much it costs a client to sign up to tier one injury management, with four options and a submit control.",
        },
        {
          image: "sonic-feedback",
          alt: "A multiple-choice question about the definition of ergonomics, with a feedback panel reading Correct and giving the full definition.",
        },
      ],
      caption:
        "Question and feedback as one designed pair. The feedback panel carries the whole reasoning rather than the word correct, which means a learner who guessed still leaves with the answer. Both states keep the question visible behind them, so the correction has something to attach to.",
      area: "Learning experience",
      expandable: true,
    },
    {
      role: "support",
      image: "sonic-education",
      alt: "A course screen headed Injury Prevention with an Education subsection, explaining that the health and wellness team deliver educational sessions to promote healthy and safe workplace practices, with a hard hat and gloves illustration.",
      caption:
        "The same template carrying a different content type. Consistency across a suite is only worth anything if the template survives the shortest and the longest screens, and this is the test case for the short one.",
      area: "Content design",
    },
  ],

  outcomes: {
    note: "No completion, evaluation or commercial outcome data has been supplied for this project, and none is claimed.",
    items: [
      "A course suite covering injury prevention, treatment and management",
      "A reusable visual template applied consistently across modules",
      "Question-and-feedback interactions carrying reasoning rather than confirmation",
      "[Add measurable outcome]",
      "[Confirm number of courses/users]",
    ],
  },

  gaps: [
    "Confirm the audience: internal Sonic HealthPlus staff, client organisations, or both.",
    "Confirm Glenn's role boundaries and who else worked on the suite.",
    "Confirm how many modules the suite contained.",
    "Confirm permission to publish, given the screens describe commercial service tiers.",
    "Confirm the licensing of the clinician photography.",
  ],

  seo: {
    title: "Injury management learning — Sonic HealthPlus | Glenn Hammond",
    description:
      "A branded occupational health course suite covering injury prevention, treatment and management, built on one visual system.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Safetyhub
   ══════════════════════════════════════════════════════════════════════════ */

const safetyhub = {
  path: "/work/safetyhub-asbestos",
  slug: "safetyhub-asbestos",
  format: "standard",
  tier: "featured",
  title: "Asbestos awareness",
  clientId: "safetyhub",
  clientName: "Safetyhub",
  sector: "Workplace safety",
  period: "2021–2022",
  role: "Learning design and video-led development",
  layers: ["content", "experience"],
  areas: ["Content design", "Multimedia", "Learning experience"],
  status: STATUS.APPROVED,
  source: SOURCE.SUPPLIED_ASSET,

  card: {
    image: "safetyhub-card",
    alt: "A question screen from an asbestos awareness course reading 'Where can asbestos be found?' over a photograph of corrugated fibre-cement cladding.",
    headline: "Safety learning where the footage is the content",
    summary:
      "An asbestos awareness course built on real site footage, where the material itself is the thing a learner has to recognise.",
  },

  hero: {
    role: "primary",
    eyebrow: "Safetyhub · Workplace safety",
    headline: "Safety learning where the footage is the content.",
    standfirst:
      "Asbestos awareness has one job: a worker has to recognise the material in a building they have never been in before. That makes photography and video the substance of the course rather than its decoration.",
    image: "safetyhub-cover",
    alt: "The asbestos awareness course cover: the Safetyhub logo above the title Asbestos Awareness, with four icons indicating duration, audio, video and information.",
  },

  meta: [
    { label: "Client", value: "Safetyhub" },
    { label: "Sector", value: "Workplace safety" },
    { label: "Role", value: "Learning design and video-led development" },
    { label: "Period", value: "2021–2022" },
    { label: "Video role", value: "[Confirm the extent of the video-production role]" },
  ],

  brief: {
    problem:
      "A worker has to identify a hazardous material by sight, in an unfamiliar building, having read about it once.",
    role: "Learning design and development. [Confirm the extent of the video-production role]",
    scope:
      "Learning design, video-led content treatment, question and feedback design, and course build.",
    outcome:
      "An asbestos awareness course. [Add measurable outcome] [Confirm whether the course was published and to whom]",
    stack: "[Confirm authoring tool]",
  },

  situation: [
    "Asbestos awareness is a recognition task before it is a knowledge task. The learner does not need to recite the regulation; they need to look at a wall and know whether to stop work.",
    "The recovered screens are consistent with that: the interface furniture is minimal, the imagery is real material in real buildings, and the questions are asked over the surfaces they are about.",
  ],

  reframe: [
    "Safety courses default to text on a stock background, then test the text. The recognition problem survives that treatment completely intact.",
    "Here the composition is inverted. The photograph occupies the frame, and the question sits in a narrow band over it. The learner is looking at the material while answering a question about the material, which is closer to the moment the training is for.",
  ],

  figures: [
    {
      role: "support",
      image: "safetyhub-question",
      alt: "A question screen reading 'Where can asbestos be found?' in a dark band across a full-frame photograph of corrugated fibre-cement wall sheeting.",
      caption:
        "The question sits over the material rather than beside a description of it. The band is narrow and the surface is uninterrupted, so the learner is reading the texture at the same time as the question.",
      area: "Content design",
      expandable: true,
    },
    {
      role: "support",
      image: "safetyhub-video",
      alt: "A video frame showing a corroded pipe flange and valve against fibre-cement cladding, with a central play control.",
      caption:
        "Video used for the same reason: a still photograph cannot show a worker what deteriorating material looks like from several angles. The play control is the only interface element in the frame.",
      area: "Multimedia",
    },
    {
      role: "pair",
      pair: [
        {
          image: "safetyhub-choice",
          alt: "A question reading 'Which of these would you not potentially find asbestos in?' with four options: insulation, wall cladding, wooden joists and tiles, over footage of a worker inspecting cladding.",
        },
        {
          image: "safetyhub-feedback",
          alt: "The same screen after an incorrect answer, with feedback reading 'You slipped up there. Asbestos is not found in wooden joists' and the correct option highlighted.",
        },
      ],
      caption:
        "Question and correction on one screen. The options stay in place and the correct one is marked, so the learner sees their answer and the right answer together. Feedback that replaces the question forces a learner to reconstruct what they were asked.",
      area: "Learning experience",
      expandable: true,
    },
  ],

  outcomes: {
    note: "No completion, evaluation or distribution data has been supplied for this project, and none is claimed.",
    items: [
      "An asbestos awareness course built on real site photography and video",
      "A recognition-led question pattern using full-frame material imagery",
      "Feedback presented alongside the original question rather than replacing it",
      "[Add measurable outcome]",
      "[Confirm whether the course was published and to whom]",
    ],
  },

  gaps: [
    "Confirm the extent of Glenn's video-production role: direction, filming, editing, or a combination.",
    "Confirm that all five recovered screens belong to the Safetyhub engagement.",
    "Confirm whether the course was published or remained draft portfolio material.",
    "Confirm permission to publish, and the licensing of the site footage.",
    "Confirm the authoring tool and delivery platform.",
  ],

  seo: {
    title: "Asbestos awareness — Safetyhub | Glenn Hammond",
    description:
      "A video-led asbestos awareness course built around recognising hazardous material on site, with feedback designed to sit alongside the question.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Prototypes
   ══════════════════════════════════════════════════════════════════════════ */

const prototypes = {
  path: "/work/interaction-prototypes",
  slug: "interaction-prototypes",
  format: "lab",
  tier: "lab",
  title: "Interaction and learning-data prototypes",
  clientId: null,
  clientName: "Self-directed",
  sector: "Research and development",
  period: "2022",
  role: "Prototyping",
  layers: ["experience", "operations"],
  areas: ["Prototyping", "Learning data", "Interaction design"],
  status: STATUS.APPROVED,
  source: SOURCE.SUPPLIED_ASSET,

  card: {
    image: "proto-card",
    alt: "The introduction screen of a data capture demonstration module, stating that it captures learner information and reflections and is published as SCORM 2004 version 3.",
    headline: "Prototyping navigation, learner input and LMS reporting",
    summary:
      "Self-directed prototypes testing what a course can capture, report and navigate. Working demonstrations rather than client deliverables.",
  },

  hero: {
    role: "primary",
    eyebrow: "Self-directed · Prototypes",
    headline: "Prototyping navigation, learner input and LMS reporting.",
    standfirst:
      "Short, self-directed builds testing two questions that come up on most engagements: what data can a course actually send back to a learning platform, and how do you fit a resource library into a linear course without breaking it.",
    image: "proto-data-intro",
    alt: "The introduction screen of a data capture demonstration: a design summary explaining that the module captures learner information and reflections through multiple choice, short and long text entry, numerical and Likert-scale questions, and a reporting note stating it is published as SCORM 2004 version 3.",
    caption:
      "The prototype states its own scope, including the packaging standard. SCORM 2004 v3 is the constraint that determines what can be reported, so naming it on the first screen is the honest way to demonstrate a data claim.",
    area: "Learning data",
    expandable: true,
  },

  meta: [
    { label: "Client", value: "Self-directed" },
    { label: "Role", value: "Prototyping" },
    { label: "Period", value: "2022" },
    { label: "Published as", value: "SCORM 2004 v3" },
    { label: "Built with", value: "Articulate Storyline" },
  ],

  situation: [
    "Two questions come up on most learning engagements, usually late and usually as an assumption. What can this course report back to the platform, and where do the resources go.",
    "Both are cheaper to answer with a working prototype than with a paragraph in a proposal. These are the prototypes, kept short on purpose.",
  ],

  figures: [
    {
      role: "expandable",
      image: "proto-likert",
      alt: "A Likert scale screen with five statements down the left and a one-to-five radio scale across, headed 'How much do you agree with the following statements?'.",
      caption:
        "A Likert grid is the hardest of the input types to make reportable, because five statements produce five values that have to survive the packaging intact. It is here because it is the test case, not because it is the most attractive screen.",
      area: "Learning data",
      expandable: true,
    },
    {
      role: "support",
      image: "proto-menu",
      alt: "A slide-over navigation panel listing six resource types with icons: reading, document, download, podcast, link and webinar, beside a course summary noting a knowledge assessment, audio and an approximate duration.",
      caption:
        "A resource drawer for courses that carry more than slides. Typing the resources rather than listing them means a learner can tell a podcast from a download before they open it, and the drawer closes back to the exact position in the course.",
      area: "Interaction design",
      prototype: true,
      expandable: true,
    },
  ],

  outcomes: {
    note: "These are self-directed prototypes, not client deliverables. They demonstrate a technique; they do not demonstrate an outcome.",
    items: [
      "A data-capture demonstration covering multiple choice, short and long text entry, numerical and Likert-scale input, packaged as SCORM 2004 v3",
      "A resource-drawer navigation pattern for courses carrying mixed media types",
    ],
  },

  gaps: [
    "Confirm whether either prototype was subsequently used on a client engagement.",
    "Confirm whether the H5P demonstration referenced in the old site should be recovered and added.",
  ],

  seo: {
    title: "Interaction and learning-data prototypes | Glenn Hammond",
    description:
      "Self-directed prototypes testing SCORM learner-data capture and resource navigation patterns in Articulate Storyline.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Assembly
   ══════════════════════════════════════════════════════════════════════════ */

/** CASA subprojects, in reading order. Drives program navigation and
 *  previous/next links inside the program. */
export const casaSubprojects = [
  casaAviationworx,
  casaClass,
  casaCatalogue,
  casaCourseSystem,
  casaFer,
];

/** Everything with a route, in site order. */
export const projects = [
  casaProgramme,
  ...casaSubprojects,
  isqDesignSystem,
  wellbeingStudio,
  connectAndLearn,
  tafePathways,
  goodstart,
  isqDifferentiation,
  sonicHealthPlus,
  safetyhub,
  prototypes,
];

export const withheldProjects = [
  {
    slug: "child-protection-program",
    title: "Child Protection Program",
    clientId: "isq",
    format: "restricted",
    status: STATUS.EVIDENCE_PENDING,
    reason:
      "Sensitive subject and senior audience. Requires written restricted-format content and a confidentiality decision before publication.",
    source: SOURCE.BLUEPRINT,
  },
];

export const projectByPath = Object.fromEntries(projects.map((p) => [p.path, p]));
export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

export const programme = casaProgramme;

/**
 * Flagship restructure (v3.4). Three named projects carry primary editorial
 * prominence across Home and Work. Order is authoritative and is not
 * alphabetical, not by client and not by array position: Wellbeing Studio
 * leads as the most contemporary end-to-end build, Connect & Learn follows
 * as the platform-and-content migration at scale, and CASA Flight Examiner
 * Rating follows as the earlier specialist aviation program. This order
 * must be preserved wherever the three appear together.
 */
export const flagships = [wellbeingStudio, connectAndLearn, casaFer];

/** Work index tiers. Scale and position carry the hierarchy, not the card.
 *
 *   flagships  the three named projects above, one-plus-two composition.
 *   secondary  live, routed work with Work-page prominence but not flagship
 *              weight. The CASA program overview stands in for its own five
 *              children, which stay reachable through its own navigation
 *              rather than as separate cards here.
 *   lab        the prototypes tier.
 */
export const workIndex = {
  flagships,
  secondary: [
    casaProgramme,
    isqDesignSystem,
    tafePathways,
    goodstart,
    sonicHealthPlus,
    safetyhub,
  ],
  lab: [prototypes],
};

/** Previous/next within the whole portfolio, program children included. */
const readingOrder = projects.map((p) => p.path);

export function siblings(path) {
  const project = projectByPath[path];
  if (!project) return { prev: null, next: null };

  /* Inside the program, previous/next stays inside the program. */
  if (project.programme === "casa") {
    const i = casaSubprojects.findIndex((p) => p.path === path);
    return {
      prev: i > 0 ? casaSubprojects[i - 1] : casaProgramme,
      next: i < casaSubprojects.length - 1 ? casaSubprojects[i + 1] : null,
      within: casaProgramme,
    };
  }

  const order = readingOrder.filter(
    (p) => !projectByPath[p].programme && p !== casaProgramme.path
  );
  const i = order.indexOf(path);
  return {
    prev: i > 0 ? projectByPath[order[i - 1]] : null,
    next: i < order.length - 1 && i !== -1 ? projectByPath[order[i + 1]] : null,
  };
}

/**
 * Two related projects for the foot of a case study. Same areas first.
 *
 * A record may set `relatedSlugs` to force specific projects to the front of
 * the list — used where an editorial cross-link matters more than the area
 * score would produce on its own (ISQ eLearning Design System ↔ Connect &
 * Learn). Remaining slots are filled by area score as before.
 */
export function related(path, count = 2) {
  const project = projectByPath[path];
  if (!project) return [];
  const pool = projects.filter(
    (p) => p.path !== path && p.format !== "programme" && !p.programme
  );
  const score = (p) =>
    p.areas.filter((a) => project.areas.includes(a)).length;

  const forced = (project.relatedSlugs ?? [])
    .map((slug) => projectBySlug[slug])
    .filter((p) => p && p.path !== path);
  if (forced.length) {
    const rest = pool
      .filter((p) => !forced.includes(p))
      .sort((a, b) => score(b) - score(a));
    return [...forced, ...rest].slice(0, count);
  }

  return [...pool].sort((a, b) => score(b) - score(a)).slice(0, count);
}
