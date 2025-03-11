import { JSONObject } from '@/types/api/Generic';

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
): Promise<JSONObject | Error> {
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
