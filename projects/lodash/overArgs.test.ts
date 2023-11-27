import overArgs from './overArgs';

describe('overArgs', () => {
  const multiply = (x, y) => x * y;
  const add = (x, y) => x + y;
  const square = (n) => n * n;
  const double = (n) => n * 2;

  it('should apply transforms to function arguments', () => {
    const transformedFunc = overArgs(multiply, [square, double]);
    expect(transformedFunc(3, 4)).toBe(144);
  });

  it('should handle extra transforms', () => {
    const transformedFunc = overArgs(multiply, [square, double, square]);
    expect(transformedFunc(3, 4)).toBe(2304);
  });

  it('should handle missing transforms', () => {
    const transformedFunc = overArgs(add, [square, double]);
    expect(transformedFunc(3, 4)).toBe(65);
  });

  it('should handle empty transforms array', () => {
    const transformedFunc = overArgs(multiply, []);
    expect(transformedFunc(3, 4)).toBe(12);
  });

  it('should handle extra arguments', () => {
    const transformedFunc = overArgs(multiply, [double]);
    expect(transformedFunc(3, 4, 5)).toBe(60);
  });

  it('should handle fewer arguments', () => {
    const transformedFunc = overArgs(multiply, [double, square]);
    expect(transformedFunc(3)).toBe(18);
  });
});
