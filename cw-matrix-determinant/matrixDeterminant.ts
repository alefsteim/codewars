export function determinant(m: number[][]): number {
  if (m[0].length == 1) {
    return m[0][0];
  }
  if (m[0].length == 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  let accumulator = 0;
  let index = 0;
  for (let elem of m[0]) {
    let sign = index > 0 && index % 2 != 0 ? -1 : 1;
    accumulator += sign * elem * determinant(prepareMatrix(m, index));
    index++;
  }
  return accumulator;
}

function prepareMatrix(matrix: number[][], index: number): number[][] {
  let result = structuredClone(matrix);
  result.splice(0, 1);
  result.forEach((arr) => arr.splice(index, 1));
  return result;
}
