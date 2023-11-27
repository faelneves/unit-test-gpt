import iteratorToArray from './iteratorToArray';

describe('iteratorToArray', () => {
  it('should convert an iterator to an array', () => {
    const iterator = {
      next: jest.fn()
        .mockReturnValueOnce({ done: false, value: 1 })
        .mockReturnValueOnce({ done: false, value: 2 })
        .mockReturnValueOnce({ done: true }),
    };

    const result = iteratorToArray(iterator);

    expect(result).toEqual([1, 2]);
    expect(iterator.next).toHaveBeenCalledTimes(3);
    expect(iterator.next).toHaveBeenCalledWith();
  });

  it('should handle an empty iterator', () => {
    const iterator = {
      next: jest.fn()
        .mockReturnValueOnce({ done: true }),
    };

    const result = iteratorToArray(iterator);

    expect(result).toEqual([]);
    expect(iterator.next).toHaveBeenCalledTimes(1);
    expect(iterator.next).toHaveBeenCalledWith();
  });
});
