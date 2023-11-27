import baseUnset from './baseUnset';

describe('baseUnset', () => {
  it('should unset the property at the given path in the object and return true', () => {
    const object = {
      foo: {
        bar: {
          baz: 42
        }
      }
    };
    const path = 'foo.bar.baz';
    expect(baseUnset(object, path)).toBe(true);
    expect(object.foo.bar.baz).toBeUndefined();
  });

  it('should unset the property at the given path in the object and return true, even if the property is null', () => {
    const object = {
      foo: {
        bar: {
          baz: null
        }
      }
    };
    const path = 'foo.bar.baz';
    expect(baseUnset(object, path)).toBe(true);
    expect(object.foo.bar.baz).toBeUndefined();
  });

  it('should unset the property at the given path in the object and return true, even if the property is an array', () => {
    const object = {
      foo: {
        bar: {
          baz: [1, 2, 3]
        }
      }
    };
    const path = 'foo.bar.baz';
    expect(baseUnset(object, path)).toBe(true);
    expect(object.foo.bar.baz).toBeUndefined();
  });

  it('should unset the property at the given path in the object and return true, even if the property is a nested object', () => {
    const object = {
      foo: {
        bar: {
          baz: {
            qux: 'value'
          }
        }
      }
    };
    const path = 'foo.bar.baz.qux';
    expect(baseUnset(object, path)).toBe(true);
    expect(object.foo.bar.baz.qux).toBeUndefined();
  });

  it('should unset the property at the given path in the object and return false if the property does not exist', () => {
    const object = {
      foo: {
        bar: {
          baz: 42
        }
      }
    };
    const path = 'foo.bar.qux';
    expect(baseUnset(object, path)).toBe(false);
    expect(object.foo.bar.baz).toBe(42);
  });

  it('should unset the property at the given path in the object and return true when the path is an array', () => {
    const object = {
      foo: {
        bar: {
          baz: 42
        }
      }
    };
    const path = ['foo', 'bar', 'baz'];
    expect(baseUnset(object, path)).toBe(true);
    expect(object.foo.bar.baz).toBeUndefined();
  });

  it('should unset the property at the given path in the object and return false when the path is an array and the property does not exist', () => {
    const object = {
      foo: {
        bar: {
          baz: 42
        }
      }
    };
    const path = ['foo', 'bar', 'qux'];
    expect(baseUnset(object, path)).toBe(false);
    expect(object.foo.bar.baz).toBe(42);
  });
});
