export function checkForMatches  (arrayMatrix: number[][][], matrix: number[][]): boolean {
    if (arrayMatrix.length > 0) {
        for (let i = 0; i < arrayMatrix.length; i++) {
            if (arrayMatrix[i].toString() === matrix.toString()) {
                return true;
            }
        }
    }
    return false;
}
