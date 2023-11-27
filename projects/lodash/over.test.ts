import over from './over';

describe('over', () => {
  it('should return a function that invokes the iteratees with the given arguments', () => {
    const func = over([Math.max, Math.min]);
    expect(func(1, 2, 3, 4)).toEqual([4, 1]);
  });

  it('should return an empty array if no iteratees are provided', () => {
    const func = over();
    expect(func(1, 2, 3, 4)).toEqual([]);
  });

  it('should return an empty array if the given arguments are empty', () => {
    const func = over([Math.max, Math.min]);
    expect(func()).toEqual([]);
  });

  it('should handle NaN values correctly', () => {
    const func = over([Math.max, Math.min]);
    expect(func(NaN, NaN)).toEqual([NaN, NaN]);
  });

  it('should handle functions that throw errors', () => {
    const iteratee = jest.fn(() => { throw new Error('test error'); });
    const func = over([iteratee]);

    expect(() => func(1, 2, 3, 4)).toThrow('test error');
    expect(iteratee).toHaveBeenCalledWith(1, 2, 3, 4);
  });
});
