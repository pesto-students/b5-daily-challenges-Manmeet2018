const isIterable = (obj) => (obj != null
  && typeof obj[Symbol.iterator] === 'function');

function* count(start = 0, step = 1) {
  let value = start;
  while (true) {
    yield value;
    value += step;
  }
}

function* cycle(iter, noOfTimes = Infinity) {
  if (!isIterable(iter)) {
    throw new TypeError(`Input type has to be Iterator not ${typeof iter}`);
  }
  // let repetition = noOfTimes;
  while (noOfTimes) {
    yield* iter;
    noOfTimes -= 1;
  }
}

function* repeat(value, noOfTines = Infinity) {
  yield* cycle([value], noOfTines);
}

export { count, cycle, repeat };
