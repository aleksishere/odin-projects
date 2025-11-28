function caesarCipher(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let cipher = '';
  let originalTest = str;
  str = str.toLowerCase();
  num = num % 26;
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const index = alphabet.indexOf(character);
    if (index === -1) {
      cipher += character;
    } else {
      let cIndex = index + num;
      if (cIndex >= 26) cIndex -= 26;
      if (cIndex < 0) cIndex += 26;
      cipher += alphabet[cIndex];
    }
  }
  let finalCipher = '';
  for (let i = 0; i < str.length; i++) {
    if (originalTest[i] === originalTest[i].toUpperCase()) {
      finalCipher += cipher[i].toUpperCase();
    } else {
      finalCipher += cipher[i];
    }
  }
  return finalCipher;
}

module.exports = caesarCipher;