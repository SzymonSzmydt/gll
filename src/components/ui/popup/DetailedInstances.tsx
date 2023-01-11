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
      <p>
        Liczba <Ball> {data.num} </Ball> wystąpiła {data.date.length} razy.
      </p>
      <section>
        <div className={popup.box}>
          <div className={popup.border}>Data</div>
          {data.date.sort().map((e) => (
            <div className={popup.nth}> {e} </div>
          ))}
        </div>
      </section>
    </WindowWithCloseBtn>
  );
}
