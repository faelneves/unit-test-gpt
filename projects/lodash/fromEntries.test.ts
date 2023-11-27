import fromEntries from './fromEntries';

describe('fromEntries', () => {
  it('should return an empty object when pairs is null', () => {
    const pairs = null;
    const result = fromEntries(pairs);
    expect(result).toEqual({});
  });

  it('should return an empty object when pairs is an empty array', () => {
    const pairs = [];
    const result = fromEntries(pairs);
    expect(result).toEqual({});
  });

  it('should return an object with key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    const result = fromEntries(pairs);
    expect(result).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should handle duplicate keys by using the last value', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    const result = fromEntries(pairs);
    expect(result).toEqual({ 'a': 3, 'b': 2 });
  });
});
