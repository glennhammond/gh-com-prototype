/**
 * Enquiry form validation — pure functions, no DOM, no React.
 * Messages are actionable: they say what to do rather than merely reporting
 * that a value is invalid.
 */

export const FIELDS = {
  name: { label: "Your name", required: true },
  organisation: { label: "Organisation", required: false },
  email: { label: "Email", required: true },
  layers: { label: "Where the problem seems to sit", required: false },
  message: { label: "What is happening?", required: true },
  timeframe: { label: "Rough timeframe", required: false },
};

/** Deliberately permissive: over-strict email regexes reject valid addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateField(name, value) {
  const trimmed = typeof value === "string" ? value.trim() : value;

  switch (name) {
    case "name":
      if (!trimmed) return "Add your name so I know who I am replying to.";
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
