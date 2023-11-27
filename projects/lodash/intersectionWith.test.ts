import intersectionWith from './intersectionWith';

describe('intersectionWith', () => {
  it('should return an empty array if no arrays are provided', () => {
    const result = intersectionWith();
    expect(result).toEqual([]);
  });

  it('should return an empty array if any of the arrays are empty', () => {
    const result = intersectionWith([], [1, 2, 3]);
    expect(result).toEqual([]);
  });

  it('should return an empty array if there are no intersecting values', () => {
    const objects = [{ 'x': 1, 'y': 2 }];
    const others = [{ 'x': 3, 'y': 4 }];
    const isEqual = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;
    const result = intersectionWith(objects, others, isEqual);
    expect(result).toEqual([]);
  });

  it('should return the intersecting values based on the first array', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    const isEqual = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;
    const result = intersectionWith(objects, others, isEqual);
    expect(result).toEqual([{ 'x': 1, 'y': 2 }]);
  });

  it('should handle arrays of different lengths', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    const isEqual = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;
    const result = intersectionWith(objects, others, isEqual);
    expect(result).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 1, 'y': 1 }]);
  });
});
