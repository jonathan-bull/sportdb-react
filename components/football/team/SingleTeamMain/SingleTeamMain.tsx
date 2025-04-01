'use client';

import { Stack, useComputedColorScheme } from '@mantine/core';
import { SingleTeamMapping } from '@/components/football/team/SingleTeamMapping/SingleTeamMapping';
import { SingleTeamNames } from '@/components/football/team/SingleTeamNames/SingleTeamNames';
import { SingleTeamStandings } from '@/components/football/team/SingleTeamStandings/SingleTeamStandings';
import { SingleTeamTitle } from '@/components/football/team/SingleTeamTitle/SingleTeamTitle';
import { displayTeamColours } from '@/helpers/football/displayTeamColours';
import { getTeamLogo } from '@/helpers/football/imageFromMapping';
import { TeamColours, TeamLeague, TeamMapping, TeamNames } from '@/types/api/Teams';

type SingleTeamProps = {
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: TeamMapping[];
  colours?: TeamColours;
};

export function SingleTeamMain(props: SingleTeamProps) {
  const { names, leagueTable, mapping, colours } = props;

  const colourMode = useComputedColorScheme();
  const teamColours = displayTeamColours(colours ?? {}, colourMode);

  const teamLogo =
    typeof mapping === 'undefined' || mapping.length === 0
      ? ''
      : getTeamLogo(mapping, process.env.NEXT_PUBLIC_ASSET_URL ?? '');

  const nameForDisplay = names.display ? names.display : names.full;

  return (
    <Stack>
      <SingleTeamTitle
        colourBackground={teamColours.background}
        colourText={teamColours.text}
        compName={leagueTable?.competition?.name}
        compSeason={leagueTable?.competition?.season}
        compPos={leagueTable?.position?.value}
        compPosOrdinal={leagueTable?.position?.ordinalNum}
        nameCode={names.code}
        nameDisplay={nameForDisplay}
        teamLogo={teamLogo}
      />
      <SingleTeamStandings />
      <SingleTeamNames
        full={names.full}
        short={names.short}
        display={names.display}
        shortAlt={names.shortAlt}
        code={names.code}
        nickName={names.nickName}
      />
      {mapping && <SingleTeamMapping teamMapping={mapping} />}
    </Stack>
  );
}
