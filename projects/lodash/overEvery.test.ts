import every from './every';
import overEvery from './overEvery';

describe('overEvery', () => {
  it('should return a function', () => {
    const func = overEvery();
    expect(typeof func).toBe('function');
  });

  it('should return true when all predicates return truthy', () => {
    const func = overEvery([Boolean, (n) => n > 0]);
    expect(func(1)).toBe(true);
  });

  it('should return false when any predicate returns falsy', () => {
    const func = overEvery([Boolean, (n) => n > 0]);
    expect(func(0)).toBe(false);
  });

  it('should pass arguments to predicates correctly', () => {
    const predicate1 = jest.fn((arg) => arg === 'hello');
    const predicate2 = jest.fn((arg) => arg.length === 5);

    const func = overEvery([predicate1, predicate2]);

    func('hello');

    expect(predicate1).toHaveBeenCalledWith('hello');
    expect(predicate2).toHaveBeenCalledWith('hello');
  });
});
