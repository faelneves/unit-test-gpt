import baseIntersection from './baseIntersection';
import SetCache from './SetCache';
import arrayIncludes from './arrayIncludes';
import arrayIncludesWith from './arrayIncludesWith';
import map from '../map';
import cacheHas from './cacheHas';

describe('baseIntersection', () => {
  it('returns an empty array if no arrays are passed', () => {
    const result = baseIntersection([]);
    expect(result).toEqual([]);
  });

  it('returns an empty array if any of the arrays is empty', () => {
    const arrays = [[1, 2, 3], [], [4, 5, 6]];
    const result = baseIntersection(arrays);
    expect(result).toEqual([]);
  });

  it('returns the intersection of the arrays', () => {
    const arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
    const result = baseIntersection(arrays);
    expect(result).toEqual([3]);
  });

  it('returns the intersection of the arrays when iteratee is provided', () => {
    const arrays = [[{ id: 1, value: 'a' }, { id: 2, value: 'b' }], [{ id: 2, value: 'b' }, { id: 3, value: 'c' }]];
    const iteratee = (obj) => obj.id;
    const result = baseIntersection(arrays, iteratee);
    expect(result).toEqual([{ id: 2, value: 'b' }]);
  });

  it('returns the intersection of the arrays when comparator is provided', () => {
    const arrays = [[1, 2, 3], [2, 4, 6], [3, 6, 9]];
    const comparator = (a, b) => a % 2 === b % 2;
    const result = baseIntersection(arrays, undefined, comparator);
    expect(result).toEqual([1, 3]);
  });
});
