import without from './without';

describe('without', () => {
  it('should return a new array excluding the given values', () => {
    const array = [2, 1, 2, 3];
    
    expect(without(array, 1, 2)).toEqual([3]);
  });
  
  it('should return an empty array if the input array is not an array-like object', () => {
    const array = 'not an array';
    
    expect(without(array, 1, 2)).toEqual([]);
  });
  
  it('should handle empty values', () => {
    const array = [1, null, undefined, '', NaN];
    
    expect(without(array)).toEqual(array);
  });
  
  it('should handle empty input array', () => {
    const array = [];
    
    expect(without(array, 1, 2)).toEqual([]);
  });
  
  it('should handle negative numbers', () => {
    const array = [-2, 1, 2, -3];
    
    expect(without(array, -1, -2)).toEqual([1, 2, -3]);
  });
});
