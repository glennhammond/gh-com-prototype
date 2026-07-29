import { layerById } from "../content/layers.js";
import "./LayerMark.css";

/**
 * The layer identity token — Blueprint §9, §19, §23.
 *
 * Colour is never the only signal. Every mark carries the numeral, and the
 * name is either visible or supplied to assistive technology. This is the
 * component that keeps the layer system on the right side of WCAG 1.4.1.
 *
 * @param {"full"|"compact"|"dot"} variant
 */
export default function LayerMark({ id, variant = "full", as: Tag = "span" }) {
  const layer = layerById[id];
  if (!layer) return null;

  return (
    <Tag
      className={`layer-mark layer-mark--${variant}`}
      style={{ "--layer": `var(${layer.token})` }}
      data-layer={layer.id}
    >
      <span className="layer-mark__rule" aria-hidden="true" />
      <span className="layer-mark__num">{layer.number}</span>
      {variant === "dot" ? (
        <span className="visually-hidden">
          Layer {layer.number}, {layer.name}
        </span>
      ) : (
        <span className="layer-mark__name">{layer.name}</span>
      )}
    </Tag>
  );
}

/**
 * A row of layer marks showing the span of a project. Reads as a list to
 * assistive technology so the count is announced.
 */
export function LayerSpan({ ids, label = "Layers covered", variant = "compact" }) {
  return (
    <ul className="layer-span" aria-label={label}>
      {ids.map((id) => (
        <li key={id}>
          <LayerMark id={id} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
