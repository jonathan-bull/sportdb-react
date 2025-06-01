import { apiResponse } from '@/types/api/Generic';

/**
 * Checks if an incoming API response has data or not.
 *
 * @param {apiResponse | Error} apiData The data from the API.
 *
 * @returns {boolean} Whether the response has data or not.
 */
export function checkResponseHasData(apiData: apiResponse | Error): boolean {
  return (
    apiData instanceof Error === false &&
    Object.keys(apiData).length > 0 &&
    Object.hasOwn(apiData, 'data') === true &&
    typeof apiData.data !== 'undefined' &&
    typeof apiData.results !== 'undefined' &&
    apiData.data instanceof Array === true &&
    apiData.data.length > 0
  );
}
