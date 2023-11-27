import range from './range';

describe('range', () => {
  it('should return an empty array when no arguments are provided', () => {
    const result = range();
    expect(result).toEqual([]);
  });

  it('should return an array of numbers from 0 to (end - 1) when only end is provided', () => {
    const result = range(4);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  it('should return an array of numbers from start to (end - 1) when both start and end are provided', () => {
    const result = range(1, 5);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should return an array of numbers with the specified step when start, end, and step are provided', () => {
    const result = range(0, 20, 5);
    expect(result).toEqual([0, 5, 10, 15]);
  });

  it('should return an array of numbers from 0 to (end - 1) when only a negative end is provided', () => {
    const result = range(-4);
    expect(result).toEqual([0, -1, -2, -3]);
  });

  it('should return an array of numbers from start to (end - 1) when both a negative start and end are provided', () => {
    const result = range(0, -4, -1);
    expect(result).toEqual([0, -1, -2, -3]);
  });

  it('should return an array of numbers with the same value when step is 0', () => {
    const result = range(1, 4, 0);
    expect(result).toEqual([1, 1, 1]);
  });
});
