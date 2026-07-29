import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import { nav, navCta, site } from "../content/site.js";
import "./Header.css";

/**
 * Site header — Blueprint §11.
 *
 * Wordmark left; Work, Practice, About right; "Start a conversation" as a
 * bordered link rather than a filled button, because a filled CTA in a
 * practice header reads as a funnel.
 *
 * Under 900px this collapses to a disclosure panel. Four items do not warrant
 * a hamburger on tablet, so the breakpoint is deliberately low. With
 * JavaScript unavailable the toggle is hidden and the full nav is shown —
 * navigation never depends on hydration.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  // Close on route change so the panel never persists across a navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes and returns focus to the control that opened it.
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
        <Link className="site-header__brand" to="/">
          <Wordmark className="site-header__mark" />
          <span className="site-header__descriptor" aria-hidden="true">
            {site.descriptor}
          </span>
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
