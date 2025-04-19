import { TeamColours } from '@/types/api/Teams';
import { displayColour, displayTeamColours } from './displayTeamColours';

const defaultResponse: displayColour = {
  text: 'black',
  background: 'white',
};

const recentHome: displayColour = {
  text: 'rgb(228,231,233)',
  background: 'rgb(34,107,192)',
};

const testColours: TeamColours = {
  '334': {
    home: {
      '1': {
        val: 'rgb(24,72,140)',
        r: 24,
        g: 72,
        b: 140,
      },
      '2': {
        val: 'rgb(13,53,111)',
        r: 13,
        g: 53,
        b: 111,
      },
      '3': {
        val: 'rgb(228,229,231)',
        r: 228,
        g: 229,
        b: 231,
      },
      '4': {
        val: 'rgb(228,229,231)',
        r: 228,
        g: 229,
        b: 231,
      },
      split: '4-6,2-6,3-6,1-64,3-6,2-6,4-6',
    },
    away: {
      '1': {
        val: 'rgb(154,202,173)',
        r: 154,
        g: 202,
        b: 173,
      },
      '2': {
        val: 'rgb(173,225,193)',
        r: 173,
        g: 225,
        b: 193,
      },
      '3': {
        val: 'rgb(132,175,149)',
        r: 132,
        g: 175,
        b: 149,
      },
      '4': {
        val: 'rgb(29,40,67)',
        r: 29,
        g: 40,
        b: 67,
      },
      split: '1-34,2-33,3-20,4-9,5-3',
    },
    third: {
      '1': {
        val: 'rgb(233,116,33)',
        r: 233,
        g: 116,
        b: 33,
      },
      '2': {
        val: 'rgb(45,81,139)',
        r: 45,
        g: 81,
        b: 139,
      },
      '3': {
        val: 'rgb(209,207,209)',
        r: 209,
        g: 207,
        b: 209,
      },
      '4': {
        val: 'rgb(209,207,209)',
        r: 209,
        g: 207,
        b: 209,
      },
      split: '2-5,3-5,1-80,3-5,2-5',
    },
    season: 2020,
  },
  '354': {
    home: {
      '1': {
        val: 'rgb(32,79,149)',
        r: 32,
        g: 79,
        b: 149,
      },
      '2': {
        val: 'rgb(20,35,66)',
        r: 20,
        g: 35,
        b: 66,
      },
      '3': {
        val: 'rgb(235,236,239)',
        r: 235,
        g: 236,
        b: 239,
      },
      '4': {
        val: 'rgb(235,236,239)',
        r: 235,
        g: 236,
        b: 239,
      },
      split: '4-5,2-5,3-5,1-70,3-5,2-5,4-5',
    },
    away: {
      '1': {
        val: 'rgb(235,162,162)',
        r: 235,
        g: 162,
        b: 162,
      },
      '2': {
        val: 'rgb(189,123,123)',
        r: 189,
        g: 123,
        b: 123,
      },
      '3': {
        val: 'rgb(228,224,225)',
        r: 228,
        g: 224,
        b: 225,
      },
      '4': {
        val: 'rgb(128,85,90)',
        r: 128,
        g: 85,
        b: 90,
      },
      split: '4-5,3-5,1-20,2-20,1-20,2-20,3-5,4-5',
    },
    third: {
      '1': {
        val: 'rgb(172,224,192)',
        r: 172,
        g: 224,
        b: 192,
      },
      '2': {
        val: 'rgb(153,201,172)',
        r: 153,
        g: 201,
        b: 172,
      },
      '3': {
        val: 'rgb(132,175,149)',
        r: 132,
        g: 175,
        b: 149,
      },
      '4': {
        val: 'rgb(29,40,67)',
        r: 29,
        g: 40,
        b: 67,
      },
      split: '1-37,2-31,3-20,4-9,5-3',
    },
    season: 2021,
  },
  '374': {
    home: {
      '1': {
        val: 'rgb(34,107,192)',
        r: 34,
        g: 107,
        b: 192,
      },
      '2': {
        val: 'rgb(12,64,126)',
        r: 12,
        g: 64,
        b: 126,
      },
      '3': {
        val: 'rgb(228,231,233)',
        r: 228,
        g: 231,
        b: 233,
      },
      '4': {
        val: 'rgb(228,231,233)',
        r: 228,
        g: 231,
        b: 233,
      },
      split: '2-5,3-5,1-80,3-5,2-5',
    },
    away: {
      '1': {
        val: 'rgb(142,146,155)',
        r: 142,
        g: 146,
        b: 155,
      },
      '2': {
        val: 'rgb(33,33,35)',
        r: 33,
        g: 33,
        b: 35,
      },
      '3': {
        val: 'rgb(115,119,127)',
        r: 115,
        g: 119,
        b: 127,
      },
      '4': {
        val: 'rgb(33,33,35)',
        r: 33,
        g: 33,
        b: 35,
      },
      split: '3-10,1-20,2-20,1-20,2-20,3-10',
    },
    third: {
      '1': {
        val: 'rgb(198,172,191)',
        r: 198,
        g: 172,
        b: 191,
      },
      '2': {
        val: 'rgb(220,191,211)',
        r: 220,
        g: 191,
        b: 211,
      },
      '3': {
        val: 'rgb(135,118,132)',
        r: 135,
        g: 118,
        b: 132,
      },
      '4': {
        val: 'rgb(135,118,132)',
        r: 135,
        g: 118,
        b: 132,
      },
      split: '3-10,1-20,2-20,1-20,2-20,3-10',
    },
    season: 2022,
  },
};

it('returns the default object if an empty object is used', () => {
  expect(displayTeamColours({})).toStrictEqual(defaultResponse);
});

it('returns the most recent home colours if no valid compID is provided', () => {
  expect(displayTeamColours(testColours)).toStrictEqual(recentHome);
  expect(displayTeamColours(testColours, -123)).toStrictEqual(recentHome);
  expect(displayTeamColours(testColours, 0)).toStrictEqual(recentHome);
  expect(displayTeamColours(testColours, 123)).toStrictEqual(recentHome);
});

it('returns the expected home colours if a valid compID is provided', () => {
  const firstHome: displayColour = {
    text: 'rgb(228,229,231)',
    background: 'rgb(24,72,140)',
  };
  const secondHome: displayColour = {
    text: 'rgb(235,236,239)',
    background: 'rgb(32,79,149)',
  };

  expect(displayTeamColours(testColours, 334)).toStrictEqual(firstHome);
  expect(displayTeamColours(testColours, 354)).toStrictEqual(secondHome);
  expect(displayTeamColours(testColours, 374)).toStrictEqual(recentHome);
});

it('returns the expected colours if a valid colour type is provided', () => {
  const firstAway: displayColour = {
    text: 'rgb(29,40,67)',
    background: 'rgb(154,202,173)',
  };
  const secondThird: displayColour = {
    text: 'rgb(29,40,67)',
    background: 'rgb(172,224,192)',
  };
  const recentAway: displayColour = {
    text: 'rgb(33,33,35)',
    background: 'rgb(142,146,155)',
  };

  expect(displayTeamColours(testColours, 334, 'away')).toStrictEqual(firstAway);
  expect(displayTeamColours(testColours, 354, 'third')).toStrictEqual(secondThird);
  expect(displayTeamColours(testColours, 374, 'away')).toStrictEqual(recentAway);
});
