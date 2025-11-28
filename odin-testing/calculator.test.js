const calculator = require('./calculator')

test("Add", () => {
  expect(calculator.add(5, 3)).toBe(8);
})

test("Subtract", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
})

test("Divide", () => {
  expect(calculator.divide(12, 3)).toBe(4);
})

test("Multiply", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
})