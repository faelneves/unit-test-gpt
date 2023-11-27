import defer from './defer.ts';

describe('defer', () => {
  it('should defer the function execution', (done) => {
    const mockFn = jest.fn((text) => {
      expect(text).toBe('deferred');
      done();
    });

    defer(mockFn, 'deferred');
  });

  it('should throw an error if the first argument is not a function', () => {
    expect(() => {
      defer(null);
    }).toThrow(TypeError);
  });

  it('should invoke the function with additional arguments', () => {
    const mockFn = jest.fn();

    defer(mockFn, 'arg1', 'arg2');

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
