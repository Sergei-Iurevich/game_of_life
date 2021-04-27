export function drawTable(
  table: HTMLTableElement,
  array: number[][],
  color: string
): void {
  const { rows } = table;
  const n = array.length;
  const m = array[0].length;
  for (let i = 0; i < n; i++) {
    const { cells } = rows[i];
    for (let j = 0; j < m; j++) {
      if (array[i][j] === 1) {
        cells[j].style.backgroundColor = color;
      } else if (color !== "blue") {
        cells[j].style.backgroundColor = "white";
      }
    }
  }
}
