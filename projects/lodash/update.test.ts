import update from './update';

describe('update', () => {
  it('should update a nested property with a function', () => {
    const obj = { 'a': [{ 'b': { 'c': 3 } }] };
    const updatedObj = update(obj, 'a[0].b.c', n => n * n);
    expect(updatedObj.a[0].b.c).toBe(9);
  });

  it('should create nested property if it does not exist', () => {
    const obj = {};
    const updatedObj = update(obj, 'a.b.c', n => n ? n + 1 : 0);
    expect(updatedObj.a.b.c).toBe(0);
  });

  it('should not mutate the original object', () => {
    const obj = { 'a': [{ 'b': { 'c': 3 } }] };
    update(obj, 'a[0].b.c', n => n * n);
    expect(obj.a[0].b.c).toBe(3);
  });

  it('should return the object if it is null or undefined', () => {
    const obj = null;
    const path = 'a[0].b.c';
    const updater = n => n * n;
    const result = update(obj, path, updater);
    expect(result).toBe(obj);
  });
});
