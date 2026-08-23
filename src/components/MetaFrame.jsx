import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Wordmark from './Wordmark.jsx';
import { nav, navCta } from '../content/site.js';
import { getRecordContext } from '../lib/record-context.js';
import './MetaFrame.css';

export default function MetaFrame() {
  const location = useLocation();
  const context = getRecordContext(location.pathname);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const artefact = context?.resolution === 'artefact';

  return (
    <header className={`meta-frame${artefact ? ' meta-frame--inspection' : ''}`}>
      <div className="container meta-frame__resident">
        <Link className="meta-frame__identity" to="/" aria-label="Glenn Hammond, home">
          <Wordmark />
          <span className="meta-frame__record">THE RECORD</span>
        </Link>

        <button
          ref={toggleRef}
          className="meta-frame__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="meta-frame-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="meta-frame-nav"
          className={`meta-frame__nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `meta-frame__nav-link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="meta-frame__contact" to={navCta.href}>
            {navCta.label}
          </NavLink>
        </nav>
      </div>

      {context && context.resolution !== 'legacy-work' && (
        <div className={`meta-frame__scope meta-frame__scope--${context.resolution}`} aria-label="Current scope">
          <div className="container meta-frame__scope-inner">
            {context.contextHref ? (
              <Link className="meta-frame__context" to={context.contextHref}>
                {context.contextLabel}
              </Link>
            ) : (
              <span className="meta-frame__context">THE RECORD</span>
            )}
            <span className="meta-frame__subject" aria-current="page">
              {context.subject}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
