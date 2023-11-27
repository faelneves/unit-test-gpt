import unzip from './unzip';

describe('unzip', () => {
  it('should return an empty array if input is an empty array', () => {
    const input = [];
    const result = unzip(input);
    
    expect(result).toEqual([]);
  });
  
  it('should correctly unzip an array of grouped elements', () => {
    const input = [['a', 1, true], ['b', 2, false]];
    const result = unzip(input);
    
    expect(result).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });
  
  it('should correctly unzip an array of grouped elements of different lengths', () => {
    const input = [['a', 'b'], [1], [true, false], [null, undefined]];
    const result = unzip(input);
    
    expect(result).toEqual([['a', 1, true, null], ['b', undefined, false]]);
  });
});
