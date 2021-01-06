const isError = str => typeof str !== 'string';

function abbreviateString(inputString) {
// error check
  if (isError(inputString)) throw new TypeError('Input should be string');

  if (inputString === ' ') return inputString;
  const trimString = inputString.trim();
  const firstIndexOfDelimiter = trimString.indexOf(' ');

  if (firstIndexOfDelimiter === -1) return trimString;

  const secondIndexOfDelimiter = trimString.lastIndexOf(' ');
  const lastStringWord = inputString.substr(1 + secondIndexOfDelimiter);
  const firstStringWord = trimString.substr(0, firstIndexOfDelimiter);

  return `${firstStringWord} ${lastStringWord.charAt(0).toUpperCase()}.`;
}
// console.log(abbreviateString(' '));
export { abbreviateString };
