import { Anchor, Card, GridCol, Text, Title } from '@mantine/core';
import { MetadataObj } from '@/types/MetadataObj';

type BlogListProps = {
  postItem: MetadataObj;
};

const readableDate = (dateString: string): string => {
  const dateObj = new Date(dateString);

  return dateObj.toLocaleDateString('en-gb', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
};

export function BlogList(props: BlogListProps) {
  const { postItem } = props;

  return (
    <GridCol span={{ base: 12, sm: 6, lg: 4 }} mb="xl">
      <Card c="black">
        <Anchor c="black" href={`/posts/${postItem.slug}`}>
          <Title order={3} mb="lg">
            {postItem.title}
          </Title>
        </Anchor>
        {postItem.description && (
          <Text size="lg" mb="lg">
            {postItem.description}
          </Text>
        )}
        {postItem.publishDate && (
          <Text size="sm" mb="lg">
            Published on {readableDate(postItem.publishDate)}
          </Text>
        )}
        <Text mt="lg">
          <Anchor c="black" href={`/posts/${postItem.slug}`} underline="always">
            Read more
          </Anchor>
        </Text>
      </Card>
    </GridCol>
  );
}
