import minBy from './minBy';

describe('minBy', () => {
  it('should return the object with the minimum value when using a valid iteratee function', () => {
    const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 0 }];
    const iteratee = ({ n }) => n;
    const result = minBy(objects, iteratee);
    expect(result).toEqual({ 'n': 0 });
  });

  it('should return undefined when the array is null', () => {
    const array = null;
    const iteratee = ({ n }) => n;
    const result = minBy(array, iteratee);
    expect(result).toBeUndefined();
  });

  it('should return undefined when the array is empty', () => {
    const array = [];
    const iteratee = ({ n }) => n;
    const result = minBy(array, iteratee);
    expect(result).toBeUndefined();
  });

  it('should return undefined when the iteratee returns null for all elements in the array', () => {
    const objects = [{ 'n': null }, { 'n': null }, { 'n': null }];
    const iteratee = ({ n }) => n;
    const result = minBy(objects, iteratee);
    expect(result).toBeUndefined();
  });

  it('should return the object with the minimum value when there are multiple objects with the same minimum value', () => {
    const objects = [{ 'n': 1 }, { 'n': 0 }, { 'n': 0 }];
    const iteratee = ({ n }) => n;
    const result = minBy(objects, iteratee);
    expect(result).toEqual({ 'n': 0 });
  });

  it('should return undefined when the iteratee returns undefined for all elements in the array', () => {
    const objects = [{ 'n': undefined }, { 'n': undefined }, { 'n': undefined }];
    const iteratee = ({ n }) => n;
    const result = minBy(objects, iteratee);
    expect(result).toBeUndefined();
  });
});
