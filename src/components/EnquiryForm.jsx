import { useRef, useState } from "react";
import { layers } from "../content/layers.js";
import { site } from "../content/site.js";
import { validateForm, validateField, hasErrors, errorSummary } from "../lib/validation.js";
import "./EnquiryForm.css";

const EMPTY = {
  name: "",
  organisation: "",
  email: "",
  message: "",
  timeframe: "",
  layers: [],
};

const TIMEFRAMES = [
  "Not sure yet",
  "Exploring for next budget cycle",
  "Within three months",
  "Within a month",
  "Already underway",
];

/**
 * Layer-qualified enquiry — Blueprint §21.
 *
 * Six fields, four required. Deliberately no phone field and no budget
 * dropdown: both suppress enquiries from exactly the senior buyers worth
 * having, who will disclose both on the call anyway. The layer question does
 * the qualifying that a budget dropdown pretends to do, and it demonstrates
 * the framework working rather than merely describing it.
 *
 * PROTOTYPE BEHAVIOUR — submission is mocked. `submitEnquiry` below is the
 * single seam a production endpoint plugs into; nothing else changes. See
 * INTEGRATIONS.md. No secret, key or endpoint is present in this bundle.
 *
 * Accessibility:
 *   - native inputs and a real <fieldset> for the layer group
 *   - errors are announced, listed at the top, and each links to its field
 *   - aria-invalid and aria-describedby wire each message to its input
 *   - validation runs on submit, then per-field on change once a field has
 *     already failed, so nobody is corrected while still typing
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const summaryRef = useRef(null);
  const statusRef = useRef(null);

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    // Only re-validate a field that has already been marked wrong.
    if (submitted || errors[name]) {
      setErrors((e) => {
        const next = { ...e };
        const error = validateField(name, value);
        if (error) next[name] = error;
        else delete next[name];
        return next;
      });
    }
  };

  const toggleLayer = (id) => {
    setValues((v) => ({
      ...v,
      layers: v.layers.includes(id)
        ? v.layers.filter((l) => l !== id)
        : [...v.layers, id],
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    const found = validateForm(values);
    setErrors(found);

    if (hasErrors(found)) {
      // Move focus to the summary so the problem is announced immediately.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setState("sending");
    try {
      await submitEnquiry(values);
      setState("sent");
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setState("error");
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  };

  if (state === "sent") {
    return (
      <div
        className="enquiry__done"
        ref={statusRef}
        tabIndex={-1}
        role="status"
      >
        <h2 className="display-m">Thank you — that has been received.</h2>
        <p>
          {site.responsePromise.text} If it is urgent,{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> reaches me directly.
        </p>
        <p className="enquiry__prototype-note">
          Prototype note: this confirmation is simulated. No message was sent
          and nothing was stored.
        </p>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      {submitted && hasErrors(errors) && (
        <div
          className="enquiry__summary"
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
        >
          <h2 className="enquiry__summary-title">{errorSummary(errors)}</h2>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Field
        id="name"
        label="Your name"
        value={values.name}
        error={errors.name}
        onChange={setField}
        autoComplete="name"
        required
      />
      <Field
        id="organisation"
        label="Organisation"
        hint="Put “independent” if that fits better."
        value={values.organisation}
        error={errors.organisation}
        onChange={setField}
        autoComplete="organization"
        required
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={setField}
        autoComplete="email"
        inputMode="email"
        required
      />

      <fieldset className="enquiry__layers">
        <legend>What does the problem seem closest to?</legend>
        <p className="enquiry__hint" id="layers-hint">
          Optional, and guessing is fine — half of these conversations start on
          the wrong layer.
        </p>
        <div className="enquiry__layer-options" aria-describedby="layers-hint">
          {layers.map((layer) => (
            <label
              key={layer.id}
              className="enquiry__layer"
              style={{ "--layer": `var(${layer.token})` }}
            >
              <input
                type="checkbox"
                name="layers"
                value={layer.id}
                checked={values.layers.includes(layer.id)}
                onChange={() => toggleLayer(layer.id)}
              />
              <span className="enquiry__layer-swatch" aria-hidden="true" />
              <span className="enquiry__layer-num">{layer.number}</span>
              <span className="enquiry__layer-name">{layer.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        id="message"
        label="What is happening?"
        hint="A few sentences about the problem, the audience or the deadline is enough to start."
        as="textarea"
        rows={6}
        value={values.message}
        error={errors.message}
        onChange={setField}
        required
      />

      <div className="enquiry__field">
        <label className="enquiry__label" htmlFor="timeframe">
          Rough timeframe
          <span className="enquiry__optional">Optional</span>
        </label>
        <select
          id="timeframe"
          name="timeframe"
          className="enquiry__control"
          value={values.timeframe}
          onChange={(e) => setField("timeframe", e.target.value)}
        >
          <option value="">Select if it helps</option>
          {TIMEFRAMES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Spam trap. Never announced, never focusable, never a CAPTCHA
          (WCAG 2.2 SC 3.3.8). */}
      <div className="enquiry__trap" aria-hidden="true">
        <label htmlFor="company-url">Do not fill this in</label>
        <input id="company-url" name="company-url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="enquiry__actions">
        <button className="btn btn--primary" type="submit" disabled={state === "sending"}>
          <span>{state === "sending" ? "Sending…" : "Send this"}</span>
        </button>
        <p className="enquiry__promise">{site.responsePromise.text}</p>
      </div>

      {state === "error" && (
        <p className="enquiry__error-global" role="alert" ref={statusRef} tabIndex={-1}>
          That did not go through. Please try again, or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      )}
    </form>
  );
}

/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  as = "input",
  required,
  ...rest
}) {
  const Control = as;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="enquiry__field" data-invalid={error ? "true" : undefined}>
      <label className="enquiry__label" htmlFor={id}>
        {label}
        {!required && <span className="enquiry__optional">Optional</span>}
      </label>
      {hint && (
        <p className="enquiry__hint" id={hintId}>
          {hint}
        </p>
      )}
      <Control
        id={id}
        name={id}
        className="enquiry__control"
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {error && (
        <p className="enquiry__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * The only seam a production endpoint needs to replace.
 *
 * Intended production shape (see INTEGRATIONS.md):
 *   POST /api/enquiry  → Vercel serverless function → Resend → glenn@…
 *   No submission store, per the confirmed decision in the Master Copy.
 */
async function submitEnquiry(values) {
  if (import.meta.env.DEV) {
    console.info("[enquiry] mocked submission", values);
  }
  await new Promise((resolve) => setTimeout(resolve, 450));
  return { ok: true };
}
