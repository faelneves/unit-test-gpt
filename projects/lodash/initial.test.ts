import initial from './initial';

describe('initial', () => {
  it('should return an empty array if input array is empty', () => {
    expect(initial([])).toEqual([]);
  });

  it('should return all but the last element of the input array', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  it('should return an empty array if length of input array is 1', () => {
    expect(initial([1])).toEqual([]);
  });

  it('should return an empty array if input array is null or undefined', () => {
    expect(initial(null)).toEqual([]);
    expect(initial(undefined)).toEqual([]);
  });
});
