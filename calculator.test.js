const { mean, median, mode } = require('./calculator')

describe('Calculate mean, median, mode', () => {
    test('mean of 1,3,5,7 is 4 ', () => {
        expect(mean("1,3,5,7")).toEqual(4);
    });
    test('mean of 1,2,3,4 is 2.5', () => {
        expect(mean([1,2,3,4])).toEqual(2.5);
    });
    test('median of 3, 5, 4, 4, 1, 1, 2, 3 is 3', () => {
        expect(median("3, 5, 4, 4, 1, 1, 2, 3")).toEqual(3);
    });
    test('median of [3, 5, 4, 4, 1, 1, 2, 3 is 3]', () => {
        expect(median([3, 5, 4, 4, 1, 1, 2, 3])).toEqual(3);
    });
    test('mode of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4]', () => {
        expect(mode([3, 5, 4, 4, 1, 1, 2, 3])).toEqual([1, 3, 4]);
    });
    test('mode of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4]', () => {
        expect(mode("3,5,4,4,1,1,2,3")).toEqual([1, 3, 4]);
    });
})