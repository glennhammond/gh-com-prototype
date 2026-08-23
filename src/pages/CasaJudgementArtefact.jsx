import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  casaJudgementArtefact,
  casaJudgementRecord,
  casaProject,
} from '../content/the-record.js';
import { recordImage } from '../lib/record-media.js';
import regulation480Avif from '../assets/casa/casa-regulation-480.avif';
import regulation800Avif from '../assets/casa/casa-regulation-800.avif';
import regulation1600Avif from '../assets/casa/casa-regulation-1600.avif';
import regulation480Webp from '../assets/casa/casa-regulation-480.webp';
import regulation800Webp from '../assets/casa/casa-regulation-800.webp';
import regulation1600Webp from '../assets/casa/casa-regulation-1600.webp';
import assessment480Avif from '../assets/casa/casa-assessment-480.avif';
import assessment800Avif from '../assets/casa/casa-assessment-800.avif';
import assessment1600Avif from '../assets/casa/casa-assessment-1600.avif';
import assessment480Webp from '../assets/casa/casa-assessment-480.webp';
import assessment800Webp from '../assets/casa/casa-assessment-800.webp';
import assessment1600Webp from '../assets/casa/casa-assessment-1600.webp';
import competency480Avif from '../assets/casa/casa-competency-480.avif';
import competency800Avif from '../assets/casa/casa-competency-800.avif';
import competency1600Avif from '../assets/casa/casa-competency-1600.avif';
import competency480Webp from '../assets/casa/casa-competency-480.webp';
import competency800Webp from '../assets/casa/casa-competency-800.webp';
import competency1600Webp from '../assets/casa/casa-competency-1600.webp';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './CasaRecord.css';

const images = {
  regulation: recordImage({
    avif: [[480, regulation480Avif], [800, regulation800Avif], [1600, regulation1600Avif]],
    webp: [[480, regulation480Webp], [800, regulation800Webp], [1600, regulation1600Webp]],
    width: 1600,
    height: 924,
  }),
  assessment: recordImage({
    avif: [[480, assessment480Avif], [800, assessment800Avif], [1600, assessment1600Avif]],
    webp: [[480, assessment480Webp], [800, assessment800Webp], [1600, assessment1600Webp]],
    width: 1600,
    height: 731,
  }),
  competency: recordImage({
    avif: [[480, competency480Avif], [800, competency800Avif], [1600, competency1600Avif]],
    webp: [[480, competency480Webp], [800, competency800Webp], [1600, competency1600Webp]],
    width: 1600,
    height: 844,
  }),
};

const evidence = [
  {
    image: images.regulation,
    label: '01 · Regulatory structure',
    title: 'Know which instrument governs',
    alt: 'A course diagram mapping the Civil Aviation Act 1988 through regulations, orders, Part 61 licensing, the Manual of Standards and the Flight Examiner Handbook.',
    body: 'The hierarchy is drawn once and used as a reference structure. The evidence is not that examiners need to discover these documents exist; it is that the course makes their relationship visible when a question has to be resolved.',
  },
  {
    image: images.assessment,
    label: '02 · Assessment quality',
    title: 'Make the principles of sound assessment explicit',
    alt: 'A course screen titled Principles of Assessment with validity, reliability, flexibility and objectivity presented as expandable sections.',
    body: 'Validity, reliability, flexibility and objectivity create a shared language for evaluating the quality of assessment rather than reducing the examiner role to a procedural checklist.',
  },
  {
    image: images.competency,
    label: '03 · Competency judgement',
    title: 'Show what sits below the visible task',
    alt: 'An iceberg diagram showing task skills above the surface and task management, contingency management and job-role environment skills below it.',
    body: 'The four dimensions of competency make visible why observing a task alone is insufficient evidence. The examiner has to judge what happens when work varies, combines and meets the real operating environment.',
  },
];

function EvidenceFigure({ item, eager = false }) {
  return (
    <figure className="casa-evidence-figure">
      <div className="casa-evidence-figure__image">
        <picture>
          <source type="image/avif" srcSet={item.image.avif} sizes="(min-width: 900px) 52vw, 92vw" />
          <source type="image/webp" srcSet={item.image.webp} sizes="(min-width: 900px) 52vw, 92vw" />
          <img
            src={item.image.src}
            alt={item.alt}
            width={item.image.width}
            height={item.image.height}
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
              <EvidenceFigure key={item.label} item={item} eager={index === 0} />
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
