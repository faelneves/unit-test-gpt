import toSafeInteger from './toSafeInteger';

describe('toSafeInteger', () => {
  it('should convert floating point number to safe integer', () => {
    expect(toSafeInteger(3.2)).toBe(3);
  });

  it('should convert smallest number to 0', () => {
    expect(toSafeInteger(Number.MIN_VALUE)).toBe(0);
  });

  it('should convert infinity to max safe integer', () => {
    expect(toSafeInteger(Infinity)).toBe(MAX_SAFE_INTEGER);
  });

  it('should convert string representation of number to safe integer', () => {
    expect(toSafeInteger('3.2')).toBe(3);
  });
});
