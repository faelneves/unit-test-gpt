import flowRight from './flowRight';

describe('flowRight', () => {
  it('should return a new composite function', () => {
    const func1 = jest.fn();
    const func2 = jest.fn();
    const func3 = jest.fn();

    const compositeFunc = flowRight(func1, func2, func3);

    expect(typeof compositeFunc).toBe('function');
  });

  it('should invoke the functions from right to left', () => {
    const func1 = jest.fn(() => 1);
    const func2 = jest.fn((n) => n + 2);
    const func3 = jest.fn((n) => n * 3);

    const compositeFunc = flowRight(func1, func2, func3);
    const result = compositeFunc(2);

    expect(result).toBe(9);
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func1).toHaveBeenCalledWith(2);
    expect(func2).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledWith(1);
    expect(func3).toHaveBeenCalledTimes(1);
    expect(func3).toHaveBeenCalledWith(3);
  });

  it('should work correctly with nested flowRight calls', () => {
    const func1 = jest.fn((n) => n + 1);
    const func2 = jest.fn((n) => n * 2);
    const func3 = jest.fn((n) => n - 3);
    const func4 = jest.fn((n) => n / 4);

    const compositeFunc1 = flowRight(func1, func2);
    const compositeFunc2 = flowRight(func3, compositeFunc1, func4);

    const result = compositeFunc2(10);
    expect(result).toBe(4);
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
    expect(func3).toHaveBeenCalledTimes(1);
    expect(func4).toHaveBeenCalledTimes(1);
  });
});
