import sumBy from './sumBy';

describe('sumBy', () => {
  it('should return the sum based on the iteratee function', () => {
    const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
    
    const result = sumBy(objects, ({ n }) => n);
    
    expect(result).toEqual(20);
  });

  it('should return 0 if the input array is null', () => {
    const result = sumBy(null, ({ n }) => n);

    expect(result).toEqual(0);
  });

  it('should return 0 if the input array is empty', () => {
    const result = sumBy([], ({ n }) => n);

    expect(result).toEqual(0);
  });

  it('should return 0 if the iteratee function returns NaN for all elements', () => {
    const objects = [{ 'n': 'abc' }, { 'n': 'def' }, { 'n': 'ghi' }, { 'n': 'jkl' }];
    
    const result = sumBy(objects, ({ n }) => parseInt(n));

    expect(result).toEqual(0);
  });

  it('should handle arrays with negative numbers in the iteratee function', () => {
    const objects = [{ 'n': -2 }, { 'n': 4 }, { 'n': -1 }, { 'n': 3 }];
    
    const result = sumBy(objects, ({ n }) => n);

    expect(result).toEqual(4);
  });
});
