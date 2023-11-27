import mean from './mean';

describe('mean', () => {
  it('should return 0 if the array is empty', () => {
    expect(mean([])).toBe(0);
  });

  it('should return the mean of the values in the array', () => {
    expect(mean([4, 2, 8, 6])).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(mean([-4, -2, -8, -6])).toBe(-5);
  });

  it('should handle floating point numbers', () => {
    expect(mean([4.5, 2.5, 8, 6.5])).toBe(5.375);
  });

  it('should handle arrays with duplicate values', () => {
    expect(mean([4, 2, 8, 2, 6])).toBe(4.4);
  });

  it('should handle arrays with string values', () => {
    expect(mean(['4', '2', '8', '6'])).toBe(5);
  });
});
