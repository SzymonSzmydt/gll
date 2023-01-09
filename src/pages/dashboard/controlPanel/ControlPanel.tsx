import ctr from "./control.module.css";
import { WindowShadow } from "../../../components/windows/WindowShadow";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { NumberOccurs } from "../../../components/ui/tables/NumberOccurs";
import { howManyOccursVoid } from "../../../context/hooks/functions";
import {
  arrayGenerator,
  howManyOccured,
} from "../../../context/hooks/functions";

export function ControlPanel() {
  const db = Object.values(
    useSelector((state: RootState) => state.database.value)
  );

  const data: howManyOccursVoid[] = db
    ? arrayGenerator(50).map((e: number) => howManyOccured(e, db))
    : [];

  const firstHalfOfData = data.filter((e, i) => i <= 25);
  const secondHalfOfData = data.filter((e, i) => i > 25);

  return (
    <WindowShadow>
      <Nav />
      <div className={ctr.flex}>
        <NumberOccurs data={firstHalfOfData} />
        <NumberOccurs data={secondHalfOfData} />
      </div>
    </WindowShadow>
  );
}
