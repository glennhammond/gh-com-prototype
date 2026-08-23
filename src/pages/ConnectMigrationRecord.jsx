import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  connectDependencyArtefact,
  connectMigrationRecord,
  connectProject,
  evidenceStateLabel,
  recordIndex,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './ConnectRecord.css';

const streams = [
  ['Platform', 'Move from Cornerstone to an ISQ-hosted Moodle environment the organisation could control.'],
  ['Learning architecture', 'Set structures early enough for redevelopment to proceed, but late enough to reflect what the courses needed.'],
  ['Course estate', 'Redevelop more than sixty Storyline courses while the destination environment was still being shaped.'],
  ['Operations', 'Reduce inherited administrative overhead without creating a gap in service for schools already using the platform.'],
];

export default function ConnectMigrationRecord() {
  const record = connectMigrationRecord;
  const claims = record.evidenceClaimIds.map((id) => recordIndex.claimById[id]);

  return (
    <>
      <Seo
        title={`${record.title} — ISQ Connect & Learn | Glenn Hammond`}
        description="An ISQ Connect & Learn Record examining why platform migration, learning architecture and more than sixty course rebuilds had to be designed concurrently."
        path={record.path}
        jsonLd={graph(personSchema, breadcrumbSchema([
          { name: 'Work', href: '/work' },
          { name: connectProject.title, href: connectProject.path },
          { name: record.title, href: record.path },
        ]))}
      />

      <header className="record-exam-opening connect-record-opening">
        <div className="container">
          <Link className="record-exam-opening__project" to={connectProject.path}>{connectProject.title}</Link>
          <p className="eyebrow connect-record-eyebrow">{record.centre}</p>
          <h1>{record.title}</h1>

          <div className="record-exam-opening__summary">
            <p>{record.happened}</p>
            <p className="record-why"><strong>Why examine this</strong>{record.worthExamining}</p>
          </div>

          <div className="connect-stream-preview" aria-labelledby="connect-preview-title">
            <p className="artefact-kicker">Four coupled streams</p>
            <h2 id="connect-preview-title">One delivery problem, not four hand-offs.</h2>
            <ol>
              {streams.map(([title, detail], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><p>{detail}</p></div>
                </li>
              ))}
            </ol>
            <Link
              id="artefact-connect-dependency-map"
              className="artefact-preview__action"
              to={connectDependencyArtefact.path}
              state={{ fromRecord: true, returnFocusId: 'artefact-connect-dependency-map' }}
            >
              Inspect the dependency map
            </Link>
          </div>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="connect-tension-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The tension</p>
            <h2 id="connect-tension-title">Sequential delivery would have made the wrong decisions look final.</h2>
          </div>
          <p>{record.tension}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="connect-move-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">The move</p>
            <h2 id="connect-move-title">Design the destination while learning what the estate requires.</h2>
            <p>{record.move}</p>
          </div>
          <ul className="record-making connect-making">
            {record.making.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="record-band record-band--ink on-ink" aria-labelledby="connect-principle-title">
        <div className="container connect-principle">
          <p className="record-relationship__verb">Systems principle</p>
          <h2 id="connect-principle-title">Platform structure and content structure are one design conversation when they constrain each other.</h2>
          <p>
            A platform migration is not complete when content merely fits. The migration
            had to produce a destination that the rebuilt learning estate could inhabit
            without immediately generating another round of redesign.
          </p>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="connect-evidence-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence boundary</p>
            <h2 id="connect-evidence-title">What this Record can support</h2>
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
