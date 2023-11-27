import sortedUniq from './sortedUniq';

describe('sortedUniq', () => {
  it('should return duplicate free array for sorted array', () => {
    const input = [1, 1, 2, 2, 3, 4, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
  
    expect(sortedUniq(input)).toEqual(expectedOutput);
  });

  it('should return an empty array if input is null', () => {
    expect(sortedUniq(null)).toEqual([]);
  });

  it('should return an empty array if input is an empty array', () => {
    expect(sortedUniq([])).toEqual([]);
  });

  it('should return the input array if it is already duplicate free', () => {
    const input = [1, 2, 3, 4, 5];
    expect(sortedUniq(input)).toEqual(input);
  });

  it('should return the input array if it contains only one element', () => {
    const input = [1];
    expect(sortedUniq(input)).toEqual(input);
  });
});
