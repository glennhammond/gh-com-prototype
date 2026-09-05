import { useRef, useState } from "react";
import { site } from "../content/site.js";
import { validateForm, validateField, hasErrors, errorSummary } from "../lib/validation.js";
import "./EnquiryForm.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdnpnrp";

const EMPTY = {
  name: "",
  organisation: "",
  email: "",
  message: "",
  timeframe: "",
  layers: [],
};

const PROBLEM_AREAS = [
  { id: "product-experience", name: "Product / experience" },
  { id: "learning-content", name: "Learning / content" },
  { id: "platform-technology", name: "Platform / technology" },
  { id: "production-operations", name: "Production / operations" },
];

const TIMEFRAMES = [
  "Not sure yet",
  "Exploring for next budget cycle",
  "Within three months",
  "Within a month",
  "Already underway",
];

/**
 * Production enquiry form.
 *
 * Name, email and message are the only required information. Organisation,
 * problem area and timeframe can add useful context but should never block a
 * conversation. Formspree handles delivery; validation and focus management
 * remain local so errors are clear and accessible.
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState("idle");
  const summaryRef = useRef(null);
  const statusRef = useRef(null);

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
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

  const toggleArea = (id) => {
    setValues((v) => ({
      ...v,
      layers: v.layers.includes(id)
        ? v.layers.filter((item) => item !== id)
        : [...v.layers, id],
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    const found = validateForm(values);
    setErrors(found);

    if (hasErrors(found)) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const formData = new FormData(event.currentTarget);
    setState("sending");

    try {
      await submitEnquiry(formData);
      setState("sent");
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setState("error");
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  };

  if (state === "sent") {
    return (
      <div className="enquiry__done" ref={statusRef} tabIndex={-1} role="status">
        <h2 className="display-m">Thanks — your message has been sent.</h2>
      </div>
    );
  }

  return (
    <form
      className="enquiry"
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      noValidate
    >
      {submitted && hasErrors(errors) && (
        <div className="enquiry__summary" ref={summaryRef} tabIndex={-1} role="alert">
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
        value={values.organisation}
        error={errors.organisation}
        onChange={setField}
        autoComplete="organization"
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
          Optional. Choose more than one if it crosses boundaries; guessing is fine.
        </p>
        <div className="enquiry__layer-options" aria-describedby="layers-hint">
          {PROBLEM_AREAS.map((area) => (
            <label key={area.id} className="enquiry__layer">
              <input
                type="checkbox"
                name="layers"
                value={area.id}
                checked={values.layers.includes(area.id)}
                onChange={() => toggleArea(area.id)}
              />
              <span className="enquiry__layer-name">{area.name}</span>
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
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="enquiry__trap" aria-hidden="true">
        <label htmlFor="formspree-gotcha">Do not fill this in</label>
        <input
          id="formspree-gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="enquiry__actions">
        <button className="btn btn--primary" type="submit" disabled={state === "sending"}>
          <span>{state === "sending" ? "Sending…" : "Send this"}</span>
        </button>
      </div>

      <p className="small">
        Formspree handles delivery of this enquiry. See the{" "}
        <a href="/privacy">privacy page</a> for how submitted information is handled.
      </p>

      {state === "error" && (
        <p className="enquiry__error-global" role="alert" ref={statusRef} tabIndex={-1}>
          That did not go through. Please try again, or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  as = "input",
  required = false,
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
        <p className="enquiry__hint" id={hintId}>{hint}</p>
      )}
      <Control
        id={id}
        name={id}
        className="enquiry__control"
        value={value}
        required={required}
        aria-required={required ? "true" : undefined}
        onChange={(e) => onChange(id, e.target.value)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {error && (
        <p className="enquiry__error" id={errorId}>{error}</p>
      )}
    </div>
  );
}

async function submitEnquiry(formData) {
  formData.set("_subject", "New enquiry from glennhammond.com");
  formData.set("source", "glennhammond.com/contact");

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const reason = payload?.errors
      ?.map((error) => error?.message)
      .filter(Boolean)
      .join(" ");
    throw new Error(reason || "The enquiry could not be delivered.");
  }

  return payload ?? { ok: true };
}
