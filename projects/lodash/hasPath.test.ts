import hasPath from './hasPath';

describe('hasPath', () => {
  it('should return true if path exists in object using dot notation', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, 'a.b')).toBe(true);
  });

  it('should return true if path exists in object using array notation', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, ['a', 'b'])).toBe(true);
  });

  it('should return false if path does not exist in object', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, 'a.c')).toBe(false);
  });

  it('should return false if object is null or undefined', () => {
    expect(hasPath(null, 'a')).toBe(false);
    expect(hasPath(undefined, 'a')).toBe(false);
  });

  it('should return false if path is empty', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, '')).toBe(false);
  });

  it('should return false if path is not a string or an array', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, 123)).toBe(false);
    expect(hasPath(object, { key: 'value' })).toBe(false);
  });

  it('should return false if path is an empty array', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, [])).toBe(false);
  });

  it('should return false if path contains indices greater than the object length', () => {
    const array = [1, 2, 3];
    expect(hasPath(array, '[3]')).toBe(false);
    expect(hasPath(array, '[4]')).toBe(false);
  });

  it('should return false if the object is not an array but the path contains indices', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, ['a', 'b', 0])).toBe(false);
    expect(hasPath(object, 'a.b[0]')).toBe(false);
  });

  it('should return false if the object is an array but the path does not contain indices', () => {
    const array = [1, 2, 3];
    expect(hasPath(array, 'length')).toBe(false);
    expect(hasPath(array, '[0].value')).toBe(false);
  });
});
