import defaultToAny from './defaultToAny';

describe('defaultToAny', () => {
  it('should return the value if it is not NaN, null, or undefined', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
    expect(defaultToAny('hello', 'world')).toBe('hello');
    expect(defaultToAny(true, false, null)).toBe(true);
  });

  it('should return the first non NaN, null, or undefined default value', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
    expect(defaultToAny(null, 'a', 'b')).toBe('a');
    expect(defaultToAny(NaN, null, 'c')).toBe('c');
  });

  it('should return NaN if all default values are NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
    expect(defaultToAny(NaN)).toBe(NaN);
    expect(defaultToAny(NaN, NaN, NaN)).toBe(NaN);
  });

  it('should return undefined if no default values are provided', () => {
    expect(defaultToAny(undefined)).toBeUndefined();
    expect(defaultToAny(null)).toBeUndefined();
    expect(defaultToAny(NaN)).toBeUndefined();
  });
});
