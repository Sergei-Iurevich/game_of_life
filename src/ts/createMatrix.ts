export function createMatrix(table: HTMLTableElement): number[][] {
  const { rows } = table;
  const matrix = [];
  for (let i = 0; i < rows.length; i++) {
    const { cells } = rows[i];
    const rowOfMatrix = [];
    for (let j = 0; j < cells.length; j++) {
      if (
        cells[j].style.backgroundColor === "grey" ||
        cells[j].style.backgroundColor === "blue"
      ) {
        rowOfMatrix.push(1);
      } else {
        rowOfMatrix.push(0);
      }
    }
    matrix.push(rowOfMatrix);
  }
  return matrix;
}
