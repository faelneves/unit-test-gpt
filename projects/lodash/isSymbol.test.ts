import isSymbol from './isSymbol';

describe('isSymbol', () => {
  it('should return true for a Symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  it('should return false for a non-Symbol value', () => {
    expect(isSymbol('abc')).toBe(false);
    expect(isSymbol(123)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol(() => {})).toBe(false);
    expect(isSymbol(new Date())).toBe(false);
    expect(isSymbol(/[0-9]*/)).toBe(false);
  });
});
