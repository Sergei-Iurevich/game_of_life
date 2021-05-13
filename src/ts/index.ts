import "../css/style.css";
import { startGame } from "./startGame";
import "./initListenerForInputs";

const app = document.querySelector(".app") as HTMLDivElement;
const buttonStartGame = app.querySelector(
  ".controls__button"
) as HTMLButtonElement;
const table = app.querySelector("table") as HTMLTableElement;
const inputRange = app.querySelector("#range") as HTMLInputElement;
const label = app.querySelector("#label") as HTMLLabelElement;
label.innerText = inputRange.value;
export const arrayMatrix: number[][][] = [];
const pause = {
  status: false,
};

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
