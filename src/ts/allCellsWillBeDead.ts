export function allCellsWillBeDead(matrix: number[][]): boolean {
  const result = matrix.toString().indexOf("1");
  if (result === -1) {
    return true;
  }
  return false;
}
