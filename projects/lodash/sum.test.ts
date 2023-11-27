import sum from './sum';

describe('sum', () => {
  it('should return the sum of the values in the array', () => {
    expect(sum([4, 2, 8, 6])).toBe(20);
  });

  it('should return 0 if the array is empty', () => {
    expect(sum([])).toBe(0);
  });

  it('should return 0 if the array is null', () => {
    expect(sum(null)).toBe(0);
  });

  it('should return 0 if the array is undefined', () => {
    expect(sum(undefined)).toBe(0);
  });

  it('should return 0 if the array is not an array', () => {
    expect(sum('not an array')).toBe(0);
  });

  it('should ignore non-numeric values in the array', () => {
    expect(sum([4, '2', 8, 'six'])).toBe(12);
  });
});
