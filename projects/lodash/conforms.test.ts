import conforms from './conforms';

describe('conforms', () => {
  it('should return true if all predicates return truthy', () => {
    const source = {
      a: (n) => n > 1,
      b: (n) => n < 10,
    };
    const obj = {
      a: 2,
      b: 5,
    };
    const result = conforms(source)(obj);
    expect(result).toBe(true);
  });

  it('should return false if any predicate returns falsy', () => {
    const source = {
      a: (n) => n > 1,
      b: (n) => n < 10,
    };
    const obj = {
      a: 0,
      b: 5,
    };
    const result = conforms(source)(obj);
    expect(result).toBe(false);
  });

  it('should return true if there are no predicates and source is an empty object', () => {
    const source = {};
    const obj = {
      a: 1,
      b: 2,
    };
    const result = conforms(source)(obj);
    expect(result).toBe(true);
  });
});
