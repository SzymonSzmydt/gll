import gen from "./gen.module.css";
import { Window } from "../../../../components/windows/Window";
import { Ball } from "../../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";
import { Dispatch, SetStateAction, useState } from "react";
import { DataWithDraw } from "../../../../context/redux/dbSlice";
import { Minus } from "../../../../components/buttons/Minus";
import { Plus } from "../../../../components/buttons/Plus";
import { BlackArea } from "../../../../components/ui/BlackArea";

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
          <Minus handleClick={() => handleCounterMin("minus")} />
          <span className={gen.green}> {minimum} </span>
          <Plus handleClick={() => handleCounterMin("plus")} />
          do
          <Minus handleClick={() => handleCounterMax("minus")} />
          <span className={gen.green}> {maximum} </span>
          <Plus handleClick={() => handleCounterMax("plus")} />
          losowania.
        </section>
        <BlackArea name={"Losowanie standardowe 1 z 50"}>
          {data50.map((e) =>
            e.draw[e.draw.length - 1] >= minimum &&
            e.draw[e.draw.length - 1] <= maximum ? (
              <Ball key={e.num} handleClick={() => handleClick(e)}>
                {e.num}
              </Ball>
            ) : null
          )}
        </BlackArea>
        <BlackArea name={"Losowanie dodatkowe 1 z 12"}>
          {data12.map((e) =>
            e.draw[e.draw.length - 1] >= minimum &&
            e.draw[e.draw.length - 1] <= maximum ? (
              <Ball key={e.num} handleClick={() => handleClick(e)}>
                {e.num}
              </Ball>
            ) : null
          )}
        </BlackArea>
      </Window>
    </div>
  );
}
