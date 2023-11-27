import unescape from './unescape';

describe('unescape', () => {
  it('should unescape HTML entities in string', () => {
    expect(unescape('fred, barney, &amp; pebbles')).toBe('fred, barney, & pebbles');
    expect(unescape('a &amp; b &lt; c &gt; d &quot; e &#39; f')).toBe('a & b < c > d " e \' f');
    expect(unescape('no entities')).toBe('no entities');
  });

  it('should return an empty string for falsy values', () => {
    expect(unescape(null)).toBe('');
    expect(unescape(undefined)).toBe('');
    expect(unescape('')).toBe('');
  });
});
