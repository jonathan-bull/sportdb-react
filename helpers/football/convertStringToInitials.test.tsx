import { convertStringToInitials } from './convertStringToInitials';

const testValues: { input: string; output: string }[] = [
  { input: 'Aaron Ramsey', output: 'AR' },
  { input: 'AC Milan', output: 'ACM' },
  { input: 'ADO Den Haag', output: 'ADODH' },
  { input: 'AFC Bournemouth', output: 'AFCB' },
  { input: 'Alessandro Del Piero', output: 'ADP' },
  { input: 'Cardiff City Football Club', output: 'CCFC' },
  { input: 'FC Barcelona', output: 'FCB' },
  { input: 'Rayan Aït-Nouri', output: 'RAN' },
  { input: 'The Vetch', output: 'V' },
  { input: 'Thomas the Tank Engine', output: 'TTE' },
  { input: 'Warren Zaïre-Emery', output: 'WZE' },
];

it('confirms convertStringToInitials returns expected values', () => {
  testValues.forEach((testValue) => {
    expect(convertStringToInitials(testValue.input)).toStrictEqual(testValue.output);
  });
});
