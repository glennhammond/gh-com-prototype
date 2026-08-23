import Layout from './components/Layout.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * THE RECORD production integration.
 *
 * Home, canonical evidence and retained knowledge are statically rendered.
 * Legacy case-study records remain lazy migration routes so the old content
 * estate stays out of the route-independent client bootstrap.
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

      // ISQ Connect & Learn: Project → Record → Artefact.
      {
        path: 'work/connect-and-learn',
        lazy: () => import('./routes/ConnectRecordProjectRoute.jsx'),
      },
      {
        path: 'work/connect-and-learn/concurrent-migration',
        lazy: () => import('./routes/ConnectMigrationRecordRoute.jsx'),
      },
      {
        path: 'work/connect-and-learn/concurrent-migration/dependency-map',
        lazy: () => import('./routes/ConnectDependencyArtefactRoute.jsx'),
      },

      // TAFE Queensland SkillsTech: historical Project → Record → Artefact.
      {
        path: 'work/tafe-pathways',
        lazy: () => import('./routes/TafeRecordProjectRoute.jsx'),
      },
      {
        path: 'work/tafe-pathways/supporting-conversation',
        lazy: () => import('./routes/TafeConversationRecordRoute.jsx'),
      },
      {
        path: 'work/tafe-pathways/supporting-conversation/exploration-environment',
        lazy: () => import('./routes/TafeConversationArtefactRoute.jsx'),
      },

      // Historical project routes remain available during migration.
      { path: 'work/:slug', lazy: () => import('./routes/LegacyTopLevelRoute.jsx') },
      { path: 'work/casa/:slug', lazy: () => import('./routes/LegacyCasaRoute.jsx') },

      { path: 'practice', lazy: () => import('./routes/PracticeRoute.jsx') },

      // Retained standalone knowledge. These are deliberately not a blog
      // hierarchy; each URL must independently earn preservation/indexability.
      {
        path: 'principles-of-assessment-and-rules-of-evidence',
        lazy: () => import('./routes/AssessmentPrinciplesRoute.jsx'),
      },

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
