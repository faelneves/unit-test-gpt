import groupBy from './groupBy';

describe('groupBy', () => {
  it('should group elements correctly when using Math.floor as iteratee', () => {
    const collection = [6.1, 4.2, 6.3];
    const result = groupBy(collection, Math.floor);

    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group elements correctly when using a custom iteratee', () => {
    const collection = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'John' },
    ];
    const iteratee = (value) => value.name;
    const result = groupBy(collection, iteratee);

    expect(result).toEqual({
      John: [{ id: 1, name: 'John' }, { id: 3, name: 'John' }],
      Jane: [{ id: 2, name: 'Jane' }],
    });
  });

  it('should group elements correctly when using an iteratee that returns boolean values', () => {
    const collection = [1, 2, 3, 4, 5, 6];
    const iteratee = (value) => value % 2 === 0;
    const result = groupBy(collection, iteratee);

    expect(result).toEqual({
      false: [1, 3, 5],
      true: [2, 4, 6],
    });
  });
});
