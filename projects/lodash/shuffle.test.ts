import shuffle from './shuffle';

describe('shuffle', () => {
  it('should return a shuffled array', () => {
    const array = [1, 2, 3, 4];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toEqual(array);
  });

  it('should return an empty array when the input array is empty', () => {
    const array = [];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual([]);
  });

  it('should return a shuffled array with the same length as the input array', () => {
    const array = [1, 2, 3, 4];
    const shuffledArray = shuffle(array);
    expect(shuffledArray.length).toEqual(array.length);
  });

  it('should not modify the input array', () => {
    const array = [1, 2, 3, 4];
    shuffle(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
