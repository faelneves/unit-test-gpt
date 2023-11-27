import keys from './keys';

describe('keys', () => {
  it('should return an empty array when given an empty object', () => {
    const obj = {};
    expect(keys(obj)).toEqual([]);
  });

  it('should return an array of keys for a plain object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(keys(obj)).toEqual(['a', 'b', 'c']);
  });

  it('should return an array of keys for an array-like object', () => {
    const arr = ['a', 'b', 'c'];
    expect(keys(arr)).toEqual(['0', '1', '2']);
  });

  it('should return an array of keys for a string', () => {
    const str = 'hello';
    expect(keys(str)).toEqual(['0', '1', '2', '3', '4']);
  });

  it('should return an array of keys for a custom object', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const obj = new Foo();
    expect(keys(obj)).toEqual(['a', 'b']);
  });

  it('should return an array of keys for a function object', () => {
    function foo() {
      return;
    }

    foo.bar = 'baz';

    expect(keys(foo)).toEqual(['bar']);
  });
});
