import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  casaJudgementArtefact,
  casaJudgementRecord,
  casaProject,
  evidenceStateLabel,
  recordIndex,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './CasaRecord.css';

export default function CasaJudgementRecord() {
  const record = casaJudgementRecord;
  const claims = record.evidenceClaimIds.map((id) => recordIndex.claimById[id]);

  return (
    <>
      <Seo
        title={`${record.title} — CASA | Glenn Hammond`}
        description="A CASA Record examining how the Flight Examiner Rating course supported assessment judgement through regulatory hierarchy, assessment principles and the dimensions of competency."
        path={record.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: casaProject.title, href: casaProject.path },
            { name: record.title, href: record.path },
          ]),
        )}
      />

      <header className="record-exam-opening casa-record-opening">
        <div className="container">
          <Link className="record-exam-opening__project" to={casaProject.path}>
            {casaProject.title}
          </Link>
          <p className="eyebrow casa-record-eyebrow">{record.centre}</p>
          <h1>{record.title}</h1>

          <div className="record-exam-opening__summary">
            <p>{record.happened}</p>
            <p className="record-why">
              <strong>Why examine this</strong>
              {record.worthExamining}
            </p>
          </div>

          <div className="casa-reasoning-preview" aria-labelledby="casa-preview-title">
            <div className="casa-reasoning-preview__lead">
              <p className="artefact-kicker">Evidence sequence</p>
              <h2 id="casa-preview-title">Regulation → assessment principles → competency judgement</h2>
              <p>
                Three recovered course artefacts show how the program moved from the
                governing instrument structure into the logic an examiner applies when
                judging evidence.
              </p>
            </div>
            <ol className="casa-reasoning-preview__steps">
              <li><span>01</span><strong>Know what governs</strong><p>Make the instrument hierarchy visible.</p></li>
              <li><span>02</span><strong>Know what sound assessment requires</strong><p>Validity, reliability, flexibility and objectivity.</p></li>
              <li><span>03</span><strong>Judge more than the visible task</strong><p>Competency includes management, contingency and job-role environment skills.</p></li>
            </ol>
            <Link
              id="artefact-casa-assessment-reasoning"
              className="artefact-preview__action"
              to={casaJudgementArtefact.path}
              state={{ fromRecord: true, returnFocusId: 'artefact-casa-assessment-reasoning' }}
            >
              Inspect the evidence sequence
            </Link>
          </div>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="casa-tension-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The tension</p>
            <h2 id="casa-tension-title">Accuracy without application becomes a document.</h2>
          </div>
          <p>{record.tension}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="casa-move-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The move</p>
            <h2 id="casa-move-title">Make the reasoning structure visible enough to use.</h2>
            <p>{record.move}</p>
          </div>
          <ul className="record-making casa-making">
            {record.making.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="record-band record-band--ink on-ink" aria-labelledby="casa-principle-title">
        <div className="container casa-principle">
          <p className="record-relationship__verb">Design principle</p>
          <h2 id="casa-principle-title">Senior practitioners do not need the regulation simplified away. They need the relationships made usable.</h2>
          <p>
            The program treats regulatory structure, assessment quality and competency
            as connected reasoning aids rather than separate chapters to memorise.
          </p>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="casa-evidence-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence boundary</p>
            <h2 id="casa-evidence-title">What this Record can support</h2>
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
