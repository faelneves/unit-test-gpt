import pullAllBy from './pullAllBy';

describe('pullAllBy', () => {
  it('should remove elements from the array based on the iteratee function', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
    expect(array).toEqual([{ 'x': 2 }]);
  });

  it('should not modify the array if it is null or empty', () => {
    const array = null;
    pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
    expect(array).toEqual(null);

    const emptyArray = [];
    pullAllBy(emptyArray, [{ 'x': 1 }, { 'x': 3 }], 'x');
    expect(emptyArray).toEqual([]);

    const arrayWithValues = [{ 'x': 1 }, { 'x': 3 }];
    pullAllBy(arrayWithValues, [], 'x');
    expect(arrayWithValues).toEqual([{ 'x': 1 }, { 'x': 3 }]);
  });

  it('should not modify the array if the values is null or empty', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(array, null, 'x');
    expect(array).toEqual([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);

    const emptyArray = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(emptyArray, [], 'x');
    expect(emptyArray).toEqual([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);
  });

  it('should not modify the array if the iteratee function is not provided', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }]);
    expect(array).toEqual([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);
  });
});
