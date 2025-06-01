import { Stack } from '@mantine/core';
import { EntityBasics } from '@/components/football/content/EntityBasics/EntityBasics';
import { SingleContentMapping } from '@/components/football/content/SingleContentMapping/SingleContentMapping';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { convertVenueForDisplay } from '@/helpers/football/convertForDisplay';
import { BasicDataEntity } from '@/types/api/Content';
import { SingleVenue } from '@/types/api/Venues';

type SingleVenueProps = {
  singleVenue: SingleVenue;
};

export function SingleVenueMain(props: SingleVenueProps) {
  const { singleVenue } = props;

  const displayVenue = convertVenueForDisplay(singleVenue);
  const venueData: BasicDataEntity[] = [
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

  return (
    <Stack>
      <SingleContentTitle
        colourBackground={displayVenue.bgColour}
        colourText={displayVenue.textColour}
        detailStart={displayVenue.detailStart}
        detailSeparator={displayVenue.detailSeparator}
        detailEnd={displayVenue.detailEnd}
        nameCode={displayVenue.codeName}
        nameDisplay={displayVenue.displayName}
        image={displayVenue.logo}
        hasImage={false}
      />
      <EntityBasics basicsLabel="Venue" basicsList={venueData} />
      {singleVenue.mapping && <SingleContentMapping contentMapping={singleVenue.mapping} />}
    </Stack>
  );
}
