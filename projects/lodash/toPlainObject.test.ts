import toPlainObject from './toPlainObject';

describe('toPlainObject', () => {
  it('should convert an object with inherited properties to a plain object', () => {
    function Foo() {
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const foo = new Foo();
    const result = toPlainObject(foo);

    expect(result).toEqual({ b: 2, c: 3 });
  });

  it('should convert an array-like object to a plain object', () => {
    const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
    const result = toPlainObject(arrayLikeObject);

    expect(result).toEqual({ 0: 'a', 1: 'b', 2: 'c', length: 3 });
  });

  it('should convert a primitive value to an empty plain object', () => {
    const result1 = toPlainObject(undefined);
    const result2 = toPlainObject(null);
    const result3 = toPlainObject(123);
    const result4 = toPlainObject('abc');

    expect(result1).toEqual({});
    expect(result2).toEqual({});
    expect(result3).toEqual({});
    expect(result4).toEqual({});
  });

  it('should convert an empty object to an empty plain object', () => {
    const emptyObject = {};

    const result = toPlainObject(emptyObject);

    expect(result).toEqual({});
  });

  it('should convert a non-empty object to a plain object', () => {
    const nonEmptyObject = { a: 1, b: 2, c: 3 };

    const result = toPlainObject(nonEmptyObject);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });
});
