export type SingleCompetition = {
  id: number;
  name: string;
  master: number;
  season: number;
  participants: number;
  rounds: number;
  separator: string;
  score: number;
};

export type SingleCompetitionMaster = {
  id: number;
  name: string;
  short: string | null;
  the: 0 | 1;
  region: string;
  level: number;
  international: string | null;
  type: {
    main: string;
    sub: string;
  };
  seasons: SingleCompetition[] | [];
};
