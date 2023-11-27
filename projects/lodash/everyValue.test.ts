import everyValue from './everyValue';

describe('everyValue', () => {
  it('should return true if all properties pass the predicate check', () => {
    const object = { 'a': 5, 'b': 10, 'c': 15 };
    const predicate = (value) => value > 0;
    
    expect(everyValue(object, predicate)).toBe(true);
  });

  it('should return false if any property fails the predicate check', () => {
    const object = { 'a': 0, 'b': 'yes', 'c': false };
    const predicate = (value) => Boolean(value);
    
    expect(everyValue(object, predicate)).toBe(false);
  });

  it('should return true for empty objects', () => {
    const emptyObj = {};
    const predicate = () => true;
    
    expect(everyValue(emptyObj, predicate)).toBe(true);
  });
});
