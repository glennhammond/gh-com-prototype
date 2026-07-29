import { STATUS, SOURCE } from "./status.js";

/**
 * Client register — Blueprint §17.
 *
 * `nameApproved` and `logoApproved` are deliberately separate booleans.
 * Permission to name a client is not permission to display their mark, and
 * conflating the two is exactly how the current codebase ended up shipping
 * three unapproved logos (Torres and Cape HHS, Seqwater, TAFE Queensland).
 *
 * Components must not be able to render an unapproved mark: use
 * `approvedLogos()` / `approvedNames()` rather than reading this array raw.
 */

export const clients = [
  {
    id: "isq",
    name: "Independent Schools Queensland",
    shortName: "Independent Schools Queensland",
    sector: "Education",
    nameApproved: true,
    logoApproved: true,
    logoFile: "isq.png",
    approvalDate: "2026-07-25",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },
  {
    id: "casa",
    name: "Civil Aviation Safety Authority",
    shortName: "Civil Aviation Safety Authority",
    sector: "Government / aviation",
    nameApproved: true,
    logoApproved: true,
    logoFile: "casa.png",
    approvalDate: "2026-07-25",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },
  {
    id: "cya",
    name: "Corporate Yoga Australia",
    shortName: "Corporate Yoga Australia",
    sector: "Workplace wellbeing",
    nameApproved: true,
    /** Name is approved; no logo file has been supplied. */
    logoApproved: false,
    logoFile: null,
    approvalDate: "2026-07-25",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },
  {
    id: "tafe-qld",
    name: "TAFE Queensland",
    shortName: "TAFE Queensland",
    sector: "Vocational education",
    /* Cleared by Glenn on 27 Jul 2026, when the V3 case study was
       commissioned. The V2 build excluded this client because the previous
       codebase had shipped the logo with no approval record; the name is now
       approved, the logo is not, and the two remain separate booleans. */
    nameApproved: true,
    logoApproved: false,
    logoFile: null,
    approvalDate: "2026-07-27",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },
  {
    id: "sonic",
    name: "Sonic HealthPlus",
    shortName: "Sonic HealthPlus",
    sector: "Occupational health",
    /* Cleared by Glenn on 27 Jul 2026. Note that the case study reproduces
       screens describing commercial service tiers; naming approval is not the
       same as approval to publish that content. See the project record. */
    nameApproved: true,
    logoApproved: false,
    logoFile: null,
    approvalDate: "2026-07-27",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },
  {
    id: "safetyhub",
    name: "Safetyhub",
    shortName: "Safetyhub",
    sector: "Workplace safety",
    /* Cleared by Glenn on 27 Jul 2026. */
    nameApproved: true,
    logoApproved: false,
    logoFile: null,
    approvalDate: "2026-07-27",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },
  {
    id: "goodstart",
    name: "Goodstart Early Learning",
    shortName: "Goodstart Early Learning",
    sector: "Early childhood education",
    nameApproved: true,
    /** Name is approved; no logo file has been supplied. */
    logoApproved: false,
    logoFile: null,
    approvalDate: "2026-07-25",
    source: SOURCE.MASTER_COPY,
    status: STATUS.APPROVED,
  },

  /* ---------------------------------------------------------------------
     Present in the previous codebase, absent from the approved list.
     Held here so the gap is explicit and auditable rather than forgotten.
     Blueprint §1 and §29 Decision 02 — resolve or remove.
     --------------------------------------------------------------------- */
  {
    id: "torres-cape",
    name: "Torres and Cape Hospital and Health Service",
    sector: "Health",
    nameApproved: false,
    logoApproved: false,
    logoFile: null,
    note: "Shipped in the previous build without an approval record.",
    source: SOURCE.BLUEPRINT,
    status: STATUS.PERMISSION_REQUIRED,
  },
  {
    id: "seqwater",
    name: "Seqwater",
    sector: "Utilities",
    nameApproved: false,
    logoApproved: false,
    logoFile: null,
    note: "Shipped in the previous build without an approval record.",
    source: SOURCE.BLUEPRINT,
    status: STATUS.PERMISSION_REQUIRED,
  },

];

export const clientById = Object.fromEntries(clients.map((c) => [c.id, c]));

/** Clients whose name may appear in the public interface. */
export const approvedNames = () => clients.filter((c) => c.nameApproved);

/** Clients whose mark may be displayed. Currently two of four. */
export const approvedLogos = () =>
  clients.filter((c) => c.logoApproved && c.logoFile);
