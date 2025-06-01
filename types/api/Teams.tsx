import { ContentMapping } from '@/types/api/Content';

export type TeamNames = {
  full: string;
  display: string;
  short: string;
  shortAlt: string;
  nickName: string;
  code: string;
};

export type TeamCompetition = {
  id: number;
  name: string;
  master: number;
  season: number;
  participants: number;
  rounds: number;
  separator: string;
  score: number;
};

export type SingleColour = {
  val: string;
  r: number;
  g: number;
  b: number;
};

export type SingleColourObjKeys = '1' | '2' | '3' | '4' | 'split';

export type SingleColourObj = {
  '1': SingleColour;
  '2': SingleColour;
  '3': SingleColour;
  '4': SingleColour;
  split: string;
};

export type TeamCompColours = {
  home: SingleColourObj;
  away: SingleColourObj;
  third: SingleColourObj;
  season: number;
};

export type TeamColours = {
  [key: string]: TeamCompColours;
};

export type TeamLeague = {
  competition: TeamCompetition;
  position: {
    ordinal: string;
    ordinalNum: string;
    value: number;
    std: number;
  };
  positionDiff: {
    value: number;
    std: number;
  };
  played: number;
  points: number;
  won: number;
  drawn: number;
  lost: number;
  goals: number;
  h2h: number;
  perGame: {
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsDiff: number;
  };
};

export type SingleTeam = {
  id: number;
  name: string;
  type: 'club' | 'national';
  colours: TeamColours;
  competitionHistory: TeamCompetition[];
  logo: string;
  leagueTable: TeamLeague;
  mapping: ContentMapping[];
  names: TeamNames;
};

export type Teams = {
  teams: SingleTeam[];
  total: number;
  limit: number;
  currentPage: number;
  maxPage: number;
};
