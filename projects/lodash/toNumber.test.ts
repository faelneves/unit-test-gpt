import toNumber from './toNumber';

describe('toNumber', () => {
  it('should return the same number if input is a number', () => {
    expect(toNumber(3.2)).toBe(3.2);
  });

  it('should return NaN if input is a symbol', () => {
    expect(toNumber(Symbol())).toBeNaN();
  });

  it('should convert other objects to number', () => {
    expect(toNumber({})).toBe(NaN);
    expect(toNumber([])).toBe(NaN);
    expect(toNumber('')).toBe(0);
    expect(toNumber('  ')).toBe(0);
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('0b0101')).toBe(5);
    expect(toNumber('0o777')).toBe(511);
    expect(toNumber('0xABC')).toBeNaN();
    expect(toNumber(0)).toBe(0);
    expect(toNumber('0')).toBe(0);
  });

  it('should handle extreme values', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(-Infinity)).toBe(-Infinity);
  });
});
