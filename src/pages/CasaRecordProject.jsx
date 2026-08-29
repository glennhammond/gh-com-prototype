import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { casaProject, casaRecords } from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './CasaRecord.css';

export default function CasaRecordProject() {
  const project = casaProject;

  return (
    <>
      <Seo
        title={`${project.title} — Project | Glenn Hammond`}
        description="CASA Flight Examiner Rating Course: regulated professional learning, assessment design and evidence for experienced aviation examiners."
        path={project.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: project.title, href: project.path },
          ]),
        )}
      />

      <header className="record-opening casa-project-opening">
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

      <section className="record-band record-band--raised" aria-labelledby="casa-context-title">
        <div className="container record-band__split">
          <div className="record-band__copy">
            <p className="eyebrow">Context</p>
            <h2 id="casa-context-title">Assessment inside a safety regulator</h2>
          </div>
          <div>
            <p>{project.context}</p>
            <p className="casa-project-parent">
              The course sits inside a wider six-year CASA learning program spanning
              platforms, information architecture, production systems and multimedia.
            </p>
            <Link className="record-widen" to="/work/casa">View the wider CASA program</Link>
          </div>
        </div>
      </section>

      <section className="record-band" aria-labelledby="casa-record-map-title">
        <div className="container">
          <div className="record-band__copy">
            <p className="eyebrow">Decision</p>
            <h2 id="casa-record-map-title">A decision worth examining</h2>
            <p>
              How could regulated professional learning support judgement without reducing it to recall?
            </p>
          </div>

          <ol className="record-map">
            {casaRecords.map((record) => (
              <li key={record.id}>
                <p className="record-map__context">{record.centre} · CASA</p>
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
