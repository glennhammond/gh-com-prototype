import { Link } from 'react-router-dom';
import { recordIndex } from '../content/the-record.js';
import './SelectedWork.css';

function EvidenceIndex({ project }) {
  const records = project.recordIds.map((id) => recordIndex.recordById[id]);
  const artefactCount = records.reduce((total, record) => total + record.artefactIds.length, 0);

  return (
    <div className="selwork__index" aria-label={`${project.title} evidence currently open`}>
      <div className="selwork__index-head">
        <span>{records.length} {records.length === 1 ? 'Record' : 'Records'}</span>
        <span>{artefactCount} {artefactCount === 1 ? 'Artefact' : 'Artefacts'}</span>
      </div>
      <ol>
        {records.map((record, index) => (
          <li key={record.id}>
            <span>{String(index + 1).padStart(2, '0')} · {record.centre}</span>
            <Link to={record.path}>{record.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Home evidence sequence sourced from THE RECORD.
 *
 * Home previews territory and evidence density. Work remains the full composed
 * field. The territories are deliberately unequal: Wellbeing is the active
 * reference, ISQ carries systems evidence, CASA demonstrates regulated-practice
 * depth, and TAFE is explicitly historical.
 */
export default function SelectedWork({ intro, wellbeing, isq, casa, tafe }) {
  return (
    <section className="section selwork" aria-labelledby="work-title">
      <div className="container">
        <header className="selwork__head">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 id="work-title" className="display-l">{intro.headline}</h2>
          <p className="lede">{intro.standfirst}</p>
        </header>

        <div className="selwork__list">
          <article className="selwork__item selwork__item--lead" aria-labelledby="selwork-wellbeing-title">
            <EvidenceIndex project={wellbeing} />
            <div className="selwork__copy">
              <p className="selwork__kicker">{wellbeing.organisation} · {wellbeing.period}</p>
              <h3 id="selwork-wellbeing-title" className="selwork__title">
                From a content portal towards a connected wellbeing service.
              </h3>
              <p className="selwork__body">
                The 2027 redesign starts with situations in the working day rather
                than a library taxonomy. Entry, live experiences, continuity and
                production proof are being treated as one connected product problem.
              </p>
              <Link className="selwork__link" to={wellbeing.path}>Enter the Wellbeing Studio Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--secondary" aria-labelledby="selwork-isq-title">
            <EvidenceIndex project={isq} />
            <div className="selwork__copy">
              <p className="selwork__kicker">{isq.organisation} · {isq.period}</p>
              <h3 id="selwork-isq-title" className="selwork__title">
                One term. A platform migration and a course rebuild at once.
              </h3>
              <p className="selwork__body">
                Connect & Learn moved platforms while more than sixty Storyline
                courses were rebuilt in parallel. The evidence focuses on why platform,
                learning architecture, content estate and operations could not be serial hand-offs.
              </p>
              <dl className="selwork__stats">
                <div><dt>3<span>months</span></dt><dd>Engagement</dd></div>
                <div><dt>60+<span>courses</span></dt><dd>Rebuilt in parallel</dd></div>
                <div><dt>2×</dt><dd>Diamond Awards, LearnX 2024</dd></div>
              </dl>
              <Link className="selwork__link" to={isq.path}>Enter the Connect &amp; Learn Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--contained" aria-labelledby="selwork-casa-title">
            <EvidenceIndex project={casa} />
            <div className="selwork__copy">
              <p className="selwork__kicker">{casa.organisation} · {casa.period}</p>
              <p className="selwork__tag">Flight Examiner Rating</p>
              <h3 id="selwork-casa-title" className="selwork__title">
                Learning for people whose job is assessing other people.
              </h3>
              <p className="selwork__body">
                The Flight Examiner Rating work shows learning designed around
                professional judgement, regulatory structure and assessment reasoning,
                with recovered course evidence available for inspection.
              </p>
              <Link className="selwork__link" to={casa.path}>Enter the Flight Examiner Rating Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--archive" aria-labelledby="selwork-tafe-title">
            <div className="selwork__archive-index" aria-hidden="true">2015</div>
            <div className="selwork__copy">
              <p className="selwork__kicker">{tafe.organisation} · {tafe.period}</p>
              <p className="selwork__tag">Historical evidence</p>
              <h3 id="selwork-tafe-title" className="selwork__title">
                Technology designed to give a careers adviser more ways to talk.
              </h3>
              <p className="selwork__body">
                Pathways used Storyline as a non-linear shared exploration environment
                for Years 8–9 school sessions. Its original interface remains historical
                evidence while the contemporary Record corrects the earlier portfolio interpretation.
              </p>
              <EvidenceIndex project={tafe} />
              <Link className="selwork__link" to={tafe.path}>Enter the SkillsTech Pathways Project</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
