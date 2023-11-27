import createAssigner from './createAssigner';
import isIterateeCall from './isIterateeCall';


describe('createAssigner', () => {
  it('should return a function', () => {
    const assigner = jest.fn();
    const result = createAssigner(assigner);
    expect(typeof result).toBe('function');
  });

  it('should assign values to the object using the assigner function', () => {
    const assigner = jest.fn();
    const object = { a: 1, b: 2 };
    const source = { c: 3 };
    const assign = createAssigner(assigner);
    
    assign(object, source);
    
    expect(assigner).toHaveBeenCalledWith(object, source, 0, undefined);
  });

  it('should handle multiple sources', () => {
    const assigner = jest.fn();
    const object = { a: 1, b: 2 };
    const source1 = { c: 3 };
    const source2 = { d: 4 };
    const assign = createAssigner(assigner);
    
    assign(object, source1, source2);
    
    expect(assigner).toHaveBeenCalledWith(object, source1, 0, undefined);
    expect(assigner).toHaveBeenCalledWith(object, source2, 1, undefined);
  });

  it('should handle customizer function', () => {
    const assigner = jest.fn();
    const object = { a: 1, b: 2 };
    const source = { c: 3 };
    const customizer = jest.fn();
    const assign = createAssigner(assigner);
    
    assign(object, source, customizer);
    
    expect(assigner).toHaveBeenCalledWith(object, source, 0, customizer);
  });

  it('should handle guard argument', () => {
    const assigner = jest.fn();
    const object = { a: 1, b: 2 };
    const source1 = { c: 3 };
    const source2 = { d: 4 };
    const guard = jest.fn(() => true);
    const assign = createAssigner(assigner);
    
    assign(object, source1, source2, guard);
    
    expect(assigner).toHaveBeenCalledWith(object, source1, 0, undefined);
  });

  it('should handle isIterateeCall function with guard argument', () => {
    // Mock isIterateeCall function to return true
    isIterateeCall.mockReturnValue(true);

    const assigner = jest.fn();
    const object = { a: 1, b: 2 };
    const source1 = { c: 3 };
    const source2 = { d: 4 };
    const assign = createAssigner(assigner);
    
    assign(object, source1, source2);
    
    expect(assigner).toHaveBeenCalledWith(object, source1, 0, undefined);
    expect(assigner).toHaveBeenCalledTimes(1);
  });

});
