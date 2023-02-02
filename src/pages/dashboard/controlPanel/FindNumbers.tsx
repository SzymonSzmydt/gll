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
  const properties = db[db.length - 1]?.normal2;

  const autoFindEvenNumber = data50.filter(
    (f) =>
      f.draw[f.draw.length - 2] - f.draw[f.draw.length - 3] > 7 &&
      f.draw[f.draw.length - 2] - f.draw[f.draw.length - 1] > 2
  );

  return db.length > 0 ? (
    <Window shadow={true}>
      Losowania:
      <BlackArea>
        {autoFindEvenNumber
          .map((m) => (
            <Ball key={m.num}> {m.num} </Ball>
          ))}
      </BlackArea>
    </Window>
  ) : null;
}
