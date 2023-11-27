import compact from './compact';

describe('compact', () => {
  it('should return an array without falsey values', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const expected = [1, 2, 3];

    expect(compact(input)).toEqual(expected);
  });

  it('should return an empty array if input is null', () => {
    const input = null;
    const expected = [];

    expect(compact(input)).toEqual(expected);
  });

  it('should return an empty array if input is undefined', () => {
    const input = undefined;
    const expected = [];

    expect(compact(input)).toEqual(expected);
  });

  it('should return an empty array if input has no falsey values', () => {
    const input = [1, 2, 3];
    const expected = [1, 2, 3];

    expect(compact(input)).toEqual(expected);
  });

  it('should return an empty array if input is an empty array', () => {
    const input = [];
    const expected = [];

    expect(compact(input)).toEqual(expected);
  });

  it('should return an empty array if input is an empty string', () => {
    const input = '';
    const expected = [];

    expect(compact(input)).toEqual(expected);
  });
});
