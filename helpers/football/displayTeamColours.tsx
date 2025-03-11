import { TeamColours } from '@/types/api/Teams';

export type displayColour = {
  text: string;
  background: string;
};

/**
 * Picks the appropriate colours for the team based on incoming arguments.
 *
 * @param colours The object of team colours.
 * @param compID The ID of the competition.
 * @param colourType The type of the colour (whether the team is wearing home, away or third colours).
 *
 * @return {displayColour} The object containing text and background colours.
 */
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

  if (compID !== null && compID > 0 && colourKeys.includes(compID.toString())) {
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
