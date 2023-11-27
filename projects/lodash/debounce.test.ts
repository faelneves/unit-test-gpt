import debounce from './debounce';

describe('debounce', () => {
  it('should debounce the function', () => {
    jest.useFakeTimers();

    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should debounce the function with leading option', () => {
    jest.useFakeTimers();

    const func = jest.fn();
    const debouncedFunc = debounce(func, 100, { leading: true });

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should debounce the function with trailing option', () => {
    jest.useFakeTimers();

    const func = jest.fn();
    const debouncedFunc = debounce(func, 100, { trailing: true });

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should cancel the debounced function', () => {
    jest.useFakeTimers();

    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    debouncedFunc.cancel();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(0);
  });

  it('should flush the debounced function', () => {
    jest.useFakeTimers();

    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();

    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should check if the debounced function is pending', () => {
    jest.useRealTimers();

    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    expect(debouncedFunc.pending()).toBe(false);

    debouncedFunc();

    expect(debouncedFunc.pending()).toBe(true);
  });
});
