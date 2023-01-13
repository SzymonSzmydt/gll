export const numberSort = (element: any[]): number[] =>
  element.sort((a: any, b: any) => a - b);

export const createDrawNumbers = (n: number[]): number[] =>
  n
    .map((a: any, i: number, arr: any[]) => arr[i + 1] - a)
    .filter((e, i) => i < n.length - 1);

export const addDrawProperties = (item: any[]) => {
  for (let key of item) {
    key.draw = createDrawNumbers(numberSort(key.id));
  }
  return item;
};
