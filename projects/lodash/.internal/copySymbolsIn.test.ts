import copyObject from './copyObject';
import getSymbolsIn from './getSymbolsIn';

describe('copySymbolsIn', () => {
  it('should copy symbols from source object to the target object', () => {
    const source = { [Symbol('key1')]: 'value1', [Symbol('key2')]: 'value2' };
    const target = {};
    const result = copySymbolsIn(source, target);
    
    expect(target[Symbol('key1')]).toEqual('value1');
    expect(target[Symbol('key2')]).toEqual('value2');
    expect(result).toBe(target);
  });

  it('should copy own and inherited symbols from source object', () => {
    class Parent {
      parentSymbol = Symbol('parent');
    }
    
    class Child extends Parent {
      childSymbol = Symbol('child');
    }

    const source = new Child();
    const target = {};
    const result = copySymbolsIn(source, target);

    expect(target[source.childSymbol]).toEqual('child');
    expect(target[source.parentSymbol]).toEqual('parent');
    expect(result).toBe(target);
  });

  it('should not overwrite existing symbols in the target object', () => {
    const source = { [Symbol('key1')]: 'value1', [Symbol('key2')]: 'value2' };
    const target = { [Symbol('key1')]: 'existingValue' };
    const result = copySymbolsIn(source, target);

    expect(target[Symbol('key1')]).toEqual('existingValue');
    expect(target[Symbol('key2')]).toEqual('value2');
    expect(result).toBe(target);
  });
});
