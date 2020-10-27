// import { add } from './sum.js'

const mod = require('./module1');
// const add = require('./sum');


test('adds 1 + 2 to equal 3', () => {
  expect(mod.sum(1, 2)).toBe(3);
});

console.log(mod.add(2, 3))

test('adds 2 + 2 to equal 4', () => {
  expect(mod.add(2, 2)).toBe(4);
});