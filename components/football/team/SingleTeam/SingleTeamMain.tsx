'use client';

import {
  Avatar,
  Card,
  Divider,
  Grid,
  GridCol,
  Text,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
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
  const teamLogo =
    typeof mapping === 'undefined' || mapping.length === 0
      ? ''
      : getTeamLogo(mapping, process.env.NEXT_PUBLIC_ASSET_URL);
  const colourMode = useComputedColorScheme();
  const teamColours = displayTeamColours(colours ?? {}, colourMode);
  let seasonDisplay = '';

  if (typeof leagueTable !== 'undefined' && typeof leagueTable.competition !== 'undefined') {
    seasonDisplay = `${leagueTable.competition.season}/${leagueTable.competition.season + 1}`;
  }

  return (
    <Card c={teamColours.text} bg={teamColours.background} bd={`1px solid ${teamColours.text}`}>
      <Grid align="center">
        <GridCol span={{ base: 4, xs: 2 }}>
          <Avatar h="auto" radius="xs" w="auto" alt={`Logo for ${names.full}`} src={teamLogo}>
            {names.code}
          </Avatar>
        </GridCol>
        <GridCol span={{ base: 8, xs: 10 }}>
          <Title order={2} size="h4" mb="sm">
            {names.full}
          </Title>
          {leagueTable?.position && (
            <>
              <Divider bd={`1px solid ${teamColours.text}`} mb="sm" />
              <Text>
                {leagueTable?.position.ordinalNum} in {leagueTable?.competition.name}{' '}
                {seasonDisplay}
              </Text>
            </>
          )}
        </GridCol>
      </Grid>
    </Card>
  );
}
