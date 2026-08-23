import {
  casaJudgementArtefact,
  casaJudgementRecord,
  casaProject,
  connectedServiceArtefact,
  connectedServiceRecord,
  ruokProductionArtefact,
  ruokProductionRecord,
  tafeConversationArtefact,
  tafeConversationRecord,
  tafeProject,
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
  if (pathname === connectedServiceRecord.path) {
    return {
      resolution: 'record',
      subject: connectedServiceRecord.title,
      contextHref: wellbeingProject.path,
      contextLabel: wellbeingProject.title,
    };
  }
  if (pathname === connectedServiceArtefact.path) {
    return {
      resolution: 'artefact',
      subject: connectedServiceArtefact.title,
      contextHref: connectedServiceRecord.path,
      contextLabel: connectedServiceRecord.title,
    };
  }
  if (pathname === ruokProductionRecord.path) {
    return {
      resolution: 'record',
      subject: ruokProductionRecord.title,
      contextHref: wellbeingProject.path,
      contextLabel: wellbeingProject.title,
    };
  }
  if (pathname === ruokProductionArtefact.path) {
    return {
      resolution: 'artefact',
      subject: ruokProductionArtefact.title,
      contextHref: ruokProductionRecord.path,
      contextLabel: ruokProductionRecord.title,
    };
  }
  if (pathname === casaProject.path) {
    return {
      resolution: 'project',
      subject: casaProject.title,
      contextHref: '/work',
      contextLabel: 'Work',
    };
  }
  if (pathname === casaJudgementRecord.path) {
    return {
      resolution: 'record',
      subject: casaJudgementRecord.title,
      contextHref: casaProject.path,
      contextLabel: casaProject.title,
    };
  }
  if (pathname === casaJudgementArtefact.path) {
    return {
      resolution: 'artefact',
      subject: casaJudgementArtefact.title,
      contextHref: casaJudgementRecord.path,
      contextLabel: casaJudgementRecord.title,
    };
  }
  if (pathname === tafeProject.path) {
    return {
      resolution: 'project',
      subject: tafeProject.title,
      contextHref: '/work',
      contextLabel: 'Work',
    };
  }
  if (pathname === tafeConversationRecord.path) {
    return {
      resolution: 'record',
      subject: tafeConversationRecord.title,
      contextHref: tafeProject.path,
      contextLabel: tafeProject.title,
    };
  }
  if (pathname === tafeConversationArtefact.path) {
    return {
      resolution: 'artefact',
      subject: tafeConversationArtefact.title,
      contextHref: tafeConversationRecord.path,
      contextLabel: tafeConversationRecord.title,
    };
  }
  if (pathname.startsWith('/work/')) {
    return { resolution: 'legacy-work', subject: 'Work' };
  }
  return null;
}
