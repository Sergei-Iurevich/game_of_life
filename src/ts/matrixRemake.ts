import { sumNeighbors } from "./sumNeighbors";
import { arrayOfIndexNeighbors } from "./arrayOfIndexNeighbors";

export function matrixRemake(matrix: number[][]): number[][] {
  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;
  const matrixRes = [];
  for (let i = 0; i < numberOfRows; i++) {
    const matrixJ = [];
    for (let j = 0; j < numberOfColumns; j++) {
      const sum = sumNeighbors(matrix, arrayOfIndexNeighbors(i, j));
      if (sum === 2) {
        matrixJ.push(matrix[i][j]);
      } else if (sum === 3) {
        matrixJ.push(1);
      } else {
        matrixJ.push(0);
      }
    }
    matrixRes.push(matrixJ);
  }
  return matrixRes;
}
