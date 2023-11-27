import castArrayLikeObject from './castArrayLikeObject';
import isArrayLikeObject from '../isArrayLikeObject';

describe('castArrayLikeObject', () => {
  it('should return the input value if it is an array-like object', () => {
    const value = [1, 2, 3];
    expect(castArrayLikeObject(value)).toBe(value);
  });

  it('should return an empty array if the input value is not an array-like object', () => {
    expect(castArrayLikeObject(null)).toEqual([]);
    expect(castArrayLikeObject(undefined)).toEqual([]);
    expect(castArrayLikeObject({})).toEqual([]);
    expect(castArrayLikeObject('string')).toEqual([]);
    expect(castArrayLikeObject(123)).toEqual([]);
    expect(castArrayLikeObject(true)).toEqual([]);
    expect(castArrayLikeObject(false)).toEqual([]);
    expect(castArrayLikeObject(Symbol())).toEqual([]);
    expect(castArrayLikeObject(() => {})).toEqual([]);
  });
});
