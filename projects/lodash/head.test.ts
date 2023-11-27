import head from './head';

describe('head', () => {
  it('should return the first element of the array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  it('should return undefined if the array is empty', () => {
    expect(head([])).toBe(undefined);
  });

  it('should return undefined if the array is null or undefined', () => {
    expect(head(null)).toBe(undefined);
    expect(head(undefined)).toBe(undefined);
  });

  it('should return the first character of a string', () => {
    expect(head('Hello')).toBe('H');
  });

  it('should return the first element of an array-like object', () => {
    const obj = { 0: 'a', length: 1 };
    expect(head(obj)).toBe('a');
  });
});
