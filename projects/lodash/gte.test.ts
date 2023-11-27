import gte from './gte';

describe('gte', () => {
  it('should return true if value is greater than other', () => {
    expect(gte(3, 1)).toBeTruthy();
    expect(gte(10, 5)).toBeTruthy();
    expect(gte('5', '3')).toBeTruthy();
  });

  it('should return true if value is equal to other', () => {
    expect(gte(3, 3)).toBeTruthy();
    expect(gte(10, 10)).toBeTruthy();
    expect(gte('5', '5')).toBeTruthy();
  });

  it('should return false if value is less than other', () => {
    expect(gte(1, 3)).toBeFalsy();
    expect(gte(5, 10)).toBeFalsy();
    expect(gte('3', '5')).toBeFalsy();
  });

  it('should handle NaN values', () => {
    expect(gte(NaN, 3)).toBeFalsy();
    expect(gte(3, NaN)).toBeFalsy();
    expect(gte(NaN, NaN)).toBeFalsy();
  });

  it('should handle negative values', () => {
    expect(gte(-5, -10)).toBeTruthy();
    expect(gte(-10, -5)).toBeFalsy();
    expect(gte('-5', '-10')).toBeTruthy();
    expect(gte('-10', '-5')).toBeFalsy();
  });

  it('should handle edge cases', () => {
    expect(gte(Infinity, 5)).toBeTruthy();
    expect(gte(5, Infinity)).toBeFalsy();
    expect(gte(Infinity, Infinity)).toBeTruthy();
    expect(gte('-Infinity', 'Infinity')).toBeFalsy();
    expect(gte(0, 0)).toBeTruthy();
    expect(gte('0', '0')).toBeTruthy();
  });
});
