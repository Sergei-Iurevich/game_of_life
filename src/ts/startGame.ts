import { createMatrix } from "./createMatrix";
import { matrixRemake } from "./matrixRemake";
import { allCellsWillBeDead } from "./allCellsWillBeDead";
import { drawTable } from "./drawTable";
import { searchForDeadCells } from "./searchForDeadCells";
import { checkForMatches } from "./checkForMatches";

export function startGame(
  objPause: { status: boolean },
  table: HTMLTableElement,
  inputRange: HTMLInputElement,
  array: number[][][]
): void {
  const arrayMatrix = array;
  const statusPause = objPause.status;
  if (!statusPause) {
    const matrix = createMatrix(table);
    const matrixNew = matrixRemake(matrix);
    if (!checkForMatches(arrayMatrix, matrix)) {
      if (!allCellsWillBeDead(matrix)) {
        const delay = 1000 / Number(inputRange.value);
        drawTable(table, matrixNew, "grey");
        drawTable(
          table,
          searchForDeadCells(matrixNew, matrixRemake(matrixNew)),
          "blue"
        );
        setTimeout(() => {
          startGame(objPause, table, inputRange, arrayMatrix);
        }, delay);
        arrayMatrix.push(matrix);
      } else {
        alert("All cells are dead");
        arrayMatrix.length = 0;
      }
    } else {
      alert("A periodic configuration is formed");
      arrayMatrix.length = 0;
    }
  }
}
