import { TeamColours, TeamLeague, TeamMapping, TeamNames } from '@/types/api/Teams';

export type DisplayKitTypes = 'home' | 'away' | 'third';

export type DisplayTeam = {
  id: number;
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: TeamMapping[];
  colours?: TeamColours;
};

export type DisplayColour = {
  compID: string;
  season: {
    id: number;
    display: string;
  };
  kitColours: {
    home: DisplayColourSingle;
    away: DisplayColourSingle;
    third: DisplayColourSingle;
  };
};

export type DisplayColourSingle = {
  colours: string[];
  backgrounds: {
    splitGradient: string;
    equalGradient: string;
  };
  kitImage: string;
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
