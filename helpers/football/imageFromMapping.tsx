import { TeamMapping } from '@/types/api/Teams';

export const getTeamLogo = (mappingData: TeamMapping[], assetURL: string): string => {
  const reducedMapping = mappingData.filter((singleMap) => singleMap.sourceName === 'FM');

  if (reducedMapping.length === 0) {
    return '';
  }

  return `${assetURL}${reducedMapping[0].sourceID}.png`;
};
