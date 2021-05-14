import { changeNumberOfRows } from "./changeNumberOfRows";
import { changeNumberOfColumns } from "./changeNumberOfColumns";
import { startGame } from "./startGame";

const arrayMatrix: number[][][] = [];
const pause = {
  status: false,
};

const app = document.querySelector(".app") as HTMLDivElement;
const inputForRows = app.querySelector(
  ".controls__input-vertical"
) as HTMLInputElement;
const inputForColumns = app.querySelector(
  ".controls__input-horizontal"
) as HTMLInputElement;
const buttonStartGame = app.querySelector(
  ".controls__button"
) as HTMLButtonElement;
const table = app.querySelector("table") as HTMLTableElement;
const inputRange = app.querySelector("#range") as HTMLInputElement;
const label = app.querySelector("#label") as HTMLLabelElement;
label.innerText = inputRange.value;

inputForRows.addEventListener("change", () => {
  arrayMatrix.length = 0;
  if (Number(inputForRows.value) > 3) {
    changeNumberOfRows(table, inputForRows);
  } else {
    inputForRows.value = "3";
    changeNumberOfRows(table, inputForRows);
  }
});

inputForColumns.addEventListener("change", () => {
  arrayMatrix.length = 0;
  if (Number(inputForColumns.value) > 3) {
    changeNumberOfColumns(table, inputForColumns);
  } else {
    inputForColumns.value = "3";
    changeNumberOfColumns(table, inputForColumns);
  }
});

buttonStartGame.addEventListener("click", () => {
  if (buttonStartGame.innerText !== "stop") {
    buttonStartGame.innerText = "stop";
    pause.status = false;
    const delayStart = 1000 / Number(inputRange.value);
    setTimeout(() => {
      startGame(pause, table, inputRange, arrayMatrix);
    }, delayStart);
  } else {
    buttonStartGame.innerText = "start";
    pause.status = true;
  }
});

table.addEventListener("click", (e) => {
  if (buttonStartGame.innerText === "stop") {
    buttonStartGame.innerText = "start";
    pause.status = true;
  }
  const cell = e.target as HTMLTableElement;
  if (cell.style.backgroundColor === "grey") {
    cell.style.backgroundColor = "white";
  } else {
    cell.style.backgroundColor = "grey";
  }
});

inputRange.addEventListener("change", () => {
  label.innerText = inputRange.value;
});
