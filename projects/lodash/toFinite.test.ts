import toFinite from './toFinite';
import toNumber from './toNumber';

describe('toFinite', () => {
  it('should convert positive number to finite number', () => {
    expect(toFinite(3.2)).toEqual(3.2);
    expect(toFinite(10)).toEqual(10);
    expect(toFinite(1000000000)).toEqual(1000000000);
  });

  it('should convert negative number to finite number', () => {
    expect(toFinite(-3.2)).toEqual(-3.2);
    expect(toFinite(-10)).toEqual(-10);
    expect(toFinite(-1000000000)).toEqual(-1000000000);
  });

  it('should convert zero to finite number', () => {
    expect(toFinite(0)).toEqual(0);
  });

  it('should convert negative infinity to the maximum finite number', () => {
    expect(toFinite(-Infinity)).toEqual(Number.MAX_VALUE * -1);
  });

  it('should convert positive infinity to the maximum finite number', () => {
    expect(toFinite(Infinity)).toEqual(Number.MAX_VALUE);
  });

  it('should convert NaN to 0', () => {
    expect(toFinite(NaN)).toEqual(0);
  });

  it('should convert string number to finite number', () => {
    expect(toFinite('3.2')).toEqual(3.2);
    expect(toFinite('10')).toEqual(10);
    expect(toFinite('1000000000')).toEqual(1000000000);
  });

  it('should convert empty string to 0', () => {
    expect(toFinite('')).toEqual(0);
  });

  it('should convert non-numeric string to 0', () => {
    expect(toFinite('abc')).toEqual(0);
    expect(toFinite('123abc')).toEqual(0);
  });

  it('should convert null and undefined to 0', () => {
    expect(toFinite(null)).toEqual(0);
    expect(toFinite(undefined)).toEqual(0);
  });

  it('should convert object to 0', () => {
    expect(toFinite({})).toEqual(0);
    expect(toFinite({ value: 10 })).toEqual(0);
  });

  it('should convert array to 0', () => {
    expect(toFinite([])).toEqual(0);
    expect(toFinite([1, 2, 3])).toEqual(0);
  });

  it('should convert boolean to 0', () => {
    expect(toFinite(true)).toEqual(0);
    expect(toFinite(false)).toEqual(0);
  });

  it('should convert function to 0', () => {
    expect(toFinite(() => {})).toEqual(0);
    expect(toFinite(function() {})).toEqual(0);
  });

  it('should convert Symbol to 0', () => {
    expect(toFinite(Symbol())).toEqual(0);
  });
});
