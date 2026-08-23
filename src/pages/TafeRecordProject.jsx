import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { tafeProject, tafeRecords } from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './TafeRecord.css';

export default function TafeRecordProject() {
  const project = tafeProject;

  return (
    <>
      <Seo
        title={`${project.title} — Project | Glenn Hammond`}
        description="TAFE Queensland SkillsTech Pathways: a facilitator-led interactive careers platform for Years 8–9 school sessions."
        path={project.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: project.title, href: project.path },
          ]),
        )}
      />

      <header className="record-opening tafe-project-opening">
        <div className="container record-opening__grid">
          <div>
            <p className="eyebrow">{project.organisation} · {project.period}</p>
            <h1 className="record-opening__title">{project.title}</h1>
            <p className="record-opening__lede">{project.proposition}</p>
          </div>

          <dl className="record-facts">
            <div><dt>State</dt><dd>{project.state}</dd></div>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Altitude</dt><dd>{project.altitude}</dd></div>
          </dl>
        </div>
      </header>

      <section className="record-band record-band--raised" aria-labelledby="tafe-context-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Territory</p>
            <h2 id="tafe-context-title">A digital environment inside a human conversation</h2>
          </div>
          <div>
            <p>{project.context}</p>
            <p className="tafe-project-note">
              The platform contained information for approximately twenty careers and
              was designed for facilitated school sessions rather than as a replacement
              for the careers adviser in the room.
            </p>
          </div>
        </div>
      </section>

      <section className="record-band" aria-labelledby="tafe-record-map-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Evidence landscape</p>
            <h2 id="tafe-record-map-title">Records</h2>
            <p>
              The first Record examines the central experience decision: what the
              technology should do when a human facilitator is already part of the service.
            </p>
          </div>

          <ol className="record-map">
            {tafeRecords.map((record) => (
              <li key={record.id}>
                <p className="record-map__context">{record.centre} · historical</p>
                <h3><Link to={record.path}>{record.title}</Link></h3>
                <p>{record.worthExamining}</p>
                <Link className="record-map__action" to={record.path}>
                  Examine the Record
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
