
import { Ball } from "../../../../components/buttons/Ball";
import { useSelector } from "react-redux";
import { RootState } from "../../../../context/redux/Store";
import { useState } from "react";
import { DetailedInstances } from "../../../../components/ui/popup/DetailedInstances";
import { DataWithDraw } from "../../../../context/redux/dbSlice";
import { NumberSelection } from "./NumberSelection";

export function Generate() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<DataWithDraw>({} as DataWithDraw);

  const data50 = useSelector((state: RootState) => state.database.data50);

  return (
    <>
      <NumberSelection
        min={2}
        max={6}
        setData={setData}
        setIsVisible={setIsVisible}
        data50={data50}
      />
      {isVisible ? (
        <DetailedInstances
          data={data}
          handleClose={() => setIsVisible(false)}
          db={data50}
        />
      ) : null}
    </>
  );
}
