import indexOf from './indexOf';

describe('indexOf', () => {
  it('should return the index of the first occurrence of the value in the array', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toBe(1);
  });

  it('should return the index of the first occurrence of the value in the array starting from the specified index', () => {
    expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
  });

  it('should return -1 if the value is not found in the array', () => {
    expect(indexOf([1, 2, 1, 2], 3)).toBe(-1);
  });

  it('should return -1 if the array is empty', () => {
    expect(indexOf([], 1)).toBe(-1);
  });

  it('should return -1 if the value is not found in the array from the specified index', () => {
    expect(indexOf([1, 2, 1, 2], 2, 4)).toBe(-1);
  });

  it('should treat negative fromIndex as an offset from the end of the array', () => {
    expect(indexOf([1, 2, 1, 2], 2, -1)).toBe(3);
    expect(indexOf([1, 2, 1, 2], 2, -2)).toBe(1);
    expect(indexOf([1, 2, 1, 2], 2, -3)).toBe(1);
  });

  it('should return -1 if the array is null or undefined', () => {
    expect(indexOf(null, 1)).toBe(-1);
    expect(indexOf(undefined, 1)).toBe(-1);
  });

  it('should convert a non-integer fromIndex to an integer', () => {
    expect(indexOf([1, 2, 1, 2], 2, '2')).toBe(3);
    expect(indexOf([1, 2, 1, 2], 2, 2.2)).toBe(3);
    expect(indexOf([1, 2, 1, 2], 2, NaN)).toBe(1);
    expect(indexOf([1, 2, 1, 2], 2, Infinity)).toBe(1);
  });
});
