import basePropertyOf from './basePropertyOf';

describe('basePropertyOf', () => {
  it('should return a function', () => {
    const accessor = basePropertyOf({});
    expect(typeof accessor).toBe('function');
  });

  it('should return undefined if object is null', () => {
    const accessor = basePropertyOf(null);
    expect(accessor('key')).toBeUndefined();
  });

  it('should return the property value if object is not null', () => {
    const object = {
      key: 'value',
    };
    const accessor = basePropertyOf(object);
    expect(accessor('key')).toBe('value');
  });
});
