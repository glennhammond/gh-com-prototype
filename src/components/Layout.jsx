import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import MetaFrame from './MetaFrame.jsx';
import Footer from './Footer.jsx';

function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'auto';
  }, []);

  useEffect(() => {
    if (navigationType === 'POP') return;

    const restoreId = location.state?.restoreFocusId;
    const hashId = location.hash ? decodeURIComponent(location.hash.slice(1)) : null;
    const frame = window.requestAnimationFrame(() => {
      if (restoreId) {
        const target = document.getElementById(restoreId);
        if (target) {
          target.focus({ preventScroll: false });
          return;
        }
      }

      if (hashId) {
        const target = document.getElementById(hashId);
        if (target) {
          target.focus?.({ preventScroll: false });
          target.scrollIntoView({ block: 'start', behavior: 'auto' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.getElementById('main')?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.key, location.state, navigationType]);

  return null;
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <RouteEffects />
      <MetaFrame />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
