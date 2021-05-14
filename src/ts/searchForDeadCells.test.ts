import { searchForDeadCells } from "./searchForDeadCells";

describe("test function xxx", () => {
  it("should return array", () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ];
    const matrixNew = [
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ];

    const matrixRes = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(searchForDeadCells(matrix, matrixNew)).toEqual(matrixRes);
  });
});
