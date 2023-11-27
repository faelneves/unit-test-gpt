import overSome from './overSome';

describe('overSome', () => {
  it('should return a function that returns true if any of the predicates return truthy', () => {
    const func = overSome([Boolean, (val) => val > 3]);

    expect(func('1')).toBe(true);
    expect(func(5)).toBe(true);
    expect(func(null)).toBe(true);
    expect(func(NaN)).toBe(false);
  });

  it('should return a function that returns false if none of the predicates return truthy', () => {
    const func = overSome([Boolean, (val) => val > 3]);

    expect(func(undefined)).toBe(false);
    expect(func(false)).toBe(false);
    expect(func(0)).toBe(false);
    expect(func('')).toBe(false);
  });

  it('should return a function that returns false if no predicates are given', () => {
    const func = overSome();

    expect(func(true)).toBe(false);
    expect(func(10)).toBe(false);
    expect(func('hello')).toBe(false);
  });

  it('should call the predicates with the arguments it receives', () => {
    const predicate1 = jest.fn();
    const predicate2 = jest.fn();
    const func = overSome([predicate1, predicate2]);

    func(1, 2, 3);

    expect(predicate1).toHaveBeenCalledWith(1, 2, 3);
    expect(predicate2).toHaveBeenCalledWith(1, 2, 3);
  });
});
