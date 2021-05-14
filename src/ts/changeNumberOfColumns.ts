export function changeNumberOfColumns(
  table: HTMLTableElement,
  inputForColumns: HTMLInputElement
): void {
  const inputValue = Number(inputForColumns.value);
  const numberOfRows = table.rows.length;
  const numberOfColumns = table.rows[0].cells.length;
  if (inputValue > numberOfColumns) {
    for (let i = 0; i < numberOfRows; i++) {
      const row = table.rows[i];
      for (let j = numberOfColumns; j < inputValue; j++) {
        row.insertCell();
      }
    }
  } else {
    for (let i = 0; i < numberOfRows; i++) {
      const row = table.rows[i];
      const indexLastColumn = numberOfColumns - 1;
      for (let j = indexLastColumn; j >= inputValue; j--) {
        row.deleteCell(j);
      }
    }
  }
}
