import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  connectDependencyArtefact,
  connectMigrationRecord,
  connectProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './ConnectRecord.css';

const streams = [
  {
    title: 'Platform migration',
    state: 'Destination',
    detail: 'Replace Cornerstone with an ISQ-hosted Moodle environment the organisation could host and control directly.',
    feeds: ['Learning architecture', 'Operations'],
  },
  {
    title: 'Learning architecture',
    state: 'Shared structure',
    detail: 'Define the organising structures that both the platform and rebuilt courses would depend on.',
    feeds: ['Platform migration', 'Course redevelopment'],
  },
  {
    title: 'Course redevelopment',
    state: 'More than sixty Storyline courses',
    detail: 'Rebuild the learning estate while the destination was still being shaped, so recurring needs informed the platform rather than arriving after it.',
    feeds: ['Learning architecture'],
  },
  {
    title: 'Operational migration',
    state: 'Continuity',
    detail: 'Move the service without a gap for existing school users and reduce administrative work that did not improve learning.',
    feeds: ['Platform migration'],
  },
];

const gates = [
  ['Do not freeze the platform too early', 'Course redevelopment must still be able to reveal structural requirements.'],
  ['Do not delay the courses until the platform is “finished”', 'The three-month engagement cannot support serial discovery and rebuild.'],
  ['Do not treat migration as copy-and-paste', 'Inherited administrative complexity is part of the problem being migrated away from.'],
];

export default function ConnectDependencyArtefact() {
  const location = useLocation();
  const internalEntry = Boolean(location.state?.fromRecord);
  const returnFocusId = location.state?.returnFocusId;

  return (
    <>
      <Seo
        title={`${connectDependencyArtefact.title} — Artefact | Glenn Hammond`}
        description="Inspect the Connect & Learn migration dependency map showing platform, learning architecture, course redevelopment and operations moving concurrently."
        path={connectDependencyArtefact.path}
        jsonLd={graph(personSchema, breadcrumbSchema([
          { name: 'Work', href: '/work' },
          { name: connectProject.title, href: connectProject.path },
          { name: connectMigrationRecord.title, href: connectMigrationRecord.path },
          { name: connectDependencyArtefact.title, href: connectDependencyArtefact.path },
        ]))}
      />

      <article className="artefact-inspection artefact-inspection--connect">
        <div className="container">
          <div className="artefact-inspection__head">
            <div>
              <p className="artefact-kicker">{connectDependencyArtefact.provenance}</p>
              <h1>{connectDependencyArtefact.title}</h1>
            </div>
            <div>
              <p className="artefact-inspection__summary">{connectDependencyArtefact.summary}</p>
              <Link className="artefact-back" to={connectMigrationRecord.path}
                state={internalEntry && returnFocusId ? { restoreFocusId: returnFocusId } : undefined}>
                {internalEntry ? 'Return to Record' : 'Read the analysis'}
              </Link>
            </div>
          </div>

          <div className="connect-dependency-shell">
            <div className="connect-dependency-map">
              <div className="connect-dependency-map__centre">
                <p className="artefact-kicker">Three-month engagement</p>
                <h2>Shape the destination and the estate together.</h2>
                <p>
                  The work stays coherent only if each stream can change another before
                  its assumptions harden into rework.
                </p>
              </div>

              <ol className="connect-dependency-map__streams">
                {streams.map((stream, index) => (
                  <li key={stream.title}>
                    <span className="connect-stream-index">{String(index + 1).padStart(2, '0')}</span>
                    <p className="connect-stream-state">{stream.state}</p>
                    <h3>{stream.title}</h3>
                    <p>{stream.detail}</p>
                    <p className="connect-stream-feeds">
                      Informs → {stream.feeds.join(' · ')}
                    </p>
                  </li>
                ))}
              </ol>

              <section className="connect-gates" aria-labelledby="connect-gates-title">
                <p className="artefact-kicker">Delivery guardrails</p>
                <h2 id="connect-gates-title">What serial delivery would get wrong</h2>
                <ol>
                  {gates.map(([title, detail]) => (
                    <li key={title}><strong>{title}</strong><p>{detail}</p></li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          <aside className="connect-evidence-conclusion">
            <p className="artefact-kicker">The system</p>
            <h2>Each stream is both delivery work and evidence for the others.</h2>
            <p>
              This is why the migration could not be treated as a platform hand-off
              followed by a content hand-off. The rebuilt courses were part of how the
              destination was discovered.
            </p>
          </aside>

          <div className="artefact-notes">
            <div>
              <h2>Why no reconstructed platform screen</h2>
              <p>
                The existing project analysis does not rely on learner-facing Connect &
                Learn screenshots for this claim. The useful artefact here is the
                dependency structure of the work, not a speculative recreation of the
                2024 interface.
              </p>
            </div>
            <div>
              <h2>Evidence treatment</h2>
              <p>{connectDependencyArtefact.accessibility}</p>
              <p>
                Conflicting audience-size figures remain excluded. The analysis relies on
                the confirmed migration, course-estate and engagement facts only.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
