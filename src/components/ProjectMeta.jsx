import { marked } from "./Editorial.jsx";
import "./ProjectMeta.css";

/**
 * Project metadata bar and the "In 60 seconds" brief.
 *
 * Both are definition lists because that is what they are: a set of labelled
 * facts. Using <dl> means a screen-reader user gets the label with the value
 * instead of a run of disconnected strings, and it survives the responsive
 * reflow from a row to a stack without changing meaning.
 *
 * Values understand editorial placeholders, so an unconfirmed platform reads
 * as a marked gap rather than as a blank.
 */

export function MetaBar({ items }) {
  if (!items?.length) return null;
  return (
    <dl className="metabar">
      {items.map((item) => (
        <div key={item.label} className="metabar__item">
          <dt>{item.label}</dt>
          <dd>{marked(item.value)}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * The scanning panel. A buyer who reads nothing else should still leave with
 * the problem, the role, the scope, the result and the stack.
 */
export function Brief({ brief, id = "brief" }) {
  if (!brief) return null;
  const rows = [
    ["The problem", brief.problem],
    ["My role", brief.role],
    ["Scope", brief.scope],
    ["Where it got to", brief.outcome],
  ].filter(([, value]) => value);

  return (
    <section className="brief" aria-labelledby={id}>
      <h2 id={id} className="brief__title">
        In 60 seconds
      </h2>
      <dl className="brief__grid">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{marked(value)}</dd>
          </div>
        ))}
        {brief.stack && (
          <div className="brief__stack">
            <dt>Built with</dt>
            <dd>{marked(brief.stack)}</dd>
          </div>
        )}
      </dl>
    </section>
  );
}

/**
 * Outcomes, stated as a list with an explicit note about what is NOT claimed.
 * The note is not a disclaimer; on a portfolio whose proposition is judgement,
 * saying which numbers you do not have is itself evidence.
 */
export function Outcomes({ outcomes, title = "Where it got to", id = "outcomes" }) {
  if (!outcomes) return null;
  return (
    <section className="case__part" aria-labelledby={id}>
      <h2 id={id} className="case__part-title">
        {title}
      </h2>
      <ul className="case__list">
        {outcomes.items.map((o) => (
          <li key={o}>{marked(o)}</li>
        ))}
      </ul>
      {outcomes.note && <p className="case__note">{outcomes.note}</p>}
    </section>
  );
}

/**
 * Key design decisions. Lighter than the flagship's three-part decision log:
 * a choice and a reason, without the cost line, for projects where the
 * trade-off is not documented and inventing one would be fiction.
 */
export function Decisions({ decisions, id = "decisions" }) {
  if (!decisions?.length) return null;
  return (
    <section className="decisions" aria-labelledby={id}>
      <div className="container">
        <h2 id={id} className="display-m">
          Key design decisions
        </h2>
        <ol className="decisions__list">
          {decisions.map((d, i) => (
            <li key={d.title} className="decisions__item">
              <span className="decisions__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="decisions__heading">{d.title}</h3>
                <dl className="decisions__detail">
                  <dt>The choice</dt>
                  <dd>{marked(d.choice)}</dd>
                  <dt>Why</dt>
                  <dd>{marked(d.why)}</dd>
                  {d.tradeoff && (
                    <>
                      <dt>What it cost</dt>
                      <dd>{marked(d.tradeoff)}</dd>
                    </>
                  )}
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
