import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import { nav, navCta } from "../content/site.js";
import "./Header.css";

/**
 * Site header for retained/legacy routes.
 *
 * Glenn Hammond is the permanent identity. Route context and page content do
 * the explanatory work; the header does not attach a service descriptor or a
 * second brand to the name.
 *
 * Under 900px this collapses to a disclosure panel. With JavaScript
 * unavailable the toggle is hidden and the full nav is shown, so navigation
 * never depends on hydration.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-open={open || undefined}>
      <div className="site-header__inner container">
        <Link className="site-header__brand" to="/" aria-label="Glenn Hammond, home">
          <Wordmark className="site-header__mark" />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id={panelId}
          className="site-nav"
          aria-label="Primary"
          data-open={open || undefined}
        >
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "site-nav__link is-current" : "site-nav__link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to={navCta.href} className="site-nav__cta">
                {navCta.label}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
