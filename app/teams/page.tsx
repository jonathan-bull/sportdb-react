import { Container, Text, Title } from '@mantine/core';
import { ListTeam } from '@/components/football/team/ListTeam/ListTeam';
import { apiRequest } from '@/helpers/api/api-request';
import { convertTeamForDisplay } from '@/helpers/football/convertForDisplay';
import { SingleTeam } from '@/types/api/Teams';
import { DisplayEntity } from '@/types/display/Teams';

export function generateMetadata() {
  return {
    title: 'Teams - solving.football',
    description: 'Teams available in the database',
  };
}

export default async function TeamsPage() {
  // This will by dynamic some day.
  const listLimit = 10;
  const displayError = 'No teams returned from the API.';
  let processedData: SingleTeam[] = [];
  let displayTeams: DisplayEntity[] = [];

  const teamsData = await apiRequest('/teams', { limit: listLimit.toString() });

  if (teamsData instanceof Error === false && 'teams' in teamsData) {
    processedData = teamsData.teams as SingleTeam[];
    displayTeams = processedData.map((singleTeam) => {
      return convertTeamForDisplay(singleTeam);
    });
  }

  return (
    <>
      <Container w="100%">
        <Title mt="md" mb="xl">
          Teams
        </Title>
        {displayTeams.length === 0 ? (
          <Text>{displayError}</Text>
        ) : (
          <ListTeam displayTeams={displayTeams} />
        )}
      </Container>
    </>
  );
}
