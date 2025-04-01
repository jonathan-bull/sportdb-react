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
  args: {
    nameDisplay: 'Cardiff City',
    nameCode: 'CDF',
    compPos: 1,
    compPosOrdinal: '1st',
    compSeason: 2024,
    compName: 'the Premier League',
  },
};

export default meta;

export const Default = meta;

export const LongNames = {
  ...meta,
  args: {
    nameCode: 'Borussia Mönchengladbach',
    nameDisplay: 'Borussia Mönchengladbach',
  },
};

export const NoNames = {
  ...meta,
  args: {
    nameCode: null,
    nameDisplay: null,
  },
};

export const LongCompetitionName = {
  ...meta,
  args: {
    compPos: null,
    compPosOrdinal: null,
    compName:
      'First Annual Montgomery Burns Award for Outstanding Achievement in the Field of Excellence',
    compSeason: null,
  },
};
