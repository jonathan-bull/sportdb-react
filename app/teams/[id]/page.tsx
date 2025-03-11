import { Container, Title } from '@mantine/core';
import { SingleTeamMain } from '@/components/football/team/SingleTeamMain/SingleTeamMain';
import { apiRequest } from '@/helpers/api/api-request';
import { SingleTeam } from '@/types/api/Teams';

type teamParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: teamParams }) {
  const id = (await params).id;
  const teamData = await apiRequest(`/teams/single/${id}`);

  if (
    teamData instanceof Error ||
    Object.hasOwn(teamData, 'teams') === false ||
    teamData.teams instanceof Array === false ||
    teamData.teams.length === 0
  ) {
    return {
      title: 'Error - team not found - solving football',
    };
  }

  const singleTeam = teamData.teams[0] as SingleTeam;

  return {
    title: `${singleTeam.names.full}  - solving football`,
  };
}

export default async function TeamPage({ params }: { params: teamParams }) {
  const id = (await params).id;
  const teamData = await apiRequest(`/teams/single/${id}`);

  // Exit with an error if we haven't got a response.
  if (
    teamData instanceof Error ||
    Object.hasOwn(teamData, 'teams') === false ||
    teamData.teams instanceof Array === false ||
    teamData.teams.length === 0
  ) {
    return (
      <Container w="100%">
        <Title mb="xl">Error - Team not found</Title>
      </Container>
    );
  }

  const singleTeam = teamData.teams[0] as SingleTeam;

  return (
    <Container w="100%" mt="sm" mb="sm">
      <SingleTeamMain singleTeam={singleTeam} />
    </Container>
  );
}
