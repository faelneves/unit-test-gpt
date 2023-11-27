import root from './root';

describe('root', () => {
  it('should be defined', () => {
    expect(root).toBeDefined();
  });
  
  it('should be an object', () => {
    expect(typeof root).toBe('object');
  });

  it('should have Object property', () => {
    expect(root.Object).toBeDefined();
    expect(typeof root.Object).toBe('function');
  });
});
