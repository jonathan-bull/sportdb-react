import { Container, Title } from '@mantine/core';
import { apiRequest } from '@/app/api-request';
import { SingleTeam } from '@/components/football/team/SingleTeam/SingleTeam';
import { Teams } from '@/types/api/Teams';

type teamParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: teamParams }) {
  const id = (await params).id;
  const teamData: Teams = await apiRequest(`/teams/single/${id}`);

  if (teamData.teams.length === 0) {
    return {
      title: 'Error - team not found - solving football',
    };
  }

  const singleTeam = teamData.teams[0];

  return {
    title: `${singleTeam.names.full}  - solving football`,
  };
}

export default async function TeamPage({ params }: { params: teamParams }) {
  const id = (await params).id;
  const teamData = await apiRequest(`/teams/single/${id}`);

  // Exit with an error if we haven't got a response.
  if (teamData.teams.length === 0) {
    return (
      <>
        <Container w="100%">
          <Title mb="xl">Error - Team not found</Title>
        </Container>
      </>
    );
  }

  const singleTeam = teamData.teams[0];

  return (
    <>
      <Container w="100%">
        <SingleTeam
          names={singleTeam.names}
          leagueTable={singleTeam.leagueTable}
          mapping={singleTeam.mapping}
          colours={singleTeam.colours}
        />
      </Container>
    </>
  );
}
