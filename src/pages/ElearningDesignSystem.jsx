import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { elearningDesignSystemProject as project } from '../content/public-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';

const CURRENT_REFERENCE = 'https://isq-elearning-design-system.vercel.app/';

export default function ElearningDesignSystem() {
  return (
    <>
      <Seo
        title="eLearning Design System — Project | Glenn Hammond"
        description="A neutral eLearning Design System begun in 2024, connecting learning patterns, reusable components, platform implementation, accessibility, governance and meaningful learning-data design."
        path={project.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: project.title, href: project.path },
          ]),
        )}
      />

      <header className="record-opening">
        <div className="container record-opening__grid">
          <div>
            <p className="eyebrow">Independent practice · {project.period}</p>
            <h1 className="record-opening__title">{project.title}</h1>
            <p className="record-opening__lede">{project.proposition}</p>
          </div>
          <dl className="record-facts">
            <div><dt>State</dt><dd>{project.state}</dd></div>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Scope</dt><dd>{project.altitude}</dd></div>
          </dl>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="eds-what-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">What it is</p>
            <h2 id="eds-what-title">A core system, not an ISQ-owned style guide.</h2>
          </div>
          <div>
            <p>
              I began the eLearning Design System in 2024 to stop recurring learning,
              interface and production decisions being solved again inside each course.
              The core system is intentionally neutral. It defines reusable patterns,
              components, implementation rules and governance that can be consumed by
              different branded learning environments.
            </p>
            <p>
              Independent Schools Queensland is an important production implementation of
              the system, not the owner of the system itself. ISQ branding, typography and
              course-specific requirements sit in an implementation layer while the reusable
              design logic remains portable.
            </p>
          </div>
        </div>
      </section>

      <section className="record-band" aria-labelledby="eds-architecture-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Architecture</p>
            <h2 id="eds-architecture-title">Five connected layers</h2>
          </div>
          <ol className="record-trajectory">
            <li>
              <p className="record-trajectory__period">01</p>
              <div><h3>Foundations</h3><p>Typography, colour, spacing, imagery and accessibility rules that implementations inherit.</p></div>
            </li>
            <li>
              <p className="record-trajectory__period">02</p>
              <div><h3>Learning patterns</h3><p>Repeatable structures for orientation, scenarios, decisions, legislation, reflection, assessment and resources.</p></div>
            </li>
            <li>
              <p className="record-trajectory__period">03</p>
              <div><h3>Components</h3><p>Reusable implementations of those patterns, with defined behaviour rather than appearance alone.</p></div>
            </li>
            <li>
              <p className="record-trajectory__period">04</p>
              <div><h3>Platform implementation</h3><p>Guidance for choosing the least complex implementation that fully supports the learning purpose — native blocks first, custom code only where it earns its complexity.</p></div>
            </li>
            <li>
              <p className="record-trajectory__period">05</p>
              <div><h3>Governance and evidence</h3><p>Lifecycle, accessibility, implementation status and learning-data conventions that keep the system coherent as real courses change it.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="eds-production-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Production implementation</p>
            <h2 id="eds-production-title">ISQ is where the system is being tested against real constraints.</h2>
          </div>
          <div>
            <p>
              The ISQ implementation applies its own brand layer while using the same core
              system to govern Rise course structure, reusable custom-code components,
              default blocks, accessibility and production decisions. That separation matters:
              improvements proven in one implementation can strengthen the core without turning
              the whole system into an ISQ artefact.
            </p>
            <p>
              Current work includes reusable Rise components for questions, feedback,
              scenario and decision patterns, alongside implementation guidance for when a
              native Rise block is already the better answer.
            </p>
          </div>
        </div>
      </section>

      <section className="record-band" aria-labelledby="eds-data-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Current extension</p>
            <h2 id="eds-data-title">Learning data is becoming part of the design system.</h2>
          </div>
          <div>
            <p>
              Default course exports can tell an organisation that an activity happened without
              necessarily saying anything useful about the learning decision behind it. The system
              is now extending into xAPI governance: statement intent, naming, a shared profile and
              data dictionary, and custom Rise outputs where the default telemetry is too blunt.
            </p>
            <p>
              That changes xAPI from a technical add-on into another governed design decision:
              decide what evidence is meaningful first, then implement the statement that carries it.
            </p>
          </div>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="eds-decisions-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Decisions</p>
            <h2 id="eds-decisions-title">Three decisions that define the system</h2>
          </div>
          <ol className="record-map">
            <li>
              <p className="record-map__context">Core and implementation</p>
              <h3>Keep the reusable system neutral; let brands consume it.</h3>
              <p>A branded implementation should prove the system, not become the definition of it.</p>
            </li>
            <li>
              <p className="record-map__context">Implementation complexity</p>
              <h3>Use the least complex implementation that fully supports the learning purpose.</h3>
              <p>Custom code is valuable when it creates behaviour the native platform cannot provide. It is not a quality signal by itself.</p>
            </li>
            <li>
              <p className="record-map__context">Learning evidence</p>
              <h3>Govern what learning data means before governing how it is emitted.</h3>
              <p>xAPI statements become useful when their verbs, objects and context correspond to a deliberate evidence question rather than a default export.</p>
            </li>
          </ol>

          <p className="record-widen">
            <a href={CURRENT_REFERENCE} target="_blank" rel="noopener noreferrer">
              Open the current reference implementation
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
          <p className="record-widen"><Link to="/work">Return to Work</Link></p>
        </div>
      </section>
    </>
  );
}
