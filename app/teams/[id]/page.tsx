import { Container, Title } from '@mantine/core';
import { SingleTeamMain } from '@/components/football/team/SingleTeamMain/SingleTeamMain';
import { returnApiResponseRequest } from '@/helpers/api/api-request';
import { checkResponseHasData } from '@/helpers/api/response-check';
import { getMetadata } from '@/helpers/football/getMetadata';
import { SingleTeam } from '@/types/api/Teams';
import { SingleEntityProps } from '@/types/display/Generic';

export async function generateMetadata({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  return await getMetadata(`/teams/single/${id}`, 'team');
}

export default async function TeamPage({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  const teamData = await returnApiResponseRequest(`/teams/single/${id}`);

  // Exit with an error if we haven't got a response.
  if (
    checkResponseHasData(teamData) === false ||
    typeof teamData.data === 'undefined' ||
    teamData.data.length === 0
  ) {
    return (
      <Container w="100%">
        <Title mb="xl">Error - Team not found</Title>
      </Container>
    );
  }

  const singleTeam = teamData.data[0] as SingleTeam;

  return (
    <Container w="100%" mt="sm" mb="sm">
      <SingleTeamMain singleTeam={singleTeam} />
    </Container>
  );
}
