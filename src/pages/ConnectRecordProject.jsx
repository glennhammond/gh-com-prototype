import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { connectProject, connectRecords } from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './ConnectRecord.css';

export default function ConnectRecordProject() {
  const project = connectProject;

  return (
    <>
      <Seo
        title={`${project.title} — Project | Glenn Hammond`}
        description="ISQ Connect & Learn: a platform migration, learning architecture and more than sixty Storyline course rebuilds delivered as one system."
        path={project.path}
        jsonLd={graph(personSchema, breadcrumbSchema([
          { name: 'Work', href: '/work' },
          { name: project.title, href: project.path },
        ]))}
      />

      <header className="record-opening connect-project-opening">
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

      <section className="record-band record-band--raised" aria-labelledby="connect-context-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Context</p>
            <h2 id="connect-context-title">The platform could not wait for the courses. The courses could not wait for the platform.</h2>
          </div>
          <p>{project.context}</p>
        </div>
      </section>

      <section className="record-band" aria-labelledby="connect-record-map-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Decisions</p>
            <h2 id="connect-record-map-title">Decisions worth examining</h2>
          </div>

          <ol className="record-map">
            {connectRecords.map((record) => (
              <li key={record.id}>
                <p className="record-map__context">{record.centre} · 2024</p>
                <h3><Link to={record.path}>{record.title}</Link></h3>
                <p>{record.worthExamining}</p>
                <Link className="record-map__action" to={record.path}>Examine the decision</Link>
              </li>
            ))}
          </ol>

          <Link className="record-widen" to="/work">Return to Work</Link>
        </div>
      </section>
    </>
  );
}
