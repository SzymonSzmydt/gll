import gen from "./gen.module.css";
import { Window } from "../../../../components/windows/Window";
import { Ball } from "../../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";
import { Dispatch, SetStateAction, useState } from "react";
import { DataWithDraw } from "../../../../context/redux/dbSlice";
import { Minus } from "../../../../components/buttons/Minus";
import { Plus } from "../../../../components/buttons/Plus";

type NumberSelectionProps = {
  min: number;
  max: number;
  setData: Dispatch<SetStateAction<DataWithDraw>>;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  data50: DataWithDraw[];
};

export function NumberSelection({
  min,
  max,
  setData,
  setIsVisible,
  data50,
}: NumberSelectionProps) {
  const [minimum, setMinimum] = useState(min);
  const [maximum, setMaximum] = useState(max);
  const keys = useSelector((state: RootState) => state.database.keys);
  const data12 = useSelector((state: RootState) => state.database.data12);

  const handleClick = (item: DataWithDraw) => {
    setIsVisible(true);
    setData(item);
  };

  const handleCounterMin = (type: string) => {
    if (type === "plus") {
      return minimum < maximum ? setMinimum((state) => state + 1) : null;
    }
    if (type === "minus") {
      return minimum > 1 ? setMinimum((state) => state - 1) : null;
    }
  };

  const handleCounterMax = (type: string) => {
    if (type === "plus") {
      setMaximum((state) => state + 1);
    }
    if (type === "minus") {
      return maximum > minimum ? setMaximum((state) => state - 1) : null;
    }
  };

  return (
    <div className={gen.numberSelection}>
      <Window>
        <section className={gen.counter}>
          Liczby, które wypadły od
          <Plus handleClick={() => handleCounterMin("plus")} />
          <span className={gen.green}> {minimum} </span>
          <Minus handleClick={() => handleCounterMin("minus")} />
          do
          <Plus handleClick={() => handleCounterMax("plus")} />
          <span className={gen.green}> {maximum} </span>
          <Minus handleClick={() => handleCounterMax("minus")} />
          losowania.
        </section>
        <span className={gen.small}> Losowanie standardowe 1 z 50 </span>
        <div className={gen.black}>
          {data50.map((e) =>
            e.draw[e.draw.length - 1] >= minimum &&
            e.draw[e.draw.length - 1] <= maximum ? (
              <Ball key={e.num} handleClick={() => handleClick(e)}>
                {e.num}
              </Ball>
            ) : null
          )}
        </div>
        <span className={gen.small}> Losowanie dodatkowe 1 z 12 </span>
        <div className={gen.black}>
          {data12.map((e) =>
            e.draw[e.draw.length - 1] >= minimum &&
            e.draw[e.draw.length - 1] <= maximum &&
            !e.date.includes(keys[keys.length - 1]) ? (
              <Ball key={e.num} handleClick={() => handleClick(e)}>
                {e.num}
              </Ball>
            ) : null
          )}
        </div>
      </Window>
    </div>
  );
}
