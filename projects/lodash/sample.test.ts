import sample from './sample';

describe('sample', () => {

  it('should return a random element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  it('should return undefined if the array is empty', () => {
    const array = [];
    const result = sample(array);
    expect(result).toBeUndefined();
  });

  it('should return undefined if the array is null', () => {
    const array = null;
    const result = sample(array);
    expect(result).toBeUndefined();
  });

});

