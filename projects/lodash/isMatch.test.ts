import isMatch from './isMatch';

describe('isMatch', () => {
  it('should return true if object is a match', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = { 'b': 2 };
    expect(isMatch(object, source)).toBe(true);
  });

  it('should return false if object is not a match', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = { 'b': 1 };
    expect(isMatch(object, source)).toBe(false);
  });

  it('should return true if object and source are empty', () => {
    const object = {};
    const source = {};
    expect(isMatch(object, source)).toBe(true);
  });

  it('should return true if source is an empty array and object is an array', () => {
    const object = [1, 2, 3];
    const source = [];
    expect(isMatch(object, source)).toBe(true);
  });

  it('should return false if source is an empty object and object is not an object', () => {
    const object = 42;
    const source = {};
    expect(isMatch(object, source)).toBe(false);
  });

  it('should return false if object and source are different types', () => {
    const object = { 'a': 1 };
    const source = [1];
    expect(isMatch(object, source)).toBe(false);
  });
});
