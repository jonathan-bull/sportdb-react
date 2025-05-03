import type { Meta } from '@storybook/react';
import { Container } from '@mantine/core';
import type { MetadataObj } from '@/types/MetadataObj';
import BlogList from './BlogList';

const singleListItem: MetadataObj = {
  slug: 'hello-world',
  title: 'Hello world!',
  publishDate: '2025-03-01T00:00:00',
  description: 'This is an example of a blog list item',
  published: true,
};

const NoPublishDateItem = { ...singleListItem };
delete NoPublishDateItem.publishDate;

const LongTitleListItem = { ...singleListItem };
LongTitleListItem.title =
  'Doctor Storybook or: How I Learned to Stop Worrying and Love Component Testing';

const unpublishedListItem = { ...singleListItem };
unpublishedListItem.published = false;

const meta: Meta = {
  component: BlogList,
  decorators: [
    (Story) => (
      <Container my="md">
        <Story />
      </Container>
    ),
  ],
  args: {
    postList: new Array(6).fill(singleListItem),
  },
};

export default meta;

export const Default = meta;

export const oddNumber = {
  ...meta,
  args: {
    postList: new Array(5).fill(singleListItem),
  },
};

export const unpublishedData = {
  ...meta,
  args: {
    postList: new Array(5).fill(unpublishedListItem),
  },
};

export const WithOneLongTitleItem = {
  ...meta,
  args: {
    postList: [
      ...new Array(2).fill(singleListItem),
      LongTitleListItem,
      ...new Array(2).fill(singleListItem),
    ],
  },
};

export const WithOneNoPublishDateItem = {
  ...meta,
  args: {
    postList: [
      ...new Array(2).fill(singleListItem),
      NoPublishDateItem,
      ...new Array(2).fill(singleListItem),
    ],
  },
};
