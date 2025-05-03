import { ContentMapping } from '@/types/api/Content';
import { getImageByID } from './imageByID';

export const getMappingID = (mappingData: ContentMapping[], mapType: string = 'FM'): string => {
  const reducedMapping = mappingData.filter((singleMap) => singleMap.sourceName === mapType);

  if (reducedMapping.length === 0) {
    return '';
  }

  return reducedMapping[0].sourceID;
};

/**
 * Takes an array of mapping data and filters it to get the 'FM' ID.
 * Adds that to the URL that contains our logo images.
 *
 * @param {ContentMapping[]} mappingData An array of mapping data.
 * @param {string} assetURL The URL of the logo asset folder.
 *
 * @return {string} The URL containing the image.
 */
export const getEntityImage = (
  mappingData: ContentMapping[],
  imageType: string,
  assetURL: string
): string => {
  const mapID = getMappingID(mappingData);

  if (mapID === '') {
    return mapID;
  }

  return getImageByID(mapID, imageType, assetURL);
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
  mappingData: ContentMapping[],
  compID: string,
  assetURL: string,
  kitType: string = 'Home'
): string => {
  const mappingID = getMappingID(mappingData);
  let kitInt = 1;

  if (mappingID === '') {
    return '';
  }

  if (kitType === 'away') {
    kitInt = 2;
  }

  if (kitType === 'third') {
    kitInt = 3;
  }

  return getImageByID(`${mappingID}_${kitInt.toString()}`, `kits/${compID}`, assetURL);
};
