import "./Editorial.css";

/**
 * Editorial placeholders — V3.
 *
 * This prototype is a review artefact, and the single most useful thing it can
 * do is make its own gaps impossible to miss. Two mechanisms:
 *
 *   <Prose>  renders body copy and highlights anything in square brackets as
 *            an editorial placeholder. Nothing else in the content uses square
 *            brackets, so the marker is unambiguous.
 *
 *   <Gaps>   a per-page panel listing everything that must be confirmed before
 *            the page can be published.
 *
 * Both are deliberately visible rather than hidden behind a flag. A missing
 * fact that only shows up in a build log is a missing fact that never gets
 * filled in.
 *
 * Before launch: remove both components and the copy they mark. `verify.mjs`
 * fails the build if a placeholder survives into a production build.
 */

const BRACKETED = /(\[[^\]]+\])/g;

/** Splits a string on bracketed placeholders and marks them up. */
export function marked(text) {
  if (typeof text !== "string" || !text.includes("[")) return text;
  return text.split(BRACKETED).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <mark className="ph-mark" key={i}>
        <span className="visually-hidden">Editorial placeholder: </span>
        {part.slice(1, -1)}
      </mark>
    ) : (
      part
    )
  );
}

/** A paragraph that understands placeholders. */
export function Prose({ children, className = "" }) {
  return <p className={className}>{marked(children)}</p>;
}

/**
 * The unresolved facts for one page.
 *
 * Rendered as a real <section> with a heading so it appears in the document
 * outline and a screen-reader user meets it in the same place a sighted
 * reviewer does.
 */
export function Gaps({ items, id = "gaps" }) {
  if (!items?.length) return null;
  return (
    <section className="gaps" aria-labelledby={id}>
      <h2 id={id} className="gaps__title">
        <span className="gaps__tag">Review</span>
        Still to confirm before this page is published
      </h2>
      <p className="gaps__lede">
        {items.length} {items.length === 1 ? "item" : "items"}. Nothing on this
        page asserts a fact that is not in a supplied source; where a fact is
        missing it is marked rather than invented.
      </p>
      <ol className="gaps__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

/**
 * A short attribution or provenance caveat, sitting inside the argument rather
 * than in a footnote. Used where an image or a claim needs a qualifier that a
 * reader must see at the same moment as the thing it qualifies.
 */
export function EvidenceNote({ children }) {
  return (
    <aside className="evnote">
      <p className="evnote__label">Evidence note</p>
      <p className="evnote__body">{marked(children)}</p>
    </aside>
  );
}
