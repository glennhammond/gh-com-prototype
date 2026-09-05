import { indexRecordContent } from './record-model.js';
import { recordContent as baseRecordContent } from './the-record.js';

/**
 * Public renewal layer.
 *
 * The original evidence model used an ISQ-specific title and route for the
 * eLearning Design System. Glenn confirmed in September 2026 that the system
 * began in 2024 as a neutral body of work: ISQ is a major implementation
 * context, not the owner of the core system. This module corrects that public
 * authority without rewriting the historical evidence ledger in place.
 */
const baseDesignSystem = baseRecordContent.projects.find(
  (project) => project.id === 'isq-elearning-design-system',
);

export const elearningDesignSystemProject = {
  ...(baseDesignSystem ?? {}),
  id: 'isq-elearning-design-system',
  path: '/work/elearning-design-system',
  title: 'eLearning Design System',
  organisation: 'Independent practice',
  period: '2024–',
  state: 'Active',
  proposition:
    'An operational system connecting learning patterns, visual foundations, reusable components, platform implementation, accessibility, governance and learning-data design.',
  context:
    'Started in 2024 as a neutral eLearning system rather than an ISQ-owned design system. ISQ is a major production implementation: its branding, Rise patterns and delivery constraints consume the core system without defining the system itself.',
  role: 'System strategy, learning design, UX/UI, front-end development and governance',
  altitude: 'Experience · content · system',
  recordIds: [],
  placements: baseDesignSystem?.placements ?? [
    { surface: 'work', order: 3, role: 'anchor' },
  ],
};

export const recordContent = {
  ...baseRecordContent,
  projects: baseRecordContent.projects.map((project) =>
    project.id === elearningDesignSystemProject.id ? elearningDesignSystemProject : project,
  ),
};

export const recordIndex = indexRecordContent(recordContent);
export const workProjects = [...recordContent.projects].sort(
  (a, b) =>
    a.placements.find((p) => p.surface === 'work').order -
    b.placements.find((p) => p.surface === 'work').order,
);

export const recordRoutePaths = [
  ...recordContent.records.map((record) => record.path),
  ...recordContent.artefacts.map((artefact) => artefact.path),
];
