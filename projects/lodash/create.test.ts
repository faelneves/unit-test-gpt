import create from './create';

describe('create', () => {
  it('should return an object with the given prototype', () => {
    const prototype = {
      foo: 'bar',
      bar: 'baz',
    };
    const obj = create(prototype);
    
    expect(obj).toBeDefined();
    expect(obj).toHaveProperty('foo', 'bar');
    expect(obj).toHaveProperty('bar', 'baz');
  });

  it('should assign properties to the created object', () => {
    const prototype = {
      foo: 'bar',
    };
    const properties = {
      baz: 'qux',
    };
    const obj = create(prototype, properties);
    
    expect(obj).toBeDefined();
    expect(obj).toHaveProperty('foo', 'bar');
    expect(obj).toHaveProperty('baz', 'qux');
  });

  it('should create an object inheriting from null if the prototype is null', () => {
    const prototype = null;
    const obj = create(prototype);
    
    expect(obj).toBeDefined();
    expect(Object.getPrototypeOf(obj)).toBeNull();
  });
});
