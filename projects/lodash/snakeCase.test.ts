import snakeCase from './snakeCase';

describe('snakeCase', () => {
  it('should convert string to snake case', () => {
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('--FOO-BAR--')).toBe('foo_bar');
    expect(snakeCase('foo2bar')).toBe('foo_2_bar');
  });

  it('should handle empty string', () => {
    expect(snakeCase('')).toBe('');
  });

  it('should handle string with no spaces or special characters', () => {
    expect(snakeCase('foobar')).toBe('foobar');
    expect(snakeCase('FOOBAR')).toBe('foobar');
    expect(snakeCase('foo_bar')).toBe('foo_bar');
  });

  it('should handle string with apostrophes', () => {
    expect(snakeCase("I'm a string")).toBe('i_m_a_string');
    expect(snakeCase("I'm a string with apostrophes")).toBe('i_m_a_string_with_apostrophes');
  });

  it('should handle string with non-alphanumeric characters', () => {
    expect(snakeCase('!@#$%^&*()')).toBe('');
    expect(snakeCase('foo%bar$baz')).toBe('foo_bar_baz');
    expect(snakeCase('foo-bar-baz')).toBe('foo_bar_baz');
    expect(snakeCase('foo_bar_baz')).toBe('foo_bar_baz');
  });
});
