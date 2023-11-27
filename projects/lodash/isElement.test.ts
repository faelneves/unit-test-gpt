import isElement from './isElement';

describe('isElement', () => {
  it('should return true when value is a DOM element', () => {
    const element = document.createElement('div');
    expect(isElement(element)).toBe(true);
  });

  it('should return false when value is not a DOM element', () => {
    expect(isElement('<body>')).toBe(false);
    expect(isElement({})).toBe(false);
    expect(isElement([])).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement(123)).toBe(false);
    expect(isElement(true)).toBe(false);
    expect(isElement(false)).toBe(false);
  });
});
