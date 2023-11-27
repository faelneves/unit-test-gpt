import defaultTo from './defaultTo';

describe('defaultTo', () => {
  it('should return the value if it is not null, undefined or NaN', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('', 'hello')).toBe('');
    expect(defaultTo(false, true)).toBe(false);
    expect(defaultTo([], [1, 2, 3])).toEqual([]);
    expect(defaultTo({}, { name: 'John' })).toEqual({});
  });

  it('should return the default value if the value is null, undefined or NaN', () => {
    expect(defaultTo(null, 10)).toBe(10);
    expect(defaultTo(undefined, 10)).toBe(10);
    expect(defaultTo(NaN, 10)).toBe(10);
    expect(defaultTo(Number.NaN, 10)).toBe(10);
    expect(defaultTo('NaN', 10)).toBe('NaN');
  });

  it('should handle special cases', () => {
    expect(defaultTo(true, false)).toBe(true);
    expect(defaultTo(0, 5)).toBe(0);
    expect(defaultTo(false, '')).toBe(false);
  });
});
