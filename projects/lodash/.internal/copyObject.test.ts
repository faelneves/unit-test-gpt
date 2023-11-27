import copyObject from './copyObject';
import assignValue from './assignValue';
import baseAssignValue from './baseAssignValue';

describe('copyObject', () => {
  it('should copy properties from source to object', () => {
    const source = {
      prop1: 'value1',
      prop2: 'value2',
    };

    const object = {};

    const props = ['prop1', 'prop2'];

    const result = copyObject(source, props, object);

    expect(result).toEqual({
      prop1: 'value1',
      prop2: 'value2',
    });
  });

  it('should copy properties from source to object with a customizer', () => {
    const source = {
      prop1: 'value1',
      prop2: 'value2',
    };

    const object = {};

    const props = ['prop1', 'prop2'];

    const customizer = (value, sourceValue, key, dest, src) => {
      return value + sourceValue;
    };

    const result = copyObject(source, props, object, customizer);

    expect(result).toEqual({
      prop1: 'value1value1',
      prop2: 'value2value2',
    });
  });

  it('should copy properties from source to a new object', () => {
    const source = {
      prop1: 'value1',
      prop2: 'value2',
    };

    const props = ['prop1', 'prop2'];

    const result = copyObject(source, props);

    expect(result).toEqual({
      prop1: 'value1',
      prop2: 'value2',
    });
  });
});
