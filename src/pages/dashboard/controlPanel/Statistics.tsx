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
  const firstSectionOfData = data50.filter((e, i) => i < 13);
  const secondSectionOfData = data50.filter((e, i) => i >= 13 && i < 26);
  const thirdSectionOfData = data50.filter((e, i) => i >= 26 && i < 39);
  const fourSectionOfData = data50.filter((e, i) => i >= 39);

  return (
    <>
      <div className={ctr.flex}>
        <NumberOccurs
          lp={1}
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={firstSectionOfData}
          lengths={lengths}
        />
        <NumberOccurs
          lp={14}
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={secondSectionOfData}
          lengths={lengths}
        />
        <NumberOccurs
          lp={27}
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={thirdSectionOfData}
          lengths={lengths}
        />
        <NumberOccurs
          lp={40}
          type="normal1"
          setIsPopupVisible={setIsPopupVisible}
          setDetailedData={setDetailedData}
          data={fourSectionOfData}
          lengths={lengths}
        />
        <Window>
          <div className={ctr.center}> Wystąpienia liczb 1 z 12 </div>
          <NumberOccurs
            lp={1}
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
          db={data50}
        />
      ) : null}
    </>
  );
}
