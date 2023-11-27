import freeGlobal from './freeGlobal';

describe('freeGlobal', () => {
  it('should return the global object', () => {
    expect(freeGlobal).toBeDefined();
    expect(freeGlobal).toBe(global);
  });
});
