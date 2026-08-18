import { STATUS, SOURCE } from "./status.js";

/**
 * Site settings, navigation and contact details.
 * Facts here are confirmed in the Master Copy unless marked otherwise.
 */

export const site = {
  origin: "https://glennhammond.com",
  name: "Glenn Hammond",

  /** Practice descriptor replaces the role title as the headline claim (BP §8).
   *  The role title is retained on About and in structured data. */
  descriptor: "Learning systems",
  descriptorLong:
    "Learning systems · platforms, programmes and the production behind them",
  roleTitle: "Digital Learning & Experience Designer",

  location: {
    locality: "Brisbane",
    region: "QLD",
    country: "AU",
    served: "Australia",
    label: "Brisbane, working with organisations Australia-wide",
    status: STATUS.APPROVED,
    source: SOURCE.MASTER_COPY,
  },

  email: "glenn@glennhammond.com",
  linkedin: "https://linkedin.com/in/glennhammond/",

  /** Confirmed in the Master Copy: "Set the enquiry response expectation to
   *  within 24 hours." Rendered on Contact and in the homepage close. */
  responsePromise: {
    text: "I read every enquiry myself and reply within 24 hours.",
    short: "Replies within 24 hours",
    status: STATUS.APPROVED,
    source: SOURCE.MASTER_COPY,
  },

  /** Confirmed decision: availability status is not displayed. */
  showAvailability: false,
  /** Confirmed decision: no public downloadable CV. */
  offerCvDownload: false,
};

/** Four primary destinations, plus Contact as the header CTA. /practice is
 *  the canonical route (docs/SEO-MIGRATION.md, DECISIONS.md #19); its nav
 *  label reads "Capabilities". Approach is a distinct fourth entry: how the
 *  four layers connect, as opposed to what gets built inside each one. */
export const nav = [
  { href: "/work", label: "Work" },
  { href: "/practice", label: "Capabilities" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
];

export const navCta = { href: "/contact", label: "Start a conversation" };

export const footerLinks = [
  ...nav,
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];
