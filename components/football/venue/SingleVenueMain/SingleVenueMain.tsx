import { Stack } from '@mantine/core';
import { SingleContentMapping } from '@/components/football/content/SingleContentMapping/SingleContentMapping';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { convertVenueForDisplay } from '@/helpers/football/convertForDisplay';
import { SingleVenue } from '@/types/api/Venues';
import { SingleVenueBasics } from '../SingleVenueBasics/SingleVenueBasics';

type SingleVenueProps = {
  singleVenue: SingleVenue;
};

export function SingleVenueMain(props: SingleVenueProps) {
  const { singleVenue } = props;

  const displayVenue = convertVenueForDisplay(singleVenue);
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
      <SingleVenueBasics singleVenue={singleVenue} />
      {singleVenue.mapping && <SingleContentMapping contentMapping={singleVenue.mapping} />}
    </Stack>
  );
}
