import toLength from './toLength';

describe('toLength', () => {
  it('should return 0 when value is falsy', () => {
    expect(toLength(null)).toBe(0);
    expect(toLength(undefined)).toBe(0);
    expect(toLength('')).toBe(0);
    expect(toLength(false)).toBe(0);
  });

  it('should convert value to an integer', () => {
    expect(toLength(3.2)).toBe(3);
    expect(toLength('3.2')).toBe(3);
    expect(toLength(3)).toBe(3);
  });

  it('should not convert value if it is already an integer', () => {
    expect(toLength(5)).toBe(5);
    expect(toLength('5')).toBe(5);
  });

  it('should return 0 if value is a negative number', () => {
    expect(toLength(-5)).toBe(0);
    expect(toLength('-5')).toBe(0);
  });

  it('should return the maximum length if value exceeds it', () => {
    expect(toLength(Infinity)).toBe(4294967295);
    expect(toLength(MAX_ARRAY_LENGTH + 1)).toBe(4294967295);
  });
});
