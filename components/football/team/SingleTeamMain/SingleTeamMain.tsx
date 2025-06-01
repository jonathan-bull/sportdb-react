import { Stack } from '@mantine/core';
import { SingleContentMapping } from '@/components/football/content/SingleContentMapping/SingleContentMapping';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { SingleTeamNames } from '@/components/football/team/SingleTeamNames/SingleTeamNames';
import {
  convertColoursForDisplay,
  convertTeamForDisplay,
} from '@/helpers/football/convertForDisplay';
import { DisplayTeam } from '@/types/display/Teams';
import { SingleTeamColours } from '../SingleTeamColours/SingleTeamColours';

type SingleTeamProps = {
  singleTeam: Partial<DisplayTeam>;
};

export function SingleTeamMain(props: SingleTeamProps) {
  const { singleTeam = {} } = props;

  if (Object.keys(singleTeam).length === 0) {
    return;
  }

  const displayTeam = convertTeamForDisplay(singleTeam as DisplayTeam);
  const displayColours = convertColoursForDisplay(
    typeof singleTeam.colours !== 'undefined' ? singleTeam.colours : {},
    typeof singleTeam.mapping !== 'undefined' ? singleTeam.mapping : []
  );

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
      {singleTeam.colours && <SingleTeamColours teamColours={displayColours} />}
      {singleTeam.names && (
        <SingleTeamNames
          full={singleTeam.names.full}
          short={singleTeam.names.short}
          display={singleTeam.names.display}
          shortAlt={singleTeam.names.shortAlt}
          code={singleTeam.names.code}
          nickName={singleTeam.names.nickName}
        />
      )}
      {singleTeam.mapping && <SingleContentMapping contentMapping={singleTeam.mapping} />}
    </Stack>
  );
}
