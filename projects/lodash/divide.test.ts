import divide from './divide';

describe('divide', () => {
  it('should divide two positive numbers correctly', () => {
    expect(divide(6, 4)).toBe(1.5);
  });

  it('should divide a positive number by zero to infinity', () => {
    expect(divide(6, 0)).toBe(Infinity);
  });

  it('should divide a negative number by zero to negative infinity', () => {
    expect(divide(-6, 0)).toBe(-Infinity);
  });

  it('should divide zero by a positive number to zero', () => {
    expect(divide(0, 4)).toBe(0);
  });

  it('should divide zero by a negative number to zero', () => {
    expect(divide(0, -4)).toBe(0);
  });

  it('should divide a positive number by a positive number correctly', () => {
    expect(divide(8, 2)).toBe(4);
  });

  it('should divide a negative number by a positive number correctly', () => {
    expect(divide(-8, 2)).toBe(-4);
  });

  it('should divide a positive number by a negative number correctly', () => {
    expect(divide(8, -2)).toBe(-4);
  });

  it('should divide a negative number by a negative number correctly', () => {
    expect(divide(-8, -2)).toBe(4);
  });
});
