import invoke from './invoke';

describe('invoke', () => {
  it('should invoke the method at the specified path of the object', () => {
    const object = {
      a: [{ b: { c: jest.fn(() => [1, 2, 3, 4]) } }]
    };
    const result = invoke(object, 'a[0].b.c.slice', [1, 3]);
    expect(result).toEqual([2, 3]);
    expect(object.a[0].b.c.slice).toHaveBeenCalledWith(1, 3);
  });

  it('should return undefined if the method does not exist at the specified path', () => {
    const object = {
      a: [{ b: { c: [1, 2, 3, 4] } }]
    };
    const result = invoke(object, 'a[0].b.c.doesNotExist');
    expect(result).toBeUndefined();
  });

  it('should return undefined if the path is invalid', () => {
    const object = { a: { b: { c: [1, 2, 3, 4] } } };
    const result = invoke(object, 'a.b.c.invalidPath');
    expect(result).toBeUndefined();
  });

  it('should return undefined if the object is null or undefined', () => {
    const object = null;
    const result = invoke(object, 'a.b.c.doesNotExist');
    expect(result).toBeUndefined();
  });
});
