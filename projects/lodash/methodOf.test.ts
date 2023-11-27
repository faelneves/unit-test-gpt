import methodOf from './methodOf';
import invoke from './invoke';

describe('methodOf', () => {
  const array = times(3, i => () => i);
  const object = { 'a': array, 'b': array, 'c': array };
  
  it('should return a function that invokes the method at the given path of the object', () => {
    const invoker = methodOf(object);
    
    expect(typeof invoker).toBe('function');
    
    const result = invoker('a[2]');
    expect(result).toBe(2);
  });
  
  it('should pass additional arguments to the invoked method', () => {
    const invoker = methodOf(object, [3, 4]);
    const result = invoker('a[0]');
    
    expect(result).toBe(3);
  });
  
  it('should invoke nested methods', () => {
    const nestedObject = { 'a': { 'b': array } };
    const invoker = methodOf(nestedObject);
    
    const result = invoker('a.b[1]');
    expect(result).toBe(1);
  });
  
  it('should return a function that accepts multiple path arguments', () => {
    const invoker = methodOf(object);
    
    const result1 = invoker(['a', '2']);
    const result2 = invoker(['c', '0']);
    
    expect(result1).toBe(2);
    expect(result2).toBe(0);
  });
});
