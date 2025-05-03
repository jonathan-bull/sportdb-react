import { ContentMapping } from '@/types/api/Content';
import { TeamColours, TeamLeague, TeamNames } from '@/types/api/Teams';

export type DisplayKitTypes = 'home' | 'away' | 'third';

export type DisplayTeam = {
  id: number;
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: ContentMapping[];
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
