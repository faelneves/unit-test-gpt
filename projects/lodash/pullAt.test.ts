import pullAt from './pullAt';

describe('pullAt', () => {
  it('should remove elements from the array based on the given indexes and return the removed elements', () => {
    const array = ['a', 'b', 'c', 'd'];
    const pulled = pullAt(array, [1, 3]);

    expect(array).toEqual(['a', 'c']);
    expect(pulled).toEqual(['b', 'd']);
  });

  it('should mutate the original array', () => {
    const array = ['a', 'b', 'c', 'd'];
    const pulled = pullAt(array, [1, 3]);

    expect(array).toEqual(['a', 'c']);
    expect(pulled).toEqual(['b', 'd']);
  });

  it('should handle empty array', () => {
    const array = [];
    const pulled = pullAt(array, [1, 3]);

    expect(array).toEqual([]);
    expect(pulled).toEqual([]);
  });

  it('should handle indexes that are out of bounds', () => {
    const array = ['a', 'b', 'c', 'd'];
    const pulled = pullAt(array, [1, 5]);

    expect(array).toEqual(['a', 'c', 'd']);
    expect(pulled).toEqual(['b']);
  });

  it('should handle negative indexes', () => {
    const array = ['a', 'b', 'c', 'd'];
    const pulled = pullAt(array, [1, -2]);

    expect(array).toEqual(['a', 'c']);
    expect(pulled).toEqual(['b', 'c']);
  });

  it('should handle non-numeric indexes', () => {
    const array = ['a', 'b', 'c', 'd'];
    const pulled = pullAt(array, ['0', '2']);

    expect(array).toEqual(['b', 'd']);
    expect(pulled).toEqual(['a', 'c']);
  });
});
