import takeWhile from './takeWhile';

describe('takeWhile', () => {
  it('should return the slice of array with elements taken from the beginning until predicate returns falsey', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': false }
    ];
    const predicate = ({ active }) => active;

    const result = takeWhile(users, predicate);

    expect(result).toEqual([
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true }
    ]);
  });

  it('should return an empty array if the input array is empty', () => {
    const array = [];
    const predicate = ({ active }) => active;

    const result = takeWhile(array, predicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input array is null', () => {
    const array = null;
    const predicate = ({ active }) => active;

    const result = takeWhile(array, predicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input array is undefined', () => {
    const array = undefined;
    const predicate = ({ active }) => active;

    const result = takeWhile(array, predicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the predicate always returns falsey', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = ({ active }) => false;

    const result = takeWhile(users, predicate);

    expect(result).toEqual([]);
  });

  it('should work with an empty predicate', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': false }
    ];
    const predicate = '';

    const result = takeWhile(users, predicate);

    expect(result).toEqual([]);
  });
});
