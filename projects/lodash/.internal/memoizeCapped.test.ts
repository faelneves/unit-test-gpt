import memoizeCapped from './memoizeCapped'

describe('memoizeCapped', () => {
  it('should return a memoized function', () => {
    const originalFunction = jest.fn((arg) => arg)
    const memoizedFunction = memoizeCapped(originalFunction)

    // First call should invoke the original function
    expect(memoizedFunction(1)).toBe(1)
    expect(originalFunction).toHaveBeenCalledTimes(1)

    // Second call should retrieve the result from cache
    expect(memoizedFunction(1)).toBe(1)
    expect(originalFunction).toHaveBeenCalledTimes(1)

    // Third call with different argument should invoke the original function again
    expect(memoizedFunction(2)).toBe(2)
    expect(originalFunction).toHaveBeenCalledTimes(2)
  })

  it('should clear cache when it exceeds MAX_MEMOIZE_SIZE', () => {
    const originalFunction = jest.fn((arg) => arg)
    const memoizedFunction = memoizeCapped(originalFunction)

    // Call the memoized function MAX_MEMOIZE_SIZE times
    for (let i = 0; i < MAX_MEMOIZE_SIZE; i++) {
      expect(memoizedFunction(i)).toBe(i)
    }

    // Call the memoized function again with the same argument
    // This should invoke the original function again and clear the cache
    expect(memoizedFunction(0)).toBe(0)
    expect(originalFunction).toHaveBeenCalledTimes(1)
  })
})
