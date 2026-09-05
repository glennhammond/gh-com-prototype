import { Link } from 'react-router-dom';
import { recordIndex } from '../content/public-record.js';
import { getImage } from '../lib/media.js';
import './SelectedWork.css';

function EvidenceIndex({ project }) {
  const records = project.recordIds.map((id) => recordIndex.recordById[id]).filter(Boolean);
  const evidenceViewCount = records.reduce((total, record) => total + record.artefactIds.length, 0);

  if (!records.length) return null;

  return (
    <div className="selwork__index" aria-label={`${project.title} decisions and evidence currently open`}>
      <div className="selwork__index-head">
        <span>{records.length} {records.length === 1 ? 'Decision' : 'Decisions'}</span>
        <span>{evidenceViewCount} {evidenceViewCount === 1 ? 'Evidence view' : 'Evidence views'}</span>
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

function EvidenceView({ imageName, label, caption, alt, sizes = '(min-width: 860px) 48vw, 92vw' }) {
  const image = getImage(imageName);
  if (!image) return null;

  return (
    <figure className="selwork__evidence-view">
      <div className="selwork__evidence-frame">
        <picture>
          <source type="image/avif" srcSet={image.avif} sizes={sizes} />
          <source type="image/webp" srcSet={image.webp} sizes={sizes} />
          <img
            src={image.src}
            alt={alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <figcaption>
        <span className="selwork__evidence-label">{label}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

function DesignSystemIndex() {
  const items = [
    ['Reusable learning patterns', 'Components and patterns that can be applied across courses rather than rebuilt each time.'],
    ['Implementation layers', 'A neutral core system consumed by branded production environments such as ISQ.'],
    ['Governance and learning data', 'Accessibility, lifecycle rules and xAPI conventions are treated as part of the system, not add-ons.'],
  ];

  return (
    <div className="selwork__index" aria-label="eLearning Design System current scope">
      <div className="selwork__index-head">
        <span>2024– · Active</span>
        <span>Core system</span>
      </div>
      <ol>
        {items.map(([title, body], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, '0')} · System layer</span>
            <strong>{title}</strong>
            <small>{body}</small>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function SelectedWork({ intro, wellbeing, designSystem, connect, casa }) {
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
            <div className="selwork__evidence-column">
              <EvidenceView
                imageName="ws-landing"
                label="Source state · live Studio"
                caption="The member experience already in use before the 2027 product reframe. Shown as the starting condition, not as the future-state design."
                alt="Wellbeing Studio member home page showing a seasonal program hero and a monthly focus article card."
              />
              <EvidenceIndex project={wellbeing} />
            </div>
            <div className="selwork__copy">
              <p className="selwork__kicker">{wellbeing.organisation} · {wellbeing.period}</p>
              <h3 id="selwork-wellbeing-title" className="selwork__title">From a content portal towards a connected wellbeing service.</h3>
              <p className="selwork__body">
                The redesign starts with situations in the working day rather than a library taxonomy.
                Entry, live experiences, campaigns, continuity and production proof are being treated as one connected product problem.
              </p>
              <Link className="selwork__link" to={wellbeing.path}>Enter the Wellbeing Studio Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--secondary" aria-labelledby="selwork-system-title">
            <DesignSystemIndex />
            <div className="selwork__copy">
              <p className="selwork__kicker">Independent practice · {designSystem.period}</p>
              <h3 id="selwork-system-title" className="selwork__title">One eLearning system. Different branded implementations.</h3>
              <p className="selwork__body">
                Begun in 2024, the eLearning Design System connects learning patterns,
                reusable components, platform implementation, accessibility, governance and
                meaningful learning-data design. ISQ is a major implementation context, not the owner of the core system.
              </p>
              <Link className="selwork__link" to={designSystem.path}>Enter the eLearning Design System Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--secondary" aria-labelledby="selwork-connect-title">
            <EvidenceIndex project={connect} />
            <div className="selwork__copy">
              <p className="selwork__kicker">{connect.organisation} · {connect.period}</p>
              <h3 id="selwork-connect-title" className="selwork__title">One term. A platform migration and a course rebuild at once.</h3>
              <p className="selwork__body">
                Connect & Learn moved platforms while more than sixty Storyline courses were rebuilt in parallel.
                Platform, learning architecture, content estate and operations could not be serial hand-offs.
              </p>
              <dl className="selwork__stats">
                <div><dt>3<span>months</span></dt><dd>Engagement</dd></div>
                <div><dt>60+<span>courses</span></dt><dd>Rebuilt in parallel</dd></div>
                <div><dt>2×</dt><dd>Diamond Awards, LearnX 2024</dd></div>
              </dl>
              <Link className="selwork__link" to={connect.path}>Enter the Connect &amp; Learn Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--contained" aria-labelledby="selwork-casa-title">
            <div className="selwork__evidence-column">
              <EvidenceView
                imageName="casa-regulation"
                label="Recovered course screen · CASA"
                caption="The regulatory hierarchy used inside the Flight Examiner Rating course to make governing instruments visible as a connected structure."
                alt="A Flight Examiner Rating course diagram mapping the Civil Aviation Act through regulations, orders, Part 61 licensing, the Manual of Standards and the Flight Examiner Handbook."
                sizes="(min-width: 760px) 40vw, 92vw"
              />
              <EvidenceIndex project={casa} />
            </div>
            <div className="selwork__copy">
              <p className="selwork__kicker">{casa.organisation} · {casa.period}</p>
              <p className="selwork__tag">Flight Examiner Rating</p>
              <h3 id="selwork-casa-title" className="selwork__title">Learning for people whose job is assessing other people.</h3>
              <p className="selwork__body">
                The Flight Examiner Rating work shows learning designed around professional judgement,
                regulatory structure and assessment reasoning, with recovered course evidence available for inspection.
              </p>
              <Link className="selwork__link" to={casa.path}>Enter the Flight Examiner Rating Project</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
