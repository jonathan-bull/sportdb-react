import { Stack } from '@mantine/core';
import { SingleContentMapping } from '@/components/football/content/SingleContentMapping/SingleContentMapping';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { SingleTeamNames } from '@/components/football/team/SingleTeamNames/SingleTeamNames';
import { convertTeamForDisplay } from '@/helpers/football/convertForDisplay';
import { DisplayTeam } from '@/types/display/Teams';

type SingleTeamProps = {
  singleTeam: DisplayTeam;
};

export function SingleTeamMain(props: SingleTeamProps) {
  const { singleTeam } = props;

  const displayTeam = convertTeamForDisplay(singleTeam);
  return (
    <Stack>
      <SingleContentTitle
        colourBackground={displayTeam.bgColour}
        colourText={displayTeam.textColour}
        detailStart={displayTeam.detailStart}
        detailEnd={displayTeam.detailEnd}
        nameCode={displayTeam.codeName}
        nameDisplay={displayTeam.displayName}
        image={displayTeam.logo}
      />
      <SingleTeamNames
        full={singleTeam.names.full}
        short={singleTeam.names.short}
        display={singleTeam.names.display}
        shortAlt={singleTeam.names.shortAlt}
        code={singleTeam.names.code}
        nickName={singleTeam.names.nickName}
      />
      {singleTeam.mapping && <SingleContentMapping contentMapping={singleTeam.mapping} />}
    </Stack>
  );
}
