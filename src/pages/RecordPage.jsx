import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  contextualEntryRecord,
  dailyWellbeingArtefact,
  evidenceStateLabel,
  recordIndex,
  wellbeingProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';

export default function RecordPage() {
  const record = contextualEntryRecord;
  const claims = record.evidenceClaimIds.map((id) => recordIndex.claimById[id]);
  const relationship = record.relationships[0];

  return (
    <>
      <Seo
        title={`${record.title} — Wellbeing Studio 2027 | Glenn Hammond`}
        description="A Wellbeing Studio Record examining why the Practice Library was reorganised around Before Work, During Work and After Work, with evidence available immediately."
        path={record.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: wellbeingProject.title, href: wellbeingProject.path },
            { name: record.title, href: record.path },
          ]),
        )}
      />

      <header className="record-exam-opening">
        <div className="container">
          <Link className="record-exam-opening__project" to={wellbeingProject.path}>
            {wellbeingProject.title}
          </Link>
          <h1>{record.title}</h1>

          <div className="record-exam-opening__summary">
            <p>{record.happened}</p>
            <p className="record-why">
              <strong>Why examine this</strong>
              {record.worthExamining}
            </p>
          </div>

          <div className="artefact-preview" aria-labelledby="artefact-preview-title">
            <div className="artefact-preview__stage">
              <p className="artefact-kicker">Evidence · {dailyWellbeingArtefact.kind}</p>
              <h2 id="artefact-preview-title">{dailyWellbeingArtefact.title}</h2>
              <p>
                Right now · During Work. Need a reset between meetings? The first
                suggestion is Arrival Reset Breath, while the wider Practice Library
                remains available by need, practice type and duration.
              </p>
              <Link
                id="artefact-daily-wellbeing-journey"
                className="artefact-preview__action"
                to={dailyWellbeingArtefact.path}
                state={{ fromRecord: true, returnFocusId: 'artefact-daily-wellbeing-journey' }}
              >
                Inspect the artefact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="tension-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The tension</p>
            <h2 id="tension-title">A library can still make the participant do the work.</h2>
          </div>
          <p>{record.tension}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="move-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The move</p>
            <h2 id="move-title">Make the working day the first organising idea.</h2>
            <p>{record.move}</p>
          </div>
          <ul className="record-making">
            {record.making.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="evidence-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence boundary</p>
            <h2 id="evidence-title">What this Record can support</h2>
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

      {relationship && (
        <section className="record-band record-band--ink on-ink" aria-labelledby="relationship-title">
          <div className="container record-relationship">
            <p className="record-relationship__verb">Led to</p>
            <h2 id="relationship-title">
              <Link to={relationship.href}>{relationship.label}</Link>
            </h2>
            <p>{relationship.note}</p>
          </div>
        </section>
      )}
    </>
  );
}
