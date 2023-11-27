import parseInt from './parseInt';

describe('parseInt', () => {
  it('should convert string to integer with specified radix', () => {
    expect(parseInt('10', 10)).toBe(10);
    expect(parseInt('101', 2)).toBe(5);
    expect(parseInt('FF', 16)).toBe(255);
  });

  it('should convert string to integer with default radix', () => {
    expect(parseInt('10')).toBe(10);
    expect(parseInt('101')).toBe(101);
    expect(parseInt('-10')).toBe(-10);
  });

  it('should handle whitespace characters', () => {
    expect(parseInt('  10 ')).toBe(10);
    expect(parseInt('  0 ')).toBe(0);
    expect(parseInt('')).toBe(NaN);
  });

  it('should correctly handle hexadecimal input', () => {
    expect(parseInt('0xFF', 16)).toBe(255);
    expect(parseInt('0xFF', 10)).toBe(0);
  });

  it('should correctly handle non-string input', () => {
    expect(parseInt(100, 10)).toBe(100);
    expect(parseInt(true, 10)).toBeNaN();
    expect(parseInt(null)).toBeNaN();
    expect(parseInt(undefined)).toBeNaN();
  });
});
