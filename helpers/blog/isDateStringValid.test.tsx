import { dateStringIsValid } from './fetchPostData';

it('should return false if string is empty', () => {
  expect(dateStringIsValid('')).toBe(false);
});

it('should return false if string is not a date', () => {
  expect(dateStringIsValid('Hello everybody!')).toBe(false);
});

it('should return true if string is a valid date', () => {
  expect(dateStringIsValid('01/03/2025 1:23 PM')).toBe(true);
  // This is the American date format so MM is the first value and DD is the second.
  expect(dateStringIsValid('12/03/2025 1:23 PM')).toBe(true);
  expect(dateStringIsValid('03/31/2025 1:23 PM')).toBe(true);
  // This is a more sensible date format.
  expect(dateStringIsValid('2025-03-12T13:23:00Z')).toBe(true);
  expect(dateStringIsValid('2025-03-31T13:23:00Z')).toBe(true);
});

it('should return false if string is an invalid date', () => {
  expect(dateStringIsValid('01/03/2025 96:69')).toBe(false);
  expect(dateStringIsValid('00/00/2025 1:23 PM')).toBe(false);
  // This is the American date format so MM is the first value and DD is the second.
  expect(dateStringIsValid('01/33/2025 1:23 PM')).toBe(false);
  expect(dateStringIsValid('13/03/2025 1:23 PM')).toBe(false);
  // This is a more sensible date format.
  expect(dateStringIsValid('2025-13-03T13:23:00Z')).toBe(false);
  expect(dateStringIsValid('2025-03-33T13:23:00Z')).toBe(false);
});
