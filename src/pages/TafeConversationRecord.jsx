import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  evidenceStateLabel,
  recordIndex,
  tafeConversationArtefact,
  tafeConversationRecord,
  tafeProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './TafeRecord.css';

const modes = [
  ['Industry Data', 'Compare shared facts across industries.'],
  ['Job Profiles', 'Move through careers spatially rather than as a long list.'],
  ['Slideshow', 'Use workplace imagery to make environments discussable.'],
  ['Summary', 'Bring explored material back together without forcing a linear path.'],
];

export default function TafeConversationRecord() {
  const record = tafeConversationRecord;
  const claims = record.evidenceClaimIds.map((id) => recordIndex.claimById[id]);

  return (
    <>
      <Seo
        title={`${record.title} — TAFE Queensland SkillsTech | Glenn Hammond`}
        description="A TAFE SkillsTech Record examining how a Storyline-based careers platform supported a facilitator-led conversation rather than replacing the adviser."
        path={record.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: tafeProject.title, href: tafeProject.path },
            { name: record.title, href: record.path },
          ]),
        )}
      />

      <header className="record-exam-opening tafe-record-opening">
        <div className="container">
          <Link className="record-exam-opening__project" to={tafeProject.path}>
            {tafeProject.title}
          </Link>
          <p className="eyebrow tafe-record-eyebrow">{record.centre}</p>
          <h1>{record.title}</h1>

          <div className="record-exam-opening__summary">
            <p>{record.happened}</p>
            <p className="record-why">
              <strong>Why examine this</strong>
              {record.worthExamining}
            </p>
          </div>

          <div className="tafe-mode-preview" aria-labelledby="tafe-mode-preview-title">
            <div className="tafe-mode-preview__lead">
              <p className="artefact-kicker">Facilitated exploration</p>
              <h2 id="tafe-mode-preview-title">Give the conversation several doors.</h2>
              <p>
                Persistent modes let the facilitator respond to the question emerging in
                the room rather than requiring every group to follow the same sequence.
              </p>
            </div>
            <ol>
              {modes.map(([title, detail], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><p>{detail}</p></div>
                </li>
              ))}
            </ol>
            <Link
              id="artefact-tafe-facilitated-environment"
              className="artefact-preview__action"
              to={tafeConversationArtefact.path}
              state={{ fromRecord: true, returnFocusId: 'artefact-tafe-facilitated-environment' }}
            >
              Inspect the exploration environment
            </Link>
          </div>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="tafe-tension-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The tension</p>
            <h2 id="tafe-tension-title">A careers tool can answer questions and still make the conversation worse.</h2>
          </div>
          <p>{record.tension}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="tafe-move-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The move</p>
            <h2 id="tafe-move-title">Make the interface a shared object of inquiry.</h2>
            <p>{record.move}</p>
          </div>
          <ul className="record-making tafe-making">
            {record.making.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="record-band record-band--ink on-ink" aria-labelledby="tafe-principle-title">
        <div className="container tafe-principle">
          <p className="record-relationship__verb">Design principle</p>
          <h2 id="tafe-principle-title">The technology should give the adviser more ways to talk, not fewer reasons to be there.</h2>
          <p>
            Data, maps, job profiles and workplace imagery become prompts that can be
            explored together. The interface is valuable because it supports movement
            through the conversation rather than attempting to own the conversation.
          </p>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="tafe-evidence-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence boundary</p>
            <h2 id="tafe-evidence-title">What this Record can support</h2>
            <p>{record.evidenceBoundary}</p>
          </div>
          <ol className="evidence-claims">
            {claims.map((claim) => (
              <li key={claim.id}>
                <span className="evidence-state">{evidenceStateLabel[claim.state]}</span>
                <p>{claim.claim}</p>
                <small>{claim.basis}{claim.limitation ? ` ${claim.limitation}` : ''}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
