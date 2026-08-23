import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  connectedServiceArtefact,
  connectedServiceRecord,
  wellbeingProject,
} from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './ConnectedService.css';

const entryContexts = [
  ['Real working situation', 'A participant knows what is happening now, even if they do not know what content they want.'],
  ['CYA encounter', 'A live session, workplace visit, campaign, conference or practitioner can become a direct digital entry point.'],
  ['Existing relationship', 'Recent, repeated, saved, live or program continuity can shorten the route to something already trusted.'],
];

const modes = [
  ['Action', 'Help me now', 'Recommendation before catalogue. Ask only what changes the answer.'],
  ['Return', 'Something I know works', 'Recent and trusted experiences remain close without requiring a dashboard ritual.'],
  ['Explore', 'I want to browse', 'Search, filters and richer taxonomy are legitimate when deliberate discovery is the participant’s intent.'],
];

const continuities = [
  ['End here', 'A useful experience can be complete without manufacturing another step.'],
  ['Human-led', 'Practitioner relationships, live sessions and workplace delivery can continue the same service.'],
  ['Campaign / event', 'Context is preserved from the moment that brought the participant into the Studio.'],
  ['Program', 'Structured continuity orchestrates useful experiences without importing LMS mechanics by default.'],
  ['Personal continuity', 'Recent, saved and repeated experiences can be remembered when identity creates enough value.'],
];

export default function ConnectedServiceArtefact() {
  const location = useLocation();
  const internalEntry = Boolean(location.state?.fromRecord);
  const returnFocusId = location.state?.returnFocusId;

  return (
    <>
      <Seo
        title={`${connectedServiceArtefact.title} — Artefact | Glenn Hammond`}
        description="Inspect the Wellbeing Studio 2027 connected-service relationship model: contextual entry, Action, Return, Explore, Useful Experience and proportionate continuity."
        path={connectedServiceArtefact.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: wellbeingProject.title, href: wellbeingProject.path },
            { name: connectedServiceRecord.title, href: connectedServiceRecord.path },
            { name: connectedServiceArtefact.title, href: connectedServiceArtefact.path },
          ]),
        )}
      />

      <article className="artefact-inspection artefact-inspection--service">
        <div className="container">
          <div className="artefact-inspection__head">
            <div>
              <p className="artefact-kicker">{connectedServiceArtefact.provenance}</p>
              <h1>{connectedServiceArtefact.title}</h1>
            </div>
            <div>
              <p className="artefact-inspection__summary">{connectedServiceArtefact.summary}</p>
              <Link
                className="artefact-back"
                to={connectedServiceRecord.path}
                state={internalEntry && returnFocusId ? { restoreFocusId: returnFocusId } : undefined}
              >
                {internalEntry ? 'Return to Record' : 'View Record'}
              </Link>
            </div>
          </div>

          <div className="artefact-shell artefact-shell--service">
            <div className="service-map" aria-label="Semantic reconstruction of the connected service relationship model">
              <section className="service-map__section" aria-labelledby="service-entry-title">
                <p className="artefact-kicker">01 · Entry can begin outside the product</p>
                <h2 id="service-entry-title">Preserve the situation that brought someone here.</h2>
                <ol className="service-map__entries">
                  {entryContexts.map(([title, detail]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="service-map__section service-map__section--modes" aria-labelledby="service-modes-title">
                <p className="artefact-kicker">02 · Behaviour</p>
                <h2 id="service-modes-title">Action / Return / Explore</h2>
                <p className="service-map__note">Behavioural modes, not proposed navigation labels.</p>
                <ol className="service-map__modes">
                  {modes.map(([mode, intent, detail]) => (
                    <li key={mode}>
                      <span>{mode}</span>
                      <strong>{intent}</strong>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="service-map__centre" aria-labelledby="service-centre-title">
                <p className="artefact-kicker">03 · Centre of participant value</p>
                <h2 id="service-centre-title">Useful Experience</h2>
                <p>
                  A short practice, longer practice, live experience, campaign resource,
                  program moment or another useful intervention. The architecture exists
                  to shorten the route here, not to maximise content consumption.
                </p>
              </section>

              <section className="service-map__section" aria-labelledby="service-continuity-title">
                <p className="artefact-kicker">04 · Appropriate continuity</p>
                <h2 id="service-continuity-title">Continue only when continuing is useful.</h2>
                <ol className="service-map__continuities">
                  {continuities.map(([title, detail]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          <div className="artefact-notes">
            <div>
              <h2>What changed</h2>
              <p>
                The model removes the content portal as the organising centre. Search,
                filtering, live experiences, campaigns, programs and personal history
                still exist where they solve a participant job, but none is allowed to
                define the whole Studio by default.
              </p>
            </div>
            <div>
              <h2>Evidence treatment</h2>
              <p>{connectedServiceArtefact.accessibility}</p>
              <p>
                This is architectural evidence. It records the adopted product model
                and its relationships; it does not claim participant behaviour or full
                implementation of every continuation path.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
