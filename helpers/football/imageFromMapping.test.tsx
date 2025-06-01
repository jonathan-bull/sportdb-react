import { ContentMapping } from '@/types/api/Content';
import { getTeamLogo } from './imageFromMapping';

const testURL = 'https://crouton.net/';
const testMapping: ContentMapping[] = [
  {
    displayName: 'Test',
    sourceID: '123',
    sourceName: 'Test',
    sourceURL: 'https://example.com',
  },
  {
    displayName: 'Testing',
    sourceID: '456',
    sourceName: 'OPTA',
    sourceURL: 'https://example.com',
  },
];

const validMapping: ContentMapping[] = [
  ...testMapping,
  {
    displayName: 'Testing',
    sourceID: '01010101',
    sourceName: 'FM',
    sourceURL: 'https://example.com',
  },
];

it('returns an empty string if an empty mapping array is provided', () => {
  expect(getTeamLogo([], testURL)).toBe('');
});

it('returns an empty string if a mapping array does not contain an FM value', () => {
  expect(getTeamLogo(testMapping, testURL)).toBe('');
});

it('returns the expected string if the mapping array contains an FM value', () => {
  expect(getTeamLogo(validMapping, testURL)).toBe(`${testURL}01010101.png`);
});

it('returns the expected string if the mapping array contains an FM value, even if there is no trailing slash on our URL', () => {
  expect(getTeamLogo(validMapping, 'https://crouton.net')).toBe(`${testURL}01010101.png`);
});
