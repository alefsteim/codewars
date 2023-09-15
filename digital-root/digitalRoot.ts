export const digitalRoot = (n: number): number => {
  if (n.toString().length === 1) {
    return n;
  }
  return digitalRoot(
    n
      .toString()
      .split("")
      .map((item) => parseInt(item))
      .reduce((sum, item) => sum + item, 0)
  );
};

export function digitalRootShortest(n: number): number {
  return ((n - 1) % 9) + 1;
}
