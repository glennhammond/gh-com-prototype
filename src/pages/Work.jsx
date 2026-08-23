import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { contextualEntryRecord, workProjects } from '../content/the-record.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './Work.css';

export default function Work() {
  return (
    <>
      <Seo
        title="Work — THE RECORD | Glenn Hammond"
        description="A curated field of projects and professional evidence across digital learning, product design, platforms, interaction and production systems."
        path="/work"
        jsonLd={graph(personSchema, breadcrumbSchema([{ name: 'Work', href: '/work' }]))}
      />

      <header className="record-work-head">
        <div className="container record-work-head__inner">
          <p className="eyebrow">THE RECORD · Work</p>
          <h1>Work is where the practice is composed, not catalogued.</h1>
          <p>
            Projects establish territory. Records narrow attention to the decisions,
            making and evidence worth examining inside it.
          </p>
        </div>
      </header>

      <section className="record-field" aria-label="Selected project territories">
        <div className="container record-field__grid">
          {workProjects.map((project, index) => {
            const isWellbeing = project.id === 'wellbeing-studio-2027';
            return (
              <article
                key={project.id}
                className={`record-anchor record-anchor--${index + 1}${isWellbeing ? ' record-anchor--lead' : ''}`}
                aria-labelledby={`record-anchor-${project.id}`}
              >
                <div className="record-anchor__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="record-anchor__body">
                  <p className="record-anchor__meta">
                    {project.organisation} · {project.period}
                  </p>
                  <h2 id={`record-anchor-${project.id}`}>
                    <Link to={project.path}>{project.title}</Link>
                  </h2>
                  <p className="record-anchor__proposition">{project.proposition}</p>
                  <p className="record-anchor__role">{project.role}</p>

                  {isWellbeing && (
                    <div className="record-point" aria-labelledby="contextual-record-title">
                      <p className="record-point__context">Inside this territory</p>
                      <h3 id="contextual-record-title">
                        <Link to={contextualEntryRecord.path}>{contextualEntryRecord.title}</Link>
                      </h3>
                      <p>{contextualEntryRecord.worthExamining}</p>
                      <Link className="record-point__action" to={contextualEntryRecord.path}>
                        Examine the decision
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
