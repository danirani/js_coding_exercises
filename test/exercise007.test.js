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
    test("create range function", () => {
        expect(createRange(3,11,2)).toStrictEqual([3,5,7,9,11]);
        expect(createRange(3,11)).toStrictEqual([3,4,5,6,7,8,9,10,11]);
        expect(createRange(17,3,30)).toStrictEqual([]);
        expect(createRange(1,1,30)).toStrictEqual([1]);
        expect(createRange(10,1,-1)).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
        expect(createRange(20,13,-2)).toStrictEqual([20,18,16,14]);
        expect(createRange(1,1,0)).toStrictEqual([]);
    });

    test("check throw errors", () => {
        expect(() => { createRange(undefined,11); }).toThrowError('start is required');
        expect(() => { createRange(4,undefined); }).toThrowError('end is required');
        expect(() => { createRange(undefined,undefined); }).toThrowError('start is required');
    });
});




describe("getScreentimeAlertList", () => {

    const data = [
        {
            username: "beth_001",
            name: "Beth Smith",
            screenTime: [
                { date: "2020-11-01", usage: { twitter: 19, instagram: 8, whatsapp: 20, facebook: 21, youtube: 34} }, // 102
                { date: "2020-11-02", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 21, youtube: 34} },  //  81
                { date: "2020-11-03", usage: { twitter: 5, instagram: 8, whatsapp: 10, facebook: 21, youtube: 34} },  //  78
                { date: "2020-11-04", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 45, youtube: 34} },  // 105
                { date: "2020-11-05", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 21, youtube: 35} }   //  82
            ]
        },
        {
            username: "sam_002",
            name: "Sam Jones",
            screenTime: [
                { date: "2020-11-01", usage: { mapMyRun: 5, whatsapp: 8, facebook: 49, safari: 21} },  //  83
                { date: "2020-11-02", usage: { mapMyRun: 19, whatsapp: 8, facebook: 22, safari: 55} }, // 104
                { date: "2020-11-03", usage: { mapMyRun: 5, whatsapp: 8, facebook: 13, safari: 55} },  //  81
                { date: "2020-11-04", usage: { mapMyRun: 5, whatsapp: 30, facebook: 13, safari: 68} }, // 116
                { date: "2020-11-05", usage: { mapMyRun: 5, whatsapp: 8, facebook: 53, safari: 34} }   // 100
            ]
        },
        {
            username: "felix_003",
            name: "Felix Peters",
            screenTime: [
                { date: "2020-11-01", usage: { twitter: 36, instagram: 8, whatsapp: 13, facebook: 21, youtube: 34} }, // 112
                { date: "2020-11-02", usage: { twitter: 5, instagram: 32, whatsapp: 13, facebook: 21, youtube: 34} }, // 105
                { date: "2020-11-03", usage: { twitter: 5, instagram: 8, whatsapp: 31, facebook: 21, youtube: 34} },  //  99
                { date: "2020-11-04", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 46, youtube: 34} },  // 106
                { date: "2020-11-05", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 21, youtube: 12} }   //  59
            ]
        },
        {
            username: "sarah_004",
            name: "Sarah Levin",
            screenTime: [
                { date: "2020-11-01", usage: { mapMyRun: 39, whatsapp: 8, facebook: 13, safari: 21} },  //  81
                { date: "2020-11-02", usage: { mapMyRun: 5, whatsapp: 42, facebook: 13, safari: 30} },  //  90
                { date: "2020-11-03", usage: { mapMyRun: 5, whatsapp: 59, facebook: 47, safari: 21} },  // 132
                { date: "2020-11-04", usage: { mapMyRun: 5, whatsapp: 8, facebook:  38, safari: 55} },  // 106
                { date: "2020-11-05", usage: { mapMyRun: 39, whatsapp: 34, facebook: 13, safari: 21} }, // 107
            ]
        },
        {
            username: "paul_005",
            name: "Paul Armstrong",
            screenTime: [
                { date: "2020-11-01", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 21, youtube: 34} },  //  81
                { date: "2020-11-02", usage: { twitter: 5, instagram: 45, whatsapp: 13, facebook: 21, youtube: 34} }, // 118
                { date: "2020-11-03", usage: { twitter: 5, instagram: 8, whatsapp:  3, facebook: 21, youtube: 34} },  //  71
                { date: "2020-11-04", usage: { twitter: 5, instagram: 8, whatsapp:  4, facebook: 21, youtube: 34} },  //  72
                { date: "2020-11-05", usage: { twitter: 5, instagram: 8, whatsapp: 13, facebook: 21, youtube: 10} }   //  57
            ]
        },
    ]

    test("return an array of users with more than 100 minutes of screentime", () => {
        expect(getScreentimeAlertList(data, "2020-11-01")).toStrictEqual(['beth_001','felix_003']);
        expect(getScreentimeAlertList(data, "2020-11-02")).toStrictEqual(['sam_002','felix_003','paul_005']);
        expect(getScreentimeAlertList(data, "2020-11-03")).toStrictEqual(['sarah_004']);
        expect(getScreentimeAlertList(data, "2020-11-04")).toStrictEqual(['beth_001','sam_002','felix_003','sarah_004']);
        expect(getScreentimeAlertList(data, "2020-11-05")).toStrictEqual(['sarah_004']);
        expect(getScreentimeAlertList(data, "2020-11-06")).toStrictEqual([]);
        expect(getScreentimeAlertList(data, "2020-11-07")).toStrictEqual([]);
    });

    test("check throw errors", () => {
        expect(() => { getScreentimeAlertList(undefined,"2020-11-02"); }).toThrowError('users is required');
        expect(() => { getScreentimeAlertList(data,undefined); }).toThrowError('date is required');
    });
});

describe("hexToRGB", () => {
    test("create range function", () => {
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255, 255, 255)");
        expect(hexToRGB("#FFD1E3")).toBe("rgb(255, 209, 227)");
        expect(hexToRGB("#000000")).toBe("rgb(0, 0, 0)");
        expect(hexToRGB("#103465")).toBe("rgb(16, 52, 101)");
        expect(hexToRGB("#A1E765")).toBe("rgb(161, 231, 101)");
        expect(hexToRGB("#EE1278")).toBe("rgb(238, 18, 120)");
    });

    test("check throw errors", () => {
        expect(() => { hexToRGB(undefined); }).toThrowError('hexStr is required');
    });
});