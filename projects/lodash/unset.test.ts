import unset from './unset';

describe('unset', () => {
  it('should unset a property at a given path', () => {
    const object = { 'a': [{ 'b': { 'c': 7 } }] };
    
    expect(unset(object, 'a[0].b.c')).toBe(true);
    expect(object).toEqual({ 'a': [{ 'b': {} }] });

    expect(unset(object, ['a', '0', 'b', 'c'])).toBe(true);
    expect(object).toEqual({ 'a': [{ 'b': {} }] });
  });

  it('should return false if the property cannot be unset', () => {
    const object = { 'a': [{ 'b': { 'c': 7 } }] };

    expect(unset(object, 'x.y')).toBe(false);
    expect(object).toEqual({ 'a': [{ 'b': { 'c': 7 } }] });

    expect(unset(object, ['a', '0', 'b', 'x'])).toBe(false);
    expect(object).toEqual({ 'a': [{ 'b': { 'c': 7 } }] });
  });
});
