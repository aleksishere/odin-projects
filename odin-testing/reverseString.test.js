const reverseString = require('./reverseString');

require('./reverseString');

test("Reverse string", () => {
  expect(reverseString("test")).toBe("tset");
})