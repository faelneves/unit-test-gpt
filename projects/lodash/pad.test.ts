import pad from './pad';

describe('pad', () => {
  it('should pad the string with spaces on both sides', () => {
    expect(pad('abc', 5)).toEqual(' abc ');
  });

  it('should pad the string with custom characters on both sides', () => {
    expect(pad('abc', 8, '_-')).toEqual('_-abc_-_');
  });

  it('should return the string itself if it is already longer than the desired length', () => {
    expect(pad('abc', 2)).toEqual('abc');
  });

  it('should pad an empty string with spaces', () => {
    expect(pad('', 4)).toEqual('    ');
  });

  it('should pad an empty string with custom characters', () => {
    expect(pad('', 6, '_-')).toEqual('_-_-_-');
  });
});
