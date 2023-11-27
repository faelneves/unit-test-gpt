import escape from './escape';

describe('escape', () => {
  it('should return an empty string if the input is falsy', () => {
    expect(escape(undefined)).toBe('');
    expect(escape(null)).toBe('');
    expect(escape('')).toBe('');
  });

  it('should escape HTML entities in the given string', () => {
    expect(escape('fred, barney, & pebbles')).toBe('fred, barney, &amp; pebbles');
    expect(escape('<p>Hello, world!</p>')).toBe('&lt;p&gt;Hello, world!&lt;/p&gt;');
    expect(escape('"Double quotes" and \'single quotes\'')).toBe('&quot;Double quotes&quot; and &#39;single quotes&#39;');
  });

  it('should not escape characters that do not have HTML entity mappings', () => {
    expect(escape('abc123')).toBe('abc123');
    expect(escape('+=-_')).toBe('+=-_');
    expect(escape('Hello, <strong>world</strong>!')).toBe('Hello, <strong>world</strong>!');
  });
});
