const isNumber = (num) => {
  if (typeof num !== 'number') {
    throw new TypeError(`TypeError: ${num} is not a number`);
  }
};

const isPrime = (num) => {
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

function* generatePrimeNumbers(number) {
  let i = 2;
  while (true) {
    if (i > number) break;
    if (isPrime(i)) {
      yield i;
    }
    i += 1;
  }
}
function sumPrimes(upto) {
  isNumber(upto);
  let PrimeSum = 0;
  const iter = generatePrimeNumbers(upto);
  for (const el of iter) {
    PrimeSum += el;
  }
  return PrimeSum;
}

export {
  sumPrimes,
};
