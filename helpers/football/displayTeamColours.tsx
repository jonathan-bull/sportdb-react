import { TeamColours } from '@/types/api/Teams';
import { DisplayKitTypes } from '@/types/display/Teams';

export type displayColour = {
  text: string;
  background: string;
};

/**
 * Picks the appropriate colours for the team based on incoming arguments.
 *
 * @param {TeamColours} colours The object of team colours.
 * @param {number | null} compID The ID of the competition.
 * @param {'home' | 'away' | 'third'} colourType The type of the colour (whether the team is wearing home, away or third colours).
 *
 * @return {displayColour} The object containing text and background colours.
 */
export const displayTeamColours = (
  colours: TeamColours,
  compID: number | null = null,
  colourType: DisplayKitTypes = 'home'
): displayColour => {
  const defaultResponse = {
    text: 'black',
    background: 'white',
  };

  if (typeof colours === 'undefined' || Object.keys(colours).length === 0) {
    return defaultResponse;
  }

  const colourKeys = Object.keys(colours);
  const lastKey = colourKeys.pop();

  if (
    compID !== null &&
    compID > 0 &&
    Object.keys(colours).includes(compID.toString()) &&
    typeof colours[compID][colourType] !== 'undefined' &&
    Object.keys(colours[compID][colourType][4]).includes('val')
  ) {
    return {
      text: colours[compID][colourType]['4'].val,
      background: colours[compID][colourType]['1'].val,
    };
  }

  if (typeof lastKey === 'undefined' || typeof colours[lastKey][colourType] === 'undefined') {
    return defaultResponse;
  }

  return {
    text: colours[lastKey][colourType]['4'].val,
    background: colours[lastKey][colourType]['1'].val,
  };
};
