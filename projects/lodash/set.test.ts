import set from './set';

describe('set', () => {
  it('should set the value at the specified path of the object', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    set(object, 'a[0].b.c', 4);
    expect(object.a[0].b.c).toBe(4);

    set(object, ['x', '0', 'y', 'z'], 5);
    expect(object.x[0].y.z).toBe(5);
  });

  it('should handle null and undefined object', () => {
    expect(set(null, 'a', 1)).toBe(null);
    expect(set(undefined, 'a', 1)).toBe(undefined);
  });

  it('should create missing properties and arrays', () => {
    const object = {};

    set(object, 'a[2].b', 3);
    expect(object.a).toBeInstanceOf(Array);
    expect(object.a.length).toBe(3);
    expect(object.a[2]).toBeInstanceOf(Object);
    expect(object.a[2].b).toBe(3);
  });

  it('should handle empty path', () => {
    const object = {};

    set(object, '', 1);
    expect(object).toEqual(1);
  });

  it('should handle numeric path', () => {
    const object = {};

    set(object, '0', 1);
    expect(object).toEqual([1]);
  });

  it('should handle path with brackets', () => {
    const object = {};

    set(object, '[0]', 1);
    expect(object).toEqual([1]);
  });
});
