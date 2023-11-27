import invertBy from './invertBy';

describe('invertBy', () => {
  it('should return an object with inverted keys and values', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };

    const result = invertBy(object, value => `group${value}`);

    expect(result).toEqual({ 'group1': ['a', 'c'], 'group2': ['b'] });
  });

  it('should handle non-unique inverted values', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1, 'd': 2 };

    const result = invertBy(object, value => `group${value}`);

    expect(result).toEqual({ 'group1': ['a', 'c'], 'group2': ['b', 'd'] });
  });

  it('should handle empty object', () => {
    const object = {};

    const result = invertBy(object, value => `group${value}`);

    expect(result).toEqual({});
  });

  it('should handle null and undefined values', () => {
    const object = { 'a': null, 'b': undefined };

    const result = invertBy(object, value => `group${value}`);

    expect(result).toEqual({ 'groupnull': ['a'], 'groupundefined': ['b'] });
  });
});
