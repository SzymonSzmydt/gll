import { Window } from "../../../../components/windows/Window";
import { Ball } from "../../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";
import { Dispatch, SetStateAction } from "react";
import gen from "./gen.module.css";
import { DataWithDraw } from "../../../../context/redux/dbSlice";

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
  const keys = useSelector((state: RootState) => state.database.keys);
  const data12 = useSelector((state: RootState) => state.database.data12);

  const handleClick = (item: DataWithDraw) => {
    setIsVisible(true);
    setData(item);
  };

  return (
    <div className={gen.numberSelection}>
      <Window>
        <section>
          Liczby, które wypadły od {min} do {max} losowań temu.
        </section>
        <span className={gen.small}> Losowanie standardowe 1 z 50 </span>
        <div className={gen.black}>
          {data50.map((e) =>
            e.draw[e.draw.length - 1] > min &&
            e.draw[e.draw.length - 1] < max ? (
              <Ball key={e.num} handleClick={() => handleClick(e)}>
                {e.num}
              </Ball>
            ) : null
          )}
        </div>
        <span className={gen.small}> Losowanie dodatkowe 1 z 12 </span>
        <div className={gen.black}>
          {data12.map((e) =>
            e.draw[e.draw.length - 1] > min &&
            e.draw[e.draw.length - 1] < max &&
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
