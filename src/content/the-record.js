// @ts-check
import { indexRecordContent, validateRecordContent } from './record-model.js';

export const recordContent = validateRecordContent({
  projects: [
    {
      id: 'wellbeing-studio-2027',
      path: '/work/wellbeing-studio',
      title: 'Wellbeing Studio 2027',
      organisation: 'Corporate Yoga Australia',
      period: '2026–27',
      state: 'Active',
      proposition: 'Redesigning a workplace wellbeing platform around the moments people actually have during a working day, then connecting those useful actions into a service that can continue beyond a single visit.',
      context: 'Wellbeing Studio already operates as a live member experience combining programming, live sessions and an on-demand practice library. The 2027 work reframes that product beyond a content portal and asks how entry, continuity and evidence should behave as one connected service.',
      role: 'Product strategy, experience architecture, UX/UI, learning technology and implementation',
      altitude: 'Product · experience · system',
      trajectory: [
        {
          period: 'Live foundation',
          label: 'A service became a product',
          detail: 'Weekly programming, live sessions and an on-demand library moved into one member experience with repeatable publishing and onboarding workflows.',
        },
        {
          period: '2026',
          label: 'The product was reframed',
          detail: 'The redesign stopped treating the library, live program and campaign experiences as separate destinations and began designing around useful moments in working life.',
        },
        {
          period: '2026',
          label: 'Entry became contextual',
          detail: 'Before Work, During Work and After Work became the primary lens for the Practice Library, with need, practice type and duration remaining available as secondary refinement.',
        },
        {
          period: '2027 direction',
          id: 'connected-service',
          label: 'Useful action becomes continuity',
          detail: 'The next product question is what should happen after a useful action: what the Studio should remember, return to and connect to live human support.',
        },
      ],
      recordIds: ['ws-contextual-entry'],
      placements: [{ surface: 'work', order: 1, role: 'anchor', featured: true }],
    },
    {
      id: 'connect-and-learn',
      path: '/work/connect-and-learn',
      title: 'ISQ Connect & Learn',
      organisation: 'Independent Schools Queensland',
      period: '2024',
      state: 'Completed',
      proposition: 'A professional learning platform migration and more than sixty Storyline course rebuilds carried through the same three-month engagement.',
      context: 'A platform, content estate and production problem that had to be solved together rather than handed from one discipline to the next.',
      role: 'Platform migration, learning architecture and eLearning development',
      altitude: 'Experience · content · platform',
      trajectory: [],
      recordIds: [],
      placements: [{ surface: 'work', order: 2, role: 'anchor' }],
    },
    {
      id: 'casa-ferc',
      path: '/work/casa/flight-examiner-rating',
      title: 'CASA Flight Examiner Rating Course',
      organisation: 'Civil Aviation Safety Authority',
      period: '2015–21',
      state: 'Completed',
      proposition: 'Regulated professional learning designed for people whose work depends on judgement, not recall.',
      context: 'Part of six years designing learning, platforms, production systems and media inside Australia’s aviation safety regulator.',
      role: 'Learning design, interaction design, Storyline development and media production',
      altitude: 'Artefact · experience · system',
      trajectory: [],
      recordIds: [],
      placements: [{ surface: 'work', order: 3, role: 'anchor' }],
    },
    {
      id: 'tafe-pathways',
      path: '/work/tafe-pathways',
      title: 'TAFE Queensland SkillsTech Pathways',
      organisation: 'TAFE Queensland SkillsTech',
      period: '2015',
      state: 'Historical',
      proposition: 'An interactive careers experience designed to support a conversation with a careers adviser rather than replace it.',
      context: 'A facilitator-led platform for Years 8–9 school sessions, using Storyline well beyond a conventional linear module.',
      role: 'Project lead, interaction design and Storyline development',
      altitude: 'Artefact · experience',
      trajectory: [],
      recordIds: [],
      placements: [{ surface: 'work', order: 4, role: 'anchor' }],
    },
  ],
  records: [
    {
      id: 'ws-contextual-entry',
      projectId: 'wellbeing-studio-2027',
      path: '/work/wellbeing-studio/contextual-entry',
      title: 'Designing entry around moments in the working day',
      centre: 'Contextual entry',
      context: 'Wellbeing Studio 2027 · Practice Library',
      happened: 'The Practice Library was reorganised around Before Work, During Work and After Work. A “Right now” prompt surfaces one useful starting point, while need, practice type and duration remain available for deliberate refinement.',
      worthExamining: 'A library can contain excellent material and still create work for the person using it. The design move was to make the current moment the first question, reducing the distance between “I need something” and a practice that fits.',
      tension: 'A conventional content library starts by asking people to browse categories. That is useful when someone knows what they want. It is weaker when they have three minutes between meetings and only know how they feel.',
      move: 'Make day stage the primary lens rather than another filter. Use the local moment to create a believable default, then leave the wider taxonomy available for people who want to browse or plan ahead.',
      making: [
        'Before Work, During Work and After Work form the persistent day-stage structure.',
        '“Right now” surfaces one suggested practice without requiring a filter decision first.',
        'Need, practice type and duration remain secondary refinements rather than disappearing.',
        'The mobile composition keeps the same architecture, recomposed as day-stage tabs, a compact Refine action and a vertical practice list.',
      ],
      evidenceBoundary: 'This Record demonstrates the product decision, the designed interaction and its implementation constraints. It does not claim participant-use, retention or wellbeing outcomes for this interaction.',
      artefactIds: ['ws-daily-wellbeing-journey'],
      evidenceClaimIds: ['ws-live-foundation', 'ws-contextual-intent', 'ws-contextual-implementation'],
      relationships: [
        {
          id: 'ws-entry-led-to-continuity',
          verb: 'led-to',
          label: 'the connected-service model',
          href: '/work/wellbeing-studio#connected-service',
          note: 'Once entry is designed around a useful moment, the next question is what the Studio should remember and return to afterwards.',
        },
      ],
    },
  ],
  artefacts: [
    {
      id: 'ws-daily-wellbeing-journey',
      recordId: 'ws-contextual-entry',
      path: '/work/wellbeing-studio/contextual-entry/daily-wellbeing-journey',
      title: 'Daily wellbeing journey',
      kind: 'Interaction concept',
      provenance: 'Wellbeing Studio Practice Library · Concept C',
      status: 'Designed evidence',
      summary: 'A desktop and mobile interaction model that makes day stage the primary entry point into the Practice Library and keeps need, practice type and duration as secondary refinement.',
      accessibility: 'The inspection below reconstructs the interaction semantically in HTML so the evidence remains understandable without relying on the original visual concept image.',
      evidenceClaimIds: ['ws-contextual-intent', 'ws-contextual-implementation'],
    },
  ],
  evidenceClaims: [
    {
      id: 'ws-live-foundation',
      state: 'implemented',
      claim: 'The existing Wellbeing Studio combines weekly programming, live sessions and an on-demand practice library in one member experience.',
      basis: 'Existing Wellbeing Studio project record and operating-platform evidence.',
      limitation: 'This claim describes the live foundation, not the 2027 contextual-entry redesign.',
    },
    {
      id: 'ws-contextual-intent',
      state: 'intended',
      claim: 'Day stage is the primary lens so a participant can begin from the moment they are in rather than from a content category.',
      basis: 'Practice Library Concept C: Daily Wellbeing Journey.',
      limitation: 'The concept defines the intended interaction; participant behaviour has not been claimed as validated.',
    },
    {
      id: 'ws-contextual-implementation',
      state: 'intended',
      claim: 'The “Right now” state can use the visitor’s local clock, while day-stage tabs and client-side filtering remain compatible with the current Moodle environment.',
      basis: 'Practice Library Concept C implementation notes.',
      limitation: 'The source establishes implementation feasibility, not measured product impact.',
    },
  ],
});

export const recordIndex = indexRecordContent(recordContent);
export const workProjects = [...recordContent.projects].sort(
  (a, b) => a.placements.find((p) => p.surface === 'work').order - b.placements.find((p) => p.surface === 'work').order,
);
export const wellbeingProject = recordIndex.projectById['wellbeing-studio-2027'];
export const contextualEntryRecord = recordIndex.recordById['ws-contextual-entry'];
export const dailyWellbeingArtefact = recordIndex.artefactById['ws-daily-wellbeing-journey'];
export const recordRoutePaths = [
  contextualEntryRecord.path,
  dailyWellbeingArtefact.path,
];

export const evidenceStateLabel = {
  intended: 'Intended',
  implemented: 'Implemented',
  observed: 'Observed',
  validated: 'Validated',
};
