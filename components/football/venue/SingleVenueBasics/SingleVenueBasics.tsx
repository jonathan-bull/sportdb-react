import { Card, Group, Text, Title } from '@mantine/core';
import { SingleVenue } from '@/types/api/Venues';

type SingleVenueProps = {
  singleVenue: SingleVenue;
};

export function SingleVenueBasics(props: SingleVenueProps) {
  const { singleVenue } = props;

  const venueData = [
    {
      key: 'address',
      label: 'Address',
      value: singleVenue.address,
    },
    {
      key: 'capacity',
      label: 'Capacity',
      value: singleVenue.capacity,
    },
    {
      key: 'built',
      label: 'Opening year',
      value: singleVenue.built,
    },
    {
      key: 'dimensions.width',
      label: 'Pitch width (metres)',
      value: singleVenue.dimensions?.width,
    },
    {
      key: 'dimensions.length',
      label: 'Pitch length (metres)',
      value: singleVenue.dimensions?.length,
    },
  ];

  const venueList = venueData.map((venueDataSingle) => (
    <Group key={venueDataSingle.key} align="center" justify="space-between">
      <Text tt="uppercase" size="xs">
        {venueDataSingle.label}
      </Text>
      {venueDataSingle.value && <Text fw={700}>{venueDataSingle.value}</Text>}
      {!venueDataSingle.value && <Text fw={200}>Not set</Text>}
    </Group>
  ));

  return (
    <>
      <Title order={4} c="white">
        Venue detail
      </Title>
      <Card bd="1px solid white" bg="transparent">
        {venueList}
      </Card>
    </>
  );
}
