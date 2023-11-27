import flow from './flow';

describe('flow', () => {
  it('should return a function', () => {
    const result = flow();
    expect(typeof result).toBe('function');
  });

  it('should throw a TypeError when a non-function argument is passed', () => {
    const invalidArgs = [null, undefined, 123, 'string', {}, []];
    invalidArgs.forEach((arg) => {
      expect(() => flow(arg)).toThrow(TypeError);
    });
  });

  it('should execute functions in the correct order', () => {
    const add = (a: number, b: number) => a + b;
    const multiply = (a: number, b: number) => a * b;
    const subtract = (a: number, b: number) => a - b;

    const composedFn = flow(add, multiply, subtract);

    expect(composedFn(1, 2)).toBe(-3);
    expect(composedFn(5, 6)).toBe(19);
  });

  it('should pass arguments correctly to each function', () => {
    const fn1 = jest.fn((a: number, b: number) => a + b);
    const fn2 = jest.fn((a: number) => a * 2);

    const composedFn = flow(fn1, fn2);

    const result = composedFn(2, 3);

    expect(fn1).toHaveBeenCalledWith(2, 3);
    expect(fn2).toHaveBeenCalledWith(5);

    expect(result).toBe(10);
  });

  it('should handle functions that return values of different types', () => {
    const fn1 = () => 1;
    const fn2 = () => 'two';
    const fn3 = () => [3];

    const composedFn = flow(fn1, fn2, fn3);

    expect(composedFn()).toEqual([3]);
  });
});
