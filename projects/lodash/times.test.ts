import times from './times';

describe('times', () => {
  it('should return an empty array if n is less than 1', () => {
    expect(times(0, String)).toEqual([]);
    expect(times(-5, String)).toEqual([]);
  });

  it('should return an empty array if n is greater than MAX_SAFE_INTEGER', () => {
    expect(times(Number.MAX_SAFE_INTEGER + 1, String)).toEqual([]);
    expect(times(Number.MAX_VALUE, String)).toEqual([]);
  });

  it('should return an array of results', () => {
    expect(times(3, String)).toEqual(['0', '1', '2']);
    expect(times(4, () => 0)).toEqual([0, 0, 0, 0]);
  });

  it('should invoke the iteratee with the correct index', () => {
    const iteratee = jest.fn();
    times(5, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(5);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
    expect(iteratee).toHaveBeenCalledWith(3);
    expect(iteratee).toHaveBeenCalledWith(4);
  });
});
