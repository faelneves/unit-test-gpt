import baseIsNaN from './baseIsNaN';

describe('baseIsNaN', () => {
  it('should return true if value is NaN', () => {
    expect(baseIsNaN(NaN)).toBe(true);
    expect(baseIsNaN(0 / 0)).toBe(true);
    expect(baseIsNaN(Number.NaN)).toBe(true);
    expect(baseIsNaN(Infinity / Infinity)).toBe(true);
    expect(baseIsNaN(undefined)).toBe(true);
    expect(baseIsNaN('NaN')).toBe(true);
  });

  it('should return false if value is not NaN', () => {
    expect(baseIsNaN(null)).toBe(false);
    expect(baseIsNaN(0)).toBe(false);
    expect(baseIsNaN(true)).toBe(false);
    expect(baseIsNaN('')).toBe(false);
    expect(baseIsNaN('abc')).toBe(false);
    expect(baseIsNaN({})).toBe(false);
    expect(baseIsNaN([])).toBe(false);
    expect(baseIsNaN(() => {})).toBe(false);
    expect(baseIsNaN(Symbol())).toBe(false);
  });
});
