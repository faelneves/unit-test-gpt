import basePullAt from './basePullAt';
import baseUnset from './baseUnset';
import isIndex from './isIndex';

describe('basePullAt', () => {
  it('should remove elements at the specified indexes from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const indexes = [1, 3];
    basePullAt(array, indexes);
    expect(array).toEqual([1, 3, 5]);
  });

  it('should remove elements at the specified indexes in reverse order', () => {
    const array = [1, 2, 3, 4, 5];
    const indexes = [3, 1];
    basePullAt(array, indexes);
    expect(array).toEqual([1, 3, 5]);
  });

  it('should remove elements at the specified indexes with duplicate indexes', () => {
    const array = [1, 2, 3, 4, 5];
    const indexes = [1, 1, 3];
    basePullAt(array, indexes);
    expect(array).toEqual([1, 3, 5]);
  });

  it('should remove elements at the specified indexes with negative indexes', () => {
    const array = [1, 2, 3, 4, 5];
    const indexes = [-2, -4];
    basePullAt(array, indexes);
    expect(array).toEqual([1, 2, 5]);
  });

  it('should remove elements at the specified indexes with invalid indexes', () => {
    const array = [1, 2, 3, 4, 5];
    const indexes = [6, 7];
    basePullAt(array, indexes);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});
