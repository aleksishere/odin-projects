const analyzeArray = require('./analyzeArray');

test("Analyze Array Test 1", () => {
  expect(analyzeArray([5, 4, 3, 2, 4]).average).toBe(3.6)
  expect(analyzeArray([5, 4, 3, 2, 4]).min).toBe(2)
  expect(analyzeArray([5, 4, 3, 2, 4]).max).toBe(5)
  expect(analyzeArray([5, 4, 3, 2, 4]).length).toBe(5)
})

test("Analyze Array Test 2", () => {
  const result = analyzeArray([1,2,3,4,5]);
  expect(result.average).toBe(3);
  expect(result.min).toBe(1);
  expect(result.max).toBe(5);
  expect(result.length).toBe(5);
});

test("Analyze Array Test 3", () => {
  const result = analyzeArray([10,20,30,40,50]);
  expect(result.average).toBe(30);
  expect(result.min).toBe(10);
  expect(result.max).toBe(50);
  expect(result.length).toBe(5);
});

test("Analyze Array Test 4", () => {
  const result = analyzeArray([-5,-4,-3,-2,-1]);
  expect(result.average).toBe(-3);
  expect(result.min).toBe(-5);
  expect(result.max).toBe(-1);
  expect(result.length).toBe(5);
});

test("Analyze Array Test 5", () => {
  const result = analyzeArray([0,0,0,0,0]);
  expect(result.average).toBe(0);
  expect(result.min).toBe(0);
  expect(result.max).toBe(0);
  expect(result.length).toBe(5);
});