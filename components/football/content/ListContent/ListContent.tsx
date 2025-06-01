import { Anchor, Stack, Title } from '@mantine/core';
import { SingleContentTitle } from '@/components/football/content/SingleContentTitle/SingleContentTitle';
import { DisplayEntity } from '@/types/display/Content';

import './ListContent.css';

type ListContentProps = {
  displayContent: DisplayEntity[] | [];
  displayStyle: string;
  linkSlug: string;
  showImages?: boolean;
};

export function ListContent(props: ListContentProps) {
  const { displayContent, displayStyle, linkSlug, showImages = true } = props;

  if (displayContent.length === 0) {
    return <Title>No elements found to display</Title>;
  }

  return (
    <Stack gap="xs" mb="lg" className={`list-content--${displayStyle}`}>
      {displayContent.map((singleDisplayContent) => (
        <Anchor
          key={singleDisplayContent.id}
          href={`/${linkSlug}/${singleDisplayContent.id}`}
          underline="never"
          className={`list-content-single--${displayStyle}`}
        >
          <SingleContentTitle
            displayType={displayStyle}
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
