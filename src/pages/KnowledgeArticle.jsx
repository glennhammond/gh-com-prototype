import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { EvidenceNote } from '../components/Editorial.jsx';
import { SectionHead } from '../components/Section.jsx';
import { knowledgeByPath } from '../content/knowledge.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import NotFound from './NotFound.jsx';
import './KnowledgeArticle.css';

export default function KnowledgeArticle() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  const resource = knowledgeByPath[path];

  if (!resource || resource.type !== 'article') return <NotFound />;

  return (
    <>
      <Seo
        title={`${resource.title} | Glenn Hammond`}
        description={resource.description}
        path={resource.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: resource.title, href: resource.path },
          ]),
        )}
      />

      <article className="knowledge-article">
        <header className="section container container--narrow knowledge-article__header">
          <SectionHead level={1} eyebrow={resource.eyebrow} headline={resource.title} />
          <p className="knowledge-article__updated">Updated {resource.updated}</p>
          <div className="knowledge-article__intro">
            {resource.introduction.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="knowledge-article__body">
          {resource.sections.map((section, index) => {
            const id = `knowledge-section-${index + 1}`;
            return (
              <section
                key={section.heading}
                className={`section ${index % 2 === 1 ? 'knowledge-article__section--raised' : ''}`}
                aria-labelledby={id}
              >
                <div className="container container--narrow">
                  <p className="eyebrow">{String(index + 1).padStart(2, '0')}</p>
                  <h2 id={id} className="display-m">{section.heading}</h2>

                  {section.paragraphs?.length ? (
                    <div className="knowledge-article__copy">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="knowledge-article__list">
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}

                  {section.ordered?.length ? (
                    <ol className="knowledge-article__steps">
                      {section.ordered.map((item, stepIndex) => (
                        <li key={item}>
                          <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>

        <section className="section knowledge-article__sources" aria-labelledby="knowledge-sources">
          <div className="container container--narrow">
            <p className="eyebrow">Current product references</p>
            <h2 id="knowledge-sources" className="display-m">Sources checked for this refresh</h2>
            <ul>
              {resource.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.label}<span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <EvidenceNote>{resource.evidenceNote}</EvidenceNote>
          </div>
        </section>
      </article>
    </>
  );
}
