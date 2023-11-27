import nth from './nth';

describe('nth', () => {
  it('should return the nth element of an array', () => {
    const array = ['a', 'b', 'c', 'd'];

    expect(nth(array, 0)).toBe('a');
    expect(nth(array, 1)).toBe('b');
    expect(nth(array, 2)).toBe('c');
    expect(nth(array, 3)).toBe('d');
    expect(nth(array, -1)).toBe('d');
  });

  it('should return undefined if the array is empty', () => {
    const array: any[] = [];

    expect(nth(array, 0)).toBe(undefined);
    expect(nth(array, 1)).toBe(undefined);
    expect(nth(array, -1)).toBe(undefined);
  });

  it('should handle out of bounds indices', () => {
    const array = ['a', 'b', 'c', 'd'];

    expect(nth(array, 4)).toBe(undefined);
    expect(nth(array, -5)).toBe(undefined);
  });
});
