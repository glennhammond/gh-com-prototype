/**
 * Evidence and publication status model — Blueprint §2 and §17.
 *
 * Every substantive claim, asset and content record carries a status. This is
 * internal metadata: it is NOT rendered in the visitor interface. It exists so
 * that `npm run verify:content` can fail the build if anything that is not
 * APPROVED reaches a published route.
 *
 * The blueprint's rule, enforced here rather than remembered:
 *   "The build refuses to statically generate anything not marked approved."
 */

export const STATUS = {
  /** Verified by Glenn and cleared for public use. Publishable as written. */
  APPROVED: "approved",
  /** Credible in supplied material, but a third party must clear it first. */
  PERMISSION_REQUIRED: "permission-required",
  /** Strategic or editorial recommendation. Needs Glenn's sign-off, not facts. */
  PROPOSED: "proposed",
  /** Written, but waiting on a fact. Must never reach a published route. */
  EVIDENCE_PENDING: "evidence-pending",
  /** Known internally, not publishable. Never rendered. */
  RESTRICTED: "restricted",
  /** Demonstration content. Prohibited at launch (§27). */
  PLACEHOLDER: "placeholder",
};

/** Statuses that may appear in the public interface of this prototype. */
export const PUBLISHABLE = new Set([STATUS.APPROVED, STATUS.PROPOSED]);

export const isPublishable = (status) => PUBLISHABLE.has(status);

/**
 * Provenance labels used in the content register and the verification report.
 * MASTER_COPY entries are Glenn's confirmed source-of-truth decisions.
 */
export const SOURCE = {
  MASTER_COPY: "Master Copy & Strategy v1.5, 25 Jul 2026",
  BLUEPRINT: "Website Experience Blueprint v1.0, 26 Jul 2026",
  PROJECT_RECORD: "concept-to-platform project record",
  SUPPLIED_ASSET: "Supplied asset archive",
  /** The v3.2 ISQ eLearning Design System integration brief. The live system
   *  and its repository were unreachable when this record was written (see
   *  DECISIONS.md §18); component counts, maturity-state labels and the
   *  reference site's own build stack are described qualitatively rather
   *  than asserted, pending verification against the live system. */
  ISQ_DS_BRIEF: "v3.2 ISQ eLearning Design System integration brief, 29 Jul 2026",
};
