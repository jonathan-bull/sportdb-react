import { ContentMapping } from '@/types/api/Content';
import { TeamColours, TeamLeague, TeamNames } from '@/types/api/Teams';

export type DisplayTeam = {
  id: number;
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: ContentMapping[];
  colours?: TeamColours;
};
