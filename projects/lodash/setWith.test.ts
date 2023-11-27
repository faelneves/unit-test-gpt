import setWith from './setWith';

describe('setWith', () => {
  it('should set a value at a specified path in the object using a customizer', () => {
    const object = {};
    const customizer = (nsValue, key, nsObject) => {
      if (Array.isArray(nsObject)) {
        return { [key]: nsValue };
      }
    };

    setWith(object, '[0][1]', 'a', customizer);

    expect(object).toEqual({ '0': { '1': 'a' } });
  });

  it('should set a value at a specified path in the object if the customizer returns undefined', () => {
    const object = {};
    const customizer = (nsValue, key, nsObject) => {
      if (typeof nsValue === 'string') {
        return undefined;
      }
    };

    setWith(object, '[0][1]', 'a', customizer);

    expect(object).toEqual({ '0': { '1': 'a' } });
  });

  it('should set a value at a specified path in the object if the customizer is not provided', () => {
    const object = {};

    setWith(object, '[0][1]', 'a');

    expect(object).toEqual({ '0': { '1': 'a' } });
  });

  it('should not modify the object if the object is null or undefined', () => {
    const object = null;

    setWith(object, '[0][1]', 'a');

    expect(object).toBe(null);
  });
});
