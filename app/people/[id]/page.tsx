import { Container, Title } from '@mantine/core';
import { SinglePersonMain } from '@/components/football/person/SinglePersonMain/SinglePersonMain';
import { returnApiResponseRequest } from '@/helpers/api/api-request';
import { checkResponseHasData } from '@/helpers/api/response-check';
import { getMetadata } from '@/helpers/football/getMetadata';
import { SinglePerson } from '@/types/api/People';
import { SingleEntityProps } from '@/types/display/Generic';

export async function generateMetadata({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  return await getMetadata(`/people/single/${id}`, 'person');
}

export default async function PersonPage({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  const personData = await returnApiResponseRequest(`/people/single/${id}`);

  // Exit with an error if we haven't got a response.
  if (
    checkResponseHasData(personData) === false ||
    typeof personData.data === 'undefined' ||
    personData.data.length === 0
  ) {
    return (
      <Container w="100%">
        <Title mb="xl">Error - person not found</Title>
      </Container>
    );
  }

  const singlePerson = personData.data[0] as SinglePerson;

  return (
    <Container w="100%" mt="sm" mb="sm">
      <SinglePersonMain singlePerson={singlePerson} />
    </Container>
  );
}
