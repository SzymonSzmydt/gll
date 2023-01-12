import ctr from "./control.module.css";
import { Window } from "../../../components/windows/Window";
import { Nav } from "./nav/Nav";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../context/redux/Store";
import { NumberOccurs } from "../../../components/ui/tables/NumberOccurs";
import { DetailedInstances } from "../../../components/ui/popup/DetailedInstances";
import {
  howManyOccursVoid,
  sortedOccured,
} from "../../../context/hooks/functions";

export function ControlPanel() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [detailedData, setDetailedData] = useState<howManyOccursVoid>(
    {} as howManyOccursVoid
  );

  const db = useSelector((state: RootState) => state.database.value);
  const data50: howManyOccursVoid[] = sortedOccured(50, "normal1", db);
  const data2: howManyOccursVoid[] = sortedOccured(12, "normal2", db);

  const firstSectionOfData = data50.filter((e, i) => i < 14);
  const secondSectionOfData = data50.filter((e, i) => i >= 14 && i < 28);
  const thirdSectionOfData = data50.filter((e, i) => i >= 28 && i < 42);
  const fourSectionOfData = data50.filter((e, i) => i >= 42);

  return db.length > 0 ? (
    <Window shadow={true}>
      <Nav />
      <div className={ctr.flex}>
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={firstSectionOfData}
          lengths={db.length}
        />
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={secondSectionOfData}
          lengths={db.length}
        />
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={thirdSectionOfData}
          lengths={db.length}
        />
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={fourSectionOfData}
          lengths={db.length}
        />
        <NumberOccurs
          type="normal2"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={data2}
          lengths={db.length}
        />
      </div>
      {isPopupVisible && detailedData ? (
        <DetailedInstances
          handleClose={() => setIsPopupVisible(false)}
          data={detailedData}
        />
      ) : null}
    </Window>
  ) : null;
}
