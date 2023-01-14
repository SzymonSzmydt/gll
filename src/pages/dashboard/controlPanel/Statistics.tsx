import ctr from "./control.module.css";
import { NumberOccurs } from "../../../components/ui/tables/NumberOccurs";
import { DetailedInstances } from "../../../components/ui/popup/DetailedInstances";
import { useState } from "react";
import { DataWithDraw } from "../../../context/redux/dbSlice";
import { Window } from "../../../components/windows/Window";

type StatisticsProps = {
  data50: DataWithDraw[];
  data12: DataWithDraw[];
  lengths: number;
};

export function Statistics({ data50, data12, lengths }: StatisticsProps) {
  const [detailedData, setDetailedData] = useState<DataWithDraw>(
    {} as DataWithDraw
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const firstSectionOfData = data50.filter((e, i) => i < 14);
  const secondSectionOfData = data50.filter((e, i) => i >= 14 && i < 28);
  const thirdSectionOfData = data50.filter((e, i) => i >= 28 && i < 42);
  const fourSectionOfData = data50.filter((e, i) => i >= 42);

  return (
    <>
      <div className={ctr.flex}>
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={firstSectionOfData}
          lengths={lengths}
        />
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={secondSectionOfData}
          lengths={lengths}
        />
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={thirdSectionOfData}
          lengths={lengths}
        />
        <NumberOccurs
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={fourSectionOfData}
          lengths={lengths}
        />
        <Window>
          Wystąpienia liczb 1 z 12
          <NumberOccurs
            type="normal2"
            setIsPopupVisible={setIsPopupVisible}
            setDetailedData={setDetailedData}
            data={data12}
            lengths={lengths}
          />
        </Window>
      </div>
      {isPopupVisible && detailedData ? (
        <DetailedInstances
          handleClose={() => setIsPopupVisible(false)}
          data={detailedData}
        />
      ) : null}
    </>
  );
}
