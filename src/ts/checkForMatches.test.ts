import {checkForMatches} from "./checkForMatches";

describe("test function checkForMatches", () => {
    it("is function", () => {
        expect(typeof (checkForMatches)).toBe("function");
    });

    it("light arrayMatrix is 0", () => {
        const arrayMatrix: number[][][] = [];
        const matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        expect(checkForMatches(arrayMatrix, matrix)).toBeFalsy();
    });

    it("light arrayMatrix > 0 and match found", () => {
        const arrayMatrix: number[][][] = [
            [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 0],
                [0, 0, 0]
            ],

        ];
        const matrix = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];
        expect(checkForMatches(arrayMatrix, matrix)).toBeTruthy();
    });

    it("light arrayMatrix > 0 and match not found", () => {
        const arrayMatrix: number[][][] = [
            [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 0],
                [0, 0, 0]
            ],

        ];
        const matrix = [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ];
        expect(checkForMatches(arrayMatrix, matrix)).toBeFalsy();
    });
});
