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
  const [data, setData] = useState<DataWithDraw>({} as DataWithDraw);
  const keys = useSelector((state: RootState) => state.database.keys);
  const data50 = useSelector((state: RootState) => state.database.data50);
  const data12 = useSelector((state: RootState) => state.database.data12);

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
          <div className={ctr.black}>
            {data50.map((e) =>
              e.draw[e.draw.length - 1] >= 15 &&
              !e.date.includes(keys[keys.length - 1]) ? (
                <Ball key={e.num} handleClick={() => handleClick(e)}>
                  {e.num}{" "}
                </Ball>
              ) : null
            )}
          </div>
        </Window>
        <Window>
          <span className={ctr.small}> Losowanie dodatkowe 1 z 12 </span>
          <div className={ctr.black}>
            {data12.map((e) =>
              !e.date.includes(keys[keys.length - 1]) &&
              e.draw[e.draw.length - 1] >= 8 ? (
                <Ball key={e.num} handleClick={() => handleClick(e)}>
                  {e.num}{" "}
                </Ball>
              ) : null
            )}
          </div>
        </Window>
        {isVisible ? (
          <DetailedInstances
            data={data}
            handleClose={() => setIsVisible(false)}
          />
        ) : null}
      </section>
    </>
  );
}
