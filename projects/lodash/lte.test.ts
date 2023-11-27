import lte from './lte';

describe('lte', () => {
  it('should return true if value is less than or equal to other', () => {
    expect(lte(1, 3)).toBe(true);
    expect(lte(3, 3)).toBe(true);
    expect(lte(-1, 1)).toBe(true);
    expect(lte('1', '3')).toBe(true);
  });

  it('should return false if value is greater than other', () => {
    expect(lte(3, 1)).toBe(false);
    expect(lte(10, 5)).toBe(false);
    expect(lte(-5, -10)).toBe(false);
    expect(lte('3', '1')).toBe(false);
  });

  it('should handle comparison between numbers and strings', () => {
    expect(lte(1, '3')).toBe(true);
    expect(lte('10', 5)).toBe(true);
    expect(lte(-10, '-5')).toBe(true);
  });

  it('should return true if value and other are both strings', () => {
    expect(lte('abc', 'def')).toBe(true);
    expect(lte('abc', 'abc')).toBe(true);
    expect(lte('def', 'abc')).toBe(false);
  });

  it('should return false if value or other is not a number or string', () => {
    expect(lte([], 3)).toBe(false);
    expect(lte({}, 'abc')).toBe(false);
    expect(lte(null, undefined)).toBe(false);
    expect(lte(undefined, false)).toBe(false);
  });
});
