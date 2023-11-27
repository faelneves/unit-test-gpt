import forOwnRight from './forOwnRight';

describe('forOwnRight', () => {
  it('should iterate over properties of the object in the opposite order', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const iteratee = jest.fn();
    forOwnRight(obj, iteratee);
    expect(iteratee.mock.calls.length).toBe(3);
    expect(iteratee.mock.calls[0][0]).toBe(3);
    expect(iteratee.mock.calls[0][1]).toBe('c');
    expect(iteratee.mock.calls[1][0]).toBe(2);
    expect(iteratee.mock.calls[1][1]).toBe('b');
    expect(iteratee.mock.calls[2][0]).toBe(1);
    expect(iteratee.mock.calls[2][1]).toBe('a');
  });

  it('should handle objects with null prototype', () => {
    const obj = Object.create(null);
    obj.a = 1;
    obj.b = 2;
    obj.c = 3;
    const iteratee = jest.fn();
    forOwnRight(obj, iteratee);
    expect(iteratee.mock.calls.length).toBe(3);
    expect(iteratee.mock.calls[0][0]).toBe(3);
    expect(iteratee.mock.calls[0][1]).toBe('c');
    expect(iteratee.mock.calls[1][0]).toBe(2);
    expect(iteratee.mock.calls[1][1]).toBe('b');
    expect(iteratee.mock.calls[2][0]).toBe(1);
    expect(iteratee.mock.calls[2][1]).toBe('a');
  });

  it('should not iterate over properties if the object is null or undefined', () => {
    const iteratee = jest.fn();
    forOwnRight(null, iteratee);
    forOwnRight(undefined, iteratee);
    expect(iteratee.mock.calls.length).toBe(0);
  });
});
