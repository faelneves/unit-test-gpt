import rangeRight from './rangeRight';

describe('rangeRight', () => {
  it('should return an empty array when start is equal to end', () => {
    expect(rangeRight(0, 0)).toEqual([]);
  });

  it('should return an array in descending order when start is greater than end', () => {
    expect(rangeRight(5, 1)).toEqual([4, 3, 2, 1]);
  });

  it('should return an array in descending order with custom step', () => {
    expect(rangeRight(10, 0, 2)).toEqual([8, 6, 4, 2, 0]);
    expect(rangeRight(10, 0, -2)).toEqual([]);
  });

  it('should return an array in descending order when start and end are negative', () => {
    expect(rangeRight(-5, -1)).toEqual([-2, -3, -4, -5]);
  });

  it('should return an array with one element when step is 0', () => {
    expect(rangeRight(1, 5, 0)).toEqual([1]);
  });
});
