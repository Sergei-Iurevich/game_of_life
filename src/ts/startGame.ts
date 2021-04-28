import { createMatrix } from "./createMatrix";
import { matrixRemake } from "./matrixRemake";
import { allCellsWillBeDead } from "./allCellsWillBeDead";
import { drawTable } from "./drawTable";
import { searchForDeadCells } from "./searchForDeadCells";

export function startGame(
  objPause: { status: boolean },
  table: HTMLTableElement,
  inputRange: HTMLInputElement
): void {
  const statusPause = objPause.status;
  if (!statusPause) {
    const matrix = createMatrix(table);
    const matrixNew = matrixRemake(matrix);
    if (!allCellsWillBeDead(matrix)) {
      const delay = 1000 / Number(inputRange.value);
      drawTable(table, matrixNew, "grey");
      drawTable(
        table,
        searchForDeadCells(matrixNew, matrixRemake(matrixNew)),
        "blue"
      );
      setTimeout(() => {
        startGame(objPause, table, inputRange);
      }, delay);
    } else {
      alert("all cells are dead");
    }
  }
}
