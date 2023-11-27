import before from './before';

describe('before', () => {
  it('should return a function that invokes `func` less than `n` times', () => {
    const fn = jest.fn();
    const restrictedFn = before(3, fn);

    restrictedFn();
    restrictedFn();
    restrictedFn();
    restrictedFn();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should return the result of the last `func` invocation', () => {
    const fn = jest.fn((a, b) => a + b);
    const restrictedFn = before(3, fn);

    expect(restrictedFn(2, 3)).toBe(5);
    expect(restrictedFn(4, 6)).toBe(10);
    expect(restrictedFn(7, 8)).toBe(10);
  });

  it('should throw a TypeError if `func` is not a function', () => {
    expect(() => before(3, 'not a function')).toThrow(TypeError);
  });
});
