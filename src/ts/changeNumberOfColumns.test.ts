import { changeNumberOfColumns } from "./changeNumberOfColumns";

describe("test function changeNumberOfColumns", () => {
  let el: HTMLDivElement;
  let table: HTMLTableElement;
  let inputNumber: HTMLInputElement;
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
                        </table>
                        `;
    table = el.querySelector("table") as HTMLTableElement;
  });
  it("should return number rows minus one", () => {
    const div = document.createElement("div");
    div.innerHTML = `<input type="number" value="2" />`;
    el.append(div);
    inputNumber = el.querySelector("input") as HTMLInputElement;
    changeNumberOfColumns(table, inputNumber);
    expect(table.rows[0].cells.length).toBe(2);
  });
  it("should return number rows plus one", () => {
    const div = document.createElement("div");
    div.innerHTML = `<input type="number" value="4" />`;
    el.append(div);
    inputNumber = el.querySelector("input") as HTMLInputElement;
    changeNumberOfColumns(table, inputNumber);
    expect(table.rows[0].cells.length).toBe(4);
  });
});
