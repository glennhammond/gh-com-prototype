import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  connectedServiceArtefact,
  connectedServiceRecord,
  evidenceStateLabel,
  recordIndex,
  wellbeingProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './ConnectedService.css';

const modes = [
  ['Action', 'Help me now', 'Minimise the distance between a real situation and one useful response.'],
  ['Return', 'Something I know works', 'Make recent, repeated and trusted experiences exceptionally easy to retrieve.'],
  ['Explore', 'I genuinely want to browse', 'Support deliberate discovery without making the catalogue the whole product.'],
];

export default function ConnectedServiceRecord() {
  const record = connectedServiceRecord;
  const claims = record.evidenceClaimIds.map((id) => recordIndex.claimById[id]);

  return (
    <>
      <Seo
        title={`${record.title} — Wellbeing Studio 2027 | Glenn Hammond`}
        description="A Wellbeing Studio Record examining the product reframe from content portal to connected workplace wellbeing service, organised around Action, Return, Explore and Useful Experience."
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

      <header className="record-exam-opening record-exam-opening--service">
        <div className="container">
          <Link className="record-exam-opening__project" to={wellbeingProject.path}>
            {wellbeingProject.title}
          </Link>
          <p className="eyebrow record-service-eyebrow">{record.centre}</p>
          <h1>{record.title}</h1>

          <div className="record-exam-opening__summary">
            <p>{record.happened}</p>
            <p className="record-why">
              <strong>Why examine this</strong>
              {record.worthExamining}
            </p>
          </div>

          <div className="service-preview" aria-labelledby="service-preview-title">
            <div className="service-preview__entry">
              <p className="artefact-kicker">Entry</p>
              <strong>Real situation · CYA encounter · existing relationship</strong>
            </div>

            <ol className="service-preview__modes" aria-label="Action, Return and Explore">
              {modes.map(([mode, intent, detail]) => (
                <li key={mode}>
                  <span>{mode}</span>
                  <strong>{intent}</strong>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>

            <div className="service-preview__centre">
              <p className="artefact-kicker">Centre of value</p>
              <h2 id="service-preview-title">Useful Experience</h2>
              <p>Something worth doing now — digital or human-led — without requiring the participant to understand the product architecture first.</p>
            </div>

            <Link
              id="artefact-connected-service-model"
              className="artefact-preview__action"
              to={connectedServiceArtefact.path}
              state={{ fromRecord: true, returnFocusId: 'artefact-connected-service-model' }}
            >
              Inspect the relationship model
            </Link>
          </div>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="service-tension-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The tension</p>
            <h2 id="service-tension-title">Good infrastructure can still preserve the wrong product.</h2>
          </div>
          <p>{record.tension}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="service-move-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The reframe</p>
            <h2 id="service-move-title">Design the service from participant behaviour, not inherited pages.</h2>
            <p>{record.move}</p>
          </div>
          <ul className="record-making record-making--service">
            {record.making.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="record-band record-band--ink on-ink" aria-labelledby="service-principle-title">
        <div className="container service-principle">
          <p className="record-relationship__verb">Product principle</p>
          <h2 id="service-principle-title">Useful Experience is the centre. Continuity is earned.</h2>
          <p>
            The architecture allows someone to arrive from a workplace moment, campaign,
            live session, program or familiar practice, reach something useful, and leave.
            Return, identity and follow-up appear only when they improve that relationship.
          </p>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="service-evidence-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence boundary</p>
            <h2 id="service-evidence-title">What this Record can support</h2>
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
