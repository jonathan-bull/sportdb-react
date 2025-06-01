import { displayTeamColours } from '@/helpers/football/displayTeamColours';
import { getEntityImage, getTeamKit } from '@/helpers/football/imageFromMapping';
import { SingleCompetitionMaster } from '@/types/api/CompetitionMaster';
import { ContentMapping } from '@/types/api/Content';
import { SinglePerson } from '@/types/api/People';
import {
  SingleColourObj,
  SingleColourObjKeys,
  TeamColours,
  TeamCompColours,
} from '@/types/api/Teams';
import { SingleVenue } from '@/types/api/Venues';
import { DisplayEntity } from '@/types/display/Content';
import {
  DisplayColour,
  DisplayColourSingle,
  DisplayKitTypes,
  DisplayTeam,
} from '@/types/display/Teams';

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
      : getEntityImage(singleTeam.mapping, 'logos', process.env.NEXT_PUBLIC_ASSET_URL ?? '');

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

export const reduceColourObjectToArray = (singleColour: SingleColourObj): string[] => {
  if (
    typeof singleColour === 'undefined' ||
    singleColour === null ||
    Object.keys(singleColour).length === 0
  ) {
    return [];
  }

  // Drop the 'split' key, so we only have SingleColour values.
  const { split, ...reducedColour } = singleColour;

  return Object.values(reducedColour).map((singleColourString) => {
    return singleColourString.val;
  });
};

/**
 *
 * @param {SingleColourObj} singleColour
 *
 * @return {string} The colour converted to a gradient.
 */
export const convertColoursToGradient = (
  singleColour: SingleColourObj,
  useSplit: boolean
): string => {
  if (Object.values(singleColour).length === 0) {
    return '';
  }

  if (useSplit === false) {
    const reducedColours = reduceColourObjectToArray(singleColour);
    // Shout out: https://stackoverflow.com/a/48070260.
    const upDownArr = reducedColours.concat(reducedColours.slice(0, -1).reverse());

    return `linear-gradient(90deg, ${upDownArr.join(',')}) 100%/${(upDownArr.length * 1.25 * 100).toString()}%`;
  }

  const colourSplitArr: string[] = singleColour.split.split(',');

  if (colourSplitArr.length === 0) {
    return '';
  }

  const gradientStrings = [];
  const possibleKeys = ['1', '2', '3', '4', 'split'];
  let gradientTotal = 0;

  for (const colourVal in colourSplitArr) {
    const splitColour = colourSplitArr[colourVal].split('-');
    const splitColourKey: SingleColourObjKeys = splitColour[0] as SingleColourObjKeys;

    if (
      splitColourKey in possibleKeys &&
      typeof singleColour[splitColourKey] === 'object' &&
      Object.hasOwn(singleColour[splitColourKey], 'val') === true
    ) {
      gradientStrings.push(`${singleColour[splitColourKey].val} ${gradientTotal}%`);
      gradientTotal += Number(splitColour[1]);
      gradientStrings.push(`${singleColour[splitColourKey].val} ${gradientTotal}%`);
    }
  }

  return `linear-gradient(-45deg, ${gradientStrings.join()})`;
};

const generateSingleDisplayColour = (
  fullColours: TeamCompColours,
  compID: string,
  teamMapping: ContentMapping[],
  kitType: DisplayKitTypes = 'home'
): DisplayColourSingle => {
  return {
    colours: reduceColourObjectToArray(fullColours[kitType]),
    backgrounds: {
      splitGradient: convertColoursToGradient(fullColours[kitType], true),
      equalGradient: convertColoursToGradient(fullColours[kitType], false),
    },
    kitImage: getTeamKit(teamMapping, compID, process.env.NEXT_PUBLIC_ASSET_URL ?? '', kitType),
  };
};

export const convertColoursForDisplay = (
  teamColours: TeamColours,
  teamMapping: ContentMapping[]
): DisplayColour[] => {
  const convertedColours = Object.keys(teamColours).map((colourKey) => {
    return {
      compID: colourKey,
      season: {
        id: teamColours[colourKey].season,
        display: convertSeasonForDisplay(teamColours[colourKey].season),
      },
      kitColours: {
        home: generateSingleDisplayColour(teamColours[colourKey], colourKey, teamMapping, 'home'),
        away: generateSingleDisplayColour(teamColours[colourKey], colourKey, teamMapping, 'away'),
        third: generateSingleDisplayColour(teamColours[colourKey], colourKey, teamMapping, 'third'),
      },
    };
  });

  return convertedColours;
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
