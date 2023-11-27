import maxBy from './maxBy';

describe('maxBy', () => {
  it('should return maximum value based on the iteratee function', () => {
    const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }];
    const iteratee = (obj) => obj.n;

    const result = maxBy(objects, iteratee);

    expect(result).toEqual({ 'n': 3 });
  });

  it('should return undefined if the array is empty', () => {
    const objects = [];
    const iteratee = (obj) => obj.n;

    const result = maxBy(objects, iteratee);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the array is null', () => {
    const objects = null;
    const iteratee = (obj) => obj.n;

    const result = maxBy(objects, iteratee);

    expect(result).toBeUndefined();
  });
});
