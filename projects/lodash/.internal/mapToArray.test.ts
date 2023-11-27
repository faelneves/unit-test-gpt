import mapToArray from './mapToArray';

describe('mapToArray', () => {
  it('should convert a map to its key-value pairs', () => {
    const map = new Map();
    map.set('name', 'John');
    map.set('age', 30);
    
    const result = mapToArray(map);
    expect(result).toEqual([['name', 'John'], ['age', 30]]);
  });
  
  it('should return an empty array when given an empty map', () => {
    const map = new Map();
    
    const result = mapToArray(map);
    expect(result).toEqual([]);
  });
  
  it('should return an array with a single key-value pair when given a map with one entry', () => {
    const map = new Map();
    map.set('name', 'John');
    
    const result = mapToArray(map);
    expect(result).toEqual([['name', 'John']]);
  });
});
