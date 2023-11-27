import once from './once';

describe('once', () => {
  it('should invoke the function only once', () => {
    const mockFunc = jest.fn();
    const restrictedFunc = once(mockFunc);

    restrictedFunc();
    restrictedFunc();

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should return the value of the first invocation', () => {
    const mockFunc = jest.fn(() => 'test');
    const restrictedFunc = once(mockFunc);

    const result1 = restrictedFunc();
    const result2 = restrictedFunc();

    expect(result1).toBe('test');
    expect(result2).toBe('test');
  });
});
