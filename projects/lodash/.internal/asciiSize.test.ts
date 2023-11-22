import asciiSize from './asciiSize';

describe('asciiSize', () => {
  it('should return the size of the ASCII string', () => {
    expect(asciiSize({ length: 0 })).toBe(0);
    expect(asciiSize({ length: 1 })).toBe(1);
    expect(asciiSize({ length: 10 })).toBe(10);
  });
});
