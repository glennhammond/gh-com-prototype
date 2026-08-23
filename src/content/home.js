import { STATUS, SOURCE } from './status.js';

/** Home copy reconciled to THE RECORD canonical entry architecture. */
export const home = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,
  hero: {
    eyebrow: 'Digital design and learning practice · Brisbane',
    headline: 'Thirty years of making digital things.',
    standfirst:
      'Still learning how to make them better. THE RECORD is a selective, living professional evidence system: Projects establish the territory, Records examine consequential decisions, and Artefacts let the evidence be inspected.',
    primaryCta: { href: '/work', label: 'Enter THE RECORD' },
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
    eyebrow: 'Selected evidence',
    headline: 'Four territories. Different weight. One evidence system.',
    standfirst:
      'Wellbeing Studio is the active reference territory. ISQ shows platform and production systems. CASA shows regulated professional learning. TAFE Pathways preserves historical interaction evidence without pretending old work is new work.',
  },
  buy: {
    eyebrow: 'Practice',
    headline: 'The work changes altitude. The responsibility does not.',
    standfirst:
      'Across these projects the work moves between product strategy, experience architecture, learning design, interaction, platforms, production and implementation.',
    body:
      'Practice reads across those projects to find recurring patterns. THE RECORD remains the evidence underneath them, so the claims can be tested against the work.',
    cta: { href: '/practice', label: 'Read the practice' },
  },
  person: {
    eyebrow: 'The practice',
    headline: 'Frame. Shape. Make. Evidence.',
    body: [
      'Show the thinking. Show the making. Show the evidence. I work across product strategy, experience architecture, learning design, visual design, media, platforms and implementation; the useful boundary is the point where the problem is genuinely solved.',
      'This site is part of that evidence. Its information architecture, editorial model, interaction, accessibility and technical implementation are designed to demonstrate the same practice the work describes.',
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
    title: 'Glenn Hammond — digital design and learning practice',
    description:
      'THE RECORD is Glenn Hammond’s selective professional evidence system: projects, decisions and artefacts across digital product, experience architecture, digital learning and learning technology.',
  },
};
