import type { Meta } from '@storybook/react';
import { SingleTeamNames } from './SingleTeamNames';

const meta: Meta = {
  component: SingleTeamNames,
  args: {
    full: 'Cardiff City FC',
    display: 'Cardiff City',
    short: 'Cardiff',
    shortAlt: '',
    nickName: 'The Bluebirds',
    code: 'CAR',
  },
};

export default meta;

export const Default = meta;

/** Shout out: https://stackoverflow.com/questions/56155922/how-to-delete-property-from-spread-operator */
export const Empty = {
  ...(delete meta.args && meta),
};
