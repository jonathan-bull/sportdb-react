import { Anchor, Stack, Title } from '@mantine/core';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { DisplayEntity } from '@/types/display/Content';

type ListContentProps = {
  displayContent: DisplayEntity[] | [];
  linkSlug: string;
  showImages?: boolean;
};

export function ListContent(props: ListContentProps) {
  const { displayContent, linkSlug, showImages = true } = props;

  if (displayContent.length === 0) {
    return <Title>No elements found to display</Title>;
  }

  return (
    <Stack gap="xs" mb="lg">
      {displayContent.map((singleDisplayContent) => (
        <Anchor
          key={singleDisplayContent.id}
          href={`/${linkSlug}/${singleDisplayContent.id}`}
          underline="never"
        >
          <SingleContentTitle
            size="small"
            key={singleDisplayContent.id}
            colourBackground={singleDisplayContent.bgColour}
            colourText={singleDisplayContent.textColour}
            detailStart={singleDisplayContent.detailStart}
            detailSeparator={singleDisplayContent.detailSeparator}
            detailEnd={singleDisplayContent.detailEnd}
            nameCode={singleDisplayContent.codeName}
            nameDisplay={singleDisplayContent.displayName}
            image={singleDisplayContent.logo}
            hasImage={showImages}
          />
        </Anchor>
      ))}
    </Stack>
  );
}
