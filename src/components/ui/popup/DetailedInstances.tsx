import { WindowWithCloseBtn } from "../../windows/WindowWithCloseBtn";
import { Ball } from "../../buttons/Ball";
import popup from "./popup.module.css";

type Data = {
  num: number;
  date: string[];
};
type DetailedProps = {
  data: Data;
  handleClose: () => void;
};
export function DetailedInstances({ handleClose, data }: DetailedProps) {
  console.log(data);

  return (
    <WindowWithCloseBtn handleClose={handleClose}>
      <p className={popup.p}>
        Liczba <Ball> {data.num} </Ball> wystąpiła
        <span className={popup.accent}>{data.date.length}</span> razy.
      </p>
      <section className={popup.flex}>
        <div className={popup.box}>
          <div className={popup.border}>Data</div>
          {data.date.sort().map((e) => (
            <div className={popup.nth}> {e} </div>
          ))}
        </div>
        <div className={popup.box}>
          <div className={popup.border}>Wystąpienie</div>
        </div>
      </section>
    </WindowWithCloseBtn>
  );
}
