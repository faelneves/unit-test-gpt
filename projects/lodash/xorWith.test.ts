import xorWith from './xorWith';

describe('xorWith', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    const isEqual = (arrVal, othVal) => arrVal.x === othVal.x && arrVal.y === othVal.y;

    it('should return array of filtered values with custom comparator', () => {
        const result = xorWith(objects, others, isEqual);
        expect(result).toEqual([{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]);
    });

    it('should return array of filtered values when no arrays are provided', () => {
        const result = xorWith();
        expect(result).toEqual([]);
    });

    it('should return array of filtered values when empty arrays are provided', () => {
        const result = xorWith([], []);
        expect(result).toEqual([]);
    });

    it('should return array of filtered values when arrays contain duplicate objects', () => {
        const result = xorWith(objects, objects);
        expect(result).toEqual([]);
    });

    it('should return array of filtered values when arrays have different lengths', () => {
        const result = xorWith(objects, objects.slice(0, 1));
        expect(result).toEqual([{ 'x': 2, 'y': 1 }]);
    });
});
