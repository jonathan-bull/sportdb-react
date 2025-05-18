import { ContentMapping } from '@/types/api/Content';

/**
 * Takes an array of mapping data and filters it to get the 'FM' ID.
 * Adds that to the URL that contains our logo images.
 *
 * @param {ContentMapping[]} mappingData An array of mapping data.
 * @param {string} assetURL The URL of the logo asset folder.
 *
 * @return {string} The URL containing the image.
 */
export const getTeamLogo = (mappingData: ContentMapping[], assetURL: string): string => {
  const reducedMapping = mappingData.filter((singleMap) => singleMap.sourceName === 'FM');

  if (reducedMapping.length === 0) {
    return '';
  }

  const slashedURL = assetURL.endsWith('/') ? assetURL : `${assetURL}/`;
  return `${slashedURL}${reducedMapping[0].sourceID}.png`;
};
