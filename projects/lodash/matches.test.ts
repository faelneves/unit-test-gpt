import matches from './matches';

describe('matches', () => {
  it('should return a function', () => {
    const matcher = matches({ 'a': 1, 'b': 2 });
    expect(typeof matcher).toBe('function');
  });

  it('should return true for matching objects', () => {
    const source = { 'a': 1, 'b': 2, 'c': 3 };
    const matcher = matches({ 'a': 1, 'c': 3 });
    expect(matcher(source)).toBe(true);
  });

  it('should return false for non-matching objects', () => {
    const source = { 'a': 1, 'b': 2, 'c': 3 };
    const matcher = matches({ 'a': 1, 'c': 2 });
    expect(matcher(source)).toBe(false);
  });

  // Additional test case for matching empty array against any array
  it('should return true for matching empty array', () => {
    const source = [];
    const matcher = matches([]);
    expect(matcher(source)).toBe(true);
  });

  // Additional test case for matching empty object against any object
  it('should return true for matching empty object', () => {
    const source = {};
    const matcher = matches({});
    expect(matcher(source)).toBe(true);
  });
});
