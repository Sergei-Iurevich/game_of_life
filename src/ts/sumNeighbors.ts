export function sumNeighbors(
  matrix: number[][],
  matrixOfIndex: number[][]
): number {
  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;
  const array = [];

  for (let i = 0; i < 8; i++) {
    if (
      matrixOfIndex[i][0] >= 0 &&
      matrixOfIndex[i][0] < numberOfRows &&
      matrixOfIndex[i][1] >= 0 &&
      matrixOfIndex[i][1] < numberOfColumns
    ) {
      array.push(matrix[matrixOfIndex[i][0]][matrixOfIndex[i][1]]);
    }
  }
  return array.reduce((sum, current) => sum + current, 0);
}
