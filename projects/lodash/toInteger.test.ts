import toInteger from './toInteger';

describe('toInteger', () => {
  it('should return an integer when the input is a number', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(0)).toBe(0);
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
  });

  it('should return an integer when the input is a string representation of a number', () => {
    expect(toInteger('3.2')).toBe(3);
    expect(toInteger('-5')).toBe(-5);
    expect(toInteger('0')).toBe(0);
    expect(toInteger('Infinity')).toBe(1.7976931348623157e+308);
  });

  it('should return 0 when the input is Number.MIN_VALUE', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });
});
