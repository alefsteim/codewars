export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) return null;
  const result: number[] = [];
  while (w > 0 && l > 1) {
    if (l < w) {
      [l, w] = [w, l];
    }
    const count = Math.floor(l / w);
    for (let i = count; i >= 1; i--) {
      result.push(l - (l - w));
    }
    let oldW = w;
    w = l - w * count;
    l = oldW;
  }

  return result;
};

export const sqInRectRecursive = (l: number, w: number): null | number[] => {
  if (l === w) return null;
  return fillArray(l, w);
};
const fillArray = (l: number, w: number): number[] => {
  if (l === 0 || w === 0) return [];
  return l > w ? [w, ...fillArray(l - w, w)] : [l, ...fillArray(w - l, l)];
};
