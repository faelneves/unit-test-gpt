import tail from './tail';

describe('tail', () => {
    it('should return an empty array if the input array is empty', () => {
        expect(tail([])).toEqual([]);
    });

    it('should return all elements except the first element of the input array', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
        expect(tail(['a', 'b', 'c', 'd'])).toEqual(['b', 'c', 'd']);
    });

    it('should return an empty array if the input array contains only one element', () => {
        expect(tail([1])).toEqual([]);
        expect(tail(['a'])).toEqual([]);
    });
});
