'use client';

import { Avatar, Card, Divider, Grid, GridCol, Text, Title } from '@mantine/core';

type SingleTeamProps = {
  colourBackground?: string;
  colourText?: string;
  compName?: string;
  compPos?: number;
  compPosOrdinal?: string;
  compSeason?: number;
  nameCode?: string;
  nameDisplay?: string;
  teamLogo?: string;
};

export function SingleTeamTitle(props: SingleTeamProps) {
  const {
    colourBackground,
    colourText,
    compName,
    compPos,
    compPosOrdinal,
    compSeason,
    nameCode,
    nameDisplay,
    teamLogo,
  } = props;

  let seasonDisplay = '';

  if (typeof compSeason !== 'undefined' && typeof compName !== 'undefined') {
    seasonDisplay = `${compSeason}/${compSeason + 1}`;
  }

  return (
    <Card c={colourText} bg={colourBackground} bd={`1px solid ${colourText}`}>
      <Grid align="center">
        <GridCol span={{ base: 4, xs: 2 }}>
          <Avatar h="auto" radius="xs" w="auto" alt={`Logo for ${nameDisplay}`} src={teamLogo}>
            {nameCode}
          </Avatar>
        </GridCol>
        <GridCol span={{ base: 8, xs: 10 }}>
          <Title order={2} size="h4" mb="sm">
            {nameDisplay}
          </Title>
          {compPos && (
            <>
              <Divider bd={`1px solid ${colourText}`} mb="sm" />
              <Text>
                {compPosOrdinal} in {compName} {seasonDisplay}
              </Text>
            </>
          )}
        </GridCol>
      </Grid>
    </Card>
  );
}
