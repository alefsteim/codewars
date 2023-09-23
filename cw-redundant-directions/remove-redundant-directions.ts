export function dirReduc(arr: string[]): string[] {
  let i = 0;
  while (i < arr.length) {
    i = i === 0 ? i++ : i;
    switch (arr[i]) {
      case "NORTH":
        i = updateArray(arr, i, "SOUTH");
        continue;
      case "SOUTH":
        i = updateArray(arr, i, "NORTH");
        continue;
      case "EAST":
        i = updateArray(arr, i, "WEST");
        continue;
      case "WEST":
        i = updateArray(arr, i, "EAST");
        continue;
      default:
        continue;
    }
  }
  return arr;
}

function updateArray(arr: string[], index: number, target: string): number {
  if (arr[index - 1] == target) {
    arr.splice(index - 1, 2);
    index--;
  } else {
    index++;
  }
  return index;
}

export function dirReducStringSolution(arr: string[]): string[] {
  var pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
  var way = arr.join("");
  while (pat.test(way)) way = way.replace(pat, "");
  return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
