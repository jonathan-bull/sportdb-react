import { Container, Title } from '@mantine/core';
import { SingleCompetitionMasterMain } from '@/components/football/competition/SingleCompetitionMasterMain/SingleCompetitionMasterMain';
import { returnApiResponseRequest } from '@/helpers/api/api-request';
import { checkResponseHasData } from '@/helpers/api/response-check';
import { getMetadata } from '@/helpers/football/getMetadata';
import { SingleCompetitionMaster } from '@/types/api/CompetitionMaster';
import { SingleEntityProps } from '@/types/display/Generic';

export async function generateMetadata({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  return await getMetadata(`/competitions/master/${id}`, 'competition');
}

export default async function CompetitionMasterPage({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  const compData = await returnApiResponseRequest(`/competitions/master/${id}`);

  // Exit with an error if we haven't got a response.
  if (
    checkResponseHasData(compData) === false ||
    typeof compData.data === 'undefined' ||
    compData.data.length === 0
  ) {
    return (
      <Container w="100%">
        <Title mb="xl">Error - competition not found</Title>
      </Container>
    );
  }

  const singleComp = compData.data[0] as SingleCompetitionMaster;

  return (
    <Container w="100%" mt="sm" mb="sm">
      <SingleCompetitionMasterMain singleCompetitionMaster={singleComp} />
    </Container>
  );
}
