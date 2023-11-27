import eq from '../eq';

describe('baseSortedUniq', () => {
  it('should return a new array with duplicate elements removed', () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const result = baseSortedUniq(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array with only unique elements when an iteratee is provided', () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const iteratee = (n) => n % 2 === 0;
    const result = baseSortedUniq(array, iteratee);
    expect(result).toEqual([1, 2]);
  });

  it('should return an empty array when the input is an empty array', () => {
    const array = [];
    const result = baseSortedUniq(array);
    expect(result).toEqual([]);
  });

  it('should handle arrays with objects correctly', () => {
    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 2, name: 'Doe' }];
    const iteratee = (obj) => obj.id;
    const result = baseSortedUniq(array, iteratee);
    expect(result).toEqual([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
  });
});
