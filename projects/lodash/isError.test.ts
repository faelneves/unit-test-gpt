import isError from './isError';

describe('isError', () => {
  it('should return true for an Error object', () => {
    const error = new Error('This is an error');
    expect(isError(error)).toBe(true);
  });

  it('should return false for non-Error objects', () => {
    expect(isError(Error)).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
    expect(isError('')).toBe(false);
    expect(isError(123)).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError(false)).toBe(false);
    expect(isError(() => {})).toBe(false);
    expect(isError(Symbol())).toBe(false);
    expect(isError(new Date())).toBe(false);
  });

  it('should return true for a DOMException object', () => {
    const domException = new DOMException('This is a DOMException');
    expect(isError(domException)).toBe(true);
  });

  it('should return true for an Error-like object', () => {
    const customError = {
      name: 'CustomError',
      message: 'This is a custom error',
    };
    expect(isError(customError)).toBe(true);
  });

  it('should return false for an Error-like object with additional properties', () => {
    const customError = {
      name: 'CustomError',
      message: 'This is a custom error',
      code: 123,
    };
    expect(isError(customError)).toBe(false);
  });
});
