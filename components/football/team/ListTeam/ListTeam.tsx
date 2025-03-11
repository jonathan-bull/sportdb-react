'use client';

import { Anchor, Stack, Title, useComputedColorScheme } from '@mantine/core';
import { displayTeamColours } from '@/helpers/football/displayTeamColours';
import { getTeamLogo } from '@/helpers/football/imageFromMapping';
import { TeamColours, TeamLeague, TeamMapping, TeamNames } from '@/types/api/Teams';
import { SingleTeamTitle } from '../SingleTeamTitle/SingleTeamTitle';

type SingleTeamProps = {
  id: number;
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: TeamMapping[];
  colours?: TeamColours;
};

type ListTeamProps = {
  list: SingleTeamProps[] | [];
};

export function ListTeam(props: ListTeamProps) {
  const { list } = props;

  if (list.length === 0) {
    return <Title>No teams found</Title>;
  }

  const colourMode = useComputedColorScheme();

  const displayTeams = list.map((singleTeam) => {
    const displayTeamLogo =
      typeof singleTeam.mapping === 'undefined' || singleTeam.mapping.length === 0
        ? ''
        : getTeamLogo(singleTeam.mapping, process.env.NEXT_PUBLIC_ASSET_URL ?? '');

    return {
      id: singleTeam.id,
      colours: displayTeamColours(singleTeam.colours ?? {}, colourMode),
      names: singleTeam.names,
      leagueTable: singleTeam.leagueTable,
      displayName: singleTeam.names.display ? singleTeam.names.display : singleTeam.names.full,
      teamLogo: displayTeamLogo,
    };
  });

  return (
    <Stack>
      {displayTeams.map((displayTeam) => (
        <Anchor key={displayTeam.id} href={`/teams/${displayTeam.id}`} underline="never">
          <SingleTeamTitle
            key={displayTeam.id}
            colourBackground={displayTeam.colours.background}
            colourText={displayTeam.colours.text}
            compName={displayTeam.leagueTable?.competition?.name}
            compSeason={displayTeam.leagueTable?.competition?.season}
            compPos={displayTeam.leagueTable?.position?.value}
            compPosOrdinal={displayTeam.leagueTable?.position?.ordinalNum}
            nameCode={displayTeam.names.code}
            nameDisplay={displayTeam.displayName}
            teamLogo={displayTeam.teamLogo}
          />
        </Anchor>
      ))}
    </Stack>
  );
}
