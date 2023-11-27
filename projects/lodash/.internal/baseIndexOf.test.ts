import baseIndexOf from './baseIndexOf';
import baseFindIndex from './baseFindIndex';
import baseIsNaN from './baseIsNaN';
import strictIndexOf from './strictIndexOf';

describe('baseIndexOf', () => {
  const array = [1, 2, 3, 4, NaN, null, undefined];
  const fromIndex = 2;

  it('should return the index of the matched value if the value is found', () => {
    expect(baseIndexOf(array, 3, fromIndex)).toBe(2);
    expect(baseIndexOf(array, NaN, fromIndex)).toBe(4);
    expect(baseIndexOf(array, null, fromIndex)).toBe(5);
    expect(baseIndexOf(array, undefined, fromIndex)).toBe(6);
  });

  it('should return -1 if the value is not found', () => {
    expect(baseIndexOf(array, 5, fromIndex)).toBe(-1);
    expect(baseIndexOf(array, '', fromIndex)).toBe(-1);
    expect(baseIndexOf(array, false, fromIndex)).toBe(-1);
  });

  // Edge case: empty array
  it('should return -1 if the array is empty', () => {
    expect(baseIndexOf([], 1, fromIndex)).toBe(-1);
    expect(baseIndexOf([], undefined, fromIndex)).toBe(-1);
  });

  // Edge case: fromIndex is negative
  it('should return the index of the matched value if fromIndex is negative', () => {
    expect(baseIndexOf(array, 2, -2)).toBe(1);
    expect(baseIndexOf(array, NaN, -2)).toBe(4);
  });
});

