import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  ruokProductionArtefact,
  ruokProductionRecord,
  wellbeingProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './RuokProduction.css';

const timeline = [
  {
    gate: 'Product boundary',
    state: 'Defined',
    refs: ['Production Pilot 01 v1.1', 'RUOK Product Specification v1'],
    detail: 'R U OK? Day is deliberately bounded. It must prove a focused architecture slice rather than become the whole future Studio.',
  },
  {
    gate: 'Technical vertical slice',
    state: 'Implemented',
    refs: ['2c56d6b'],
    detail: 'The real Wellbeing Studio application can represent and serve the campaign experience. No parallel microsite architecture is introduced to hit the date.',
  },
  {
    gate: 'Participant access proof',
    state: 'Implemented / remediated',
    refs: ['f18b5f8', '043f4fe', '0efb911'],
    detail: 'Neon Auth and Magic Link access are implemented, staging readiness is established, and a defect that could strand an authenticated participant on sign-in is corrected.',
  },
  {
    gate: 'Runtime reliability',
    state: 'Hardened',
    refs: ['c6a23a8'],
    detail: 'The staging Postgres path is hardened for transient-read behaviour and regional execution rather than treating local success as sufficient.',
  },
  {
    gate: 'Launch Candidate content',
    state: 'Parallel integration',
    refs: ['1892158', 'd57e18b', '72966d4'],
    detail: 'Content Master v0.2 progresses through LC1, including media-integrity remediation. At this evidence point the production and LC1 branches are parallel, so the history is shown as parallel rather than rewritten as a single linear release.',
  },
  {
    gate: 'Product correction',
    state: 'Canonical re-specification',
    refs: ['RUOK Product Specification v1'],
    detail: 'Mandatory authentication is removed from the core campaign journey. Neon Auth remains proven infrastructure, but capability no longer creates participant requirement.',
  },
];

export default function RuokQualificationArtefact() {
  const location = useLocation();
  const internalEntry = Boolean(location.state?.fromRecord);
  const returnFocusId = location.state?.returnFocusId;

  return (
    <>
      <Seo
        title={`${ruokProductionArtefact.title} — Artefact | Glenn Hammond`}
        description="Inspect the production qualification map for the Wellbeing Studio R U OK? Day slice: product boundary, vertical slice, participant access, runtime hardening, LC1 integration and product correction."
        path={ruokProductionArtefact.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: wellbeingProject.title, href: wellbeingProject.path },
            { name: ruokProductionRecord.title, href: ruokProductionRecord.path },
            { name: ruokProductionArtefact.title, href: ruokProductionArtefact.path },
          ]),
        )}
      />

      <article className="artefact-inspection artefact-inspection--ruok">
        <div className="container">
          <div className="artefact-inspection__head">
            <div>
              <p className="artefact-kicker">{ruokProductionArtefact.provenance}</p>
              <h1>{ruokProductionArtefact.title}</h1>
            </div>
            <div>
              <p className="artefact-inspection__summary">{ruokProductionArtefact.summary}</p>
              <Link
                className="artefact-back"
                to={ruokProductionRecord.path}
                state={internalEntry && returnFocusId ? { restoreFocusId: returnFocusId } : undefined}
              >
                {internalEntry ? 'Return to Record' : 'Read the analysis'}
              </Link>
            </div>
          </div>

          <div className="artefact-shell ruok-map-shell">
            <div className="ruok-production-map" aria-label="Semantic reconstruction of the R U OK? Day production qualification history">
              <div className="ruok-map-principle">
                <p className="artefact-kicker">Production rule</p>
                <h2>Prove infrastructure. Qualify runtime. Let product requirements remain reversible.</h2>
              </div>

              <ol className="ruok-map-timeline">
                {timeline.map((stage, index) => (
                  <li key={stage.gate}>
                    <div className="ruok-map-index">{String(index + 1).padStart(2, '0')}</div>
                    <div className="ruok-map-stage">
                      <p className="ruok-map-state">{stage.state}</p>
                      <h3>{stage.gate}</h3>
                      <p>{stage.detail}</p>
                      <ul className="ruok-map-refs" aria-label={`Evidence references for ${stage.gate}`}>
                        {stage.refs.map((ref) => <li key={ref}>{ref}</li>)}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="ruok-map-correction">
                <p className="artefact-kicker">Why the correction matters</p>
                <h2>Engineering evidence stayed valid when the participant contract changed.</h2>
                <p>
                  Auth, sessions, staging and return-to behaviour were still useful platform
                  capabilities. The product simply stopped interrupting every RUOK participant
                  with them once the participant-value test changed.
                </p>
              </aside>
            </div>
          </div>

          <div className="artefact-notes">
            <div>
              <h2>What this shows</h2>
              <p>
                The production history is not represented as a heroic straight line. It includes
                parallel branches, remediation and a deliberate product reversal — because those
                are part of the evidence of how the work was governed.
              </p>
            </div>
            <div>
              <h2>Evidence treatment</h2>
              <p>{ruokProductionArtefact.accessibility}</p>
              <p>
                Commit identifiers are included as provenance markers, not as a claim that every
                branch or launch gate shown here is already merged, promoted or complete.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
