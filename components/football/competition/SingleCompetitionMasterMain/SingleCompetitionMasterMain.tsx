import { Stack } from '@mantine/core';
import { EntityBasics } from '@/components/football/content/EntityBasics/EntityBasics';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { convertCompetitionMasterForDisplay } from '@/helpers/football/convertForDisplay';
import { SingleCompetitionMaster } from '@/types/api/CompetitionMaster';
import { BasicDataEntity } from '@/types/api/Content';

type SingleCompetitionMasterProps = {
  singleCompetitionMaster: SingleCompetitionMaster;
};

export function SingleCompetitionMasterMain(props: SingleCompetitionMasterProps) {
  const { singleCompetitionMaster } = props;

  const compData: BasicDataEntity[] = [
    {
      key: 'short',
      label: 'Short name',
      value: singleCompetitionMaster.short,
    },
    {
      key: 'level',
      label: 'Competition level',
      value: singleCompetitionMaster.level,
    },
    {
      key: 'region',
      label: 'Region',
      value: singleCompetitionMaster.region,
    },
    {
      key: 'compType',
      label: 'Competition type',
      value: singleCompetitionMaster.type.main,
    },
    {
      key: 'compSubType',
      label: 'Competition sub type',
      value: singleCompetitionMaster.type.sub,
    },
  ];

  const displayCompetitionMaster = convertCompetitionMasterForDisplay(singleCompetitionMaster);
  return (
    <Stack>
      <SingleContentTitle
        colourBackground={displayCompetitionMaster.bgColour}
        colourText={displayCompetitionMaster.textColour}
        detailStart={displayCompetitionMaster.detailStart}
        detailSeparator={displayCompetitionMaster.detailSeparator}
        detailEnd={displayCompetitionMaster.detailEnd}
        nameCode={displayCompetitionMaster.codeName}
        nameDisplay={displayCompetitionMaster.displayName}
        image={displayCompetitionMaster.logo}
        hasImage={false}
      />
      <EntityBasics basicsLabel="Competition" basicsList={compData} />
    </Stack>
  );
}
