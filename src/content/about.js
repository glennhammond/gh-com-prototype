import { STATUS, SOURCE } from "./status.js";

/** Public biography: broad practice first, then the dated digital-learning history. */
export const about = {
  eyebrow: "About",
  headline: "Thirty years making digital things. Fifteen-plus years focused on digital learning.",

  summary: [
    "My practice started broader than eLearning: visual and digital design, web and media work, then increasingly complex learning products and platforms. The last fifteen-plus years have concentrated on digital learning, but the older disciplines never disappeared — they are why I am comfortable moving between interface, content, media, systems and implementation.",
    "Six years inside the aviation regulator, a professional-learning platform migration and more than sixty course rebuilds at ISQ, and the current Wellbeing Studio product work all reinforced the same thing: the interesting problem is often somewhere other than the course.",
  ],

  earlierPractice: {
    heading: "Before digital learning became the centre",
    paragraphs: [
      "The thirty-year line on the homepage refers to the wider practice, not thirty years doing the same job. Earlier work was rooted in graphic and digital design, web production and media. Over time the work moved deeper into learning, interaction and platforms, while the visual and production disciplines stayed part of how I solve problems.",
      "That history matters because current projects rarely stay inside one neat discipline. A learning problem may become an information-architecture problem; a platform problem may need interface design; a useful experience may need video, front-end code or a production system behind it.",
    ],
  },

  approach: {
    heading: "How I work",
    paragraphs: [
      "Most learning problems arrive described as content problems. A course is not landing, so the request is for a better course. Often the course is fine and the platform is making it unusable, or the content is fine and nobody has owned the workflow that keeps it current.",
      "So I start with the whole situation rather than the inherited brief, and I keep connected decisions connected long enough for them to improve each other. The useful boundary is the point where the problem is genuinely solved.",
    ],
    status: STATUS.APPROVED,
  },

  history: [
    {
      period: "2026 —",
      role: "Digital Learning & Platform Lead, Wellbeing Studio",
      org: "Corporate Yoga Australia",
      detail:
        "Led Wellbeing Studio from concept to production: product strategy, learning experience, UX and interface design, platform architecture, registration and cohort workflows, video delivery, campaign systems and production implementation.",
    },
    {
      period: "2021 —",
      role: "eLearning Specialist",
      org: "Independent Schools Queensland",
      detail:
        "Professional learning for member schools, including the Connect & Learn platform migration and course redevelopment recognised with two LearnX 2024 Diamond Awards, plus current design-system, custom Rise and learning-data work.",
    },
    {
      period: "2015 – 2021",
      role: "eLearning Specialist",
      org: "Civil Aviation Safety Authority",
      detail:
        "Regulated aviation learning including the Flight Examiner Rating programme, internal learning platforms, media production and a reusable Storyline production system for the regulator's design team.",
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
      role: "Digital and visual design",
      org: "Freelance and industry work",
      detail:
        "Graphic design, web and digital production, media and early learning-platform work formed the broader practice that digital learning later grew from.",
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
