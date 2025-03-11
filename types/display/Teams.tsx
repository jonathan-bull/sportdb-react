import { TeamColours, TeamLeague, TeamMapping, TeamNames } from '@/types/api/Teams';

export type DisplayTeam = {
  id: number;
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: TeamMapping[];
  colours?: TeamColours;
};

export type DisplayEntity = {
  id: number;
  bgColour?: string;
  textColour?: string;
  detailEnd?: string;
  detailStart?: string;
  codeName?: string;
  displayName?: string;
  teamLogo?: string;
};
