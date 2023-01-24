import { Db } from "../redux/dbSlice";

export function checkIfNumbersAreInDb(x: number[], db: Db[]) {
  const data = [];
  for (let key of db) {
    let oneArrayChecking = [];
    for (let i = 0; i < x.length; i++) {
      if (key.normal1.includes(x[i])) {
        oneArrayChecking.push(x[i]);
      }
    }
    data.push({ date: key.date, nums: oneArrayChecking });
  }
  return data.filter((e) => e.nums.length > 1);
}
