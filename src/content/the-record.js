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
          detail: 'The product model widened from content discovery to a connected service: Action, Return and Explore lead to useful experiences, with human-led activity, campaigns, programs and personal continuity connected only where they add value.',
        },
      ],
      recordIds: ['ws-contextual-entry', 'ws-connected-service'],
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
          href: '/work/wellbeing-studio/connected-service',
          note: 'Once entry is designed around a useful moment, the next question is what the Studio should remember, connect and make available afterwards.',
        },
      ],
    },
    {
      id: 'ws-connected-service',
      projectId: 'wellbeing-studio-2027',
      path: '/work/wellbeing-studio/connected-service',
      title: 'From content portal to connected wellbeing service',
      centre: 'Product reframe',
      context: 'Wellbeing Studio 2027 · Product strategy and experience architecture',
      happened: 'The redesign stopped treating Wellbeing Studio as a set of destinations such as Home, Practice Library, Live and My Studio. Participant situations and journeys were used to derive a behavioural model — Action, Return and Explore — with Useful Experience at the centre and campaigns, programs, human-led experiences and continuity connected around it.',
      worthExamining: 'This was not a navigation tidy-up. Changing the unit of design from pages and content types to useful participant experiences changed what the product is, what deserves persistence, when identity matters and how digital activity connects to CYA’s human service.',
      tension: 'The existing implementation already contained useful pages, navigation and technical infrastructure. Preserving those structures by default would have let the prototype define the product: a familiar content portal with live and personal areas attached.',
      move: 'Start from real working situations, CYA encounters and return behaviour. Let Action minimise the distance to something useful, Return make trusted experiences easy to retrieve, and Explore support deliberate browsing without organising the whole product around a catalogue.',
      making: [
        'Action, Return and Explore became behavioural modes rather than proposed navigation labels.',
        'Useful Experience became the centre of participant value; a successful journey may legitimately end there.',
        'Human-led and digital experiences were placed inside one CYA service ecosystem rather than treated as separate channels.',
        'Campaigns, programs and physical CYA encounters became contextual entry conditions capable of deep-linking into the same product.',
        'Continuity was made proportionate and earned: recent, saved, practitioner, live and program relationships matter only where they create participant value.',
        'Authentication was reframed as an interruption that must preserve original intent rather than a destination participants should be sent to.',
      ],
      evidenceBoundary: 'This Record supports the adopted product and experience architecture and the reasoning that produced it. It does not claim that the full connected-service model has been implemented or validated with participants; those remain separate evidence questions.',
      artefactIds: ['ws-connected-service-map'],
      evidenceClaimIds: ['ws-service-layer-definition', 'ws-action-return-explore', 'ws-human-connected', 'ws-earned-continuity'],
      relationships: [],
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
    {
      id: 'ws-connected-service-map',
      recordId: 'ws-connected-service',
      path: '/work/wellbeing-studio/connected-service/relationship-model',
      title: 'Connected service relationship model',
      kind: 'Product architecture',
      provenance: 'WS27 Experience Architecture · Product Blueprint v1',
      status: 'Architectural evidence',
      summary: 'A non-linear product model showing how real working situations and CYA encounters enter through Action, Return or Explore, resolve in a Useful Experience, and connect to human-led activity, campaigns, programs or personal continuity only when useful.',
      accessibility: 'The model is reconstructed as ordered semantic groups rather than a flattened diagram image, preserving its relationships for keyboard, enlarged-text and assistive-technology use.',
      evidenceClaimIds: ['ws-service-layer-definition', 'ws-action-return-explore', 'ws-human-connected', 'ws-earned-continuity'],
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
    {
      id: 'ws-service-layer-definition',
      state: 'intended',
      claim: 'Wellbeing Studio 2027 is defined as CYA’s digital service layer for connecting people with useful wellbeing experiences from real working-life situations, CYA encounters and ongoing service relationships.',
      basis: 'WS27 Product Blueprint v1 and consolidated Interaction Architecture.',
      limitation: 'This is the adopted product architecture; it does not assert that every experience family is already implemented.',
    },
    {
      id: 'ws-action-return-explore',
      state: 'intended',
      claim: 'Action, Return and Explore are the core behavioural modes, with Useful Experience at the centre rather than a conventional content catalogue or dashboard.',
      basis: 'WS27 Phase 2 discovery, Phase 3A information architecture and Product Blueprint v1.',
      limitation: 'The model is architectural product evidence, not participant-validation evidence.',
    },
    {
      id: 'ws-human-connected',
      state: 'intended',
      claim: 'Digital practices, human-led experiences, workplace delivery, campaigns and programs belong to one connected CYA service ecosystem.',
      basis: 'WS27 Phase 2 and Phase 3A product strategy and experience architecture.',
      limitation: 'The architecture establishes the intended relationship; implementation maturity varies by experience.',
    },
    {
      id: 'ws-earned-continuity',
      state: 'intended',
      claim: 'Continuity is useful only when it creates participant value; successful journeys may end without forcing sign-in, progress, follow-up or a dashboard state.',
      basis: 'WS27 Interaction Architecture and Product Blueprint continuity principles.',
      limitation: 'Specific continuity mechanics remain subject to product-slice implementation and participant validation.',
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
export const connectedServiceRecord = recordIndex.recordById['ws-connected-service'];
export const connectedServiceArtefact = recordIndex.artefactById['ws-connected-service-map'];
export const wellbeingRecords = wellbeingProject.recordIds.map((id) => recordIndex.recordById[id]);
export const recordRoutePaths = [
  ...recordContent.records.map((record) => record.path),
  ...recordContent.artefacts.map((artefact) => artefact.path),
];

export const evidenceStateLabel = {
  intended: 'Intended',
  implemented: 'Implemented',
  observed: 'Observed',
  validated: 'Validated',
};
