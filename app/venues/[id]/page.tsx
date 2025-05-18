import { Container, Title } from '@mantine/core';
import { SingleVenueMain } from '@/components/football/venue/SingleVenueMain/SingleVenueMain';
import { apiRequest } from '@/helpers/api/api-request';
import { SingleVenue } from '@/types/api/Venues';

type venueParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: venueParams }) {
  const id = (await params).id;
  const venueData = await apiRequest(`/venues/single/${id}`);

  if (
    venueData instanceof Error ||
    Object.hasOwn(venueData, 'venues') === false ||
    venueData.venues instanceof Array === false ||
    venueData.venues.length === 0
  ) {
    return {
      title: 'Error - venue not found - solving football',
    };
  }

  const singleVenue = venueData.venues[0] as SingleVenue;

  return {
    title: `${singleVenue.name}  - solving football`,
  };
}

export default async function VenuePage({ params }: { params: venueParams }) {
  const id = (await params).id;
  const venueData = await apiRequest(`/venues/single/${id}`);

  // Exit with an error if we haven't got a response.
  if (
    venueData instanceof Error ||
    Object.hasOwn(venueData, 'venues') === false ||
    venueData.venues instanceof Array === false ||
    venueData.venues.length === 0
  ) {
    return (
      <Container w="100%">
        <Title mb="xl">Error - Venue not found</Title>
      </Container>
    );
  }

  const singleVenue = venueData.venues[0] as SingleVenue;

  return (
    <Container w="100%" mt="sm" mb="sm">
      <SingleVenueMain singleVenue={singleVenue} />
    </Container>
  );
}
