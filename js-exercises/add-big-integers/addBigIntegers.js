const addBothNumber = (eleOne, eleTwo) => {
  if (eleOne === ' ') return eleTwo;

  let res = '';
  let carry = 0;

  if (eleOne.length > eleTwo.length) [eleOne , eleTwo] = [eleTwo, eleOne];

  const sizeOne = eleOne.length;
  const sizeTwo = eleTwo.length;

  for (let it = sizeOne - 1, jt = sizeTwo - 1; it >= 0; it -= 1, jt -= 1) {
    let num = (eleOne.charCodeAt(it) - 48) + (eleTwo.charCodeAt(jt) - 48) + carry;
    carry = Math.floor(num / 10);
    num %= 10;
    res += num.toString();
  }
  for (let it = sizeTwo - sizeOne - 1; it >= 0; it -= 1) {
    let num = (eleTwo.charCodeAt(it) - 48) + carry;
    carry = Math.floor(num / 10);
    num %= 10;
    res = res.concat(num.toString());
  }
  if (carry) res = res.concat(carry.toString());
  res = res.split('').reverse().join('');
  return res;
};

function addBigIntegers(intString) {
  const splitArray = intString.split('\n');
  let result = ' ';
  for (const element of splitArray) {
    result = addBothNumber(result, element);
  }
  return result;
}

export { addBigIntegers };