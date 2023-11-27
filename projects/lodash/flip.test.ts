import flip from './flip';

describe('flip', () => {
  it('should return a new function', () => {
    const func = () => {};
    const flipped = flip(func);
    
    expect(typeof flipped).toBe('function');
    expect(flipped).not.toBe(func);
  });
  
  it('should invoke the original function with reversed arguments', () => {
    const func = (...args) => args;
    const flipped = flip(func);
    
    const result = flipped('a', 'b', 'c', 'd');
    expect(result).toEqual(['d', 'c', 'b', 'a']);
  });
  
  it('should throw a TypeError if not passed a function', () => {
    expect(() => {
      flip('not a function');
    }).toThrow(TypeError);
  });
});
