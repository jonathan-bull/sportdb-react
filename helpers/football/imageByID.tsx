/**
 * Combines our asset URL, any folder name and the unique identifier to generate a full asset URL.
 *
 * @param {string} entityID A unique identifier.
 * @param {string} folderNames The name of any folder or folders connecting the asset URL to the data.
 * @param {string} assetURL The URL of the logo asset folder.
 *
 * @return {string} The URL containing the image.
 */
export const getImageByID = (
  entityID: string,
  folderNames: string,
  assetURL: string,
  assetExt: string = 'png'
): string => {
  if (assetURL === '' || entityID === '' || folderNames === '' || assetExt === '') {
    return '';
  }

  const slashedURL = assetURL.endsWith('/') ? assetURL : `${assetURL}/`;
  const slashedFolder = folderNames.endsWith('/') ? folderNames : `${folderNames}/`;
  return `${slashedURL}${slashedFolder}${entityID}.${assetExt}`;
};
