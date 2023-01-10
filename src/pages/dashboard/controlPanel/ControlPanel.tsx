import ctr from "./control.module.css";
import { WindowShadow } from "../../../components/windows/WindowShadow";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { NumberOccurs } from "../../../components/ui/tables/NumberOccurs";
import {
  howManyOccursVoid,
  sortedOccured,
} from "../../../context/hooks/functions";

export function ControlPanel() {
  const db = useSelector((state: RootState) => state.database.value);
  const data50: howManyOccursVoid[] = sortedOccured(50, "normal1", db);
  const data2: howManyOccursVoid[] = sortedOccured(12, "normal2", db);

  const firstSectionOfData = data50.filter((e, i) => i < 14);
  const secondSectionOfData = data50.filter((e, i) => i >= 14 && i < 28);
  const thirdSectionOfData = data50.filter((e, i) => i >= 28 && i < 42);
  const fourSectionOfData = data50.filter((e, i) => i >= 42);

  return (
    <WindowShadow>
      <Nav />
      <div className={ctr.flex}>
        <NumberOccurs data={firstSectionOfData} lengths={db.length} />
        <NumberOccurs data={secondSectionOfData} lengths={db.length} />
        <NumberOccurs data={thirdSectionOfData} lengths={db.length} />
        <NumberOccurs data={fourSectionOfData} lengths={db.length} />
        <NumberOccurs data={data2} lengths={db.length} />
      </div>
    </WindowShadow>
  );
}
