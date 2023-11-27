import get from './get';

describe('get', () => {
  it('should return the value at the specified object path', () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, 'a.b.c')).toEqual(3);
    expect(get(object, ['a', 'b', 'c'])).toEqual(3);
    expect(get(object, 'a.b')).toEqual({ c: 3 });
  });

  it('should return the default value for undefined resolved values', () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, 'x.y.z', 0)).toEqual(0);
    expect(get(object, ['x', 'y', 'z'], 'default')).toEqual('default');
  });

  it('should return undefined for null or undefined object', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });
});
