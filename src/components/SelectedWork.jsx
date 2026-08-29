import { Link } from 'react-router-dom';
import { recordIndex } from '../content/the-record.js';
import { getImage } from '../lib/media.js';
import './SelectedWork.css';

function EvidenceIndex({ project }) {
  const records = project.recordIds.map((id) => recordIndex.recordById[id]);
  const evidenceViewCount = records.reduce((total, record) => total + record.artefactIds.length, 0);

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

/**
 * Home evidence sequence sourced from the canonical internal evidence model.
 *
 * Home previews the work without requiring visitors to learn that model. Real
 * attributable evidence leads where it clarifies a project; structural evidence
 * remains first-class where no truthful project-specific image exists.
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
            <div className="selwork__evidence-column">
              <div className="selwork__archive-index" aria-hidden="true">2015</div>
              <EvidenceView
                imageName="tafe-wireframe"
                label="Historical artefact · 2015"
                caption="The original non-linear hub structure for facilitator-led Pathways sessions. It is preserved as historical evidence rather than redrawn as a contemporary interface."
                alt="A wireframe flow diagram of the Pathways tool showing an entry screen, a central hub and grouped screen clusters connected around several exploration modes."
                sizes="(min-width: 760px) 36vw, 92vw"
              />
            </div>
            <div className="selwork__copy">
              <p className="selwork__kicker">{tafe.organisation} · {tafe.period}</p>
              <p className="selwork__tag">Historical evidence</p>
              <h3 id="selwork-tafe-title" className="selwork__title">
                Technology designed to give a careers adviser more ways to talk.
              </h3>
              <p className="selwork__body">
                Pathways used Storyline as a non-linear shared exploration environment
                for Years 8–9 school sessions. Its original interface remains historical
                evidence while the contemporary analysis corrects the earlier portfolio interpretation.
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
