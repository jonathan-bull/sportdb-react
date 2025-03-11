import { Avatar, Card, Flex, Grid, GridCol, Title } from '@mantine/core';

type SingleTeamProps = {
  colourBackground?: string;
  colourText?: string;
  nameCode?: string;
  nameDisplay?: string;
  teamLogo?: string;
};

export function ListTeamTitle(props: SingleTeamProps) {
  const {
    colourBackground = 'white',
    colourText = 'black',
    nameCode,
    nameDisplay,
    teamLogo,
  } = props;

  // Default code name - first three letters of display name.
  // Trim code name to three characters and
  const displayNameCode = nameCode ? nameCode : nameDisplay;

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
            <Title size="h5" textWrap="balance">
              {nameDisplay}
            </Title>
          </Flex>
        </GridCol>
      </Grid>
    </Card>
  );
}
