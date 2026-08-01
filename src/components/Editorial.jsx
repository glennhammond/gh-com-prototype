import "./Editorial.css";

/**
 * Editorial placeholders — v3.2.
 *
 * <Prose> renders body copy and highlights anything in square brackets as an
 * editorial placeholder. Nothing else in the content uses square brackets, so
 * the marker is unambiguous.
 *
 * The per-page "still to confirm" review list (formerly rendered by a <Gaps>
 * component here) is no longer part of the public interface. Each project
 * record still carries a `gaps` array as internal review data — see
 * GAPS.md — it is simply not rendered. `verify.mjs` still fails the build if
 * a bracketed placeholder survives into a production build.
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
