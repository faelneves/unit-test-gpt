import words from './words';

describe('words', () => {
  it('should split a string into an array of words', () => {
    const input = 'fred, barney, & pebbles';
    const expected = ['fred', 'barney', 'pebbles'];
    expect(words(input)).toEqual(expected);
  });

  it('should split a string into an array of words using a custom pattern', () => {
    const input = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    const expected = ['fred', 'barney', '&', 'pebbles'];
    expect(words(input, pattern)).toEqual(expected);
  });

  it('should return an empty array for an empty string', () => {
    const input = '';
    const expected = [];
    expect(words(input)).toEqual(expected);
  });

  it('should return an empty array for a string without words', () => {
    const input = '1234 !@#$';
    const expected = [];
    expect(words(input)).toEqual(expected);
  });

  it('should split a string with Unicode words into an array', () => {
    const input = 'hello ᴮᴵᴳᵍᴱʳ';
    const expected = ['hello', 'ᴮᴵᴳᵍᴱʳ'];
    expect(words(input)).toEqual(expected);
  });
});
