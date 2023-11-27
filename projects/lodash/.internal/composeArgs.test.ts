import composeArgs from './composeArgs';

describe('composeArgs', () => {
  it('should return an array of composed arguments', () => {
    const args = [1, 2, 3];
    const partials = [4, 5];
    const holders = [1, 3];
    const isCurried = true;

    const result = composeArgs(args, partials, holders, isCurried);

    expect(result).toEqual([4, 1, 5, 2, 3]);
  });

  it('should return an empty array when no arguments are provided', () => {
    const args = [];
    const partials = [1, 2, 3];
    const holders = [];
    const isCurried = false;

    const result = composeArgs(args, partials, holders, isCurried);

    expect(result).toEqual([]);
  });

  it('should return an array of composed arguments when using curried function', () => {
    const args = [1, 2, 3];
    const partials = [4, 5];
    const holders = [1, 3];
    const isCurried = true;

    const result = composeArgs(args, partials, holders, isCurried);

    expect(result).toEqual([4, 1, 5, 2, 3]);
  });

  it('should return an array of composed arguments when not using curried function', () => {
    const args = [1, 2, 3];
    const partials = [4, 5];
    const holders = [1, 3];
    const isCurried = false;

    const result = composeArgs(args, partials, holders, isCurried);

    expect(result).toEqual([4, undefined, 5, undefined, 1, 2, 3]);
  });
});
