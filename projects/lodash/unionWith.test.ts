import unionWith from './unionWith';

describe('unionWith', () => {
  it('should return an array of combined values from multiple arrays using a comparator', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

    const result = unionWith(objects, others, (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y);

    expect(result).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]);
  });

  it('should return an empty array when no arrays are provided', () => {
    const result = unionWith();

    expect(result).toEqual([]);
  });

  it('should return an empty array when empty arrays are provided', () => {
    const result = unionWith([], [], []);

    expect(result).toEqual([]);
  });
});
