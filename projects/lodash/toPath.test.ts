import toPath from './toPath';

describe('toPath', () => {
  it('should return an array with a single element when the value is a symbol', () => {
    const value = Symbol('test');
    const result = toPath(value);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(value);
  });

  it('should return an array with multiple elements when the value is a string representing a property path', () => {
    const value = 'a.b.c';
    const result = toPath(value);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    expect(result[0]).toBe('a');
    expect(result[1]).toBe('b');
    expect(result[2]).toBe('c');
  });

  it('should return an array with multiple elements when the value is a string representing a property path with array index', () => {
    const value = 'a[0].b.c';
    const result = toPath(value);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(4);
    expect(result[0]).toBe('a');
    expect(result[1]).toBe('0');
    expect(result[2]).toBe('b');
    expect(result[3]).toBe('c');
  });
});
