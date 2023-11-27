import has from './has';

describe('has', () => {
  it('should return true if the key exists in the object', () => {
    const object = { a: { b: 2 } };
    expect(has(object, 'a')).toBe(true);
    expect(has(object, 'b')).toBe(false);
  });

  it('should return false if the object is null or undefined', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });

  it('should return false if the key is not a direct property of the object', () => {
    const object = Object.create({ a: 1 });
    expect(has(object, 'a')).toBe(false);
  });
});
