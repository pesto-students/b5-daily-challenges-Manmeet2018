import { count, cycle, repeat } from './iterInfinite';

describe('Count Iter', () => {
  test('should count it in infinite manner', () => {
    const iter = count(10, -2);
    const result = [];

    for (const ele of iter) {
      if (ele < 0) break;
      result.push(ele);
    }
    expect(result).toEqual([10, 8, 6, 4, 2, 0]);
  });
});

describe('Cycle Iter', () => {
  test("Cycle 'n' times", () => {
    const iter = cycle('FOO', 2);
    const result = Array.from(iter);

    expect(result).toEqual(['F', 'O', 'O', 'F', 'O', 'O']);
  });
});

describe('Repeat Iter', () => {
  test('Repeat n times', () => {
    const iter = repeat('HI', 6);
    const result = Array.from(iter);

    expect(result).toEqual(['HI', 'HI', 'HI', 'HI', 'HI', 'HI']);
  });
});
