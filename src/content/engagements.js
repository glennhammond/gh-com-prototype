import { STATUS, SOURCE } from "./status.js";

/**
 * Engagements — Blueprint §14.
 *
 * Four defined engagements rather than six parallel service lines. Six services
 * describe what Glenn can do; four engagements describe what a client can buy,
 * and the first one is deliberately small so there is a low-risk way in.
 *
 * No prices. The blueprint recommends indicative ranges on the entry offer only,
 * and only after three or four have been sold — inventing figures here would
 * anchor fees against a number nobody has tested.
 */

export const engagements = [
  {
    id: "system-review",
    name: "Learning System Review",
    kind: "Entry point",
    duration: "2–3 weeks",
    layers: ["experience", "content", "platform", "operations"],
    lede: "A read across all four layers, ending in a plan a budget holder can act on.",
    buyer:
      "A learning or capability lead who suspects the platform is the problem but cannot yet prove it.",
    trigger:
      "Falling completion, rising administrative load, a renewal decision, an accessibility complaint, or a new leader asking why it costs this much.",
    includes: [
      "Assessment across all four layers",
      "Stakeholder interviews",
      "Learner-journey walkthrough",
      "Accessibility and performance check",
      "Written findings with a prioritised roadmap",
    ],
    excludes: ["Implementation", "Content production", "Procurement management"],
    outcome:
      "A defensible plan the client can take to a budget holder — whether or not I do the work that follows.",
    evidence: ["connect-and-learn", "wellbeing-studio"],
    nextStep: "A 30-minute call to scope it",
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
  {
    id: "platform-programme",
    name: "Platform & program Delivery",
    kind: "Full delivery",
    duration: "3–9 months",
    layers: ["experience", "content", "platform", "operations"],
    lede: "Strategy, build and content as one piece of work, handed over so the client's own team can run it.",
    buyer:
      "An organisation replacing, migrating or building a learning environment and the content that lives in it.",
    trigger:
      "An LMS contract ending, a merger, a failed implementation, or a new mandatory program.",
    includes: [
      "Strategy and learning architecture",
      "Platform build or migration",
      "Content design and production",
      "The production system and workflows to sustain it",
      "Launch and a defined handover period",
    ],
    excludes: [
      "Ongoing hosting management and helpdesk beyond the agreed handover",
    ],
    outcome:
      "A live environment the client's own team can operate without me.",
    evidence: ["wellbeing-studio", "connect-and-learn", "goodstart-myportal"],
    nextStep: "Usually preceded by a System Review",
    note: "Documented decisions, a design system the client keeps and a named handover period are part of the scope, not reassurance.",
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
  {
    id: "production-system",
    name: "Production & Design System",
    kind: "Layer 04",
    duration: "4–8 weeks",
    layers: ["operations"],
    lede: "The system that lets an in-house team produce faster and more consistently without me in the room.",
    buyer:
      "An in-house learning team producing inconsistent output at unsustainable cost.",
    trigger:
      "Team growth, a brand refresh, an accessibility obligation, or an audit that found six versions of the same template.",
    includes: [
      "Tokens, components and templates",
      "Figma-to-authoring-tool workflow",
      "Accessibility rules built into the templates",
      "Asset register, naming and governance",
      "Team enablement",
    ],
    excludes: ["Ongoing course production"],
    outcome:
      "The team produces faster and more consistently, and quality stops depending on who happens to build it.",
    evidence: ["flight-examiner-rating"],
    nextStep: "A walkthrough of the system you have now",
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
  {
    id: "embedded",
    name: "Embedded Specialist",
    kind: "Ongoing",
    duration: "Agreed days per month",
    layers: ["platform", "operations"],
    lede: "Depth on demand for a capable team that is missing one layer.",
    buyer:
      "An organisation with a good team missing one layer — usually Platform or Operations.",
    trigger:
      "A vacancy that cannot be filled, a delivery peak, or a capability gap that keeps recurring.",
    includes: [
      "Agreed days per month",
      "Architecture and design decisions",
      "Team mentoring",
      "Specialist production",
    ],
    excludes: ["Line management", "On-call support"],
    outcome: "Depth on demand without a permanent hire.",
    evidence: ["connect-and-learn", "flight-examiner-rating"],
    nextStep: "A conversation about what is missing",
    note: "This is also the home for agency partnership and white-label work, which is welcome.",
    status: STATUS.PROPOSED,
    source: SOURCE.BLUEPRINT,
  },
];
