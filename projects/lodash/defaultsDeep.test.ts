import defaultsDeep from './defaultsDeep';

describe('defaultsDeep', () => {
  it('should assign default properties recursively', () => {
    const object = { 'a': { 'b': 2 } };
    const source = { 'a': { 'b': 1, 'c': 3 } };
    const result = defaultsDeep(object, source);
    
    expect(result).toEqual({ 'a': { 'b': 2, 'c': 3 } });
  });

  it('should correctly handle multiple source objects', () => {
    const object = { 'a': { 'b': 2 }, 'd': { 'e': 5 } };
    const source1 = { 'a': { 'b': 1, 'c': 3 } };
    const source2 = { 'd': { 'f': 6 } };
    const result = defaultsDeep(object, source1, source2);
    
    expect(result).toEqual({ 'a': { 'b': 2, 'c': 3 }, 'd': { 'e': 5, 'f': 6 } });
  });

  it('should handle undefined source objects', () => {
    const object = { 'a': { 'b': 2 } };
    const source = undefined;
    const result = defaultsDeep(object, source);
    
    expect(result).toEqual(object);
  });
});
