import truncate from './truncate';

describe('truncate', () => {
  it('should truncate string if it is longer than the given maximum length', () => {
    const longString = 'This is a very long string that needs to be truncated';
    const truncatedString = truncate(longString, { length: 20 });
    expect(truncatedString.length).toBe(20);
    expect(truncatedString).toMatch('This is a very lon...');
  });

  it('should not truncate string if it is shorter than the given maximum length', () => {
    const shortString = 'Hello, world!';
    const truncatedString = truncate(shortString, { length: 30 });
    expect(truncatedString).toBe(shortString);
  });

  it('should add an omission string to indicate text is omitted', () => {
    const longString = 'This is a very long string that needs to be truncated';
    const truncatedString = truncate(longString, { length: 20 });
    expect(truncatedString).toMatch('...');
  });

  it('should truncate string at the separator pattern', () => {
    const string = 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten';
    const truncatedString = truncate(string, { length: 30, separator: ',' });
    expect(truncatedString).toMatch('One, Two, Three, Four...');
  });

  it('should truncate string at the separator pattern with regular expression', () => {
    const string = 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten';
    const truncatedString = truncate(string, { length: 30, separator: /,\s?/ });
    expect(truncatedString).toMatch('One, Two, Three, Four...');
  });

  it('should support custom omission string', () => {
    const longString = 'This is a very long string that needs to be truncated';
    const truncatedString = truncate(longString, { length: 20, omission: '...' });
    expect(truncatedString).toMatch('This is a very lon...');
  });
});
