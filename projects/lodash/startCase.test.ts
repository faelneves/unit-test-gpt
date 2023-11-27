import startCase from './startCase';

describe('startCase', () => {
  it('should convert hyphen separated string to start case', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar');
  });

  it('should convert camel case string to start case', () => {
    expect(startCase('fooBar')).toBe('Foo Bar');
  });

  it('should keep all uppercase string as is', () => {
    expect(startCase('__FOO_BAR__')).toBe('FOO BAR');
  });

  it('should convert empty string to empty start case', () => {
    expect(startCase('')).toBe('');
  });

  it('should convert non-string values to start case', () => {
    expect(startCase(null)).toBe('');
    expect(startCase(undefined)).toBe('');
    expect(startCase(123)).toBe('123');
    expect(startCase({})).toBe('[object Object]');
    expect(startCase([])).toBe('');
  });
});
