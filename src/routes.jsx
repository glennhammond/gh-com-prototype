import Layout from './components/Layout.jsx';
import Work from './pages/Work.jsx';
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

      // THE RECORD: canonical Project → Record → Artefact routes.
      // Detail surfaces are lazy route modules so evidence-specific code stays
      // out of the route-independent bootstrap while SSG still pre-renders them.
      { path: 'work/wellbeing-studio', lazy: () => import('./routes/WellbeingProjectRoute.jsx') },
      { path: 'work/wellbeing-studio/contextual-entry', lazy: () => import('./routes/ContextualEntryRecordRoute.jsx') },
      {
        path: 'work/wellbeing-studio/contextual-entry/daily-wellbeing-journey',
        lazy: () => import('./routes/DailyWellbeingArtefactRoute.jsx'),
      },
      {
        path: 'work/wellbeing-studio/connected-service',
        lazy: () => import('./routes/ConnectedServiceRecordRoute.jsx'),
      },
      {
        path: 'work/wellbeing-studio/connected-service/relationship-model',
        lazy: () => import('./routes/ConnectedServiceArtefactRoute.jsx'),
      },
      {
        path: 'work/wellbeing-studio/ruok-production-slice',
        lazy: () => import('./routes/RuokProductionRecordRoute.jsx'),
      },
      {
        path: 'work/wellbeing-studio/ruok-production-slice/qualification-map',
        lazy: () => import('./routes/RuokQualificationArtefactRoute.jsx'),
      },

      // CASA: first non-WS THE RECORD territory.
      {
        path: 'work/casa/flight-examiner-rating',
        lazy: () => import('./routes/CasaRecordProjectRoute.jsx'),
      },
      {
        path: 'work/casa/flight-examiner-rating/examiner-judgement',
        lazy: () => import('./routes/CasaJudgementRecordRoute.jsx'),
      },
      {
        path: 'work/casa/flight-examiner-rating/examiner-judgement/assessment-reasoning',
        lazy: () => import('./routes/CasaJudgementArtefactRoute.jsx'),
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
