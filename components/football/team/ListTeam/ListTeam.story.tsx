import type { Meta } from '@storybook/react';
import { ListTeam } from './ListTeam';

const meta: Meta = {
  title: 'List of teams',
  component: ListTeam,
  decorators: [(Story) => <Story />],
  args: {
    displayTeams: [
      {
        id: 123,
        displayName: 'Cardiff City',
        teamLogo: 'https://dlskitshub.com/wp-content/uploads/Cardiff-City-FC-Logo-PNG-DLS.png',
        codeName: 'CDF',
        detailStart: '1st',
        detailEnd: 'the Premier League 2024/2025',
      },
      {
        id: 456,
        displayName: 'Swansea City',
        teamLogo: 'https://e0.365dm.com/football/badges/96/375.png',
        codeName: 'SWA',
        detailStart: '1st',
        detailEnd: 'the Championship 2024/2025',
      },
      {
        id: 789,
        displayName: 'Wrexham',
        teamLogo:
          'https://cdn.freebiesupply.com/logos/large/2x/wrexham-afc-logo-png-transparent.png',
        codeName: 'WRE',
        detailStart: '1st',
        detailEnd: 'League One 2024/2025',
      },
    ],
  },
};

export default meta;

export const Default = meta;

export const Small = {
  ...meta,
  args: {
    displayTeams: [],
  },
};
