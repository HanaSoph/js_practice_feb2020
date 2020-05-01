const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("returns a sum of all the digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(9473822022)).toBe(39);
    });

    test("returns 0 if number is 0", () => {
        expect(sumDigits(0)).toBe(0);
    });
});

describe("createRange", () => {
    test("returns an array with a start number, an end number and a step number. Step is the gap between numbers in the range", () => {
        expect(createRange(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(createRange(2, 14, 3)).toEqual([2, 5, 8, 11, 14]);
    });

    test("steps by 1 if the step number isn't provided", () => {
        expect(createRange(6, 16, undefined)).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });
});

describe("getScreentimeAlertList", () => {
    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
        {
            username: "shakespeare_1564",
            name: "Shakespeare Thecat",
            screenTime: [
                { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 57, facebook: 89, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 10, facebook: 22, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 17, facebook: 72, safari: 31 } },
            ]
        }
    ]
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        expect(getScreentimeAlertList(users, '2019-05-04')).toEqual(["beth_1234"]);
    });
})