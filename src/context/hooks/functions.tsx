import { Db } from "../redux/dbSlice";
export const arrayGenerator = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1);

export const howManyOccured = (n: number, data: Db[]) =>
  data
    .map((e: any) =>
      e["normal1"].includes(n) ? { num: n, date: e.date } : null
    )
    .filter((e: any) => e != null);
