import { Stack } from '@mantine/core';
import { EntityBasics } from '@/components/football/content/EntityBasics/EntityBasics';
import { SingleContentMapping } from '@/components/football/content/SingleContentMapping/SingleContentMapping';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { convertPersonForDisplay } from '@/helpers/football/convertForDisplay';
import { SinglePerson } from '@/types/api/People';

type SinglePersonProps = {
  singlePerson: SinglePerson;
};

export function SinglePersonMain(props: SinglePersonProps) {
  const { singlePerson } = props;

  const displayPerson = convertPersonForDisplay(singlePerson);
  let birthPlaceString = null;

  if (singlePerson.birth?.place) {
    if (singlePerson.birth?.country) {
      birthPlaceString = `${singlePerson.birth?.place}, ${singlePerson.birth?.country}`;
    } else {
      birthPlaceString = singlePerson.birth?.place;
    }
  } else if (singlePerson.birth?.country) {
    birthPlaceString = singlePerson.birth?.country;
  }

  const personData = [
    {
      key: 'fullname',
      label: 'Full name',
      value: singlePerson.fullName,
    },
    {
      key: 'born',
      label: 'Born',
      value: singlePerson.birth?.date?.display?.longDate,
    },
    {
      key: 'age',
      label: 'Age',
      value: singlePerson.birth?.date?.relative?.years,
    },
    {
      key: 'birthplace',
      label: 'Birth place',
      value: birthPlaceString,
    },
    {
      key: 'nationality',
      label: 'Nationality',
      value: singlePerson.nation?.name,
    },
    {
      key: 'height',
      label: 'Height',
      value: `${singlePerson.height?.cm} cm, ${singlePerson.height?.ft} ft`,
    },
  ];

  return (
    <Stack>
      <SingleContentTitle
        colourBackground={displayPerson.bgColour}
        colourText={displayPerson.textColour}
        detailStart={displayPerson.detailStart}
        detailSeparator={displayPerson.detailSeparator}
        detailEnd={displayPerson.detailEnd}
        nameCode={displayPerson.codeName}
        nameDisplay={displayPerson.displayName}
        image={displayPerson.logo}
        hasImage={false}
      />
      <EntityBasics basicsLabel="Person" basicsList={personData} />
      {singlePerson.mapping && <SingleContentMapping contentMapping={singlePerson.mapping} />}
    </Stack>
  );
}
