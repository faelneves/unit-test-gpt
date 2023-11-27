import isArguments from './isArguments';

describe('isArguments', () => {
  it('should return true if value is an arguments object', () => {
    expect(isArguments(function() { return arguments; }())).toBe(true);
  });

  it('should return false if value is not an arguments object', () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });
});
