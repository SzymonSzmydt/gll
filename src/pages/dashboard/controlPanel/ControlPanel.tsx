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
  const db = useSelector((state: RootState) => state.database.value);

  const data: howManyOccursVoid[] = db
    ? arrayGenerator(50)
        .map((e: number) => howManyOccured(e, db))
        .sort((a, b) => b["date"].length - a["date"].length)
    : [];

  const firstSectionOfData = data.filter((e, i) => i <= 14);
  const secondSectionOfData = data.filter((e, i) => i > 14 && i < 28);
  const thirdSectionOfData = data.filter((e, i) => i > 28 && i < 42);
  const fourSectionOfData = data.filter((e, i) => i > 42);

  return (
    <WindowShadow>
      <Nav />
      <div className={ctr.flex}>
        <NumberOccurs data={firstSectionOfData} lengths={db.length} />
        <NumberOccurs data={secondSectionOfData} lengths={db.length} />
        <NumberOccurs data={thirdSectionOfData} lengths={db.length} />
        <NumberOccurs data={fourSectionOfData} lengths={db.length} />
      </div>
    </WindowShadow>
  );
}
