import differenceWith from './differenceWith';

describe('differenceWith', () => {
  it('should return new array excluding values based on the comparator function', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const values = [{ 'x': 1, 'y': 2 }];
    const comparator = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;

    const result = differenceWith(objects, values, comparator);

    expect(result).toEqual([{ 'x': 2, 'y': 1 }]);
  });

  it('should return an empty array if no valid array is provided', () => {
    const result = differenceWith(undefined, [{ 'x': 1, 'y': 2 }]);

    expect(result).toEqual([]);
  });

  it('should return an empty array if no values are provided', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

    const result = differenceWith(objects);

    expect(result).toEqual([]);
  });

  it('should return an empty array if values are not found in the array based on the comparator function', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const values = [{ 'x': 3, 'y': 2 }];
    const comparator = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;

    const result = differenceWith(objects, values, comparator);

    expect(result).toEqual([]);
  });

  it('should return the same array if values are an empty array', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const values = [];
    const comparator = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;

    const result = differenceWith(objects, values, comparator);

    expect(result).toEqual(objects);
  });
});
