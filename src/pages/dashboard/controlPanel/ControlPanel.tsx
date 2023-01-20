import { Window } from "../../../components/windows/Window";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Statistics } from "./Statistics";
import { Generate } from "./generate/Generate";
import { useState } from "react";
import { Pairs } from "./Pairs";

export function ControlPanel() {
  const [nav, setNav] = useState("statistics");
  const db = useSelector((state: RootState) => state.database.value);
  const data50 = useSelector((state: RootState) => state.database.data50);
  const data12 = useSelector((state: RootState) => state.database.data12);

  return db.length > 0 ? (
    <Window shadow={true}>
      <Nav setNav={setNav} />
      {nav === "statistics" ? (
        <Statistics data50={data50} data12={data12} lengths={db?.length} />
      ) : nav === "generate" ? (
        <Generate />
      ) : nav === "pairs" ? (
        <Pairs db={db} data50={data50} />
      ) : null}
    </Window>
  ) : null;
}
