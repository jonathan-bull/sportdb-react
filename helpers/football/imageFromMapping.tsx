import { TeamMapping } from '@/types/api/Teams';

export const getTeamLogo = (mappingData: TeamMapping[]): string => {
  const reducedMapping = mappingData.filter((singleMap) => singleMap.sourceName === 'FM');

  if (reducedMapping.length === 0) {
    return '';
  }

  return `${process.env.ASSET_URL}${reducedMapping[0].sourceID}.png`;
};
