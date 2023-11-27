import toString from './toString';

describe('toString', () => {
  it('should return an empty string for null value', () => {
    expect(toString(null)).toBe('');
  });

  it('should return "-0" for -0 value', () => {
    expect(toString(-0)).toBe('-0');
  });

  it('should convert an array to a comma-separated string', () => {
    const arr = [1, 2, 3];
    expect(toString(arr)).toBe('1,2,3');
  });

  it('should recursively convert nested arrays to comma-separated strings', () => {
    const arr = [1, [2, [3]]];
    expect(toString(arr)).toBe('1,2,3');
  });

  it('should convert a symbol to its string representation', () => {
    const sym = Symbol('test');
    expect(toString(sym)).toBe(sym.toString());
  });

  it('should convert other types to their string representation', () => {
    const obj = { a: 1, b: 2 };
    expect(toString(obj)).toBe(obj.toString());
  });
});
