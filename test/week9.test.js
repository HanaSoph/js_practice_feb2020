const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("hello");
        }).toThrow("an array is required")

        expect(() => {
            sumMultiples(10);
        }).toThrow("an array is required")
    });

    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected)
    });

    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected)
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([7, 32, 8, 53, 17])).toBe(0);
    })
});

describe("isValidDNA", () => {
    test("returns false if receives an empty string", () => {
        expect(isValidDNA("")).toBe(false);
    });

    test("returns true if a the string includes one or more characters a DNA character", () => {
        expect(isValidDNA("A")).toBe(true);
        expect(isValidDNA("CTA")).toBe(true);
    });

    test("returns false if one character is DNA and the others are not", () => {
        expect(isValidDNA("TBHL")).toBe(false);
    })

    test("returns false if there are no DNA character", () => {
        expect(isValidDNA("JKUE")).toBe(false);
    })

    test("changes lowercase to uppercase", () => {
        expect(isValidDNA("agt")).toBe(true);
    })


    // ignores capitalisation
})

describe("getComplementaryDNA", () => {
    test("throws error if string is not a DNA character", () => {
        expect(() => {
            getComplementaryDNA("H");
        }).toThrow("DNA character required");
    });


    test("returns string of complimentary base pairs", () => {
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("G")).toBe("C");
        expect(getComplementaryDNA("TG")).toBe("AC");
        expect(getComplementaryDNA("GCTCC")).toBe("CGAGG")
    });

    test("returns lowercase as uppercase", () => {
        expect(getComplementaryDNA("agt")).toBe("TCA");
    });
})

describe("isItPrime", () => {
    test("throws an error if the input is not a number", () => {
        expect(() => {
            isItPrime("H");
        }).toThrow("please enter a number");
    });

    test("returns true if the number is a prime number", () => {
        expect(isItPrime(17)).toBe(true);
    });

    test("returns false if the number is not a prime number", () => {
        expect(isItPrime(4)).toBe(false);
    })
});

describe.only("createMatrix", () => {
    test("throws an error if the n is undefined", () => {
        expect(() => {
            createMatrix(undefined, "");
        }).toThrow("n is required");
    });
    test("returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [ ["foo"] ];
        expect(result).toEqual(expected);
    });
    test("returns a matrix of 2 * 2 when passed 2", () => {
        const result = createMatrix(2, "two");
        const expected = [ ["two", "two"], ["two", "two"] ];
        expect(result).toEqual(expected);
    });
    test("returns a matrix of 5 * 5 when passed 5", () => {
        const result = createMatrix(5, "Shakespeare");
        const expected = [ ["Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare" ], ["Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare" ], ["Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare" ], ["Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare" ], ["Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare", "Shakespeare" ] ];
        expect(result).toEqual(expected);
    });
});

// simpler test - returns an empty array with arguement 0

describe("areWeCovered", () => {
    test("returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("returns false if there are staff but < 3 not scheduled to work", () => {
        const staff = [
            { name: "Sarah", rota: ["Monday", "Tuesday"] },
            { name: "Leo", rota: ["Monday", "Tuesday"] },
            { name: "Cassie", rota: ["Monday", "Tuesday"] },
            { name: "Shakespeare", rota: ["Monday", "Tuesday"] }
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });

    test("returns true if there are three members of staff scheduled for work", () => {
        const staff = [
            { name: "Sarah", rota: ["Sunday", "Wednesday", "Friday"] },
            { name: "Leo", rota: ["Sunday", "Monday", "Tuesday"] },
            { name: "Cassie", rota: ["Sunday", "Monday", "Tuesday"] },
            { name: "Shakespeare", rota: ["Sunday", "Tuesday", "Friday"] }
        ];
        expect(areWeCovered(staff, "Sunday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    })


    test("returns false if the day is not a day of the week", () => {
        const staff = [
            { name: "Sarah", rota: ["Sunday", "Wednesday", "Friday"] },
            { name: "Leo", rota: ["Sunday", "Monday", "Tuesday"] },
            { name: "Cassie", rota: ["Sunday", "Monday", "Tuesday"] },
            { name: "Shakespeare", rota: ["Sunday", "Tuesday", "Friday"] }
        ];
        expect(areWeCovered(staff, "Christmas day")).toBe(false);
    })
});