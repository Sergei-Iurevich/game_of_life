import { matrixRemake } from "./matrixRemake";

describe("testing function matrixRemake", () => {
  it("should return result for not equel array", () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ];
    const matrixRes = [
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ];
    expect(matrixRemake(matrix)).toEqual(matrixRes);
    const matrix1 = [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ];
    const matrixRes1 = [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ];
    expect(matrixRemake(matrix1)).toEqual(matrixRes1);
  });

  it("should return result for equel array", () => {
    const matrix = [[]];
    expect(matrixRemake(matrix)).toEqual([[]]);
  });
});
