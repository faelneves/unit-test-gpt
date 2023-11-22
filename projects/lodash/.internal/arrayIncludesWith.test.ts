import arrayIncludesWith from './arrayIncludesWith';

describe('arrayIncludesWith', () => {
  it('should return true if target is found in the array using the comparator', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    const comparator = (a, b) => a === b;
    expect(arrayIncludesWith(array, target, comparator)).toBe(true);
  });

  it('should return false if target is not found in the array using the comparator', () => {
    const array = ['apple', 'banana', 'orange'];
    const target = 'grape';
    const comparator = (a, b) => a === b;
    expect(arrayIncludesWith(array, target, comparator)).toBe(false);
  });

  it('should return false if the array is null', () => {
    const array = null;
    const target = 'apple';
    const comparator = (a, b) => a === b;
    expect(arrayIncludesWith(array, target, comparator)).toBe(false);
  });
});
