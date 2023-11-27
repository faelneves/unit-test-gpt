import forOwn from './forOwn';

describe('forOwn', () => {
  it('should invoke iteratee function for each own enumerable property', () => {
    const mockIteratee = jest.fn();
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };

    forOwn(object, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(3);
    expect(mockIteratee).toHaveBeenNthCalledWith(1, 1, 'a', object);
    expect(mockIteratee).toHaveBeenNthCalledWith(2, 2, 'b', object);
    expect(mockIteratee).toHaveBeenNthCalledWith(3, 3, 'c', object);
  });

  it('should invoke iteratee function with different objects', () => {
    const mockIteratee = jest.fn();

    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    forOwn(new Foo(), mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(2);
    expect(mockIteratee).toHaveBeenNthCalledWith(1, 1, 'a', { a: 1, b: 2 });
    expect(mockIteratee).toHaveBeenNthCalledWith(2, 2, 'b', { a: 1, b: 2 });
  });

  it('should exit iteration early when iteratee returns false', () => {
    const mockIteratee = jest.fn((value, key) => {
      if (key === 'b') {
        return false;
      }
    });
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };

    forOwn(object, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(2);
    expect(mockIteratee).toHaveBeenNthCalledWith(1, 1, 'a', object);
    expect(mockIteratee).toHaveBeenNthCalledWith(2, 2, 'b', object);
  });

  it('should not invoke iteratee function on prototype properties', () => {
    const mockIteratee = jest.fn();
    const object = {
      a: 1,
      b: 2,
    };

    Object.prototype.c = 3; // Prototype property

    forOwn(object, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(2);
    expect(mockIteratee).toHaveBeenNthCalledWith(1, 1, 'a', object);
    expect(mockIteratee).toHaveBeenNthCalledWith(2, 2, 'b', object);
  });
});
