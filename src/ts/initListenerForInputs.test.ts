describe("test initListenerForInputs", () => {
  let inputForRow: HTMLInputElement;
  let inputForColumns: HTMLInputElement;
  let table: HTMLTableElement;
  beforeAll(() => {
    document.body.innerHTML = `<div class="app">
                            <div>
                                <input
                                  type="number"
                                  class="controls__input-vertical"
                                  min="3"
                                  max="20"
                                  value="3"
                                />
                                <input
                                  type="number"
                                  class="controls__input-horizontal"
                                  min="3"
                                  max="20"
                                  value="3"
                                />
                                <button value="start1">
                                    start
                                </button>
                            </div>
                            <table>
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
                        </div>`;
    inputForRow = document.querySelector(
      ".controls__input-vertical"
    ) as HTMLInputElement;
    inputForColumns = document.querySelector(
      ".controls__input-horizontal"
    ) as HTMLInputElement;
    table = document.querySelector("table") as HTMLTableElement;
    // eslint-disable-next-line global-require
    require("./initListenerForInputs");
  });
  afterEach(() => {
    inputForRow.value = "3";
    inputForColumns.value = "3";
  });
  it("test for rows of table, with an increase of 1", () => {
    inputForRow.stepUp();
    inputForRow.dispatchEvent(new Event("change"));
    expect(inputForRow.value).toBe("4");
    expect(table.rows.length).toBe(4);
  });
  it("test for columns of table, with an increase of 1", () => {
    inputForColumns.stepUp();
    inputForColumns.dispatchEvent(new Event("change"));
    expect(inputForColumns.value).toBe("4");
    expect(table.rows[0].cells.length).toBe(4);
  });
  it("test for rows of table, with an increase of 5", () => {
    inputForRow.value = "10";
    inputForRow.dispatchEvent(new Event("change"));
    expect(table.rows.length).toBe(10);
  });
  it("test for rows of table, decreasing by 5", () => {
    inputForRow.value = "10";
    inputForRow.dispatchEvent(new Event("change"));
    inputForRow.value = "5";
    inputForRow.dispatchEvent(new Event("change"));
    expect(table.rows.length).toBe(5);
  });
  it("test for columns of table, decreasing by 5", () => {
    inputForColumns.value = "10";
    inputForColumns.dispatchEvent(new Event("change"));
    inputForColumns.value = "5";
    inputForColumns.dispatchEvent(new Event("change"));
    expect(table.rows[0].cells.length).toBe(5);
  });
});
