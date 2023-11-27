import baseAssignValue from './baseAssignValue';

describe('baseAssignValue', () => {
  it('should assign value to the object property', () => {
    const object = {};
    const key = 'foo';
    const value = 'bar';

    baseAssignValue(object, key, value);

    expect(object[key]).toBe(value);
  });

  it('should define __proto__ property if key is __proto__', () => {
    const object = {};
    const key = '__proto__';
    const value = {};

    baseAssignValue(object, key, value);

    const descriptor = Object.getOwnPropertyDescriptor(object, key);
    expect(descriptor.value).toBe(value);
    expect(descriptor.configurable).toBe(true);
    expect(descriptor.enumerable).toBe(true);
    expect(descriptor.writable).toBe(true);
  });
});
