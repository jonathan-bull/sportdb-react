import { getImageByID } from './imageByID';

const testURL = 'https://crouton.net/';
const unslashedURL = 'https://crouton.net';
const testEntityID = '123';
const singleFolder = 'logos';
const multipleFolder = 'logos/and/kits';
const leadingSlashFolder = '/logos/and/kits';
const trailingSlashFolder = 'logos/and/kits/';
const slashedFolder = '/logos/and/kits/';

it('returns an empty string if an empty value is provided', () => {
  expect(getImageByID('', singleFolder, testURL)).toBe('');
  expect(getImageByID(testEntityID, '', testURL)).toBe('');
  expect(getImageByID(testEntityID, singleFolder, '')).toBe('');
});

it('returns expected string regardless of folder string slashes', () => {
  expect(getImageByID(testEntityID, singleFolder, testURL)).toBe(
    `${testURL}${singleFolder}/${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, multipleFolder, testURL)).toBe(
    `${testURL}${multipleFolder}/${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, leadingSlashFolder, testURL)).toBe(
    `${testURL}${leadingSlashFolder}/${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, trailingSlashFolder, testURL)).toBe(
    `${testURL}${trailingSlashFolder}${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, slashedFolder, testURL)).toBe(
    `${testURL}${slashedFolder}${testEntityID}.png`
  );

  expect(getImageByID(testEntityID, singleFolder, unslashedURL)).toBe(
    `${testURL}${singleFolder}/${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, multipleFolder, unslashedURL)).toBe(
    `${testURL}${multipleFolder}/${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, leadingSlashFolder, unslashedURL)).toBe(
    `${testURL}${leadingSlashFolder}/${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, trailingSlashFolder, unslashedURL)).toBe(
    `${testURL}${trailingSlashFolder}${testEntityID}.png`
  );
  expect(getImageByID(testEntityID, slashedFolder, unslashedURL)).toBe(
    `${testURL}${slashedFolder}${testEntityID}.png`
  );
});
