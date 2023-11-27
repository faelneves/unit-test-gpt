import negate from './negate';

describe('negate', () => {
  it('should return a function that negates the result of the provided predicate function', () => {
    const isEven = (n: number) => n % 2 === 0;
    const isOdd = negate(isEven);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
  });

  it('should throw a TypeError if the provided argument is not a function', () => {
    expect(() => negate(123)).toThrow(TypeError);
    expect(() => negate('not a function')).toThrow(TypeError);
    expect(() => negate([])).toThrow(TypeError);
    expect(() => negate({})).toThrow(TypeError);
  });
});
