// src/fibonacci.js
export const fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0)
    throw new RangeError("solo números enteros ≥ 0");

  if (n < 2) return n;

  let [prev, curr] = [0, 1];
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};