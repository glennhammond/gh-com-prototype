import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  corePracticeClaims,
  currentPracticeLens,
  emergingPracticeClaims,
  practiceClassifications,
  practiceModes,
  resolvedPracticeEvolution,
} from '../content/practice.js';
import { recordIndex } from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema, practiceSchema } from '../lib/schema.js';
import './Practice.css';

function EvidenceList({ evidence, compact = false }) {
  return (
    <ul className={`practice-evidence${compact ? ' practice-evidence--compact' : ''}`}>
      {evidence.map(({ project, record, artefact, note }) => (
        <li key={`${record.id}-${artefact?.id ?? 'record'}`} className="practice-evidence__item">
          <p className="practice-evidence__meta">
            {project.title} · {project.period}
          </p>
          <p className="practice-evidence__record">
            <Link to={record.path}>{record.title}</Link>
          </p>
          <p className="practice-evidence__note">{note}</p>
          {artefact && (
            <Link className="practice-evidence__inspect" to={artefact.path}>
              Inspect artefact · {artefact.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Practice() {
  const storylineRecords = [
    'tafe-supported-conversation',
    'casa-examiner-judgement',
    'isq-concurrent-migration',
  ]
    .map((id) => recordIndex.recordById[id])
    .filter(Boolean);

  return (
    <>
      <Seo
        title="Practice — How the work holds together | Glenn Hammond"
        description="An evidence-backed interpretation of the recurring decisions across Glenn Hammond’s digital product, learning, interaction, platform and production work."
        path="/practice"
        jsonLd={graph(
          personSchema,
          practiceSchema,
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Practice', href: '/practice' },
          ]),
        )}
      />

      <header className="practice-head">
        <div className="container practice-head__inner">
          <p className="eyebrow">THE RECORD · Practice</p>
          <h1>The work changes. Certain decisions keep recurring.</h1>
          <p className="practice-head__lede">
            Practice is the interpretation layer of THE RECORD. It does not list everything I can do or
            impose a method on old projects. It names the ways of working that recur when the evidence is
            read across projects.
          </p>
          <p className="practice-head__integrity">
            <strong>Evidence boundary.</strong> The public Record is selective and currently reaches back to
            2015. It should not be read as thirty years of canonical evidence.
          </p>
          <Link className="practice-text-link" to="/work">
            Enter THE RECORD
          </Link>
        </div>
      </header>

      <section className="practice-section" aria-labelledby="practice-recurring-title">
        <div className="container">
          <div className="practice-section__head">
            <p className="eyebrow">Practice claims · 01</p>
            <h2 id="practice-recurring-title">What keeps recurring</h2>
            <p>
              These are the strongest claims the current evidence field supports. Each is tested across all
              four canonical Project territories before it earns the label proven recurring practice.
            </p>
          </div>

          <div className="practice-claims">
            {corePracticeClaims.map((claim, index) => (
              <article key={claim.id} className="practice-claim" aria-labelledby={`practice-${claim.id}`}>
                <div className="practice-claim__interpretation">
                  <p className="practice-classification">
                    {String(index + 1).padStart(2, '0')} · {claim.label}
                  </p>
                  <h3 id={`practice-${claim.id}`}>{claim.title}</h3>
                  <p className="practice-claim__summary">{claim.summary}</p>
                  <p className="practice-boundary">{claim.boundary}</p>
                </div>
                <div className="practice-claim__evidence">
                  <p className="practice-evidence-label">Evidence across THE RECORD</p>
                  <EvidenceList evidence={claim.evidence} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-section practice-section--raised" aria-labelledby="practice-movement-title">
        <div className="container">
          <div className="practice-section__head practice-section__head--wide">
            <p className="eyebrow">Current operating description</p>
            <h2 id="practice-movement-title">A current way of describing the movement</h2>
            <p className="practice-modes__phrase">Frame. Shape. Make. Evidence.</p>
            <p>
              These are overlapping modes, not four steps. The language describes the practice now; it is
              not presented as terminology used by the historical projects.
            </p>
            <p className="practice-classification practice-classification--inline">
              {currentPracticeLens?.label} · {currentPracticeLens?.boundary}
            </p>
          </div>

          <div className="practice-modes">
            {practiceModes.map((mode, index) => (
              <article key={mode.id} className="practice-mode">
                <p className="practice-mode__index">0{index + 1}</p>
                <h3>{mode.title}</h3>
                <p>{mode.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-section" aria-labelledby="practice-evolution-title">
        <div className="container practice-evolution-layout">
          <div className="practice-section__head">
            <p className="eyebrow">Evolution · selective canonical field</p>
            <h2 id="practice-evolution-title">The practice has widened in altitude</h2>
            <p>
              The public Record shows a widening unit of design since 2015: from interaction and facilitated
              experience into regulated learning systems, platform and content architecture, then product and
              connected-service work.
            </p>
            <p className="practice-boundary">
              This is not a ladder. Earlier forms do not disappear as the work widens; artefact-making remains
              first-class inside experience and system work.
            </p>
          </div>

          <ol className="practice-evolution">
            {resolvedPracticeEvolution.map((item) => (
              <li key={`${item.period}-${item.project.id}`} className="practice-evolution__item">
                <p className="practice-evolution__period">{item.period} · {item.altitude}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="practice-text-link" to={item.record.path}>
                  Read Record · {item.record.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="practice-section practice-section--raised" aria-labelledby="practice-emerging-title">
        <div className="container">
          <div className="practice-section__head">
            <p className="eyebrow">Practice claims · 02</p>
            <h2 id="practice-emerging-title">What is still emerging</h2>
            <p>
              Some patterns are strong enough to notice but not strong enough to promote. Keeping that
              distinction visible matters more than making the Practice page look complete.
            </p>
          </div>

          <div className="practice-emerging">
            {emergingPracticeClaims.map((claim) => (
              <article key={claim.id} className="practice-emerging__claim">
                <p className="practice-classification">{claim.label}</p>
                <h3>{claim.title}</h3>
                <p className="practice-claim__summary">{claim.summary}</p>
                <p className="practice-boundary">{claim.boundary}</p>
                <EvidenceList evidence={claim.evidence} compact />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-section" aria-labelledby="practice-specialist-title">
        <div className="container practice-specialist-layout">
          <div className="practice-section__head">
            <p className="eyebrow">Specialist production depth</p>
            <h2 id="practice-specialist-title">Tools are materials, not the Practice</h2>
            <p>
              Storyline recurs across the historical Record, but the evidence is useful because of what the
              tool enabled — not because software expertise should become the architecture of the practice.
            </p>
          </div>

          <article className="practice-specialist" aria-labelledby="practice-storyline-title">
            <p className="practice-classification">Evidenced specialist depth</p>
            <h3 id="practice-storyline-title">Storyline, when the interaction carries the learning</h3>
            <p>
              TAFE used it for a non-linear, stateful careers environment. CASA used it to make assessment
              reasoning visible inside regulated professional learning. ISQ rebuilt more than sixty Storyline
              courses while the destination platform was still being shaped.
            </p>
            <ul className="practice-specialist__records">
              {storylineRecords.map((record) => (
                <li key={record.id}>
                  <Link to={record.path}>{record.title}</Link>
                </li>
              ))}
            </ul>
            <Link className="practice-text-link" to="/services/storyline-development">
              Specialist Storyline detail
            </Link>
          </article>
        </div>
      </section>

      <section className="practice-section practice-contract" aria-labelledby="practice-contract-title">
        <div className="container practice-contract__inner">
          <div className="practice-section__head">
            <p className="eyebrow">Evidence contract</p>
            <h2 id="practice-contract-title">How to read a Practice claim</h2>
            <p>
              Practice can interpret THE RECORD. It cannot outrun it. Stronger language requires stronger
              recurrence and stronger evidence.
            </p>
          </div>
          <dl className="practice-contract__definitions">
            <div>
              <dt>{practiceClassifications['proven-recurring']}</dt>
              <dd>Supported across multiple canonical Project territories.</dd>
            </div>
            <div>
              <dt>{practiceClassifications['strong-emerging']}</dt>
              <dd>Repeated and credible, but narrower or too contemporary to impose retrospectively.</dd>
            </div>
            <div>
              <dt>{practiceClassifications['single-project']}</dt>
              <dd>Useful evidence that remains bounded to one Project until recurrence appears.</dd>
            </div>
            <div>
              <dt>{practiceClassifications['aspirational-positioning']}</dt>
              <dd>Direction or biography that may be useful, but is not presented as canonical proof.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="practice-close" aria-labelledby="practice-close-title">
        <div className="container practice-close__inner">
          <p className="eyebrow">Follow the evidence</p>
          <h2 id="practice-close-title">The interpretation is only useful if you can inspect the work.</h2>
          <div className="practice-close__actions">
            <Link className="practice-close__primary" to="/work">
              Examine THE RECORD
            </Link>
            <Link className="practice-close__secondary" to="/contact">
              Contact Glenn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
