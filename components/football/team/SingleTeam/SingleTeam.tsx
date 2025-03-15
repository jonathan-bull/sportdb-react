import { Avatar, Divider, Grid, GridCol, Paper, Text, Title } from '@mantine/core';
import { displayTeamColours } from '@/helpers/football/displayTeamColours';
import { getTeamLogo } from '@/helpers/football/imageFromMapping';
import { TeamColours, TeamLeague, TeamMapping, TeamNames } from '@/types/api/Teams';

type SingleTeamProps = {
  names: TeamNames;
  leagueTable?: TeamLeague;
  mapping?: TeamMapping[];
  colours?: TeamColours;
};

export function SingleTeam(props: SingleTeamProps) {
  const { names, leagueTable, mapping, colours } = props;

  const teamLogo =
    typeof mapping === 'undefined' || mapping.length === 0 ? '' : getTeamLogo(mapping);
  const teamColours = displayTeamColours(colours ?? {});
  let seasonDisplay = '';

  if (typeof leagueTable !== 'undefined' && typeof leagueTable.competition !== 'undefined') {
    seasonDisplay = `${leagueTable.competition.season}/${leagueTable.competition.season + 1}`;
  }

  return (
    <Grid mt="sm" align="center">
      <GridCol span={2}>
        <Avatar h="auto" radius="xs" w="auto" alt={`Logo for ${names.full}`} src={teamLogo}>
          {names.code}
        </Avatar>
      </GridCol>
      <GridCol span={10}>
        <Paper p="sm" bg={teamColours.background} c={teamColours.text}>
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
        </Paper>
      </GridCol>
    </Grid>
  );
}
