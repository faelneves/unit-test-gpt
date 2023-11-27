import matchesProperty from './matchesProperty';

describe('matchesProperty', () => {
  it('should return a function', () => {
    const result = matchesProperty('a', 4);
    expect(typeof result).toBe('function');
  });

  it('should return true if the object value at the given path is equivalent to srcValue', () => {
    const objects = [
      { 'a': 1, 'b': 2, 'c': 3 },
      { 'a': 4, 'b': 5, 'c': 6 }
    ];
    const specFn = matchesProperty('a', 4);
    expect(specFn(objects[1])).toBe(true);
  });

  it('should return false if the object value at the given path is not equivalent to srcValue', () => {
    const objects = [
      { 'a': 1, 'b': 2, 'c': 3 },
      { 'a': 4, 'b': 5, 'c': 6 }
    ];
    const specFn = matchesProperty('a', 4);
    expect(specFn(objects[0])).toBe(false);
  });
});
