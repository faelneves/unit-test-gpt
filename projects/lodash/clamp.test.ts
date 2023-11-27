import clamp from './clamp';

describe('clamp', () => {
  it('should clamp number within lower and upper bounds', () => {
    expect(clamp(-10, -5, 5)).toEqual(-5);
    expect(clamp(10, -5, 5)).toEqual(5);
  });

  it('should clamp number when lower bound is greater than upper bound', () => {
    expect(clamp(-10, 5, -5)).toEqual(-5);
    expect(clamp(10, 5, -5)).toEqual(5);
  });

  it('should return lower bound when number is less than lower bound', () => {
    expect(clamp(-10, 0, 5)).toEqual(0);
    expect(clamp(-20, -15, -10)).toEqual(-10);
  });

  it('should return upper bound when number is greater than upper bound', () => {
    expect(clamp(10, 0, 5)).toEqual(5);
    expect(clamp(20, 15, 10)).toEqual(10);
  });

  it('should return NaN when given NaN as input', () => {
    expect(clamp(NaN, -5, 5)).toBeNaN();
  });

  it('should return the number when lower and upper bounds are NaN', () => {
    expect(clamp(10, NaN, NaN)).toEqual(10);
  });
});
