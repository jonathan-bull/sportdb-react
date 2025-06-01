import { returnApiResponse, returnApiResponseRequest } from '@/helpers/api/api-request';
import { checkResponseHasData } from '@/helpers/api/response-check';

/**
 * Hits the API and returns metadata for the given query.
 *
 * @param {string} apiRoute The API route to query.
 * @param {string} typeString The name of the data type (People, Venues, etc.).
 *
 * @return {Promise<{ title: string }>}
 */
export async function getMetadata(
  apiRoute: string,
  typeString: string
): Promise<{ title: string }> {
  const responseData = await returnApiResponseRequest(apiRoute);
  const apiData = returnApiResponse(responseData);

  if (
    checkResponseHasData(apiData) === false ||
    typeof apiData.data === 'undefined' ||
    apiData.data.length === 0
  ) {
    return {
      title: `Error - ${typeString} not found - solving football`,
    };
  }

  const singleData = apiData.data[0];

  return {
    title: `${singleData.name}  - solving football`,
  };
}
