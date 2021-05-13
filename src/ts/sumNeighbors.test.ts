import { sumNeighbors } from "./sumNeighbors";

describe("testing function sumItemsOfMatrix", () => {
  it("is function", () => {
    expect(typeof sumNeighbors).toBe("function");
  });
  it("returns sum of items of array", () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const matrixOfIndex = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    expect(sumNeighbors(matrix, matrixOfIndex)).toBe(3);
  });
});
