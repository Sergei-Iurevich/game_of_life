import { arrayOfIndexNeighbors } from "./arrayOfIndexNeighbors";

describe("testing function neighbors", () => {
  it("is function", () => {
    expect(typeof arrayOfIndexNeighbors).toBe("function");
  });

  it("returns right array", () => {
    const res = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    expect(arrayOfIndexNeighbors(0, 0)).toEqual(res);
  });
});
