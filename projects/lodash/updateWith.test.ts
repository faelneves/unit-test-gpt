import updateWith from './updateWith';

describe('updateWith', () => {
  it('should update a property using customizer function', () => {
    const object = { a: 1, b: 2, c: 3 };
    const customizer = (value, key, object) => (key === 'b' ? value * 2 : undefined);
    updateWith(object, 'b', value => value * 2, customizer);
    expect(object.b).toBe(4);
  });

  it('should create a path when customizer returns undefined', () => {
    const object = {};
    updateWith(object, '[0][1]', () => 'a', Object);
    expect(object[0][1]).toBe('a');
  });

  it('should not modify the object if it is null or undefined', () => {
    const object1 = null;
    const object2 = undefined;

    updateWith(object1, 'a', () => 'a', Object);
    updateWith(object2, 'a', () => 'a', Object);

    expect(object1).toBeNull();
    expect(object2).toBeUndefined();
  });
});
