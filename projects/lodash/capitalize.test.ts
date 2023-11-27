import capitalize from './capitalize';

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  it('should return an empty string if the input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle special characters correctly', () => {
    expect(capitalize('-foo')).toBe('-Foo');
    expect(capitalize('@bar')).toBe('@Bar');
  });

  it('should handle numbers correctly', () => {
    expect(capitalize('123')).toBe('123');
    expect(capitalize('9th street')).toBe('9th street');
  });

  it('should handle non-string input correctly', () => {
    expect(capitalize(null)).toBe('Null');
    expect(capitalize(undefined)).toBe('Undefined');
  });
});
