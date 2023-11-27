import strictIndexOf from './strictIndexOf';

describe('strictIndexOf', () => {
  it('should return the index of the matched value', () => {
    const array = [1, 2, 3, 4, 5];
    expect(strictIndexOf(array, 3, 0)).toBe(2);
    expect(strictIndexOf(array, 4, 2)).toBe(3);
    expect(strictIndexOf(array, 5, 4)).toBe(4);
  });

  it('should return -1 if the value is not found', () => {
    const array = [1, 2, 3, 4, 5];
    expect(strictIndexOf(array, 6, 0)).toBe(-1);
    expect(strictIndexOf(array, 2, 3)).toBe(-1);
    expect(strictIndexOf([], 1, 0)).toBe(-1);
  });

  it('should handle edge cases', () => {
    const array = [true, false, null, undefined, 0, ''];
    expect(strictIndexOf(array, null, 0)).toBe(2);
    expect(strictIndexOf(array, undefined, 2)).toBe(3);
    expect(strictIndexOf(array, '', 3)).toBe(5);
    expect(strictIndexOf(array, true, 5)).toBe(0);
    expect(strictIndexOf(array, false, 5)).toBe(1);
    expect(strictIndexOf(array, 0, 5)).toBe(4);
  });
});
