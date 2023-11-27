import cloneWith from './cloneWith';

describe('cloneWith', () => {
  it('should return cloned value with customizer', () => {
    function customizer(value) {
      if (typeof value === 'number') {
        return value * 2;
      }
    }

    const obj = { a: 10, b: 20 };
    const clonedObj = cloneWith(obj, customizer);

    expect(clonedObj).toEqual({ a: 20, b: 40 });
  });

  it('should return cloned value without customizer', () => {
    const obj = { a: 10, b: 20 };
    const clonedObj = cloneWith(obj);

    expect(clonedObj).toEqual({ a: 10, b: 20 });
    expect(clonedObj).not.toBe(obj);
  });

  it('should handle cloning of symbols', () => {
    const symbol = Symbol('test');
    const clonedSymbol = cloneWith(symbol);

    expect(clonedSymbol).toBe(symbol);
  });
});
