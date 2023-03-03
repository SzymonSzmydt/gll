import { Window } from "../../../components/windows/Window";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Ball } from "../../../components/buttons/Ball";
import { DataWithDraw } from "../../../context/redux/dbSlice";
import { BlackArea } from "../../../components/ui/BlackArea";
import { DetailedInstances } from "../../../components/ui/popup/DetailedInstances";
import { useState } from "react";

type FindNumbersProps = {
  data50: DataWithDraw[];
};

export function FindNumbers({ data50 }: FindNumbersProps) {
  const [detailedData, setDetailedData] = useState<DataWithDraw>(
    {} as DataWithDraw
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const db = useSelector((state: RootState) => state.database.value);

  const one = data50.filter(
    (e, i) =>
      e.draw[e.draw.length - 3] > e.draw[e.draw.length - 1] &&
      e.draw[e.draw.length - 4] + e.draw[e.draw.length - 2] ===
        e.draw[e.draw.length - 1]
  );

  const theSameNumbers = data50.filter(
    (e, i) =>
      e.draw[e.draw.length - 3] < e.draw[e.draw.length - 1] &&
      e.draw[e.draw.length - 2] < e.draw[e.draw.length - 1] &&
      e.draw[e.draw.length - 3] + e.draw[e.draw.length - 2] ===
        e.draw[e.draw.length - 1]
  );

  const two = data50.filter(
    (e, i) => e.draw[e.draw.length - 2] === e.draw[e.draw.length - 1] + 1
  );

  const three = data50.filter(
    (e, i) => e.draw[e.draw.length - 2] === e.draw[e.draw.length - 1]
  );

  const five = data50.filter((e, i) => valid(e.draw));

  const handleClick = (item: DataWithDraw) => {
    setDetailedData(item);
    setIsPopupVisible(true);
  };

  return db.length > 0 ? (
    <>
      <Window shadow={true}>
        Propsozycje:
        <BlackArea>
          {one.map((m) => (
            <Ball key={m.num} handleClick={() => handleClick(m)}>
              {m.num}
            </Ball>
          ))}
        </BlackArea>
        <BlackArea>
          {theSameNumbers.map((m) => (
            <Ball key={m.num} handleClick={() => handleClick(m)}>
              {m.num}
            </Ball>
          ))}
        </BlackArea>
        <BlackArea>
          {two.map((m) => (
            <Ball key={m.num} handleClick={() => handleClick(m)}>
              {m.num}
            </Ball>
          ))}
        </BlackArea>
        <BlackArea>
          {three.map((m) => (
            <Ball key={m.num} handleClick={() => handleClick(m)}>
              {m.num}
            </Ball>
          ))}
        </BlackArea>
        <BlackArea>
          {five.map((m) => (
            <Ball key={m.num} handleClick={() => handleClick(m)}>
              {m.num}
            </Ball>
          ))}
        </BlackArea>
      </Window>
      {isPopupVisible ? (
        <DetailedInstances
          handleClose={() => setIsPopupVisible(false)}
          data={detailedData}
          db={data50}
        />
      ) : null}
    </>
  ) : null;
}

function valid(draw: number[]): boolean {
  let a: number = Math.round(draw[draw.length - 4] / draw[draw.length - 3]);
  let b: number = Math.round(draw[draw.length - 3] / draw[draw.length - 2]);
  let c: number = Math.round(draw[draw.length - 2] / draw[draw.length - 1]);

  for (let i = 0; i < draw.length - 4; i++) {
    let x: number = Math.round(draw[i] / draw[i + 1]);
    let y: number = Math.round(draw[i + 1] / draw[i + 2]);
    let z: number = Math.round(draw[i + 2] / draw[i + 3]);
    if (a === x && b === y && c === z) {
      return true;
    }
  }
  return false;
}
