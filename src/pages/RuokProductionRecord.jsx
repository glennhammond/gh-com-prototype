import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  evidenceStateLabel,
  recordIndex,
  ruokProductionArtefact,
  ruokProductionRecord,
  wellbeingProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './RuokProduction.css';

const stages = [
  ['01', 'Bound the product', 'R U OK? Day becomes a controlled production slice, not the whole 2027 product.'],
  ['02', 'Build a real vertical slice', 'The campaign experience enters the production application at 2c56d6b.'],
  ['03', 'Prove participant access', 'Neon Auth, staging readiness and Magic Link remediation test the access boundary.'],
  ['04', 'Harden the runtime', 'Postgres reliability and LC1 content/media integrity are qualified rather than assumed.'],
  ['05', 'Correct the product', 'Mandatory authentication is later removed from the RUOK core journey even though the capability is proven.'],
];

export default function RuokProductionRecord() {
  const record = ruokProductionRecord;
  const claims = record.evidenceClaimIds.map((id) => recordIndex.claimById[id]);

  return (
    <>
      <Seo
        title={`${record.title} — Wellbeing Studio 2027 | Glenn Hammond`}
        description="A Wellbeing Studio Record tracing R U OK? Day from bounded product slice through production implementation, participant access, runtime hardening and a later authentication correction."
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

      <header className="record-exam-opening ruok-record-opening">
        <div className="container">
          <Link className="record-exam-opening__project" to={wellbeingProject.path}>
            {wellbeingProject.title}
          </Link>
          <p className="eyebrow ruok-record-eyebrow">{record.centre}</p>
          <h1>{record.title}</h1>

          <div className="record-exam-opening__summary">
            <p>{record.happened}</p>
            <p className="record-why">
              <strong>Why examine this</strong>
              {record.worthExamining}
            </p>
          </div>

          <div className="ruok-gate-preview" aria-labelledby="ruok-gate-preview-title">
            <p className="artefact-kicker">Production evidence · five stages</p>
            <h2 id="ruok-gate-preview-title">Capability proved ≠ requirement retained.</h2>
            <ol>
              {stages.map(([number, title, detail]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{detail}</p></div>
                </li>
              ))}
            </ol>
            <Link
              id="artefact-ruok-production-gates"
              className="artefact-preview__action"
              to={ruokProductionArtefact.path}
              state={{ fromRecord: true, returnFocusId: 'artefact-ruok-production-gates' }}
            >
              Inspect the production map
            </Link>
          </div>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="ruok-tension-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The tension</p>
            <h2 id="ruok-tension-title">A fixed date makes inherited code look more authoritative than it is.</h2>
          </div>
          <p>{record.tension}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="ruok-move-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The move</p>
            <h2 id="ruok-move-title">Prove the slice in production, then keep product authority above implementation.</h2>
            <p>{record.move}</p>
          </div>
          <ul className="record-making ruok-making">
            {record.making.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="record-band record-band--ink on-ink" aria-labelledby="ruok-correction-title">
        <div className="container ruok-correction">
          <p className="record-relationship__verb">Material correction</p>
          <h2 id="ruok-correction-title">The team proved authentication. The product later stopped requiring it.</h2>
          <p>
            The later RUOK specification made anonymous participation legitimate and
            removed mandatory registration, profile and dashboard behaviour from the
            core journey. The infrastructure remains useful where identity earns its interruption.
          </p>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="ruok-evidence-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence boundary</p>
            <h2 id="ruok-evidence-title">What this Record can support</h2>
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
