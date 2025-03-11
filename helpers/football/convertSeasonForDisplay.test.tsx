import { convertSeasonForDisplay } from './convertForDisplay';

it('a valid number returns the expected X/X+1 response', () => {
  // Check for Y2K bug.
  expect(convertSeasonForDisplay(1999)).toEqual('1999/2000');
  // Year at time of writing.
  expect(convertSeasonForDisplay(2024)).toEqual('2024/2025');
  // Not much has changed by we live underwater.
  expect(convertSeasonForDisplay(3000)).toEqual('3000/3001');
  // Extreme numbers.
  expect(convertSeasonForDisplay(-1999)).toEqual('-1999/-1998');
  expect(convertSeasonForDisplay(0)).toEqual('0/1');
});
