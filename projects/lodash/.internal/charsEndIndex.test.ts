import baseIndexOf from './baseIndexOf';

describe('charsEndIndex', () => {
  it('should return the index of the last unmatched string symbol', () => {
    const strSymbols = ['a', 'b', 'c', 'c', 'd'];
    const chrSymbols = ['d', 'c'];

    const result = charsEndIndex(strSymbols, chrSymbols);

    expect(result).toBe(1);
  });

  it('should return -1 if all string symbols are matched', () => {
    const strSymbols = ['a', 'b', 'c', 'd'];
    const chrSymbols = ['d', 'c'];

    const result = charsEndIndex(strSymbols, chrSymbols);

    expect(result).toBe(-1);
  });

  it('should return -1 if both strSymbols and chrSymbols are empty', () => {
    const strSymbols = [];
    const chrSymbols = [];

    const result = charsEndIndex(strSymbols, chrSymbols);

    expect(result).toBe(-1);
  });
});
