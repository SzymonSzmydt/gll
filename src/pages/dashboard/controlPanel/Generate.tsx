import ctr from "./control.module.css";
import { Ball } from "../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Window } from "../../../components/windows/Window";

export function Generate() {
  const data50 = useSelector((state: RootState) => state.database.data50);
  const data12 = useSelector((state: RootState) => state.database.data12);
  return (
    <div>
      <section className={ctr.positon}>
        <p> Liczby, które najrzadziej wypadły</p>
        <Window>
          <span className={ctr.small}> Losowanie standardowe 1 z 50 </span>
          <hr />
          {data50.map((e) =>
            e.draw[e.draw.length - 1] >= 17 ? (
              <Ball key={e.num}>{e.num} </Ball>
            ) : null
          )}
        </Window>
        <Window>
          <span className={ctr.small}> Losowanie dodatkowe 1 z 12 </span>
          <hr />
          {data12.map((e) =>
            e.draw[e.draw.length - 1] >= 15 ? (
              <Ball key={e.num}>{e.num} </Ball>
            ) : null
          )}
        </Window>
      </section>
    </div>
  );
}
