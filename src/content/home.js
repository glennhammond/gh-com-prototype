import { STATUS, SOURCE } from './status.js';

/** Home Foundation 01 copy reconciled to THE RECORD public IA. */
export const home = {
  status: STATUS.PROPOSED,
  source: SOURCE.BLUEPRINT,
  hero: {
    eyebrow: 'Digital design and learning practice · Brisbane',
    headline: 'Thirty years of making digital things.',
    standfirst:
      'Still learning how to make them better. THE RECORD is a living professional evidence system: the projects, decisions, artefacts and outcomes that show how the practice has changed over time.',
    primaryCta: { href: '/work', label: 'Enter THE RECORD' },
    secondaryCta: { href: '/practice', label: 'Read the practice' },
    figure: {
      placeholder: { width: 1600, height: 1000, label: 'WELLBEING STUDIO — 2027 PRODUCT VIEW' },
      alt: 'Placeholder for the 2027 Wellbeing Studio product interface.',
      area: 'Wellbeing Studio 2027',
      caption:
        'The current reference Project: a workplace wellbeing platform being redesigned around useful moments, human-led experiences and continuity across the working day.',
    },
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
    headline: 'Projects establish the territory. Records show what happened inside it.',
    standfirst:
      'Wellbeing Studio, ISQ Connect & Learn, CASA Flight Examiner Rating and TAFE SkillsTech Pathways are the first four territories in THE RECORD.',
  },
  framework: {
    eyebrow: 'Practice',
    headline: 'Frame. Shape. Make. Evidence.',
    standfirst:
      'The altitude changes with the problem. Sometimes the work is an interaction. Sometimes it is an experience. Sometimes it is the system holding the whole thing together.',
  },
  specialistDevelopment: {
    eyebrow: 'Making evidence',
    headline: 'The strategic work still has to survive contact with the tool.',
    standfirst:
      'Systems thinking is not an excuse to stop making. The Record includes the interaction craft, production decisions and constrained-tool work as well as the architecture around them.',
    rise: {
      headline: 'Design systems inside constrained tools',
      body:
        'Reusable patterns, custom components and implementation standards that make authored learning more coherent without pretending the authoring tool is a full web stack.',
      cta: { href: '/work/connect-and-learn', label: 'See the ISQ territory' },
    },
    storyline: {
      headline: 'Interaction when the interaction matters',
      body:
        'Storyline used for judgement, simulation and genuinely useful interaction rather than interaction for its own sake.',
      cta: { href: '/work/casa/flight-examiner-rating', label: 'See the CASA territory' },
    },
  },
  buy: {
    eyebrow: 'Commercial movement',
    headline: 'Make this. Help us work this out. Help us design the system.',
    standfirst:
      'The size of the intervention should match the actual problem, not the size of the sales package.',
    body:
      'Practice explains how I work across those different altitudes. The evidence stays in THE RECORD so the claims can be tested against the work.',
    cta: { href: '/practice', label: 'Read the practice' },
  },
  person: {
    eyebrow: 'The practice',
    headline: 'Show the thinking. Show the making. Show the evidence.',
    body: [
      'I work across product strategy, experience architecture, learning design, visual design, media, platforms and implementation. The useful boundary is not a discipline label; it is the point where the problem is genuinely solved.',
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
      'THE RECORD is Glenn Hammond’s living professional evidence system: projects, decisions, artefacts and outcomes across digital learning, product design and learning technology.',
  },
};
