import ctr from "./control.module.css";
import { Ball } from "../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Window } from "../../../components/windows/Window";
import { useState } from "react";
import { DetailedInstances } from "../../../components/ui/popup/DetailedInstances";
import { DataWithDraw } from "../../../context/redux/dbSlice";

export function Generate() {
  const [isVisible, setIsVisible] = useState(false);
  const [rangeValue50, setRangeValue50] = useState(25);
  const [rangeValue12, setRangeValue12] = useState(10);
  const [data, setData] = useState<DataWithDraw>({} as DataWithDraw);
  const keys = useSelector((state: RootState) => state.database.keys);
  const data50 = useSelector((state: RootState) => state.database.data50);
  const data12 = useSelector((state: RootState) => state.database.data12);
  const rangeSize50: number = +(keys.length / 4).toFixed();
  const rangeSize12: number = +(keys.length / 10).toFixed();

  const handleClick = (item: DataWithDraw) => {
    setIsVisible(true);
    setData(item);
  };

  return (
    <>
      <section className={ctr.positon}>
        <p> Liczby, które najrzadziej wypadły</p>
        <Window>
          <span className={ctr.small}> Losowanie standardowe 1 z 50 </span>
          <input
            type="range"
            value={rangeValue50}
            step={1}
            min={rangeSize50 - 7}
            max={rangeSize50 + 7}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRangeValue50(+e.target.value)
            }
          />
          <div className={ctr.black}>
            {data50.map((e) =>
              e.draw[e.draw.length - 1] >= rangeValue50 ? (
                <Ball key={e.num} handleClick={() => handleClick(e)}>
                  {e.num}
                </Ball>
              ) : null
            )}
          </div>
        </Window>
        <Window>
          <span className={ctr.small}> Losowanie dodatkowe 1 z 12 </span>
          <input
            type="range"
            value={rangeValue12}
            step={1}
            min={rangeSize12 - 8}
            max={rangeSize12 + 8}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRangeValue12(+e.target.value)
            }
          />
          <div className={ctr.black}>
            {data12.map((e) =>
              e.draw[e.draw.length - 1] >= rangeValue12 &&
              !e.date.includes(keys[keys.length - 1]) ? (
                <Ball key={e.num} handleClick={() => handleClick(e)}>
                  {e.num}
                </Ball>
              ) : null
            )}
          </div>
        </Window>
        {isVisible ? (
          <DetailedInstances
            data={data}
            handleClose={() => setIsVisible(false)}
            db={data50}
          />
        ) : null}
      </section>
    </>
  );
}
