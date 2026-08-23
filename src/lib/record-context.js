import {
  contextualEntryRecord,
  dailyWellbeingArtefact,
  wellbeingProject,
} from '../content/the-record.js';

export function getRecordContext(pathname) {
  if (pathname === '/work') {
    return { resolution: 'work', subject: 'Work' };
  }
  if (pathname === wellbeingProject.path) {
    return {
      resolution: 'project',
      subject: wellbeingProject.title,
      contextHref: '/work',
      contextLabel: 'Work',
    };
  }
  if (pathname === contextualEntryRecord.path) {
    return {
      resolution: 'record',
      subject: contextualEntryRecord.title,
      contextHref: wellbeingProject.path,
      contextLabel: wellbeingProject.title,
    };
  }
  if (pathname === dailyWellbeingArtefact.path) {
    return {
      resolution: 'artefact',
      subject: dailyWellbeingArtefact.title,
      contextHref: contextualEntryRecord.path,
      contextLabel: contextualEntryRecord.title,
    };
  }
  if (pathname.startsWith('/work/')) {
    return { resolution: 'legacy-work', subject: 'Work' };
  }
  return null;
}
