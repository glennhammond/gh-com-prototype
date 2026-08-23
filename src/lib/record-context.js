import { recordContent, recordIndex } from '../content/the-record.js';

const projectByPath = new Map(recordContent.projects.map((project) => [project.path, project]));
const recordByPath = new Map(recordContent.records.map((record) => [record.path, record]));
const artefactByPath = new Map(recordContent.artefacts.map((artefact) => [artefact.path, artefact]));

/**
 * Resolve THE RECORD scope from the canonical content model.
 *
 * This deliberately derives parentage from Project → Record → Artefact data
 * rather than maintaining a second route hierarchy inside the Meta-Frame.
 * Direct entry therefore receives the same widening context as internal
 * navigation, and adding evidence to the model does not require another
 * hand-authored path table here.
 */
export function getRecordContext(pathname) {
  if (pathname === '/work') {
    return { resolution: 'work', subject: 'Work' };
  }

  const project = projectByPath.get(pathname);
  if (project) {
    return {
      resolution: 'project',
      subject: project.title,
      contextHref: '/work',
      contextLabel: 'Work',
    };
  }

  const record = recordByPath.get(pathname);
  if (record) {
    const parentProject = recordIndex.projectById[record.projectId];
    return {
      resolution: 'record',
      subject: record.title,
      contextHref: parentProject.path,
      contextLabel: parentProject.title,
    };
  }

  const artefact = artefactByPath.get(pathname);
  if (artefact) {
    const parentRecord = recordIndex.recordById[artefact.recordId];
    return {
      resolution: 'artefact',
      subject: artefact.title,
      contextHref: parentRecord.path,
      contextLabel: parentRecord.title,
    };
  }

  if (pathname.startsWith('/work/')) {
    return { resolution: 'legacy-work', subject: 'Work' };
  }

  return null;
}
