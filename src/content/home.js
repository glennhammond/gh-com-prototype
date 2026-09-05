import { STATUS, SOURCE } from './status.js';

/** Home copy for Glenn Hammond's public practice and body of work. */
export const home = {
  status: STATUS.APPROVED,
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
    headline: 'Current systems, product work and evidence from earlier practice.',
    standfirst:
      'Wellbeing Studio shows contemporary product and service work. The eLearning Design System shows reusable learning patterns, components, governance and learning-data design. Connect & Learn shows platform and content migration at scale. CASA shows regulated professional learning.',
  },
  buy: {
    eyebrow: 'Practice',
    headline: 'The work changes scale. The responsibility does not.',
    standfirst:
      'Across these projects the work moves between product strategy, experience architecture, learning design, interaction, platforms, production and implementation.',
    body:
      'Certain decisions keep recurring: frame the real situation, keep connected decisions connected, and solve at the scale the problem requires.',
    cta: { href: '/practice', label: 'Read the practice' },
  },
  person: {
    eyebrow: 'The practice',
    headline: 'Frame. Shape. Make. Evidence.',
    body: [
      'I work across product strategy, experience architecture, learning design, visual design, media, platforms and implementation; the useful boundary is the point where the problem is genuinely solved.',
      'The work here includes both the decisions and the things that were made, because good ideas still have to survive contact with real users, real platforms and real production constraints.',
    ],
    cta: { href: '/practice', label: 'How the practice works' },
  },
  close: {
    headline: 'Start with the problem, not the service label.',
    body:
      'If you recognise something in the work, describe what is happening. A few sentences is enough to start.',
    cta: { href: '/contact', label: 'Contact Glenn' },
  },
  seo: {
    title: 'Glenn Hammond — digital learning, products & experience design',
    description:
      'Glenn Hammond is a Brisbane-based Digital Learning & Experience Designer working across eLearning, digital products, platforms and systems, with first-hand project evidence from Australian education, aviation and workplace wellbeing.',
  },
};
