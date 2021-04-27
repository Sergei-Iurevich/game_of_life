export function changeNumberOfRows(
  table: HTMLTableElement,
  inputForRows: HTMLInputElement
): void {
  const inputValue = Number(inputForRows.value);
  const numberOfRows = table.rows.length;
  const numberOfColumns = table.rows[0].cells.length;
  if (inputValue > table.rows.length) {
    const newRow = table.insertRow();
    for (let j = 0; j < numberOfColumns; j++) {
      newRow.insertCell(j);
    }
  } else {
    table.deleteRow(numberOfRows - 1);
  }
}
