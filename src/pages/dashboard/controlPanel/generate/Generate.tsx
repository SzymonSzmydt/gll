import gen from "./gen.module.css";
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
      <div className={gen.generate}>
        <NumberSelection
          min={3}
          max={7}
          setData={setData}
          setIsVisible={setIsVisible}
          data50={data50}
        />
        <NumberSelection
          min={7}
          max={10}
          setData={setData}
          setIsVisible={setIsVisible}
          data50={data50}
        />
      </div>
      <div className={gen.generate}>
        <NumberSelection
          min={10}
          max={13}
          setData={setData}
          setIsVisible={setIsVisible}
          data50={data50}
        />
        <NumberSelection
          min={13}
          max={20}
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
      </div>
    </>
  );
}
