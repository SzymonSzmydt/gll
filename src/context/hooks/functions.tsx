import { Db } from "../redux/dbSlice";
export const arrayGenerator = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1);

export type howManyOccursVoid = {
  num: number;
  date: string[];
};

export function howManyOccured(
  n: number,
  data: readonly Db[]
): howManyOccursVoid {
  const countOccures = data
    .map((e: any) =>
      e["normal1"].includes(n) ? { num: n, date: e.date } : null
    )
    .filter((e: any) => e != null);
  const date: string[] = [];
  let num: any;
  countOccures.forEach((e: any) => {
    date.push(e.date);
    num = e.num;
  });
  return { num: num, date: date };
}
