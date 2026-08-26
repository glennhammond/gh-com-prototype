import { STATUS, SOURCE } from './status.js';

/** Home copy for Glenn Hammond's public practice and body of work. */
export const home = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,
  hero: {
    eyebrow: 'Digital products · experiences · learning · systems',
    headline: 'Thirty years of making digital things.',
    standfirst:
      'Still learning how to make them better. I work across digital products, experiences, learning and systems, usually where the problem crosses more than one of those boundaries.',
    primaryCta: { href: '/work', label: 'View the work' },
    secondaryCta: { href: '/practice', label: 'Read the practice' },
  },
  proof: {
    items: [
      { value: '15+', label: 'years designing digital learning across education, aviation and workplace wellbeing' },
      { value: '6', label: 'years inside the Civil Aviation Safety Authority' },
      { value: '2×', label: 'Diamond Awards, Best eLearning Project, LearnX 2024' },
      { value: '60+', label: 'Storyline courses rebuilt during the Connect & Learn migration' },
    ],
    clients:
      'Independent Schools Queensland · Civil Aviation Safety Authority · TAFE Queensland · Corporate Yoga Australia',
  },
  work: {
    eyebrow: 'Selected work',
    headline: 'Different periods. Different disciplines. Work that can still be examined.',
    standfirst:
      'Wellbeing Studio shows contemporary product and service work. ISQ shows platform and production systems. CASA shows regulated professional learning. TAFE Pathways preserves historical interaction work without pretending old work is new work.',
  },
  buy: {
    eyebrow: 'Practice',
    headline: 'The work changes scale. The responsibility does not.',
    standfirst:
      'Across these projects the work moves between product strategy, experience architecture, learning design, interaction, platforms, production and implementation.',
    body:
      'Practice is where the recurring patterns are interpreted: how problems are framed, decisions are made, systems are shaped and the work is carried through to something usable.',
    cta: { href: '/practice', label: 'Read the practice' },
  },
  person: {
    eyebrow: 'The practice',
    headline: 'Frame. Shape. Make. Evidence.',
    body: [
      'Show the thinking. Show the making. Show the evidence. I work across product strategy, experience architecture, learning design, visual design, media, platforms and implementation; the useful boundary is the point where the problem is genuinely solved.',
      'I care about the point where a good idea has to survive contact with real users, real platforms and real production constraints. That is why the work here includes both the decisions and the things that were made.',
    ],
    cta: { href: '/practice', label: 'How the practice works' },
  },
  close: {
    headline: 'Start with the problem, not the service label.',
    body:
      'If you recognise something in the work, describe what is happening. A few sentences is enough to start a useful conversation.',
    cta: { href: '/contact', label: 'Contact Glenn' },
  },
  seo: {
    title: 'Glenn Hammond — digital products, experiences, learning and systems',
    description:
      'Glenn Hammond’s work across digital products, experiences, learning, platforms and systems, with projects, decisions and inspectable artefacts from contemporary and historical practice.',
  },
};
