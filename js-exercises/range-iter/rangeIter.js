const isNumber = (ele) => {
  if (typeof ele !== 'number') {
    throw new TypeError(`TypeError: ${ele} is not a number`);
  }
};

function range(start, end) {
  return {
    [Symbol.iterator]() {
      let i = start;
      return {
        next() {
          return {
            done: i > end,
            value: i++,
          };
        }
      };
    },
  };
}

function rangeIter(lowerBound, upperBound) {
  isNumber(lowerBound);
  isNumber(upperBound);
  return [...range(lowerBound, upperBound)];
}

export { rangeIter };
