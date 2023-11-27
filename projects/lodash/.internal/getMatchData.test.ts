import getMatchData from '../getMatchData';
import isStrictComparable from '../isStrictComparable';
import keys from '../../keys';

describe('getMatchData', () => {
  it('should return an array of match data for the object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = getMatchData(object);
    expect(result).toEqual([
      ['a', 1, isStrictComparable(1)],
      ['b', 2, isStrictComparable(2)],
      ['c', 3, isStrictComparable(3)],
    ]);
  });

  it('should return an empty array for an empty object', () => {
    const object = {};
    const result = getMatchData(object);
    expect(result).toEqual([]);
  });

  it('should return match data with undefined values', () => {
    const object = { a: undefined };
    const result = getMatchData(object);
    expect(result).toEqual([
      ['a', undefined, isStrictComparable(undefined)],
    ]);
  });
});
