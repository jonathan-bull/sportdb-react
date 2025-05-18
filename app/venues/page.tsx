import { Container, Text, Title } from '@mantine/core';
import { ListContent } from '@/components/football/content/ListContent/ListContent';
import { apiRequest } from '@/helpers/api/api-request';
import { convertVenueForDisplay } from '@/helpers/football/convertForDisplay';
import { SingleVenue } from '@/types/api/Venues';
import { DisplayEntity } from '@/types/display/Content';

export function generateMetadata() {
  return {
    title: 'Venues - solving.football',
    description: 'Venues available in the database',
  };
}

export default async function VenuesPage() {
  // This will by dynamic some day.
  const listLimit = 10;
  const displayError = 'No venues returned from the API.';
  let processedData: SingleVenue[] = [];
  let displayVenues: DisplayEntity[] = [];

  const venuesData = await apiRequest('/venues', { limit: listLimit.toString() });

  if (venuesData instanceof Error === false && 'venues' in venuesData) {
    processedData = venuesData.venues as SingleVenue[];
    displayVenues = processedData.map((singleVenue) => {
      return convertVenueForDisplay(singleVenue);
    });
  }

  return (
    <>
      <Container w="100%">
        <Title mt="md" mb="xl">
          Venues
        </Title>
        {displayVenues.length === 0 ? (
          <Text>{displayError}</Text>
        ) : (
          <ListContent linkSlug="venues" showImages={false} displayContent={displayVenues} />
        )}
      </Container>
    </>
  );
}
