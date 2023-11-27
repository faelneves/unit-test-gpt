import toArray from './toArray';

describe('toArray', () => {
  it('should return an empty array for falsy values', () => {
    expect(toArray(null)).toEqual([]);
    expect(toArray(undefined)).toEqual([]);
    expect(toArray(false)).toEqual([]);
    expect(toArray(0)).toEqual([]);
    expect(toArray('')).toEqual([]);
  });

  it('should convert an object to an array', () => {
    const obj = { a: 1, b: 2 };
    expect(toArray(obj)).toEqual([1, 2]);
  });

  it('should convert a string to an array', () => {
    const str = 'abc';
    expect(toArray(str)).toEqual(['a', 'b', 'c']);
  });

  it('should convert a Set object to an array', () => {
    const set = new Set([1, 2, 3]);
    expect(toArray(set)).toEqual([1, 2, 3]);
  });

  it('should convert a Map object to an array', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    expect(toArray(map)).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('should convert an iterable object to an array', () => {
    const iterable = {
      *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
      },
    };
    expect(toArray(iterable)).toEqual([1, 2, 3]);
  });
});
