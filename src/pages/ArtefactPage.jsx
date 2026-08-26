import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  contextualEntryRecord,
  dailyWellbeingArtefact,
  wellbeingProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';

const filters = {
  Need: ['Calm My Mind', 'Boost My Energy', 'Improve My Focus', 'Desk Relief', 'Stress Reset', 'Rest & Recover'],
  Practice: ['Yoga', 'Pilates', 'Meditation', 'Breathwork', 'Desk Stretch', 'Movement & Mobility'],
  Duration: ['Under 5 min', '5–10 min', '10–20 min', '20–30 min', '30+ min'],
};

const practices = [
  ['Breathwork · 3 min', 'Arrival Reset Breath'],
  ['Pilates · 7 min', 'Strong Posture Reset'],
  ['Meditation · 8 min', 'Midday Mind Clear'],
  ['Desk Stretch · 4 min', 'Desk Shoulder Release'],
  ['Movement & Mobility · 6 min', 'Afternoon Energy Lift'],
];

export default function ArtefactPage() {
  const location = useLocation();
  const internalEntry = Boolean(location.state?.fromRecord);
  const returnFocusId = location.state?.returnFocusId;

  return (
    <>
      <Seo
        title={`${dailyWellbeingArtefact.title} — Artefact | Glenn Hammond`}
        description="Inspect the Daily wellbeing journey, a Wellbeing Studio Practice Library interaction that organises entry around Before Work, During Work and After Work."
        path={dailyWellbeingArtefact.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: wellbeingProject.title, href: wellbeingProject.path },
            { name: contextualEntryRecord.title, href: contextualEntryRecord.path },
            { name: dailyWellbeingArtefact.title, href: dailyWellbeingArtefact.path },
          ]),
        )}
      />

      <article className="artefact-inspection">
        <div className="container">
          <div className="artefact-inspection__head">
            <div>
              <p className="artefact-kicker">{dailyWellbeingArtefact.provenance}</p>
              <h1>{dailyWellbeingArtefact.title}</h1>
            </div>
            <div>
              <p className="artefact-inspection__summary">{dailyWellbeingArtefact.summary}</p>
              <Link
                className="artefact-back"
                to={contextualEntryRecord.path}
                state={internalEntry && returnFocusId ? { restoreFocusId: returnFocusId } : undefined}
              >
                {internalEntry ? 'Return to Record' : 'Read the analysis'}
              </Link>
            </div>
          </div>

          <div className="artefact-shell">
            <div className="artefact-surface" aria-label="Semantic reconstruction of the Daily wellbeing journey concept">
              <section className="artefact-surface__right-now" aria-labelledby="right-now-title">
                <p className="artefact-kicker">Right now · During Work</p>
                <h2 id="right-now-title">Need a reset between meetings?</h2>
                <div className="artefact-suggestion">
                  <span className="artefact-kicker">Breathwork · 3 min</span>
                  <strong>Arrival Reset Breath</strong>
                  <p>Calm your mind and arrive focused for your next meeting.</p>
                </div>
              </section>

              <ol className="artefact-stage-list" aria-label="Day stages">
                <li>Before Work <small>6–9am</small></li>
                <li className="is-current" aria-current="true">During Work <small>9am–5pm</small></li>
                <li>After Work <small>5–9pm</small></li>
              </ol>

              <section className="artefact-refine" aria-labelledby="refine-title">
                <p className="artefact-kicker">A reset that fits around meetings</p>
                <h3 id="refine-title">Refine when you need to</h3>
                {Object.entries(filters).map(([label, items]) => (
                  <div key={label} className="artefact-filter-group">
                    <p>{label}</p>
                    <ul className="artefact-filter-list">
                      {items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </section>

              <section className="artefact-practices" aria-labelledby="practices-title">
                <h3 id="practices-title">During Work practices</h3>
                <ul className="artefact-practice-list">
                  {practices.map(([meta, title]) => (
                    <li key={title}><span>{meta}</span><strong>{title}</strong></li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="artefact-notes">
            <div>
              <h2>Why it works</h2>
              <p>
                Day stage is the primary lens rather than a secondary filter. The
                “Right now” prompt provides a zero-effort starting point while the
                wider taxonomy remains available when deliberate browsing is useful.
              </p>
            </div>
            <div>
              <h2>Evidence treatment</h2>
              <p>{dailyWellbeingArtefact.accessibility}</p>
              <p>
                The original concept also contains a desktop composition and a mobile
                treatment with swipeable day-stage tabs and a compact refinement action.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
