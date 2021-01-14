const isNumber = (num) => {
  if (typeof num !== 'number') {
    throw new TypeError(`TypeError: ${num} is not a number`);
  }
};

const isLessThenTwo = (num) => {
  if (num < 2) {
    throw new Error(`Error: ${num} should be greater than or equal to 2`);
  }
};

const isPrime = (num) => {
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (!(num % i)) return false;
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
  isLessThenTwo(upto);
  let primeSum = 0;
  const iter = generatePrimeNumbers(upto);
  for (const el of iter) {
    primeSum += el;
  }
  return primeSum;
}

export {
  sumPrimes,
};
