import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  corePracticeClaims,
  practiceModes,
  resolvedPracticeEvolution,
} from '../content/practice.js';
import { elearningDesignSystemProject, recordIndex } from '../content/public-record.js';
import { breadcrumbSchema, graph, personSchema, practiceSchema } from '../lib/schema.js';
import './Practice.css';

function EvidenceLinks({ evidence }) {
  return (
    <ul className="practice-specialist__records">
      {evidence.slice(0, 3).map(({ project, record }) => (
        <li key={`${project.id}-${record?.id ?? 'project'}`}>
          <Link to={record?.path ?? project.path}>{record?.title ?? project.title}</Link>
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
        description="Recurring decisions across Glenn Hammond’s digital product, learning, interaction, platform and production work."
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
          <p className="eyebrow">Practice</p>
          <h1>The work changes. Certain decisions keep recurring.</h1>
          <p className="practice-head__lede">
            I do not use one fixed method for every project. These are the decisions that keep
            proving useful across different kinds of work.
          </p>
          <Link className="practice-text-link" to="/work">View the work</Link>
        </div>
      </header>

      <section className="practice-section" aria-labelledby="practice-recurring-title">
        <div className="container">
          <div className="practice-section__head">
            <p className="eyebrow">Recurring decisions</p>
            <h2 id="practice-recurring-title">Three things I keep coming back to</h2>
          </div>

          <div className="practice-claims">
            {corePracticeClaims.map((claim, index) => (
              <article key={claim.id} className="practice-claim" aria-labelledby={`practice-${claim.id}`}>
                <div className="practice-claim__interpretation">
                  <p className="practice-classification">{String(index + 1).padStart(2, '0')}</p>
                  <h3 id={`practice-${claim.id}`}>{claim.title}</h3>
                  <p className="practice-claim__summary">{claim.summary}</p>
                </div>
                <div className="practice-claim__evidence">
                  <p className="practice-evidence-label">Examples in the work</p>
                  <EvidenceLinks evidence={claim.evidence} />
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
            <h2 id="practice-movement-title">Frame. Shape. Make. Evidence.</h2>
            <p>
              These are overlapping modes rather than four steps. A project can move between them repeatedly as new information appears.
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
            <p className="eyebrow">Selected evolution</p>
            <h2 id="practice-evolution-title">The unit of design has widened</h2>
            <p>
              Interaction and course production are still part of the work. What changed is how often the problem now requires product, platform and system decisions around them.
            </p>
          </div>

          <ol className="practice-evolution">
            {resolvedPracticeEvolution.map((item) => (
              <li key={`${item.period}-${item.project.id}`} className="practice-evolution__item">
                <p className="practice-evolution__period">{item.period} · {item.altitude}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="practice-text-link" to={item.record.path}>Read the analysis</Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="practice-section practice-section--raised" aria-labelledby="practice-depth-title">
        <div className="container practice-specialist-layout">
          <div className="practice-section__head">
            <p className="eyebrow">Specialist depth</p>
            <h2 id="practice-depth-title">Tools and systems are materials, not the pitch</h2>
            <p>
              Technical depth matters when it lets the learning or product behave in a way a simpler implementation cannot.
            </p>
          </div>

          <div>
            <article className="practice-specialist" aria-labelledby="practice-system-title">
              <h3 id="practice-system-title">eLearning Design System</h3>
              <p>
                Begun in 2024: reusable learning patterns, components, branded implementation layers,
                accessibility, governance and xAPI conventions treated as one operational system.
              </p>
              <Link className="practice-text-link" to={elearningDesignSystemProject.path}>View the eLearning Design System</Link>
            </article>

            <article className="practice-specialist" aria-labelledby="practice-storyline-title">
              <h3 id="practice-storyline-title">Storyline, when the interaction carries the learning</h3>
              <p>
                TAFE used it for a non-linear careers environment. CASA used it to make assessment reasoning visible.
                ISQ rebuilt more than sixty courses while the destination platform was still being shaped.
              </p>
              <ul className="practice-specialist__records">
                {storylineRecords.map((record) => (
                  <li key={record.id}><Link to={record.path}>{record.title}</Link></li>
                ))}
              </ul>
              <Link className="practice-text-link" to="/services/storyline-development">Specialist Storyline detail</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="practice-close" aria-labelledby="practice-close-title">
        <div className="container practice-close__inner">
          <p className="eyebrow">Follow the work</p>
          <h2 id="practice-close-title">The useful question is what the situation needs next.</h2>
          <div className="practice-close__actions">
            <Link className="practice-close__primary" to="/work">View the work</Link>
            <Link className="practice-close__secondary" to="/contact">Contact Glenn</Link>
          </div>
        </div>
      </section>
    </>
  );
}
