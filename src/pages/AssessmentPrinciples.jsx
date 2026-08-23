import Seo from '../components/Seo.jsx';
import { EvidenceNote } from '../components/Editorial.jsx';
import { SectionHead } from '../components/Section.jsx';
import { knowledgeByPath } from '../content/knowledge.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './AssessmentPrinciples.css';

const resource = knowledgeByPath['/principles-of-assessment-and-rules-of-evidence'];

function PrincipleCard({ item }) {
  return (
    <article className="assessment-card">
      <h3 className="assessment-card__title">{item.name}</h3>
      <p>{item.summary}</p>
      <p className="assessment-card__question">
        <span>Design question</span>
        {item.designQuestion}
      </p>
    </article>
  );
}

function RuleCard({ item }) {
  return (
    <article className="assessment-card">
      <h3 className="assessment-card__title">{item.name}</h3>
      <p>{item.summary}</p>
      <p className="assessment-card__question">
        <span>Judgement question</span>
        {item.judgementQuestion}
      </p>
    </article>
  );
}

export default function AssessmentPrinciples() {
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

      <article className="assessment-resource">
        <header className="section container container--narrow assessment-resource__header">
          <SectionHead level={1} eyebrow={resource.eyebrow} headline={resource.title} />
          <p className="assessment-resource__updated">Updated {resource.updated} · aligned to the 2025 Standards for RTOs</p>
          <div className="assessment-resource__intro">
            {resource.introduction.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <aside className="assessment-resource__jurisdiction">
            <p>{resource.jurisdictionNote}</p>
          </aside>
        </header>

        <section className="section assessment-resource__band on-ink" aria-labelledby="assessment-principles">
          <div className="container container--narrow">
            <p className="eyebrow">Assessment process</p>
            <h2 id="assessment-principles" className="display-m">The four Principles of Assessment</h2>
            <p className="assessment-resource__lede">
              These principles describe the qualities the assessment system and process must support.
            </p>
            <div className="assessment-resource__grid">
              {resource.principles.map((item) => (
                <PrincipleCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section container container--narrow" aria-labelledby="rules-evidence">
          <p className="eyebrow">Assessment judgement</p>
          <h2 id="rules-evidence" className="display-m">The four Rules of Evidence</h2>
          <p className="assessment-resource__lede">
            These rules describe what the assessor must be satisfied about when using evidence to make an individual competency judgement.
          </p>
          <div className="assessment-resource__grid">
            {resource.rules.map((item) => (
              <RuleCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="section assessment-resource__distinction" aria-labelledby="validity-twice">
          <div className="container container--narrow">
            <p className="eyebrow">The useful distinction</p>
            <h2 id="validity-twice" className="display-m">{resource.distinction.heading}</h2>
            <div className="assessment-resource__copy">
              {resource.distinction.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section container container--narrow" aria-labelledby="assessment-application">
          <p className="eyebrow">From standard to practice</p>
          <h2 id="assessment-application" className="display-m">What this means when designing assessment</h2>
          <ol className="assessment-resource__application">
            {resource.application.map((item, index) => (
              <li key={item.slice(0, 48)}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section assessment-resource__sources" aria-labelledby="assessment-sources">
          <div className="container container--narrow">
            <p className="eyebrow">Primary sources</p>
            <h2 id="assessment-sources" className="display-m">Read the current standard and guidance</h2>
            <ul>
              {resource.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.label}
                    <span aria-hidden="true"> ↗</span>
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
