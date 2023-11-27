import filter from './filter';

describe('filter', () => {
  it('should return a new array with elements that pass the predicate function', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (value) => value % 2 === 0;
    const expected = [2, 4];

    expect(filter(array, predicate)).toEqual(expected);
  });

  it('should return an empty array if the input array is empty', () => {
    const array = [];
    const predicate = (value) => value % 2 === 0;

    expect(filter(array, predicate)).toEqual([]);
  });

  it('should return an empty array if no elements pass the predicate function', () => {
    const array = [1, 3, 5];
    const predicate = (value) => value % 2 === 0;

    expect(filter(array, predicate)).toEqual([]);
  });

  it('should return a new array with objects that pass the predicate function', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    const predicate = ({ active }) => active;
    const expected = [{ 'user': 'barney', 'active': true }];

    expect(filter(users, predicate)).toEqual(expected);
  });
});
