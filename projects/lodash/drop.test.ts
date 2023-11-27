import drop from './drop';

describe('drop', () => {
  it('returns a new array with n elements dropped from the beginning', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('handles empty arrays', () => {
    expect(drop([])).toEqual([]);
    expect(drop([], 5)).toEqual([]);
    expect(drop([], 0)).toEqual([]);
  });

  it('handles negative values of n', () => {
    expect(drop([1, 2, 3], -1)).toEqual([2, 3]);
    expect(drop([1, 2, 3], -5)).toEqual([1, 2, 3]);
    expect(drop([], -1)).toEqual([]);
  });

  it('handles non-integer values of n', () => {
    expect(drop([1, 2, 3], 1.5)).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2.9)).toEqual([3]);
    expect(drop([1, 2, 3], -0.5)).toEqual([1, 2, 3]);
  });

  it('handles strings', () => {
    expect(drop('hello', 2)).toEqual(['l', 'o']);
    expect(drop('hello', 5)).toEqual([]);
    expect(drop('hello', 0)).toEqual(['h', 'e', 'l', 'l', 'o']);
  });

  it('handles arrays with null or undefined values', () => {
    expect(drop([null, undefined, 1, 2, 3], 2)).toEqual([1, 2, 3]);
    expect(drop([null, undefined, 1, 2, 3], 5)).toEqual([]);
    expect(drop([null, undefined, 1, 2, 3], 0)).toEqual([null, undefined, 1, 2, 3]);
  });
});
