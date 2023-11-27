import baseProperty from './baseProperty';

describe('baseProperty', () => {
  it('should return a function', () => {
    const result = baseProperty('key');
    expect(typeof result).toBe('function');
  });

  it('should return the value of the property when the object is not null or undefined', () => {
    const object = { key: 'value' };
    const accessor = baseProperty('key');
    expect(accessor(object)).toBe('value');
  });

  it('should return undefined when the object is null', () => {
    const object = null;
    const accessor = baseProperty('key');
    expect(accessor(object)).toBe(undefined);
  });

  it('should return undefined when the object is undefined', () => {
    const object = undefined;
    const accessor = baseProperty('key');
    expect(accessor(object)).toBe(undefined);
  });
});
