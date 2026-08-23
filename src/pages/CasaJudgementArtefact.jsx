import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  casaJudgementArtefact,
  casaJudgementRecord,
  casaProject,
} from '../content/the-record.js';
import { getImage } from '../lib/media.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './CasaRecord.css';

const evidence = [
  {
    image: 'casa-regulation',
    label: '01 · Regulatory structure',
    title: 'Know which instrument governs',
    alt: 'A course diagram mapping the Civil Aviation Act 1988 through regulations, orders, Part 61 licensing, the Manual of Standards and the Flight Examiner Handbook.',
    body: 'The hierarchy is drawn once and used as a reference structure. The evidence is not that examiners need to discover these documents exist; it is that the course makes their relationship visible when a question has to be resolved.',
  },
  {
    image: 'casa-assessment',
    label: '02 · Assessment quality',
    title: 'Make the principles of sound assessment explicit',
    alt: 'A course screen titled Principles of Assessment with validity, reliability, flexibility and objectivity presented as expandable sections.',
    body: 'Validity, reliability, flexibility and objectivity create a shared language for evaluating the quality of assessment rather than reducing the examiner role to a procedural checklist.',
  },
  {
    image: 'casa-competency',
    label: '03 · Competency judgement',
    title: 'Show what sits below the visible task',
    alt: 'An iceberg diagram showing task skills above the surface and task management, contingency management and job-role environment skills below it.',
    body: 'The four dimensions of competency make visible why observing a task alone is insufficient evidence. The examiner has to judge what happens when work varies, combines and meets the real operating environment.',
  },
];

function EvidenceFigure({ item, eager = false }) {
  const image = getImage(item.image);
  if (!image) return null;

  return (
    <figure className="casa-evidence-figure">
      <div className="casa-evidence-figure__image">
        <picture>
          <source type="image/avif" srcSet={image.avif} sizes="(min-width: 900px) 52vw, 92vw" />
          <source type="image/webp" srcSet={image.webp} sizes="(min-width: 900px) 52vw, 92vw" />
          <img
            src={image.src}
            alt={item.alt}
            width={image.width}
            height={image.height}
            loading={eager ? 'eager' : 'lazy'}
            decoding={eager ? 'sync' : 'async'}
          />
        </picture>
      </div>
      <figcaption>
        <p className="artefact-kicker">{item.label}</p>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </figcaption>
    </figure>
  );
}

export default function CasaJudgementArtefact() {
  const location = useLocation();
  const internalEntry = Boolean(location.state?.fromRecord);
  const returnFocusId = location.state?.returnFocusId;

  return (
    <>
      <Seo
        title={`${casaJudgementArtefact.title} — Artefact | Glenn Hammond`}
        description="Inspect three recovered CASA Flight Examiner Rating course artefacts showing regulatory structure, assessment principles and competency judgement."
        path={casaJudgementArtefact.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: casaProject.title, href: casaProject.path },
            { name: casaJudgementRecord.title, href: casaJudgementRecord.path },
            { name: casaJudgementArtefact.title, href: casaJudgementArtefact.path },
          ]),
        )}
      />

      <article className="artefact-inspection artefact-inspection--casa">
        <div className="container">
          <div className="artefact-inspection__head">
            <div>
              <p className="artefact-kicker">{casaJudgementArtefact.provenance}</p>
              <h1>{casaJudgementArtefact.title}</h1>
            </div>
            <div>
              <p className="artefact-inspection__summary">{casaJudgementArtefact.summary}</p>
              <Link
                className="artefact-back"
                to={casaJudgementRecord.path}
                state={internalEntry && returnFocusId ? { restoreFocusId: returnFocusId } : undefined}
              >
                {internalEntry ? 'Return to Record' : 'View Record'}
              </Link>
            </div>
          </div>

          <div className="casa-evidence-sequence">
            {evidence.map((item, index) => (
              <EvidenceFigure key={item.image} item={item} eager={index === 0} />
            ))}
          </div>

          <aside className="casa-evidence-conclusion">
            <p className="artefact-kicker">The sequence</p>
            <h2>Structure first. Principles second. Judgement in context.</h2>
            <p>
              These artefacts do not prove a learner outcome. They do show the designed
              progression from knowing the regulatory hierarchy, through a shared model
              of assessment quality, to a broader conception of competency than the
              task visible in front of the examiner.
            </p>
          </aside>

          <div className="artefact-notes">
            <div>
              <h2>Why these three</h2>
              <p>
                They are attributable course evidence that can be inspected without
                relying on identifiable piece-to-camera footage. Together they expose
                the reasoning structure more clearly than a generic course screenshot.
              </p>
            </div>
            <div>
              <h2>Evidence treatment</h2>
              <p>{casaJudgementArtefact.accessibility}</p>
              <p>
                The images remain visual evidence; the captions state only what the
                existing project record and recovered course screens support.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
