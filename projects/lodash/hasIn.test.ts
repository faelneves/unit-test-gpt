import hasIn from './hasIn';

describe('hasIn', () => {
  it('should return true if the key exists in the object', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: {
          f: 4,
        },
      },
    };

    expect(hasIn(object, 'a')).toBe(true);
    expect(hasIn(object, 'b')).toBe(true);
    expect(hasIn(object, 'c')).toBe(true);
    expect(hasIn(object, 'c.d')).toBe(true);
    expect(hasIn(object, 'c.e')).toBe(true);
    expect(hasIn(object, 'c.e.f')).toBe(true);
  });

  it('should return false if the key does not exist in the object', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: {
          f: 4,
        },
      },
    };

    expect(hasIn(object, 'x')).toBe(false);
    expect(hasIn(object, 'd')).toBe(false);
    expect(hasIn(object, 'c.x')).toBe(false);
    expect(hasIn(object, 'c.e.x')).toBe(false);
    expect(hasIn(object, 'c.e.f.x')).toBe(false);
  });

  it('should return false if the object is null or undefined', () => {
    expect(hasIn(null, 'a')).toBe(false);
    expect(hasIn(undefined, 'a')).toBe(false);
  });
});
