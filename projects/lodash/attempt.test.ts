import attempt from './attempt';
import isError from './isError';

describe('attempt', () => {
  const func = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should invoke the function with the given arguments', () => {
    const args = ['arg1', 'arg2'];
    attempt(func, ...args);
    expect(func).toHaveBeenCalledWith(...args);
  });

  it('should return the result if the function is invoked successfully', () => {
    const result = 'result';
    func.mockReturnValueOnce(result);
    const output = attempt(func);
    expect(output).toEqual(result);
  });

  it('should return an error object when an error occurs', () => {
    const error = new Error('Something went wrong');
    func.mockImplementationOnce(() => {
      throw error;
    });
    const output = attempt(func);
    expect(isError(output)).toBe(true);
    expect(output).toEqual(error);
  });
});
