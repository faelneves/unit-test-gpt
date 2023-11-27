import every from './every';

describe('every', () => {
  it('should return true for an empty array', () => {
    expect(every([], () => true)).toBe(true);
  });

  it('should return false if any element fails the predicate check', () => {
    const arr = [true, 1, null, 'yes'];
    expect(every(arr, Boolean)).toBe(false);
  });

  it('should return true if all elements pass the predicate check', () => {
    const arr = [true, 1, 'yes', {}];
    expect(every(arr, Boolean)).toBe(true);
  });

  it('should correctly handle index argument in the predicate function', () => {
    const arr = ['a', 'b', 'c'];
    expect(every(arr, (value, index) => index === arr.indexOf(value))).toBe(true);
  });
});
