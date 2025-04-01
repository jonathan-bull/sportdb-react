'use client';

import { Avatar, Card, Divider, Flex, Grid, GridCol, Text, Title } from '@mantine/core';

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
    colourBackground = 'white',
    colourText = 'black',
    compName = '',
    compPos = 0,
    compPosOrdinal,
    compSeason = 0,
    nameCode,
    nameDisplay,
    teamLogo,
  } = props;

  // Default code name - first three letters of display name.
  // Trim code name to three characters and
  const displayNameCode = nameCode ? nameCode : nameDisplay;

  let seasonDisplay = '';

  if (compSeason > 0 && compName !== '') {
    seasonDisplay = `${compSeason}/${compSeason + 1}`;
  }

  return (
    <Card c={colourText} bg={colourBackground} bd={`1px solid ${colourText}`}>
      <Grid align="center">
        <GridCol span={{ base: 4, xs: 2 }}>
          <Avatar h="auto" radius="xs" w="auto" alt={`Logo for ${nameDisplay}`} src={teamLogo}>
            {displayNameCode?.substring(0, 4).toUpperCase()}
          </Avatar>
        </GridCol>
        <GridCol span={{ base: 8, xs: 10 }}>
          <Flex direction="column" gap="sm">
            <Title order={2} size="h4">
              {nameDisplay}
            </Title>
            {compName && (
              <>
                <Divider bd={`1px solid ${colourText}`} />
                {compPos > 0 && compName !== '' ? (
                  <Text>
                    {compPosOrdinal} in {compName} {seasonDisplay}
                  </Text>
                ) : (
                  <Text>
                    {compName} {seasonDisplay}
                  </Text>
                )}
              </>
            )}
          </Flex>
        </GridCol>
      </Grid>
    </Card>
  );
}
