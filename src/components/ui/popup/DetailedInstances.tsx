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

  const lineChartData = {
    id: `Liczba ${data.num}`,
    data: data.draw.map((e, i) => ({ x: data["id"][i], y: e })),
  };

  return (
    <WindowWithCloseBtn handleClose={handleClose}>
      <div className={popup.flex}>
        <section>
          <div className={popup.p}>
            Liczba <Ball> {data.num} </Ball> wystąpiła&nbsp;
            <span className={popup.accent}>{data.date.length}</span> razy.
          </div>
          <div className={popup.flex}>
            <SingleTable name={"Losowanie"} data={sortedId} />
            <SingleTable name={"Data"} data={Array(...data.date).sort()} />
            <SingleTable name={"Wystąpienie"} data={data.draw} />
          </div>
        </section>
        <section className={popup.chart}>
          <Line data={lineChartData} />
        </section>
      </div>
    </WindowWithCloseBtn>
  );
}
