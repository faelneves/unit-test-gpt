import isLength from './isLength';

describe('isLength', () => {
  it('should return true if value is a valid length', () => {
    expect(isLength(3)).toBe(true);
  });

  it('should return false if value is not a number', () => {
    expect(isLength('3')).toBe(false);
  });

  it('should return false if value is less than 0', () => {
    expect(isLength(-1)).toBe(false);
  });

  it('should return false if value is a decimal number', () => {
    expect(isLength(3.5)).toBe(false);
  });

  it('should return false if value exceeds maximum safe integer', () => {
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  });
});
