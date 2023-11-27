import eachRight from './eachRight';

describe('eachRight', () => {
  it('should iterate over array elements in right to left order', () => {
    const arr = [1, 2, 3];
    const result: number[] = [];

    eachRight(arr, (element) => {
      result.push(element);
    });

    expect(result).toEqual([3, 2, 1]);
  });

  it('should iterate over object properties in right to left order', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result: number[] = [];

    eachRight(obj, (value) => {
      result.push(value);
    });

    expect(result).toEqual([3, 2, 1]);
  });

  it('should iterate over string characters in right to left order', () => {
    const str = 'hello';
    const result: string[] = [];

    eachRight(str, (char) => {
      result.push(char);
    });

    expect(result).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];

    eachRight(arr, () => {});

    expect(arr).toEqual([1, 2, 3]);
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };

    eachRight(obj, () => {});

    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });
});
