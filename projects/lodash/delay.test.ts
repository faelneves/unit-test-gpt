import delay from './delay';

describe('delay', () => {
  it('should delay the invocation of the function', async () => {
    jest.useFakeTimers();
    
    const callback = jest.fn();
    delay(callback, 1000);
    
    expect(callback).not.toBeCalled();
    
    jest.advanceTimersByTime(1000);
    
    expect(callback).toBeCalled();
  });
  
  it('should pass arguments to the delayed function', async () => {
    jest.useFakeTimers();
    
    const callback = jest.fn();
    const arg1 = 'hello';
    const arg2 = 123;
    
    delay(callback, 1000, arg1, arg2);
    
    jest.advanceTimersByTime(1000);
    
    expect(callback).toBeCalledWith(arg1, arg2);
  });
  
  it('should return the timer id', () => {
    jest.useFakeTimers();
    
    const callback = jest.fn();
    const timerId = delay(callback, 1000);
    
    expect(timerId).toBe(1); // timer id starts from 1
  });
  
  it('should throw an error if the first argument is not a function', () => {
    expect(() => {
      delay('not a function', 1000);
    }).toThrow(TypeError);
  });
});
