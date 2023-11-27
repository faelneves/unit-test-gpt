import intersectionBy from './intersectionBy';

describe('intersectionBy', () => {
  it('should return an array of intersecting values based on the iteratee function', () => {
    expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
  });

  it('should return an empty array if no intersecting values are found', () => {
    expect(intersectionBy([2.1, 1.2], [3.3, 4.4], Math.floor)).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(intersectionBy([], [], Math.floor)).toEqual([]);
  });

  it('should handle arrays with one element', () => {
    expect(intersectionBy([1], [2], Math.floor)).toEqual([]);
  });

  it('should handle arrays with multiple elements and the same iteratee value', () => {
    expect(intersectionBy([2.1, 1.2], [2.1, 3.4], Math.floor)).toEqual([2.1]);
  });

  it('should handle arrays with multiple elements and different iteratee values', () => {
    expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.ceil)).toEqual([]);
  });
});
