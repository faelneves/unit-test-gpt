import matchesStrictComparable from './matchesStrictComparable';

describe('matchesStrictComparable', () => {
  it('should return a function that compares values strictly', () => {
    const object1 = {
      name: 'John',
      age: 25,
    };
    const object2 = {
      name: 'John',
      age: '25',
    };
    const object3 = null;
    const object4 = {
      name: 'Jane',
      age: 30,
    };

    const matcher = matchesStrictComparable('name', 'John');

    expect(matcher(object1)).toBe(true);
    expect(matcher(object2)).toBe(false);
    expect(matcher(object3)).toBe(false);
    expect(matcher(object4)).toBe(false);
  });
});
