import last from './last';

describe('last', () => {
  it('should return the last element of the array', () => {
    expect(last([1, 2, 3])).toEqual(3);
    expect(last(['a', 'b', 'c'])).toEqual('c');
  });

  it('should return undefined if the array is empty', () => {
    expect(last([])).toBeUndefined();
  });

  it('should return undefined if the array is null or undefined', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
  });

  it('should return the last element of the array if it contains falsy values', () => {
    expect(last([null, undefined, '', 0, false])).toEqual(false);
  });
});
