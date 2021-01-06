const isError = str => typeof str !== 'string';

function abbreviateString(inputString) {
// error check
  if (isError(inputString)) throw new TypeError('Input should be string');

  const trimString = inputString.trim();
  const firstIndexOfDelimiter = trimString.indexOf(' ');
  const secondIndexOfDelimiter = trimString.lastIndexOf(' ');

  const lastStringWord = inputString.substr(1 + secondIndexOfDelimiter);
  const firstStringWord = trimString.substr(0, firstIndexOfDelimiter);

  if (firstStringWord === ' ') return inputString;
  if (secondIndexOfDelimiter === -1) return firstStringWord;

  return `${firstStringWord} ${lastStringWord.charAt(0).toUpperCase()}.`;
}

export { abbreviateString };
