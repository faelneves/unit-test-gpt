import uniqWith from './uniqWith';

describe('uniqWith', () => {
  it('should return an array with duplicate elements removed based on a custom comparator function', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ];

    const comparator = (arrVal, othVal) =>
      arrVal.x === othVal.x && arrVal.y === othVal.y;

    const result = uniqWith(objects, comparator);

    expect(result).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }]);
  });

  it('should return an empty array when input array is undefined', () => {
    const result = uniqWith(undefined, (arrVal, othVal) => arrVal === othVal);

    expect(result).toEqual([]);
  });

  it('should return an empty array when input array is empty', () => {
    const result = uniqWith([], (arrVal, othVal) => arrVal === othVal);

    expect(result).toEqual([]);
  });

  it('should return a new array with the same elements when no duplicates are found', () => {
    const array = [1, 2, 3, 4];

    const result = uniqWith(array, (arrVal, othVal) => arrVal === othVal);

    expect(result).toEqual(array);
  });

  it('should return a new array with a single element when input array contains only one element', () => {
    const array = [1];

    const result = uniqWith(array, (arrVal, othVal) => arrVal === othVal);

    expect(result).toEqual(array);
  });
});
