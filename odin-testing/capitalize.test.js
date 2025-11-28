const capitalize = require('./capitalize');

test('capitalize test', () => {
  expect(capitalize("random text")).toBe("Random text");
});