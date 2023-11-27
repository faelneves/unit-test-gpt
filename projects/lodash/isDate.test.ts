import isDate from './isDate'

describe('isDate', () => {
  it('should return true if value is a date object', () => {
      expect(isDate(new Date())).toBe(true);
  });

  it('should return false if value is not a date object', () => {
      expect(isDate('Mon April 23 2012')).toBe(false);
      expect(isDate({})).toBe(false);
      expect(isDate([])).toBe(false);
      expect(isDate(123)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate(null)).toBe(false);
  });
});
