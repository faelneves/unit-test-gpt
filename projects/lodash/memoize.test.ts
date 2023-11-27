import memoize from './memoize';

describe('memoize', () => {
  it('should memoize the result of the function', () => {
    const mockFn = jest.fn((arg) => arg + 1);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(1)).toBe(2);
    expect(memoizedFn(1)).toBe(2);
    expect(mockFn).toHaveBeenCalledTimes(1); // function should be called only once

    expect(memoizedFn(2)).toBe(3);
    expect(memoizedFn(2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(2); // function should be called only once

    expect(memoizedFn(3)).toBe(4);
    expect(memoizedFn(3)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(3); // function should be called only once
  });

  it('should use the resolver to determine the cache key', () => {
    const mockFn = jest.fn((arg) => arg + 1);
    const resolver = jest.fn((...args) => args.join(':'));
    const memoizedFn = memoize(mockFn, resolver);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);    // function should be called only once
    expect(resolver).toHaveBeenCalledTimes(1); // resolver should be called only once

    expect(memoizedFn(1, 3)).toBe(4);
    expect(memoizedFn(1, 3)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(2);    // function should be called only once
    expect(resolver).toHaveBeenCalledTimes(2); // resolver should be called only once

    expect(memoizedFn(2, 3)).toBe(4);
    expect(memoizedFn(2, 3)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(3);    // function should be called only once
    expect(resolver).toHaveBeenCalledTimes(3); // resolver should be called only once
  });

  it('should throw a TypeError if the first argument is not a function', () => {
    expect(() => memoize()).toThrow(TypeError);
    expect(() => memoize(123)).toThrow(TypeError);
    expect(() => memoize('not-a-function')).toThrow(TypeError);
    expect(() => memoize({})).toThrow(TypeError);
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize(undefined)).toThrow(TypeError);
  });

  it('should throw a TypeError if the second argument is provided and not a function', () => {
    const mockFn = jest.fn();

    expect(() => memoize(mockFn, 123)).toThrow(TypeError);
    expect(() => memoize(mockFn, 'not-a-function')).toThrow(TypeError);
    expect(() => memoize(mockFn, {})).toThrow(TypeError);
    expect(() => memoize(mockFn, null)).toThrow(TypeError);
    expect(() => memoize(mockFn, undefined)).toThrow(TypeError);
  });

  it('should use the provided cache implementation', () => {
    class CustomCache {
      constructor() {
        this.data = {};
      }

      get(key) {
        return this.data[key];
      }

      set(key, value) {
        this.data[key] = value;
      }

      has(key) {
        return this.data.hasOwnProperty(key);
      }

      delete(key) {
        delete this.data[key];
      }

      clear() {
        this.data = {};
      }
    }

    memoize.Cache = CustomCache;

    const mockFn = jest.fn((arg) => arg + 1);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn.cache instanceof CustomCache).toBe(true);

    expect(memoizedFn(1)).toBe(2);
    expect(memoizedFn(1)).toBe(2);
    expect(mockFn).toHaveBeenCalledTimes(1); // function should be called only once

    memoizedFn.cache.set(1, 10); // modify the cache manually
    expect(memoizedFn(1)).toBe(10); // should return the modified value instead of calling the function
    expect(mockFn).toHaveBeenCalledTimes(1); // function should not be called again
  });
});
