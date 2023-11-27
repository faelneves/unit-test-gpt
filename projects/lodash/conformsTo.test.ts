import conformsTo from './conformsTo';

describe('conformsTo', () => {
  it('should return true if object conforms to source', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = { 'b': (n) => n > 1 };
    
    const result = conformsTo(object, source);

    expect(result).toBeTruthy();
  });

  it('should return false if object does not conform to source', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = { 'b': (n) => n > 2 };

    const result = conformsTo(object, source);

    expect(result).toBeFalsy();
  });

  it('should return true if source is null', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = null;

    const result = conformsTo(object, source);

    expect(result).toBeTruthy();
  });
});
