import ctr from "./control.module.css";
import { Window } from "../../../components/windows/Window";
import { DataWithDraw } from "../../../context/redux/dbSlice";

type PairsProps = {
  data50: DataWithDraw[];
};

export function Pairs({ data50 }: PairsProps) {
  return (
    <Window>
      <p> Wykres przedstawia wystąpienia wszystkich liczb </p>
      <div className={ctr.chart}></div>
    </Window>
  );
}
