describe("test initListeners", () => {
  let inputForRow: HTMLInputElement;
  let inputForColumns: HTMLInputElement;
  let buttonStartGame: HTMLButtonElement;
  let table: HTMLTableElement;
  beforeEach(() => {
    jest.resetModules();
    window.alert = jest.fn();
    jest.useFakeTimers();
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
                                <button class="controls__button">
                                    start
                                </button>
                            </div>
                            <div class="input-range">
                                <input
                                  id="range"
                                  type="range"
                                  list="tickmarks"
                                  name="volume"
                                  min="1"
                                  max="10"
                                  value="3"
                                />
                                <datalist id="tickmarks">
                                  <option value="1"></option>
                                  <option value="2"></option>
                                  <option value="3"></option>
                                  <option value="4"></option>
                                  <option value="5"></option>
                                  <option value="6"></option>
                                  <option value="7"></option>
                                  <option value="8"></option>
                                  <option value="9"></option>
                                  <option value="10"></option>
                                </datalist>
                                <label id="label" for="range"></label>
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
    buttonStartGame = document.querySelector(
      ".controls__button"
    ) as HTMLButtonElement;
    table = document.querySelector("table") as HTMLTableElement;
    // eslint-disable-next-line global-require
    require("./initListeners");
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
  it("testing the addEventListener for buttonStartGame", () => {
    const event = new Event("click");
    buttonStartGame.dispatchEvent(event);
    expect(buttonStartGame.innerText).toBe("stop");
  });
  it("a periodic configuration will be formed", () => {
    const event = new Event("click", { bubbles: true });
    table.rows[0].cells[0].dispatchEvent(event);
    table.rows[0].cells[1].dispatchEvent(event);
    table.rows[1].cells[0].dispatchEvent(event);
    table.rows[1].cells[1].dispatchEvent(event);
    buttonStartGame.dispatchEvent(event);
    jest.runAllTimers();
    expect(buttonStartGame.innerText).toBe("stop");
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(window.alert).toBeCalledWith("A periodic configuration is formed");
  });
  it("all cells will be dead", () => {
    const event = new Event("click", { bubbles: true });
    table.rows[0].cells[0].dispatchEvent(event);
    table.rows[0].cells[1].dispatchEvent(event);
    table.rows[0].cells[2].dispatchEvent(event);
    table.rows[1].cells[0].dispatchEvent(event);
    table.rows[1].cells[1].dispatchEvent(event);
    buttonStartGame.dispatchEvent(event);
    jest.runAllTimers();
    expect(buttonStartGame.innerText).toBe("stop");
    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(window.alert).toBeCalledWith("All cells are dead");
  });
});
