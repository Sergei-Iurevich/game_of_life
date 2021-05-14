import { drawTable } from "./drawTable";

describe("test function drawTable", () => {
  let el;
  let table: HTMLTableElement;
  beforeEach(() => {
    el = document.createElement("div");
    el.innerHTML = `<table>
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
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                               </tr>
                        </table>`;
    table = el.querySelector("table") as HTMLTableElement;
  });

  it("is function", () => {
    expect(typeof drawTable).toBe("function");
  });

  it("is work", () => {
    const matrix = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    drawTable(table, matrix, "grey");
    const td = table.querySelectorAll("td");
    [
      [td[0].style.backgroundColor, "white"],
      [td[1].style.backgroundColor, "grey"],
      [td[2].style.backgroundColor, "white"],
      [td[3].style.backgroundColor, "white"],
      [td[4].style.backgroundColor, "grey"],
      [td[5].style.backgroundColor, "white"],
      [td[6].style.backgroundColor, "white"],
      [td[7].style.backgroundColor, "grey"],
      [td[8].style.backgroundColor, "white"],
    ].forEach((testCase) => {
      expect(testCase[0]).toBe(testCase[1]);
    });
  });
});
