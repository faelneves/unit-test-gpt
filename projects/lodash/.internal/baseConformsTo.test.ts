import baseConformsTo from './baseConformsTo';

describe('baseConformsTo', () => {
  it('should return true if `object` conforms to `source`', () => {
    const object = { a: 1, b: 2 };
    const source = { a: (value) => value === 1, b: (value) => value === 2 };
    const props = ['a', 'b'];

    expect(baseConformsTo(object, source, props)).toBe(true);
  });

  it('should return false if `object` does not conform to `source`', () => {
    const object = { a: 1, b: 3 };
    const source = { a: (value) => value === 1, b: (value) => value === 2 };
    const props = ['a', 'b'];

    expect(baseConformsTo(object, source, props)).toBe(false);
  });

  it('should return true if `object` is null or undefined and `props` is empty array', () => {
    const object = null;
    const source = { a: (value) => value === 1 };
    const props = [];

    expect(baseConformsTo(object, source, props)).toBe(true);
  });

  it('should return true if `object` is null or undefined and `props` is non-empty array', () => {
    const object = null;
    const source = { a: (value) => value === 1 };
    const props = ['a'];

    expect(baseConformsTo(object, source, props)).toBe(true);
  });

  it('should return false if `object` is null or undefined and `props` contains non-empty array', () => {
    const object = null;
    const source = { a: (value) => value === 1 };
    const props = ['b'];

    expect(baseConformsTo(object, source, props)).toBe(false);
  });
});
