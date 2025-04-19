type queryObject = { [index: string]: string };

/**
 * Wrapper for fetching data from the API.
 *
 * @param {string} apiPath The API path to query.
 * @param {queryObject} queryParams An object containing key value pairs, used as URL params.
 *
 * @return {Promise<any>} The resolved promise.
 */
export async function apiRequest(apiPath: string, queryParams: queryObject = {}): Promise<any> {
  try {
    const URLparams = new URLSearchParams(queryParams).toString();
    const apiHeaders = new Headers();

    // Exit early if there's no API key set.
    if (typeof process.env.API_KEY === 'undefined' || process.env.API_KEY === null) {
      return {};
    }

    apiHeaders.append('x-api-key', process.env.API_KEY);

    const response = await fetch(`${process.env.API_URL}${apiPath}?${URLparams}`, {
      method: 'GET',
      headers: apiHeaders,
    });

    if (response.ok) {
      const data = await response.json();

      if (typeof data === 'undefined' || data === null) {
        return {};
      }

      return data;
    }
  } catch (error) {
    return error;
  }
}
