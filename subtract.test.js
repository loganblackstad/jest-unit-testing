const subtract = require('./module2.js')


test('subtraction of 3 minus 1 to equal 2', () => {
  expect(subtract(3, 1)).toBe(2);
});