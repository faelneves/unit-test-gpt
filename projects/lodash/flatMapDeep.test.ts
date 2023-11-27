import flatMapDeep from './flatMapDeep';

describe('flatMapDeep', () => {
  it('should return a new flattened array', () => {
    const duplicate = (n) => [[[n, n]]];

    const result = flatMapDeep([1, 2], duplicate);

    expect(result).toEqual([1, 1, 2, 2]);
  });

  it('should recursively flatten the mapped results', () => {
    const duplicate = (n) => [n, n];

    const result = flatMapDeep([1, 2], duplicate);

    expect(result).toEqual([1, 1, 2, 2]);
  });

  it('should return an empty array if the input collection is empty', () => {
    const duplicate = (n) => [n, n];

    const result = flatMapDeep([], duplicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input collection contains nested empty arrays', () => {
    const duplicate = (n) => [];

    const result = flatMapDeep([1, 2], duplicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input collection contains nested empty objects', () => {
    const duplicate = (n) => ({});

    const result = flatMapDeep([1, 2], duplicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input collection is a string', () => {
    const duplicate = (n) => [n, n];

    const result = flatMapDeep('hello', duplicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input collection is null', () => {
    const duplicate = (n) => [n, n];

    const result = flatMapDeep(null, duplicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input collection is undefined', () => {
    const duplicate = (n) => [n, n];

    const result = flatMapDeep(undefined, duplicate);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the iteratee returns undefined for all elements', () => {
    const duplicate = (n) => undefined;

    const result = flatMapDeep([1, 2], duplicate);

    expect(result).toEqual([]);
  });
});
