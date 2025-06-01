import { Container, Title } from '@mantine/core';
import { SingleVenueMain } from '@/components/football/venue/SingleVenueMain/SingleVenueMain';
import { returnApiResponseRequest } from '@/helpers/api/api-request';
import { checkResponseHasData } from '@/helpers/api/response-check';
import { getMetadata } from '@/helpers/football/getMetadata';
import { SingleVenue } from '@/types/api/Venues';
import { SingleEntityProps } from '@/types/display/Generic';

export async function generateMetadata({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  return await getMetadata(`/venues/single/${id}`, 'venue');
}

export default async function VenuePage({ params }: { params: SingleEntityProps }) {
  const id = (await params).id;
  const venueData = await returnApiResponseRequest(`/venues/single/${id}`);

  // Exit with an error if we haven't got a response.
  if (
    checkResponseHasData(venueData) === false ||
    typeof venueData.data === 'undefined' ||
    venueData.data.length === 0
  ) {
    return (
      <Container w="100%">
        <Title mb="xl">Error - Venue not found</Title>
      </Container>
    );
  }

  const singleVenue = venueData.data[0] as SingleVenue;

  return (
    <Container w="100%" mt="sm" mb="sm">
      <SingleVenueMain singleVenue={singleVenue} />
    </Container>
  );
}
