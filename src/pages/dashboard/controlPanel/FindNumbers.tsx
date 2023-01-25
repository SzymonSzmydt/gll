import ctr from "./control.module.css";
import { Window } from "../../../components/windows/Window";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Ball } from "../../../components/buttons/Ball";
import { DataWithDraw } from "../../../context/redux/dbSlice";
import { BlackArea } from "../../../components/ui/BlackArea";

type FindNumbersProps = {
  data50: DataWithDraw[];
};

export function FindNumbers({ data50 }: FindNumbersProps) {
  const db = useSelector((state: RootState) => state.database.value);

  const autoFindWinerNumber = () => {
    const check = (n: number) =>
      data50
        .map((e) => (e.draw.at(-1) === n ? e.num : "X"))
        .filter((e) => e !== "X");

    const customNumberArr = db
      .filter((e) => e.id === db.length)
      .map((e) => e.normal2)
      .flat()
      .sort((a, b) => b - a);
    const customNumber = Math.round(customNumberArr.reduce((a, b) => a / b));
    const arrPartOne = Array.from(
      { length: customNumberArr[customNumberArr.length - 1] },
      (_, i) => customNumber
    );
    const poartTwo = arrPartOne?.reduce((a, b) => a * b);
    const partThree = poartTwo + customNumber;
    const partFour = poartTwo - customNumber + partThree;
    const result = Array.from(
      new Set([...arrPartOne, poartTwo, partThree, partFour])
    );
    return { data: result.map((e) => check(e)), occures: result };
  };

  return db.length > 0 ? (
    <Window shadow={true}>
      Losowania:
      {autoFindWinerNumber().occures.map((e) => (
        <div className={ctr.border} key={e}>
          {e}
        </div>
      ))}
      {autoFindWinerNumber().data.map((e, i) => (
        <BlackArea>
          {e.map((s) => (
            <Ball key={s}> {s} </Ball>
          ))}
        </BlackArea>
      ))}
    </Window>
  ) : null;
}
