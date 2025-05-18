import { displayTeamColours } from '@/helpers/football/displayTeamColours';
import { getTeamLogo } from '@/helpers/football/imageFromMapping';
import { SingleCompetitionMaster } from '@/types/api/CompetitionMaster';
import { SinglePerson } from '@/types/api/People';
import { SingleVenue } from '@/types/api/Venues';
import { DisplayEntity } from '@/types/display/Content';
import { DisplayTeam } from '@/types/display/Teams';

/**
 * Converts a singleCompetitionMaster into a DisplayEntity.
 *
 * @param {SingleCompetitionMaster} singleCompetitionMaster The incoming data.
 *
 * @return {DisplayEntity} The cleaned output.
 */
export const convertCompetitionMasterForDisplay = (
  singleCompetitionMaster: SingleCompetitionMaster
): DisplayEntity => {
  const compName = singleCompetitionMaster.the
    ? `The ${singleCompetitionMaster.name}`
    : singleCompetitionMaster.name;

  return {
    id: singleCompetitionMaster.id,
    displayName: compName,
    codeName: singleCompetitionMaster.short ?? '',
    detailStart: `Level ${singleCompetitionMaster.level} competition`,
    detailEnd: singleCompetitionMaster.region,
  };
};

/**
 * Converts a SinglePerson into a DisplayEntity.
 *
 * @param {SinglePerson} singlePerson The incoming data.
 *
 * @return {DisplayEntity} The cleaned output.
 */
export const convertPersonForDisplay = (singlePerson: SinglePerson): DisplayEntity => {
  return {
    id: singlePerson.id,
    displayName: singlePerson.name,
  };
};

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
    logo: displayTeamLogo,
  };
};

/**
 * Converts the incoming SingleVenue object into an object for rendering.
 *
 * @param {SingleVenue} singleVenue The incoming data.
 *
 * @return {DisplayEntity} The object to be used when displaying a team.
 */
export const convertVenueForDisplay = (singleVenue: SingleVenue): DisplayEntity => {
  const venueName = singleVenue.the ? `The ${singleVenue.name}` : singleVenue.name;
  let beforeString = '';
  let separatorString = '';
  let afterString = '';

  if (
    typeof singleVenue.built !== 'undefined' &&
    singleVenue.built !== null &&
    singleVenue.built > 0
  ) {
    beforeString = 'Built';
    separatorString = 'in';
    afterString = singleVenue.built.toString();
  }

  if (
    typeof singleVenue.capacity !== 'undefined' &&
    singleVenue.capacity !== null &&
    singleVenue.capacity > 0
  ) {
    beforeString = 'Capacity';
    separatorString = 'of';
    afterString = singleVenue.capacity.toString();
  }

  return {
    id: singleVenue.id,
    bgColour: 'white',
    textColour: 'black',
    detailStart: beforeString,
    detailSeparator: separatorString,
    detailEnd: afterString,
    codeName: '',
    displayName: venueName,
    logo: '',
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
