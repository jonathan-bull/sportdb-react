import type { Meta } from '@storybook/react';
import { Container } from '@mantine/core';
import { BlogListItem } from './BlogListItem';

const meta: Meta = {
  component: BlogListItem,
  decorators: [
    (Story) => (
      <Container my="md">
        <Story />
      </Container>
    ),
  ],
  args: {
    slug: 'hello-world',
    title: 'Hello world!',
    publishDate: '2025-03-01T00:00:00',
    description: 'This is an example of a blog list item',
    published: true,
  },
};

export default meta;

export const Default = meta;

export const LongTitle = {
  ...meta,
  args: {
    title: 'Doctor Storybook or: How I Learned to Stop Worrying and Love Component Testing',
  },
};

export const LongDescription = {
  ...meta,
  args: {
    // Moby Dick is public domain.
    description:
      " Call me Ishmael. Some years ago- never mind how long precisely- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off- then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.",
  },
};

export const NoDate = {
  ...meta,
  args: {
    publishDate: null,
  },
};

export const NoSlug = {
  ...meta,
  args: {
    slug: null,
  },
};

export const Unpublished = {
  ...meta,
  args: {
    published: false,
  },
};
