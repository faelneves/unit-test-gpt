import castArray from './castArray';

describe('castArray', () => {
  it('should return an array with a single element if value is not an array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });

  it('should return empty array if no arguments are provided', () => {
    expect(castArray()).toEqual([]);
  });

  it('should return the same array if value is already an array', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});
