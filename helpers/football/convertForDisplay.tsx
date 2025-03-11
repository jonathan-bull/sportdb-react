import { displayTeamColours } from '@/helpers/football/displayTeamColours';
import { getTeamLogo } from '@/helpers/football/imageFromMapping';
import { DisplayEntity, DisplayTeam } from '@/types/display/Teams';

/**
 * Converts the incoming DisplayTeam object into an object for rendering.
 *
 * @param {DisplayTeam} singleTeam The DisplayTeam object containing all team data.
 *
 * @return {DisplayEntity} The object to be used when displaying a team.
 */
export const convertTeamForDisplay = (singleTeam: DisplayTeam): DisplayEntity => {
  const displayTeamLogo =
    typeof singleTeam.mapping === 'undefined' || singleTeam.mapping.length === 0
      ? ''
      : getTeamLogo(singleTeam.mapping, process.env.NEXT_PUBLIC_ASSET_URL ?? '');

  const displayColours = displayTeamColours(singleTeam.colours ?? {});

  let competitionString =
    typeof singleTeam.leagueTable === 'undefined' ||
    singleTeam.leagueTable === null ||
    Object.keys(singleTeam.leagueTable).length === 0
      ? ''
      : singleTeam.leagueTable.competition.name;

  if (
    typeof singleTeam.leagueTable !== 'undefined' &&
    singleTeam.leagueTable !== null &&
    Object.keys(singleTeam.leagueTable).length > 0 &&
    competitionString !== '' &&
    singleTeam.leagueTable.competition?.season > 0
  ) {
    competitionString = `${competitionString} ${convertSeasonForDisplay(singleTeam.leagueTable?.competition.season)}`;
  }

  const determinedDisplayName =
    singleTeam.names.display !== null && singleTeam.names.display !== ''
      ? singleTeam.names.display
      : singleTeam.names.full;

  return {
    id: singleTeam.id,
    bgColour: displayColours.background,
    textColour: displayColours.text,
    detailEnd: competitionString,
    detailStart: singleTeam.leagueTable?.position?.ordinalNum ?? '',
    codeName: singleTeam.names.code,
    displayName: determinedDisplayName,
    teamLogo: displayTeamLogo,
  };
};

/**
 * A simple function that returns the number in a 'X/X+1' format.
 *
 * @param {number|null} season The year of the season, as a number.
 *
 * @return {string} The given year plus the
 */
export const convertSeasonForDisplay = (season: number | null): string => {
  if (season === null) {
    return '';
  }

  return `${season.toString()}/${(season + 1).toString()}`;
};
