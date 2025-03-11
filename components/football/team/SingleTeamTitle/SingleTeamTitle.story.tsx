import type { Meta } from '@storybook/react';
import { Container } from '@mantine/core';
import { SingleTeamTitle } from './SingleTeamTitle';

const meta: Meta = {
  title: 'Single team title',
  component: SingleTeamTitle,
  decorators: [
    (Story) => (
      <Container my="md">
        <Story />
      </Container>
    ),
  ],
};

export default meta;

export const Default = meta;
