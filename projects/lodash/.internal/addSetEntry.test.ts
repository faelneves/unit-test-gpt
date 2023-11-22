import addSetEntry from './addSetEntry';

describe('addSetEntry', () => {
  it('should add the value to the set', () => {
    const set = new Set();
    const value = 'test';
    
    addSetEntry(set, value);
    
    expect(set.has(value)).toBeTruthy();
  });
  
  it('should return the modified set', () => {
    const set = new Set();
    const value = 'test';
    
    const result = addSetEntry(set, value);
    
    expect(result).toBe(set);
  });
});
