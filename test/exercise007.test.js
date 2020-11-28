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