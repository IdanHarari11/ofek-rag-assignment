export {
  DOCUMENT_RELATIONS_MANIFEST_VERSION,
} from "./types";
export type {
  ApplicabilitySummary,
  DocumentRelationsManifest,
  ManifestDocument,
  UserTemporalFacts,
  VersionDecision,
  ActivatedRelationship,
} from "./types";
export {
  defaultManifestPath,
  loadDocumentRelationsManifest,
  validateManifestAgainstIndex,
  getValidatedManifest,
  resetManifestCache,
  ManifestValidationError,
} from "./load-manifest";
export {
  extractUserTemporalFacts,
  governingPolicyDate,
  isOnOrAfter,
  isBefore,
} from "./dates";
export {
  resolveVersionDecisions,
  collectActivatedRelationships,
  buildApplicabilitySummary,
  linkedDocumentIdsToFetch,
  demotedDocumentIds,
} from "./resolve";
export {
  buildEnrichedGenerationContext,
} from "./enrich-context";
export type { EnrichedContextBuildResult, EnrichContextOptions } from "./enrich-context";
