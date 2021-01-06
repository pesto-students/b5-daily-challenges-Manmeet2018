const alphabeticShift = inputString => {
  let result = '';

  for (const char of inputString) {
    let shiftedChar = '';
    if (char === 'Z' || char === 'z') shiftedChar = 'a';
    else shiftedChar = String.fromCharCode(char.charCodeAt(0) + 1);
    result += shiftedChar;
  }
  return result;
};

export { alphabeticShift };
