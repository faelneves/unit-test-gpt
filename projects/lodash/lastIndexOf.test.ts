import lastIndexOf from './lastIndexOf';


describe('lastIndexOf', () => {

  it('should return the index of the last occurrence of a value in an array', () => {
    const array = [1, 2, 1, 2];
    expect(lastIndexOf(array, 2)).toBe(3);
  });

  it('should return the index of the last occurrence of a value in an array starting from a given index', () => {
    const array = [1, 2, 1, 2];
    expect(lastIndexOf(array, 2, 2)).toBe(1);
  });

  it('should return -1 if the value is not found in the array', () => {
    const array = [1, 2, 1, 2];
    expect(lastIndexOf(array, 3)).toBe(-1);
  });

  it('should handle empty arrays by returning -1', () => {
    const array = [];
    expect(lastIndexOf(array, 1)).toBe(-1);
  });

  it('should handle null arrays by returning -1', () => {
    const array = null;
    expect(lastIndexOf(array, 1)).toBe(-1);
  });

  it('should handle undefined arrays by returning -1', () => {
    const array = undefined;
    expect(lastIndexOf(array, 1)).toBe(-1);
  });

  it('should handle NaN values correctly', () => {
    const array = [NaN, 1, 2, NaN];
    expect(lastIndexOf(array, NaN)).toBe(3);
  });

});
