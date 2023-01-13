import { Window } from "../../../components/windows/Window";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { Statistics } from "./Statistics";
import {
  howManyOccursVoid,
  sortedOccured,
} from "../../../context/hooks/functions";

export function ControlPanel() {
  const db = useSelector((state: RootState) => state.database.value);
  const data50: howManyOccursVoid[] = sortedOccured(50, "normal1", db);
  const data12: howManyOccursVoid[] = sortedOccured(12, "normal2", db);

  return db.length > 0 ? (
    <Window shadow={true}>
      <Nav />
      <Statistics
        data50={data50}
        data12={data12}
        lengths={db?.length}
      />
    </Window>
  ) : null;
}
