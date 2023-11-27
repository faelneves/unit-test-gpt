import sortedIndexBy from './sortedIndexBy';

describe('sortedIndexBy', () => {
  const objects = [{ 'n': 4 }, { 'n': 5 }];
  const iteratee = ({ n }) => n;

  it('should return the correct index when value is greater than all elements in the array', () => {
    const value = { 'n': 6 };
    expect(sortedIndexBy(objects, value, iteratee)).toBe(objects.length);
  });

  it('should return the correct index when value is smaller than all elements in the array', () => {
    const value = { 'n': 3 };
    expect(sortedIndexBy(objects, value, iteratee)).toBe(0);
  });

  it('should return the correct index when value is between two elements in the array', () => {
    const value = { 'n': 4.5 };
    expect(sortedIndexBy(objects, value, iteratee)).toBe(1);
  });

  it('should return the correct index when value is equal to an element in the array', () => {
    const value = { 'n': 4 };
    expect(sortedIndexBy(objects, value, iteratee)).toBe(0);
  });
});
