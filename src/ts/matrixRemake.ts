import { sumNeighbors } from "./sumNeighbors";
import { arrayOfIndexNeighbors } from "./arrayOfIndexNeighbors";

export function matrixRemake(matrix: number[][]): number[][] {
  const n = matrix.length;
  const m = matrix[0].length;
  const matrixRes = [];
  for (let i = 0; i < n; i++) {
    const matrixJ = [];
    for (let j = 0; j < m; j++) {
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
