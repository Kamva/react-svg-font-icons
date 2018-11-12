import fontAwesome from '../fontAwesome';
import simpleLineIcon from '../simpleLineIcon';

test('match keys', () => {
  const fontAwesomeKeys = Object.keys(fontAwesome);
  const simpleLineIconkeys = Object.keys(simpleLineIcon);

  expect(fontAwesomeKeys).toEqual(simpleLineIconkeys);
});
