import { Container, Title } from '@mantine/core';
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

  const teamsData = await apiRequest('/teams', { limit: listLimit.toString() });
  const processedData: SingleTeam[] = teamsData.teams;

  const displayTeams: DisplayEntity[] = processedData.map((singleTeam) => {
    return convertTeamForDisplay(singleTeam);
  });

  return (
    <>
      <Container w="100%">
        <Title mt="md" mb="xl">
          Teams
        </Title>
        <ListTeam displayTeams={displayTeams} />
      </Container>
    </>
  );
}
