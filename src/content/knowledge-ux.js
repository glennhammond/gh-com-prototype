// @ts-check

/**
 * Retained UX knowledge rebuilt from first-hand THE RECORD evidence.
 *
 * Kept separate from the core knowledge file so the route-independent search
 * metadata remains small and each substantial authority resource can evolve
 * without turning retained knowledge into a monolithic blog content store.
 */

export const uxLearningResource = {
  id: 'ux-for-learning',
  type: 'article',
  path: '/blog/ux-for-learning',
  eyebrow: 'Retained knowledge · Learning experience design',
  title: 'UX for Learning: Reduce the Distance to Useful Action',
  description:
    'A first-hand UX argument drawn from workplace wellbeing, regulated aviation learning, careers exploration and platform migration: design around the situation a person is in, preserve useful human judgement, and remove decisions the user should not have to make.',
  updated: '24 August 2026',
  introduction: [
    'I used to talk about UX in learning mainly through interface details: hierarchy, navigation, typography, spacing, feedback. Those things matter, but years of designing learning products and platforms have made the larger pattern clearer. The most consequential UX decisions usually happen before the interface is polished.',
    'The question I now come back to is simple: what is the person trying to do here, and how much unnecessary work does the product make them do before something useful happens? Sometimes the answer is fewer choices. Sometimes it is preserving a human conversation. Sometimes it is refusing to simplify a professional judgement into a quiz. The interface is only the visible edge of those decisions.',
  ],
  sections: [
    {
      heading: 'Start with the situation, not the content tree',
      paragraphs: [
        'A content library naturally wants to organise itself around categories because categories describe what the organisation owns. A person arriving between meetings does not necessarily know which category they want. They know they have three minutes, their shoulders are tight, or their head is full.',
        'In Wellbeing Studio, that changed the entry architecture. Before Work, During Work and After Work became the primary lens, with a “Right now” suggestion giving someone a credible first action. Need, practice type and duration still exist, but they are refinements rather than the price of admission.',
      ],
      bullets: [
        'Ask what the user knows at the moment of entry, not what taxonomy the content team knows.',
        'Provide a believable default when the situation already gives you enough context.',
        'Keep deeper browse and filtering available for deliberate exploration without forcing everyone through it.',
        'Measure success by distance to a useful action, not by how comprehensively the navigation exposes the catalogue.',
      ],
    },
    {
      heading: 'A human expert can be part of the interface',
      paragraphs: [
        'Digital products often assume that self-service is the mature state and human involvement is friction to remove. TAFE Queensland SkillsTech Pathways had the opposite condition: a careers adviser was already in the room with Years 8–9 students, and that expertise was valuable.',
        'The product therefore became an explorable environment rather than a guided funnel. Industry data, job profiles, workplace imagery, maps and summaries sat in parallel so the adviser could follow the room’s curiosity. The software did not try to become the careers adviser. It made the adviser better equipped to have the conversation.',
      ],
      bullets: [
        'Do not automate a human role simply because software can answer some of the same questions.',
        'Design for the relationship between person, expert and information when the expert is part of the real experience.',
        'Persistent navigation can be more useful than linear progression when the conversation determines what should come next.',
        'A digital product can create value by increasing the range and quality of a human interaction, not only by eliminating one.',
      ],
    },
    {
      heading: 'Do not simplify away the judgement the work depends on',
      paragraphs: [
        'The Flight Examiner Rating work at CASA exposed a different UX failure mode. The audience were experienced assessors working in a safety-regulated domain. Restating regulation accurately would have produced a document. Simplifying it until it felt easy could have made it wrong.',
        'The experience therefore centred the reasoning an examiner had to perform: which instrument governs, what makes assessment sound, and what sits underneath the task that is immediately visible. The job of the interface was not to make the subject look simple. It was to make the structure of professional judgement inspectable and usable.',
      ],
      bullets: [
        'Reduce avoidable cognitive load without removing the complexity that is intrinsic to expert work.',
        'Show relationships between rules and concepts when the relationship is what supports a decision.',
        'Use visual explanation for invisible structures — not as decoration, but because a paragraph may hide the model the learner needs.',
        'Design credibility matters most when the audience already knows the domain well enough to detect a superficial treatment.',
      ],
    },
    {
      heading: 'Keep connected decisions connected',
      paragraphs: [
        'UX problems are often created by organisational sequencing. During the Connect & Learn migration, the platform and more than sixty Storyline courses were changing in the same three-month engagement. Designing the destination first and rebuilding the content afterwards would have made early platform assumptions look final. Rebuilding the courses first would have designed them for a platform that was being replaced.',
        'The useful move was to keep platform architecture and content redevelopment in conversation. UX was not a downstream layer applied once the “real” technical decisions had been made; the shape of the courses helped define what the platform needed, and the emerging platform constrained what the courses should become.',
      ],
      bullets: [
        'Do not separate decisions merely because different disciplines usually own them.',
        'Treat content, interaction, platform and operational behaviour as one system when users experience them as one system.',
        'Use real content to test architecture before infrastructure choices become expensive to reverse.',
        'A clean hand-off is not always a virtue; sometimes the hand-off is exactly where the product loses coherence.',
      ],
    },
    {
      heading: 'Authentication and navigation are interruptions until they prove otherwise',
      paragraphs: [
        'The Wellbeing Studio work also changed how I think about account behaviour. Authentication is important infrastructure, but from the participant’s point of view it is often an interruption between an intention and the thing they came to do.',
        'That led to a stronger product rule: preserve original intent through authentication and require identity only when it creates participant value. The same principle applies to navigation. A menu is useful when someone needs orientation or choice; it is overhead when the product already knows enough to continue the task.',
      ],
      bullets: [
        'Never make sign-in the destination when it is only a gate on the way to something else.',
        'Return people to the action they intended after authentication rather than to a generic home screen.',
        'Ask whether continuity, saving or personalisation earns the cost of identity before requiring it.',
        'Do not equate more navigation with more control; sometimes control means the product remembering why the person arrived.',
      ],
    },
    {
      heading: 'The five questions I now use',
      ordered: [
        'What does the person already know about their need when they arrive?',
        'Which decisions are genuinely theirs to make, and which are work the product can remove?',
        'Is there a useful human relationship here that the digital experience should support rather than replace?',
        'What complexity is accidental interface friction, and what complexity belongs to the real professional judgement?',
        'Which content, platform, operational and identity decisions must stay connected because the user experiences them together?',
      ],
    },
    {
      heading: 'UX is the behaviour of the whole system',
      paragraphs: [
        'Typography, spacing, motion and feedback still matter. They affect legibility, confidence and the amount of effort a screen asks for. But they cannot rescue a product that asks the wrong first question, separates decisions that belong together, or turns expert practice into a content funnel.',
        'That is the shift I would make to my earlier UX advice now: design the behaviour of the whole system first. Then make the visible interface express that behaviour clearly, calmly and accessibly.',
      ],
    },
  ],
  evidence: [
    {
      label: 'Wellbeing Studio — Designing entry around moments in the working day',
      href: '/work/wellbeing-studio/contextual-entry',
    },
    {
      label: 'Wellbeing Studio — From content portal to connected wellbeing service',
      href: '/work/wellbeing-studio/connected-service',
    },
    {
      label: 'TAFE Queensland SkillsTech — Designing technology to support a conversation, not replace it',
      href: '/work/tafe-pathways/supporting-conversation',
    },
    {
      label: 'CASA — Designing for examiner judgement rather than recall',
      href: '/work/casa/flight-examiner-rating/examiner-judgement',
    },
    {
      label: 'ISQ Connect & Learn — Designing platform migration and course redevelopment as one system',
      href: '/work/connect-and-learn/concurrent-migration',
    },
  ],
  sources: [],
  evidenceNote:
    'This URL is retained from the earlier glennhammond.com article estate, but the article has been rewritten from current first-hand Project and Record evidence rather than lightly refreshing the previous generic UX list. The examples link directly to the evidence surfaces that support each argument; the page does not claim measured learner outcomes where THE RECORD does not support them.',
};
