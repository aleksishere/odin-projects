const caesarCipher = require('./caesarCipher');

test("caesarCipher Test 1", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("caesarCipher Test 2", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test("caesarCipher Test 2", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})