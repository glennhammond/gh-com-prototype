/**
 * Enquiry form validation — pure functions, no DOM, no React.
 *
 * Kept separate so it can be unit tested and reused by a server handler when
 * the form is wired to a real endpoint. Messages are written to be actionable
 * (WCAG 2.2 SC 3.3.3): they say what to do, not that something is invalid.
 */

export const FIELDS = {
  name: { label: "Your name", required: true },
  organisation: { label: "Organisation", required: true },
  email: { label: "Email", required: true },
  layers: { label: "Where the problem seems to sit", required: false },
  message: { label: "What is happening?", required: true },
  timeframe: { label: "Rough timeframe", required: false },
};

/**
 * Deliberately permissive. Over-strict email regexes reject valid addresses,
 * and the cost of a bounced reply is lower than the cost of a blocked enquiry.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateField(name, value) {
  const trimmed = typeof value === "string" ? value.trim() : value;

  switch (name) {
    case "name":
      if (!trimmed) return "Add your name so I know who I am replying to.";
      return null;
    case "organisation":
      if (!trimmed) return "Add your organisation. Put “independent” if that fits better.";
      return null;
    case "email":
      if (!trimmed) return "Add an email address so I can reply.";
      if (!EMAIL.test(trimmed))
        return "That email address looks incomplete — check for a missing @ or domain.";
      return null;
    case "message":
      if (!trimmed) return "Tell me what is happening, even in a sentence or two.";
      if (trimmed.length < 15)
        return "Add a little more — a sentence or two about the problem is enough to start.";
      return null;
    default:
      return null;
  }
}

/** @returns {{ [field: string]: string }} errors keyed by field name */
export function validateForm(values) {
  const errors = {};
  for (const field of Object.keys(FIELDS)) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

export const hasErrors = (errors) => Object.keys(errors).length > 0;

/** Summary announced to assistive technology and shown above the form. */
export function errorSummary(errors) {
  const count = Object.keys(errors).length;
  if (!count) return "";
  return count === 1
    ? "There is one thing to fix before this can be sent."
    : `There are ${count} things to fix before this can be sent.`;
}
