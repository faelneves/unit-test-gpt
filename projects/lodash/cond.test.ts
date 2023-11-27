import cond from './cond';
import map from './map';

describe('cond', () => {
  it('should return the correct result based on the conditions', () => {
    const func = cond([
      [() => true, () => 'matches A'],
      [() => false, () => 'matches B'],
      [() => true, () => 'no match'],
    ]);
  
    expect(func()).toBe('matches A');
  });
  
  it('should handle empty conditions', () => {
    const func = cond([]);
  
    expect(func()).toBeUndefined();
  });
  
  it('should throw an error if a non-function is provided as the second element in a pair', () => {
    expect(() => {
      cond([
        [() => true, 'not a function'],
      ]);
    }).toThrow(TypeError);
  });
});
