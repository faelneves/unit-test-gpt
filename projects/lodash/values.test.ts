import values from './values';

describe('values', () => {
  it('should return an empty array if object is null or undefined', () => {
    expect(values(null)).toEqual([]);
    expect(values(undefined)).toEqual([]);
  });

  it('should return an array of values for an object', () => {
    expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
    expect(values({ a: 'foo', b: 'bar' })).toEqual(['foo', 'bar']);
  });

  it('should return an array of values for a string', () => {
    expect(values('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    expect(values('123')).toEqual(['1', '2', '3']);
  });

  it('should return an array of values for an object with non-enumerable properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
  
    Foo.prototype.c = 3;
  
    expect(values(new Foo())).toEqual([1, 2]);
  });
});
