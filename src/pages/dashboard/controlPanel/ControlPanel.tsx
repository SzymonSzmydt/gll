import ctr from "./control.module.css";
import { Window } from "../../../components/windows/Window";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Statistics } from "./Statistics";
import { Generate } from "./generate/Generate";
import { useState } from "react";
import { Pairs } from "./Pairs";
import { DataWithDraw } from '../../../context/redux/dbSlice';

type ControlProps = {
  data50: DataWithDraw[];
};

export function ControlPanel({ data50 }: ControlProps) {
  const [nav, setNav] = useState("statistics");
  const db = useSelector((state: RootState) => state.database.value);
  const data12 = useSelector((state: RootState) => state.database.data12);

  return db.length > 0 ? (
    <Window shadow={true}>
      <div className={ctr.control}>
        <Nav setNav={setNav} />
        {nav === "statistics" ? (
          <Statistics data50={data50} data12={data12} lengths={db?.length} />
        ) : nav === "generate" ? (
          <Generate />
        ) : nav === "pairs" ? (
          <Pairs data50={data50} />
        ) : null}
      </div>
    </Window>
  ) : null;
}
