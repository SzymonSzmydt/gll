import { Window } from "../../../components/windows/Window";
import { Db, DataWithDraw } from "../../../context/redux/dbSlice";

type PairsProps = {
  db: Db[];
  data50: DataWithDraw[];
};

export function Pairs({ db, data50 }: PairsProps) {
  return (
    <Window shadow={true}>
      <p>asdas</p>
    </Window>
  );
}
