import method from './method';
import invoke from './invoke';

describe('method', () => {
  it('should create a function that invokes the method at the specified path of the given object', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } }
    ];

    const getResult = method('a.b');
    expect(getResult(objects[0])).toBe(2);
    expect(getResult(objects[1])).toBe(1);
  });

  it('should create a function that invokes the method using the provided path array', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } }
    ];

    const getResult = method(['a', 'b']);
    expect(getResult(objects[0])).toBe(2);
    expect(getResult(objects[1])).toBe(1);
  });

  it('should pass additional arguments to the invoked method', () => {
    const objects = [
      { 'a': { 'b': (x, y) => x + y } },
      { 'a': { 'b': (x, y) => x - y } }
    ];

    const add = method('a.b', [2, 3]);
    const subtract = method(['a', 'b'], [5, 2]);

    expect(add(objects[0])).toBe(5); // 2 + 3 = 5
    expect(subtract(objects[1])).toBe(3); // 5 - 2 = 3
  });

  it('should return undefined if the method at the specified path does not exist', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': {} }
    ];

    const getResult = method('a.b');

    expect(getResult(objects[0])).toBe(2);
    expect(getResult(objects[1])).toBeUndefined();
  });
});
