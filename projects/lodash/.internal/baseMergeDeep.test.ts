import baseMergeDeep from './baseMergeDeep';

describe('baseMergeDeep', () => {
  it('should merge objects deeply', () => {
    const object = {
      a: {
        b: {
          c: 1,
        },
      },
    };
    const source = {
      a: {
        b: {
          d: 2,
        },
      },
    };
    const expected = {
      a: {
        b: {
          c: 1,
          d: 2,
        },
      },
    };
    baseMergeDeep(object, source, 'a', 0, baseMergeDeep, undefined, new Map());

    expect(object).toEqual(expected);
  });

  it('should merge arrays deeply', () => {
    const object = {
      a: [1, 2, 3],
    };
    const source = {
      a: [4, 5, 6],
    };
    const expected = {
      a: [1, 2, 3, 4, 5, 6],
    };
    baseMergeDeep(object, source, 'a', 0, baseMergeDeep, undefined, new Map());

    expect(object).toEqual(expected);
  });

  it('should handle circular references', () => {
    const object = {
      a: {},
    };
    object.a.b = object;
    const source = {
      a: {
        c: 1,
      },
    };
    const expected = {
      a: {
        b: {
          c: 1,
        },
        c: 1,
      },
    };
    const stack = new Map();
    baseMergeDeep(object, source, 'a', 0, baseMergeDeep, undefined, stack);

    expect(object).toEqual(expected);
  });
});
