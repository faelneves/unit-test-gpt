import zipObjectDeep from './zipObjectDeep';

describe("zipObjectDeep", () => {
  it("should return an empty object when given empty arrays", () => {
    expect(zipObjectDeep([], [])).toEqual({});
  });

  it("should return an object with properties from arrays", () => {
    const props = ['a.b[0].c', 'a.b[1].d'];
    const values = [1, 2];
    expect(zipObjectDeep(props, values)).toEqual({
      'a': {
        'b': [{ 'c': 1 }, { 'd': 2 }]
      }
    });
  });

  it("should return an object with an empty array value when given an empty values array", () => {
    const props = ['a.b[0].c', 'a.b[1].d'];
    const values = [];
    expect(zipObjectDeep(props, values)).toEqual({
      'a': {
        'b': [{ 'c': undefined }, { 'd': undefined }]
      }
    });
  });

  it("should return an object with undefined values when given an empty props array", () => {
    const props = [];
    const values = [1, 2];
    expect(zipObjectDeep(props, values)).toEqual({});
  });
});
