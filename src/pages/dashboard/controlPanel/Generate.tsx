import { dataWithDraw } from "../../../context/redux/dbSlice";
import { Ball } from "../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";

export function Generate() {
  const data50 = useSelector((state: RootState) => state.database.data50);
  const data12 = useSelector((state: RootState) => state.database.data12);
  return (
    <div>
      <section>
        <p> Liczby, które najrzadziej wypadły</p>
        {data50.map((e) =>
          e.draw[e.draw.length - 1] >= 17 ? (
            <Ball key={e.num}>{e.num} </Ball>
          ) : null
        )}
        |
        {data12.map((e) =>
          e.draw[e.draw.length - 1] >= 15 ? (
            <Ball key={e.num}>{e.num} </Ball>
          ) : null
        )}
      </section>
    </div>
  );
}
