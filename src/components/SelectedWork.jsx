import { Link } from "react-router-dom";
import { projectBySlug } from "../content/projects.js";
import PlaceholderShot from "./PlaceholderShot.jsx";
import "./SelectedWork.css";

/**
 * Homepage "Selected work" — v3.5, architecture-first placeholder phase.
 *
 * One editorial sequence, not a card grid. Three flagship projects, each
 * hand-composed rather than mapped through a shared card shape. Order and
 * visual scale now follow strategic importance, not which record happened
 * to have the richest imagery available:
 *
 *   Wellbeing Studio   the primary flagship — broadest combination of
 *                       product, platform and operational work — carries
 *                       the largest, most dominant treatment: two image
 *                       roles, an overlapping detail crop.
 *   ISQ                the second flagship — platform-scale migration and
 *                       learning-system architecture — a medium two-column
 *                       treatment: one placement image plus the engagement's
 *                       own figures and the design system's own map.
 *   CASA               the third flagship — specialist, high-stakes
 *                       professional learning — a single strong image in a
 *                       contained, single-column treatment. Present, not
 *                       diminished; simply not the loudest thing on the
 *                       page.
 *
 * All three placement images are `placehold.co` plates for this phase — see
 * ASSET_RECOMMENDATIONS below for what belongs in each position. No card
 * chrome anywhere: no border-radius panels, no shadows except the one
 * controlled overlap on the Wellbeing Studio detail image. Hierarchy comes
 * from scale, whitespace and image count, not containers.
 *
 * ── ASSET_RECOMMENDATIONS ──────────────────────────────────────────────
 * wellbeing-primary  Wellbeing Studio · 2027 member dashboard/Today view,
 *                     landscape, ~16:10, generous negative space around the
 *                     UI for responsive cropping. First major evidence for
 *                     the primary flagship — must read as contemporary
 *                     digital product immediately.
 * wellbeing-detail    Wellbeing Studio · a 2027 practice-library or session
 *                     detail crop, square, tight interface crop. Sits
 *                     pinned over the primary image's corner; needs a
 *                     legible focal point even at ~40% width.
 * isq-overview        ISQ Connect & Learn · the rebuilt Moodle environment,
 *                     a course or catalogue view, landscape 16:9. Second
 *                     flagship's only photographic evidence, paired with
 *                     the engagement's real figures — needs to read as
 *                     platform-scale on its own.
 * casa-scenario       CASA Flight Examiner Rating · a scenario-interaction
 *                     or assessment screen (documentary or interface),
 *                     landscape ~4:3. Third flagship, contained treatment —
 *                     one strong image carrying the whole entry.
 * ────────────────────────────────────────────────────────────────────────
 */
export default function SelectedWork({ intro, wellbeing, isq, casa }) {
  const isqSystem = projectBySlug["isq-elearning-design-system"];

  return (
    <section className="section selwork" aria-labelledby="work-title">
      <div className="container">
        <header className="selwork__head">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 id="work-title" className="display-l">
            {intro.headline}
          </h2>
          <p className="lede">{intro.standfirst}</p>
        </header>

        <div className="selwork__list">
          {/* --- Wellbeing Studio — primary flagship ---------------------- */}
          <article
            className="selwork__item selwork__item--lead"
            aria-labelledby="selwork-wellbeing-title"
          >
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
                label="WELLBEING STUDIO — PRACTICE DETAIL"
                alt="Placeholder for a Wellbeing Studio practice-library detail crop."
              />
            </div>

            <div className="selwork__copy">
              <p className="selwork__kicker">
                Corporate Yoga Australia · Wellbeing Studio
              </p>
              <h3 id="selwork-wellbeing-title" className="selwork__title">
                A business that ran on facilitator hours now runs on a
                platform.
              </h3>
              <p className="selwork__body">
                Practices in the on-demand library are catalogued by intent
                and duration, not by discipline — someone with two spare
                minutes can find something for two minutes. The interface is
                being redeveloped for 2027; the imagery here anticipates
                that product rather than showing the current one.
              </p>
              <Link className="selwork__link" to={wellbeing.path}>
                View the Wellbeing Studio case study
              </Link>
            </div>
          </article>

          {/* --- ISQ — Connect & Learn, with the Design System ------------ */}
          <article
            className="selwork__item selwork__item--secondary"
            aria-labelledby="selwork-isq-title"
          >
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
              <p className="selwork__kicker">Independent Schools Queensland</p>
              <h3 id="selwork-isq-title" className="selwork__title">
                One term. A platform migration and a course rebuild at once.
              </h3>
              <p className="selwork__body">
                An entire professional learning estate moved off Cornerstone
                while more than sixty Storyline courses were rebuilt around
                it, inside a single term. The migration led directly to the
                ISQ eLearning Design System, the shared framework that
                followed.
              </p>

              <div className="selwork__evidence">
                <dl className="selwork__stats">
                  <div>
                    <dt>
                      3<span>months</span>
                    </dt>
                    <dd>Engagement</dd>
                  </div>
                  <div>
                    <dt>
                      60+<span>courses</span>
                    </dt>
                    <dd>Rebuilt in parallel</dd>
                  </div>
                  <div>
                    <dt>2×</dt>
                    <dd>Diamond Awards, LearnX 2024</dd>
                  </div>
                </dl>

                <ol className="selwork__map" aria-label="How the design system holds together">
                  <li>Foundations</li>
                  <li>Learning patterns</li>
                  <li>Components</li>
                  <li>Platform implementation</li>
                  <li>Governance</li>
                </ol>
              </div>

              <div className="selwork__actions">
                <Link className="selwork__link" to={isq.path}>
                  View the Connect &amp; Learn case study
                </Link>
                {isqSystem && (
                  <Link className="selwork__link selwork__link--quiet" to={isqSystem.path}>
                    Explore the ISQ Design System
                  </Link>
                )}
              </div>
            </div>
          </article>

          {/* --- CASA — Flight Examiner Rating ----------------------------- */}
          <article
            className="selwork__item selwork__item--contained"
            aria-labelledby="selwork-casa-title"
          >
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
              <p className="selwork__kicker">
                Civil Aviation Safety Authority · 2015–2021
              </p>
              <p className="selwork__tag">Flight Examiner Rating</p>
              <h3 id="selwork-casa-title" className="selwork__title">
                Learning for people whose job is assessing other people.
              </h3>
              <p className="selwork__body">
                The national Flight Examiner Rating course and professional
                development program, for air transport, helicopter and
                general aviation examiners.
              </p>
              <Link className="selwork__link" to={casa.path}>
                View the Flight Examiner Rating case study
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
