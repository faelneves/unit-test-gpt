import propertyOf from './propertyOf';

describe('propertyOf', () => {
  it('should return a function that retrieves the value at a given path of an object', () => {
    const object = {
      a: {
        b: {
          c: 'value'
        }
      }
    };

    const getValue = propertyOf(object);

    expect(getValue('a.b.c')).toBe('value');
    expect(getValue('a.b.d')).toBeUndefined();
  });

  it('should return undefined if the object is null or undefined', () => {
    const getValue = propertyOf(null);

    expect(getValue('a.b.c')).toBeUndefined();

    const undefinedObject = undefined;
    const getValue2 = propertyOf(undefinedObject);

    expect(getValue2('a.b.c')).toBeUndefined();
  });

  it('should handle array paths', () => {
    const object = {
      a: [{
        b: 'value'
      }]
    };

    const getValue = propertyOf(object);

    expect(getValue('a[0].b')).toBe('value');
    expect(getValue('a[1].b')).toBeUndefined();
  });

  it('should handle deep nested paths', () => {
    const object = {
      a: {
        b: {
          c: {
            d: 'value'
          }
        }
      }
    };

    const getValue = propertyOf(object);

    expect(getValue('a.b.c.d')).toBe('value');
    expect(getValue('a.b.c.e')).toBeUndefined();
  });
});
