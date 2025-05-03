import { Anchor, Stack, Title } from '@mantine/core';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { DisplayEntity } from '@/types/display/Content';

type ListTeamProps = {
  displayTeams: DisplayEntity[] | [];
  displaySize: 'small' | 'large';
};

export function ListTeam(props: ListTeamProps) {
  const { displayTeams, displaySize = 'small' } = props;

  if (displayTeams.length === 0) {
    return <Title>No teams found</Title>;
  }

  return (
    <Stack gap="xs" mb="lg">
      {displayTeams.map((displayTeam) => (
        <Anchor key={displayTeam.id} href={`/teams/${displayTeam.id}`} underline="never">
          <SingleContentTitle
            size={displaySize}
            key={displayTeam.id}
            colourBackground={displayTeam.bgColour}
            colourText={displayTeam.textColour}
            detailStart={displayTeam.detailStart}
            detailEnd={displayTeam.detailEnd}
            nameCode={displayTeam.codeName}
            nameDisplay={displayTeam.displayName}
            image={displayTeam.logo}
          />
        </Anchor>
      ))}
    </Stack>
  );
}
