import { Container, Title } from '@mantine/core';
import { ListTeam } from '@/components/football/team/ListTeam/ListTeam';
import { apiRequest } from '@/helpers/api/api-request';

export function generateMetadata() {
  return {
    title: 'Teams - solving.football',
    description: 'Teams available in the database',
  };
}

export default async function TeamsPage() {
  const teamsData = await apiRequest(`/teams?limit=10`);

  return (
    <>
      <Container w="100%">
        <Title mt="md" mb="xl">
          Teams
        </Title>
        <ListTeam list={teamsData.teams} />
      </Container>
    </>
  );
}
