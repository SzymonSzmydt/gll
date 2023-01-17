import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";
import { Ball } from "../../buttons/Ball";
import popup from "./popup.module.css";
import { SingleTable } from "../tables/SingleTable";
import { numberSort } from "../../../context/hooks/simple";
import { Line } from "../../charts/Line";

type Data = {
  id: number[];
  draw: number[];
  num: number;
  date: string[];
};
type DetailedProps = {
  data: Data;
  handleClose: () => void;
};
export function DetailedInstances({ handleClose, data }: DetailedProps) {
  const sortedId = numberSort(Array(...data.id));

  return (
    <WindowWithCloseBtn handleClose={handleClose}>
      <div className={popup.flex}>
        <section>
          <div className={popup.p}>
            Liczba <Ball> {data.num} </Ball> wystąpiła&nbsp;
            <span className={popup.accent}>{data.date.length}</span> razy.
          </div>
          <section className={popup.flex}>
            <SingleTable data={sortedId} name={"Losowanie"} />
            <SingleTable
              id={data.id}
              num={data.num}
              data={Array(...data.date).sort()}
              name={"Data"}
            />
            <SingleTable name={"Wystąpienie"} data={data.draw} />
          </section>
        </section>
        <section className={popup.chart}>
          <Line />
        </section>
      </div>
    </WindowWithCloseBtn>
  );
}
