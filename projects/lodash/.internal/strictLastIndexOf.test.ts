import strictLastIndexOf from './strictLastIndexOf';

describe('strictLastIndexOf', () => {
  it('should return -1 when value is not found in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 6;
    const fromIndex = 5;
    
    const result = strictLastIndexOf(array, value, fromIndex);
    
    expect(result).toBe(-1);
  });

  it('should return index of value when it is found in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 3;
    const fromIndex = 5;
    
    const result = strictLastIndexOf(array, value, fromIndex);
    
    expect(result).toBe(2);
  });
  
  it('should return -1 when the array is empty', () => {
    const array = [];
    const value = 1;
    const fromIndex = 0;
    
    const result = strictLastIndexOf(array, value, fromIndex);
    
    expect(result).toBe(-1);
  });

  it('should return -1 when fromIndex is greater than the array length', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 1;
    const fromIndex = 10;
    
    const result = strictLastIndexOf(array, value, fromIndex);
    
    expect(result).toBe(-1);
  });

  it('should handle negative fromIndex correctly', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 2;
    const fromIndex = -3;
    
    const result = strictLastIndexOf(array, value, fromIndex);
    
    expect(result).toBe(1);
  });
});
