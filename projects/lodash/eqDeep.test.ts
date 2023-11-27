import isEqual from './eqDeep';

describe('isEqual', () => {
  it('should return true if the values are equivalent', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual(new Date('2021-01-01'), new Date('2021-01-01'))).toBe(true);
  });

  it('should return false if the values are not equivalent', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(isEqual(new Date('2021-01-01'), new Date('2022-01-01'))).toBe(false);
  });
});
