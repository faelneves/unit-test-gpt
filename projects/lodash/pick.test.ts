import pick from './pick';

describe('pick', () => {
  it('should return an empty object if the source object is null', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
  });
  
  it('should return an empty object if the source object is undefined', () => {
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });
  
  it('should return a new object with the picked properties from the source object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });
  
  it('should return an empty object if no paths are provided', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    expect(pick(object)).toEqual({});
  });
  
  it('should handle nested paths', () => {
    const object = { 'a': { 'b': 1, 'c': 2 }, 'd': { 'e': 3, 'f': 4 } };
    expect(pick(object, ['a.b', 'd.f'])).toEqual({ 'a': { 'b': 1 }, 'd': { 'f': 4 } });
  });
  
  it('should ignore non-existing paths', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    expect(pick(object, ['a', 'd', 'e'])).toEqual({ 'a': 1 });
  });
});
