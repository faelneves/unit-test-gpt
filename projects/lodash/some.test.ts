import some from './some';

describe('some', () => {
  it('should return true if any element passes the predicate check', () => {
    const array = [null, 0, 'yes', false];
    const predicate = Boolean;
    expect(some(array, predicate)).toBe(true);
  });

  it('should return false if no element passes the predicate check', () => {
    const array = [null, 0, '', false];
    const predicate = Boolean;
    expect(some(array, predicate)).toBe(false);
  });

  it('should return false for an empty array', () => {
    const array = [];
    const predicate = Boolean;
    expect(some(array, predicate)).toBe(false);
  });
});
