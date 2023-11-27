import after from './after';

describe('after', () => {
  it('should return a function', () => {
    const result = after(0, () => {});
    expect(typeof result).toBe('function');
  });

  it('should throw a TypeError if the second argument is not a function', () => {
    expect(() => {
      after(0, 'not a function');
    }).toThrow(TypeError);
  });

  it('should invoke the function after the specified number of calls', () => {
    const mockFn = jest.fn();
    const wrappedFn = after(3, mockFn);

    expect(mockFn).not.toBeCalled();

    wrappedFn();
    wrappedFn();
    wrappedFn();
    wrappedFn();
    wrappedFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
