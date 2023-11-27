import zipObject from './zipObject';

describe('zipObject', () => {
  it('should return an object with properties and values from two arrays', () => {
    const props = ['a', 'b', 'c'];
    const values = [1, 2, 3];
    expect(zipObject(props, values)).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  it('should return an empty object when both arrays are empty', () => {
    const props = [];
    const values = [];
    expect(zipObject(props, values)).toEqual({});
  });

  it('should handle an empty array for properties', () => {
    const props = [];
    const values = [1, 2, 3];
    expect(zipObject(props, values)).toEqual({});
  });

  it('should handle an empty array for values', () => {
    const props = ['a', 'b', 'c'];
    const values = [];
    expect(zipObject(props, values)).toEqual({});
  });

  it('should ignore extra properties if the values array is shorter', () => {
    const props = ['a', 'b', 'c'];
    const values = [1, 2];
    expect(zipObject(props, values)).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should assign undefined if the properties array is shorter', () => {
    const props = ['a', 'b'];
    const values = [1, 2, 3];
    expect(zipObject(props, values)).toEqual({ 'a': 1, 'b': 2, 'undefined': 3 });
  });

  it('should assign values to properties with the same name as reserved keywords', () => {
    const props = ['class', 'for', 'function'];
    const values = ['foo', 'bar', 'baz'];
    expect(zipObject(props, values)).toEqual({ 'class': 'foo', 'for': 'bar', 'function': 'baz' });
  });
});
