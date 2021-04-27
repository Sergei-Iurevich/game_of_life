import { createMatrix } from "./createMatrix";

describe("test function createMatrix", () => {
  let el;
  let table: HTMLTableElement;
  beforeEach(() => {
    el = document.createElement("div");
    el.innerHTML = `<table>
                              <tr>
                                <td style="background-color: grey"></td>
                                <td style="background-color: grey"></td>
                                <td style="background-color: grey"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                               </tr>
                        </table>`;
    table = el.querySelector("table") as HTMLTableElement;
  });

  it("is function", () => {
    expect(typeof createMatrix).toBe("function");
  });

  it("should return array", () => {
    const result = createMatrix(table);
    const matrix = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(result).toEqual(matrix);
  });
});
