import type { Meta } from '@storybook/react';
import { SingleContentMapping } from './SingleContentMapping';

const meta: Meta = {
  component: SingleContentMapping,
  args: {
    teamMapping: [
      {
        displayName: 'Cardiff City',
        sourceName: 'FBRef',
        sourceID: '75fae011',
        sourceURL: 'https://fbref.com/en/squads/75fae011/Cardiff-City-Stats',
      },
      {
        displayName: 'Cardiff City',
        sourceName: 'SoFIFA',
        sourceID: '1961',
        sourceURL: 'https://sofifa.com/team/1961/cardiff-city/',
      },
    ],
  },
};

export default meta;

export const Default = meta;

/** Shout out: https://stackoverflow.com/questions/56155922/how-to-delete-property-from-spread-operator */
export const Empty = {
  ...(delete meta.args && meta),
};
