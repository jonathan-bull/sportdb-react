import { DisplayTeam } from '@/types/display/Teams';
import { convertTeamForDisplay } from './convertForDisplay';

const basicDisplayTeam: DisplayTeam = {
  id: 123,
  names: {
    full: 'Test name',
    display: 'My test',
    code: 'TEST',
    short: 'Test',
    shortAlt: 'Name',
    nickName: 'Testy',
  },
};

it('a basic display team object should return the minimum response', () => {
  expect(convertTeamForDisplay(basicDisplayTeam)).toStrictEqual({
    id: 123,
    bgColour: 'white',
    textColour: 'black',
    codeName: 'TEST',
    displayName: 'My test',
    detailEnd: '',
    detailStart: '',
    teamLogo: '',
  });
});
