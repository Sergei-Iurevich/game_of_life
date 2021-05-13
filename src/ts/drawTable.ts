export function drawTable(
  table: HTMLTableElement,
  array: number[][],
  color: string
): void {
  const { rows } = table;
  for (let i = 0; i < array.length; i++) {
    const { cells } = rows[i];
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === 1) {
        cells[j].style.backgroundColor = color;
      } else if (color !== "blue") {
        cells[j].style.backgroundColor = "white";
      }
    }
  }
}
