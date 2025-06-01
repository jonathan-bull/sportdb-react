import type { Meta } from '@storybook/react';
import {
  convertColoursToGradient,
  reduceColourObjectToArray,
} from '@/helpers/football/convertForDisplay';
import { SingleColourObj } from '@/types/api/Teams';
import { ColourList } from './ColourList';

const liverpoolHome: SingleColourObj = {
  '1': { val: 'rgb(190,20,50)', r: 190, g: 20, b: 50 },
  '2': { val: 'rgb(197,76,50)', r: 197, g: 76, b: 50 },
  '3': { val: 'rgb(234,227,227)', r: 234, g: 227, b: 227 },
  '4': { val: 'rgb(234,227,227)', r: 234, g: 227, b: 227 },
  split: '2-5,3-5,1-80,3-5,2-5',
};

const liverpoolAway: SingleColourObj = {
  '1': { val: 'rgb(43,45,43)', r: 43, g: 45, b: 43 },
  '2': { val: 'rgb(74,76,77)', r: 74, g: 76, b: 77 },
  '3': { val: 'rgb(135,207,203)', r: 135, g: 207, b: 203 },
  '4': { val: 'rgb(135,207,203)', r: 135, g: 207, b: 203 },
  split: '4-4,2-4,3-4,1-76,3-4,2-4,4-4',
};

const liverpoolThird: SingleColourObj = {
  '1': { val: 'rgb(223,223,223)', r: 223, g: 223, b: 223 },
  '2': { val: 'rgb(160,141,126)', r: 160, g: 141, b: 126 },
  '3': { val: 'rgb(195,41,58)', r: 195, g: 41, b: 58 },
  '4': { val: 'rgb(33,33,32)', r: 33, g: 33, b: 32 },
  split: '4-4,2-4,3-4,1-76,3-4,2-4,4-4',
};

const meta: Meta = {
  component: ColourList,
  args: {
    compColours: {
      compID: '123',
      season: {
        id: 12,
        display: '2018/2019',
      },
      kitColours: {
        home: {
          kitImage:
            'https://www.superbuy.com.ng/wp-content/uploads/2020/08/Liverpool-Mens-Home-Jersey-20242025.png',
          colours: reduceColourObjectToArray(liverpoolHome),
          backgrounds: {
            splitGradient: convertColoursToGradient(liverpoolHome, true),
            equalGradient: convertColoursToGradient(liverpoolHome, false),
          },
        },
        away: {
          kitImage: 'https://lfconlineshop.com/wp-content/uploads/2024/08/lfc-away-2425.png',
          colours: reduceColourObjectToArray(liverpoolAway),
          backgrounds: {
            splitGradient: convertColoursToGradient(liverpoolAway, true),
            equalGradient: convertColoursToGradient(liverpoolAway, false),
          },
        },
        third: {
          kitImage:
            'https://lojafutcompany.com/cdn/shop/files/Liverpool-third-2024-600x600_png_600x.webp?v=1739631009',
          colours: reduceColourObjectToArray(liverpoolThird),
          backgrounds: {
            splitGradient: convertColoursToGradient(liverpoolThird, true),
            equalGradient: convertColoursToGradient(liverpoolThird, false),
          },
        },
      },
    },
  },
};

export default meta;

export const Default = meta;
