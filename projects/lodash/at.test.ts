import at from './at';

describe('at', () => {
  it('should return an array of values corresponding to the given paths in the object', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const paths = ['a[0].b.c', 'a[1]'];
    const result = at(object, ...paths);
    expect(result).toEqual([3, 4]);
  });

  it('should return an empty array if no paths are provided', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object);
    expect(result).toEqual([]);
  });

  it('should return an array with undefined values for non-existent paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const paths = ['a[0].b.d', 'a[1].c'];
    const result = at(object, ...paths);
    expect(result).toEqual([undefined, undefined]);
  });
});
