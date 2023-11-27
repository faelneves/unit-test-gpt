import throttle from './throttle';
import debounce from './debounce';

jest.useFakeTimers();

describe('throttle', () => {
  const func = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should call the function immediately if leading is true', () => {
    const throttledFunc = throttle(func, 100, { leading: true });
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });
  
  it('should not call the function immediately if leading is false', () => {
    const throttledFunc = throttle(func, 100, { leading: false });
    throttledFunc();
    expect(func).not.toHaveBeenCalled();
  });
  
  it('should call the function after the wait time has passed', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
  
  it('should not call the function multiple times within the wait time', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
  
  it('should call the function on the trailing edge if trailing is true', () => {
    const throttledFunc = throttle(func, 100, { trailing: true });
    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });
  
  it('should not call the function on the trailing edge if trailing is false', () => {
    const throttledFunc = throttle(func, 100, { trailing: false });
    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
  
  it('should cancel the delayed function invocation', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });
  
  it('should invoke the delayed function immediately', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
