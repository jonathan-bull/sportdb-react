import {
  convertCompetitionMasterForDisplay,
  convertPersonForDisplay,
  convertTeamForDisplay,
  convertVenueForDisplay,
} from '@/helpers/football/convertForDisplay';
import { SingleCompetitionMaster } from '@/types/api/CompetitionMaster';
import { JSONObject } from '@/types/api/Generic';
import { SinglePerson } from '@/types/api/People';
import { SingleTeam } from '@/types/api/Teams';
import { SingleVenue } from '@/types/api/Venues';
import { DisplayEntity } from '@/types/display/Content';

/**
 * Converts incoming JSON data into an array of DisplayEntity objects.
 * Essentially a wrapper for displaying lists of data.
 *
 * @param {JSONObject} apiData The data from the API.
 * @param {string} apiKey The identifier of the data type.
 *
 * @return {DisplayEntity[]} An array of entities to display.
 */
export const processForDisplay = (apiData: JSONObject, apiKey: string): DisplayEntity[] => {
  let displayContent: DisplayEntity[] = [];
  let processedData: SingleTeam[] | SingleVenue[] | SinglePerson[] | SingleCompetitionMaster[] = [];

  if (apiKey === 'teams') {
    processedData = apiData.data as SingleTeam[];
  } else if (apiKey === 'competitionMaster') {
    processedData = apiData.data as SingleCompetitionMaster[];
  } else if (apiKey === 'people') {
    processedData = apiData.data as SinglePerson[];
  } else if (apiKey === 'venues') {
    processedData = apiData.data as SingleVenue[];
  }

  displayContent = processedData.map((singleEntity) => {
    if (apiKey === 'teams') {
      return convertTeamForDisplay(singleEntity as SingleTeam);
    } else if (apiKey === 'competitionMaster') {
      return convertCompetitionMasterForDisplay(singleEntity as SingleCompetitionMaster);
    } else if (apiKey === 'people') {
      return convertPersonForDisplay(singleEntity as SinglePerson);
    } else if (apiKey === 'venues') {
      return convertVenueForDisplay(singleEntity as SingleVenue);
    }

    return singleEntity;
  });

  return displayContent;
};
