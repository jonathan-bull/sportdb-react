import { Anchor, GridCol, Paper, Text, Title } from '@mantine/core';
import { MetadataObj } from '@/types/MetadataObj';

type BlogListProps = {
  postItem: MetadataObj;
};

export function BlogList(props: BlogListProps) {
  const { postItem } = props;

  return (
    <GridCol span={4} mb="xl">
      <Paper bg="white" c="black" p="lg">
        <Title order={3} mb="lg">
          {postItem.title}
        </Title>
        {postItem.description ?? (
          <Text size="xl" mb="lg">
            {postItem.description}
          </Text>
        )}
        <Text mt="lg">
          <Anchor c="black" href={`/posts/${postItem.slug}`} underline="always">
            Read more
          </Anchor>
        </Text>
      </Paper>
    </GridCol>
  );
}
