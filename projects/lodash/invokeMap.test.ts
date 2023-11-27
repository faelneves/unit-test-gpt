import invokeMap from './invokeMap';

describe('invokeMap', () => {
  it('should return an array of results', () => {
    const collection = [[5, 1, 7], [3, 2, 1]];
    const path = 'sort';
    const result = invokeMap(collection, path);
    expect(result).toEqual([[1, 5, 7], [1, 2, 3]]);
  });

  it('should invoke the method at path for each element in the collection', () => {
    const collection = [123, 456];
    const path = String.prototype.split;
    const args = [''];
    const result = invokeMap(collection, path, args);
    expect(result).toEqual([['1', '2', '3'], ['4', '5', '6']]);
  });

  it('should invoke the function at path for each element in the collection', () => {
    const collection = [1, 2, 3];
    const path = (value) => value * 2;
    const result = invokeMap(collection, path);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should bind `this` to each element when path is a function', () => {
    const collection = [{ name: 'Alice' }, { name: 'Bob' }];
    const path = function() {
      return this.name.toUpperCase();
    };
    const result = invokeMap(collection, path);
    expect(result).toEqual(['ALICE', 'BOB']);
  });

  it('should handle empty collection', () => {
    const collection = [];
    const path = 'sort';
    const result = invokeMap(collection, path);
    expect(result).toEqual([]);
  });

  it('should handle non-array and non-object collection gracefully', () => {
    const collection = 'abc';
    const path = 'toUpperCase';
    const result = invokeMap(collection, path);
    expect(result).toEqual(['A', 'B', 'C']);
  });
});
