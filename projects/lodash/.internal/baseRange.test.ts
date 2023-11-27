import baseRange from './baseRange';

describe('baseRange', () => {
  it('should return an array of numbers in ascending order', () => {
    expect(baseRange(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if end is less than start', () => {
    expect(baseRange(5, 1, 1)).toEqual([]);
  });

  it('should return an array of numbers in descending order if fromRight is true', () => {
    expect(baseRange(5, 1, 1, true)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should handle negative steps and return an array of numbers', () => {
    expect(baseRange(5, 1, -1)).toEqual([5, 4, 3, 2, 1]);
  });
});
