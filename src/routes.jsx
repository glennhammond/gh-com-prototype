import Layout from './components/Layout.jsx';
import Work from './pages/Work.jsx';
import RecordProject from './pages/RecordProject.jsx';
import RecordPage from './pages/RecordPage.jsx';
import ArtefactPage from './pages/ArtefactPage.jsx';
import ConnectedServiceRecord from './pages/ConnectedServiceRecord.jsx';
import ConnectedServiceArtefact from './pages/ConnectedServiceArtefact.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * THE RECORD production integration.
 *
 * Home and legacy case-study records are lazy route modules. This keeps the
 * legacy projects.js content estate out of the route-independent client
 * bootstrap while preserving static rendering through vite-react-ssg.
 */
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, lazy: () => import('./routes/HomeRoute.jsx') },
      { path: 'work', element: <Work /> },

      // THE RECORD: explicit canonical Project → Record → Artefact routes.
      { path: 'work/wellbeing-studio', element: <RecordProject /> },
      { path: 'work/wellbeing-studio/contextual-entry', element: <RecordPage /> },
      {
        path: 'work/wellbeing-studio/contextual-entry/daily-wellbeing-journey',
        element: <ArtefactPage />,
      },
      {
        path: 'work/wellbeing-studio/connected-service',
        element: <ConnectedServiceRecord />,
      },
      {
        path: 'work/wellbeing-studio/connected-service/relationship-model',
        element: <ConnectedServiceArtefact />,
      },

      // Historical project routes remain available during migration.
      { path: 'work/:slug', lazy: () => import('./routes/LegacyTopLevelRoute.jsx') },
      { path: 'work/casa/:slug', lazy: () => import('./routes/LegacyCasaRoute.jsx') },

      { path: 'practice', lazy: () => import('./routes/PracticeRoute.jsx') },

      // Legacy service/about routes remain addressable pending Go-Live SEO
      // qualification, but are no longer part of the public global IA.
      { path: 'services/rise-design-systems', lazy: () => import('./routes/RiseRoute.jsx') },
      { path: 'services/storyline-development', lazy: () => import('./routes/StorylineRoute.jsx') },
      { path: 'about', lazy: () => import('./routes/AboutRoute.jsx') },

      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
