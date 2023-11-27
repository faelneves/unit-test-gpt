import baseIndexOfWith from './baseIndexOfWith';

describe('baseIndexOfWith', () => {
  it('should return the index of the matched value', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 3;
    const fromIndex = 0;
    const comparator = (a, b) => a === b;

    expect(baseIndexOfWith(array, value, fromIndex, comparator)).toBe(2);
  });

  it('should return -1 if no value is matched', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 10;
    const fromIndex = 0;
    const comparator = (a, b) => a === b;

    expect(baseIndexOfWith(array, value, fromIndex, comparator)).toBe(-1);
  });

  it('should start searching from the specified index', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 2;
    const fromIndex = 3;
    const comparator = (a, b) => a === b;

    expect(baseIndexOfWith(array, value, fromIndex, comparator)).toBe(-1);
  });
});
