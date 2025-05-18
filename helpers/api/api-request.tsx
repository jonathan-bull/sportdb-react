import { apiResponse } from '@/types/api/Generic';
import { checkResponseHasData } from './response-check';

type queryObject = { [index: string]: string };

/**
 * Wrapper for fetching data from the API.
 *
 * @param {string} apiPath The API path to query.
 * @param {queryObject} queryParams An object containing key value pairs, used as URL params.
 *
 * @return {Promise<JSONObject|Error>} The resolved promise of a JSONValue or an error.
 */
export async function apiRequest(
  apiPath: string,
  queryParams: queryObject = {},
  useCache: boolean = true
): Promise<apiResponse | Error> {
  try {
    const URLparams = new URLSearchParams(queryParams).toString();
    const apiHeaders = new Headers();

    // Exit early if there's no API key set.
    if (typeof process.env.API_KEY === 'undefined' || process.env.API_KEY === null) {
      return {};
    }

    apiHeaders.append('x-api-key', process.env.API_KEY);

    if (useCache === true) {
      apiHeaders.append('cache', 'force-cache');
    }

    const response = await fetch(`${process.env.API_URL}${apiPath}?${URLparams}`, {
      method: 'GET',
      headers: apiHeaders,
    });

    // Check we have a response and that response is JSON.
    if (response.ok && response.headers.get('content-type')?.includes('application/json')) {
      return await response.json();
    }

    // If we are here for some reason, return null.
    return {};
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error);
    }

    throw new Error('Unknown error occurred');
  }
}

/**
 * Forces a response from the API into a specific shape.
 * This allows us to consistently handle responses.
 *
 * @param {apiResponse | Error} apiData The incoming API data.
 *
 * @return {apiResponse} A cleaned response.
 */
export function returnApiResponse(apiData: apiResponse | Error): apiResponse {
  if (
    apiData instanceof Error === true ||
    Object.keys(apiData).length === 0 ||
    Object.hasOwn(apiData, 'data') === false ||
    typeof apiData.data === 'undefined' ||
    apiData.data.length === 0 ||
    typeof apiData.results === 'undefined' ||
    checkResponseHasData(apiData) === false
  ) {
    return {
      data: [],
      results: {
        total: 0,
        limit: 0,
        currentPage: 0,
        maxPage: 0,
      },
    };
  }

  return apiData;
}

/**
 * Queries the API and returns the response in a consistent shape.
 * Essentially a wrapper for the other functions in this file.
 *
 * @param {string} apiPath string The path to hit.
 * @param {queryObject} queryParams queryObject An object of query parameters.
 * @param {boolean} useCache boolean Whether or not to use the cache.
 *
 * @return {Promise<apiResponse>} A promised API response of a reliable shape.
 */
export async function returnApiResponseRequest(
  apiPath: string,
  queryParams: queryObject = {},
  useCache: boolean = true
): Promise<apiResponse> {
  const requestToApi = await apiRequest(apiPath, queryParams, useCache);

  return returnApiResponse(requestToApi);
}
