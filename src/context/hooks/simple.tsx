import { DataWithDraw } from "../redux/dbSlice";
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

export const addLastDrawPropperties = (
  item: DataWithDraw[],
  n: number
): DataWithDraw[] => {
  const keysCopy = structuredClone(item);
  for (let key of keysCopy) {
    if (key.id.at(-1) === n) {
      key.draw = key.draw.concat([0]);
    } else {
      const x = n - key.id.at(-1);
      key.draw = key.draw.concat([x]);
    }
  }
  return keysCopy;
};
