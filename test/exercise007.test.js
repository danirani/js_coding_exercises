const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("sum all digits in a single number", () => {
        expect(sumDigits(157)).toBe(13);
        expect(sumDigits(10)).toBe(1);
        expect(sumDigits(18)).toBe(9);
        expect(sumDigits(3627)).toBe(18);
        expect(sumDigits(2042)).toBe(8);
        expect(sumDigits(0)).toBe(0);
    });

    test("check throw errors", () => {
        expect(() => { sumDigits(undefined); }).toThrowError('n is required');
    });
});

describe("createRange", () => {
    test("create python like range function", () => {
        expect(createRange(3,11,2)).toBe([3,5,7,9,11]);
        expect(createRange(3,11)).toBe([3,4,5,6,7,8,9,10,11]);
    });

    test("check throw errors", () => {
        expect(() => { createRange(undefined,11); }).toThrowError('start is required');
        expect(() => { createRange(4,undefined); }).toThrowError('end is required');
        expect(() => { createRange(undefined,undefined); }).toThrowError('start is required');
    });
});