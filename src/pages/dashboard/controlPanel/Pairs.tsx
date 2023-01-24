import { Window } from "../../../components/windows/Window";
import { Db, DataWithDraw } from "../../../context/redux/dbSlice";

type PairsProps = {
  db: Db[];
  data50: DataWithDraw[];
};

export function Pairs({ db, data50 }: PairsProps) {
  const x = [6, 11, 26, 43, 49];

  function checkIfNumbersAreInDb(x: number[]) {
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

  console.log(checkIfNumbersAreInDb(x));
  return (
    <Window>
      <p> W budowie</p>
    </Window>
  );
}
