import pullAll from './pullAll';

describe('pullAll', () => {
  it('should remove all occurrences of values from array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    pullAll(array, ['a', 'c']);
    expect(array).toEqual(['b', 'b']);
  });

  it('should not modify array if values is empty', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    pullAll(array, []);
    expect(array).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
  });

  it('should not modify array if array is empty', () => {
    const array = [];
    pullAll(array, ['a', 'c']);
    expect(array).toEqual([]);
  });

  it('should not modify array if both array and values are empty', () => {
    const array = [];
    pullAll(array, []);
    expect(array).toEqual([]);
  });

  it('should handle arrays with different types', () => {
    const array = ['a', 'b', 'c', 1, 2, 3];
    pullAll(array, [1, 'c']);
    expect(array).toEqual(['a', 'b', 2, 3]);
  });
});
