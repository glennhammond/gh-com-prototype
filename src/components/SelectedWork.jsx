import { Link } from 'react-router-dom';
import PlaceholderShot from './PlaceholderShot.jsx';
import './SelectedWork.css';

/**
 * Home Foundation 01 selected-work sequence, reconciled to THE RECORD.
 * The visual hierarchy stays editorial rather than card-driven; labels now
 * name Projects rather than case studies and the old extra system route is
 * no longer surfaced as a fifth public territory.
 */
export default function SelectedWork({ intro, wellbeing, isq, casa }) {
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
            <div className="selwork__visual">
              <PlaceholderShot
                className="selwork__figure selwork__figure--main"
                width={1600}
                height={1000}
                label="WELLBEING STUDIO — 2027 PRODUCT VIEW"
                alt="Placeholder for the 2027 Wellbeing Studio product interface."
                eager
              />
              <PlaceholderShot
                className="selwork__figure selwork__figure--detail"
                width={1200}
                height={1200}
                label="WELLBEING STUDIO — CONTEXTUAL ENTRY"
                alt="Placeholder for a Wellbeing Studio contextual-entry detail."
              />
            </div>
            <div className="selwork__copy">
              <p className="selwork__kicker">Corporate Yoga Australia · 2026–27</p>
              <h3 id="selwork-wellbeing-title" className="selwork__title">
                From a content portal towards a connected wellbeing service.
              </h3>
              <p className="selwork__body">
                The 2027 redesign starts with situations in the working day rather
                than a library taxonomy. Entry, live experiences and continuity are
                being treated as one product problem.
              </p>
              <Link className="selwork__link" to={wellbeing.path}>Enter the Wellbeing Studio Project</Link>
            </div>
          </article>

          <article className="selwork__item selwork__item--secondary" aria-labelledby="selwork-isq-title">
            <div className="selwork__visual">
              <PlaceholderShot
                className="selwork__figure selwork__figure--main"
                width={1600}
                height={900}
                label="ISQ — PLATFORM OVERVIEW"
                alt="Placeholder for an ISQ Connect & Learn platform overview screen."
              />
            </div>
            <div className="selwork__copy">
              <p className="selwork__kicker">Independent Schools Queensland · 2024</p>
              <h3 id="selwork-isq-title" className="selwork__title">
                One term. A platform migration and a course rebuild at once.
              </h3>
              <p className="selwork__body">
                Connect & Learn moved platforms while more than sixty Storyline
                courses were rebuilt in parallel. The work later informed a reusable
                eLearning design system for the organisation.
              </p>
              <div className="selwork__evidence">
                <dl className="selwork__stats">
                  <div><dt>3<span>months</span></dt><dd>Engagement</dd></div>
                  <div><dt>60+<span>courses</span></dt><dd>Rebuilt in parallel</dd></div>
                  <div><dt>2×</dt><dd>Diamond Awards, LearnX 2024</dd></div>
                </dl>
                <ol className="selwork__map" aria-label="What the engagement connected">
                  <li>Platform</li><li>Course estate</li><li>Production</li><li>Design system</li><li>Governance</li>
                </ol>
              </div>
              <div className="selwork__actions">
                <Link className="selwork__link" to={isq.path}>Enter the Connect &amp; Learn Project</Link>
              </div>
            </div>
          </article>

          <article className="selwork__item selwork__item--contained" aria-labelledby="selwork-casa-title">
            <div className="selwork__visual">
              <PlaceholderShot
                className="selwork__figure selwork__figure--main"
                width={1200}
                height={900}
                label="CASA — SCENARIO INTERACTION"
                alt="Placeholder for a CASA Flight Examiner Rating scenario-interaction screen."
              />
            </div>
            <div className="selwork__copy">
              <p className="selwork__kicker">Civil Aviation Safety Authority · 2015–21</p>
              <p className="selwork__tag">Flight Examiner Rating</p>
              <h3 id="selwork-casa-title" className="selwork__title">
                Learning for people whose job is assessing other people.
              </h3>
              <p className="selwork__body">
                The Flight Examiner Rating work is evidence of learning designed
                around professional judgement, supported by interaction, field media
                and a wider operating context inside the regulator.
              </p>
              <Link className="selwork__link" to={casa.path}>Enter the Flight Examiner Rating Project</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
