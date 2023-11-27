import eq from './eq';

describe('eq', () => {
  it('should return true when values are the same', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('a', 'a')).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(NaN, NaN)).toBe(true);
  });

  it('should return false when values are not the same', () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq('a', 'b')).toBe(false);
    expect(eq(null, undefined)).toBe(false);
    expect(eq(null, false)).toBe(false);
    expect(eq(NaN, 'NaN')).toBe(false);
  });

  it('should return false when comparing different data types', () => {
    expect(eq(1, '1')).toBe(false);
    expect(eq('a', { value: 'a' })).toBe(false);
    expect(eq(true, 1)).toBe(false);
    expect(eq(undefined, null)).toBe(false);
  });
});
