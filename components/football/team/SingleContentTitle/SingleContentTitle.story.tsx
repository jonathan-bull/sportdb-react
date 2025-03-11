import type { Meta } from '@storybook/react';
import { SingleContentTitle } from './SingleContentTitle';

const meta: Meta = {
  title: 'Single content title',
  component: SingleContentTitle,
  decorators: [(Story) => <Story />],
  args: {
    nameDisplay: 'Cardiff City',
    image: 'https://dlskitshub.com/wp-content/uploads/Cardiff-City-FC-Logo-PNG-DLS.png',
    nameCode: 'CDF',
    detailStart: '1st',
    detailEnd: 'the Premier League 2024/2025',
  },
};

export default meta;

export const Default = meta;

export const Small = {
  ...meta,
  args: {
    size: 'small',
  },
};

export const NoBorder = {
  ...meta,
  args: {
    hasBorder: false,
  },
};

export const WithColour = {
  ...meta,
  args: {
    colourBackground: '#00f',
    colourText: '#fff',
  },
};

const personArgs = {
  nameCode: 'AR',
  nameDisplay: 'Aaron Ramsey',
  image: 'https://www.fifarosters.com/assets/players/fifa24/faces/186561.png',
  detailStart: 'Attacking midfielder',
  detailEnd: 'Cardiff City and Wales',
  detailSeparator: 'for',
};

const personMeta = {
  ...meta,
  args: personArgs,
};

export const Person = personMeta;

export const PersonWithColour = {
  ...personMeta,
  args: {
    ...personArgs,
    colourBackground: '#f00',
    colourText: '#fff',
  },
};

export const PersonSmall = {
  ...personMeta,
  args: {
    ...personArgs,
    size: 'small',
  },
};

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
    detailStart: 'Winner',
    detailSeparator: 'of the',
    detailEnd:
      'First Annual Montgomery Burns Award for Outstanding Achievement in the Field of Excellence',
  },
};
