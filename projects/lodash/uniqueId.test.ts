import uniqueId from './uniqueId';

describe('uniqueId', () => {
  it('should generate a unique ID with no prefix', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(typeof id1).toBe('string');
    expect(typeof id2).toBe('string');
    expect(id1).not.toBe(id2);
  });

  it('should generate a unique ID with a prefix', () => {
    const prefix = 'test_';
    const id1 = uniqueId(prefix);
    const id2 = uniqueId(prefix);
    expect(typeof id1).toBe('string');
    expect(typeof id2).toBe('string');
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(new RegExp(`^${prefix}\\d+$`));
    expect(id2).toMatch(new RegExp(`^${prefix}\\d+$`));
  });

  it('should generate a unique ID with the default prefix', () => {
    const defaultPrefix = '$lodash$';
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(typeof id1).toBe('string');
    expect(typeof id2).toBe('string');
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^\d+$/);
    expect(id2).toMatch(/^\d+$/);
    expect(id1).not.toMatch(new RegExp(`^${defaultPrefix}\\d+$`));
    expect(id2).not.toMatch(new RegExp(`^${defaultPrefix}\\d+$`));
  });
});
