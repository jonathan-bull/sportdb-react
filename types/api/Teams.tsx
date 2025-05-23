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

export type SingleColourObj = {
  1: SingleColour;
  2: SingleColour;
  3: SingleColour;
  4: SingleColour;
  split: string;
};

export type TeamColours = {
  [key: string]: {
    home: SingleColourObj;
    away: SingleColourObj;
    third: SingleColourObj;
    season: number;
  };
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

export type TeamMapping = {
  displayName: string;
  sourceName: string;
  sourceID: string;
  sourceURL: string;
};

export type SingleTeam = {
  id: number;
  name: string;
  type: 'club' | 'national';
  colours: TeamColours;
  competitionHistory: TeamCompetition[];
  logo: string;
  leagueTable: TeamLeague;
  mapping: TeamMapping[];
  names: TeamNames;
};

export type Teams = {
  teams: SingleTeam[];
  limit: number;
  currentPage: number;
};
