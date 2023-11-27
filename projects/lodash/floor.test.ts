import floor from './floor';

describe('floor', () => {
  it('should return the number rounded down to 0 decimal places', () => {
    expect(floor(4.006)).toBe(4);
    expect(floor(1.234)).toBe(1);
    expect(floor(-5.678)).toBe(-6);
    expect(floor(0)).toBe(0);
  });

  it('should return the number rounded down to the specified decimal places', () => {
    expect(floor(0.046, 2)).toBe(0.04);
    expect(floor(3.14159, 3)).toBe(3.141);
    expect(floor(-7.8912345, 4)).toBe(-7.8912);
  });

  it('should return the number rounded down to the specified negative decimal places (power of 10)', () => {
    expect(floor(4060, -2)).toBe(4000);
    expect(floor(123456789, -6)).toBe(100000000);
    expect(floor(987654321, -9)).toBe(900000000);
  });
});
