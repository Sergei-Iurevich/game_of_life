import { startGame } from "./startGame";

describe("test function startGame", () => {
  const arrayMatrix: number[][][] = [];
  let el: HTMLDivElement;
  let table: HTMLTableElement;
  let inputRange: HTMLInputElement;
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
                        </table>
                        <input
                              id="range"
                              type="range"
                              list="tickmarks"
                              name="volume"
                              min="1"
                              max="10"
                              value="1"
                            />
                        <datalist>
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
                        `;
    table = el.querySelector("table") as HTMLTableElement;
    inputRange = el.querySelector("input") as HTMLInputElement;
  });

  it("is function", () => {
    expect(typeof startGame).toBe("function");
  });

  it("should the end of the game", () => {
    el.innerHTML = `<input
                              id="range"
                              type="range"
                              list="tickmarks"
                              name="volume"
                              min="1"
                              max="10"
                              value="1"
                       />
                        <datalist>
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
                        </table>`;

    table = el.querySelector("table") as HTMLTableElement;
    inputRange = el.querySelector("input") as HTMLInputElement;

    window.alert = jest.fn();
    startGame({ status: false }, table, inputRange, arrayMatrix);
    expect(window.alert).toBeCalled();
    expect(window.alert).toBeCalledWith("All cells are dead");
  });

  it("should drow table", () => {
    startGame({ status: false }, table, inputRange, arrayMatrix);
    const td = table.querySelectorAll("td");
    [
      [td[0].style.backgroundColor, "white"],
      [td[1].style.backgroundColor, "blue"],
      [td[2].style.backgroundColor, "white"],
      [td[3].style.backgroundColor, "white"],
      [td[4].style.backgroundColor, "blue"],
      [td[5].style.backgroundColor, "white"],
      [td[6].style.backgroundColor, "white"],
      [td[7].style.backgroundColor, "white"],
      [td[8].style.backgroundColor, "white"],
    ].forEach((testCase) => {
      expect(testCase[0]).toBe(testCase[1]);
    });
  });
});
