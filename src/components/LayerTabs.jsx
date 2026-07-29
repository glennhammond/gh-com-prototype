import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { layers } from "../content/layers.js";
import Icon from "./Icon.jsx";
import { projects } from "../content/projects.js";
import "./LayerTabs.css";

const WIDE = "(min-width: 900px)";

/**
 * Layer tabs — Blueprint §20.
 *
 * Used on /practice, where each layer carries enough content to justify
 * hiding three of four. On the homepage all four are shown at once instead;
 * see pages/home/FourLayers.jsx.
 *
 * Three behaviours from one piece of markup, with no hydration flash:
 *
 *   desktop + JS   a full ARIA tab set. Arrow keys move, Home/End jump,
 *                  Enter and Space activate, the panel is focusable.
 *   small screens  every panel is shown, stacked. The framework is never
 *                  hidden behind a tap on the device where most first
 *                  visits happen.
 *   no JavaScript  the tablist is hidden and every panel is shown.
 *
 * Visibility is driven by CSS from a `data-selected` attribute that is present
 * in the static HTML, so the correct panel is painted on the first frame. The
 * ARIA roles are attached after mount, and only when the tab behaviour is
 * actually available — a tabpanel with no reachable tab would be worse than
 * no roles at all.
 */
/**
 * @param {number} level heading level for each panel title. Defaults to 2 so
 *   the component sits directly under a page h1 without skipping a level.
 */
export default function LayerTabs({ level = 2 }) {
  const PanelHeading = `h${level}`;
  const SubHeading = `h${level + 1}`;
  const [active, setActive] = useState(layers[0].id);
  const [tabsActive, setTabsActive] = useState(false);
  const tabRefs = useRef({});

  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const sync = () => setTabsActive(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onKeyDown = (event) => {
    const order = layers.map((l) => l.id);
    const i = order.indexOf(active);
    let next = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = order[(i + 1) % order.length];
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = order[(i - 1 + order.length) % order.length];
        break;
      case "Home":
        next = order[0];
        break;
      case "End":
        next = order[order.length - 1];
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="layer-tabs">
      <div
        className="layer-tabs__list"
        role={tabsActive ? "tablist" : undefined}
        aria-label={tabsActive ? "The four layers" : undefined}
        aria-orientation={tabsActive ? "horizontal" : undefined}
        onKeyDown={tabsActive ? onKeyDown : undefined}
      >
        {layers.map((layer) => {
          const selected = layer.id === active;
          return (
            <button
              key={layer.id}
              type="button"
              ref={(el) => (tabRefs.current[layer.id] = el)}
              id={`tab-${layer.id}`}
              className="layer-tabs__tab"
              style={{ "--layer": `var(${layer.token})` }}
              role={tabsActive ? "tab" : undefined}
              aria-selected={tabsActive ? selected : undefined}
              aria-controls={tabsActive ? `panel-${layer.id}` : undefined}
              tabIndex={tabsActive && !selected ? -1 : 0}
              data-selected={selected || undefined}
              onClick={() => setActive(layer.id)}
            >
              <span className="layer-tabs__bar" aria-hidden="true" />
              <Icon name={layer.icon} size={16} className="layer-tabs__icon" />
              <span className="layer-tabs__num">{layer.number}</span>
              <span>{layer.name}</span>
            </button>
          );
        })}
      </div>

      <div className="layer-tabs__panels">
        {layers.map((layer) => {
          const related = projects.filter((p) => p.layers.includes(layer.id));
          return (
            <section
              key={layer.id}
              id={layer.id}
              className="layer-tabs__panel"
              style={{ "--layer": `var(${layer.token})` }}
              data-selected={layer.id === active || undefined}
              role={tabsActive ? "tabpanel" : undefined}
              aria-labelledby={
                tabsActive ? `tab-${layer.id}` : `heading-${layer.id}`
              }
              tabIndex={tabsActive ? 0 : undefined}
            >
              <PanelHeading
                id={`heading-${layer.id}`}
                className="layer-tabs__title"
              >
                <Icon name={layer.icon} size={24} className="layer-tabs__title-icon" />
                <span className="layer-tabs__title-num">{layer.number}</span>
                {layer.name}
              </PanelHeading>

              <div className="layer-tabs__grid">
                <div>
                  <p className="layer-tabs__what">{layer.what}</p>
                  <p className="layer-tabs__fails">
                    <span className="layer-tabs__label">How it fails</span>
                    {layer.fails}
                  </p>
                  <p className="layer-tabs__brings">
                    <span className="layer-tabs__label">What I bring</span>
                    {layer.brings}
                  </p>
                </div>

                <div>
                  <SubHeading className="layer-tabs__label">
                    Typical work
                  </SubHeading>
                  <ul className="layer-tabs__caps">
                    {layer.capabilities.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>

                  {related.length > 0 && (
                    <>
                      <SubHeading className="layer-tabs__label layer-tabs__label--spaced">
                        Where you can see it
                      </SubHeading>
                      <ul className="layer-tabs__related">
                        {related.map((p) => (
                          <li key={p.slug}>
                            <Link to={p.path}>{p.title}</Link>
                            <span> — {p.clientName}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
