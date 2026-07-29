import { STATUS, SOURCE } from "./status.js";

/**
 * Testimonials — Blueprint §13, §16.
 *
 * A testimonial is publishable only with a name, a role, an organisation and a
 * recorded approval date. One currently qualifies. The blueprint is explicit
 * that one testimonial reads as the only one available and three read as a
 * pattern; obtaining a second and third is a Release Two task, not a reason to
 * soften the rule now.
 */

export const testimonials = [
  {
    id: "cya-lewis",
    quote:
      "Glenn delivered a solution that hit the mark with both content and design. It exceeded our expectations and was easy to implement.",
    name: "Debby Lewis",
    role: "Founder",
    organisation: "Corporate Yoga Australia",
    projectSlug: "wellbeing-studio",
    dateApproved: "2026-07-25",
    status: STATUS.APPROVED,
    source: SOURCE.MASTER_COPY,
  },
];

export const testimonialById = Object.fromEntries(
  testimonials.map((t) => [t.id, t])
);
