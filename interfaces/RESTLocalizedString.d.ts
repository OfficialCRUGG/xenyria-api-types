/**
 * Represents a localized string with both an english and a german version available.
 *
 * @example
 * ```json
 * {
 *  "english": "Turf War",
 *   "german": "Revierkampf"
 * }
 *
 * @example
 * ```typescript
 * const localizedString: RESTLocalizedString = {
 *  english: "Turf War",
 *   german: "Revierkampf"
 * };
 */
export interface RESTLocalizedString {
  /**
   * The english version of the string.
   */
  english: string;
  /**
   * The german version of the string.
   */
  german: string;
}
