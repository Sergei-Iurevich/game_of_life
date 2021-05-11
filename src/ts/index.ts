import "../css/style.css";
import {changeNumberOfRows} from "./changeNumberOfRows";
import {changeNumberOfColumns} from "./changeNumberOfColumns";
import {startGame} from "./startGame";

const app = document.querySelector(".app") as HTMLDivElement;
const inputForRows = app.querySelector(
    ".app__input-vertical"
) as HTMLInputElement;
const inputForColumns = app.querySelector(
    ".app__input-horizontal"
) as HTMLInputElement;
const buttonStartGame = app.querySelector(".app__button2") as HTMLButtonElement;
const table = app.querySelector("table") as HTMLTableElement;
const inputRange = app.querySelector("#range") as HTMLInputElement;
const label = app.querySelector("#label") as HTMLLabelElement;
label.innerText = inputRange.value;
const arrayMatrix: number[][][] = [];
const pause = {
    status: false
};

inputForRows.addEventListener("change", () => {
    console.log(inputForRows.value);
    if (Number(inputForRows.value) > 3) {
        changeNumberOfRows(table, inputForRows);
        arrayMatrix.length = 0;
    } else {
        inputForRows.value = "3";
        changeNumberOfRows(table, inputForRows);
    }
});

inputForColumns.addEventListener("change", () => {
    if (Number(inputForColumns.value) > 3) {
        changeNumberOfColumns(table, inputForColumns);
        arrayMatrix.length = 0;
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
