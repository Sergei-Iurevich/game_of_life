export function arrayOfIndexNeighbors(numI: number, numJ: number): number[][] {
  const ar1 = [numI - 1, numI, numI + 1];
  const ar2 = [numJ - 1, numJ, numJ + 1];
  const array = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i !== 1 || j !== 1) {
        const z = [ar1[i], ar2[j]];
        array.push(z);
      }
    }
  }
  return array;
}
