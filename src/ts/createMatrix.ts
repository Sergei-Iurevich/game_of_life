export function createMatrix(table: HTMLTableElement): number[][] {
  const { rows } = table;
  const z = [];
  for (let i = 0; i < rows.length; i++) {
    const { cells } = rows[i];
    const p = [];
    for (let j = 0; j < cells.length; j++) {
      if (
        cells[j].style.backgroundColor === "grey" ||
        cells[j].style.backgroundColor === "blue"
      ) {
        p.push(1);
      } else {
        p.push(0);
      }
    }
    z.push(p);
  }
  return z;
}
