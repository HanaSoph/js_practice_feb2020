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
});

describe("hexToRGB", () => {
    test("expects a HEX number and returns the RGB code", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#591757")).toBe("rgb(89,23,87)");
    });

    test("returns rgb even if the hex is uncapitalised", () =>{
        expect(hexToRGB("#e39820")).toBe("rgb(227,152,32)");
    });

    test("throws undefined if no hex is given", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");
    });
});

 describe.only("findWinner", () => {
    test("returns X when X has three in a row", () => {
        expect(findWinner([["X", "X", "X"], ["0", null, "0"], ["0", null, null]])).toBe("X");
        expect(findWinner([["X", null, "X"], ["0", null, null], ["X", "X", "X"]])).toBe("X");
        expect(findWinner([[null, "X", null], [null, "X", null], ["X", "X", "0"]])).toBe("X");
    });
    test("returns 0 when 0 has three in a row", () => {
        expect(findWinner([["X", null, "X"], ["0", "0", "0"], ["0", null, null]])).toBe("0");
        expect(findWinner([["X", null, "X"], ["0", null, null], ["0", "0", "0"]])).toBe("0");
        expect(findWinner([["0", "X", "0"], [null, null, "0"], ["X", "X", "0"]])).toBe("0");
    });
    test("returns X when X has 3 diagonally in a row", () => {
        expect(findWinner([["0", "0", "X"], [null, "X", "0"], ["X", null, "0"]])).toBe("X");
    });
    test("returns 0 when 0 has 3 diagonally in a row", () => {
        expect(findWinner([["X", "X", "0"], [null, "0", "X"], ["0", null, "0"]])).toBe("0");
    });
    test("returns null when there is no winner", () => {
        expect(findWinner([["0", "0", "X"], ["X", "X", "0"], ["0", "X", "0"]])).toBe(null);
    });

});