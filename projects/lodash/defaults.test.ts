import defaults from './defaults';
import eq from './eq';

describe('defaults', () => {
  it('should assign properties from source objects to destination object', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { a: 3 };

    const result = defaults(obj1, obj2, obj3);
  
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should not overwrite existing properties in the destination object', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2, b: 2 };

    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should handle null or undefined source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = null;
  
    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: 1 });
  });

  it('should handle undefined properties in the destination object', () => {
    const obj1 = { a: undefined };
    const obj2 = { a: 2, b: 2 };

    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: 2, b: 2 });
  });

  it('should handle inherited properties in source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = Object.create({ b: 2 });
  
    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should handle non-enumerable properties in source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = {};
    Object.defineProperty(obj2, 'b', {
      value: 2,
      enumerable: false
    });
  
    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: 1 });
  });

  it('should handle nested properties in source objects', () => {
    const obj1 = { a: { b: 1, c: 1 } };
    const obj2 = { a: { b: 2 } };
  
    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: { b: 1, c: 1 } });
  });

  it('should use custom equality function for property comparison', () => {
    const obj1 = { a: true };
    const obj2 = { a: 'true' };
  
    const result = defaults(obj1, obj2);
  
    expect(result).toEqual({ a: true });
  });
});
