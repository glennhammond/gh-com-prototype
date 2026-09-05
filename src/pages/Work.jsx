import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { recordIndex, workProjects } from '../content/public-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './Work.css';

export default function Work() {
  return (
    <>
      <Seo
        title="Work | Glenn Hammond"
        description="Projects across digital products, experiences, learning and systems, opening into the decisions that shaped them and the work that can support those decisions."
        path="/work"
        jsonLd={graph(personSchema, breadcrumbSchema([{ name: 'Work', href: '/work' }]))}
      />

      <header className="record-work-head">
        <div className="container record-work-head__inner">
          <p className="eyebrow">Work</p>
          <h1>Work</h1>
          <p>
            Projects across digital products, experiences, learning and systems. Each opens into
            the decisions that shaped it and the work that can support those decisions.
          </p>
        </div>
      </header>

      <section className="record-field" aria-label="Selected projects">
        <div className="container record-field__grid">
          {workProjects.map((project, index) => {
            const records = project.recordIds.map((id) => recordIndex.recordById[id]).filter(Boolean);
            const placement = project.placements.find((item) => item.surface === 'work');
            const featured = Boolean(placement?.featured);

            return (
              <article
                key={project.id}
                className={`record-anchor record-anchor--${index + 1}${featured ? ' record-anchor--lead' : ''}`}
                aria-labelledby={`record-anchor-${project.id}`}
              >
                <div className="record-anchor__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="record-anchor__body">
                  <p className="record-anchor__meta">{project.organisation} · {project.period}</p>
                  <h2 id={`record-anchor-${project.id}`}>
                    <Link to={project.path}>{project.title}</Link>
                  </h2>
                  <p className="record-anchor__proposition">{project.proposition}</p>
                  <p className="record-anchor__role">{project.role}</p>

                  {records.map((record) => (
                    <div
                      key={record.id}
                      className="record-point"
                      aria-labelledby={`work-record-${record.id}`}
                    >
                      <p className="record-point__context">{record.centre}</p>
                      <h3 id={`work-record-${record.id}`}>
                        <Link to={record.path}>{record.title}</Link>
                      </h3>
                      <p>{record.worthExamining}</p>
                      <Link className="record-point__action" to={record.path}>
                        Examine the decision
                      </Link>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
