import { TeamMapping } from '@/types/api/Teams';

/**
 * Takes an array of mapping data and filters it to get the 'FM' ID.
 * Adds that to the URL that contains our logo images.
 *
 * @param {TeamMapping[]} mappingData An array of mapping data.
 * @param {string} assetURL The URL of the logo asset folder.
 *
 * @return {string} The URL containing the image.
 */
export const getTeamLogo = (mappingData: TeamMapping[], assetURL: string): string => {
  const reducedMapping = mappingData.filter((singleMap) => singleMap.sourceName === 'FM');

  if (reducedMapping.length === 0) {
    return '';
  }

  const slashedURL = assetURL.endsWith('/') ? assetURL : `${assetURL}/`;
  return `${slashedURL}logos/${reducedMapping[0].sourceID}.png`;
};

/**
 * Takes an array of mapping data and filters it to get the 'FM' ID.
 * Adds that to the URL that contains our kit images, with the .
 *
 * @param {TeamMapping[]} mappingData An array of mapping data.
 * @param {string} compID The ID of the competition.
 * @param {string} assetURL The URL of the logo asset folder.
 *
 * @return {string} The URL containing the image.
 */
export const getTeamKit = (
  mappingData: TeamMapping[],
  compID: string,
  assetURL: string,
  kitType: string = 'Home'
): string => {
  const reducedMapping = mappingData.filter((singleMap) => singleMap.sourceName === 'FM');
  let kitInt = 1;

  if (reducedMapping.length === 0) {
    return '';
  }

  if (kitType === 'away') {
    kitInt = 2;
  }

  if (kitType === 'third') {
    kitInt = 3;
  }

  const slashedURL = assetURL.endsWith('/') ? assetURL : `${assetURL}/`;
  return `${slashedURL}kits/${compID}/${reducedMapping[0].sourceID}_${kitInt.toString()}.png`;
};
