import isFunction from './isFunction';

describe('isFunction', () => {
  it('should return true for a regular function', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  it('should return true for an async function', () => {
    expect(isFunction(async () => {})).toBe(true);
  });

  it('should return true for a generator function', () => {
    expect(isFunction(function* () {})).toBe(true);
  });

  it('should return true for a class', () => {
    expect(isFunction(class {})).toBe(true);
  });

  it('should return true for built-in functions', () => {
    expect(isFunction(Math.round)).toBe(true);
  });

  it('should return false for a regular expression', () => {
    expect(isFunction(/abc/)).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isFunction(123)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isFunction('test')).toBe(false);
  });

  it('should return false for an object', () => {
    expect(isFunction({})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isFunction(null)).toBe(false);
  });
});
