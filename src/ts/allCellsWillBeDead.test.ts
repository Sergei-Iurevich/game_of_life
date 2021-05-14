import { allCellsWillBeDead } from "./allCellsWillBeDead";

describe("test", () => {
  it("should return true", () => {
    const matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(allCellsWillBeDead(matrix)).toBe(true);
  });
  it("should return false", () => {
    const matrix = [
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(allCellsWillBeDead(matrix)).toBe(false);
  });
});
