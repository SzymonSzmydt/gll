import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";
import { Ball } from "../../buttons/Ball";
import popup from "./popup.module.css";
import { SingleTable } from "../tables/SingleTable";
import { minSort, createDrawNumbers } from "../../../context/hooks/simple";

type Data = {
  id: number[];
  num: number;
  date: string[];
};
type DetailedProps = {
  data: Data;
  handleClose: () => void;
};
export function DetailedInstances({ handleClose, data }: DetailedProps) {
  const sortedId = minSort(data.id);
  const drawID = createDrawNumbers(sortedId);
  return (
    <WindowWithCloseBtn handleClose={handleClose}>
      <p className={popup.p}>
        Liczba <Ball> {data.num} </Ball> wystąpiła
        <span className={popup.accent}>{data.date.length}</span> razy.
      </p>
      <section className={popup.flex}>
        <SingleTable data={sortedId} name={"Losowanie"} />
        <SingleTable
          id={data.id}
          num={data.num}
          data={data.date.sort()}
          name={"Data"}
        />
        <SingleTable name={"Odstęp"} data={drawID} />
      </section>
    </WindowWithCloseBtn>
  );
}
