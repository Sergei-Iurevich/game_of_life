export function changeNumberOfRows(
  table: HTMLTableElement,
  inputForRows: HTMLInputElement
): void {
  const inputValue = Number(inputForRows.value);
  const numberOfRows = table.rows.length;
  const numberOfColumns = table.rows[0].cells.length;
  if (inputValue > table.rows.length) {
    for (let i = numberOfRows; i < inputValue; i++) {
      const newRow = table.insertRow();
      for (let j = 0; j < numberOfColumns; j++) {
        newRow.insertCell(j);
      }
    }
  } else {
    const indexLastRow = numberOfRows - 1;
    for (let i = indexLastRow; i >= inputValue; i--) {
      table.deleteRow(i);
    }
  }
}
