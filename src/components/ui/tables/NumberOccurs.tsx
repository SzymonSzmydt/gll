import table from "./tables.module.css";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";
import { DataWithDraw } from "../../../context/redux/dbSlice";

type Props = {
  lp: number;
  type?: string;
  data: DataWithDraw[];
  lengths: number;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
  setDetailedData: Dispatch<SetStateAction<DataWithDraw>>;
};

const isLight1 = (n: number, db: number[]) =>
  db.includes(n) ? table.accent50 : table.tr;

const isLight2 = (n: number, db: number[]) =>
  db.includes(n) ? table.accent12 : table.tr;

export function NumberOccurs({
  lp,
  type,
  data,
  lengths,
  setIsPopupVisible,
  setDetailedData,
}: Props) {
  const lightBase1 = useSelector((state: RootState) => state.light.normal1);
  const lightBase2 = useSelector((state: RootState) => state.light.normal2);

  const isLight = (n: number) =>
    type === "normal1" ? isLight1(n, lightBase1) : isLight2(n, lightBase2);
  const handleClick = (item: DataWithDraw) => {
    setIsPopupVisible(true);
    setDetailedData(item);
  };
  const oldNum = (n: number) => (n >= 25 ? table.tdAccent : table.td);
  return (
    <table className={table.table}>
      <thead>
        <tr>
          <td className={table.tdHead}> Lp </td>
          <td className={table.tdHead}> nr </td>
          <td className={table.tdHead}> Wystąpienia </td>
          <td className={table.tdHead}> % </td>
          <td className={table.tdHead}> Ost. </td>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((e, i) => (
              <tr
                key={i}
                className={isLight(e.num)}
                onClick={() => handleClick(e)}
              >
                <td className={table.lp}> {lp + i} </td>
                <td className={table.td}>
                  <div className={table.ball}> {e.num} </div>
                </td>
                <td className={table.td}> {e["date"].length} </td>
                <td className={table.td}>
                  {`${((e["date"].length / lengths) * 100).toFixed()} %`}
                </td>
                <td className={oldNum(e["draw"][e.draw.length - 1])}>
                  {e["draw"].at(-1)}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
