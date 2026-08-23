import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import MetaFrame from './MetaFrame.jsx';
import Footer from './Footer.jsx';
import '../styles/global.css';
import './Layout.css';

const scrollPositions = new Map();

function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const key = location.key;
    return () => {
      scrollPositions.set(key, { x: window.scrollX, y: window.scrollY });
    };
  }, [location.key]);

  useEffect(() => {
    const restoreId = location.state?.restoreFocusId;
    const hashId = location.hash ? decodeURIComponent(location.hash.slice(1)) : null;

    let outerFrame = 0;
    let innerFrame = 0;

    outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => {
        if (navigationType === 'POP') {
          const position = scrollPositions.get(location.key);
          if (position) {
            window.scrollTo({ left: position.x, top: position.y, behavior: 'auto' });
            return;
          }
        }

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

        if (navigationType !== 'POP') {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          document.getElementById('main')?.focus({ preventScroll: true });
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
    };
  }, [location.hash, location.key, location.state, navigationType]);

  return null;
}

export default function Layout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">Skip to main content</a>
      <RouteEffects />
      <MetaFrame />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
