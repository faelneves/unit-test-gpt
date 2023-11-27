import functions from './functions';

describe('functions', () => {
  it('should return an empty array if object is null', () => {
    const result = functions(null);
    expect(result).toEqual([]);
  });

  it('should return an empty array if object has no function properties', () => {
    const result = functions({});
    expect(result).toEqual([]);
  });

  it('should return an array of function property names', () => {
    function Foo() {
      this.a = () => 'a';
      this.b = () => 'b';
    }

    Foo.prototype.c = () => 'c';

    const result = functions(new Foo());
    expect(result).toEqual(['a', 'b']);
  });

  it('should not include function properties inherited from the prototype chain', () => {
    function Foo() {
      this.a = () => 'a';
    }

    Foo.prototype.b = () => 'b';

    const result = functions(new Foo());
    expect(result).toEqual(['a']);
  });
});
