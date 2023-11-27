import someValues from './someValue';

describe('someValues', () => {
  it('should return true if any element passes the predicate check', () => {
    const object = { 'a': 0, 'b': 'yes', 'c': false };
    const predicate = Boolean;
    expect(someValues(object, predicate)).toBe(true);
  });

  it('should return false if no elements pass the predicate check', () => {
    const object = { 'a': 0, 'b': '', 'c': false };
    const predicate = Boolean;
    expect(someValues(object, predicate)).toBe(false);
  });

  it('should return false if the object is empty', () => {
    const object = {};
    const predicate = Boolean;
    expect(someValues(object, predicate)).toBe(false);
  });

  it('should correctly invoke the predicate function per iteration', () => {
    const object = { 'a': 0, 'b': 'yes', 'c': false };
    const predicate = jest.fn();
    someValues(object, predicate);
    expect(predicate).toHaveBeenCalledTimes(3);
  });
});
