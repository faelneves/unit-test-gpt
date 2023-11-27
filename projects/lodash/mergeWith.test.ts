import mergeWith from './mergeWith';

describe('mergeWith', () => {
  it('should merge two objects with customizer function', () => {
    const object = { 'a': [1], 'b': [2], 'c': 3 };
    const source = { 'a': [3], 'b': [4], 'd': 5 };
    const customizer = (objValue, srcValue) => {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    };

    const result = mergeWith(object, source, customizer);

    expect(result).toEqual({ 'a': [1, 3], 'b': [2, 4], 'c': 3, 'd': 5 });
  });

  it('should merge multiple objects with customizer function', () => {
    const object = { 'a': [1], 'b': [2], 'c': 3 };
    const source1 = { 'a': [3], 'b': [4], 'd': 5 };
    const source2 = { 'c': 4, 'e': 6 };
    const customizer = (objValue, srcValue) => {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    };

    const result = mergeWith(object, source1, source2, customizer);

    expect(result).toEqual({ 'a': [1, 3], 'b': [2, 4], 'c': 4, 'd': 5, 'e': 6 });
  });

  it('should merge two objects with customizer function that returns undefined', () => {
    const object = { 'a': [1], 'b': [2], 'c': 3 };
    const source = { 'a': [3], 'b': [4], 'd': 5 };
    const customizer = (objValue, srcValue) => {
      // Return undefined to let the method handle merging
    };

    const result = mergeWith(object, source, customizer);

    expect(result).toEqual({ 'a': [3], 'b': [4], 'c': 3, 'd': 5 });
  });
});
