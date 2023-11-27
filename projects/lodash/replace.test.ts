import replace from './replace';

describe('replace', () => {
  it('should replace pattern with replacement', () => {
    const result = replace('Hi Fred', 'Fred', 'Barney');
    expect(result).toEqual('Hi Barney');
  });

  it('should replace multiple patterns with replacement', () => {
    const result = replace('Hi Fred, Hi Wilma', /Hi/g, 'Hello');
    expect(result).toEqual('Hello Fred, Hello Wilma');
  });

  it('should replace no pattern with replacement', () => {
    const result = replace('Hi Fred', 'Barney', 'Wilma');
    expect(result).toEqual('Hi Fred');
  });

  it('should replace pattern with function replacement', () => {
    const result = replace('Hi Fred', /\w+/g, (match) => match.toUpperCase());
    expect(result).toEqual('HI FRED');
  });

  it('should replace pattern case-insensitive', () => {
    const result = replace('Hi Fred', /fred/i, 'Barney');
    expect(result).toEqual('Hi Barney');
  });
});
