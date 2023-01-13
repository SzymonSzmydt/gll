import table from "./tables.module.css";
import { howManyOccursVoid } from "../../../context/hooks/functions";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/Store";

type Props = {
  type?: string;
  data: howManyOccursVoid[];
  lengths: number;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
  setDetailedData: Dispatch<SetStateAction<howManyOccursVoid>>;
};

const isLight1 = (n: number, db: number[]) =>
  db.includes(n) ? table.accent50 : table.tr;

const isLight2 = (n: number, db: number[]) =>
  db.includes(n) ? table.accent12 : table.tr;

export function NumberOccurs({
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
  const handleClick = (item: howManyOccursVoid) => {
    setIsPopupVisible(true);
    setDetailedData(item);
  };
  return (
    <table className={table.table}>
      <thead>
        <tr>
          <td className={table.tdHead}> Liczba </td>
          <td className={table.tdHead}> Wystąpienia </td>
          <td className={table.tdHead}> Oscylacja </td>
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
                <td className={table.td}> {e.num} </td>
                <td className={table.td}> {e["date"].length} </td>
                <td className={table.td}>
                  {`${((e["date"].length / lengths) * 100).toFixed()} %`}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
