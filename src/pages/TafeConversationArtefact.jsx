import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import {
  tafeConversationArtefact,
  tafeConversationRecord,
  tafeProject,
} from '../content/the-record.js';
import { getImage } from '../lib/media.js';
import { breadcrumbSchema, graph, personSchema } from '../lib/schema.js';
import './RecordExperience.css';
import './TafeRecord.css';

const evidence = [
  {
    type: 'single',
    image: 'tafe-wireframe',
    label: '01 · Structure before surface',
    title: 'A hub, not a funnel',
    alt: 'A wireframe flow diagram of the Pathways tool, showing an entry screen, a central hub and grouped screen clusters with connections between exploration modes.',
    body: 'The recovered wireframe shows the modes connected around a hub rather than arranged as one required sequence. That structure makes it possible for a facilitator to move with the conversation instead of advancing a prescribed lesson.',
  },
  {
    type: 'single',
    image: 'tafe-industry-data',
    label: '02 · Shared reference points',
    title: 'Comparable industry data',
    alt: 'A TAFE Queensland industry data screen over a construction site photograph, listing six labour-market measures and showing a large number employed figure with persistent navigation below.',
    body: 'The same categories are positioned consistently across industries, creating reference points a facilitator and group can compare together. The dynamic statistic treatment was implemented at SkillsTech’s request using JavaScript.',
  },
  {
    type: 'pair',
    images: ['tafe-map-admin', 'tafe-map-trades'],
    label: '03 · Spatial exploration',
    title: 'Put careers into an environment',
    alts: [
      'An isometric three-dimensional city map with pins marking workplaces and a category rail for administration roles.',
      'The same isometric environment filtered to trades, with different workplace pins and category controls.',
    ],
    body: 'Changing the career category changes the pins while the environment remains recognisable. The map gives the adviser something visual to ask about: where the work happens, what sits near what, and how one career differs from another.',
  },
  {
    type: 'single',
    image: 'tafe-slideshow',
    label: '04 · Workplace context',
    title: 'Let the environment carry part of the explanation',
    alt: 'A full-bleed workplace photograph in the Pathways slideshow mode with previous and next controls and persistent bottom navigation.',
    body: 'Workplace imagery adds scale and environment that salary or course data cannot. Because navigation persists, the facilitator can move from a visual prompt back into data or job profiles without resetting the session.',
  },
];

function Picture({ name, alt, eager = false }) {
  const image = getImage(name);
  if (!image) return null;
  return (
    <picture>
      <source type="image/avif" srcSet={image.avif} sizes="(min-width: 900px) 50vw, 94vw" />
      <source type="image/webp" srcSet={image.webp} sizes="(min-width: 900px) 50vw, 94vw" />
      <img src={image.src} alt={alt} width={image.width} height={image.height}
        loading={eager ? 'eager' : 'lazy'} decoding={eager ? 'sync' : 'async'} />
    </picture>
  );
}

export default function TafeConversationArtefact() {
  const location = useLocation();
  const internalEntry = Boolean(location.state?.fromRecord);
  const returnFocusId = location.state?.returnFocusId;

  return (
    <>
      <Seo
        title={`${tafeConversationArtefact.title} — Artefact | Glenn Hammond`}
        description="Inspect recovered TAFE Queensland SkillsTech Pathways artefacts showing the non-linear structure, industry data, career map and workplace imagery used in facilitator-led school sessions."
        path={tafeConversationArtefact.path}
        jsonLd={graph(
          personSchema,
          breadcrumbSchema([
            { name: 'Work', href: '/work' },
            { name: tafeProject.title, href: tafeProject.path },
            { name: tafeConversationRecord.title, href: tafeConversationRecord.path },
            { name: tafeConversationArtefact.title, href: tafeConversationArtefact.path },
          ]),
        )}
      />

      <article className="artefact-inspection artefact-inspection--tafe">
        <div className="container">
          <div className="artefact-inspection__head">
            <div>
              <p className="artefact-kicker">{tafeConversationArtefact.provenance}</p>
              <h1>{tafeConversationArtefact.title}</h1>
            </div>
            <div>
              <p className="artefact-inspection__summary">{tafeConversationArtefact.summary}</p>
              <Link className="artefact-back" to={tafeConversationRecord.path}
                state={internalEntry && returnFocusId ? { restoreFocusId: returnFocusId } : undefined}>
                {internalEntry ? 'Return to Record' : 'View Record'}
              </Link>
            </div>
          </div>

          <div className="tafe-evidence-sequence">
            {evidence.map((item, index) => (
              <figure className={`tafe-evidence-figure tafe-evidence-figure--${item.type}`} key={item.label}>
                <div className="tafe-evidence-figure__media">
                  {item.type === 'pair' ? (
                    <div className="tafe-evidence-pair">
                      {item.images.map((name, imageIndex) => (
                        <Picture key={name} name={name} alt={item.alts[imageIndex]} />
                      ))}
                    </div>
                  ) : (
                    <Picture name={item.image} alt={item.alt} eager={index === 0} />
                  )}
                </div>
                <figcaption>
                  <p className="artefact-kicker">{item.label}</p>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <aside className="tafe-evidence-conclusion">
            <p className="artefact-kicker">The interaction contract</p>
            <h2>Explore together. Change direction without losing context.</h2>
            <p>
              The historical interface is not modernised here. Its value as evidence
              is precisely that the original structure, imagery and Storyline-era
              interaction remain visible inside contemporary editorial framing.
            </p>
          </aside>

          <div className="artefact-notes">
            <div>
              <h2>What changed in the record</h2>
              <p>
                An older portfolio description characterised Pathways as self-directed.
                The later editorial inventory corrects that interpretation: it was
                designed for facilitator-led Years 8–9 school sessions supporting a
                careers adviser’s conversation. This Artefact follows that newer evidence.
              </p>
            </div>
            <div>
              <h2>Evidence treatment</h2>
              <p>{tafeConversationArtefact.accessibility}</p>
              <p>
                The recovered interface screens are historical evidence. No attempt is
                made to redesign their typography, colour, navigation or visual style.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
