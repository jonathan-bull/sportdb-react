import { TeamColours } from '@/types/api/Teams';

type displayColour = {
  text: string;
  background: string;
};

export const displayTeamColours = (
  colours: TeamColours,
  compID: number | null = null,
  colourType: 'home' | 'away' | 'third' = 'home'
): displayColour => {
  const defaultResponse = {
    text: 'black',
    background: 'white',
  };

  const colourKeys = Object.keys(colours);

  if (colourKeys.length === 0) {
    return defaultResponse;
  }

  if (compID !== null && compID in colourKeys) {
    return {
      text: colours[compID][colourType][4].val,
      background: colours[compID][colourType][1].val,
    };
  }

  const lastKey = colourKeys.pop();

  if (typeof lastKey === 'undefined') {
    return defaultResponse;
  }

  return {
    text: colours[lastKey][colourType][4].val,
    background: colours[lastKey][colourType][1].val,
  };
};
