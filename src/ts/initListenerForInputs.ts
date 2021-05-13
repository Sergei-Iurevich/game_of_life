import { changeNumberOfRows } from "./changeNumberOfRows";
import { changeNumberOfColumns } from "./changeNumberOfColumns";
import { arrayMatrix } from "./index";

const app = document.querySelector(".app") as HTMLDivElement;
const inputForRows = app.querySelector(
  ".controls__input-vertical"
) as HTMLInputElement;
const inputForColumns = app.querySelector(
  ".controls__input-horizontal"
) as HTMLInputElement;
const table = app.querySelector("table") as HTMLTableElement;

inputForRows.addEventListener("change", () => {
  arrayMatrix.length = 0;
  if (Number(inputForRows.value) > 3) {
    changeNumberOfRows(table, inputForRows);
  } else {
    inputForRows.value = "3";
    changeNumberOfRows(table, inputForRows);
  }
});

inputForColumns.addEventListener("change", () => {
  arrayMatrix.length = 0;
  if (Number(inputForColumns.value) > 3) {
    changeNumberOfColumns(table, inputForColumns);
  } else {
    inputForColumns.value = "3";
    changeNumberOfColumns(table, inputForColumns);
  }
});
