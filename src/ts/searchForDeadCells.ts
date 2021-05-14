export function searchForDeadCells(
  matrix: number[][],
  newMatrix: number[][]
): number[][] {
  const matrixOfDeadh = matrix.map((itemI, indexI) => {
    if (itemI.toString() === newMatrix[indexI].toString()) {
      return itemI.map(() => 0);
    }
    // eslint-disable-next-line array-callback-return,consistent-return
    return itemI.map((itemJ, indexJ) => {
      if (itemJ === 1 && newMatrix[indexI][indexJ] === 0) {
        return 1;
      }
      return 0;
    });
  });
  return matrixOfDeadh;
}
