import filterObject from './filterObject';

describe('filterObject', () => {
  it('should return an empty array if the object is empty', () => {
    const object = {};
    const predicate = (n) => n > 0;

    const result = filterObject(object, predicate);

    expect(result).toEqual([]);
  });

  it('should return an array of filtered elements based on the predicate', () => {
    const object = { 'a': 5, 'b': 8, 'c': 10 };
    const predicate = (n) => n % 5 === 0;

    const result = filterObject(object, predicate);

    expect(result).toEqual([5, 10]);
  });

  it('should return an array of filtered elements when the predicate returns truthy for all elements', () => {
    const object = { 'a': 5, 'b': 8, 'c': 10 };
    const predicate = (n) => true;

    const result = filterObject(object, predicate);

    expect(result).toEqual([5, 8, 10]);
  });

  it('should return an empty array when the predicate returns falsy for all elements', () => {
    const object = { 'a': 5, 'b': 8, 'c': 10 };
    const predicate = (n) => false;

    const result = filterObject(object, predicate);

    expect(result).toEqual([]);
  });
});
