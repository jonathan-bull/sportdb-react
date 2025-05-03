import type { Meta } from '@storybook/react';
import {
  convertColoursToGradient,
  reduceColourObjectToArray,
} from '@/helpers/football/convertForDisplay';
import { SingleColourObj } from '@/types/api/Teams';
import { ColourDetail } from './ColourDetail';

const liverpoolAway: SingleColourObj = {
  '1': { val: 'rgb(43,45,43)', r: 43, g: 45, b: 43 },
  '2': { val: 'rgb(74,76,77)', r: 74, g: 76, b: 77 },
  '3': { val: 'rgb(135,207,203)', r: 135, g: 207, b: 203 },
  '4': { val: 'rgb(135,207,203)', r: 135, g: 207, b: 203 },
  split: '4-4,2-4,3-4,1-76,3-4,2-4,4-4',
};

const meta: Meta = {
  component: ColourDetail,
  args: {
    name: 'Away',
    kitImage: 'https://lfconlineshop.com/wp-content/uploads/2024/08/lfc-away-2425.png',
    colours: reduceColourObjectToArray(liverpoolAway),
    staticGradient: convertColoursToGradient(liverpoolAway, true),
    animatedGradient: convertColoursToGradient(liverpoolAway, false),
    isAnimated: false,
  },
};

export default meta;

export const Default = meta;
