import pickBy from './pickBy';

describe('pickBy', () => {
  it('should return an empty object if the input object is null or undefined', () => {
    expect(pickBy(null, () => true)).toEqual({});
    expect(pickBy(undefined, () => true)).toEqual({});
  });

  it('should return a new object with properties that satisfy the predicate function', () => {
    const object = { a: 1, b: '2', c: 3 };
    const isNumber = (value) => typeof value === 'number';

    expect(pickBy(object, isNumber)).toEqual({ a: 1, c: 3 });
  });

  it('should not mutate the original object', () => {
    const object = { a: 1, b: '2', c: 3 };
    const isNumber = (value) => typeof value === 'number';

    pickBy(object, isNumber);

    expect(object).toEqual({ a: 1, b: '2', c: 3 });
  });
});
