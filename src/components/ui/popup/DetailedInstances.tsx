import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";
import { Ball } from "../../buttons/Ball";
import popup from "./popup.module.css";
import { SingleTable } from "../tables/SingleTable";
import { numberSort } from "../../../context/hooks/simple";
import { Line } from "../../charts/Line";
import { DataWithDraw } from "../../../context/redux/dbSlice";
import { Bar } from "../../charts/Bar";
import { useRef, useEffect } from "react";

type Data = {
  id: number[];
  draw: number[];
  num: number;
  date: string[];
};
type DetailedProps = {
  data: Data;
  handleClose: () => void;
  db: DataWithDraw[];
};
export function DetailedInstances({ handleClose, data, db }: DetailedProps) {
  const sortedId = numberSort(Array(...data.id));
  const scrollRef = useRef<HTMLHRElement | null>(null);

  const chartDataStructure = data.draw.map((e, i) => ({
    x: data["id"][i],
    y: e,
  }));

  const lineChartData = {
    id: `Liczba ${data.num}`,
    data: chartDataStructure,
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });

  return (
    <WindowWithCloseBtn handleClose={handleClose}>
      <div className={popup.flex} ref={scrollRef}>
        <section>
          <div className={popup.p}>
            Liczba <Ball> {data.num} </Ball> wystąpiła&nbsp;
            <span className={popup.accent}>{data.date.length}</span> razy.
            <br />
            <span className={popup.small}>
              Miejsce: &nbsp;
              <span className={popup.accent}>
                {db
                  .map((e, i) => (e.num === data.num ? i + 1 : "X"))
                  .filter((e) => e !== "X")}
                / {db.length}
              </span>
            </span>
          </div>
          <div className={popup.flex}>
            <SingleTable name={"Losowanie"} data={sortedId} />
            <SingleTable name={"Data"} data={Array(...data.date).sort()} />
            <SingleTable name={"Wystąpienie"} data={data.draw} />
          </div>
        </section>
        <div>
          <section className={popup.chart}>
            <Line data={lineChartData} />
          </section>
          <section className={popup.chart}>
            <Bar data={chartDataStructure} />
          </section>
        </div>
      </div>
    </WindowWithCloseBtn>
  );
}
