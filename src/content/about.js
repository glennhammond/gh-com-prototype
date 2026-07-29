import { STATUS, SOURCE } from "./status.js";

/**
 * About — Blueprint §15.
 *
 * Two registers on one page: a short summary for scanning, then a complete
 * dated history for the recruiter and the person doing diligence. First person
 * throughout; third person is the tell of a one-person business pretending to
 * be an agency.
 *
 * NOTE — deliberately absent: the personal dimension (why Glenn moved into
 * digital learning, what he thinks organisations get wrong, one detail from
 * outside work). The blueprint calls this the highest value-per-word writing
 * task on the project. It cannot be invented, so the section is omitted rather
 * than shipped empty. See CONTENT-REGISTER.md.
 */

export const about = {
  eyebrow: "About",
  headline: "I have spent fifteen years on the parts of digital learning nobody puts in the brief.",

  summary: [
    "Six years inside the aviation regulator, building learning for examiners who assess other examiners. Three months moving approximately fifty thousand educators off a learning platform they had outgrown. A year turning a workplace wellbeing business into a product that runs without its founder in the room.",
    "The through-line is not the subject matter. It is that in each case the interesting problem was somewhere other than the course.",
  ],

  approach: {
    heading: "How I work",
    paragraphs: [
      "Most learning problems arrive described as content problems. A course is not landing, so the request is for a better course. Often the course is fine and the platform is making it unusable, or the content is fine and nobody has owned the workflow that keeps it current.",
      "So I start with the whole system rather than the brief, and I stay across all four layers rather than handing one to somebody else. That is not a claim to be better at each discipline than a specialist in it. It is a claim that the decisions between the disciplines are where the work is usually lost, and that those decisions need one owner.",
    ],
    status: STATUS.PROPOSED,
  },

  /** Dated professional history — recruiters and diligence (BP §5, §15). */
  history: [
    {
      period: "2026 —",
      role: "Digital Learning & Platform Lead, Wellbeing Studio",
      org: "Corporate Yoga Australia",
      detail:
        "Led Wellbeing Studio from concept to production: product strategy, learning experience, UX and interface design, platform architecture, Moodle, AWS, registration and cohort workflows, video delivery, and communications automation.",
    },
    {
      period: "2021 —",
      role: "eLearning Specialist",
      org: "Independent Schools Queensland",
      detail:
        "Professional learning for member schools, including the Connect & Learn platform migration and course redevelopment recognised with two LearnX 2024 Diamond Awards.",
    },
    {
      period: "2015 – 2021",
      role: "eLearning Specialist",
      org: "Civil Aviation Safety Authority",
      detail:
        "Regulated aviation learning including the Flight Examiner Rating programme, and a reusable learning-production system for the regulator: style manual, authoring templates, asset libraries and team processes.",
    },
    {
      period: "2014 – 2015",
      role: "Online Learning Coordinator",
      org: "Goodstart Institute of Early Learning",
      detail:
        "Developed the MyPortal learning management system for 640 centres nationally and produced accredited Certificate III and Diploma programmes in early childhood education and care.",
    },
    {
      period: "Earlier",
      role: "Digital learning and design",
      org: "Australian aviation industry",
      detail:
        "Designed and implemented Aviationworx for the Australian aviation industry.",
    },
  ],

  qualifications: [
    "UX Design",
    "TAE40116 Certificate IV in Training and Assessment",
    "Diploma of Graphic Design",
    "BA, Combined Studies / Humanities",
  ],

  recognition: [
    "Two Diamond Awards, Best eLearning Project, LearnX 2024",
    "Certified Scrum Master",
    "Articulate eLearning Hero",
  ],

  sectors: [
    "Education",
    "Government and compliance",
    "Aviation",
    "Health and wellbeing",
    "Early childhood education",
    "Membership organisations",
    "Corporate learning",
    "Not-for-profit",
  ],

  status: STATUS.APPROVED,
  source: SOURCE.MASTER_COPY,
};
