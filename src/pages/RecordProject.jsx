import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { wellbeingProject, wellbeingRecords } from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';

export default function RecordProject() {
  const project = wellbeingProject;

  return (
    <>
      <Seo
        title={`${project.title} — Project | Glenn Hammond`}
        description="Wellbeing Studio 2027: product strategy, experience architecture, contextual entry and the move from a content portal towards a connected workplace wellbeing service."
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
            <p className="eyebrow">{project.organisation} · {project.period}</p>
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

      <section className="record-band record-band--raised" aria-labelledby="project-context-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Context</p>
            <h2 id="project-context-title">The shape of the work</h2>
          </div>
          <p>{project.context}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="trajectory-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Trajectory</p>
            <h2 id="trajectory-title">What changed as the work moved</h2>
          </div>

          <ol className="record-trajectory">
            {project.trajectory.map((step) => (
              <li key={`${step.period}-${step.label}`} id={step.id} tabIndex={step.id ? -1 : undefined}>
                <p className="record-trajectory__period">{step.period}</p>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="record-band record-band--raised" aria-labelledby="record-map-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Decisions</p>
            <h2 id="record-map-title">Decisions worth examining</h2>
          </div>

          <ol className="record-map">
            {wellbeingRecords.map((record) => (
              <li key={record.id}>
                <p className="record-map__context">{record.centre} · 2026</p>
                <h3><Link to={record.path}>{record.title}</Link></h3>
                <p>{record.worthExamining}</p>
                <Link className="record-map__action" to={record.path}>
                  Examine the decision
                </Link>
              </li>
            ))}
          </ol>

          <Link className="record-widen" to="/work">Return to Work</Link>
        </div>
      </section>
    </>
  );
}
