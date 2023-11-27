import keysIn from './keysIn';

describe('keysIn', () => {
  it('should return an array of property names for an object with own and inherited enumerable properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const foo = new Foo();
    const result = keysIn(foo);

    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).toContain('c');
  });

  it('should return an empty array for an empty object', () => {
    const result = keysIn({});
    expect(result).toEqual([]);
  });

  it('should return an array of property names for an object with only own properties', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };

    const result = keysIn(obj);

    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).toContain('c');
  });

  it('should not include non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
    Object.defineProperty(obj, 'b', { value: 2, enumerable: true });

    const result = keysIn(obj);

    expect(result).not.toContain('a');
    expect(result).toContain('b');
  });
});
