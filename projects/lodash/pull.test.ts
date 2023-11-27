import pull from './pull';

describe('pull', () => {
  it('should remove all given values from array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    pull(array, 'a', 'c');
    expect(array).toEqual(['b', 'b']);
  });

  it('should remove all instances of given values from array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    pull(array, 'a', 'a');
    expect(array).toEqual(['b', 'c', 'b', 'c']);
  });

  it('should remove all instances of given values from empty array', () => {
    const array = [];
    pull(array, 'a', 'b');
    expect(array).toEqual([]);
  });
});
