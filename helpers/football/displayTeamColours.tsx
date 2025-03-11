import { TeamColours } from '@/types/api/Teams';

type displayColour = {
  text: string;
  background: string;
};

export const displayTeamColours = (
  colours: TeamColours,
  colourMode: 'light' | 'dark',
  compID: number | null = null,
  colourType: 'home' | 'away' | 'third' = 'home'
): displayColour => {
  const defaultResponse = {
    text: 'white',
    background: 'transparent',
  };

  const colourKeys = Object.keys(colours);

  if (colourKeys.length === 0) {
    return defaultResponse;
  }

  if (compID !== null && compID in colourKeys) {
    return {
      text:
        colourMode === 'light'
          ? colours[compID][colourType][1].val
          : colours[compID][colourType][4].val,
      background:
        colourMode === 'light'
          ? colours[compID][colourType][4].val
          : colours[compID][colourType][1].val,
    };
  }

  const lastKey = colourKeys.pop();

  if (typeof lastKey === 'undefined') {
    return defaultResponse;
  }

  return {
    text:
      colourMode === 'light'
        ? colours[lastKey][colourType][4].val
        : colours[lastKey][colourType][1].val,
    background:
      colourMode === 'light'
        ? colours[lastKey][colourType][1].val
        : colours[lastKey][colourType][4].val,
  };
};
