import invert from './invert';

describe('invert', () => {
  it('should create an inverted object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const invertedObject = invert(object);
    expect(invertedObject).toEqual({ '1': 'c', '2': 'b' });
  });

  it('should handle objects with duplicate values', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1, 'd': 2 };
    const invertedObject = invert(object);
    expect(invertedObject).toEqual({ '1': 'c', '2': 'd' });
  });

  it('should handle null values', () => {
    const object = { 'a': null, 'b': undefined, 'c': null };
    const invertedObject = invert(object);
    expect(invertedObject).toEqual({ 'null': 'c', 'undefined': 'b' });
  });

  it('should handle non-object values', () => {
    const object = 123;
    const invertedObject = invert(object);
    expect(invertedObject).toEqual({});
  });
});
