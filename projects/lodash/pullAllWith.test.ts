import pullAllWith from './pullAllWith';

describe('pullAllWith', () => {
  it('should remove values from array using comparator', () => {
    const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
    const values = [{ 'x': 3, 'y': 4 }];

    const result = pullAllWith(array, values, (arrVal, othVal) => {
      return arrVal.x === othVal.x && arrVal.y === othVal.y;
    });

    expect(result).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]);
  });

  it('should not modify the array if it is empty', () => {
    const array = [];
    const values = [{ 'x': 1, 'y': 2 }];

    const result = pullAllWith(array, values, (arrVal, othVal) => {
      return arrVal.x === othVal.x && arrVal.y === othVal.y;
    });

    expect(result).toEqual([]);
  });

  it('should not modify the array and return the same array reference if values is empty', () => {
    const array = [{ 'x': 1, 'y': 2 }];
    const values = [];

    const result = pullAllWith(array, values, (arrVal, othVal) => {
      return arrVal.x === othVal.x && arrVal.y === othVal.y;
    });

    expect(result).toBe(array);
  });

  it('should return the same array reference if array is null', () => {
    const array = null;
    const values = [{ 'x': 1, 'y': 2 }];

    const result = pullAllWith(array, values, (arrVal, othVal) => {
      return arrVal.x === othVal.x && arrVal.y === othVal.y;
    });

    expect(result).toBe(null);
  });

  it('should return the same array reference if array is undefined', () => {
    const array = undefined;
    const values = [{ 'x': 1, 'y': 2 }];

    const result = pullAllWith(array, values, (arrVal, othVal) => {
      return arrVal.x === othVal.x && arrVal.y === othVal.y;
    });

    expect(result).toBe(undefined);
  });
});
