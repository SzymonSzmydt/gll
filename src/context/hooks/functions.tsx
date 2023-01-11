import { Db } from "../redux/dbSlice";
export const arrayGenerator = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1);

export type howManyOccursVoid = {
  id: number[];
  num: number;
  date: string[];
};

export function howManyOccured(
  n: number,
  data: Db[],
  name: string
): howManyOccursVoid {
  const countOccures = data
    .map((e: any) =>
      e[name].includes(n) ? { id: e.id, num: n, date: e.date } : null
    )
    .filter((e: any) => e != null);
  return {
    id: countOccures.map((e: any) => e.id).sort(),
    num: countOccures.map((e: any) => e.num)[0],
    date: countOccures.map((e: any) => e.date),
  };
}

export const sortedOccured = (
  lengths: number,
  name: string,
  db: Db[]
): howManyOccursVoid[] =>
  arrayGenerator(lengths)
    .map((e: number) => howManyOccured(e, db, name))
    .sort((a, b) => b["date"].length - a["date"].length);
