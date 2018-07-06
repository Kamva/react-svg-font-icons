import fontAwesome from '../fontAwsome';
import lineIcon from '../lineIcon';

test('match keys', () => {
  const fontAwesomeKeys = Object.keys(fontAwesome);
  const lineIconkeys = Object.keys(lineIcon);

  expect(fontAwesomeKeys).toEqual(lineIconkeys);
});
